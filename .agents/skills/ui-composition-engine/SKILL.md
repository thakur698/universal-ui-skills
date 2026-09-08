---
name: ui-composition-engine
description: Defines concrete layout libraries and strict composition constraints to prevent repetitive slop.
---

# UI Composition Engine

## Mission

Abstract rules like "avoid repetitive layouts" fail in practice. The Composition Engine defines a library of layout families and strict mechanical rules for combining them across Desktop and Mobile.

## Layout Families

The agent must consciously select from these (or similar) structural families:
- **ASYMMETRIC HERO**: Off-center focal points, unequal column weights.
- **EDITORIAL SPLIT**: Hard 50/50 vertical division, often text/image.
- **FULL-WIDTH VISUAL**: Immersive, edge-to-edge media.
- **OFFSET GRID**: Staggered items breaking the strict row/column alignment.
- **MASONRY**: Interlocking tiles of varying heights.
- **BENTO**: Dense, compartmentalized information blocks of varying sizes.
- **STACKED STORY**: Narrative, sequential horizontal blocks.
- **DENSE DATA**: Tables, tight lists, high information density.
- **IMMERSIVE IMAGE**: Photography dictates the layout structure.
- **TEXT-LED**: Typography is the primary visual asset; zero/minimal imagery.
- **INTERACTION-LED**: The interface is an interactive canvas/tool, not a document.
- **DIAGRAM-LED**: Technical, architectural, structural visualization.

## Strict Composition Rules

1. **Variance Rule**: No layout family may dominate the whole page. For an 8-section landing page, you MUST use a minimum of 4 distinct composition families.
2. **Fatigue Rule**: Maximum 2 consecutive image/text splits.
3. **Bento Rule**: No empty bento cells.
4. **Hero Rule**: No repeated hero structures (do not use a Hero layout twice on one page).
5. **Mobile Recomposition**: Mobile composition MUST be intentionally recomposed. Do not just blindly `flex-direction: column`. Consider thumb-zones, sticky navs, and horizontal scrolling for dense data.

## Execution
- Before implementing, the agent must output a `COMPOSITION MAP` assigning a specific layout family to each section of the UI.
