# Independent Model Review Template

Use this protocol to execute automated evaluations using an independent model.

## Protocol Requirements

1. **Model Independence**: The evaluation model MUST belong to an independent model family/vendor different from the generation model (e.g., if Claude 3.7 generated the UI candidates, evaluate with GPT-4o or Gemini 1.5 Pro).
2. **Zero-Shot Prompting**: The evaluator prompt must not include system prompts or guidelines from the generation engine.
3. **Blinded Submission**: Code and rendered images must be labeled as `Candidate A`, `Candidate B`, and `Candidate C` with no references to "Universal UI", "V2 Engine", "Taste", or skill names.
4. **Structured Output**: The independent model must return valid JSON adhering to the evaluation schema.

---

## Independent Evaluator System Prompt

```text
You are an expert, impartial Design Systems and UI/UX evaluator.
Your role is to strictly and objectively grade competing UI implementations against a standardized 110-point rubric.

CRITICAL CONSTRAINTS:
1. Do not assume or guess which candidate was produced by which tool, human, or model.
2. Evaluate candidates purely on visual and structural execution, adherence to task requirements, and craftsmanship.
3. Score each dimension from 0 (completely failed) to 10 (flawless, exemplary standard).
4. Provide concrete, technical justifications citing specific elements in each candidate.
5. If a candidate underperforms or exhibits defects, tag all relevant failure categories and identify which visual attributes contributed.
```

---

## Independent Evaluator User Prompt Template

```text
Please evaluate the following anonymized UI candidates for the following task brief:

TASK BRIEF:
"{{TASK_BRIEF}}"

CANDIDATES PROVIDED:
- Candidate A: {{CODE_OR_RENDER_A}}
- Candidate B: {{CODE_OR_RENDER_B}}
- Candidate C: {{CODE_OR_RENDER_C}}

Evaluate each candidate across the 11 dimensions defined in the rubric:
1. Design Quality (0-10)
2. Visual Hierarchy (0-10)
3. Typography (0-10)
4. Composition (0-10)
5. Distinctiveness (0-10)
6. Product Fit (0-10)
7. Responsive Quality (0-10)
8. Accessibility (0-10)
9. Motion (0-10)
10. Consistency (0-10)
11. Anti-slop (0-10)

Respond strictly with valid JSON conforming to this schema:
{
  "evaluator_type": "INDEPENDENT_MODEL",
  "evaluator_model": "{{EVALUATOR_MODEL_NAME}}",
  "blinded": true,
  "confidence": 0.90,
  "evaluations": {
    "Candidate_A": {
      "scores": {
        "design_quality": 0,
        "visual_hierarchy": 0,
        "typography": 0,
        "composition": 0,
        "distinctiveness": 0,
        "product_fit": 0,
        "responsive_quality": 0,
        "accessibility": 0,
        "motion": 0,
        "consistency": 0,
        "anti_slop": 0
      },
      "total": 0,
      "critique": "string",
      "failure_categories": []
    },
    "Candidate_B": { ... },
    "Candidate_C": { ... }
  },
  "comparative_summary": "string"
}
```

---

## Post-Evaluation Processing

After the independent model responds:
1. Record model metadata: `evaluator_type: "INDEPENDENT_MODEL"`, `evaluator_count: 1`, `blinded: true`, `confidence: <model_confidence>`.
2. Unblind candidates using the benchmark key.
3. Map candidate scores to `baseline_ai`, `taste_simulated`, and `universal_ui_v2`.
4. If `universal_ui_v2` underperforms, extract failure categories and attribute them to design dials in a corresponding failure analysis report.

> **Empirical Rule**: A benchmark loss is valid data. Do not change the result to make V2 win. Use losses to identify and test better dial settings.
