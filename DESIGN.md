---
name: Power-On Self-Test
description: A developer portfolio that is a machine booting — every check resolving to [ OK ] over the Engineered Dark palette.
colors:
  surface: "#111319"
  surface-card: "#0c0e14"
  surface-dim: "#191b22"
  surface-bright: "#373940"
  border-subtle: "#2d3139"
  border-accent: "rgba(168, 85, 247, 0.4)"
  primary: "#9333ea"
  primary-hover: "#a855f7"
  primary-light: "#ddb7ff"
  primary-container: "#b76dff"
  tertiary: "#fabc4e"
  status-ok: "#34d399"
  text-primary: "#ffffff"
  text-muted: "#94a3b8"
  text-variant: "#cfc2d6"
typography:
  headline-xl:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 3rem)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline-lg:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.25
  body-md:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  code-sm:
    fontFamily: "'JetBrains Mono', monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.6
  console-sm:
    fontFamily: "'JetBrains Mono', monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.5
  console-xs:
    fontFamily: "'JetBrains Mono', monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    lineHeight: 1.5
  label-caps:
    fontFamily: "'JetBrains Mono', monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.05em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  full: "9999px"
spacing:
  container-max: "1152px"
  section-gap: "5rem"
  card-padding: "1.5rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-ghost:
    backgroundColor: "{colors.surface-dim}"
    textColor: "{colors.primary-light}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  card-project:
    backgroundColor: "{colors.surface-card}"
    rounded: "{rounded.lg}"
    padding: "28px"
  boot-line:
    typography: "{typography.console-sm}"
    textColor: "{colors.text-variant}"
  ok-token:
    textColor: "{colors.status-ok}"
---

# Design System: Power-On Self-Test

## Overview

**Creative North Star: "The Power-On Self-Test"**

The portfolio is a machine booting in front of the visitor. The first viewport is a single full-width text-mode screen: a BIOS-style header (`BAZAES_SYSTEM v2.7 · Power-On Self Test`), the headline and value proposition as the system's stated purpose, then a POST sequence — CPU, MEM, NIC checks and each real repository mounting as a detected device — every check resolving to an emerald `[ OK ]` with a character-by-character cascade. The sequence closes on a blinking-cursor `READY — available for hire` line and three keyed actions (`[1] View Projects`, `[2] Open Terminal`, `[3] copy email`). The whole page keeps the console grammar: keyed navigation, tabular timestamps, provenance tickets, config-file section headers, and a footer of keyed links.

This world refuses the hero-plus-floating-terminal-card scaffold that developer portfolios default to. The terminal is not a card on the page — the page itself is the terminal. Every claim is an inspected system component: the four repositories are devices that mount and pass.

**Key Characteristics:**
- One authored moment: the boot cascade resolving line by line, not scattered hover effects
- Console grammar throughout: tabular numerals, dotted leaders, keyed `[n]` actions, provenance tickets
- The Engineered Dark palette preserved: deep charcoal surfaces, violet primary, amber tertiary, emerald OK
- Generous breathing room: one clean screen first, dense-but-airy sections after
- Bilingual ES/EN with localStorage memory; single-click email copy with toast

## Colors

Deep charcoal surfaces with a violet primary, preserved from the incumbent Engineered Dark system. Violet is reserved for focal interaction points, active borders, status badges, and terminal prompts; emerald is exclusively the system's `[ OK ]` health signal.

### Primary
- **Deep Violet** (`#9333ea`): Solid primary button fill. Chosen over `#a855f7` to hold white button text at ≥4.5:1 contrast.
- **Primary Violet** (`#a855f7`): Hover state of the primary button, active borders, terminal prompts, section mono labels, focus rings.
- **Light Violet** (`#ddb7ff`): Repo names, terminal values, nav hover text, category badges on dark cards.

### Secondary
- **System Amber** (`#fabc4e`): Tabular timestamps (`t=0.06s`), the BIOS brand line, provenance `origin:` labels, frontend stack badges.

