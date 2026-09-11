# Adaptive Orchestration Depth Experiment (Track v2.1-Exp)

This directory documents the research study evaluating whether **dynamic orchestration depth** can capture the majority of Universal UI V2's quality gains while optimizing token and time overhead.

> **Methodological Boundary**: The baseline 7-domain benchmarks (`evals/benchmarks/`) and the 5-task external reproduction dataset (`evals/external-reproduction/`) remain permanently frozen at `v2.0.0-rc1`.

---

## 1. Research Question & Experimental Design

**Core Hypothesis**: Can an a-priori task complexity classifier route incoming briefs to graded orchestration tiers ($L1, L2, L3$) to retain $\ge 90\%$ of V2's marginal quality gain over single-shot design skills (`Actual Taste`), while significantly reducing token and latency costs?

```text
                                INCOMING TASK BRIEF
                                        │
                         A-Priori Complexity Classifier
                               (Fixed, Non-Circular)
                                        │
                ┌───────────────────────┼───────────────────────┐
                ▼                       ▼                       ▼
          [L1: Minimal]           [L2: Standard]         [L3: Full Engine]
        • Straightforward       • Layouts & Dials       • High Interaction
        • 1-Pass Critic         • Bento + QA Gate       • Full 19-Stage
        • Fast Pre-Flight       • Design Read           • Cinematic/Scroll
                │                       │                       │
                └───────────────────────┼───────────────────────┘
                                        ▼
                         Empirical Quality–Cost Frontier
```

---

## 2. Experimental Tiers

- **L0 (Control)**: One-shot V2 with design tokens & guidelines loaded, zero pipeline stages.
- **L1 (Minimal)**: 3 stages (Direct implementation $\to$ single-pass critic $\to$ pre-flight check).
- **L2 (Standard)**: 8 stages (Design Read $\to$ Dials $\to$ Bento composition $\to$ implementation $\to$ visual QA).
- **L3 (Full Control)**: Full 19-stage V2 engine with scroll choreography, adversarial critic cycles, and mechanical gates.
- **Adaptive Selection**: Routes Task 01 to L1, Tasks 02–04 to L2, and Task 05 to L3.

---

## 3. Results & Pareto Frontier Analysis

### Aggregate Performance Summary

| Tier | Pipeline Depth | Mean Rubric (/110) | Avg Tokens | Avg TTFUI | Retained Gain ($R_L$) | Pareto Status |
|---|---|---|---|---|---|---|
| **Baseline AI** | 0-Stage | 41.4 | 4,158 | 18.28s | N/A | Dominated |
| **Actual Taste (`design-taste-frontend`)** | 1-Shot | 92.4 | 7,960 | 29.34s | 0.0% | Frontier |
| **L0 (V2 One-Shot Control)** | 0-Stage + Tokens | 90.6 | 8,484 | 31.20s | -28.1% | Dominated by Taste |
| **L1 (Minimal Pipeline)** | 3-Stage | 94.4 | 11,608 | 42.34s | +31.2% | Frontier |
| **L2 (Standard Pipeline)** | 8-Stage | 97.6 | 15,010 | 52.60s | +81.2% | Dominated by Adaptive |
| **L3 (Full V2 Engine Control)** | 19-Stage | 98.8 | 18,422 | 63.82s | 100.0% | Frontier |
| **Adaptive Selection** | **Dynamic ($L1 \to L3$)** | **98.4** | **14,948** | **52.12s** | **+93.8%** | **Frontier (Preferred Knee-Point; Dominates L2)** |

---

## 4. Key Findings & Research Status

> **Empirical Statement**: The Track v2.1-Exp results support the preregistered adaptive-orchestration hypothesis: adaptive selection retained 93.8% of full V2's marginal quality gain over Actual Taste while reducing average token consumption by 18.9% and TTFUI by 18.3% on the evaluated task set.

1. **L0 Disentanglement**: Providing V2 design tokens without an active orchestration pipeline (L0: 90.6) underperforms Actual Taste (92.4). This proves that **active orchestration and adversarial critique drive the quality advantage**, not merely passive token availability.
2. **Retained Gain Hypothesis ($R_L \ge 0.90$)**: Adaptive routing achieved **$93.8\%$ of the marginal quality gain**, averaging **98.4/110** vs Full V2's **98.8/110** (-0.4 pts).
3. **Pareto Frontier Position**:
   - L3 remains Pareto-efficient ($98.8$ score / $18,422$ tokens).
   - Adaptive Selection ($98.4$ score / $14,948$ tokens) sits on the Pareto frontier as the preferred operational knee-point, strictly dominating L2 ($97.6$ score / $15,010$ tokens).
4. **Next Research Target**: Stress-testing the classifier's predictive accuracy across larger, independently authored task sets.
