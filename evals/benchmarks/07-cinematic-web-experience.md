# Benchmark 07: Cinematic Web Experience (Visual Storytelling)

## Status: PENDING

## Brief
"Design a premium product website for an advanced camera, luxury automotive, or high-end hardware product brand. The experience should use editorial imagery, a pinned storytelling section, controlled parallax, a scroll-driven media transformation, and a video-scrubbed product reveal while remaining fast, accessible, and usable."

---

## Hypothesis (Pre-Registered)

### Predicted Performance & Failure Modes
1. **Phase A: Baseline AI**
   - *Expected Behavior*: Static generic 3-column card grid or over-indexed, broken CSS transforms. Likely creates un-synced generic stock placeholders, lacks scroll orchestration, uses raw `position: fixed` with scroll jitter, or produces generic purple-blue glowing cards without narrative pacing.
   - *Expected Failure Modes*: `STORY_UNENGAGING`, `GENERIC_PURPLE_SLOP`, `MOBILE_BROKEN`, `MOTION_DECORATIVE`.
   - *Predicted Score Range*: 30 - 45 / 110.

2. **Phase B: Actual Taste (`design-taste-frontend`)**
   - *Expected Behavior*: Outstanding typographic restraint, strong static whitespace, high-contrast imagery, and clean layout structure. However, without dedicated scroll choreography or media composition pipelines, it is predicted to favor static editorial layouts over dynamic pinned scroll stories or scrubbed reveals.
   - *Expected Failure Modes*: `SCROLL_STATIC` (graceful limitation: high static polish but minimal progressive disclosure / scrub interaction).
   - *Predicted Score Range*: 80 - 90 / 110.

3. **Phase C: Universal UI Skills V2 Engine**
   - *Expected Behavior*: Executes the 19-stage pipeline activating `ui-media-composition`, `ui-scroll-storytelling`, and `ui-cinematic-motion`. Sets calibrated dials:
     - `SCROLL_INTERACTION`: 7–8 (pinned narrative sequence, scrubbed transform, smooth progressive reveals)
     - `MEDIA_PROMINENCE`: 8–9 (hero-scale editorial imagery, full-bleed media staging)
     - `CINEMATIC_INTENSITY`: 6–7 (staged choreographic hierarchy without hijacking natural scroll feel)
     - `BENTO_COMPLEXITY`: 5–6 (structured editorial spec bento with visual anchors)
   - *Expected Strength*: Seamless interplay between storytelling, scroll progression, mobile fallback, and `@media (prefers-reduced-motion)` accessibility.
   - *Strict Guardrail*: Must pass anti-slop visual critic and pre-flight gates—excessive, dizzying, or decorative motion without narrative purpose will trigger an immediate failure.
   - *Predicted Score Range*: 90 - 100 / 110.

---

## Evaluation Protocol

### Standard Rubric Scoring (Frozen Benchmark Rubric v1.0 — 110 Points)
The official score is graded against the standard 110-point Rubric across:
1. Product-Type Fit (10 pts)
2. Visual Hierarchy & Spacing (10 pts)
3. Typography Quality (10 pts)
4. Color & Surface Discipline (10 pts)
5. Layout Structure & Bento Quality (10 pts)
6. Interactive States & Motion (10 pts)
7. Mobile & Responsive Execution (10 pts)
8. Accessibility Baseline (10 pts)
9. Production Polish & Distinctiveness (10 pts)
10. Anti-Slop Strictness (10 pts)
11. Design Engine Discipline (10 pts)

### Diagnostic Storytelling Metrics (Non-Rubric Diagnostic Observations)
In addition to the official 110-point score, the evaluator records diagnostic observations on visual storytelling quality:
- **Scroll Choreography Quality**: Pinned progression feel, narrative pacing, absence of scroll jank / jitter.
- **Media Narrative Prominence**: Editorial integration, asset authenticity, visual focal points.
- **Motion Purpose & Restraint**: Choreography serves product comprehension vs. decorative motion slop.
- **Accessible Motion Fallback**: Graceful static layout under `prefers-reduced-motion: reduce`.
- **Mobile Storytelling Adaptation**: Clean conversion of pinned horizontal/desktop scrolls to responsive vertical storytelling.

---

## Required Evidence Contract

A benchmark implementation is considered feature-complete only when browser evidence demonstrates:

1. **Pinned Storytelling**: Pinned section visibly remains fixed while narrative content progresses across at least 2 distinct narrative phases.
2. **True Parallax**: Parallax produces distinguishable depth relationship between at least two visual layers (e.g. background landscape/hardware and foreground narrative typography).
3. **Scroll Transformation**: Scroll-driven transformation changes a meaningful media property (scale, crop, position, reveal, state, or aperture/optic rendering) tied directly to scroll progress.
4. **Deterministic Video/Frame Scrubbing**: Video or high-density frame sequence maps scroll progress deterministically rather than simply autoplaying in an un-synced loop.
5. **Reduced-Motion Fidelity**: `@media (prefers-reduced-motion: reduce)` preserves the entire information hierarchy, static product views, and full content clarity with zero broken layouts or blank frames.
6. **Mobile Storytelling Translation**: Mobile layout preserves the same narrative sequence and media hierarchy without requiring horizontal overflow or trapped viewport scrolling.

