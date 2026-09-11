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

The core engine is driven by 10 orchestrated skills:

1. **`ui-creative-director`**: Extracts a Design Read (Audience, Metaphor, Density) from the brief.
2. **`ui-design-dials`**: Provides a measurable 1-10 control surface (11 dials including `SCROLL_INTERACTION`, `MEDIA_PROMINENCE`, `CINEMATIC_INTENSITY`, `BENTO_COMPLEXITY`).
3. **`ui-reference-first`**: Enforces a strict reference analysis phase, extracting grid, typography, media, and scroll metrics to build a Composition Map.
4. **`ui-composition-engine`**: Defines strict Layout Families, premium asymmetric Bento systems, and layout combination limits.
5. **`ui-media-composition`**: Enforces media-first visual storytelling (photos, videos, diagrams, illustrations) over repetitive icon grids.
6. **`ui-scroll-storytelling`**: Designs scroll-driven storytelling, progressive disclosure, pinned sections, and video scrubbing.
7. **`ui-cinematic-motion`**: Choreographs high-end cinematic transitions, full-screen reveals, and staged motion hierarchies.
8. **`ui-visual-critic`**: Introduces an internal adversarial loop (`BUILD → CRITIQUE → FIX → RENDER`) across 14 aesthetic, media, and scroll dimensions.
9. **`ui-preflight`**: The final mechanical gate with hard binary (PASS/FAIL) rules across layout, scroll, media, and accessibility.
10. **`ui-design-memory`**: Cures AI "amnesia" by maintaining a `.design/` directory to store persistent decisions across sessions.

---

## The Orchestration Pipeline

The `ui-master` skill orchestrates the entire workflow:

```text
Brief
  ↓
Design Read (via ui-creative-director)
  ↓
Reference Analysis (via ui-reference-first)
  ↓
Design Dials (via ui-design-dials)
  ↓
Design System (via ui-design-memory / tokens)
  ↓
Composition Plan (via ui-composition-engine)
  ↓
Media Plan (via ui-media-composition)
  ↓
Scroll Story Plan (via ui-scroll-storytelling)
  ↓
Asset Plan (via ui-assets)
  ↓
Implementation (via ui-web / ui-react / ui-mobile / ui-flutter)
  ↓
Motion (via ui-motion / ui-cinematic-motion)
  ↓
Responsive (via ui-layout-responsive)
  ↓
Accessibility (via ui-accessibility)
  ↓
Visual Render (via ui-visual-qa)
  ↓
Visual Critic (via ui-visual-critic)
  ↓
Fix (Loop until Critic Score >= 8)
  ↓
Re-render
  ↓
Pre-flight (via ui-preflight)
  ↓
Final UI
```

---

## Empirical Benchmarks

Universal UI Skills V2 includes a formal A/B benchmark suite for measuring UI quality across real-world product scenarios. The benchmark system is designed to compare UI approaches and identify failure modes. Current results are experimental evidence from controlled evaluations, not universal proof of superiority.

> **Benchmark note:** Results are from this project's controlled internal evaluations using a fixed rubric. "Taste-simulated" refers to a simulation of documented Taste-style constraints, not execution of the proprietary/actual Taste skill unless explicitly stated. Results should be interpreted as evidence from these tasks, not a universal guarantee of UI quality. The benchmark framework includes independent evaluator protocols (Human, Independent Model, Multi-Evaluator), blind grading, and structured failure analysis to continuously test dial settings and refine the V2 engine.

| Task | Baseline AI | Taste-simulated | Actual Taste | V2 Engine | Status |
|---|---|---|---|---|---|
| **Flutter Onboarding** | Generic centered stack. | N/A | N/A | Distinctive Asymmetric composition. | ✅ Completed |
| **Web Landing Page** | 33 / 110 | 69 / 110 | **92 / 110** | **93 / 110** | ✅ Completed (4-Way) |
| **Mobile Dashboard** | 36 / 110 | 64 / 110 | Pending | 90 / 110 | ✅ Completed |
| **Ecommerce Storefront** | 41 / 110 | 56 / 110 | Pending | 91 / 110 | ✅ Completed |
| **Game UI** | 28 / 110 | 49 / 110 | Pending | 88 / 110 | ✅ Completed |
| **React SaaS** | 38 / 110 | 51 / 110 | Pending | 89 / 110 | ✅ Completed |

*In our controlled 4-way blinded benchmark on the Web Landing Page task (`02-web-landing-page`), Universal UI V2 scored 93/110 versus 92/110 for the officially executed Taste skill (`design-taste-frontend`), 69/110 for the Taste-simulated control, and 33/110 for the baseline. While the simulated control scored 69, running the actual Taste skill scored 92, proving that official Taste is far superior to a brutalist simulation. Universal UI V2 won by 1 point through iterative motion states and diagram-led composition.*

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

## Executable Integrations

| Integration | Status | Verified environment |
|---|---|---|
| Rive | VERIFIED | React/Web |
| Rive | VERIFIED | Flutter |
| Lottie | VERIFIED | React/Web |
| Browser QA adapter | VERIFIED | — |
| Figma | PENDING | — |

*Note: The system requires deterministic verification before an integration is marked executable. See `integrations/registry.json` for the authoritative source of truth.*

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
