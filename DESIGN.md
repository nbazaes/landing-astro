---
name: Lavender Working Directory
description: A type-led developer portfolio with a real interactive terminal and authentic project evidence.
colors:
  paper: 'oklch(98% 0.008 300)'
  lavender: 'oklch(92% 0.035 300)'
  lavender-deep: 'oklch(87% 0.055 300)'
  ink: 'oklch(24% 0.06 300)'
  muted: 'oklch(47% 0.035 300)'
  rule: 'oklch(80% 0.025 300)'
  primary: 'oklch(48% 0.24 300)'
  primary-hover: 'oklch(40% 0.21 300)'
  console: 'oklch(24% 0.07 300)'
  console-text: 'oklch(96% 0.02 300)'
  console-muted: 'oklch(78% 0.045 300)'
  console-action: 'oklch(84% 0.1 300)'
  control-rule: 'oklch(56% 0.04 300)'
  console-hover: 'oklch(32% 0.065 300)'
  dark-paper: 'oklch(18% 0.018 300)'
  dark-paper-2: 'oklch(22% 0.025 300)'
  dark-paper-3: 'oklch(28% 0.035 300)'
  dark-ink: 'oklch(94% 0.015 300)'
  dark-ink-2: 'oklch(86% 0.025 300)'
  dark-muted: 'oklch(76% 0.03 300)'
  dark-rule: 'oklch(44% 0.035 300)'
  dark-control-rule: 'oklch(56% 0.04 300)'
  dark-accent: 'oklch(72% 0.17 300)'
  dark-accent-hover: 'oklch(78% 0.155 300)'
  dark-accent-ink: 'oklch(20% 0.03 300)'
  dark-focus: 'oklch(78% 0.145 300)'
  dark-success: 'oklch(79% 0.11 155)'
  dark-error: 'oklch(77% 0.14 27)'
  dark-console: 'oklch(17% 0.04 300)'
  dark-console-rule: 'oklch(51% 0.055 300)'
  dark-console-hover: 'oklch(29% 0.055 300)'
  dark-contact: 'oklch(30% 0.105 300)'
  dark-contact-ink: 'oklch(94% 0.015 300)'
  dark-contact-hover: 'oklch(35% 0.105 300)'
typography:
  display:
    fontFamily: 'Rethink Sans, sans-serif'
    fontSize: 'clamp(3.5rem, 11.2vw, 10rem)'
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: '-0.065em'
  headline:
    fontFamily: 'Rethink Sans, sans-serif'
    fontSize: 'clamp(2.5rem, 4.5vw, 4.5rem)'
    fontWeight: 600
    lineHeight: 1.08
  lead:
    fontFamily: 'Rethink Sans, sans-serif'
    fontSize: 'clamp(1.75rem, 2.6vw, 2.5rem)'
    lineHeight: 1.25
  title:
    fontFamily: 'Rethink Sans, sans-serif'
    fontSize: 'clamp(1.5rem, 2.5vw, 2rem)'
    fontWeight: 600
  body:
    fontFamily: 'Rethink Sans, sans-serif'
    fontSize: '1rem'
    lineHeight: 1.65
  label:
    fontFamily: 'Rethink Sans, sans-serif'
    fontSize: '0.875rem'
  caption:
    fontFamily: 'Rethink Sans, sans-serif'
    fontSize: '0.8125rem'
  command:
    fontFamily: 'IBM Plex Mono, monospace'
    fontSize: '1rem'
  terminal:
    fontFamily: 'IBM Plex Mono, monospace'
    fontSize: '0.8125rem'
  display-mobile:
    fontFamily: 'Rethink Sans, sans-serif'
    fontSize: 'clamp(3.5rem, 14vw, 6.5rem)'
    fontWeight: 700
    lineHeight: 1.02
  contact-headline:
    fontFamily: 'Rethink Sans, sans-serif'
    fontSize: 'clamp(2.5rem, 5.5vw, 5rem)'
    fontWeight: 600
    lineHeight: 1.08
  contact-email:
    fontFamily: 'Rethink Sans, sans-serif'
    fontSize: 'clamp(1.25rem, 4.2vw, 3.5rem)'
    lineHeight: 1.2
  contact-email-mobile:
    fontFamily: 'Rethink Sans, sans-serif'
    fontSize: 'clamp(1.2rem, 6vw, 2.5rem)'
    lineHeight: 1.2
  project-display:
    fontFamily: 'Rethink Sans, sans-serif'
    fontSize: 'clamp(2.5rem, 6.2vw, 4.6rem)'
  project-lead:
    fontFamily: 'Rethink Sans, sans-serif'
    fontSize: '1.125rem'
  project-media-heading:
    fontFamily: 'Rethink Sans, sans-serif'
    fontSize: 'clamp(1.4rem, 3vw, 2.125rem)'
  project-caption:
    fontFamily: 'Rethink Sans, sans-serif'
    fontSize: '0.75rem'
  project-body:
    fontFamily: 'Rethink Sans, sans-serif'
    fontSize: '0.9375rem'
  project-step-heading:
    fontFamily: 'Rethink Sans, sans-serif'
    fontSize: 'clamp(1.4rem, 2.5vw, 1.75rem)'
