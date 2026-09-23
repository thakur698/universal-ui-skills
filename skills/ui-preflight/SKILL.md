---
name: ui-preflight
description: The final, binary mechanical gate that prevents broken or fundamentally flawed designs from being delivered.
---

# UI Pre-Flight Gates

## Mission

While the Visual Critic scores aesthetics, the Pre-Flight Gate enforces hard mechanical rules. A design that fails ANY pre-flight gate is NOT DONE.

---

## INTERACTIVE HERO MANDATE

For website UI tasks, DO NOT default to:
- centered headline
- subtitle
- two buttons
- static image
- generic gradient background
- empty whitespace
- generic SaaS hero template

The default hero must be an intentional visual experience.

REQUIRED:
1. A product-specific visual concept.
2. Meaningful imagery, product render, illustration, video, diagram, environmental scene, or other rich media.
3. Purposeful motion or interaction.
4. Strong visual depth/layering where appropriate.
5. Responsive behavior that preserves the concept on mobile.

PREFERRED:
- animated image layers
- parallax depth
- cursor/reactive visuals
- scroll-linked transformation
- video or frame sequencing
- interactive product visualization
- layered typography/media choreography
- animated diagrams
- Rive/Lottie interactive visual objects where they add meaning

The hero should communicate the product before the user reads every word.

Do not add animation merely to satisfy this rule. Motion must reinforce hierarchy, product meaning, spatial depth, interaction, or storytelling.

---

## Hard Pre-Flight Matrix

Evaluate the design against these binary (PASS/FAIL) rules:

### Layout & Composition Gates:
- [ ] **FAIL: CTA wraps on desktop.** (Primary action buttons must fit on a single line).
- [ ] **FAIL: Same composition repeated too many times.** (Violates the Variance Rule).
- [ ] **FAIL: Generic card grid used without reason.** (Bento/Grids must have distinct purpose and hierarchy).
- [ ] **FAIL: Bento is merely repeated cards.** (Bento layouts must feature asymmetric spans and visual anchors).
- [ ] **FAIL: PILL_CONTAINER_OR_BADGE.** (Created pill badges, tags, chips, floating pill eyebrows, or `rounded-full` pill containers).
- [ ] **FAIL: ICON_BACKGROUND_CONTAINER.** (Added background color, tinted box, circle backdrop, or container tile behind an icon).
- [ ] **FAIL: ICON_SUBSTITUTION / INSUFFICIENT_IMAGE_PRIORITY.** (Relied on icons instead of prioritizing rich images, real photography, product renders, illustrations, or diagrams for content communication).
- [ ] **FAIL: Static icon used where animated/interactive visual belongs.** (Static glyph used when a Lottie/Rive or canvas interaction would materially clarify the feature).
- [ ] **FAIL: Same eyebrow pattern repeated.** (e.g., "FEATURES", "BENEFITS" in small colored caps above every H2).
- [ ] **FAIL: GHOST_CARD_ELEVATION.** (Competing border and wide soft shadow on the same element).
- [ ] **FAIL: ZERO_OFFSET_GLOW_HALO.** (Glow halo masquerading as depth; shadows must have a y-offset).
- [ ] **FAIL: SIDE_STRIPE_BORDER.** (Colored left/right edge stripe on cards or callouts).
- [ ] **FAIL: UNBALANCED_OR_OVERFLOW_MEASURE.** (Body line measure > 75ch, or missing `text-wrap: balance` on multi-line headlines).

### Scroll & Motion Gates:
- [ ] **FAIL: Scroll animation exists without purpose.** (Animation must communicate hierarchy, state, or storytelling).
- [ ] **FAIL: Parallax makes text hard to read.** (Text displacement must never compromise legibility).
- [ ] **FAIL: Sticky section traps user interaction.** (Sticky/pinned sections must release smoothly without scroll trapping).
- [ ] **FAIL: Video is required to understand core content but cannot load.** (Must provide static image/text fallback).
- [ ] **FAIL: Motion ignores reduced-motion behavior.** (Must strictly honor `prefers-reduced-motion`).
- [ ] **FAIL: Scroll effects cause visible jank.** (Must use GPU-accelerated transforms and throttled listeners).
- [ ] **FAIL: Visual hierarchy depends entirely on animation.** (Content must remain fully comprehensible when static).
- [ ] **FAIL: IMAGE_HOVER_ANIMATION.** (Animating an image directly on hover; feedback belongs on the container).

### Accessibility & Platform Gates:
- [ ] **FAIL: No mobile fallback / Broken pinned layout.** (Mobile viewports must not horizontally scroll or trap pins).
- [ ] **FAIL: Insufficient contrast.** (Text contrast below $4.5:1$ on body copy).
- [ ] **FAIL: Placeholder imagery.** (Fake/generic placeholder boxes left in final render).
- [ ] **FAIL: Broken loading/error/empty state.** (Edge cases not handled).
- [ ] **FAIL: BROWSER_SURFACES_UNTINTED.** (Default browser selection, blue focus ring, or unthemed scrollbars on themed UI).
- [ ] **FAIL: MOBILE_INPUT_ZOOM_RISK.** (Form inputs with font-size < 16px on mobile viewports).

### Hero Gates:
- [ ] **FAIL: HERO_STATIC_TEMPLATE.** (Website hero is substantially composed of headline + paragraph + primary CTA + secondary CTA + static decorative/background image with no meaningful visual interaction, motion, transformation, or product-specific visual storytelling. Exception: Documented reason related to brief, product, accessibility, performance, or platform constraints.)
- [ ] **PASS: HERO_VISUAL_STORY.** (The hero has a distinct visual concept, meaningful media, purposeful motion/interaction, clear hierarchy, product-specific storytelling, coherent reduced-motion fallback, and mobile translation.)


---

## Execution
- The agent MUST explicitly print the Pre-Flight Matrix check in its final report.
- If ANY item is marked FAIL, the agent must halt, fix the issue, and re-run the Pre-Flight check.
