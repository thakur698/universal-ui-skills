# Classifier Stress Test (Track v2.2-Exp)

This directory documents the research track evaluating whether the **A-Priori Task Complexity Classifier** reliably selects the minimum sufficient orchestration depth on independently authored briefs.

> **Methodological Boundary**: Benchmark suites `v2.0.0-rc1` (`evals/benchmarks/`), External Reproduction `v1.0` (`evals/external-reproduction/`), and Adaptive Orchestration `v2.1-Exp` (`evals/adaptive-orchestration/`) remain permanently frozen.

---

## 1. Research Scope & Evaluation Design

The study cleanly separates:
1. **Prediction Quality**: Does the classifier choose the intended tier based on semantic features of the brief?
2. **Selection Quality**: Does the chosen tier achieve $\ge 90\%$ of full $L3$ marginal quality without incurring over-orchestration cost?

```text
               INDEPENDENT TASK BRIEF
                          │
            A-Priori Complexity Classifier
                          │
          ┌───────────────┼───────────────┐
          ▼               ▼               ▼
     [Predicted]     [Minimum Opt]     [L3 Control]
    T_pred (L1-L3)   T_opt (Empirical)  Full 19-Stage
          │               │               │
          └───────────────┼───────────────┘
                          ▼
            Classifier Diagnosis Matrix:
       • Optimal Match (T_pred = T_opt)
       • Under-Orchestration (T_pred < T_opt) [CRITICAL FAILURE]
       • Over-Orchestration (T_pred > T_opt) [COST INEFFICIENCY]
```

---

## 2. Pre-Registered Failure Tolerances

- **Under-Orchestration Tolerance**: Maximum $\le 5\%$ (Quality-Safe Rate $\ge 95\%$).
- **Over-Orchestration Tolerance**: Maximum $\le 15\%$.
- **Mean Retained Gain ($\mathbb{E}[R_L]$)**: Target $\ge 90\%$.

---

## 3. Protocol & Telemetry

- **[protocol.md](protocol.md)**: Mathematical formalisms for failure classifications and selection efficiency metrics.
- **[aggregate-results.json](aggregate-results.json)**: Per-task classification logs, unblinding verification, and telemetry.
