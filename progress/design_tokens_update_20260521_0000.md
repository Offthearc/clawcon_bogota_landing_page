# Design Tokens Update — 2026-05-21

## Changes

Two new token categories were added to `DESIGN.md` front matter and the
`scripts/design_check.mjs` generator was extended to emit them.

### `layout` section

- `layout.max-width: 1200px` → generates `--layout-max-width: 1200px`
- Use as `max-width: var(--layout-max-width)` on inner content wrappers.

### `border-width` section

- `border-width.thin: 2px` → generates `--border-width-thin: 2px`
- Use for hamburger bar lines, card outlines, dividers, and input borders.

## Script change

`scripts/design_check.mjs` `generateTokensCss()` was extended with two new
handlers:

- `tokens.layout` → emits `--layout-<name>` properties
- `tokens['border-width']` → emits `--border-width-<name>` properties

## Verification

`node scripts/design_check.mjs --write` succeeded; subsequent
`node scripts/design_check.mjs` exited 0 with no violations.
