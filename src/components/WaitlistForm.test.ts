import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import WaitlistForm from './WaitlistForm.vue'

describe('WaitlistForm', () => {
  afterEach(() => vi.restoreAllMocks())

  it('rejects an invalid email before making a request', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch')
    const wrapper = mount(WaitlistForm, { props: { source: 'hero' } })
    await wrapper.get('input[type="email"]').setValue('not-an-email')
    await wrapper.get('input[type="checkbox"]').setValue(true)
    await wrapper.get('form').trigger('submit')
    expect(wrapper.text()).toContain('Enter a valid email')
    expect(fetchSpy).not.toHaveBeenCalled()
  })

  it('requires explicit marketing consent', async () => {
    const wrapper = mount(WaitlistForm)
    await wrapper.get('input[type="email"]').setValue('reader@example.com')
    await wrapper.get('form').trigger('submit')
    expect(wrapper.text()).toContain('Please confirm')
  })

  it('shows the confirmed success state only after the endpoint succeeds', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(JSON.stringify({ ok: true }), { status: 200 }))
    const wrapper = mount(WaitlistForm, { props: { source: 'early_access' } })
    await wrapper.get('input[type="email"]').setValue('Reader@Example.com')
    await wrapper.get('input[type="checkbox"]').setValue(true)
    await wrapper.get('form').trigger('submit')
    await vi.waitFor(() => expect(wrapper.text()).toContain('You’re on the list!'))
    expect(fetch).toHaveBeenCalledWith('/api/waitlist', expect.objectContaining({ method: 'POST' }))
  })

  it('shows a safe server error without claiming signup success', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(JSON.stringify({ message: 'Please try again later.' }), { status: 503 }))
    const wrapper = mount(WaitlistForm)
    await wrapper.get('input[type="email"]').setValue('reader@example.com')
    await wrapper.get('input[type="checkbox"]').setValue(true)
    await wrapper.get('form').trigger('submit')
    await vi.waitFor(() => expect(wrapper.text()).toContain('Please try again later.'))
    expect(wrapper.text()).not.toContain('You’re on the list!')
  })
})
