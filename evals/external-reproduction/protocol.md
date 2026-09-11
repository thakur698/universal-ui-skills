# External Reproduction & Generalization Protocol v1.0

This protocol defines the formal experimental framework for evaluating Universal UI Skills V2 against Baseline AI and Actual Taste on unseen, out-of-distribution product tasks.

---

## 1. Objectives & Research Questions

This study addresses five specific questions that go beyond internal benchmark scores:

1. **Generalization**: Does Universal UI V2 retain a significant quality advantage on briefs authored completely outside the design team's environment?
2. **Evaluator Agreement**: Do independent, blinded evaluators (human and independent model judges) reach statistically consistent rankings and scoring distributions?
3. **Cost & Overhead**: What is the token, execution time, and revision cycle cost of V2's 19-stage pipeline compared to one-shot / single-skill generation?
4. **Time to Usable UI**: How long does each condition take to produce an error-free, responsive, interactive candidate?
5. **Failure Attribution**: Where do each of the systems break down on unfamiliar requirements?

---

## 2. Experimental Conditions

Each unseen task must be evaluated across three strictly isolated conditions using the exact same base brief:

| Condition | System / Skill Configuration | Revision Policy |
| :--- | :--- | :--- |
| **Phase A: Baseline AI** | Base frontier LLM with standard code generation prompt, zero external skills. | 1-shot (or error-fix only) |
| **Phase B: Actual Taste** | Official `Leonxlnx/taste-skill` (`design-taste-frontend`) active in isolated context. | 1-shot with taste pre-flight |
| **Phase C: Universal UI V2** | Full 19-stage adaptive engine (`ui-master`, `ui-design-dials`, `ui-media-composition`, `ui-scroll-storytelling`, `ui-cinematic-motion`, `ui-visual-critic`, `ui-preflight`). | Multi-stage critique loop (max 3 cycles) |

---

## 3. Evaluator Independence & Double-Blind Standard

1. **Blinding**: Artifacts from all three conditions are randomized into `Candidate A`, `Candidate B`, and `Candidate C` with all framework names, skill names, and identifying metadata stripped.
2. **Independent Scoring**: Evaluators score candidates using the frozen **Benchmark Rubric v1.0 (110 points)** without knowing which candidate corresponds to which condition.
3. **Unblinding**: An `unblinding.json` key is sealed prior to evaluation and only opened after scoring sheets are finalized.

---

## 4. Multi-Dimensional Metrics

For every task run, the evaluator records:

### Primary Quality Score
- **Total Rubric Score** (0–110 points across 11 dimensions in Rubric v1.0).

### Process & Efficiency Overhead
- **Time to First Usable UI (TTFUI)**: Wall-clock time (seconds) to produce a working build.
- **Revision Cycles**: Number of feedback / critique iterations performed before freezing.
- **Token / Compute Usage**: Total input/output tokens consumed during generation.
- **Implementation Complexity**: Lines of code (LOC), component count, and dependency footprint.
- **Capability Failure Rate**: Binary pass/fail against task-specific evidence contracts.
- **Inter-Rater Reliability**: Fleiss' Kappa or Spearman rank correlation between evaluators.
