# Design Token Fix — Missing CSS Custom Properties

Date: 2026-05-21

## Problem

Four CSS custom properties referenced in component stylesheets were not defined
in `DESIGN.md`'s YAML front matter and therefore absent from the generated
`src/theme/tokens.css`:

- `--color-dark-surface` — used in NavBar, HeroSection, Footer backgrounds
- `--color-on-dark-surface` — text/icon color on dark-background sections
- `--border-width-thin` — 1px rule line used in NavBar bottom border and Footer top border
- `--layout-max-width` — 72rem container constraint used in NavBar, HeroSection, Footer

## Changes Made

### `DESIGN.md` (YAML front matter)

- Added `dark-surface: '#0E2A1A'` and `on-dark-surface: '#F5F0E8'` to the
  `colors` section (deep forest green / warm off-white from original ClawCon design).
- Added new `border-width` section with `thin: 1px`.
- Added new `layout` section with `max-width: 72rem`.
- Added `navbar`, `hero`, and `footer` component token entries referencing the
  new tokens.
- Updated markdown body (Colors, Layout, Elevation & Depth, Components sections)
  to document the new tokens.

### `scripts/design_check.mjs`

Extended `generateTokensCss()` to emit `--border-width-*` properties from a
`border-width` YAML section, and `--layout-*` properties from a `layout` YAML
section. Without this, the script silently ignored those YAML keys.

## Verification

- `npm run design:tokens` — regenerated `src/theme/tokens.css` successfully.
- `npm run design:check` — tokens.css in sync, no off-palette colors or off-token fonts.
- `./init.sh` — all 60 tests pass, full suite green.

## Generated tokens (new additions)

```css
--color-dark-surface: #0E2A1A;
--color-on-dark-surface: #F5F0E8;
--border-width-thin: 1px;
--layout-max-width: 72rem;
```
