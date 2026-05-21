---
version: 1
name: ClawCon Bogota
description: >-
  Bold, vibrant design system for ClawCon Bogota — a tabletop gaming convention
  in Bogota, Colombia. Latin American festival energy meets gamer culture:
  rich emerald greens, warm gold accents, and strong display typography
  against warm-white surfaces.
colors:
  primary: '#1B6B3A'
  on-primary: '#FFFFFF'
  primary-dark: '#134E2B'
  accent: '#D4A017'
  on-accent: '#1A1200'
  surface: '#FAF8F2'
  on-surface: '#1C1A14'
  surface-variant: '#EFEBE0'
  on-surface-variant: '#5A5646'
  dark-surface: '#0E2A1A'
  on-dark-surface: '#F5F0E8'
  border: '#D6CFBA'
  danger: '#C0392B'
  success: '#27AE60'
typography:
  display:
    fontFamily: "'Bebas Neue', Impact, 'Arial Narrow', sans-serif"
    fontSize: 72px
    fontWeight: '400'
    lineHeight: '1.0'
    letterSpacing: '0.02em'
  heading:
    fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif"
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.15'
    letterSpacing: '-0.01em'
  subheading:
    fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif"
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.25'
  sans:
    fontFamily: "'Inter', 'Segoe UI', Roboto, Arial, sans-serif"
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  sans-bold:
    fontFamily: "'Inter', 'Segoe UI', Roboto, Arial, sans-serif"
    fontSize: 16px
    fontWeight: '700'
    lineHeight: '1.4'
  label:
    fontFamily: "'Inter', 'Segoe UI', Roboto, Arial, sans-serif"
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: '0.06em'
  mono:
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace'
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 16px
  xl: 24px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  2xl: 64px
  3xl: 96px
layout:
  max-width: 1200px
border-width:
  thin: 2px
components:
  button-primary:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    rounded: '{rounded.md}'
    padding: '{spacing.md}'
    fontFamily: '{typography.sans-bold.fontFamily}'
  button-accent:
    backgroundColor: '{colors.accent}'
    textColor: '{colors.on-accent}'
    rounded: '{rounded.md}'
    padding: '{spacing.md}'
    fontFamily: '{typography.sans-bold.fontFamily}'
  button-outline:
    backgroundColor: 'transparent'
    textColor: '{colors.primary}'
    borderColor: '{colors.primary}'
    rounded: '{rounded.md}'
    padding: '{spacing.md}'
  card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.on-surface}'
    rounded: '{rounded.lg}'
    padding: '{spacing.lg}'
    borderColor: '{colors.border}'
  card-dark:
    backgroundColor: '{colors.dark-surface}'
    textColor: '{colors.on-dark-surface}'
    rounded: '{rounded.lg}'
    padding: '{spacing.lg}'
  nav:
    backgroundColor: '{colors.dark-surface}'
    textColor: '{colors.on-dark-surface}'
    accentColor: '{colors.accent}'
  hero:
    backgroundColor: '{colors.dark-surface}'
    textColor: '{colors.on-dark-surface}'
    accentColor: '{colors.accent}'
    headingFont: '{typography.display.fontFamily}'
  section-light:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.on-surface}'
    padding: '{spacing.3xl}'
  section-tinted:
    backgroundColor: '{colors.surface-variant}'
    textColor: '{colors.on-surface}'
    padding: '{spacing.3xl}'
  section-dark:
    backgroundColor: '{colors.dark-surface}'
    textColor: '{colors.on-dark-surface}'
    padding: '{spacing.3xl}'
  stat-badge:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    rounded: '{rounded.md}'
    padding: '{spacing.md}'
  avatar-placeholder:
    backgroundColor: '{colors.primary-dark}'
    textColor: '{colors.on-primary}'
    rounded: '{rounded.full}'
  schedule-item:
    backgroundColor: '{colors.surface}'
    borderColor: '{colors.primary}'
    textColor: '{colors.on-surface}'
    rounded: '{rounded.lg}'
    padding: '{spacing.lg}'
  footer:
    backgroundColor: '{colors.dark-surface}'
    textColor: '{colors.on-dark-surface}'
    accentColor: '{colors.accent}'
    padding: '{spacing.xl}'
---

# Design — ClawCon Bogota

