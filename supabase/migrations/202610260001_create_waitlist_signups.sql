create extension if not exists pgcrypto;

create table if not exists public.waitlist_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  created_at timestamptz not null default now(),
  source text not null default 'landing_page',
  marketing_consent boolean not null default false,
  constraint waitlist_email_normalized check (email = lower(trim(email))),
  constraint waitlist_email_length check (char_length(email) between 3 and 254),
  constraint waitlist_email_unique unique (email),
  constraint waitlist_source_length check (char_length(source) between 1 and 64)
);

create index if not exists waitlist_signups_created_at_idx
  on public.waitlist_signups (created_at desc);

alter table public.waitlist_signups enable row level security;
alter table public.waitlist_signups force row level security;

-- No anonymous or authenticated policies are created. The Railway server writes
-- through the service role, which bypasses RLS. Browser clients cannot read or
-- write this table directly.
revoke all on table public.waitlist_signups from anon, authenticated;
