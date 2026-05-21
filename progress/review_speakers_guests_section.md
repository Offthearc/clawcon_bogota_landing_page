# Review — feature F04: Guests / Featured Games Section

**Verdict:** APPROVED

## Verification

- `vitest run`: PASS (45 tests across 6 files, all green)
- `eslint`: PASS (no warnings or errors)
- `prettier --check`: PASS (all matched files use Prettier code style)
- `typecheck (tsc)`: PASS (no type errors)
- `design:check`: PASS (tokens.css in sync with DESIGN.md; no off-palette colors or off-token fonts)
- `./init.sh`: PASS (exits 0, "Environment ready")

## Checkpoints

- C1: [x] Base files exist (AGENTS.md, init.sh, feature_list.json, progress/current.md, docs/*, DESIGN.md); ./init.sh exits 0
- C2: [x] F04 is the only in_progress feature; all done features have passing tests; current.md describes active session
- C3: [x] GuestsSection lives in src/components/; no unjustified runtime deps; no console.log, commented-out code, or stray TODOs
- C4: [x] tests/GuestsSection.test.tsx covers all 5 acceptance criteria with 9 RTL tests (getByRole, getByText); vitest shows 45/45 green
- C5: [x] No suspicious untracked files; progress files present and correctly formatted
- C6: [x] DESIGN.md YAML parses cleanly; tokens.css in sync; no off-palette hex values in src/; GuestsSection card uses --color-surface, --color-on-surface, --rounded-lg, --space-lg per DESIGN.md card spec; avatar uses --color-primary, --color-on-primary, --rounded-full per spec; all typography uses --font-* tokens
