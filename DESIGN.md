---
name: Engineered Dark
description: A readable engineering portfolio with precise console notation.
colors:
  surface: "#111319"
  surface-card: "#0c0e14"
  surface-dim: "#191b22"
  border-primary: "#2d3139"
  primary: "#9333ea"
  primary-hover: "#a855f7"
  primary-light: "#ddb7ff"
  primary-action-hover: "#7e22ce"
  text-muted: "#a2adbd"
  text-bright: "#f4f3f7"
  text-white: "#ffffff"
  text-variant: "#cfc2d6"
  status: "#34d399"
  tertiary: "#fabc4e"
  selection: "#6832a3"
  scrollbar: "#525661"
  border-action: "#515663"
  console-separator: "#666e7d"
  border-feedback: "#616776"
  feedback-shadow: "#0004"
  transparent: "transparent"
typography:
  display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6.2vw, 4.6rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  role:
    fontFamily: "'JetBrains Mono', ui-monospace, monospace"
    fontSize: "clamp(0.875rem, 1.8vw, 1.0625rem)"
    fontWeight: 400
    letterSpacing: "0"
  statement:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(1.4rem, 3vw, 2.125rem)"
    lineHeight: 1.4
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.03em"
  architecture-value:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 500
    letterSpacing: "-0.02em"
  project-title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
  brand-mark:
    fontFamily: "'JetBrains Mono', ui-monospace, monospace"
    fontSize: "1.125rem"
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  body-small:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.75
  button:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
  body-compact:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.875rem"
    lineHeight: 1.75
  link:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.8125rem"
  console:
    fontFamily: "'JetBrains Mono', ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.5
  language:
    fontFamily: "'JetBrains Mono', ui-monospace, monospace"
    fontSize: "0.8125rem"
  console-micro:
    fontFamily: "'JetBrains Mono', ui-monospace, monospace"
    fontSize: "0.6875rem"
  contact:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(1.1rem, 2.4vw, 1.6rem)"
  command:
    fontFamily: "'JetBrains Mono', ui-monospace, monospace"
    fontSize: "clamp(1rem, 1.9vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "0.02em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  status-dot: "50%"
spacing:
  container-max: "1120px"
  section: "88px"
  section-mobile: "56px"
  gutter: "32px"
  gutter-mobile: "20px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  grid: "64px"
  feature-grid: "72px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.text-white}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
  button-primary-hover:
    backgroundColor: "{colors.primary-action-hover}"
  button-quiet:
    backgroundColor: "{colors.transparent}"
    textColor: "{colors.text-bright}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
  architecture:
    backgroundColor: "{colors.surface-card}"
    rounded: "{rounded.lg}"
  tag:
    backgroundColor: "{colors.surface-dim}"
    textColor: "{colors.text-variant}"
    typography: "{typography.console}"
    rounded: "{rounded.sm}"
    padding: "4px 8px"
  terminal-input:
    backgroundColor: "{colors.transparent}"
    textColor: "{colors.text-bright}"
    typography: "{typography.command}"
    width: "min(100%, 32rem)"
  navigation:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-muted}"
  console-summary:
    typography: "{typography.console}"
    textColor: "{colors.primary-light}"
    padding: "18px 0"
---

# Design System: Engineered Dark

## Overview

**Creative North Star: "Engineered Dark"**

Engineered Dark combines charcoal grounds, violet interaction, emerald health signals, and restrained console notation. Inter carries human identity and explanatory reading; JetBrains Mono marks commands, roles, provenance, and technology data. The result is direct, technical, and accessible to a fast reader.

The Power-On Self-Test remains an identity reference through settled readiness markers and the dedicated terminal. It no longer requires every surface to simulate a boot screen. Space, ruled structure, and deliberate typographic hierarchy carry the interface.

**Key Characteristics:**
- Charcoal tonal layers with fine structural rules
- Inter for reading; JetBrains Mono for system notation
- Violet actions, emerald health, amber provenance
- Responsive columns with generous section spacing
- Settled content and reduced-motion support

## Colors

Charcoal and violet form the persistent visual field; semantic accents identify state and provenance. The frontmatter records the literal source palette, including utility shades used by interaction and feedback.

### Primary
- **Deep Violet**: primary action fill and skip link.
- **Primary Violet**: retained theme accent (`primary-hover`); the current primary action instead darkens through `primary-action-hover`.
- **Light Violet**: role text, links, console values, check-adjacent notation, and focus outlines.
- **Action Hover Violet**: darker primary button hover.
- **Selection Violet**: text selection background, paired with white.

### Tertiary
- **Health Emerald**: availability, production status, and ready/check markers.
- **System Amber**: provenance prefix and architecture notation.

### Neutral
- **Surface / Card / Dim**: page and sticky header / recessed architecture and contact / tags and feedback.
- **Bright / Muted / Variant / White Text**: titles and major copy / supporting reading / technology tags / solid-button and selection text.
- **Primary / Action / Feedback Borders**: structural hairlines / secondary action boundaries / toast boundary.
- **Scrollbar Gray**: scrollbar thumb. **Console Separator Gray**: decorative slashes between technology names, not reading copy.
- **Feedback Shadow**: translucent black confined to temporary feedback. **Transparent**: quiet buttons and terminal field.

**The Health Signal Rule.** Reserve emerald for availability, production status, and ready/check markers.

## Typography

**Display Font:** Inter, system-ui, sans-serif.
**Body Font:** Inter, system-ui, sans-serif.
**Label/Mono Font:** JetBrains Mono, ui-monospace, monospace.

