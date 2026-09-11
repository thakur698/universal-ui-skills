# Human Evaluator Review Template

Use this template when an independent human designer or engineer conducts a benchmark evaluation.

## Review Metadata

- **Benchmark ID**: `[e.g., 02-web-landing-page]`
- **Evaluator ID**: `[Anonymized Evaluator ID, e.g., EVALUATOR_H01]`
- **Evaluator Role / Experience**: `[e.g., Senior Product Designer, 8 years UI/UX]`
- **Date**: `[YYYY-MM-DD]`
- **Evaluator Mode**: `HUMAN`
- **Evaluator Count**: `1`
- **Blinded**: `[YES / NO]` (Were candidate identities masked as Candidate A / Candidate B / Candidate C?)
- **Evaluation Confidence**: `[1-5 scale: 1=Low, 3=Moderate, 5=High]`

---

## Blinded Candidate Evaluation

> Evaluators must view the live renders or high-resolution captures across desktop and mobile breakpoints without knowing which candidate corresponds to Baseline, Taste-simulated, or Universal UI V2.

### Candidate A Scorecard

| Dimension | Score (0-10) | Observation & Justification |
|---|---|---|
| Design Quality | | |
| Visual Hierarchy | | |
| Typography | | |
| Composition | | |
| Distinctiveness | | |
| Product Fit | | |
| Responsive Quality | | |
| Accessibility | | |
| Motion | | |
| Consistency | | |
| Anti-slop | | |
| **Total Score** | **/ 110** | |

### Candidate B Scorecard

| Dimension | Score (0-10) | Observation & Justification |
|---|---|---|
| Design Quality | | |
| Visual Hierarchy | | |
| Typography | | |
| Composition | | |
| Distinctiveness | | |
| Product Fit | | |
| Responsive Quality | | |
| Accessibility | | |
| Motion | | |
| Consistency | | |
| Anti-slop | | |
| **Total Score** | **/ 110** | |

### Candidate C Scorecard (If applicable)

| Dimension | Score (0-10) | Observation & Justification |
|---|---|---|
| Design Quality | | |
| Visual Hierarchy | | |
| Typography | | |
| Composition | | |
| Distinctiveness | | |
| Product Fit | | |
| Responsive Quality | | |
| Accessibility | | |
| Motion | | |
| Consistency | | |
| Anti-slop | | |
| **Total Score** | **/ 110** | |

---

## Post-Grading Unblinding & Attribution

> Fill this section only AFTER all scores above are finalized.

### Unblinding Key
- **Candidate A**: `[Baseline AI | Taste-simulated | Universal UI V2]`
- **Candidate B**: `[Baseline AI | Taste-simulated | Universal UI V2]`
- **Candidate C**: `[Baseline AI | Taste-simulated | Universal UI V2]`

### Observed Failure Categories
Select all categories where Universal UI V2 showed deficiencies or failed to outperform:
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

### Design Dial Attribution
Identify which design dial settings contributed to observed deficiencies:
- `DESIGN_VARIANCE`: `[e.g., Over-tuned (broke functional layout) / Under-tuned (generic)]`
- `MOTION_INTENSITY`: `[e.g., Over-tuned (distracting animations) / Under-tuned (static feel)]`
- `VISUAL_DENSITY`: `[e.g., Over-tuned (cramped data) / Under-tuned (wasted screen real estate)]`
- `BRAND_EXPRESSIVENESS`: `[e.g., Inappropriate tone for domain]`
- `TYPOGRAPHIC_CHARACTER`: `[e.g., Low contrast or poor pairing scale]`
- `IMAGE_PROMINENCE`: `[e.g., Dominating viewport at expense of primary CTA]`
- `INTERACTION_RICHNESS`: `[e.g., Missing essential micro-states or hover affordances]`

### Benchmark Loss Policy Notice
> **A benchmark loss is valid data. Do not change the result to make V2 win. Use losses to identify and test better dial settings.**
