# Review — feature F03: Schedule / Activities Section

**Verdict:** APPROVED

## Verification

- `vitest run`: PASS (36 tests across 5 files, including 7 new ScheduleSection tests)
- `eslint`: PASS
- `prettier --check`: PASS
- `typecheck (tsc)`: PASS
- `design:check`: PASS
- `./init.sh`: PASS

## Checkpoints

- C1: [x] — All base files present; DESIGN.md exists; `./init.sh` exits 0.
- C2: [x] — F03 is the only feature that was `in_progress`; `progress/current.md` accurately describes the active session; all `done` features have passing tests.
- C3: [x] — Files land in `src/components/ScheduleSection/` (correct layer); no new runtime dependencies; no `console.log`, commented-out code, or TODOs.
- C4: [x] — `tests/ScheduleSection.test.tsx` has 7 tests; all use RTL queries (getByRole, getByText); all 36 tests pass.
- C5: [x] — No suspicious untracked files; `progress/history.md` exists; F03 is reflected as `done` in `feature_list.json`.
- C6: [x] — `tokens.css` is in sync with `DESIGN.md`; no off-palette hex colors or off-token font-families detected anywhere in `src/`; ScheduleSection uses only `var(--color-*)`, `var(--space-*)`, `var(--rounded-*)`, and `var(--font-*)` tokens.

## Notes

### Hardcoded `1px` in border shorthand

`src/components/ScheduleSection/ScheduleSection.css:34` uses `border: 1px solid var(--color-border)`. This is a bare pixel value rather than a token. However:
- The identical pattern (`border: 1px solid var(--color-border)`) was already present and approved in `src/components/AboutSection/AboutSection.css:44`.
- The design_check script does not enforce border-width tokenisation (it only catches hex colors and literal font-family values).
- No `--border-width-*` token is defined in `DESIGN.md` or `tokens.css`, so there is no token available to use.

This is a pre-existing gap in the design system, not a regression introduced by F03. A future designer pass should add a `border-width` token group to `DESIGN.md`.

### Acceptance criteria coverage

All 5 F03 acceptance criteria are satisfied and tested:
1. At least 4 activity/schedule items — 4 items rendered; tested by `renders at least 4 schedule items`.
2. Each item has title, time/day, and description — verified per-item in 4 dedicated tests.
3. Accessible list or grid markup — `<ul aria-label="Event schedule">` with `<li>` items; section has `aria-labelledby`; tested via `getByRole('list')` and `getByRole('region')`.
4. Responsive: stacked on mobile, grid on desktop — 1-column grid at base, 2-column at `min-width: 640px`.
5. Uses design tokens — confirmed; no hardcoded hex, no literal font-family, all layout values via `var(--*)`.

### Component structure and accessibility

- `<section id="schedule" aria-labelledby="schedule-heading">` — correct landmark with nav-anchor target.
- `<h2>` heading with matching `id`; `<h3>` per card — proper heading hierarchy.
- `aria-hidden="true"` on the separator span `·` prevents screen reader noise.
- No `data-testid` used; all tests query by role, heading, or visible text.
