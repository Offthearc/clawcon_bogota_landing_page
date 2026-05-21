# F03 — Schedule / Activities Section: Implementation Report

## Files created or modified

- `src/components/ScheduleSection/ScheduleSection.tsx` — New component. Renders a `<section id="schedule">` with `aria-labelledby` pointing to an `<h2>`. Four schedule items are defined as a typed constant array and rendered as an accessible `<ul>` with `aria-label="Event schedule"`. Each `<li>` contains an `<h3>` title, a `<p>` with day/time metadata, and a `<p>` description.
- `src/components/ScheduleSection/ScheduleSection.css` — New stylesheet. Uses only design tokens (`var(--color-*)`, `var(--space-*)`, `var(--rounded-*)`, `var(--font-*)`). Card backgrounds use `var(--color-surface-variant)`. Responsive grid: 1 column on mobile, 2 columns at `min-width: 640px`.
- `src/App.tsx` — Added import and `<ScheduleSection />` below `<AboutSection />`.
- `tests/ScheduleSection.test.tsx` — 7 tests covering: section id, accessible landmark/heading, list with ≥4 items, and each of the 4 activity cards (title, day, time, description).
- `progress/current.md` — Updated to reflect work in progress (Prettier also reformatted bullet list).
- `feature_list.json` — Status changed from `pending` → `in_progress` → `done`.

## Final test run output

```
 RUN  v2.1.9 /home/dcp/projects/clawcon_bogota_landing_page

 ✓ tests/AboutSection.test.tsx (8 tests) 81ms
 ✓ tests/App.test.tsx (2 tests) 79ms
 ✓ tests/ScheduleSection.test.tsx (7 tests) 110ms
 ✓ tests/HeroSection.test.tsx (9 tests) 97ms
 ✓ tests/NavBar.test.tsx (10 tests) 179ms

 Test Files  5 passed (5)
      Tests  36 passed (36)
```

All other checks also green: lint, prettier, typecheck, design:check, init.sh.

## Decisions

- The `schedule__card-sep` span (·) is marked `aria-hidden="true"` so screen readers read "Day 1 · 11:00" naturally without the separator character.
- Card `<h3>` headings give each item a proper heading hierarchy (section h2 → card h3) for accessible navigation.
- The grid goes from 1 column (mobile) to 2 columns at 640px, matching the existing AboutSection breakpoint pattern.
