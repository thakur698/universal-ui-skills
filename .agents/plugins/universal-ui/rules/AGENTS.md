# Agent Instructions

This repository is a reusable UI skill system.

## Mandatory behavior

Before implementing substantial UI:
1. inspect the existing project
2. understand the product and target users
3. read applicable UI skills
4. establish a design direction
5. define or reuse the design system
6. implement
7. validate responsive behavior
8. validate accessibility
9. run visual QA
10. perform anti-slop review

## Core rule

Do not optimize for "looks modern".

Optimize for:
- product fit
- clarity
- hierarchy
- consistency
- distinctiveness
- usability
- evidence-based polish

Do not rewrite unrelated functionality merely to change visual code.

## Media-First Visual Language & Anti-Slop Rules

Universal UI Skills strictly mandates **IMAGE, VIDEO, ILLUSTRATION, DIAGRAM, AND TYPOGRAPHY** over icons. Whenever building a website, app, landing page, or dashboard:

### 1. Image Dominance Over Icons (Mandatory)
- **Use more and more images than icons**: Primary visual communication MUST be carried by rich images, real photography, product renders, UI captures, 3D artwork, custom illustrations, or architectural diagrams.
- Icons are strictly utility tools (navigation, search, close, menu, status, playback, small actions), NEVER the primary visual storytelling language.
- If you have a choice between an icon and an image/render/diagram/photo, ALWAYS choose the image.

### 2. Zero Pills (Strictly Forbidden)
- **Do NOT create pills**: No `rounded-full` pill badges, pill tags, floating pill chips, or pill containers (e.g., `<span class="rounded-full px-3 py-1 bg-...">✨ AI Powered</span>` or pill-shaped category labels).
- Use clean typographic hierarchy, micro-rules, subtle borders, or spatial whitespace instead of pill containers.

### 3. No Background Color Behind Icons (Strictly Forbidden)
- **Do NOT add background color behind icons**: Never wrap an icon in a colored box, tinted container, circular backdrop, rounded square tile, or glassmorphic background (e.g., `<div class="bg-blue-100 rounded-lg p-2"><Icon /></div>` or `<div class="p-3 rounded-full bg-primary/10"><Icon /></div>` is strictly forbidden).
- Icons must sit cleanly and directly on the surface or inline with text, with zero container background fill or tinted backdrops.

### Visual Hierarchy Priority
1. Product imagery / photography
2. Custom illustrations / diagrams
3. Rich media / video
4. Typography + composition
5. Interactive visual objects
6. Premium animated icons (Lottie / Rive)
7. Static utility icons

### Icon Usage Rules
Icons are strictly utility elements (navigation, search, close, menu, status, playback, small actions).
When an icon is genuinely useful, prefer:
1. Interactive Rive icon/object
2. Premium Lottie animation
3. Carefully selected static utility icon

Avoid:
- Emoji as UI icons
- Generic icon grids
- Icon + heading + paragraph repeated across cards
- Decorative iconography used only to fill empty space
- Replacing meaningful imagery with arbitrary icons
- Adding background colors, shapes, or boxes behind icons
- Pill-shaped badges, chips, or tag containers

## Visitor Mode Discipline

Every surface has an intentional visitor mode. Success differs by mode:
- **Persuade**: Landing pages, marketing, campaigns. Visitor decides and acts; design is the product; high emotional resonance, real media, and clear conversion paths.
- **Operate**: Dashboards, editors, tools, admin. Visitor completes a task; the tool disappears into the task; scanability, data density, keyboard efficiency, and standard affordances outrank expressive flash.
- **Read**: Documentation, articles, changelogs. Visitor seeks comprehension; line length (measure 65-75ch), typographic hierarchy, and serene reading environment.
- **Experience**: Portfolios, galleries, showcases. The artifact leads from the first viewport; UI recedes.

Never apply marketing landing page tropes (huge display headings, sparse giant cards, decorative bento boxes) to Operate surfaces where users need high density and speed.

## The Craft Floor (Mandatory Quality Standards & Refusals)

Every interface must meet the uncompromised Craft Floor:

### 1. Themed Browser Surfaces
The parts you did not draw still carry the design. Theme them from the brand palette:
- Custom `::selection` background and text color matching the palette.
- Input `caret-color` set to the primary brand hue.
- Custom styled scrollbars (`scrollbar-color` / `::-webkit-scrollbar`).
- Distinct `:focus-visible` outline with offset (never default browser blue halos).
- `text-underline-offset: 0.2em` on inline links.
- Tabular figures (`font-variant-numeric: tabular-nums`) on all numeric data, counts, tables, and timers to prevent digit jitter.

### 2. Single Elevation Discipline (No Ghost Cards)
- Declare elevation once: either a subtle border OR a shadow. Never stack a 1px border under a wide soft shadow ("ghost cards").
- Shadows must carry an offset and a soft blur. A zero-offset colored blur is a glow halo / decoration, not depth.

### 3. Contrast & Secondary Text on Colored Surfaces
- Body copy contrast $\ge 4.5:1$, large text $\ge 3:1$.
- On colored surfaces, tint secondary text from that hue or the foreground; never generic washed-out gray.

### 4. Typography Floor
- Body measure strictly 65–75ch (prevent sprawling unreadable lines).
- Display headlines must use `text-wrap: balance` to eliminate orphan words; paragraphs use `text-wrap: pretty`.
- Letter spacing floor: tracking stops at -0.04em (never over-tighten body text).
- Form inputs must maintain `font-size: 1rem (16px)` on mobile viewports to prevent iOS Safari auto-zooming.

### 5. Mechanical Refusals
- **No kicker / eyebrow on every heading**: Do not add repetitive uppercase category labels or pills above every heading; let headings speak for themselves.
- **No side-stripe borders**: Ban `border-left` or `border-right` colored indicator stripes on cards, list items, or callouts.
- **No nested cards**: Never place cards inside cards.
- **No image hover animations**: Never animate an image directly on hover; give the container or action trigger the feedback.
- **No fake mono**: Monospace is for code, data, timestamps, coordinates, or measurements — not a decorative costume for "technical".
- **No doodle SVGs**: Do not use amateur sketchy vector doodles to stand in for real illustrations or diagrams.


