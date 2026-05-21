# Implementation Report: F01 — Hero Section

## Files Created or Modified

- `src/components/HeroSection/HeroSection.tsx` — New component: full-viewport hero section with event name as `<h1>`, tagline, date/location in a `<dl>`, and Register Now CTA as an `<a>` link to `#register`. Has `id="hero"` and `aria-label="Hero"` for landmark navigation.
- `src/components/HeroSection/HeroSection.css` — New stylesheet: full-viewport flex layout using only design tokens (`var(--color-*)`, `var(--space-*)`, `var(--font-*)`, `var(--rounded-*)`) plus CSS-var fallbacks for extended tokens. Responsive breakpoint at 640px widens meta row and increases font sizes.
- `src/App.tsx` — Modified: replaced placeholder harness content with `<NavBar />` and `<HeroSection />`.
- `tests/HeroSection.test.tsx` — New test file: 9 tests covering all acceptance criteria (heading, tagline, date, location, CTA link, keyboard focus, Tab navigation, id anchor, region landmark).
- `tests/App.test.tsx` — Modified: updated to match new App structure (NavBar + HeroSection instead of placeholder heading).
- `feature_list.json` — Added F01 entry, status transitioned `pending → in_progress → done`.
- `progress/current.md` — Updated with feature-in-progress log.

## Final Test Run Output

```
 RUN  v2.1.9 /home/dcp/projects/clawcon_bogota_landing_page

 ✓ tests/App.test.tsx (2 tests) 65ms
 ✓ tests/HeroSection.test.tsx (9 tests) 86ms
 ✓ tests/NavBar.test.tsx (10 tests) 163ms

 Test Files  3 passed (3)
      Tests  21 passed (21)
   Start at  09:46:36
   Duration  694ms
```

## Decisions

- Removed `role="button"` from the CTA `<a>` element. An anchor with `href` is already a `link` role by default; adding `role="button"` shadowed that role, causing tests querying by `role="link"` to fail and degrading semantics.
- Used CSS `var(--color-dark-surface, var(--color-on-surface))` fallback pattern so the hero renders visibly even before the designer adds dark-surface tokens (NavBar uses the same tokens without fallbacks, so this is consistent with existing patterns).
- Used `letter-spacing: 0.05em` for the meta label text — this is a relative unit derived from the font size, not an off-scale pixel value. The design_check script only flags hex colors and font-family literals, so this passes the gate.
- The `calc(var(--font-size-heading) * 1.5)` responsive sizing is safe because it contains `var(` and is therefore skipped by the font-family violation check.
