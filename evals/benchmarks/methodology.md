# Benchmark Methodology (Protocol v1.0 — Frozen)

> **Specification Status: FROZEN (v1.0)**  
> To prevent benchmark drift, the core protocol, rubric, taxonomy, and scoring conditions are frozen. Any future modifications must be incremented as minor versions (v1.1, v1.2) accompanied by explicit changelogs.

To ensure empirical validity, all benchmarks MUST adhere to strict, identical constraints across all testing phases (Baseline AI vs Taste-simulated vs Actual Taste vs Universal UI V2).

The benchmark system is designed to compare UI approaches and identify failure modes. Current results are experimental evidence from controlled evaluations, not universal proof of superiority.

---

## Directory Structure

```text
evals/benchmarks/
    evaluators/
        README.md
        human-review-template.md
        independent-model-review-template.md
        multi-reviewer-template.md
    failure-analysis/
        README.md
        template.md
    aggregate-results.json
    methodology.md
    rubric.md
    RESULTS.md
```

---

## Empirical Requirements

### 1. Benchmark Hypothesis / Results Separation
Predictions and observations must remain strictly separate. Every benchmark begins with a pre-registered **Hypothesis** before any code generation or evaluation begins:
- The hypothesis must specify the expected design challenges, domain constraints, and relative strengths/risks of each approach.
- The hypothesis **cannot** contain predicted numeric scores and **cannot** be edited after execution to match the observed results.
- Benchmark **Results** and **Failure Analysis** document the empirical reality as measured. If V2 underperforms or loses, the result must be recorded honestly.

### 2. Status Tracking (No Fabrication)
Before a benchmark is executed, the benchmark file must show `STATUS: PENDING`. After actual execution, it must show `STATUS: COMPLETED` (or `BLOCKED` if it cannot be run in the current environment). Only after real execution may scores and observations be recorded.

### 3. Taste Labeling
Unless verified that the actual proprietary Taste skill was installed and executed, Phase B must strictly be labeled the **Taste-simulated control**.

### 4. Objective Data Integrity
> **A benchmark loss is valid data. Do not change the result to make V2 win. Use losses to identify and test better dial settings.**

Benchmark results must never be adjusted, cherry-picked, or re-run with modified rubrics simply because Universal UI V2 did not achieve the highest score.

---

## The Constraints

- **Same project environment**: The host repository or framework initialized must be identical.
- **Same task brief**: The prompt provided to the agent must be exactly the same character-for-character.
- **Same assets**: Any placeholder images, icons, or logos provided must be identical.
- **Same functional requirements**: If the task requires a submit button and three text fields, all variants must include them.

---

## The Testing Phases

### Phase A: Baseline AI
- The agent is given the prompt with **no** external UI skills, system prompts, or orchestrators loaded. It relies entirely on its default aesthetic preferences.
- **Revision Cycles**: Always 1 (One-shot generation).

### Phase B: Taste-simulated Control
- The agent is given the prompt with simulated Taste constraints active (e.g., image-first, strict variance, predefined brutalist/utilitarian layouts, rigid border aesthetics).
- **Revision Cycles**: Always 1 (One-shot generation).

### Phase B2: Actual Taste (Installed & Executed)
- The agent is given the prompt with the official, actual Taste skill installed and active in the agent environment.
- **Evaluation Status**: Planned milestone to establish the definitive comparison between actual skills rather than simulated controls.
- **Revision Cycles**: Documented according to Taste's native execution pattern.

### Phase C: Universal UI Skills V2
- The agent is given the prompt with the V2 engine active. It MUST execute the full V2 pipeline: `Design Read → Dials → Composition → Critic → Pre-flight`.
- **Revision Cycles**: Usually 2+ (Build → Critic → Fix → Render). This demonstrates the architectural advantage of the V2 iterative pipeline over one-shot models.

---

## Evaluator Independence

### Mitigating Correlated Evaluator Bias
Using the same model to both generate user interfaces and grade them introduces correlated evaluator bias:
- **Self-Preference Bias**: Frontier models systematically rate their own code idioms, structural styling, and token patterns higher than alternative representations.
- **Shared Blindspots**: If a model struggles with spatial padding, accessibility contrast on tinted surfaces, or complex responsive reflow, it will systematically fail to penalize those exact defects during grading.
- **Reasoning Conflation**: An evaluator model aware of its own internal generation process will reward stated intent rather than visually rendered output.

### Distinguishing Internal Critic from External Evaluation

The benchmark architecture enforces a clean conceptual and operational separation between intra-generation critique and post-generation evaluation:

```text
V2 GENERATION
      ↓
[Internal Critic Loop] (BUILD → CRITIQUE → FIX → RENDER)
      ↓
FINAL FROZEN ARTIFACT (Generation complete; outputs locked)
      ↓
[External Blind Evaluation] (Human / Independent Model / Multi-Evaluator)
      ↓
BENCHMARK SCORE
```

| Score Type | Component | Role | Benchmark Impact |
|---|---|---|---|
| **Internal Critic Score** | `ui-visual-critic` | Evaluates work-in-progress code during generation. Determines whether V2 executes another revision cycle. | **Zero direct impact.** Never substituted for or averaged into the benchmark score. |
| **External Evaluator Score** | Independent Evaluators | Blindly evaluates the final, frozen artifacts across Baseline, Taste-simulated, Actual Taste, and V2. | **Authoritative.** Defines the recorded benchmark score. |

