# Multi-Reviewer Evaluation Template

Use this protocol when aggregating evaluations across multiple human experts, multiple independent models, or a hybrid jury.

## Panel Metadata

- **Benchmark ID**: `[e.g., 04-ecommerce-storefront]`
- **Date**: `[YYYY-MM-DD]`
- **Evaluator Mode**: `MULTI_EVALUATOR`
- **Evaluator Count**: `[Number of reviewers, e.g., 3 or 5]`
- **Blinded**: `YES` (All reviewers scored blinded candidates independently)
- **Panel Composition**:
  - Reviewer 1: `[e.g., Human Senior UI Designer]`
  - Reviewer 2: `[e.g., Independent Model: Claude 3.7 Sonnet]`
  - Reviewer 3: `[e.g., Independent Model: GPT-4o]`
- **Inter-Rater Agreement Metric**: `[e.g., Krippendorff's Alpha = 0.84, or Average Pairwise Pearson Correlation r = 0.88]`

---

## Multi-Reviewer Score Aggregation Table

### Candidate A (Blind)

| Dimension | R1 Score | R2 Score | R3 Score | Mean | Std Dev | Trimmed Mean |
|---|---|---|---|---|---|---|
| Design Quality | | | | | | |
| Visual Hierarchy | | | | | | |
| Typography | | | | | | |
| Composition | | | | | | |
| Distinctiveness | | | | | | |
| Product Fit | | | | | | |
| Responsive Quality | | | | | | |
| Accessibility | | | | | | |
| Motion | | | | | | |
| Consistency | | | | | | |
| Anti-slop | | | | | | |
| **Total Score** | | | | | | |

### Candidate B (Blind)

| Dimension | R1 Score | R2 Score | R3 Score | Mean | Std Dev | Trimmed Mean |
|---|---|---|---|---|---|---|
| Design Quality | | | | | | |
| Visual Hierarchy | | | | | | |
| Typography | | | | | | |
| Composition | | | | | | |
| Distinctiveness | | | | | | |
| Product Fit | | | | | | |
| Responsive Quality | | | | | | |
| Accessibility | | | | | | |
| Motion | | | | | | |
| Consistency | | | | | | |
| Anti-slop | | | | | | |
| **Total Score** | | | | | | |

### Candidate C (Blind)

| Dimension | R1 Score | R2 Score | R3 Score | Mean | Std Dev | Trimmed Mean |
|---|---|---|---|---|---|---|
| Design Quality | | | | | | |
| Visual Hierarchy | | | | | | |
| Typography | | | | | | |
| Composition | | | | | | |
| Distinctiveness | | | | | | |
| Product Fit | | | | | | |
| Responsive Quality | | | | | | |
| Accessibility | | | | | | |
| Motion | | | | | | |
| Consistency | | | | | | |
| Anti-slop | | | | | | |
| **Total Score** | | | | | | |

---

## Inter-Rater Agreement Computation

1. **Score Variance Check**: Any dimension with a standard deviation $\sigma > 2.0$ across reviewers triggers an automated divergence flag requiring review notes.
2. **Consensus Score Calculation**:
   - For $N \ge 5$ evaluators, use a 10% trimmed mean to exclude outlier bias.
   - For $N = 3$, use the arithmetic mean.
3. **Agreement Metric**:
   - Calculate Krippendorff's $\alpha$ on interval data across all 11 dimensions.
   - Target benchmark reliability threshold: $\alpha \ge 0.70$.

---

## Unblinded Synthesis & Attribution

### Unblinding Key
- **Candidate A**: `[Baseline AI | Taste-simulated | Universal UI V2]`
- **Candidate B**: `[Baseline AI | Taste-simulated | Universal UI V2]`
- **Candidate C**: `[Baseline AI | Taste-simulated | Universal UI V2]`

### Consolidated Benchmark Fields
```json
{
  "evaluator_type": "MULTI_EVALUATOR",
  "evaluator_count": 3,
  "blinded": true,
  "confidence": 0.88,
  "inter_rater_agreement": "Krippendorff Alpha = 0.84",
  "failure_categories": ["spacing", "information-density"],
  "dial_attribution": {
    "VISUAL_DENSITY": "Over-tuned, leading to cramped data layout on tablet breakpoints"
  }
}
```

> **A benchmark loss is valid data. Do not change the result to make V2 win. Use losses to identify and test better dial settings.**
