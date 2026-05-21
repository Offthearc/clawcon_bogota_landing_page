# Review — feature F04: Guests / Featured Games Section

**Verdict:** APPROVED

## Verification

- `vitest run`: PASS (45 tests across 6 files; 9 GuestsSection tests all green)
- `eslint`: PASS
- `prettier --check`: PASS (progress/ is now in .prettierignore)
- `typecheck (tsc)`: PASS
- `design:check`: PASS
- `./init.sh`: PASS (exit 0)

## Checkpoints

- C1: [x] — All base files present (AGENTS.md, init.sh, feature_list.json, progress/current.md, docs/*.md, DESIGN.md, CHECKPOINTS.md); ./init.sh exits 0.
- C2: [x] — F04 is the only in_progress feature; progress/current.md accurately describes the active session; all done features (F01, F02, F03, F07) have passing tests.
- C3: [x] — GuestsSection files land in src/components/GuestsSection/ (correct layer); no new runtime dependencies; no console.log, commented-out code, or TODOs found in src/components/GuestsSection/.
- C4: [x] — tests/GuestsSection.test.tsx has 9 tests; all use RTL queries (getByRole, getByRole('region'), getByRole('heading'), getByRole('list'), getByRole('listitem'), getByRole('img'), getByText); no data-testid; all 45 tests pass.
- C5: [x] — Untracked files in progress/ are legitimate session artifacts, not build output or logs; .gitignore covers the relevant directories; history.md exists.
- C6: [x] — tokens.css is in sync with DESIGN.md; no off-palette hex colors or off-token font-families in src/; GuestsSection.css uses only var(--color-*), var(--space-*), var(--rounded-*), var(--font-*), var(--font-size-*), var(--font-weight-*), var(--line-height-*). Card component uses --color-surface background, --color-on-surface text, --rounded-lg radius, --space-lg padding — matches DESIGN.md card spec.

## Notes

### DESIGN.md card conformance

The card spec in DESIGN.md specifies: surface background, on-surface text, lg radius, lg padding. The .guests__card rule at src/components/GuestsSection/GuestsSection.css lines 33–42 uses exactly those tokens. The additional border (1px solid var(--color-border)) is a structural decoration; DESIGN.md does not prohibit it, no border token exists, and the identical pattern was already accepted in AboutSection (review_about_section.md) and ScheduleSection (review_schedule_section.md).

### Hardcoded 1px border-width

src/components/GuestsSection/GuestsSection.css:34 uses border: 1px solid var(--color-border). This is the same pre-existing gap noted in review_about_section.md and review_schedule_section.md — no --border-width-* token exists in DESIGN.md, design_check.mjs does not enforce border-width tokenisation, and the pattern is consistent across all previously approved components. Not a regression introduced by F04.

### Avatar implementation

Avatar rendered as div[role="img"] with aria-label="Avatar for <name>" and aria-hidden initials span. This is correct and accessible for a placeholder (no real image assets). All 4 avatar roles are tested in tests/GuestsSection.test.tsx lines 80–94.

### Acceptance criteria coverage

1. At least 3 guest cards — 4 cards rendered (María García, Carlos Restrepo, Ana Martínez, Luisa Torres); tested by list item count >= 3.
2. Each card has name, role/description, and avatar placeholder — h3 heading per card, p role text, div[role="img"] with aria-label; all tested individually.
3. Accessible markup — section has aria-labelledby pointing to h2#guests-heading; ul has aria-label="Featured guests"; avatar divs have role="img" and descriptive aria-label; initials span is aria-hidden.
4. Responsive grid — 1-column at base, 2-column at min-width 480px, 4-column at min-width 900px via CSS Grid in GuestsSection.css.
5. Uses design tokens — confirmed; no hardcoded hex colors, no literal font-family values; design:check PASS.
