# Review — feature F07: Navigation Bar

**Verdict:** CHANGES_REQUESTED

## Verification

- `vitest run`: PASS
- `eslint`: PASS
- `prettier --check`: FAIL
- `typecheck (tsc)`: PASS
- `design:check`: PASS
- `./init.sh`: PASS

## Checkpoints

- C1: [x]
- C2: [ ] ← Reason: `feature_list.json` marks F07 as `done` but review has not approved it; the reviewer gate exists precisely to validate before closing.
- C3: [ ] ← Reason 1: `src/components/NavBar/NavBar.css` line 15 hardcodes `max-width: 1200px` — `docs/architecture.md` §3/§6 explicitly names a `--layout-max-width` token for this value; no such token exists in `src/theme/tokens.css` and none was requested from the designer. Reason 2: `NavBar.css` line 53 uses `height: 2px` for the hamburger bar — an off-scale spacing value not present in the token scale (xs=4px, sm=8px, …); conventions.md says "Never hardcode … spacing".
- C4: [ ] ← Reason: `tests/NavBar.test.tsx` does not assert `#footer` is present in the nav, matching the missing implementation (see C6). The test only checks `#hero`, `#about`, `#schedule`, `#guests`, `#register`.
- C5: [ ] ← Reason: `progress/impl_navigation.md` fails `npx prettier --check .` — the implementer left the file with formatting issues, which causes the mandatory prettier gate to fail.
- C6: [ ] ← Reason 1: `docs/architecture.md` FR-7 requires anchor links to `#hero`, `#about`, `#schedule`, `#guests`, `#register`, \*\*and `#footer``. `src/components/NavBar/NavBar.tsx` `NAV_LINKS`array (lines 10-16) omits`#footer`. Reason 2: `DESIGN.md` `components.nav`specifies "Active link or hover state uses`accent`underline" —`src/components/NavBar/NavBar.css`line 94-96 implements`color: var(--color-accent)` on hover instead of an underline decoration; the design intent is not met.

## Required changes (if CHANGES_REQUESTED)

1. **Missing `#footer` nav link** (`src/components/NavBar/NavBar.tsx`, line 10-16): Add `{ label: 'Footer', href: '#footer' }` (or an equivalent label) to the `NAV_LINKS` array so the nav links to all six sections as required by FR-7.

2. **Missing `#footer` test assertion** (`tests/NavBar.test.tsx`, `renders all section anchor links in the DOM` test, around line 21-31): Add `expect(hrefs).toContain('#footer')` to assert the footer anchor link is present.

3. **Hardcoded `max-width: 1200px`** (`src/components/NavBar/NavBar.css`, line 15): Replace with `var(--layout-max-width)` and request the designer add `--layout-max-width: 1200px` to the token set, OR ask the designer to add a `layout` section to `DESIGN.md` so the token is generated into `src/theme/tokens.css`. Do not hand-edit `tokens.css`.

4. **Hardcoded `height: 2px`** (`src/components/NavBar/NavBar.css`, line 53): Replace with a CSS token. The value `2px` is off-scale (the spacing scale starts at `--space-xs: 4px`). Request the designer add a `border` or `stroke` token to `DESIGN.md` at the appropriate value, then use `var(--<new-token>)` here.

5. **Hover underline vs. colour** (`src/components/NavBar/NavBar.css`, lines 94-96): `DESIGN.md` `nav` component specifies "Active link or hover state uses `accent` underline". Change the hover rule to apply `text-decoration: underline; text-decoration-color: var(--color-accent);` (and optionally retain the colour change) to match the specified design intent.

6. **Prettier failure** (`progress/impl_navigation.md`): Run `npx prettier --write progress/impl_navigation.md` to reformat the file so `npx prettier --check .` exits 0.
