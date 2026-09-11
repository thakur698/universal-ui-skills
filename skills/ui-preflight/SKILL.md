---
name: ui-preflight
description: The final, binary mechanical gate that prevents broken or fundamentally flawed designs from being delivered.
---

# UI Pre-Flight Gates

## Mission

While the Visual Critic scores aesthetics, the Pre-Flight Gate enforces hard mechanical rules. A design that fails ANY pre-flight gate is NOT DONE.

---

## Hard Pre-Flight Matrix

Evaluate the design against these binary (PASS/FAIL) rules:

### Layout & Composition Gates:
1. [ ] **FAIL: CTA wraps on desktop.** (Primary action buttons must fit on a single line).
2. [ ] **FAIL: Same composition repeated too many times.** (Violates the Variance Rule).
3. [ ] **FAIL: Generic card grid used without reason.** (Bento/Grids must have distinct purpose and hierarchy).
4. [ ] **FAIL: Bento is merely repeated cards.** (Bento layouts must feature asymmetric spans and visual anchors).
5. [ ] **FAIL: Icons replace meaningful product imagery unnecessarily.** (Feature storytelling must use diagrams/screenshots/media, not generic 3-card icon grids).
6. [ ] **FAIL: Same eyebrow pattern repeated.** (e.g., "FEATURES", "BENEFITS" in small colored caps above every H2).

### Scroll & Motion Gates:
7. [ ] **FAIL: Scroll animation exists without purpose.** (Animation must communicate hierarchy, state, or storytelling).
8. [ ] **FAIL: Parallax makes text hard to read.** (Text displacement must never compromise legibility).
9. [ ] **FAIL: Sticky section traps user interaction.** (Sticky/pinned sections must release smoothly without scroll trapping).
10. [ ] **FAIL: Video is required to understand core content but cannot load.** (Must provide static image/text fallback).
11. [ ] **FAIL: Motion ignores reduced-motion behavior.** (Must strictly honor `prefers-reduced-motion`).
12. [ ] **FAIL: Scroll effects cause visible jank.** (Must use GPU-accelerated transforms and throttled listeners).
13. [ ] **FAIL: Visual hierarchy depends entirely on animation.** (Content must remain fully comprehensible when static).

### Accessibility & Platform Gates:
14. [ ] **FAIL: No mobile fallback / Broken pinned layout.** (Mobile viewports must not horizontally scroll or trap pins).
15. [ ] **FAIL: Insufficient contrast.** (Text contrast below $4.5:1$ on body copy).
16. [ ] **FAIL: Placeholder imagery.** (Fake/generic placeholder boxes left in final render).
17. [ ] **FAIL: Broken loading/error/empty state.** (Edge cases not handled).

---

## Execution
- The agent MUST explicitly print the Pre-Flight Matrix check in its final report.
- If ANY item is marked FAIL, the agent must halt, fix the issue, and re-run the Pre-Flight check.
