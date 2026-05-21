# Review — feature F01: Hero Section

**Verdict:** APPROVED

## Verification

- `vitest run`: PASS
- `eslint`: PASS
- `prettier --check`: PASS
- `typecheck (tsc)`: PASS
- `design:check`: PASS
- `./init.sh`: PASS

## Checkpoints

- C1: [x] — AGENTS.md, init.sh, feature_list.json, progress/current.md all exist; all 3 docs exist; DESIGN.md exists; ./init.sh exits 0.
- C2: [x] — No feature is in_progress (F01 is now done, FDEPLOY is pending); all done features have passing tests; current.md reflects the active session.
- C3: [x] — HeroSection placed in src/components/HeroSection/ as specified. No unjustified runtime dependencies added. No console.log, commented-out code, or TODO stubs found.
- C4: [x] — tests/HeroSection.test.tsx has 9 tests; tests/App.test.tsx updated with 2 tests; all 21 tests green. Queries use getByRole, getByText (no data-testid abuse). Vitest shows > 0 tests, all green.
- C5: [x] — No suspicious untracked build artifacts. progress/current.md is consistent with F01. (progress/history.md not checked as a separate requirement; the impl log exists at impl_hero_section.md.)
- C6: [x] — DESIGN.md YAML front matter is valid and in sync with tokens.css (design:check passes). No off-palette hex colors in src/ outside tokens.css. HeroSection uses var(--color-primary), var(--color-on-primary), var(--color-on-surface), var(--color-surface), var(--space-_), var(--rounded-md), var(--font-sans), var(--font-heading), var(--font-size-_), var(--font-weight-_), var(--line-height-_) throughout. CTA matches button-primary spec (primary background, on-primary text, rounded-md, padding from spacing scale). The var(--color-dark-surface, var(--color-on-surface)) fallback pattern is acceptable since dark-surface tokens do not exist yet in DESIGN.md; the fallback resolves to a defined token.

## Notes

All acceptance criteria verified: heading renders at h1 level, tagline is present, date (August 16–17, 2026) and location (Bogotá, Colombia) are shown, CTA links to #register and is keyboard-navigable, section has id="hero" and region landmark with aria-label. No architecture violations, no style violations, no token violations.
