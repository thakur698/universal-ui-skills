---
name: ui-design-direction
description: Creates a distinctive visual and interaction direction for a web or mobile product before implementation.
---

# UI Design Direction

## Mission

Establish a clear, product-specific visual language *before* you write layout code or define component styles.

"Why does this UI look like THIS product?"

## Required Design Direction

For every substantial UI task, you must establish the following elements before proceeding to implementation:

1. **Product Identity**: What is this product?
2. **Target User**: Who is using it?
3. **Primary User Goal**: What is the main action they are trying to achieve?
4. **Emotional Tone**: Should it feel secure, playful, clinical, energetic, premium?
5. **Visual Metaphor**: Does it resemble a control panel, a document, a physical object, a canvas?
6. **Typography Direction**: What fonts convey the tone? What is the display vs. body strategy?
7. **Color Roles**: Primary brand color, semantic colors (success, error), background and surface hues.
8. **Surface Strategy**: Flat vs. layered, contrast ratios.
9. **Border Strategy**: Hard outlines vs. soft dividers, thickness.
10. **Radius System**: Sharp corners, slight rounding, or fully rounded/pill?
11. **Depth Model**: Flat, subtle drop shadows, atmospheric depth, or inner shadows?
12. **Imagery Strategy**: Photographs, vectors, abstract shapes, or none?
13. **Icon Strategy**: Outlined, filled, duotone, weight matching typography?
14. **Motion Personality**: Snappy, fluid, springy, or instant?
15. **Density Strategy**: High density (data-heavy) vs. low density (consumer-friendly).

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

## Hero Decision Engine

```text
Website Brief
     ↓
What is the product?
     ↓
What should the hero visually communicate?
     ↓
Choose primary visual medium
     │
     ├── Product → interactive product visualization
     ├── Physical object → cinematic imagery / 3D / layered media
     ├── Developer tool → live interface / diagram / telemetry
     ├── Brand → editorial imagery / art direction
     ├── Data product → animated data visualization
     ├── Storytelling site → scroll-linked cinematic composition
     └── Other → custom visual concept
     ↓
Choose motion behavior
     ↓
Choose responsive fallback
     ↓
Implement
     ↓
Visual Critic
     ↓
Preflight
Hero anti-slop gate
```

## Documentation

Document your decisions using the `docs/design-direction-template.md` format.
Do not skip this step. A generic, unconsidered aesthetic is what leads to AI slop.
