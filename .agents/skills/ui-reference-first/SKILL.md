---
name: ui-reference-first
description: Enforces a reference-analysis phase before coding, ensuring design decisions are extracted from concrete examples.
---

# UI Reference-First Pipeline

## Mission

Do not rely on the LLM's generic baseline aesthetic. Real design relies on moodboards and references. The Reference-First Pipeline ensures that concrete metrics are extracted from visual references before any code is generated.

## The Pipeline

```text
USER BRIEF
   ↓
REFERENCE SEARCH / GENERATION
   ↓
REFERENCE BOARD
   ↓
DESIGN ANALYSIS
   ↓
COMPOSITION MAP
   ↓
IMPLEMENTATION
```

## Execution Steps

1. **Locate or Generate References**:
   - If the user provides an image, use visual analysis.
   - If the host agent supports image generation or web search, generate/find structural references for specific sections (e.g., "Hero reference", "Pricing reference", "Mobile reference").
2. **Extract Metrics (The Design Analysis)**:
   Do not just say "it looks nice". Mechanically extract:
   - **Grid**: (e.g., 12-column, fluid masonry, hard-split 50/50)
   - **Typography**: (e.g., Serif headers, tracking tightly, high contrast scale)
   - **Spacing**: (e.g., 8px baseline, massive 120px section gaps)
   - **Image Scale**: (e.g., Bleeding off-canvas, contained in strict borders)
   - **Shape Language**: (e.g., Pill-shaped CTA, sharp 0px radii cards)
   - **Color**: (e.g., Monochromatic with a single neon accent)
   - **Depth**: (e.g., Flat 1px borders, heavy drop shadows, neumorphic)
3. **Build Composition Map**:
   - Translate the extracted metrics into the design tokens that will be used in the implementation phase.

## Rules
- The agent MUST explicitly state the extracted reference metrics before writing CSS or markup.