### Tertiary
- **Health Emerald** (`#34d399`): The `[ OK ]` tokens, status dots, "4 devices verified", "STATUS: PRODUCTION READY", availability pulse. It means only one thing: the system is healthy.

### Neutral
- **Surface** (`#111319`): Page ground; the field every console surface sits on.
- **Card Surface** (`#0c0e14`): Recessed screens — the full-width boot screen, project cards, stack panels, footer.
- **Surface Dim** (`#191b22`): Ghost button fills, tag chips, status pill backgrounds, terminal launch button.
- **Subtle Border** (`#2d3139`): 1px structural rules defining the text-mode grid.
- **Text Primary** (`#ffffff`): Headlines and key values.
- **Text Muted** (`#94a3b8`): Body copy, secondary stack badges, footer links, BIOS instructions (7.5:1 on dark).
- **Text Variant** (`#cfc2d6`): Boot-line content, metric lists, stack rows.

### Named Rules
**The One Health Signal Rule.** Emerald appears only as `[ OK ]`, status dots, and verified/ready markers. Any other green reads as the system lying.

**The Provenance Rule.** Every project card carries a visible `origin:` ticket naming its repository. Proof is on the surface, never implied.

## Typography

**Display Font:** Inter (with system-ui fallback)
**Body Font:** Inter (with system-ui fallback)
**Console Font:** JetBrains Mono (with Cascadia Code, ui-monospace fallback)

**Character:** Inter carries the human voice — the headline, the value proposition, section titles. JetBrains Mono is the machine voice: every status line, timestamp, tag, keyed action, and section label speaks console. The pairing is the product: a person running a system, readable to both technical and non-technical recruiters.

### Hierarchy
- **Display** (800, `clamp(1.875rem, 4vw, 3rem)`, 1.15): The hero headline, the system's stated purpose, on the boot screen. Max line length ~55ch.
- **Headline** (700, `1.5rem`, 1.25): Section titles and terminal promo title.
- **Body** (400, `1rem`, 1.65): The value proposition and project descriptions; ~65ch max measure.
- **Console** (400, `0.75rem`, 1.5): Boot lines, stack rows, metrics, tags, footer links — the default machine voice for dense content.
- **Console Micro** (400, `0.6875rem`, 1.5): BIOS instructions, footer status line.
- **Label Caps** (500, `0.75rem`, 0.05em tracking): Section mono labels like `DIRECTORY_LISTING (~/projects)`.

### Named Rules
**The Tabular Numeral Rule.** All timestamps and status data use `font-variant-numeric: tabular-nums`, so the boot column lines up ruler-true.

**The Console Voice Rule.** Mono is not a costume here — it is the world's native voice. Any element that reports a system state speaks mono.

## Layout

- **Container**: Max width `1152px` (`max-w-6xl`), centered with responsive side padding (`px-6`).
- **Boot screen**: The hero is a **full-width band** (`bg-[#0c0e14]`, top/bottom rules only, no rounding, no inset shadow) — it is THE screen, not a panel. Content inside is constrained to the container.
- **Rhythm**: Generous section spacing (`py-20`, `5rem`); the hero uses `py-12` so the boot screen, READY line, and keyed actions fit the first viewport.
- **Grids**: 2x2 for project cards, 4-column matrix for the stack (2-col at `sm`, 1-col stacked below), 3-col for tenets, collapsing to single columns on mobile.
- **Fixed header**: A console status line (`bazaes@sys-core:~$`) with keyed nav `[1]`–`[4]`, terminal launcher, ES/EN toggle, and copy-email button; opaque surface, hairline bottom rule.

## Elevation & Depth

Depth is conveyed by **tonal layering and hairline rules, not shadows**. The recessed card surface (`#0c0e14`) against the page ground (`#111319`) is the whole elevation system; borders do the separating. Zero-offset violet glow shadows are deliberately absent — the one emphasized moment is the cascade-resolve boot and the blinking cursor, which carry no glow.

A subtle CRT scanline overlay (fixed, `z-40`, pointer-events-none, repeating 3px lines at low opacity) textures every surface with phosphor grain. It is tuned to preserve legibility (≤1 luminance unit of darkening).

