# Implementation: F04 — Guests / Featured Games Section

## Files created or modified

- `src/components/GuestsSection/GuestsSection.tsx` — New component rendering a section with id="guests", an h2 heading, and a `<ul>` of 4 guest cards (name, role, avatar placeholder div with initials and aria-label).
- `src/components/GuestsSection/GuestsSection.css` — Styles using only design tokens; responsive grid (1 col → 2 col at 480px → 4 col at 900px); avatar uses `var(--color-primary)` background with `var(--rounded-full)` radius.
- `src/App.tsx` — Added `<GuestsSection />` import and rendered it below `<ScheduleSection />`.
- `tests/GuestsSection.test.tsx` — 9 tests covering: section id, accessible landmark/heading, list with ≥3 items, per-card name/role presence, and avatar aria-labels for all 4 guests.
- `feature_list.json` — Status updated from `pending` → `in_progress` → `done`.
- `progress/current.md` — Updated session log.

## Verification output (final run)

```
Tests  45 passed (45)    [6 test files]
lint   0 errors
prettier  All matched files use Prettier code style!
typecheck  0 errors
design:check  [OK] tokens.css in sync; no off-palette colors or fonts
init.sh  Environment ready.
```

## Decisions

- Avatar placeholder is a `div` with `role="img"` and `aria-label="Avatar for <name>"` to satisfy the accessible markup acceptance criterion without requiring actual images.
- Initials span inside the avatar carries `aria-hidden="true"` so it is not double-announced by screen readers.
- Responsive breakpoints (480px, 900px) follow the same convention as ScheduleSection and are expressed without off-scale values.
- Background for the guests section uses `var(--color-surface-variant)` to visually separate it from the adjacent ScheduleSection which uses `var(--color-surface)`.
