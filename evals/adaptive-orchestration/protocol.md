# Adaptive Orchestration Depth Experiment (Track v2.1-Exp)

## Overview & Scientific Objective

This experiment evaluates whether **adaptive pipeline depth** can capture $\ge 90\%$ of Universal UI V2's marginal quality advantage over single-shot design skills (such as Actual Taste `design-taste-frontend`), while significantly reducing token and time overhead.

---

## 1. Mathematical Formalism

For any task $i$:
- $Q_{B,i}$: Baseline 1-shot Score
- $Q_{T,i}$: Actual Taste (`design-taste-frontend`) Score
- $Q_{F,i}$: Full V2 Engine Score (Tier L3 Control)
- $Q_{L,i}$: Candidate Adaptive Tier Score ($L \in \{L0, L1, L2\}$)

The full engine's marginal gain over Taste is:
$$\Delta_{F,i} = Q_{F,i} - Q_{T,i}$$

The retained marginal gain ratio for tier $L$ is:
$$R_{L,i} = \frac{Q_{L,i} - Q_{T,i}}{Q_{F,i} - Q_{T,i}}$$

### Primary Hypothesis
$$\mathbb{E}[R_L] \ge 0.90 \quad \text{while achieving } \text{Cost}(L) \ll \text{Cost}(L3)$$

---

## 2. Experimental Conditions (Tiers)

1. **L0 — One-Shot Baseline V2 (Critical Control)**
   - Single turn generation with V2 design system tokens & rules in context.
   - Zero intermediate pipeline execution, zero critic loop.
   - *Isolates knowledge availability from pipeline orchestration.*

2. **L1 — Minimal Pipeline (3 Stages)**
   - Direct Generation $\to$ Single-Pass Visual Critic $\to$ Fast Pre-Flight Check.

3. **L2 — Standard Modular Pipeline (8 Stages)**
   - A-priori Design Read $\to$ Parameterized Design Dials $\to$ Bento Layout Composition $\to$ Implementation $\to$ Visual QA Gate.

4. **L3 — Full Engine Control (19 Stages)**
   - Complete V2 pipeline: Design Read, Dials, Media Staging, Bento Composition, Scroll Choreography, Multi-Cycle Adversarial Critic, and Mechanical Pre-Flight Gates.

---

## 3. Strict Pre-Registration Rules

1. **Non-Circular Classification**: Task complexity classification occurs **strictly a-priori** before implementation and cannot be modified based on intermediate outputs.
2. **Double-Blind Scoring**: Evaluators score code and rendered outputs with candidate identifiers randomized.
3. **Telemetry Tracking**: TTFUI (seconds), Total Tokens, Revision Cycles, and LOC are logged deterministically.
4. **Pareto Frontier Analysis**: Tiers are evaluated on the multi-dimensional frontier of Rubric Score vs. Token / TTFUI Cost.
