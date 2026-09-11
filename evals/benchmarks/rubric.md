# Benchmark Scoring Rubric (Rubric v1.0 — Frozen)

> **Specification Status: FROZEN (v1.0)**  
> To prevent benchmark drift, the 11 scoring dimensions, maximum point values, and anchor scale definitions are frozen. Any future alterations must be incremented as minor versions (v1.1, v1.2) accompanied by explicit changelogs.

Do not evaluate benchmarks merely on "looks better." Use this strict 110-point scoring matrix.

> **Empirical Rule**: A benchmark loss is valid data. Do not change the result to make V2 win. Use losses to identify and test better dial settings.

---

## 110-Point Scoring Matrix

| Dimension | Focus & Key Questions | Associated Failure Category | Max Score |
|---|---|---|---|
| **1. Design Quality** | Overall aesthetic polish, optical balance, surface treatment, and visual craftsmanship. | `spacing`, `composition` | 10 |
| **2. Visual Hierarchy** | Is the primary CTA instantly distinct? Is content scannable with clear visual focal paths? | `hierarchy` | 10 |
| **3. Typography** | Deliberate scale ratio, clear weight hierarchy, intentional pairing, and readable tracking. | `typography` | 10 |
| **4. Composition** | Structural layout mastery (Bento, Asymmetric, Editorial, Columnar) avoiding generic centering. | `composition` | 10 |
| **5. Distinctiveness** | Does the interface exhibit a bespoke identity, or does it resemble generic template output? | `distinctiveness` | 10 |
| **6. Product Fit** | Does visual tone and density match the specific target audience and functional domain? | `product-fit` | 10 |
| **7. Responsive Quality** | Fluid reflow across mobile, tablet, and desktop breakpoints without clipping or awkward overflow. | `responsive` | 10 |
| **8. Accessibility** | WCAG 2.1 AA compliance: contrast ratios ($\ge 4.5:1$), touch targets ($\ge 48\times 48\text{px}$), semantic markup. | `accessibility` | 10 |
| **9. Motion** | Intentional, performant transitions that enhance understanding, respecting reduced-motion preferences. | `motion` | 10 |
| **10. Consistency** | Systematic adherence to design tokens for color, spacing, radius, and elevation. | `spacing`, `typography` | 10 |
| **11. Anti-slop** | Total elimination of cliché AI design patterns (dark indigo glow cards, decorative badges, floating glass). | `anti-slop` | 10 |

**Total Possible Score: 110**

---

## Scoring Anchor Scales

For each dimension, evaluators must score on an objective 0 to 10 scale:

- **0 - 3 (Deficient / Broken)**: Significant usability or aesthetic failure. Violates fundamental principles (e.g., unreadable contrast, unstyled default components, broken layout on mobile).
- **4 - 7 (Functional / Generic)**: Standard, working UI. Meets basic functional requirements but relies on repetitive tropes, lacks distinctive character, or has minor hierarchy/spacing issues.
- **8 - 10 (Exemplary / Production Grade)**: Exceptional craftsmanship. Distinctive, accessible, responsive, well-balanced token application with purposeful composition and typography.

---

## Evaluator Independence & Grading Protocol

To minimize evaluator bias:
1. **Blind Evaluation**: Evaluators should review candidates designated as `Candidate A`, `Candidate B`, and `Candidate C` without knowing which is Baseline, Taste-simulated, or Universal UI V2.
2. **Evaluator Modes**: Evaluations may be conducted via `HUMAN`, `INDEPENDENT_MODEL`, or `MULTI_EVALUATOR` panels. See [evaluators/](evaluators/README.md).
3. **Required Evaluation Fields**:
   - `evaluator_type`
   - `evaluator_count`
   - `blinded`
   - `confidence`
   - `inter_rater_agreement`
   - `failure_categories`
   - `dial_attribution`
4. **Failure Analysis**: When defects are identified, document the root cause using the [Failure Analysis Protocol](failure-analysis/README.md) and record which of the 7 design dials contributed.

Refer to [methodology.md](methodology.md) for full procedural constraints.
