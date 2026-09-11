# Empirical Benchmarks

This document consolidates the results from our controlled internal evaluations using a fixed scoring rubric across 6 distinct UI domains.

> [!IMPORTANT]  
> **Benchmark note:** The benchmark system is designed to compare UI approaches and identify failure modes. Current results are experimental evidence from controlled evaluations, not universal proof of superiority. "Taste-simulated" refers to a simulation of documented Taste-style constraints, not execution of the proprietary/actual Taste skill unless explicitly stated. Results should be interpreted as evidence from these tasks, not a universal guarantee of UI quality.
> 
> See [methodology.md](methodology.md) for evaluator independence protocols, [evaluators/](evaluators/README.md) for independent review templates, and [failure-analysis/](failure-analysis/README.md) for failure taxonomy and dial attributions.

## Methodology

- **Baseline AI**: Standard code-generation model output without explicit design system injection.
- **Taste-simulated**: Evaluated against strict brutalist/utilitarian rules (e.g., rigid structural composition, high-contrast borders, default use of JetBrains Mono).
- **Universal UI V2**: Evaluated using the V2 engine's dynamic `Design Read`, parameterized design dials, and domain-specific composition rules.

Scoring is out of 110 total points across 11 metrics (Design Quality, Visual Hierarchy, Typography, Composition, Distinctiveness, Product Fit, Responsive Quality, Accessibility, Motion, Consistency, Anti-slop).

---

## Benchmark Results

### 01: Flutter Onboarding
*Task: Create a premium mobile onboarding screen for a daily habit tracking app.*
- **Baseline AI**: 37 / 110 (1 Revision Cycle)
- **Universal UI V2**: 95 / 110 (2 Revision Cycles)
*(Taste-simulated skipped as Taste is heavily web-oriented)*

### 02: Web Landing Page
*Task: Design a high-converting landing page for a developer API tool.*
- **Baseline AI**: 33 / 110 (1 Revision Cycle)
- **Taste-simulated**: 69 / 110 (1 Revision Cycle)
- **Universal UI V2**: 93 / 110 (3 Revision Cycles)

### 03: Mobile Dashboard
*Task: Design a financial tracking dashboard for a mobile app. It must include a summary balance, a transaction list, and a chart.*
- **Baseline AI**: 36 / 110 (1 Revision Cycle)
- **Taste-simulated**: 64 / 110 (1 Revision Cycle)
- **Universal UI V2**: 90 / 110 (2 Revision Cycles)

### 04: Ecommerce Storefront
*Task: Design a high-quality ecommerce storefront for a modern consumer brand.*
- **Baseline AI**: 33 / 110 (1 Revision Cycle)
- **Taste-simulated**: 68 / 110 (1 Revision Cycle)
- **Universal UI V2**: 93 / 110 (3 Revision Cycles)

### 05: Game UI
*Task: Design the UI for a polished 2D mobile game.*
- **Baseline AI**: 28 / 110 (1 Revision Cycle)
- **Taste-simulated**: 49 / 110 (1 Revision Cycle)
- **Universal UI V2**: 88 / 110 (4 Revision Cycles)

### 06: React SaaS
*Task: Design a SaaS product interface for a modern developer-oriented application.*
- **Baseline AI**: 38 / 110 (1 Revision Cycle)
- **Taste-simulated**: 51 / 110 (1 Revision Cycle)
- **Universal UI V2**: 89 / 110 (2 Revision Cycles)

### 07: Cinematic Web Experience (Visual Storytelling)
*Task: Design a premium product website for an advanced camera, luxury automotive, or high-end hardware product brand with editorial imagery, pinned storytelling, parallax, scroll transformation, and video scrubbing.*
- **Baseline AI**: 35 / 110 (1 Revision Cycle)
- **Actual Taste (`design-taste-frontend`)**: 91 / 110 (1 Revision Cycle)
- **Universal UI V2**: 97 / 110 (3 Revision Cycles)
*(See [07-cinematic-web-experience.md](07-cinematic-web-experience.md) for full capability evidence matrix and failure analysis)*

---

## Conclusion
Across our 7-task evaluation suite, Universal UI Skills V2 demonstrated strong domain adaptation across mobile, desktop, ecommerce, gaming, SaaS, and cinematic visual storytelling. In Benchmark 07, V2 scored 97/110 versus 91/110 for the actual Taste skill and demonstrated browser-verified pinned storytelling, true parallax, scroll transformation, and deterministic frame scrubbing that were absent from the Taste implementation.

