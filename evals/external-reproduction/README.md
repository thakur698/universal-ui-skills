# External Reproduction & Generalization Study (Track v1.0)

This directory contains the independent reproduction and out-of-distribution evaluation framework for **Universal UI Skills V2**.

> **Methodological Boundary**: The original 7-domain benchmark results in [`../benchmarks/`](../benchmarks/README.md) remain permanently frozen at `v2.0.0-rc1`. This directory houses a completely separate evaluation track testing five pre-registered out-of-distribution briefs with comprehensive process-cost telemetry.

---

## 1. Research Scope & Evaluation Matrix

We evaluate three isolated conditions across 5 pre-registered out-of-distribution briefs from outside the original seven-task benchmark suite:

```text
               OUT-OF-DISTRIBUTION BRIEF
                          │
         ┌────────────────┼────────────────┐
         ▼                ▼                ▼
   Baseline AI      Actual Taste     Universal UI V2
     (1-shot)         (1-shot)      (19-Stage Engine)
         │                │                │
         └────────────────┼────────────────┘
                          ▼
            Double-Blind Randomization
            (Candidate A / B / C)
                          │
         ┌────────────────┴────────────────┐
         ▼                                 ▼
   Quality Metrics                  Cost & Efficiency
  • 110-pt Rubric v1.0             • Time to First Usable UI (TTFUI)
  • Evidence Contract (Pass/Fail)  • Revision Iteration Count
  • Evaluator Agreement (ρ=0.97-98)• Token / Compute Consumption
                                   • Implementation Complexity (LOC)
```

---

## 2. Pre-Registered Out-of-Distribution Briefs

1. **[01-unseen-landing.md](tasks/01-unseen-landing.md)**: Open-Source Distributed Database Developer Portal
2. **[02-unseen-mobile.md](tasks/02-unseen-mobile.md)**: Paramedic Emergency Telehealth Field Interface
3. **[03-unseen-product.md](tasks/03-unseen-product.md)**: Bespoke Haute Horlogerie Watch Configurator
4. **[04-unseen-dashboard.md](tasks/04-unseen-dashboard.md)**: Industrial Autonomous Mining Fleet Control Room
5. **[05-unseen-cinematic.md](tasks/05-unseen-cinematic.md)**: Hadal Zone Deep-Sea Oceanographic Expedition

---

## 3. Results & Empirical Findings

Across five pre-registered out-of-distribution briefs, **Universal UI Skills V2 averaged 98.8/110** versus **92.4/110** for the actual Taste skill and **41.4/110** for baseline generation. V2's advantage was consistent across all five tasks, while requiring approximately **2.36× the tokens** and **2.18× the time** of Actual Taste. The size of the quality advantage varied by domain, with the largest gains appearing in interaction-heavy and cinematic tasks.

| Candidate Condition | Mean Rubric (/110) | Avg TTFUI | Avg Tokens | Avg Revisions | Evaluator Agreement |
|---|---|---|---|---|---|
| **Baseline AI** | 41.4 | 18.28s | 4,158 | 1.0 | — |
| **Actual Taste (`design-taste-frontend`)** | 92.4 | 29.34s | 7,960 | 1.0 | $\rho = 0.97$ |
| **Universal UI V2 (`v2.0.0-rc1`)** | **98.8** | 63.82s | 18,422 | 2.4 | $\rho = 0.98$ |

---

## 4. Protocol & Research Status

- **[protocol.md](protocol.md)**: Details double-blind randomization, scoring metrics, and process-overhead logging.
- **[evaluators](evaluators/README.md)**: Independent reviewer scoring sheets with inter-rater ranking correlation $\rho = 0.97–0.98$.
- **[results](results/01-unseen-landing/README.md)**: Generated candidate code, build artifacts, unblinding keys, and per-task telemetry.
- **[aggregate-results.json](aggregate-results.json)**: Machine-readable consolidation of reproduction quality and cost scores.

### Research Status Matrix

| Track Milestone | Status |
|---|---|
| Original 7-Domain Benchmark Suite | **COMPLETE** (Frozen `v2.0.0-rc1`) |
| External Out-of-Distribution Reproduction | **COMPLETE** |
| 5 Pre-Registered Tasks Execution | **COMPLETE** |
| Actual Taste Skill Comparison | **COMPLETE** |
| Blind Evaluator Scoring | **COMPLETE** ($\rho = 0.97–0.98$) |
| Process-Cost Telemetry Measurement | **COMPLETE** |
| Independent External Replication Panel | **PENDING** |
