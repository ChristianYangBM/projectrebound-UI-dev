# Rebound Landing Page

A conversion-focused pre-launch site for Rebound, the planned book scanning, inventory management, and resale platform. The frontend uses Vue 3, TypeScript, and Vite. A small Express server provides a protected waitlist endpoint for Railway and writes to Supabase from the server only.

## Local development

Requirements: Node.js 20.19 or newer.

```bash
npm install
cp .env.example .env
npm run dev
```

Vite serves the frontend on `http://localhost:5173`. To exercise the waitlist endpoint locally, configure `.env`, build the frontend, and run the server:

```bash
npm run build
npm start
```

The production-style server uses `PORT` or defaults to `3000`.

## Environment variables

| Variable | Scope | Purpose |
| --- | --- | --- |
| `PORT` | Server | Railway supplies this automatically in production. |
| `SUPABASE_URL` | Server only | Supabase project URL for the selected environment. |
| `SUPABASE_SERVICE_ROLE_KEY` | Server only | Inserts waitlist records while RLS blocks browser access. Never prefix with `VITE_`. |

Use separate Supabase projects and Railway environment variable sets for Dev and Prod. Never reuse the production service-role key in local examples, browser code, or CI logs.

## Supabase setup

1. Create or select the correct Dev Supabase project.
2. Run `supabase/migrations/202610260001_create_waitlist_signups.sql` through the Supabase CLI or SQL editor.
3. Confirm RLS is enabled and that the `anon` and `authenticated` roles cannot read or write `public.waitlist_signups`.
4. Add the Dev `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` to your local `.env`.
5. Repeat against Prod only through the approved production migration process.

The endpoint normalizes emails, requires explicit consent, rate-limits by IP, rejects a hidden honeypot field, and returns the same success response for new and duplicate addresses to avoid email enumeration. The database unique constraint provides the final duplicate safeguard.

## Railway deployment

Create a Railway service connected to the repository and set:

- Build command: `npm ci && npm run build`
- Start command: `npm start`
- Healthcheck path: `/api/health`
- Required variables: `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`

Deploy Dev and verify the waitlist flow before promoting the same source revision to Prod. This repository does not modify production infrastructure automatically.

## Testing

```bash
npm test
npm run build
```

The component tests cover invalid email handling, explicit consent, confirmed success, and safe failure behavior.

## Security notes

- The service-role key exists only in the Node server environment.
- Browser clients never communicate directly with the waitlist table.
- RLS is forced and no public policies are defined.
- Rate limiting and a honeypot provide baseline abuse resistance. For a high-volume public launch, add an edge/WAF challenge such as Cloudflare Turnstile before opening signups broadly.
- A real Privacy Policy and approved contact address are intentionally left as placeholders.
