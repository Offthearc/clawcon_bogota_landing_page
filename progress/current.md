Session: 2026-05-21

Feature in progress: F06 — Footer

Plan:
- Create src/components/Footer/Footer.tsx with event name, social links (Instagram, Twitter/X, Facebook), contact email, and copyright notice
- Create src/components/Footer/Footer.css using design tokens (dark surface background, matching NavBar/HeroSection pattern)
- Add <Footer /> to src/App.tsx below <RegistrationSection />
- Write tests/Footer.test.tsx validating all acceptance criteria (landmark, event name, copyright, social links, email link)
- Run full verification suite (vitest, lint, prettier, typecheck, design:check, init.sh)