> This is the **single source of truth** for the visual design system.
> The YAML front matter above defines machine-readable tokens; the sections
> below explain the rationale. `scripts/design_check.mjs --write` generates
> `src/theme/tokens.css`, and `scripts/design_check.mjs` fails if the
> implementation drifts from this file.

## Overview

ClawCon Bogota is a tabletop gaming convention celebrating board games, card
games, RPGs, and miniature gaming in Bogota, Colombia. The visual identity
draws on two complementary sources of energy: the vibrant warmth of Colombian
festival culture — sun-drenched golds, lush greens, and a festive communal
spirit — and the bold, high-contrast aesthetic of competitive tabletop gaming.

The result is a system that feels welcoming and exciting without resorting to
generic "gamer dark" cliches. Deep emerald green carries authority and
Colombian national pride. Warm gold punctuates calls-to-action and celebration.
Cream-tinted surfaces evoke aged parchment and game manuals. The display
typeface is large and unapologetic; the body type stays calm and legible.

## Colors

The palette is small and intentional. Every color earns its place.

| Token                | Hex       | Purpose                                             |
| -------------------- | --------- | --------------------------------------------------- |
| `primary`            | `#1B6B3A` | Deep emerald — brand authority, buttons, links      |
| `on-primary`         | `#FFFFFF` | Text on primary surfaces                            |
| `primary-dark`       | `#134E2B` | Hover/active state for primary, avatar fill         |
| `accent`             | `#D4A017` | Warm gold — CTAs, highlights, award motifs          |
| `on-accent`          | `#1A1200` | Near-black text on gold for contrast                |
| `surface`            | `#FAF8F2` | Warm off-white — main content background            |
| `on-surface`         | `#1C1A14` | Near-black with warm undertone for body text        |
| `surface-variant`    | `#EFEBE0` | Slightly deeper warm cream for alternating sections |
| `on-surface-variant` | `#5A5646` | Secondary/muted text on light surfaces              |
| `dark-surface`       | `#0E2A1A` | Deep forest-green near-black — hero and footer      |
| `on-dark-surface`    | `#F5F0E8` | Cream-white for text on dark surfaces               |
| `border`             | `#D6CFBA` | Subtle warm divider                                 |
| `danger`             | `#C0392B` | Error states only                                   |
| `success`            | `#27AE60` | Success states only                                 |

`danger` and `success` are reserved for UI feedback states, never used for
decorative purposes. The primary and accent colors carry all brand emphasis.

## Typography

The type system uses three families to create clear visual hierarchy:

**Display (`Bebas Neue`):** A condensed all-caps sans used exclusively for the
hero event title. It conveys monumental scale and the energy of convention
signage. Falls back to Impact for system compatibility.

**Heading (`Playfair Display`):** A high-contrast serif for section headings
and guest names. It references the tradition of board game typography —
serious, elegant, with a hint of drama. Falls back to Georgia.

**Sans (`Inter`):** The functional workhorse for all body copy, labels, and
UI text. Chosen for its legibility at small sizes and neutral character that
lets the display and heading faces dominate.

The type scale runs: display 72px → heading 36px → subheading 24px → body 16px
→ label 13px. Each step carries roughly a 1.5× visual jump, maintaining
clear hierarchy even on mobile.

## Layout

Spacing follows a scale: `xs` 4px → `sm` 8px → `md` 16px → `lg` 24px →
`xl` 40px → `2xl` 64px → `3xl` 96px. Section vertical padding uses `3xl`
(96px) on desktop, collapsing to `xl` (40px) on mobile.

The `layout` token group holds structural sizing values separate from the
rhythm-based spacing scale. `--layout-max-width` (1200px) constrains inner
content containers so lines stay readable on wide screens; apply it as
`max-width: var(--layout-max-width)` on the inner wrapper of each section.

Sections span full viewport width with their own background colors for
horizontal rhythm; the inner wrapper is centered with `margin-inline: auto`.

## Strokes and Borders

The `border-width` token group defines line weights for UI chrome. Use
`--border-width-thin` (2px) for hamburger-menu bar lines, card outlines,
dividers, and input borders. Never hardcode pixel values for stroke widths;
always reference the token so all line weights can be tuned from one place.

## Elevation and Depth