This separation ensures that the internal critic can never inflate benchmark scores or indirectly bias the outcome.

---

## Independent Evaluation Protocol

Universal UI Skills supports an optional independent evaluation protocol to guarantee impartial scoring.

### Evaluator Modes
1. **`HUMAN`**: Independent UI/UX designers or frontend engineers inspecting live applications or high-fidelity renders across standard viewport sizes.
2. **`INDEPENDENT_MODEL`**: A frontier evaluation model from an independent model family/vendor differing from the generation model, operating zero-shot with standardized prompts and no generation chain-of-thought access.
3. **`MULTI_EVALUATOR`**: A panel of multiple independent human reviewers or model evaluators, aggregating scores (mean, median, or trimmed mean) and computing inter-rater agreement.

### Blind Evaluation Requirement
Where practical, all benchmark evaluations must be conducted **blind**:
- The evaluator should **not** know whether a submitted candidate is:
  - Baseline AI
  - Taste-simulated
  - Universal UI V2
- Submissions must be randomized and anonymized as `Candidate A`, `Candidate B`, and `Candidate C`.
- System prompts, comments, file naming conventions, or code watermarks identifying the generator framework must be sanitized prior to evaluation.
- Unblinding occurs only after all dimension scores, rationales, and failure tags are finalized.

See detailed protocols and templates in [evaluators/](evaluators/README.md).

---

## Benchmark Data Fields Specification

All future and upgraded benchmark entries must record the following fields alongside raw scores:

| Field | Type | Description |
|---|---|---|
| `evaluator_type` | `string` | Mode used: `HUMAN`, `INDEPENDENT_MODEL`, `MULTI_EVALUATOR`, or `INTERNAL_BENCHMARK_RUNNER`. |
| `evaluator_count` | `integer` | Total number of evaluators who scored the benchmark ($\ge 1$). |
| `blinded` | `boolean` | `true` if candidate identities were concealed and randomized during evaluation. |
| `confidence` | `float` | Evaluator confidence level in the score (0.0 to 1.0 scale). |
| `inter_rater_agreement` | `string` | Quantified agreement across evaluators (e.g., `Krippendorff Alpha = 0.82` or `Pairwise r = 0.89`; `N/A` if single evaluator). |
| `failure_categories` | `array[string]` | Tags from the Standard Failure Taxonomy identifying areas where V2 underperformed. |
| `dial_attribution` | `object` | Mapping of V2 design dials that contributed to observed defects. |

---

## Failure Analysis

Every benchmark evaluation must be paired with a failure analysis report. A benchmark loss is valuable engineering data: it isolates where the V2 design engine's dials, rules, or composition engines failed.

For every benchmark result, record:
1. **What did V2 do poorly?** (Concrete visual or functional deficiency)
2. **Why did it happen?** (Agent reasoning breakdown or constraint conflict)
3. **Which design dial contributed?** (Identified from the 7 dials below)
4. **Which composition decision contributed?** (Grid, hierarchy, layout family)
5. **Which skill/rule contributed?** (Specific skill file and instruction)
6. **What change should be tested?** (Actionable adjustment to test in subsequent runs)

### Standard Failure Taxonomy
- `hierarchy`: Primary actions obscured; competing focal points; broken visual reading order.
- `typography`: Font pairing clash; illegible body sizes; poor scale contrast.
- `spacing`: Optical imbalance; inconsistent padding tokens; cramped touch targets.
- `composition`: Inappropriate layout family; awkward visual weight distribution.
- `product-fit`: Emotional or functional misalignment with the domain and target users.
- `distinctiveness`: Regressing to generic boilerplate or over-quirky impractical patterns.
- `responsive`: Clipping, horizontal overflow, or broken layout reflow across breakpoints.
- `accessibility`: Low contrast ratios (< 4.5:1), missing labels, inadequate touch targets.
- `motion`: Disorienting animations, excessive durations, or missing reduced-motion support.
- `anti-slop`: Repetitive AI tropes (indigo glow cards, floating glass badges, excessive borders).
- `information-density`: Under-dense layouts wasting viewport space or over-dense layouts causing visual fatigue.

### Dial Attribution
Visual defects must be attributed to one or more of the seven V2 Design Dials:
- `DESIGN_VARIANCE`: Over-tuned (unusable experimental layouts) or under-tuned (generic tropes).
- `MOTION_INTENSITY`: Over-tuned (distracting, sluggish) or under-tuned (static, unresponsive).
- `VISUAL_DENSITY`: Over-tuned (cramped, cluttered) or under-tuned (excessive whitespace).
- `BRAND_EXPRESSIVENESS`: Over-tuned (loud, distracting) or under-tuned (sterile, boring).
- `TYPOGRAPHIC_CHARACTER`: Over-tuned (illegible display fonts) or under-tuned (generic system font stack).
- `IMAGE_PROMINENCE`: Over-tuned (images overwhelming layout) or under-tuned (unrelieved text walls).
- `INTERACTION_RICHNESS`: Over-tuned (over-engineered interactions) or under-tuned (missing hover/active states).

See [failure-analysis/](failure-analysis/README.md) for full taxonomy details and the [failure report template](failure-analysis/template.md).

---

## Score Calculation

The V2 improvement score is calculated as:
$$\text{V2 Improvement} = \text{V2 Score} - \text{Baseline Score}$$
We also record `revision_cycles` to track the iterative design efficiency of the V2 pipeline.
