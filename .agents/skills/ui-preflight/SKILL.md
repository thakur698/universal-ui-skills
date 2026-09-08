---
name: ui-preflight
description: The final, binary mechanical gate that prevents broken or fundamentally flawed designs from being delivered.
---

# UI Pre-Flight Gates

## Mission

While the Visual Critic scores aesthetics, the Pre-Flight Gate enforces hard mechanical rules. A design that fails any pre-flight gate is NOT DONE.

## Hard Pre-Flight Matrix

Evaluate the design against these binary (PASS/FAIL) rules:

1. [ ] **FAIL: CTA wraps on desktop.** (Buttons must not break awkwardly).
2. [ ] **FAIL: Same composition repeated too many times.** (Violates the Variance Rule).
3. [ ] **FAIL: Generic card grid used without reason.** (Bento/Grids must have purpose).
4. [ ] **FAIL: Same eyebrow pattern repeated.** (e.g., "FEATURES", "BENEFITS" in small colored caps above every H2).
5. [ ] **FAIL: No mobile fallback.** (The layout breaks or horizontally scrolls at 375px).
6. [ ] **FAIL: Insufficient contrast.** (Text is illegible against its background).
7. [ ] **FAIL: Unjustified animation.** (Motion delays interaction or exists just for decoration).
8. [ ] **FAIL: Placeholder imagery.** (Fake/generic images left in final render).
9. [ ] **FAIL: Generic icon family.** (Mismatched weights, missing context).
10. [ ] **FAIL: Broken loading/error/empty state.** (Edge cases not handled).

## Execution
- The agent MUST explicitly print the Pre-Flight Matrix check in its final report.
- If ANY item is marked FAIL, the agent must halt, fix the issue, and re-run the Pre-Flight.
