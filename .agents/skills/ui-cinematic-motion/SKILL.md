---
name: ui-cinematic-motion
description: Choreographs high-end cinematic transitions, full-screen reveals, and staged motion hierarchies for hero and flagship sections.
---

# UI Cinematic Motion

## Mission

Cinematic motion brings editorial elegance and theatrical impact to flagship moments—such as hero reveals, key product launches, and narrative milestones. 

Cinematic does NOT mean slow, flashy, or constantly moving. It means **meticulous choreography, purposeful timing, and spatial depth** that guides the user's attention with precision.

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

## The Three Motion Tiers

| Tier | Duration / Scope | Application | Purpose |
|---|---|---|---|
| **MICRO** | $100\text{ms} - 200\text{ms}$ | Buttons, switches, hover states, active taps. | Instant tactile feedback confirming user input. |
| **STANDARD** | $250\text{ms} - 400\text{ms}$ | Modal dialogs, dropdowns, tab switching, drawer navigation. | Spatial continuity and layout transitions. |
| **CINEMATIC** | $600\text{ms} - 1200\text{ms}$ | Hero entrance choreography, full-screen narrative reveals, product unboxing, milestone transitions. | Theatrical storytelling, emotional impact, brand distinction. |

---

## Cinematic Motion Patterns

1. **STAGED ENTRANCE HIERARCHY**: Elements enter in a strict, rhythmic sequence:
   $$\text{Focal Visual / Media} \longrightarrow \text{Headline} \longrightarrow \text{Supporting Value Prop} \longrightarrow \text{Interactive Controls}$$
2. **MASK / CLIP REVEALS**: Geometric clip-path reveals (`inset()`, `polygon()`, `circle()`) that unveil imagery cleanly without spatial jank.
3. **SCALE & FADE TRANSITIONS**: Seamless expansion from compact preview card to full-viewport feature backdrop.
4. **FADE + TRANSLATE**: Restrained Y-axis translation ($12\text{px} - 32\text{px}$) with customized cubic-bezier curves (e.g. `cubic-bezier(0.16, 1, 0.3, 1)`).
5. **SEQUENTIAL REVEAL**: Staggered typography and data metric orchestration.
6. **SCROLL-SCRUBBED TRANSFORM**: Continuous 1:1 synchronization between user gesture and visual interpolation.

---

## Choreography Principles

- **Single Focal Path**: Only ONE major element moves with high prominence at any single moment. The eye must never be pulled in two opposing directions.
- **Physical Spring Dynamics**: Use natural easing curves (`stiffness: 120, damping: 20` or ease-out exponential curves). Linear easing is prohibited for cinematic moments.
- **Hardware Acceleration**: Animate strictly GPU-friendly properties: `transform` (`translate3d`, `scale`, `rotate`) and `opacity`. Never animate `top`, `left`, `width`, `height`, or `margin`.
- **Pre-computed Geometry**: Compute bounding boxes prior to animation to avoid layout recalculation thrashing.

---

## Accessibility & Reduced Motion

Cinematic motion must strictly respect the user's system preferences:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

In React / Flutter code:
- **Web**: Check `window.matchMedia('(prefers-reduced-motion: reduce)')` or use `useReducedMotion()`.
- **Flutter**: Query `MediaQuery.of(context).disableAnimations`.
- When active, render the final completed state immediately. Content must never depend on motion to become visible.

---

## Web & Flutter Guidance

### Web Implementation:
- Prefer native CSS keyframes and transitions for standalone hero reveals.
- Use Motion (`motion/react`) for layout transition orchestrations (`layoutId`, `AnimatePresence`).
- Keep bundle size minimal: avoid importing heavy GSAP plugins unless deep multi-track scrub choreography is explicitly required.

### Flutter Implementation:
- Combine `AnimationController` with `CurvedAnimation(parent: ..., curve: Curves.easeOutCubic)`.
- Use `Hero` widgets for shared element route transitions.
- Integrate Rive for vector-driven character or mechanical cinematic sequences.