rounded:
  media-link: '8px'
  control: '6px'
  media: '12px'
  tag: '999px'
spacing:
  container-max: '1280px'
  gutter: '48px'
  gutter-tablet: '32px'
  gutter-mobile: '20px'
  columns: '48px'
  section: '128px'
  section-mobile: '80px'
---

# Design System: Lavender Working Directory

## Overview

**Creative North Star: "Lavender Working Directory"**

The user requested a free redesign preserving purple, superseding the earlier Engineered Dark system. The existing working terminal, project content, routes and contact behavior remain the material of the portfolio.

The idea is a name opening a working directory. Large Rethink Sans typography establishes the developer's identity; the genuine terminal invites another way to browse; authentic BazPOS screenshots demonstrate the work. No simulated browser window, decorative status dots, invented proof or stock imagery.

## Colors

`src/styles/tokens.css` holds the palette, fonts, type ramps, spacing, timing and compatibility aliases. `base.css` holds reset and accessibility foundations. `global.css` holds composition and shared components. `motion.css` owns the shared entrance, scroll and interaction choreography. Scoped component styles consume the same tokens.

The light canvas is tinted purple. The dark theme uses a charcoal-plum canvas, slightly lighter elevated surfaces, pale lavender text and a lighter violet action color. Contact has a separate dark purple surface so it stays comfortable in dark mode; real images retain their original colors. Dark plum carries headings, muted plum carries prose, and saturated purple marks actions. Lavender surfaces group the introduction and engineering content. The final contact region uses a solid purple surface with light text and a matching light focus outline. The terminal is a functional dark plum surface with its own high-contrast token aliases; it is the single dark frame.

Theme selection is shared by all six localized routes. A sun/moon button in the regular and terminal headers toggles the current theme and exposes its dark state through a stable localized label and aria-pressed. A stored light/dark value in nbazaes-theme takes priority; otherwise the system preference applies and follows live changes. Changes synchronize between tabs. An inline head bootstrap resolves the theme before the first paint; module initialization updates controls and the browser theme-color metadata. Without JavaScript the CSS system preference still works and the inactive control is hidden. Storage errors leave a usable in-memory toggle.

## Typography

Rethink Sans handles headings, prose, labels, controls and captions. IBM Plex Mono is confined to terminal commands and output, and genuine repository/stack code. Labels use sentence case without tracking. The type steps are 13, 14, 16, 20, 24, 32 and 40px, plus the fluid display, section, project and lead ramps recorded above.

At desktop widths the hero name spans both columns above the introduction and terminal. At 751px and below it wraps naturally to two lines, and the terminal follows the introduction. Hero profile details follow the actions. Headlines wrap safely; actual repository names may wrap anywhere where necessary.

## Layout

