## F07 — Navigation Bar: Implementation Report

### Files Created or Modified

| File                               | Change                                                                                                                                                                                         |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/hooks/useNavMenu.ts`          | New custom hook managing hamburger open/close state, Escape-key handling, and focus return to the toggle button                                                                                |
| `src/components/NavBar/NavBar.tsx` | New NavBar component: header landmark, logo link, hamburger button with aria-expanded, nav landmark with aria-label="Main", five section anchor links                                          |
| `src/components/NavBar/NavBar.css` | New styles using only design tokens; mobile-first with hamburger visible <640px, horizontal nav visible ≥640px; the `<nav>` is always in the DOM — only the `<ul>` collapses                   |
| `src/App.tsx`                      | Replaced placeholder scaffold with `<NavBar />` and placeholder section stubs (`#hero`, `#about`, `#schedule`, `#guests`, `#register`) inside a `<main>` landmark                              |
| `src/index.css`                    | Added `scroll-behavior: smooth` inside a `@media (prefers-reduced-motion: no-preference)` guard                                                                                                |
| `tests/NavBar.test.tsx`            | New test file: 10 tests covering nav landmark, logo, all five anchor hrefs, hamburger aria-expanded toggle, Escape-to-close with focus return, link-click closes menu, aria-controls reference |
| `tests/App.test.tsx`               | Updated to match the new App content (nav landmark + main landmark instead of old scaffold heading)                                                                                            |

### Verification output (final run)

```
── 1. Verifying toolchain ──────────────────────────────
[OK]    node -> v26.1.0
[OK]    npm  -> 11.14.1
[OK]    Node version supported
[OK]    Dependencies installed

── 2. Verifying harness base files ─────────────────────
[OK]    Exists AGENTS.md
[OK]    Exists feature_list.json
[OK]    Exists progress/current.md
[OK]    Exists docs/architecture.md
[OK]    Exists docs/conventions.md
[OK]    Exists docs/verification.md
[OK]    Exists CHECKPOINTS.md

── 3. Validating feature_list.json ─────────────────────
[OK]    feature_list.json valid (8 features)

── 4. Verifying DESIGN.md conformance ──────────────────
[OK]    tokens.css is in sync with DESIGN.md.
[OK]    No off-palette colors or off-token fonts in src/.

── 5. Running tests ────────────────────────────────────
 ✓ tests/App.test.tsx (2 tests) 52ms
 ✓ tests/NavBar.test.tsx (10 tests) 151ms
 Test Files  2 passed (2)
      Tests  12 passed (12)
[OK]    Tests pass

── 6. Summary ──────────────────────────────────────────
[OK]    Environment ready. You can start working.
```

### Decisions

1. **`<nav>` is never `display: none`** — the architecture requires accessibility landmarks always in the DOM. Only the `<ul>` within the nav is hidden on mobile. This lets `getByRole('navigation')` work in tests and keeps the landmark discoverable by screen readers at all viewport sizes.

2. **Smooth scroll guarded by `prefers-reduced-motion`** — applied via `@media (prefers-reduced-motion: no-preference)` as recommended by the architecture document.

3. **`@testing-library/user-event` added** — this dev dependency was missing from the scaffold but is required for realistic click/keyboard interaction testing per the conventions.

4. **Markdown files reformatted** — `DESIGN.md`, `docs/architecture.md`, `docs/verification.md`, and progress files were already failing `prettier --check` before this feature. They were formatted (no content changes) to satisfy the verification gate.

---

### Fix pass (reviewer feedback)

| Fix                                   | File                                                           | Change                                                                                             |
| ------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Add `#footer` nav link                | `src/components/NavBar/NavBar.tsx`                             | Added `{ label: 'Contact', href: '#footer' }` to `NAV_LINKS` array                                 |
| Add `#footer` test assertion          | `tests/NavBar.test.tsx`                                        | Added `expect(hrefs).toContain('#footer')` to anchor links test                                    |
| Replace hardcoded `max-width: 1200px` | `src/components/NavBar/NavBar.css`                             | Changed to `var(--layout-max-width)`                                                               |
| Replace hardcoded `height: 2px`       | `src/components/NavBar/NavBar.css`                             | Changed to `var(--border-width-thin)`                                                              |
| Fix hover underline style             | `src/components/NavBar/NavBar.css`                             | Added `text-decoration: underline; text-decoration-color: var(--color-accent);` per DESIGN.md spec |
| Fix Prettier formatting               | `progress/impl_navigation.md`, `progress/review_navigation.md` | Ran `npx prettier --write` on both files                                                           |

All verification commands pass after the fix pass:

- `npx vitest run`: 12/12 tests pass
- `npm run lint`: no errors
- `npx prettier --check .`: all files formatted
- `npm run typecheck`: no errors
- `npm run design:check`: tokens in sync, no off-palette values
- `./init.sh`: environment ready
