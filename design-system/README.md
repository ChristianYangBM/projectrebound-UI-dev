# Project Rebound design system

Status: **provisional / for client approval**  
Last updated: **October 26, 2026**

This directory is the shared visual source of truth for the Rebound landing page and future product interface. “Project Rebound” remains a working name. The system uses semantic tokens so the name, logo, and brand colors can change without requiring a component-by-component rewrite.

## Files

- `tokens.css` — production-ready color, typography, spacing, radius, elevation, motion, and layout tokens.
- `Rebound-Design-System.md` — the canonical human-readable specification and approval record.
- `client-approval/` — client-ready Word and PDF versions generated from the same approved content.

## Product direction

The current leading direction is **calm operational confidence**: deep forest establishes trust and focus, warm neutrals keep dense information readable, and signal lime is reserved for decisive actions and small moments of momentum. The product interface should use less lime than the marketing page.

## Implementation rules

1. Use semantic tokens such as `--pr-color-text` and `--pr-color-success`; do not reach for primitive hex values inside components.
2. Reserve lime for the primary action, selected states, and compact decision highlights. Never use it as a large background.
3. Keep product states separate from brand colors. Success, warning, error, and information each have distinct semantic tokens.
4. Pair every status color with text or an icon. Color must never be the only signal.
5. Use the 4px spacing rhythm and the provided radius scale before adding a new value.
6. Motion should clarify cause and effect, respect reduced-motion preferences, and stay under 200ms for routine interface feedback.

## Using the tokens

The application imports `tokens.css` before its page styles. New components should use tokens directly:

```css
.card {
  color: var(--pr-color-text);
  background: var(--pr-color-surface);
  border: 1px solid var(--pr-color-border);
  border-radius: var(--pr-radius-lg);
  box-shadow: var(--pr-shadow-sm);
}
```

## Change control

Update the canonical Markdown specification first. Then update `tokens.css`, regenerate the Word and PDF approval files, and verify the page at desktop and mobile widths. Material changes to brand colors, typefaces, decision semantics, or accessibility requirements should be recorded in the approval section.
