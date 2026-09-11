# Changelog

## [2.0.0-rc1] - 2026-09-11

### Status: RELEASE CANDIDATE (FROZEN)
- **Implementation**: FROZEN
- **Benchmark Protocol & Rubric**: v1.0 FROZEN
- **Evidence Artifacts & Data**: FROZEN
- **Repository Validation**: PASS
- **External Reproduction**: PENDING

### Added
- **Visual Storytelling & Cinematic Engine**:
  - `ui-scroll-storytelling`: Pinned narrative sections, horizontal scroll translation, video scrubbing, and progressive disclosure.
  - `ui-cinematic-motion`: Staged hero reveals, physics-based springs, and motion hierarchies with strict reduced-motion fallbacks.
  - `ui-media-composition`: Media-first composition prioritising full-bleed editorial imagery, focal grids, and diagrams.
- **Storytelling Design Dials**: Added `SCROLL_INTERACTION`, `MEDIA_PROMINENCE`, `CINEMATIC_INTENSITY`, and `BENTO_COMPLEXITY` to `ui-design-dials`.
- **Evaluator Independence & Governance**:
  - Formal protocol in `evals/benchmarks/methodology.md` separating the internal iterative critic from blind external evaluation (`HUMAN`, `INDEPENDENT_MODEL`, `MULTI_EVALUATOR`).
  - Standardized failure taxonomy and dial attribution framework in `evals/benchmarks/failure-analysis/`.
  - Auditable capability evidence contracts and reproduction templates.
- **Benchmark 07 (Cinematic Web Experience)**:
  - 3-way evaluation: Baseline (35/110) vs. Actual Taste (91/110) vs. Universal UI V2 (97/110).
  - Browser-verified evidence for pinned storytelling, true parallax, scroll transformation, and deterministic frame scrubbing.

### Changed
- `ui-master`: Upgraded to the full 19-stage master pipeline integrating media, scroll storytelling, and cinematic choreography.
- `evals/benchmarks/02-web-landing-page.md`: Completed 4-way evaluation with official `Leonxlnx/taste-skill` (`design-taste-frontend`): Baseline 33, Taste-simulated 69, Actual Taste 92, V2 93.
- `evals/benchmarks/RESULTS.md` & `aggregate-results.json`: Updated across all 7 benchmark domains (Average: Baseline 34.3 vs. V2 92.1 / 110).
- Public Positioning: Defined as *"An adaptive design engine for AI coding agents."*

## [2.0.0] - 2026-09-08

### Added
- **V2 Adaptive Design Engine**: The repository has transitioned from a collection of static UI guidelines into a dynamic, orchestrated design engine.
- `ui-creative-director`: Generates a Product Design Read before coding.
- `ui-design-dials`: Exposes a 1-10 quantitative scale for variance, density, motion, and brand expressiveness.
- `ui-reference-first`: Enforces reference analysis and Composition Map extraction.
- `ui-composition-engine`: Implements strict layout families and structural diversity rules.
- `ui-visual-critic`: Adds an adversarial `BUILD → CRITIQUE → FIX` loop based on a 10-point scoring matrix.
- `ui-preflight`: Adds hard binary mechanical gates (PASS/FAIL) to prevent broken layouts.
- `ui-design-memory`: Maintains persistent project context in a `.design/` directory.

### Changed
- `ui-master`: Completely rewritten to enforce the new V2 execution pipeline.
- `ui-tool-discovery`: Upgraded to properly classify tools as `AVAILABLE + EXECUTABLE`, `AVAILABLE + MANUAL`, `NOT AVAILABLE`, or `REQUIRES USER SETUP`.
- `README.md`: Massively overhauled to reflect the new "Adaptive Design Engine" positioning.
- `website/`: The official project website's hero section has been redesigned using the new V2 engine principles to visually demonstrate the orchestration pipeline.

### Fixed
- Re-aligned anti-slop rules to be driven by quantitative design dials rather than subjective abstraction.