One centered 1280px container, including gutters, serves all routes. The desktop gutter and column gap are 48px; tablet uses 32px; mobile gutters are 20px and column gaps 24px. At 1920px the container holds its size and the outer gutters grow. At 416px and below, the landing header puts navigation on a second row so the locale and 44px theme control keep comfortable targets. The standalone terminal header pairs a wrapping return link with grouped locale/theme controls.

The masthead is open and non-sticky. The landing sequence is identity and terminal, a large BazPOS screenshot with project story and architecture, open project rows, a lavender tools directory with real engineering decisions, contact and a compact location/footer row. Content leads with names and evidence, rather than generic cards or decorative labels.

BazPOS detail pages inherit the light palette and type, retaining their original recording, captions, screenshots, transcript, architecture and external demo destination. Dedicated terminal routes retain the same command engine and standalone view.

## Elevation & Depth

Persistent surfaces are flat. Tonal shifts and thin rules create structure. Product media and the functional terminal use 12px corners; no decorative shadows.

## Shapes

Use 6px corners for controls, 12px for media and the terminal, and fully rounded tags.

## Components

Primary actions have one purple filled recipe; secondary controls have a quiet outline. Buttons have 48px minimum height; navigation, command and inline action targets have 44px minimum height. Keyboard focus appears immediately. Hover colors are limited to fine pointers; pressed controls translate by 1px. Disabled controls change fill, text and cursor. Reduced motion removes spatial animation and sticky scenes while preserving brief color and opacity feedback at 100ms; keyboard focus is always immediate.

The six localized landing, BazPOS and terminal routes share CSS-native choreography. The large name enters from 48px over 650ms; introduction and terminal enter from 24px over 500ms, offset by 80 and 160ms. A separate outer heading layer follows the hero exit timeline up to -48px and opacity 0.35. Name text stays intact, and controls remain usable during entrances.

At widths of 1024px and above, with a viewport at least 576px high and motion allowed, BazPOS becomes a sticky scene with columns at 1.6:1. Its genuine capture stays 40px from the top while the existing presentation, scope and architecture flow through three chapters. Chapter minimum height is clamp(20rem, 50svh, 30rem). The scene container supplies a named view timeline so sticky positioning does not stall the image's own entrance. The capture enters from 64px, opacity 0.35 and scale 0.96. In smaller viewports, reduced motion or unsupported browsers, it returns to the full-width flow; supported mobile timelines retain the entry-to-cover-60% reveal.

Project rows, the tools group and contact heading enter from 32px and opacity 0.6. Detail-page screenshots enter from 48px and scale 0.98; the actual video and reading paragraphs remain stable. Unsupported timelines show all content in its final state. Keyboard focus cancels motion on the focused content immediately. No scroll listeners, animation dependencies, autoplay or infinite loops are introduced. The terminal retains instant command output, history, completion, safe links and explicit navigation focus. Action icons move 4px on a fine-pointer hover over 180ms; pressing a terminal control responds in 100ms.

All spatial movement is opted into with prefers-reduced-motion: no-preference. Reduced motion leaves content settled and removes the sticky reading scene; brief opacity and color feedback remains. Browser-native document navigation and scroll behavior are preserved. Timeline declarations deliberately use a targeted !important to prevent the CSS optimizer from folding them into the newer animation shorthand syntax; that folded syntax was rejected by the tested Chrome and Zen engines. Validate the production build, not only development CSS, when changing these rules.

Contact uses a direct mailto link and optional clipboard button. The existing status component retains polite announcements, dismissal, timeout pauses and persistent errors. Its resting state is inert; it enters with 8px of movement and an opacity fade over 180ms, then exits in 120ms. Reduced motion keeps only a 100ms opacity fade. Announcements and inert state change immediately, independently of the paint transition. It has a defined edge and no ambient shadow.

## Do's and Don'ts

Spanish and English share the same components and design. Keep real links, section IDs, handler hooks and data sources. The page is readable without JavaScript; terminal controls initialize only when available. All product media is existing user material, with no stand-ins. Use `overflow-x: clip` on html and body, safe grid tracks, visible focus, reduced-motion support and sufficient contrast on every surface.
