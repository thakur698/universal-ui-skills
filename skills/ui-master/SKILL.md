---
name: ui-master
description: Master orchestration layer for Universal UI Skills v2. Orchestrates the rigorous design pipeline from Brief to Pre-Flight with first-class media and scroll storytelling.
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
Media Plan (via ui-media-composition)
  ↓
Scroll Story Plan (via ui-scroll-storytelling)
  ↓
Asset Plan (via ui-assets)
  ↓
Implementation (via ui-web / ui-react / ui-mobile / ui-flutter)
  ↓
Motion (via ui-motion / ui-cinematic-motion)
  ↓
Responsive (via ui-layout-responsive)
  ↓
Accessibility (via ui-accessibility)
  ↓
Visual Render (via ui-visual-qa)
  ↓
Visual Critic (via ui-visual-critic)
  ↓
Fix (Loop until Critic Score >= 8)
  ↓
Re-render
  ↓
Pre-flight (via ui-preflight)
  ↓
Final UI Task Complete
```

## Core Design Principles

1. **Media-First Visual Storytelling (Use More Images Than Icons)**: Maximize use of `IMAGE`, `VIDEO`, `ILLUSTRATION`, `DIAGRAM`, and `TYPOGRAPHY`. Whenever building websites, apps, or UI, use more and more images than icons. Icons are strictly utility elements for navigation and small actions, NEVER the primary visual storytelling language.
2. **Zero Pills (Strictly Forbidden)**: Do NOT create pills. Strictly avoid `rounded-full` pill badges, floating pill tags, pill chips, or pill containers (`px-3 py-1 rounded-full`). Use clean typographic hierarchy, micro-borders, or spatial layout instead.
3. **No Background Color Behind Icons (Strictly Forbidden)**: Do NOT add background colors, tinted boxes, colored circles, square containers, or glass tiles behind icons (e.g. `bg-primary/10 rounded-xl p-3`). Icons must sit directly on the surface or inline with copy without decorative box fills.
4. **Intentional Scroll Storytelling**: Use scroll interactions (pins, reveals, video scrubs, parallax) only where they elevate the narrative. Never animate every section simply because the capability exists.
5. **Strict Media/Scroll Pre-Planning**: `Media Plan` and `Scroll Story Plan` MUST be defined before writing implementation code.
6. **Iterative Adversarial Loop**: Do not treat generation as a one-shot task. The `CRITIC → FIX → RENDER` loop is mandatory.

## Execution & Reporting Requirements

At the conclusion of every UI task, the agent must output a structured execution report:

```text
DESIGN DIALS
SCROLL_INTERACTION: [1-10]
MEDIA_PROMINENCE: [1-10]
CINEMATIC_INTENSITY: [1-10]
BENTO_COMPLEXITY: [1-10]

MEDIA PLAN:
[Summary of media types, roles, scales, and treatments - images prioritized over icons]

SCROLL STORY:
[Summary of scroll patterns, sticky/pinned behaviors, choreography]

MOTION:
[Summary of micro, standard, and cinematic motion implementations]

VIDEO: [Used / Not Used]
PARALLAX: [Used / Not Used]
STICKY/PINNED: [Used / Not Used]

VISUAL QA:
[Responsive render verification across mobile and desktop]

REDUCED MOTION:
[Verification of prefers-reduced-motion fallback]

MOBILE FALLBACK:
[Strategy for mobile recomposition and scroll fallback]

ANTI-SLOP:
[Verification that generic AI tropes, pill badges/chips, icon background containers, and repetitive icon cards were eliminated]

PRE-FLIGHT:
PASS / FAIL [All binary pre-flight gates passed]
```