## Shapes

- **Console screens** are square-cornered: no rounding on the boot screen, project cards use `rounded-lg` (12px), stack panels and tenets `rounded-lg`.
- **Pills** (`rounded-full`): availability status, tag chips, category badges.
- **Buttons**: `rounded-lg` (12px) with a hairline border on ghost variants.
- **Dotted leaders**: boot and MOUNT lines use a dotted rule (`border-dotted #2d3139`) connecting label to `[ OK ]` — the text-mode fill between columns.

## Components

### The Boot Screen (signature)
- **Background:** full-width `#0c0e14`, top/bottom `#2d3139` rules, square corners.
- **BIOS header:** `>_ nb@sys-core:~` (muted) left, `BAZAES_SYSTEM v2.7 · Power-On Self Test` (amber, caps) right; hairline rule below.
- **Availability pill:** `#191b22` fill, `#2d3139` border, pulsing emerald dot, mono text.
- **POST lines:** `t=0.06s` amber tabular timestamps, label (muted), value (`#ddb7ff`), dotted leader, emerald `[ OK ]`. Repos render as `MOUNT /srv/<repo>` linking to GitHub.
- **README motion:** lines reveal sequentially (350ms start, 420ms stagger) via a `.post-line` opacity/translate lit state; each `[ OK ]` resolves with a `max-width` cascade. `prefers-reduced-motion` shows all lines settled.
- **READY line:** emerald caps with pulsing status dot and a blinking violet cursor block.
- **Keyed actions:** `[1]` primary violet, `[2]` ghost, `[3]` copy email (bordered).

### Buttons
- **Shape:** `rounded-lg` (12px), solid fill.
- **Primary:** Deep Violet (`#9333ea`) fill, white text, padding `12px 24px`. Hover brightens to `#a855f7`. Contrast ≥4.5:1.
- **Ghost:** `#191b22` fill, `#2d3139` border, `#ddb7ff` text; hover border becomes violet.

### Cards / Containers
- **Corner Style:** `rounded-lg` (12px).
- **Background:** `#0c0e14` on `#111319` ground.
- **Border:** 1px `#2d3139`, violet-tinted on hover.
- **Shadow Strategy:** none at rest; no zero-offset halos.
- **Internal Padding:** `24–28px` (`p-6 sm:p-7`).

### Chips
- **Tags:** `#191b22` fill, `#2d3139/60` border, `#cfc2d6` mono text, `rounded`.
- **Category badges:** `#191b22` fill, `#ddb7ff` text, mono, `rounded`.

### Navigation
- **Style:** fixed console status line, opaque `#111319/95`, hairline `#2d3139` bottom rule, height `3.5rem`.
- **Items:** keyed `[1] Overview [2] Projects [3] Stack [4] Philosophy` mono text; hover light-violet.
- **Mobile:** keyed nav hidden below `md`; terminal launcher and ES/EN toggle remain.

### Footer
- `#0c0e14` fill, hairline top rule, keyed links `[g] github [l] linkedin [m] email [t] cli`, emerald "System Status: Operational" dot, mono micro text.

## Do's and Don'ts

### Do:
- **Do** keep the hero a single full-width boot screen — no floating terminal card, no sidebar.
- **Do** reserve emerald for `[ OK ]` and health markers only.
- **Do** carry a provenance `origin:` ticket on every project.
- **Do** use tabular numerals for all timestamps and status columns.
- **Do** keep violet for focal points and the primary action; let the ground breathe.

### Don't:
- **Don't** add glow shadows (`shadow-[0_0_…]`) to buttons, cards, or the logo — the boot cascade is the one authored moment.
- **Don't** round the boot screen; it is the machine's screen, not a card.
- **Don't** use the muted text color below 4.5:1 on dark surfaces (avoid `opacity-*` on small text).
- **Don't** return to the card-heavy 60/40 hero or a grid of same-size icon+text cards as the page structure.
- **Don't** truncate repo names on mobile — let them wrap (`break-words`).