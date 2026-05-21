Feature in progress: F07 — Navigation Bar

Plan:

- Create src/hooks/useNavMenu.ts: custom hook managing hamburger open/close state with keyboard handling
- Create src/components/NavBar/NavBar.tsx: responsive nav with logo, anchor links, hamburger button, aria attributes
- Create src/components/NavBar/NavBar.css: styles using only design tokens (dark-surface background, accent logo color, mobile collapse)
- Update src/App.tsx: replace placeholder content with NavBar component; wrap sections in main landmark
- Update src/index.css: add smooth-scroll with prefers-reduced-motion guard; write tests/NavBar.test.tsx covering all acceptance criteria
