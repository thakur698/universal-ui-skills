# Failure Analysis Guide

This directory manages the structured failure analysis records for Universal UI Skills benchmarks.

## Core Principle

> **A benchmark loss is valid data. Do not change the result to make V2 win. Use losses to identify and test better dial settings.**

In an empirical benchmark system, failure is not a flaw in the evaluation—it is the primary feedback mechanism that enables the V2 design engine to improve. When Universal UI V2 underperforms against a baseline or alternative approach, that gap reveals miscalibrated design dials, flawed layout heuristics, or deficient composition rules.

---

## Standard Failure Taxonomy

When auditing or documenting benchmark deficiencies, assign each observed defect to one or more of the standard failure taxonomy categories:

| Taxonomy Tag | Definition | Typical Manifestation |
|---|---|---|
| `hierarchy` | Flawed visual prioritization | Primary action obscured; competing focal points; headings failing to establish reading order. |
| `typography` | Typographic breakdown | Inappropriate font pairing; illegible body sizes; excessive tracking; lack of weight contrast. |
| `spacing` | Irregular spatial pacing | Inconsistent padding scales; crowded touch targets; lack of optical grouping. |
| `composition` | Layout structure failure | Bento or asymmetric grid applied where rigid data tables were required; awkward card balance. |
| `product-fit` | Emotional/functional dissonance | Enterprise tool styled like a playful mobile game; fintech dashboard styled like a brutalist blog. |
| `distinctiveness` | Lack of identity or excessive quirk | Regressing to generic boilerplate or introducing bizarre layouts that harm usability. |
| `responsive` | Breakpoint reflow failure | Content clipping on mobile viewports; horizontal overflow; unreadable mobile typography. |
| `accessibility` | Inclusive design violation | Sub-4.5:1 text contrast ratios; missing ARIA attributes; touch targets below 48x48px. |
| `motion` | Animation defect | Excessive animation duration causing perceived lag; missing `prefers-reduced-motion` compliance. |
| `anti-slop` | Repetitive AI tropes | Purple/indigo gradient glow overlays; decorative floating badges; rounded-3xl container obsession. |
| `information-density` | Improper density calibration | Extreme whitespace wasting screen real estate or suffocating dense operational data. |

---

## Design Dial Attribution

Every visual deficiency can be traced back to the interaction of the V2 Design Dials. When logging a failure analysis, attribute the root cause to one or more of the seven dials:

1. **`DESIGN_VARIANCE` (1-10)**:
   - *Over-tuned*: Bizarre structural layouts, unreadable layouts, breaking conventional UX patterns.
   - *Under-tuned*: Generic centering, uninspired card grids, AI-slop appearance.
2. **`MOTION_INTENSITY` (1-10)**:
   - *Over-tuned*: Distracting micro-interactions, lingering hover effects, slow transitions.
   - *Under-tuned*: Lifeless, static feel where micro-feedback is critical.
3. **`VISUAL_DENSITY` (1-10)**:
   - *Over-tuned*: Cramped layouts, insufficient whitespace, visual fatigue in enterprise views.
   - *Under-tuned*: Huge empty spaces, excessive scrolling, diluted data communication.
4. **`BRAND_EXPRESSIVENESS` (1-10)**:
   - *Over-tuned*: Over-the-top styling overpowering functional components.
   - *Under-tuned*: Bland corporate aesthetic failing to engage users.
5. **`TYPOGRAPHIC_CHARACTER` (1-10)**:
   - *Over-tuned*: Display fonts used for functional copy, illegible decorative faces.
   - *Under-tuned*: System fallback font monotony lacking distinct voice.
6. **`IMAGE_PROMINENCE` (1-10)**:
   - *Over-tuned*: Massive hero imagery pushing critical functional elements below the fold.
   - *Under-tuned*: Wall of uninterrupted text in visually driven consumer applications.
7. **`INTERACTION_RICHNESS` (1-10)**:
   - *Over-tuned*: Nested dropdowns, hidden interactions requiring excessive clicks.
   - *Under-tuned*: Missing hover/active/focus indicators, lack of feedback states.

---

## Six-Question Analysis Framework

Every benchmark failure analysis report must answer:
1. **What did V2 do poorly?** (Specific, concrete description of the visual or behavioral defect)
2. **Why did it happen?** (Root cause in the prompt interpretation, agentic reasoning, or constraint execution)
3. **Which design dial contributed?** (Identified from the 7 dials above, noting over- or under-tuning)
4. **Which composition decision contributed?** (Layout family, grid choice, or spatial balance decision)
5. **Which skill/rule contributed?** (Specific skill file, e.g., `ui-composition-engine`, `ui-layout-responsive`, `ui-accessibility`)
6. **What change should be tested?** (Actionable hypothesis for the next iteration or engine update)

---

## Template

Use [template.md](template.md) to generate individual benchmark failure analysis reports.
