# Verification — ClawCon Bogota Landing Page

> Golden rule: **the agent does not say "it works", it proves it**.
> Every feature ends with executable evidence, not assertions.

## Gate 0 — Environment (run first, always)

```bash
./init.sh
```

Expected: last line is `[OK] Environment ready`. If it is red, stop and fix
before any other verification step. This gate runs lint, typecheck,
design:check, and the full test suite in sequence.

---

## Verification levels

### Level 1 — Unit / component tests (mandatory)

Run the full suite and confirm 100% of tests pass:

```bash
npx vitest run
```

Expected: all test files report `PASS` with zero failures, zero skipped.

Per-feature expected tests:

| Feature | Test file                            | What it must assert                                                                                                                                            |
| ------- | ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| F01     | `tests/HeroSection.test.tsx`         | Renders `<h1>` with "ClawCon Bogota"; shows date string and location; CTA button has accessible name "Register Now" and is focusable                           |
| F02     | `tests/AboutSection.test.tsx`        | Renders a descriptive paragraph; renders at least 3 stat-fact items with non-empty label and value                                                             |
| F03     | `tests/ScheduleSection.test.tsx`     | Renders at least 4 schedule cards; each card has a title and a non-empty time/day and description                                                              |
| F04     | `tests/GuestsSection.test.tsx`       | Renders at least 3 guest cards; each card has a name heading and a description; avatar has non-empty alt text                                                  |
| F05     | `tests/RegistrationSection.test.tsx` | Renders a headline; CTA button has accessible name and an `href` attribute; button is keyboard-focusable                                                       |
| F06     | `tests/FooterSection.test.tsx`       | Renders `<footer>` landmark; contains a `mailto:` link; social links have accessible labels; copyright text is present                                         |
| F07     | `tests/NavBar.test.tsx`              | Renders `<nav>` with `aria-label`; all section anchor links are present; hamburger button toggles menu visibility; `aria-expanded` changes correctly on toggle |

### Level 2 — Static checks (mandatory)

Run each command and confirm zero errors:

```bash
npm run lint
```

Expected: no ESLint warnings or errors reported.

```bash
npx prettier --check .
```

Expected: `All matched files use Prettier code style!`

```bash
npm run typecheck
```

Expected: `tsc` exits 0 with no output (no type errors).

### Level 3 — Design conformance (mandatory for every UI feature)

```bash
npm run design:check
```

Expected: exits 0. Any failure means a component is using a hardcoded color,
off-token spacing, or a font family not declared in `DESIGN.md`. Fix by adding
the missing token via the designer, then re-run.

### Level 4 — Build check (required before FDEPLOY)

```bash
npm run build
```

Expected: Vite emits `dist/` with no TS errors, no rollup warnings about
missing modules, and a reasonable bundle size (index JS < 200 kB uncompressed
is a good heuristic for this site).

### Level 5 — Manual smoke test (recommended after each feature)

```bash
npm run dev
```

Checklist:

- [ ] NavBar is visible and fixed/sticky at the top; clicking each link
      smooth-scrolls to the correct section.
- [ ] On a 375 px viewport, NavBar shows the hamburger button and hides the
      link list; clicking the button opens the menu.
- [ ] Hero section fills the viewport; "Register Now" button is visible.
- [ ] About section stats are legible and laid out correctly at all breakpoints.
- [ ] Schedule section cards stack on mobile, form a grid on desktop.
- [ ] Guests section cards stack on mobile, form a grid on desktop.
- [ ] Registration CTA section background is visually distinct from adjacent sections.
- [ ] Footer contains social links, email link, and copyright.
- [ ] Tab-key traversal moves focus through all interactive elements in
      logical DOM order without any traps.

---

## FR-by-FR verification commands

### FR-1: Hero Section

```bash
npx vitest run --reporter verbose tests/HeroSection.test.tsx
```

Expected: all tests pass; specifically `renders event name as h1` and
`CTA button is keyboard-focusable`.

### FR-2: About Section

```bash
npx vitest run --reporter verbose tests/AboutSection.test.tsx
```

Expected: all tests pass; specifically `renders at least 3 stat facts`.

### FR-3: Schedule Section

```bash
npx vitest run --reporter verbose tests/ScheduleSection.test.tsx
```

Expected: all tests pass; specifically `renders at least 4 schedule items`.

### FR-4: Guests Section

```bash
npx vitest run --reporter verbose tests/GuestsSection.test.tsx
```

Expected: all tests pass; specifically `each card has accessible avatar alt text`.

### FR-5: Registration CTA Section

```bash
npx vitest run --reporter verbose tests/RegistrationSection.test.tsx
```

Expected: all tests pass; specifically `CTA button has an href`.

### FR-6: Footer

```bash
npx vitest run --reporter verbose tests/FooterSection.test.tsx
```

Expected: all tests pass; specifically `footer landmark is present` and
`contact email link exists`.

### FR-7: Navigation Bar

```bash
npx vitest run --reporter verbose tests/NavBar.test.tsx
```

Expected: all tests pass; specifically `aria-expanded toggles on hamburger click`
and `all section links are in the DOM`.

---

## Accessibility checks

### Automated (axe-core via vitest-axe or manual browser extension)

For each component test file, include an axe scan:

```ts
import { axe } from 'vitest-axe'
// inside the test:
const { container } = render(<HeroSection />)
expect(await axe(container)).toHaveNoViolations()
```

Expected: zero violations in every component.

### Manual keyboard check

1. Open `npm run dev` in Chrome.
2. Press `Tab` repeatedly from the top of the page.
3. Verify focus indicator is visible on every interactive element (nav links,
   hamburger button, CTA buttons, social links, email link).
4. Press `Enter` or `Space` on the hamburger button and verify the menu opens.
5. Press `Escape` (or click a link) and verify the menu closes and focus returns
   to the hamburger button.

### Reduced-motion check

1. In browser DevTools > Rendering, enable "Emulate CSS media feature
   prefers-reduced-motion: reduce".
2. Click any nav link.
3. Verify the page jumps to the target section without a smooth-scroll
   animation.

---

## Edge cases and failure modes

| Scenario                                  | Expected behavior                                                  |
| ----------------------------------------- | ------------------------------------------------------------------ |
| Viewport < 320 px                         | No horizontal overflow; content reflows or is capped at 320 px min |
| Long guest name (> 30 chars)              | Card text wraps; layout does not break                             |
| Social link `href` is `#`                 | Renders as a valid anchor; does not navigate away                  |
| JavaScript disabled                       | Static HTML content is still readable (no JS-gated content)        |
| `prefers-reduced-motion: reduce` active   | Smooth scroll disabled; no jarring animations                      |
| Hamburger menu open, user tabs to section | Focus remains accessible inside menu; Escape closes and refocuses  |

---

## Performance baseline

Measure after `npm run build` + `npx vite preview`:

```bash
npx lighthouse http://localhost:4173 --only-categories=performance,accessibility --output=json | npx -y lighthouse-summary
```

Pass thresholds:

- Performance score >= 90
- Accessibility score = 100

If Lighthouse CLI is unavailable, open the DevTools Lighthouse panel and run
the same categories.

---

## Final gate before marking any feature `done`

```bash
./init.sh
```

Must print `[OK] Environment ready` on the last line. If it does not, the
feature status stays `in_progress` or moves to `blocked`.
