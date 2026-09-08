# Changelog

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
- `ui-master`: Completely rewritten to enforce the new 15-step V2 execution pipeline (Brief → Design Read → References → Dials → Composition → Build → Critique → Pre-flight → Final UI).
- `ui-tool-discovery`: Upgraded to properly classify tools as `AVAILABLE + EXECUTABLE`, `AVAILABLE + MANUAL`, `NOT AVAILABLE`, or `REQUIRES USER SETUP`.
- `README.md`: Massively overhauled to reflect the new "Adaptive Design Engine" positioning.
- `website/`: The official project website's hero section has been redesigned using the new V2 engine principles to visually demonstrate the orchestration pipeline.

### Fixed
- Re-aligned anti-slop rules to be driven by quantitative design dials rather than subjective abstraction.