> **Empirical Rule**: Code presence alone does not constitute evidence. Implementations that include animation hooks or CSS classes without producing observable visual and interactive fidelity in the browser fail the capability dimension.

---

## Strict Visual Critic & Pre-Flight Failure Gates

The test explicitly benchmarks whether the `ui-visual-critic` and `ui-preflight` catch the following storytelling failure modes:
- [ ] **Decorative Parallax**: Parallax applied to arbitrary text/icons with no spatial depth or hierarchy → **FAIL**
- [ ] **Unmotivated Sticky Section**: Content pinned for scroll duration without revealing progressive states → **FAIL**
- [ ] **Disorienting Scrubbing**: Video or transform scrubbing that jumps, causes layout shifts, or hijacks native scroll velocity → **FAIL**
- [ ] **Card-Grid Bento Slop**: Bento section that is merely 3 identical feature cards disguised with borders → **FAIL**
- [ ] **Mobile Breakdown**: Horizontal translate or fixed pin causing horizontal overflow / trapped viewport on mobile → **FAIL**
- [ ] **Reduced Motion Disconnect**: Disabling animation leaves the UI blank, broken, or stripped of narrative meaning → **FAIL**
- [ ] **Media Dominates Hierarchy**: Background media obscures text legibility or CTA contrast below WCAG AA → **FAIL**

---

## Benchmark Execution Log

### Phase A: Baseline AI
- **Execution**: One-shot unguided code generation from prompt.
- **Design Pattern**: Generic purple/indigo dark theme, 3-column feature card grid, pseudo-parallax div (`backgroundPositionY`), static image with arbitrary scroll calculation.
- **Total Score**: 35 / 110 (1 Revision Cycle)

### Phase B: Actual Taste (`design-taste-frontend`)
- **Execution**: Official `Leonxlnx/taste-skill` installed and executed.
- **Design Read**: Monograph / luxury optical hardware, Swiss-style typography, high-contrast monochrome dark tech.
- **Dials**: `DESIGN_VARIANCE=7`, `MOTION_INTENSITY=6`, `VISUAL_DENSITY=4`.
- **Strengths**: Exceptional static typography, stark contrast, disciplined editorial hierarchy, zero slop.
- **Storytelling Capabilities**: Favored static high-contrast tabs and editorial cards over dynamic scroll pinning, parallax, or frame scrubbing.
- **Total Score**: 91 / 110 (1 Revision Cycle)

### Phase C: Universal UI Skills V2 Engine
- **Execution**: Full 19-stage master pipeline with `ui-media-composition`, `ui-scroll-storytelling`, `ui-cinematic-motion`, `ui-composition-engine`, and `ui-visual-critic`.
- **Dials**: `MEDIA_PROMINENCE=9`, `SCROLL_INTERACTION=8`, `CINEMATIC_INTENSITY=7`, `BENTO_COMPLEXITY=6`, `VISUAL_DENSITY=4`, `DESIGN_VARIANCE=7`.
- **Features Tested**:
  - Multi-plane hero parallax with foreground typography depth.
  - Pinned 300vh sticky storytelling container with 3 synchronized narrative & media transitions.
  - Deterministic scroll-to-frame scrubbing through a 6-stage internal optical breakdown.
  - Asymmetric editorial spec bento grid with technical data badges.
  - Full `@media (prefers-reduced-motion: reduce)` fallback with static layout normalization.
- **Total Score**: 97 / 110 (3 Revision Cycles)

---

## 3-Way Blinded Evaluation & Capability Summary

| Dimension / Capability | Baseline AI (Phase A) | Actual Taste (Phase B) | Universal UI V2 (Phase C) |
| :--- | :--- | :--- | :--- |
| **Rubric Score (Frozen v1.0)** | **35 / 110** | **91 / 110** | **97 / 110** |
| **Pinned Storytelling** | ❌ FAIL (Static scroll) | ❌ FAIL (Tabbed static) | ✅ **PASS** (Sticky 300vh sequence) |
| **True Parallax** | ❌ FAIL (Flat CSS offset) | ❌ FAIL (Omitted) | ✅ **PASS** (Multi-plane translate3d) |
| **Scroll Transformation** | ❌ FAIL (Static image) | ❌ FAIL (Static cards) | ✅ **PASS** (Progressive optical reveal) |
| **Video/Frame Scrubbing** | ❌ FAIL (Static text counter)| ❌ FAIL (Omitted) | ✅ **PASS** (Deterministic 6-stage timeline) |
| **Reduced-Motion Fidelity**| ✅ **PASS** (Inherently static) | ✅ **PASS** (Editorial static) | ✅ **PASS** (Auto-unpins sticky tracks) |
| **Mobile Translation** | ✅ **PASS** (Single column) | ✅ **PASS** (Clean stack) | ✅ **PASS** (Fluid vertical narrative) |

---

## Conclusion & Scientific Analysis
- **V2 Delta over Baseline**: +62 Points
- **V2 Delta over Actual Taste**: +6 Points (V2 wins on motion states, scroll choreography, and deterministic scrubbing while matching Actual Taste's high static typography and surface discipline)
- **Trade-off Analysis**: Actual Taste achieves near-parity (91 vs 97) with simpler static code structure, while V2 adds rich cinematic storytelling without introducing scroll hijacking or breaking mobile/accessibility constraints.

## Status: COMPLETE
*(See `results/cinematic-web/` for source code artifacts, blinded candidates, and `result.json`)*
