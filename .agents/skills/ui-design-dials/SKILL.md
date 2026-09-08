---
name: ui-design-dials
description: A measurable control surface that dictates concrete design decisions using tunable 1-10 metrics.
---

# UI Design Dials

## Mission

Abstract design principles ("be creative," "avoid repetition") are insufficient. Design Dials provide a quantitative control surface. The agent must lock in these 1-10 dials based on the Creative Director's Read, and these dials MUST directly constrain implementation.

## The 7 Dials (1-10 Scale)

1. **DESIGN_VARIANCE**: 
   - 1 = Strict, identical recurring lists/grids.
   - 10 = Highly irregular, asymmetric, bespoke layouts per section.
2. **MOTION_INTENSITY**:
   - 1 = Zero motion, instant state changes.
   - 10 = Complex hero orchestration, spring physics, continuous background flow.
3. **VISUAL_DENSITY**:
   - 1 = Extremely sparse, massive white space (Editorial).
   - 10 = Maximum information density (Trading terminal, IDE).
4. **BRAND_EXPRESSIVENESS**:
   - 1 = Invisible, native-OS default components.
   - 10 = Highly opinionated, custom shapes, aggressive brand colors.
5. **TYPOGRAPHIC_CHARACTER**:
   - 1 = System fonts (San Francisco, Inter), highly legible, neutral.
   - 10 = Display serifs, variable fonts, aggressive scale contrast, brutalist typography.
6. **IMAGE_PROMINENCE**:
   - 1 = Text-only, zero imagery.
   - 10 = Immersive full-bleed imagery, photography dictates the layout.
7. **INTERACTION_RICHNESS**:
   - 1 = Simple taps/clicks.
   - 10 = Complex gestures, drag-and-drop, spatial hover effects, haptic intent.

## Usage

After the Design Read, the agent must output the dial settings:

```text
DESIGN_VARIANCE: 8
MOTION_INTENSITY: 7
VISUAL_DENSITY: 4
BRAND_EXPRESSIVENESS: 8
TYPOGRAPHIC_CHARACTER: 7
IMAGE_PROMINENCE: 6
INTERACTION_RICHNESS: 7
```

## Implementation Rules
- If `DESIGN_VARIANCE > 7`, the agent MUST use at least 4 different composition families in a single page.
- If `VISUAL_DENSITY > 7`, the agent MUST use tighter padding tokens and smaller base font sizes.
- If `BRAND_EXPRESSIVENESS < 3`, the agent MUST reject complex gradients or custom border-radii.