The type scale is role-based rather than a fixed ratio. The frontmatter preserves all recurring sizes and fluid ramps actually used. Display and headline tracking is compact; prose remains open and readable.

### Hierarchy
- **Display**: name, with the smaller monospaced role nested beneath it.
- **Statement**: balanced proposition with a 38ch measure.
- **Headline**: section headings, with context-specific 17–24ch measures.
- **Architecture value / Project title**: technology names and project names; principles also use the project-title size at weight 500.
- **Body / Body small**: descriptions, with 52–66ch measures. Mobile hero description uses body-small.
- **Button / Body compact / Link**: controls, navigation, principles, category text, and supporting architecture copy.
- **Console / Language / Console micro**: tags, role metadata, provenance, locale links, and compact mobile status. The brand mark has its own established size.
- **Contact**: fluid email link. **Command**: dedicated terminal output, prompt, and input; output rows use line height 1.65 while input and introduction use 1.7.
- At mobile widths the role uses line height 1.6; navigation and language use the console size; location and compact ready text use console-micro. Availability uses link size on desktop and console size on mobile, with Inter rather than mono.

**The Two Voices Rule.** Use Inter for reading and hierarchy; use JetBrains Mono for commands, roles, tags, and technical notation.

## Layout

Centered content has a maximum width of 1120px and 32px side gutters. Below 768px gutters become 20px and section padding changes from 88px to 56px. The sticky header changes from a 76px to 64px minimum height; its compact navigation remains visible while the spelled-out brand name hides.

The spacing vocabulary uses 8, 12, 16, 20, 24, 28, and 32px steps with broader 42, 44, 60, 64, 66, 72, and 88px composition intervals in source. Buttons keep a 48px minimum height; navigation and inline action links have 44px targets. Responsive columns collapse to one: feature story/architecture (1.05fr/1fr), project rows (1.25fr/1fr), contact (1.1fr/1fr), two-column stack, and three-column principles. The terminal has its own 920px content measure and fluid 20–60px padding; input wraps beneath the prompt at 768px and below.

The landing's particular order and featured-project strategy live in its surface brief, rather than becoming a universal layout requirement.

## Elevation & Depth

Persistent content is flat, separated by hairline borders and tonal recesses. The architecture panel and contact band use the recessed surface. There is no CRT overlay or decorative glow in the current build. Temporary clipboard feedback alone has an ambient shadow (`0 8px 30px #0004`).

**The Ruled Structure Rule.** Separate sections and rows with hairline rules and tonal changes; keep persistent content flat.

## Shapes

Subtle corners distinguish controls (8px), tags and focus treatment (4px), and the bounded architecture panel (12px). Structural section bands and project rows remain square and open. Status dots are circular (6px diameter). Borders are 1px; visible keyboard focus uses a 2px light-violet outline offset by 5px. Interface icons are inline SVG; textual console syntax such as `[ OK ]` remains system notation.

## Components

### Buttons
Confident filled primary and quiet outlined secondary actions use Inter semibold, 12px 20px padding, 14px icon gaps, and 8px corners. The primary darkens on hover. The quiet variant gains a light-violet border and dim fill. State transitions take 160ms. Disabled copy feedback uses opacity 0.6 and a wait cursor.

### Chips
Technology tags have dim fill, variant text, mono console type, 4px 8px padding, 4px corners, and 8px gaps. They are descriptive labels, without simulated interactive states.

### Cards / Containers
The architecture panel uses recessed fill, a primary border, 12px corners, and 24px horizontal insets. Its header and note have 20px vertical padding; the technology rows have 24px vertical padding. Each layer pairs a compact role with a larger technology value and a ready marker. Ordinary projects use open ruled rows rather than matching cards.

### Inputs / Fields
The terminal field is transparent and borderless, with inherited mono command type, a bright caret, and muted placeholder. It retains global keyboard focus treatment. Desktop width is capped at 32rem; mobile input takes a complete row. Output wraps long strings and uses underlined links.

### Navigation
The opaque sticky header uses a bottom hairline, compact Inter links, a mono brand mark, and a separated mono locale link. Hover changes links to light violet. Locale and page links are real destinations. The footer is an open row with location and a terminal link, wrapping on mobile.

### Console Signature and Terminal
The landing signature is one settled, ruled line with technology names and a ready marker; only that marker reveals over 600ms when motion is allowed. The separate terminal types its introductory command over 0.9s, pauses 0.4s, then reveals lines at 0.18s intervals with 0.15s fades. The caret blinks over 1.05s. Reduced motion disables animations, transitions, and smooth scrolling globally.

### Contact Feedback
The direct email is a fluid light-violet link. Optional clipboard copying reveals a fixed, bounded status message with dim fill, feedback border, 8px corners, and the temporary ambient shadow. It reports success or failure through a live status region.

## Do's and Don'ts

### Do:
- **Do** preserve the distinction between reading text and system notation.
- **Do** keep health markers semantic and primary actions violet.
- **Do** show genuine code destinations and allow long repository names to wrap.
- **Do** keep direct contact and locale navigation available without JavaScript.
- **Do** honor reduced motion and visible keyboard focus.

### Don't:
- **Don't** turn ordinary reading copy into a wall of console text.
- **Don't** add decorative glow or hard offset shadows to persistent content.
- **Don't** fabricate project evidence or metrics.
- **Don't** replace SVG interface icons with Unicode arrow glyphs.
