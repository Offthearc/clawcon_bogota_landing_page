Session: 2026-05-21

Feature in progress: F05 — Registration / CTA Section

Plan:
- Create src/components/RegistrationSection/RegistrationSection.tsx with headline, supporting copy, and CTA button
- Create src/components/RegistrationSection/RegistrationSection.css using design tokens (contrasting background via --color-primary)
- Add <RegistrationSection /> to src/App.tsx below <GuestsSection />
- Write tests/RegistrationSection.test.tsx validating all acceptance criteria
- Run full verification suite (vitest, lint, prettier, typecheck, design:check, init.sh)
