---
name: ui-composition-engine
description: Defines concrete layout libraries, premium bento systems, and strict composition constraints to prevent repetitive slop.
---

# UI Composition Engine

## Mission

Abstract rules like "avoid repetitive layouts" fail in practice. The Composition Engine defines a library of layout families, a first-class premium Bento system, and strict mechanical rules for combining them across Desktop and Mobile.

---

## Layout Families

The agent must consciously select from these structural families:
- **ASYMMETRIC HERO**: Off-center focal points, unequal column weights, dramatic visual balance.
- **EDITORIAL SPLIT**: Hard 50/50 vertical division pairing bold typography with high-impact media.
- **FULL-WIDTH VISUAL**: Immersive, edge-to-edge media carrying narrative weight.
- **PREMIUM BENTO**: Asymmetric, compartmentalized tiles with high media dominance and variable cell sizes.
- **STICKY STORY / SPLIT-PIN**: Pinned media or diagram on one side while narrative points scroll past.
- **OFFSET GRID**: Staggered items breaking strict row/column alignment.
- **MASONRY**: Interlocking tiles of varying heights.
- **STACKED STORY**: Narrative, sequential horizontal blocks with staged reveals.
- **DENSE DATA**: High information density matrices, tables, or telemetry clusters.
- **IMMERSIVE IMAGE**: Photography or 3D visual dictates the structural geometry.
- **TEXT-LED**: Typography is the primary visual asset; zero/minimal imagery.
- **INTERACTION-LED**: The interface is an interactive canvas/tool, not a passive document.
- **DIAGRAM-LED**: Technical, architectural, and structural system visualization.

---

## The Premium Bento System

A Bento layout must **NEVER** mean "many identical rounded cards arranged in a generic grid with an icon in each card."

### Core Bento Requirements:
1. **Visual Hierarchy & Anchors**: 1 or 2 cells MUST act as dominant visual anchors (e.g. `col-span-2 row-span-2` or full-width banner).
2. **Variable Cell Sizes & Asymmetry**: Mix large hero cells ($50\%\text{--}65\%$ area) with compact detail cells.
3. **Media Dominance**: Feature real visual assets—full-bleed screenshots, interactive models, live latency maps, technical diagrams—not empty text boxes.
4. **Editorial Captions**: Pair visual tiles with terse, high-impact editorial copy rather than paragraph dumps.
5. **Edge-Aligned Content & Insets**: Align telemetry numbers, badges, or code tokens cleanly to cell perimeters.
6. **Intentional Rhythm & Negative Space**: Avoid uniform card walls; introduce optical breathing room and varied aspect ratios ($16:9$, $1:1$, $21:9$).
7. **Interactive Cells**: Include live preview toggles, scrubbable widgets, or hover-reactive states where appropriate.

### Banned Bento Anti-Patterns:
- ❌ 6 identical white-on-white or dark-on-dark cards with identical padding and radius.
- ❌ Every card containing a random generic icon in a rounded square.
- ❌ Meaningless placeholder metric cards ("99.9% Faster") without concrete data context.
- ❌ Decorative mini dashboards that lack functional meaning.

---

## Strict Composition Rules

1. **Variance Rule**: No layout family may dominate the whole page. For an 8-section landing page, you MUST use a minimum of 4 distinct composition families.
2. **Fatigue Rule**: Maximum 2 consecutive image/text splits.
3. **Bento Rule**: No empty bento cells; exact cell count must match content.
4. **Hero Rule**: No repeated hero structures (do not use a Hero layout twice on one page).
5. **Mobile Recomposition**: Mobile composition MUST be intentionally recomposed. Do not just blindly `flex-direction: column`. Consider thumb-zones, sticky navs, and horizontal scrolling for dense data.
6. **Icon-Grid Ban**: Do not use `[Icon] + Title + Description` grids repeated 3–6 times as the primary feature presentation. Prefer media-rich, diagram-led, or bento compositions.

---

## Execution

Before implementing, the agent must output a `COMPOSITION MAP` assigning a specific layout family to each section of the UI:

```text
COMPOSITION MAP:
- Hero: ASYMMETRIC HERO (Diagram-led terminal + live endpoint status)
- Proof: FULL-WIDTH LOGO STRIP (Monochrome verified SVG marks)
- Features: PREMIUM BENTO (Anchor cell with live telemetry map + 2 technical sub-tiles)
- Deep Dive: STICKY STORY (Pinned architecture diagram + 3 scrolling integration phases)
- Performance: DENSE DATA (Sub-millisecond latency benchmark matrix)
- CTA: EDITORIAL SPLIT (Single focused action + typography)
```
