# Universal UI Skills

> **An adaptive design engine for AI coding agents.**

Turn product context into distinctive, production-ready interfaces through design direction, references, composition, motion, visual critique, and pre-flight QA.

**Repository:** https://github.com/thakur698/universal-ui-skills

---

## Why this exists

AI coding agents can produce working interfaces very quickly, but without strict constraints, they default to "AI-slop": generic, repetitive, overly rounded, visually noisy, SaaS-derivative patterns.

Universal UI Skills replaces the generic `Prompt → Code` cycle with a rigorous **V2 Adaptive Design Engine**. It forces agents to analyze references, dial in measurable metrics, compose structured layouts, critique their own visual output, and pass hard binary pre-flight checks before delivering UI.

---

## The V2 Adaptive Engine

The core engine is driven by 7 orchestrated skills:

1. **`ui-creative-director`**: Extracts a Design Read (Audience, Metaphor, Density) from the brief.
2. **`ui-design-dials`**: Provides a measurable 1-10 control surface (`DESIGN_VARIANCE`, `VISUAL_DENSITY`, etc.) constraining implementation.
3. **`ui-reference-first`**: Enforces a strict reference analysis phase, extracting grid/typography metrics to build a Composition Map.
4. **`ui-composition-engine`**: Defines strict Layout Families (e.g., Asymmetric Hero, Bento) and mechanical combination limits.
5. **`ui-visual-critic`**: Introduces an internal adversarial loop (`BUILD → CRITIQUE → FIX → RENDER`). The critic scores 10 dimensions, forcing revisions.
6. **`ui-preflight`**: The final mechanical gate with binary (PASS/FAIL) rules (e.g., fails for broken CTAs or missing mobile fallbacks).
7. **`ui-design-memory`**: Cures AI "amnesia" by maintaining a `.design/` directory to store persistent decisions across sessions.

---

## The Orchestration Pipeline

The `ui-master` skill orchestrates the entire workflow. Instead of suggesting guidelines, it enforces this execution pipeline:

```text
Brief
  ↓
Design Read 
  ↓
Reference Analysis
  ↓
Design Dials
  ↓
Composition Plan
  ↓
Asset Plan
  ↓
Implementation (using V1 Foundational Skills)
  ↓
Motion & Responsive
  ↓
Accessibility
  ↓
Visual Render
  ↓
AI Critic
  ↓
Fix 
  ↓
Pre-flight
  ↓
Final UI
```

---

## Empirical Benchmarks

To definitively prove that the Universal UI V2 Engine outperforms one-shot UI generation, we maintain a strict `evals/benchmarks/` suite. For each task, we test the exact same prompt with and without the V2 Orchestrator.

| Task | Control (Generic AI Output) | Universal UI V2 Engine Output | Status |
|---|---|---|---|
| **Flutter Onboarding** | Generic centered stack, flat Material buttons, placeholder imagery. | Distinctive Asymmetric composition, custom typography, edge-lighting. | ✅ Completed |
| **Web Landing Page** | Standard 3-column feature grid, generic gradients. | Editorial Split layout, dense technical typography, scroll reveals. | ⏳ Pending |
| **Mobile Dashboard** | Basic vertical list of transactions, default charts. | Trustworthy Data-Dense composition, micro-interactions. | ⏳ Pending |
| **Ecommerce Storefront** | Product image + title + buy button side-by-side. | Immersive Image hero, display serif typography, massive whitespace. | ⏳ Pending |
| **Game UI** | Standard card grid, no aesthetic cohesion. | Diegetic Interaction-led panel, skewed borders, high motion intensity. | ⏳ Pending |
| **React SaaS** | Basic form inputs, blue submit button. | Brutalist structure, tight grid spacing, robust state management. | ⏳ Pending |

---

## Foundational Skills (V1 Compatibility)

The V2 engine orchestrates these foundational implementation layers:

- `ui-web` / `ui-react` / `ui-mobile` / `ui-flutter`
- `ui-layout-responsive`
- `ui-motion`
- `ui-accessibility`
- `ui-anti-slop`
- `ui-assets`
- `ui-visual-qa`

---

## Tool Discovery

The `ui-tool-discovery` skill ensures the agent maps out exactly what is executable in the current environment:

- `AVAILABLE + EXECUTABLE`
- `AVAILABLE + MANUAL`
- `NOT AVAILABLE`
- `REQUIRES USER SETUP`

Agents must never fabricate tool execution or claim external tools were used if they were unavailable.

---

## Design Memory: Do Not Default to the Last Project

AI agents often develop one favorite aesthetic and apply it everywhere. Universal UI Skills enforces a strict rule: **Never reuse previous-project visual decisions merely because they worked before.**

For every new product, the agent must re-evaluate typography, composition, density, and imagery, saving these decisions to `.design/` for persistent project context.

---

## Installation

Install the full repository:

```bash
npx skills add https://github.com/thakur698/universal-ui-skills
```

Install a specific skill:

```bash
npx skills add https://github.com/thakur698/universal-ui-skills --skill "ui-master"
```

---

## Examples & Recipes

See the `examples/` and `recipes/` directories to understand how the V2 workflow translates to specific framework implementations (Web, Mobile, Flutter, React).

---

## Official Website

The official website is located in `website/` and was built using the project's own V2 Engine (from Design Read to Pre-flight). It serves as a live demonstration of Anti-Slop principles.

---

## Versioning & Validation

Currently at `v2.0.0`.
All skills, frontmatter, and websites have been successfully validated using internal repository CI checks (`check_skills.py`).

**The Flutter Benchmark:**
- Tested on a real Flutter project.
- The same UI task was evaluated with and without the V2 orchestration pipeline.
- V2 introduced explicit design reasoning, measurable design dials, composition planning, critique, and pre-flight validation, resulting in a production-ready interface over generic AI patterns.

---

## License
MIT.
