---
name: ui-design-dials
description: A measurable control surface that dictates concrete design decisions using tunable 1-10 metrics.
---

# UI Design Dials

## Mission

Abstract design principles ("be creative," "avoid repetition") are insufficient. Design Dials provide a quantitative control surface. The agent must lock in these 1-10 dials based on the Creative Director's Read, and these dials MUST directly constrain implementation behavior.

---

## The 11 Dials (1-10 Scale)

### Core Dials:
1. **`DESIGN_VARIANCE` (1–10)**:
   - 1 = Strict, identical recurring lists/grids.
   - 10 = Highly irregular, asymmetric, bespoke layouts per section.
2. **`MOTION_INTENSITY` (1–10)**:
   - 1 = Zero motion, instant state changes.
   - 10 = Complex hero orchestration, spring physics, continuous background flow.
3. **`VISUAL_DENSITY` (1–10)**:
   - 1 = Extremely sparse, massive white space (Editorial).
   - 10 = Maximum information density (Trading terminal, IDE).
4. **`BRAND_EXPRESSIVENESS` (1–10)**:
   - 1 = Invisible, native-OS default components.
   - 10 = Highly opinionated, custom shapes, aggressive brand colors.
5. **`TYPOGRAPHIC_CHARACTER` (1–10)**:
   - 1 = System fonts (San Francisco, Inter), highly legible, neutral.
   - 10 = Display serifs, variable fonts, aggressive scale contrast, brutalist typography.
6. **`IMAGE_PROMINENCE` (1–10)**:
   - 1 = Text-only, zero imagery.
   - 10 = Immersive full-bleed imagery, photography dictates the layout.
7. **`INTERACTION_RICHNESS` (1–10)**:
   - 1 = Simple taps/clicks.
   - 10 = Complex gestures, drag-and-drop, spatial hover effects, haptic intent.

### Visual Storytelling & Media Dials:
8. **`SCROLL_INTERACTION` (1–10)**:
   - 1 = Standard static document scroll; zero scroll-driven transforms.
   - 10 = Heavy scroll choreography, pinned sticky stages, parallax layers, video scrubbing.
   - *Guidance:* Dial $= 2$ prefers subtle threshold reveals; Dial $= 9$ introduces sticky visual splits and scrubbed media.
9. **`MEDIA_PROMINENCE` (1–10)**:
   - 1 = Functional text and typography dominant; no decorative media.
   - 10 = Media-first storytelling; full-bleed photography, technical diagrams, video walkthroughs.
   - *Guidance:* High media prominence strictly forbids replacing images/diagrams with generic icon grids.
10. **`CINEMATIC_INTENSITY` (1–10)**:
    - 1 = Purely utilitarian transitions ($<150\text{ms}$).
    - 10 = Theatrical hero reveal sequences, mask/clip reveals, staged narrative transitions ($600\text{--}1200\text{ms}$).
11. **`BENTO_COMPLEXITY` (1–10)**:
    - 1 = Simple 2-column or 3-column equal grid.
    - 10 = Multi-span asymmetric bento matrix with full-bleed media anchors, live telemetry, and interactive cells.

---

## Dial Outputs

After the Design Read, the agent must output all 11 dial settings:

```text
DESIGN DIALS:
- DESIGN_VARIANCE: 8
- MOTION_INTENSITY: 6
- VISUAL_DENSITY: 5
- BRAND_EXPRESSIVENESS: 7
- TYPOGRAPHIC_CHARACTER: 7
- IMAGE_PROMINENCE: 8
- INTERACTION_RICHNESS: 6
- SCROLL_INTERACTION: 7
- MEDIA_PROMINENCE: 8
- CINEMATIC_INTENSITY: 6
- BENTO_COMPLEXITY: 7
```

---

## Implementation Constraints

- If `SCROLL_INTERACTION > 6`, the agent MUST include at least one pinned/sticky storytelling section or scroll-linked transform.
- If `SCROLL_INTERACTION <= 3`, the agent MUST rely on static layout and standard flow, avoiding scroll-hijacks.
- If `MEDIA_PROMINENCE > 6`, feature sections MUST use real diagrams, screenshots, or illustrations instead of icon lists.
- If `CINEMATIC_INTENSITY > 6`, the hero section MUST implement staged entrance choreography.
- If `BENTO_COMPLEXITY > 6`, bento layouts MUST feature asymmetric spans (`col-span-2`, `row-span-2`) with dominant visual anchors.
