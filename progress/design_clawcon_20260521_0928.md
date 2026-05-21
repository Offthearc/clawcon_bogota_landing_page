# Design Progress — ClawCon Bogota

**Timestamp:** 2026-05-21 09:28
**Agent:** designer
**Status:** complete — `node scripts/design_check.mjs` passes

## Theme direction

A bold Latin American festival aesthetic grounded in deep emerald green
(`#1B6B3A`) as the primary brand color, paired with warm gold (`#D4A017`) as
the accent for calls-to-action and highlights. Dark forest-green surfaces
(`#0E2A1A`) anchor the hero and footer sections; cream-tinted warm whites
(`#FAF8F2`) provide the body reading surface. The combination evokes
Colombian energy, natural richness, and the celebratory feel of a convention
without resorting to generic "gamer dark" purple/black cliches.

## Token summary

### Palette (13 color tokens)
- `primary` #1B6B3A — emerald green (brand, buttons, active states)
- `on-primary` #FFFFFF
- `primary-dark` #134E2B — hover/active + avatar fill
- `accent` #D4A017 — warm gold (CTAs, highlights)
- `on-accent` #1A1200 — dark near-black for gold contrast
- `surface` #FAF8F2 — warm off-white body background
- `on-surface` #1C1A14 — warm near-black body text
- `surface-variant` #EFEBE0 — deeper cream for alternating sections
- `on-surface-variant` #5A5646 — muted secondary text
- `dark-surface` #0E2A1A — deep forest green (hero, footer, CTA section)
- `on-dark-surface` #F5F0E8 — cream-white on dark
- `border` #D6CFBA — warm subtle divider
- `danger` / `success` — state-only, not decorative

### Type scale (7 typography tokens)
- `display` — Bebas Neue 72px, line-height 1.0 — hero event title
- `heading` — Playfair Display 36px bold — section headings
- `subheading` — Playfair Display 24px semi-bold
- `sans` — Inter 16px — body copy
- `sans-bold` — Inter 16px bold — button labels
- `label` — Inter 13px medium, letter-spacing 0.06em — badges, metadata
- `mono` — ui-monospace 14px — reserved

### Spacing scale (7 steps): xs 4px → sm 8px → md 16px → lg 24px → xl 40px → 2xl 64px → 3xl 96px

### Rounded scale (6 steps): none 0 → sm 4px → md 8px → lg 16px → xl 24px → full 9999px

### Components (13 tokens)
All 7 feature-list UI surfaces are covered:
- `nav` (F07 NavBar)
- `hero` (F01 HeroSection)
- `section-light`, `section-tinted`, `section-dark` (F02 About, F03 Schedule, F05 Registration)
- `stat-badge` (F02 key stats)
- `schedule-item` (F03 activity cards)
- `card`, `card-dark` (F03, F04 GuestsSection)
- `avatar-placeholder` (F04 GuestCard)
- `button-primary`, `button-accent`, `button-outline` (F01, F05 CTAs)
- `footer` (F06 Footer)

## Generated file
`src/theme/tokens.css` — regenerated and verified in sync.

## Assumptions
- Google Fonts imports (Bebas Neue, Playfair Display, Inter) will be added
  by the implementer in `index.html` or `index.css` — the font names are
  declared as token values so `design_check.mjs` will allow them.
- A `--layout-max-width: 1200px` utility is expected to be set in `App.css`
  as a CSS custom property (not a design token, but a layout utility). The
  implementer should add this alongside their global resets.

## Open questions
- None blocking. Event dates (August 2026), venue, and guest names are static
  content owned by the implementer — no design decision required.
