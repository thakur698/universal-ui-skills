# Benchmark Methodology

To ensure empirical validity, all benchmarks MUST adhere to strict, identical constraints across all testing phases (Baseline AI vs Taste vs Universal UI V2).

## Empirical Requirements

### 1. Hypothesis Requirement
Predictions and observations must remain separate. Every benchmark begins with a pre-registered **Hypothesis**. The hypothesis cannot contain predicted numeric scores and cannot be edited after execution to match the result. 

### 2. Status Tracking (No Fabrication)
Before a benchmark is executed, the file must show `STATUS: PENDING`. After actual execution, it must show `STATUS: COMPLETED` (or `BLOCKED` if it cannot be run). Only after execution may numeric scores be added.

### 3. Taste Labeling
Unless verified that the actual Taste skill was installed and executed, Phase B must strictly be labeled the **Taste-simulated control**.

To ensure empirical validity, all benchmarks MUST adhere to strict, identical constraints across all testing phases (Baseline AI vs Taste vs Universal UI V2).

## The Constraints
- **Same project environment**: The host repository or framework initialized must be identical.
- **Same task brief**: The prompt provided to the agent must be exactly the same character-for-character.
- **Same assets**: Any placeholder images, icons, or logos provided must be identical.
- **Same functional requirements**: If the task requires a submit button and three text fields, all variants must include them.

## The Testing Phases

### Phase A: Baseline AI
- The agent is given the prompt with **no** external UI skills, system prompts, or orchestrators loaded. It relies entirely on its default aesthetic preferences.
- **Revision Cycles**: Always 1 (One-shot generation).

### Phase B: Taste (Simulated / Integrated)
- The agent is given the prompt with the "Taste" framework active (if available) or by strictly enforcing Taste's known, opinionated rules (e.g., image-first, strict 1-10 variance, predefined layouts).
- **Revision Cycles**: Always 1 (One-shot generation).

### Phase C: Universal UI Skills V2
- The agent is given the prompt with the V2 engine active. It MUST execute the full V2 pipeline: `Design Read → Dials → Composition → Critic → Pre-flight`.
- **Revision Cycles**: Usually 2+ (Build → Critic → Fix → Render). This demonstrates the architectural advantage of the V2 iterative pipeline over one-shot models.

## Calculation
The final V2 improvement score is calculated as:
`V2 Improvement = (V2 Score) - (Baseline Score)`
We also calculate the average `Revision Cycles` to empirically prove V2's iterative value.
