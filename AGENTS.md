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

