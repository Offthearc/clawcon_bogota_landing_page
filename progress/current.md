Feature in progress: F07 — Navigation Bar (fix pass)

Plan:

- Add `#footer` entry to `NAV_LINKS` in `src/components/NavBar/NavBar.tsx`
- Add `expect(hrefs).toContain('#footer')` assertion to `tests/NavBar.test.tsx`
- Replace hardcoded `max-width: 1200px` with `var(--layout-max-width)` in `NavBar.css`
- Replace hardcoded `height: 2px` with `var(--border-width-thin)` in `NavBar.css`
- Fix hover style in `NavBar.css` to use accent underline per DESIGN.md