This site avoids heavy shadow-based depth. Hierarchy comes from:

1. Background color contrast (dark-surface hero/footer vs. light body sections).
2. Borders using the `border` token for card outlines.
3. A single subtle box-shadow for cards on hover (`0 4px 16px rgba(0,0,0,0.1)`
   — not tokenised, applied sparingly).

The dark-surface sections (hero, registration CTA, footer) act as visual
anchors, framing the light content sections between them.

## Shapes

| Token  | Value  | Usage                                   |
| ------ | ------ | --------------------------------------- |
| `none` | 0px    | Sharp edges — decorative dividers       |
| `sm`   | 4px    | Small UI elements, labels, badges       |
| `md`   | 8px    | Buttons (primary interaction radius)    |
| `lg`   | 16px   | Cards, schedule items, guest cards      |
| `xl`   | 24px   | Large feature cards or modal containers |
| `full` | 9999px | Avatar circles, pill tags               |

Buttons always use `md`. Cards always use `lg`. Avatar placeholders use `full`.

## Components

### button-primary

Solid emerald-green button. Used for the main hero CTA ("Register Now") and
secondary actions. Padding `md`, radius `md`, bold Inter text.

### button-accent

Solid gold button. Used for the most prominent single CTA on the page —
the registration section call-to-action. Strong contrast with dark surfaces.

### button-outline

Transparent button with an emerald border and text. Used for secondary
actions that should not compete visually with `button-primary`.

### card

The standard container for schedule items and guest cards on light sections.
Warm-white background, `lg` radius, `lg` padding, subtle `border` outline.

### card-dark

Inverted card for use on dark-surface sections. Deep forest-green background,
cream text. `lg` radius.

### nav

Top navigation bar. Uses `dark-surface` background with cream text. The event
name / logo text adopts the `accent` color for instant brand recognition.
Active link or hover state uses `accent` underline.

### hero

Full-viewport dark-surface section. Event title in `display` font size at 72px
with cream-white text. Tagline and metadata in body sans. The "Register Now"
button uses `button-accent` in the hero so it pops against the dark background.

### section-light / section-tinted / section-dark

Three section variants for alternating the page rhythm:

- `section-light` — warm off-white, used for About and Guests sections.
- `section-tinted` — slightly deeper cream, used for the Schedule section.
- `section-dark` — deep forest green, used for the Registration CTA section.

### stat-badge

Small emerald pill/badge displaying a key fact (e.g. "500+ Attendees"). Uses
`primary` background with `on-primary` text, `md` radius.

### avatar-placeholder

A circle (`full` radius) in `primary-dark` with the guest's initials in
`on-primary` text. Ensures no broken image states in the MVP.

### schedule-item

Card variant with a left emerald border accent (`primary`). Displays day,
time, title, and description. `lg` radius, `lg` padding.

### footer

Dark-surface footer band. Event name in `accent` color. Links and copyright
in `on-dark-surface` text. Padding `xl`.

## Do's and Don'ts

- Do reference colors only via CSS custom properties: `var(--color-primary)`,
  `var(--color-accent)`, `var(--color-dark-surface)`, etc.
- Do reference typography via tokens: `var(--font-display)`, `var(--font-heading)`.
- Do reference spacing via tokens: `var(--space-lg)`, `var(--space-3xl)`.
- Do use `var(--rounded-lg)` for cards and `var(--rounded-md)` for buttons.
- Do add new tokens to the DESIGN.md front matter (and regenerate) if a new
  need arises — never introduce one-off values.
- Do not hardcode hex colors anywhere in `src/` (e.g. `color: #1B6B3A`). Use
  `var(--color-primary)`.
- Do not use font families in CSS that are not declared in the typography tokens.
- Do not introduce off-scale spacing values (e.g. `padding: 13px` or `margin: 37px`).
- Do not use `danger` or `success` colors for decoration or brand expression.
- Do use `var(--layout-max-width)` for page content container max-widths; do
  not hardcode `1200px` or any other fixed container width.
- Do use `var(--border-width-thin)` for all 2px stroke/line needs (hamburger
  bars, dividers, card outlines); do not hardcode `2px` or other stroke widths.
- Do not hand-edit `src/theme/tokens.css` — it is always regenerated by
  `scripts/design_check.mjs --write`.
