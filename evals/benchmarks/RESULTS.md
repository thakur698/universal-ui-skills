# Empirical Benchmarks

This document consolidates the results from our controlled internal evaluations using a fixed scoring rubric across 6 distinct UI domains.

> [!IMPORTANT]  
> **Benchmark note:** Results are from this project's controlled internal evaluations using a fixed rubric. "Taste-simulated" refers to a simulation of documented Taste-style constraints, not execution of the proprietary/actual Taste skill unless explicitly stated. Results should be interpreted as evidence from these tasks, not a universal guarantee of UI quality.

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

---

## Conclusion
Our six-task benchmark suite found that Universal UI Skills V2 outperformed the Baseline and Taste-simulated controls on all completed evaluations. V2's domain adaptation allowed it to transition from premium editorial e-commerce, to playful mobile games, to dense developer tools simply by adjusting internal design dials and constraint parameters.
