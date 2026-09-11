# Benchmark Failure Analysis Report Template

> **A benchmark loss is valid data. Do not change the result to make V2 win. Use losses to identify and test better dial settings.**

## Benchmark Metadata

- **Benchmark ID**: `[e.g., 05-game-ui]`
- **Task**: `[Task brief description]`
- **Evaluation Date**: `[YYYY-MM-DD]`
- **Evaluator Mode**: `[HUMAN | INDEPENDENT_MODEL | MULTI_EVALUATOR]`
- **Blinded Evaluation**: `[YES / NO]`
- **V2 Score**: `[Score / 110]`
- **Comparison Control Score**: `[Baseline: Score / 110 | Taste-simulated: Score / 110]`
- **Net Delta**: `[V2 Score - Control Score]`

---

## Tagged Failure Taxonomy

Select all applicable failure categories identified in this evaluation:
- [ ] `hierarchy`
- [ ] `typography`
- [ ] `spacing`
- [ ] `composition`
- [ ] `product-fit`
- [ ] `distinctiveness`
- [ ] `responsive`
- [ ] `accessibility`
- [ ] `motion`
- [ ] `anti-slop`
- [ ] `information-density`

---

## Dial Attribution

Mark the causal dial(s) and specify whether each was over-tuned or under-tuned:
- [ ] `DESIGN_VARIANCE`: `[Over-tuned / Under-tuned]` — *Details:*
- [ ] `MOTION_INTENSITY`: `[Over-tuned / Under-tuned]` — *Details:*
- [ ] `VISUAL_DENSITY`: `[Over-tuned / Under-tuned]` — *Details:*
- [ ] `BRAND_EXPRESSIVENESS`: `[Over-tuned / Under-tuned]` — *Details:*
- [ ] `TYPOGRAPHIC_CHARACTER`: `[Over-tuned / Under-tuned]` — *Details:*
- [ ] `IMAGE_PROMINENCE`: `[Over-tuned / Under-tuned]` — *Details:*
- [ ] `INTERACTION_RICHNESS`: `[Over-tuned / Under-tuned]` — *Details:*

---

## Structured Failure Investigation

### 1. What did V2 do poorly?
*Describe the exact visual, structural, or behavioral defect observed during the evaluation.*

### 2. Why did it happen?
*Analyze the underlying cause. Did the agent misread the domain context? Did the internal critic fail to catch a contrast issue? Did conflicting prompt constraints cause compromise?*

### 3. Which design dial contributed?
*Explain how the specific dial value or dial interaction produced this defect.*

### 4. Which composition decision contributed?
*Detail the layout structure, grid system, or container strategy that failed to support the user experience.*

### 5. Which skill/rule contributed?
*Identify the specific rule or skill instruction (e.g., `ui-composition-engine`, `ui-creative-director`, `ui-layout-responsive`) that needs clarification or adjustment.*

### 6. What change should be tested?
*State a concrete, testable modification (e.g., clamping `VISUAL_DENSITY` to 4 for mobile game HUDs, or updating pre-flight checks for contrast on semi-transparent backdrops).*
