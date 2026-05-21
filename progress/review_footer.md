# Review — feature F06: footer_section

**Verdict:** CHANGES_REQUESTED

## Verification

- `vitest run`: PASS (60 tests, 8 test files)
- `eslint`: PASS
- `prettier --check`: PASS
- `typecheck (tsc)`: PASS
- `design:check`: PASS
- `./init.sh`: PASS

## Checkpoints

- C1: [x] — Base files exist, docs exist, DESIGN.md exists, init.sh exits 0.
- C2: [x] — F06 is the only in_progress feature; all done features have passing tests; current.md reflects the active session.
- C3: [x] — Footer.tsx lives in src/components/Footer/ (correct layer); no unjustified runtime dependencies; no console.log statements or commented-out code.
- C4: [x] — tests/Footer.test.tsx has 8 tests covering all acceptance criteria; queries use getByRole/getByText; 60 tests green.
- C5: [x] — No suspicious untracked files; current.md describes the F06 session.
- C6: [ ] — FAIL. src/components/Footer/Footer.css references CSS custom properties that are not defined in DESIGN.md front matter or src/theme/tokens.css:
  - `--color-dark-surface` (lines 2, 27, 41, 66, 86) — not in tokens.css
  - `--color-on-dark-surface` (lines 3, 27, 41, 52, 66, 76, 86) — not in tokens.css
  - `--border-width-thin` (line 5) — not in tokens.css
  At runtime, these resolve to empty/initial values (transparent background, inherited text color). The footer's dark-surface background does not render. docs/architecture.md Principle 2 states: "All colors, spacing, radius, and typography come from DESIGN.md via the generated src/theme/tokens.css custom properties." docs/conventions.md states: "Use the CSS custom properties generated from DESIGN.md." These tokens are not generated from DESIGN.md — they do not exist in DESIGN.md's YAML front matter.

## Required changes (if CHANGES_REQUESTED)

1. Add `dark-surface` and `on-dark-surface` color tokens to the `colors` section of DESIGN.md's YAML front matter (e.g. `dark-surface: '#0E2A1A'` and `on-dark-surface: '#F5F0E8'` based on the designer's original values in commit 7c165de), and add `border-width.thin: 2px` to a `border-width` section. Regenerate `src/theme/tokens.css` with `npm run design:tokens`. This makes the tokens real design-system tokens, not undefined variable references.

2. Alternatively, if the dark-surface styling is intentional and the existing approved tokens in tokens.css are sufficient, rewrite Footer.css to use only defined tokens: replace `var(--color-dark-surface)` with `var(--color-on-surface)` or another defined color token, replace `var(--color-on-dark-surface)` with `var(--color-surface)` or defined alternative, and replace `var(--border-width-thin)` with `var(--space-xs)` (4px) or an explicit value added as a proper token to DESIGN.md.

3. The `--layout-max-width` on Footer.css line 9 already has a CSS fallback (`var(--layout-max-width, 72rem)`) and is not a blocking issue, but it should also be added to DESIGN.md/tokens.css for consistency.

Note: The same undefined-token pattern exists in NavBar.css (previously approved). That is a pre-existing defect. The correct action is to fix the tokens in DESIGN.md so that all consumers — NavBar, HeroSection, and Footer — resolve properly, not to approve further components that depend on undefined tokens.
