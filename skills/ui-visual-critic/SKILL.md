---
name: ui-visual-critic
description: The iterative feedback loop that scores and critiques the implementation, media quality, and scroll storytelling before it reaches pre-flight.
---

# UI Visual Critic

## Mission

One-shot UI generation rarely yields premium results. The Visual Critic enforces an iterative `BUILD → CRITIQUE → RANK → FIX → RENDER` loop. It acts as an internal adversary, demanding high quality, meaningful media, and disciplined scroll storytelling before allowing the design to pass.

---

## The Critique Matrix (14 Dimensions, 10-Point Scale)

Score the current iteration on these dimensions:

### Core Aesthetics & Craftsmanship:
1. **Hierarchy (/10)**: Is the primary focal point immediately distinct? Is visual scanning intuitive?
2. **Distinctiveness (/10)**: Does it feel bespoke to this product, or like a generic template?
3. **Typography (/10)**: Is scale, weight, pairing, and tracking used with intent?
4. **Spacing & Density (/10)**: Is there breathing room? Is grouping logical without crowded targets?
5. **Composition (/10)**: Does it utilize varied layout families avoiding repetitive patterns?
6. **Brand Coherence (/10)**: Does it match the Design Read's emotional target and palette?
7. **Responsive Quality (/10)**: Does it reflow intelligently on mobile without awkward clipping?
8. **Accessibility (/10)**: Contrast ($\ge 4.5:1$), touch targets ($\ge 48\times 48\text{px}$), semantic structure.
9. **Anti-slop (/10)**: Total elimination of generic AI tropes (purple glows, floating badges, empty cards).

### Visual Storytelling & Interaction:
10. **Media Quality (/10)**: Does imagery/video carry real communicative value? Are meaningful diagrams used instead of icon grids?
11. **Scroll Quality (/10)**: Is scroll interaction purposeful and smooth? Does it avoid scroll traps and excessive movement?
12. **Motion Coherence (/10)**: Does animation follow strict hierarchy without overwhelming content?
13. **Cinematic Quality (/10)**: Do flagship moments (hero, reveals) feel theatrical, disciplined, and refined?
14. **Mobile & Reduced Motion (/10)**: Does the experience work completely when animations are disabled or on small screens?

---

## Adversarial Critic Questions

When critiquing, the agent must ask:
- Is scroll interaction meaningful, or added just to look impressive?
- Is media carrying real product information, or serving as mere decoration?
- Is parallax improving spatial depth without harming text legibility?
- Does sticky/pinned behavior enhance comprehension without trapping the user?
- Is video scrubbing intuitive, performant, and equipped with a static fallback?
- Does the bento layout have clear visual anchors and varied cell sizes, or is it a wall of identical cards?
- Are icons being lazily substituted where real screenshots, diagrams, or photography are needed?

---

## The Critic Loop

```text
BUILD
 ↓
CRITIQUE (Generate Scores across all 14 dimensions)
 ↓
RANK DEFECTS (Identify lowest scoring areas)
 ↓
FIX TOP 3 (Apply concrete code/layout adjustments)
 ↓
RENDER (Rebuild & visual inspection)
 ↓
CRITIQUE AGAIN
 ↓
PROCEED TO PRE-FLIGHT (When Overall Average >= 8.0/10)
```

---

## Rules
- The Overall Score is the average across all dimensions.
- If **Overall < 8.0**, the agent MUST revise the design and loop again.
- If **Overall >= 8.0**, the agent may proceed to `ui-preflight`.
