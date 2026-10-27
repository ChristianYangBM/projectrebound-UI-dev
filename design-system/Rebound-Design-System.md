# Rebound Product Design System

**Client approval draft · October 26, 2026**  
**Working product name:** Project Rebound  
**Status:** Provisional direction for review

## Executive summary

Rebound helps resellers turn product information into faster, more confident sourcing decisions. The design system therefore favors clarity, trust, and momentum over decoration. The proposed visual direction combines deep forest green, warm neutral surfaces, and a restrained signal-lime accent.

This system is intentionally brand-flexible. “Project Rebound” is a working name, and no final logo or permanent brand color has been assumed. Components consume semantic tokens—such as “primary action,” “success,” and “surface”—so a future brand decision can be applied centrally.

## Design principles

1. **Confidence before excitement.** Dense product and market information must feel dependable and easy to verify.
2. **One clear next action.** Each view should make its primary action obvious without turning the entire interface into an advertisement.
3. **Scan first, inspect second.** Strong hierarchy, compact labels, and consistent alignment let experienced users move quickly while details remain available.
4. **Color carries meaning carefully.** Status colors always include text or an icon and remain distinct from brand decoration.
5. **Built to change.** Semantic tokens protect the product UI while the final name, logo, and palette are decided.

## Proposed visual direction

### Leading palette

| Role | Token | Value | Intended use |
|---|---|---:|---|
| Deep forest | `forest-900` | `#11281C` | Dark sections, app chrome, high-emphasis surfaces |
| Primary forest | `forest-700` | `#173F2C` | Primary buttons, brand anchors, active navigation |
| Interactive forest | `forest-600` | `#235B40` | Hover states, emphasized text, focus-adjacent UI |
| Signal lime | `lime-400` | `#BFF26B` | Primary conversion action, selected state, compact decision chip |
| Soft lime | `lime-100` | `#E4F8C4` | Low-emphasis accent backgrounds and icon tiles |
| Canvas | `neutral-50` | `#F7F7F5` | Main page background |
| Surface | `neutral-0` | `#FFFFFF` | Cards, fields, panels |
| Primary text | `neutral-950` | `#121714` | Headlines and body text |
| Muted text | `neutral-500` | `#667069` | Supporting copy and metadata |
| Border | `neutral-200` | `#DDE2DE` | Dividers, controls, panel outlines |

### Why it fits

Forest green supports trust, focus, and responsible growth without leaning into generic finance blue. Signal lime communicates speed and opportunity, which matches the product’s “identify and act” workflow. Warm neutrals soften the interface and make long work sessions more comfortable.

### Marketing versus product

The landing page may use signal lime for its main waitlist action and expressive highlights. Inside the application, lime should occupy no more than a small portion of any view and should be reserved for action, selection, and high-confidence opportunity signals. Operational screens should be dominated by neutral surfaces and forest anchors.

## Semantic state colors

Brand and product states are separate. These colors remain meaningful even if the brand palette changes.

| State | Value | Usage |
|---|---:|---|
| Success | `#237A4B` | Completed workflows, healthy connection, validated result |
| Warning | `#A75F0D` | Review required, incomplete evidence, caution |
| Error | `#A33225` | Failed action, invalid input, destructive outcome |
| Information | `#326EA8` | Neutral system notice, educational guidance |

Proposed sourcing decisions should use a label and icon in addition to color: **Buy** uses the accent family, **Review** uses warning, and **Reject** uses error. Do not use red or green alone to communicate a decision.

## Typography

- **Primary family:** Manrope for display, interface, and body copy.
- **Data family:** DM Mono for compact codes, model identifiers, measurements, and system labels.
- **Default body:** 16px with approximately 1.6 line height.
- **Minimum routine interface text:** 12px. Smaller text is limited to nonessential labels in controlled product mockups.
- **Headlines:** restrained negative tracking, balanced wrapping, and sentence case.
- **Controls:** medium to bold weight; avoid all caps except short technical labels.

## Layout, spacing, and shape

- Use a 4px base spacing rhythm. Preferred steps are 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, and 120px.
- The marketing container is capped at 1180px with responsive side gutters.
- Application layouts should favor 8px and 12px internal gaps, 16–24px card padding, and 32–48px section separation.
- Radius scale: 6px for compact controls, 9px for buttons, 12px for cards, and 17px for major presentation surfaces.
- Shadows are reserved for elevation and temporary layers. Borders should do most structural work.

## Interaction and motion

- Routine hover and press feedback: 140–180ms.
- Entrances: up to 650ms only for marketing reveals; product workflows should be faster.
- Use the standard ease-out curve `cubic-bezier(0.23, 1, 0.32, 1)` for entrances and press recovery.
- Prefer opacity and transform animation. Avoid layout-shifting motion.
- Respect reduced-motion settings and preserve every action without animation.
- Focus rings must be visible on keyboard navigation and maintain at least a 3:1 contrast against adjacent colors.

## Component rules

### Buttons

Use one primary action per region. Forest is the dependable product default; lime is the high-attention conversion or decisive-action treatment. Secondary actions should use neutral surfaces and borders. Disabled controls must remain legible and must not rely on opacity alone when the state could be ambiguous.

### Forms

Labels remain visible whenever context may be lost. Error messaging appears next to the relevant field and explains how to recover. Email and consent patterns must work with keyboard, screen readers, autofill, and zoom at 200%.

### Cards and data panels

Cards use neutral surfaces, subtle borders, and consistent interior spacing. Important values are aligned and visually stronger than labels. Dense grids should provide a clear empty, loading, error, and stale-data state.

### Charts

Charts should use direct labels when space allows and never depend on hue alone. Forest, blue, amber, violet, teal, and neutral gray form the default categorical sequence; lime is reserved for a selected or recommended series. All charts require a text summary or accessible equivalent.

## Accessibility requirements

- Target WCAG 2.2 AA for the landing page and application.
- Body text and controls require at least 4.5:1 contrast; large text requires 3:1.
- Interactive targets should be at least 44×44px on touch screens.
- Every interaction must be available by keyboard with a visible focus state.
- Status, validation, and decisions must include text—not color alone.
- Support browser zoom, reduced motion, descriptive labels, and logical heading order.

## Brand flexibility and naming

Until naming is approved, public-facing copy may use “Project Rebound” as a working label. Avoid embedding the name in component filenames, analytics event structures, or color tokens. The final brand can update the wordmark and semantic brand tokens while the product’s status colors and layout behavior remain stable.

## Approval checklist

- [ ] Approve the forest, warm-neutral, and signal-lime direction.
- [ ] Approve Manrope and DM Mono as the initial type pairing.
- [ ] Approve the restrained use of lime inside the product interface.
- [ ] Approve the semantic status model for success, warning, error, and information.
- [ ] Approve the accessibility target of WCAG 2.2 AA.
- [ ] Confirm whether dark mode is required for the first product release.
- [ ] Confirm final product name and logo direction in a separate brand exercise.
- [ ] Confirm legal copy, privacy destination, and support contact before public launch.

### Decision record

**Client decision:** [ ] Approved  [ ] Approved with changes  [ ] Revisions requested  
**Notes:** _________________________________________________  
**Approved by:** ____________________  **Date:** ______________

## Governance

The repository version of this document is the canonical specification. Material changes begin here, are reflected in `tokens.css`, and are then regenerated into the client-facing Word and PDF files. Each release should verify responsive behavior, keyboard navigation, color contrast, and reduced-motion behavior before approval.
