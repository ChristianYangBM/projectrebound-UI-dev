import 'dotenv/config'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'
import helmet from 'helmet'
import { rateLimit } from 'express-rate-limit'
import { createClient } from '@supabase/supabase-js'
import { z } from 'zod'

const app = express()
const port = Number(process.env.PORT || 3000)
const dirname = path.dirname(fileURLToPath(import.meta.url))
const distPath = path.resolve(dirname, '../dist')

app.set('trust proxy', 1)
app.use(helmet({ contentSecurityPolicy: false }))
app.use(express.json({ limit: '8kb' }))

const waitlistLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 8,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  message: { message: 'Too many attempts. Please try again in a few minutes.' },
})

const signupSchema = z.object({
  email: z.string().trim().toLowerCase().email().max(254),
  source: z.enum(['hero', 'early_access', 'landing_page']).default('landing_page'),
  marketingConsent: z.literal(true),
  company: z.string().max(0).optional().default(''),
})

function getSupabase() {
  const url = process.env.SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !serviceRoleKey) return null
  return createClient(url, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  })
}

app.post('/api/waitlist', waitlistLimiter, async (request, response) => {
  const result = signupSchema.safeParse(request.body)
  if (!result.success) {
    return response.status(400).json({ message: 'Please check your email and consent, then try again.' })
  }

  const supabase = getSupabase()
  if (!supabase) {
    return response.status(503).json({ message: 'Early access signups are not connected yet. Please check back soon.' })
  }

  const { error } = await supabase.from('waitlist_signups').insert({
    email: result.data.email,
    source: result.data.source,
    marketing_consent: result.data.marketingConsent,
  })

  if (error && error.code !== '23505') {
    console.error('Waitlist signup error:', error.code)
    return response.status(500).json({ message: 'We couldn’t complete that request. Please try again.' })
  }

  // A duplicate returns the same response to avoid exposing registration status.
  return response.status(200).json({ ok: true })
})

app.get('/api/health', (_request, response) => response.json({ ok: true }))
app.use(express.static(distPath, { index: false, maxAge: '1h' }))
app.get('*path', (_request, response) => response.sendFile(path.join(distPath, 'index.html')))

app.listen(port, () => console.log(`Rebound listening on port ${port}`))
