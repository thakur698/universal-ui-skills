# Independent Evaluator Protocol

This directory contains evaluation protocols and standardized templates for independent benchmarking of Universal UI Skills against baseline and alternative methodologies.

## Evaluator Independence Principle

When evaluating AI-generated user interfaces, using the same model to both generate code and grade output introduces correlated evaluator bias:
- **Self-Preference Bias**: Models systematically score their own syntactical patterns, component structures, and visual conventions higher than unfamiliar ones.
- **Shared Blindspots**: Systematic flaws in the generation model (e.g., subtle contrast deficiencies, excessive card padding, lack of responsive reflow) are shared by the evaluator.
- **Overvaluing Stated Intent**: When the evaluator has access to the generation chain-of-thought or internal critic logs, it frequently rewards stated intent over rendered perceptual reality.

To counteract these biases, Universal UI Skills strictly separates:
- **Internal Critic (`ui-visual-critic`)**: An intra-generation agentic feedback loop (`BUILD → CRITIQUE → FIX → RENDER`) used during generation to refine code.
- **External Evaluation**: An objective post-hoc measurement performed by an independent evaluator after code generation is complete and frozen.

## Evaluator Modes

| Mode | Identifier | Description |
|---|---|---|
| **Human Expert Review** | `HUMAN` | Independent design and frontend engineering professionals scoring rendered interfaces using the 110-point rubric. |
| **Independent Model Review** | `INDEPENDENT_MODEL` | A separate frontier model from a different model family/vendor than the generation model, evaluated zero-shot with blinded prompts. |
| **Multi-Reviewer Ensemble** | `MULTI_EVALUATOR` | A panel of multiple independent evaluators (human panel, model ensemble, or hybrid) with statistical aggregation and inter-rater agreement tracking. |

## Blind Evaluation Protocol

Where practical, all benchmark evaluations must be conducted **blind**:
1. **Anonymization**: Submissions must be labeled generically (e.g., `Candidate A`, `Candidate B`, `Candidate C`).
2. **Order Randomization**: The presentation sequence of candidates must be randomized across evaluations.
3. **Artifact Sanitization**: Remove comments, variable names, or metadata identifying the underlying system (e.g., references to "Universal UI", "V2 Engine", "Taste", or skill names).
4. **Post-Grading Unblinding**: Evaluators score candidates and document rationales *before* candidate identities are unblinded.

## Evaluator Templates

- [human-review-template.md](human-review-template.md): Template for single or panel human evaluations.
- [independent-model-review-template.md](independent-model-review-template.md): System prompt and response schema for external model evaluation.
- [multi-reviewer-template.md](multi-reviewer-template.md): Aggregation matrix and inter-rater agreement computation for multi-evaluator panels.
