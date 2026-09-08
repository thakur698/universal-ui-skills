---
name: ui-visual-critic
description: The iterative feedback loop that scores and critiques the implementation before it reaches pre-flight.
---

# UI Visual Critic

## Mission

One-shot UI generation rarely yields premium results. The Visual Critic enforces an iterative `BUILD → CRITIQUE → RANK → FIX → RENDER` loop. It acts as an internal adversary, demanding high quality before allowing the design to pass.

## The Critique Matrix (10-point scale)

Score the current iteration on these 10 dimensions:

1. **Hierarchy (/10)**: Is the focal point immediately obvious?
2. **Distinctiveness (/10)**: Does it feel specific to this product, or generic?
3. **Typography (/10)**: Is scale, weight, and tracking used effectively?
4. **Spacing (/10)**: Is there breathing room? Is grouping logical?
5. **Composition (/10)**: Does it utilize varied layout families?
6. **Brand coherence (/10)**: Does it match the Design Read's emotional target?
7. **Motion (/10)**: Is the interaction purposeful and smooth?
8. **Responsive quality (/10)**: Does it reflow intelligently on mobile?
9. **Accessibility (/10)**: Contrast, touch targets, and semantics.
10. **Anti-slop (/10)**: Absence of generic AI UI patterns.

## The Critic Loop

```text
BUILD
 ↓
CRITIQUE (Generate Scores)
 ↓
RANK PROBLEMS (Identify lowest scores)
 ↓
FIX TOP 3 (Apply code changes)
 ↓
RENDER (Rebuild & QA)
 ↓
CRITIQUE AGAIN
 ↓
FINAL
```

## Rules
- The Overall Score is the average of the 10 dimensions.
- If **Overall < 8**, the agent MUST revise the design and loop again.
- If **Overall >= 8**, the agent may proceed to `ui-preflight`.
