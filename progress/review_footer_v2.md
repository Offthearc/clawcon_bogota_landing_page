# Review — feature F06: Footer (v2)

**Verdict:** APPROVED

## Verification

- `vitest run`: PASS (60/60 tests, 8 test files)
- `eslint`: PASS
- `prettier --check`: PASS
- `typecheck (tsc)`: PASS
- `design:check`: PASS
- `./init.sh`: PASS ([OK] Environment ready)

## Token Verification

`src/theme/tokens.css` now contains all four previously-missing tokens:
- `--color-dark-surface: #0E2A1A` (line 14)
- `--color-on-dark-surface: #F5F0E8` (line 15)
- `--border-width-thin: 1px` (line 41)
- `--layout-max-width: 72rem` (line 43)

`src/components/Footer/Footer.css` uses only CSS custom properties — no hardcoded
hex values, pixel literals, or raw color values found.

## Checkpoints

- C1: [x]
- C2: [x] — F06 is `done`; no other feature `in_progress`
- C3: [x] — Footer lives in `src/components/Footer/`, no stray debug statements
- C4: [x] — `tests/Footer.test.tsx` has 8 tests, all RTL role/label queries, all green
- C5: [x] — No suspicious untracked files
- C6: [x] — `DESIGN.md` tokens in sync; `Footer.css` uses `var(--color-dark-surface)`,
             `var(--color-on-dark-surface)`, `var(--border-width-thin)` (top border),
             `var(--layout-max-width)` — matches DESIGN.md `footer` component spec exactly

## Acceptance Criteria (F06)

1. [x] Event name "ClawCon Bogota" displayed in `.footer__brand > .footer__event-name`; copyright paragraph present
2. [x] Instagram, Twitter/X, Facebook links with `aria-label` attributes providing accessible names
3. [x] `<a href="mailto:info@clawconbogota.com">` contact email link present
4. [x] `<footer id="footer">` is a proper HTML landmark element; social links wrapped in `<nav aria-label="Social media links">`
5. [x] All colors, spacing, typography, radius, border-width, and max-width use `var(--*)` tokens; design:check passes
