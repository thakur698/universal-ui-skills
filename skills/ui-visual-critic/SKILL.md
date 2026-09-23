---
name: ui-visual-critic
description: The iterative feedback loop that scores and critiques the implementation, media quality, and scroll storytelling before it reaches pre-flight.
---

# UI Visual Critic

## Mission

One-shot UI generation rarely yields premium results. The Visual Critic enforces an iterative `BUILD → CRITIQUE → RANK → FIX → RENDER` loop. It acts as an internal adversary, demanding high quality, meaningful media, and disciplined scroll storytelling before allowing the design to pass.

---

## INTERACTIVE HERO MANDATE

For website UI tasks, DO NOT default to:
- centered headline
- subtitle
- two buttons
- static image
- generic gradient background
- empty whitespace
- generic SaaS hero template

The default hero must be an intentional visual experience.

REQUIRED:
1. A product-specific visual concept.
2. Meaningful imagery, product render, illustration, video, diagram, environmental scene, or other rich media.
3. Purposeful motion or interaction.
4. Strong visual depth/layering where appropriate.
5. Responsive behavior that preserves the concept on mobile.

PREFERRED:
- animated image layers
- parallax depth
- cursor/reactive visuals
- scroll-linked transformation
- video or frame sequencing
- interactive product visualization
- layered typography/media choreography
- animated diagrams
- Rive/Lottie interactive visual objects where they add meaning

The hero should communicate the product before the user reads every word.

Do not add animation merely to satisfy this rule. Motion must reinforce hierarchy, product meaning, spatial depth, interaction, or storytelling.

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
9. **Anti-slop (/10)**: Total elimination of generic AI tropes (pills of any kind, colored boxes/backgrounds behind icons, purple glows, empty cards).
10. **The Skeleton Test (/10)**: If all copy was stripped away, would the bare visual structure and hierarchy still communicate what the product is and why it matters?
11. **The Memory Test (/10)**: If a visitor left after viewing the first viewport, how distinctly could they describe it an hour later?
12. **Cognitive Load (/10)**: Are there 4 or fewer visible primary options at any single decision point? (Advanced controls must use progressive disclosure).

### Visual Storytelling & Interaction:
13. **Media Quality (/10)**: Does the UI use more and more images than icons? Does imagery/video/diagrams carry real communicative value rather than relying on icon grids?
14. **Scroll Quality (/10)**: Is scroll interaction purposeful and smooth? Does it avoid scroll traps and excessive movement?
15. **Motion Coherence (/10)**: Does animation follow strict hierarchy without overwhelming content?
16. **Cinematic Quality (/10)**: Do flagship moments (hero, reveals) feel theatrical, disciplined, and refined?
17. **Mobile & Reduced Motion (/10)**: Does the experience work completely when animations are disabled or on small screens?

### Hero Score
```text
Hero Score
├── Visual Concept
├── Product Fit
├── Media Quality
├── Motion Purpose
├── Distinctiveness
├── Hierarchy
├── Mobile Translation
└── Reduced Motion
```

---

## Hard Diagnostic Flags

### ❌ `PILL_USAGE` (FAIL Condition)
Flag as **FAIL** when:
- Any `rounded-full` pill badges, floating pill tags, or pill chip containers are used.
- Decorative pill elements are used to wrap status, category, or eyebrow text instead of clean typography and spatial hierarchy.

### ❌ `ICON_BACKGROUND_CONTAINER` (FAIL Condition)
Flag as **FAIL** when:
- Any background color, tinted container, colored box, circular backdrop, or glass tile is placed behind an icon (e.g. `bg-primary/10 rounded-xl p-3`).
- Icons must rest directly on the page/surface without container fills.

### ❌ `ICON_SUBSTITUTION` (FAIL Condition)
Flag as **FAIL** when:
- Icons are used where meaningful imagery, illustrations, or diagrams would communicate better.
- The design uses icons more than images, renders, photography, or diagrams.
- Multiple feature cards rely primarily on static icons to represent core capabilities.
- Iconography is being used as a cosmetic bandage to compensate for weak layout composition.
- A static generic icon is used where a stateful, interactive/animated visual (e.g. Rive, Lottie, or canvas) would materially enhance user understanding.

### ✅ `MEDIA_FIRST_COMPOSITION` (PASS Condition)
Flag as **PASS** when:
- Primary feature communication is carried by meaningful imagery, technical architecture diagrams, live product visualizations, video loops, editorial typography, or asymmetric bento layouts rather than repetitive iconography.

---

## Adversarial Critic Questions

When critiquing, the agent must ask:
- Are there any pills or `rounded-full` pill badges anywhere? (Strictly forbidden).
- Is there any background color, tinted container, or box behind any icon? (Strictly forbidden).
- Does the design prioritize more images, photography, renders, and diagrams over icons?
- Is scroll interaction meaningful, or added just to look impressive?
- Is media carrying real product information, or serving as mere decoration?
- Is parallax improving spatial depth without harming text legibility?
- Does sticky/pinned behavior enhance comprehension without trapping the user?
- Does video scrubbing intuitive, performant, and equipped with a static fallback?
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
- **Mode-Applicability Scoring**: Renormalize scores when specific dimensions do not apply to the Visitor Mode. For example, Cinematic Quality may be N/A for high-density Operate dashboards; do not penalize the total average.
- If **Overall < 8.0**, the agent MUST revise the design and loop again.
- If **Overall >= 8.0**, the agent may proceed to `ui-preflight`.
