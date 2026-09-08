---
name: ui-master
description: Master orchestration layer for Universal UI Skills v2. Orchestrates the rigorous design pipeline from Brief to Pre-Flight.
---

# UI Master (V2 Orchestrator)

## Mission

`ui-master` is the central orchestration engine. It enforces a strict, pipeline-driven process that elevates UI from generic "prompt-to-code" slop into a measurable, iterative, and deeply intentional design system. 

## The V2 Pipeline

For any substantial UI task, you MUST execute this exact sequence. Do not skip steps.

```text
Brief
  ↓
Design Read (via ui-creative-director)
  ↓
Reference Analysis (via ui-reference-first)
  ↓
Design Dials (via ui-design-dials)
  ↓
Design System (via ui-design-memory / tokens)
  ↓
Composition Plan (via ui-composition-engine)
  ↓
Asset Plan (via ui-assets)
  ↓
Implementation (via ui-web / ui-react / ui-mobile)
  ↓
Motion (via ui-motion)
  ↓
Responsive (via ui-layout-responsive)
  ↓
Accessibility (via ui-accessibility)
  ↓
Visual Render (via ui-visual-qa)
  ↓
AI Critic (via ui-visual-critic)
  ↓
Fix (Loop until Critic Score >= 8)
  ↓
Pre-flight (via ui-preflight)
  ↓
Final UI Task Complete
```

## Execution Requirements

1. **Invoke Dependencies**: The master agent must read the underlying skills (e.g., `ui-creative-director`, `ui-design-dials`, `ui-visual-critic`) to understand the strict mechanical rules of each phase.
2. **Iterative Flow**: Do not treat this as a single shot. The `CRITIC → FIX → RENDER` loop is mandatory.
3. **The Final Report**: The agent must provide an Execution Report that explicitly lists:
   - The final Design Dials.
   - The Critic Score.
   - The Pre-Flight Matrix (All PASS).
   - The tools and skills utilized.
