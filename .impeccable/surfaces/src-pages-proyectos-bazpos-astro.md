---
version: 1
slug: "src-pages-proyectos-bazpos-astro"
primary_target: "src/pages/proyectos/bazpos.astro"
related_targets: ["src/pages/en/projects/bazpos.astro","src/components/bazpos/BazposProject.astro","src/components/bazpos/content.ts"]
---

# BazPOS presentation

- Routes: `/proyectos/bazpos/` and `/en/projects/bazpos/`; Persuade mode for recruiters and technical peers.
- Inherit Lavender Working Directory: light lavender surfaces, purple actions, Rethink Sans reading type and IBM Plex Mono for technical data.
- Structure: portfolio return → BazPOS proposition and sole external demo CTA → native walkthrough video → three real screenshots explaining sale, stock and reporting → architecture and engineering decisions.
- First viewport: a generous project title, a two-column introduction and actions, followed by the beginning of the real recording. No fictional UI or generated imagery.
- Primary action: one `Probar demo` / `Try the demo` link to the public demo per presentation page. All project discovery stays inside the portfolio; GitHub remains available as source evidence.
- Media: actual public-demo captures, a silent 72-second native MP4 walkthrough at `/bazpos/recorrido.mp4`, a reports-derived `/bazpos/portada.webp` poster, default localized VTT captions and an expandable text summary. No autoplay; video preload none; three 1440×900 screenshots are lazy loaded and link to their local full-size images, with visible localized enlargement captions and an external-link SVG.
- Layout: shared 1280px container and section rhythm; equal introduction and media-heading columns with 64px gaps. Each screenshot step keeps copy left and image right (0.7fr/1.3fr, 48px gap). Architecture uses three ruled columns; engineering decisions use a two-column definition list. Below 768px, these grids stack, tour spacing reduces from 64px to 40px, and architecture becomes horizontally paired rows.
- Type and material: reuse the global display ramp for the project title, with the proposition in purple; Rethink Sans carries the explanation and technology names, IBM Plex Mono the architecture roles. The native player uses 12px corners and screenshots 8px, both with a structural hairline; the engineering band uses the recessed surface. Shared tokens live in src/styles/tokens.css.
- Responsive: native player controls, visible keyboard focus, complete ES/EN static content and captions; portfolio return, locale navigation, media and source links work without JavaScript.
- Scope excludes live API dependencies, iframe embedding, production deployment and redesign of the existing portfolio.
- Recorded from `src/components/bazpos/BazposProject.astro`, `content.ts`, route wrappers and `src/styles/global.css`; visual evidence: `.impeccable/review/refinement/bazpos-{es,en}-{desktop,mobile}.png`. Finish review: ship. Global `DESIGN.md` and `.impeccable/design.json` document the new shared Lavender Working Directory system.

- **Themes**: shared light lavender and dark plum palettes. A localized sun/moon control follows the system until a manual choice is saved; the choice persists across pages and languages.
