# Classifier Stress Test Experiment (Track v2.2-Exp)

## Overview & Scientific Objective

This experiment evaluates the prediction stability, classification accuracy, and selection efficiency of the **A-Priori Task Complexity Classifier**.

The core research question is:
> *Does the a-priori complexity classifier consistently select the minimum sufficient orchestration depth on tasks it did not help design?*

---

## 1. Classification & Failure Definitions

For any task $i$:
- $T_{\text{pred}} \in \{L1, L2, L3\}$: Predicted orchestration tier selected by the classifier *strictly a-priori*.
- $T_{\text{opt}} \in \{L1, L2, L3\}$: Empirical minimum sufficient tier determined by the pre-registered decision rule below.
- $Q(T)$: Rubric score (/110) achieved under tier $T$.
- $\text{Cost}(T)$: Process cost (tokens & TTFUI) incurred under tier $T$.

---

## 2. Deterministic Decision Rule for $T_{\text{opt}}$

To eliminate post-hoc ambiguity, $T_{\text{opt}}$ is computed deterministically across evaluated tier outcomes for task $i$ using the following sequential decision rule:

$$T_{\text{opt}} = \min \left\{ T \in \{L1, L2, L3\} \;\middle|\; R_T \ge 0.90 \quad \text{and} \quad Q(L3) - Q(T) \le 1.0 \right\}$$

Where:
1. If $R_{L1} \ge 0.90$ and $Q(L3) - Q(L1) \le 1.0$, then $T_{\text{opt}} = L1$.
2. Else if $R_{L2} \ge 0.90$ and $Q(L3) - Q(L2) \le 1.0$, then $T_{\text{opt}} = L2$.
3. Otherwise, $T_{\text{opt}} = L3$.

### Failure Classifications (Based on $T_{\text{pred}}$ vs $T_{\text{opt}}$)
1. **Optimal Match ($T_{\text{pred}} = T_{\text{opt}}$)**:
   - The classifier chose the exact minimum sufficient tier.
2. **Under-Orchestration Failure ($T_{\text{pred}} < T_{\text{opt}}$)**:
   - The classifier selected insufficient depth, resulting in $R_{T_{\text{pred}}} < 0.90$ or $Q(L3) - Q(T_{\text{pred}}) > 1.0$ (critical quality loss).
3. **Over-Orchestration Inefficiency ($T_{\text{pred}} > T_{\text{opt}}$)**:
   - The classifier selected higher depth than necessary ($T_{\text{pred}} > T_{\text{opt}}$) when a lower tier had already satisfied $R_T \ge 0.90$ and $Q(L3) - Q(T) \le 1.0$ (cost inefficiency).

---

## 3. Pre-Registered Metrics & Tolerance Thresholds

1. **Exact-Match Tier Accuracy**:
   $$\text{Acc}_{\text{exact}} = \frac{1}{N} \sum_{i=1}^N \mathbb{I}(T_{\text{pred},i} = T_{\text{opt},i})$$

2. **Quality-Safe Selection Rate (Non-Underorchestrated)**:
   $$\text{Rate}_{\text{safe}} = \frac{1}{N} \sum_{i=1}^N \mathbb{I}(T_{\text{pred},i} \ge T_{\text{opt},i}) \quad (\text{Pre-registered tolerance: } \ge 95\%)$$

3. **Over-Orchestration Inefficiency Rate**:
   $$\text{Rate}_{\text{over}} = \frac{1}{N} \sum_{i=1}^N \mathbb{I}(T_{\text{pred},i} > T_{\text{opt},i}) \quad (\text{Pre-registered tolerance: } \le 15\%)$$

4. **Retained Marginal Gain**:
   $$R_L = \frac{Q(T_{\text{pred}}) - Q_{\text{Taste}}}{Q(L3) - Q_{\text{Taste}}} \quad (\text{Pre-registered target: } \mathbb{E}[R_L] \ge 0.90)$$

5. **Selection Efficiency Reporting Requirement**:
   - The composite metric $\text{Selection Efficiency} = \frac{R_L}{\text{Tokens}(T_{\text{pred}}) / \text{Tokens}(L3)}$ MUST always be accompanied by raw numerator ($R_L$, rubric score) and denominator ($\text{Tokens}(T_{\text{pred}})$, $\text{Tokens}(L3)$, TTFUI) in all result tables.

---

## 3. Protocol & Execution Matrix

For every independently authored task:
- Task complexity classification prompt run once a-priori.
- Tier fixed and executed without intermediate tier mutation.
- Dual-path execution ($T_{\text{pred}}$ vs $L3$ control) to deterministically measure $R_L$ and detect over/under-orchestration.
