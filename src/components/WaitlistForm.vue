<script setup lang="ts">
import { computed, ref } from 'vue'

const props = withDefaults(defineProps<{ compact?: boolean; source?: string }>(), {
  compact: false,
  source: 'landing_page',
})

type FormState = 'idle' | 'loading' | 'success' | 'error'

const email = ref('')
const consent = ref(false)
const company = ref('')
const state = ref<FormState>('idle')
const message = ref('')

const buttonText = computed(() => {
  if (state.value === 'loading') return 'Joining…'
  return props.compact ? 'Get Early Access' : 'Join the Waitlist'
})

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

async function submit() {
  const normalizedEmail = email.value.trim().toLowerCase()

  if (!isValidEmail(normalizedEmail)) {
    state.value = 'error'
    message.value = 'Enter a valid email address to continue.'
    return
  }

  if (!consent.value) {
    state.value = 'error'
    message.value = 'Please confirm that you’d like to receive Rebound updates.'
    return
  }

  state.value = 'loading'
  message.value = ''

  try {
    const response = await fetch('/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: normalizedEmail,
        marketingConsent: consent.value,
        source: props.source,
        company: company.value,
      }),
    })

    const data = await response.json().catch(() => ({}))
    if (!response.ok) throw new Error(data.message || 'Unable to join right now.')

    state.value = 'success'
    message.value = "Thanks for joining the Rebound waitlist. We’ll keep you updated as we get closer to launch."
    email.value = ''
    consent.value = false
  } catch (error) {
    state.value = 'error'
    message.value = error instanceof Error ? error.message : 'Something went wrong. Please try again.'
  }
}
</script>

<template>
  <form class="waitlist-form" :class="{ compact }" novalidate @submit.prevent="submit">
    <div v-if="state === 'success'" class="success-panel" role="status">
      <span class="success-icon">✓</span>
      <div>
        <strong>You’re on the list!</strong>
        <p>{{ message }}</p>
      </div>
    </div>

    <template v-else>
      <div class="form-row">
        <label class="sr-only" :for="`email-${source}`">Email address</label>
        <span class="input-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M4 6.75h16v10.5H4zM4.5 7.25 12 13l7.5-5.75" /></svg>
        </span>
        <input :id="`email-${source}`" v-model="email" type="email" inputmode="email" autocomplete="email" placeholder="you@example.com" :aria-invalid="state === 'error'" required />
        <input v-model="company" class="honeypot" type="text" name="company" tabindex="-1" autocomplete="off" aria-hidden="true" />
        <button type="submit" :disabled="state === 'loading'">
          <span v-if="state === 'loading'" class="spinner" aria-hidden="true"></span>
          {{ buttonText }}
          <span v-if="state !== 'loading'" aria-hidden="true">→</span>
        </button>
      </div>

      <label class="consent-row">
        <input v-model="consent" type="checkbox" />
        <span>Send me product updates and launch announcements. I can unsubscribe anytime.</span>
      </label>
      <p class="form-status" :class="state" aria-live="polite">{{ message }}</p>
    </template>
  </form>
</template>
