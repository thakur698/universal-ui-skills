---
name: ui-reference-first
description: Enforces a reference-analysis phase before coding, ensuring design decisions are extracted from concrete examples.
---

# UI Reference-First Pipeline

## Mission

Do not rely on the LLM's generic baseline aesthetic. Real design relies on moodboards and references. The Reference-First Pipeline ensures that concrete metrics, media strategies, and scroll choreography are extracted from visual references before any code is generated.

---

## The Pipeline

```text
USER BRIEF
   ↓
REFERENCE SEARCH / GENERATION
   ↓
REFERENCE BOARD
   ↓
DESIGN & MEDIA ANALYSIS
   ↓
COMPOSITION MAP (with Scroll & Media Intent)
   ↓
IMPLEMENTATION
```

---

## Execution Steps

1. **Locate or Generate References**:
   - If the user provides an image or URL, perform visual analysis.
   - If the agent supports image generation or web search, generate/find structural references for specific sections (e.g. Hero visual, sticky workflow, bento grid, mobile layout).
2. **Extract Metrics (The Design Analysis)**:
   Do not just say "it looks nice". Mechanically extract:
   - **Grid & Layout Family**: (e.g. 12-column, asymmetric 60/40, bento matrix, sticky split)
   - **Media Strategy**: (e.g. Full-bleed editorial photography, interactive terminal, 3D device render, technical node diagram)
   - **Scroll & Motion Behaviors**: (e.g. Pinned viewport stage, parallax background layer, scroll fade, video scrubbing)
   - **Typography**: (e.g. Display sans, tight tracking, monospace technical accents)
   - **Spacing & Density**: (e.g. 8px baseline, expansive 140px section gutters, dense telemetry clusters)
   - **Shape Language**: (e.g. 8px unified radius, sharp borders, glass highlight overlay)
   - **Color & Contrast**: (e.g. Neutral dark base `#09090b` with single `#10b981` emerald accent)
3. **Build Composition Map**:
   - Translate extracted metrics into the concrete section blueprints (layout families, media roles, scroll triggers).

---

## Example Composition Map Extraction

```text
COMPOSITION MAP:
- Hero:
  - Layout: ASYMMETRIC HERO
  - Media: Live interactive terminal + sub-10ms SLA indicator
  - Motion: Staged entrance (terminal scale-in + headline fade-up)
- Proof Strip:
  - Layout: FULL-WIDTH LOGO WALL
  - Media: Monochrome verified SVG brand marks
- Features:
  - Layout: PREMIUM BENTO
  - Media: Anchor tile with global edge telemetry map; 2 technical sub-tiles
  - Scroll: Staggered reveal upon 30% viewport entry
- Story Section:
  - Layout: STICKY STORY (SPLIT-PIN)
  - Media: Pinned cluster architecture visual
  - Scroll: Sticky left column while 3 deployment phases scroll on right
```

---

## Rules
- The agent MUST explicitly state the extracted reference metrics, media plan, and scroll choreography before writing CSS or markup.
- Do not blindly copy references: extract the underlying structural, media, and interaction strategy.
