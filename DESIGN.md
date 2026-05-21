---
version: 1
name: Harness Default
description: >-
  Neutral, professional starter theme. The `designer` agent overwrites this
  file with a theme inferred from the project description (or extends it if you
  have already filled it in). It follows the design.md format:
  https://github.com/google-labs-code/design.md
colors:
  primary: '#3B5BDB'
  on-primary: '#FFFFFF'
  surface: '#FFFFFF'
  on-surface: '#1A1C1E'
  surface-variant: '#F1F3F5'
  on-surface-variant: '#5C5F66'
  border: '#DEE2E6'
  danger: '#E03131'
  success: '#2F9E44'
  dark-surface: '#0E2A1A'
  on-dark-surface: '#F5F0E8'
typography:
  sans:
    fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  heading:
    fontFamily: 'Inter, system-ui, sans-serif'
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  mono:
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace'
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 4px
  md: 8px
  lg: 16px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
border-width:
  thin: 1px
layout:
  max-width: 72rem
components:
  button-primary:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    rounded: '{rounded.md}'
    padding: 12px
  card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.on-surface}'
    rounded: '{rounded.lg}'
    padding: '{spacing.lg}'
  navbar:
    backgroundColor: '{colors.dark-surface}'
    textColor: '{colors.on-dark-surface}'
    borderWidth: '{border-width.thin}'
    maxWidth: '{layout.max-width}'
  hero:
    backgroundColor: '{colors.dark-surface}'
    textColor: '{colors.on-dark-surface}'
    maxWidth: '{layout.max-width}'
  footer:
    backgroundColor: '{colors.dark-surface}'
    textColor: '{colors.on-dark-surface}'
    borderWidth: '{border-width.thin}'
    maxWidth: '{layout.max-width}'
---

# Design — Harness Default

> This is the **single source of truth** for the visual design system. The YAML
> front matter above defines machine-readable tokens; the sections below explain
> the rationale. `scripts/design_check.mjs --write` generates
> `src/theme/tokens.css` from the tokens, and `scripts/design_check.mjs` (run by
> `init.sh`) fails if the app drifts from this file.

## Overview

A calm, neutral, content-first system. The defaults aim to look professional in
any context without a strong brand opinion, so the `designer` agent can safely
replace them with something tailored to the project. Prefer clarity and legible
typography over decoration.

## Colors

The palette is intentionally small. `primary` carries interactive emphasis;
`surface` / `on-surface` provide the base reading surface; `surface-variant`
gives a subtle background separation; `danger` and `success` are reserved for
state, never decoration. `dark-surface` (`#0E2A1A`, deep forest green) and
`on-dark-surface` (`#F5F0E8`, warm off-white) are used for dark-background
sections (hero, navbar, footer). Components reference colors only through the
generated `--color-*` custom properties — never hardcoded hex.

## Typography

`sans` is the default UI/body family, `heading` is used for titles, and `mono`
is reserved for code. Sizes and weights live in the tokens so they stay
consistent across components.

## Layout

Spacing follows a small scale (`xs`–`xl`). Compose layouts from these steps
rather than arbitrary pixel values. Content max-width (`72rem` via
`--layout-max-width`) keeps line length readable and constrains container width
consistently across hero, navbar, and footer sections.

## Elevation & Depth

Depth is expressed with subtle borders (`border` color, `--border-width-thin`
at `1px`) and minimal shadow. Avoid heavy drop shadows; rely on surface
contrast and spacing for hierarchy. The `--border-width-thin` token is the
single source of truth for rule lines — never use a bare `1px` literal.

## Shapes

Corners use the `rounded` scale: `sm` for inputs, `md` for buttons, `lg` for
cards and surfaces, `full` for pills and avatars.

## Components

- **button-primary** — solid `primary` background, `on-primary` text, `md`
  radius, 12px padding. The default call to action.
- **card** — `surface` background, `on-surface` text, `lg` radius, `lg`
  padding. The container for grouped content.
- **navbar** — `dark-surface` background, `on-dark-surface` text, `border-width-thin`
  bottom border, `layout-max-width` inner container. Sticky, z-index 100.
- **hero** — `dark-surface` background, `on-dark-surface` text, full viewport
  height, `layout-max-width` inner container centered.
- **footer** — `dark-surface` background, `on-dark-surface` text,
  `border-width-thin` top border, `layout-max-width` inner container.

When a component needs a token that does not exist yet, add it to the front
matter (and regenerate tokens) rather than hardcoding a value.

## Do's and Don'ts

- ✅ Reference design tokens via CSS custom properties: `var(--color-primary)`.
- ✅ Add new tokens to the front matter when the design genuinely needs them.
- ✅ Keep the palette and type scale small and intentional.
- ❌ Do not hardcode hex colors in components (`color: #3B5BDB`). Use the token.
- ❌ Do not introduce off-scale spacing or one-off font families.
- ❌ Do not edit `src/theme/tokens.css` by hand — it is generated.
