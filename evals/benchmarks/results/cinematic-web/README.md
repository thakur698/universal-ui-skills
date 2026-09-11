# Benchmark 07: Evidence Index & Auditable Verification

This directory contains the experimental artifacts, source code, blinded candidates, and verification evidence for **Benchmark 07 (Cinematic Web Experience)**.

---

## 1. Candidate Source Mapping (Unblinding Key)
- **Candidate A**: Actual Taste (`design-taste-frontend` via official `Leonxlnx/taste-skill`) → [`actual-taste/App.tsx`](actual-taste/App.tsx), [`actual-taste/App.css`](actual-taste/App.css)
- **Candidate B**: Baseline AI (Unguided zero-shot prompt) → [`baseline/App.tsx`](baseline/App.tsx), [`baseline/App.css`](baseline/App.css)
- **Candidate C**: Universal UI Skills V2 Engine (19-stage pipeline) → [`universal-ui-v2/App.tsx`](universal-ui-v2/App.tsx), [`universal-ui-v2/App.css`](universal-ui-v2/App.css)

---

## 2. Auditable Capability Verification Matrix

| Capability Dimension | Baseline AI (Candidate B) | Actual Taste (Candidate A) | Universal UI V2 (Candidate C) | V2 Auditable Code / Behavior Reference |
| :--- | :--- | :--- | :--- | :--- |
| **Pinned Storytelling** | ❌ **FAIL** | ❌ **FAIL** | ✅ **PASS** | [`universal-ui-v2/App.tsx#L18-L27`](universal-ui-v2/App.tsx): `v2-pinned-storytelling-container` uses a 300vh track with sticky viewport and 3 synchronized narrative chapter reveals (`v2-narrative-box`). |
| **True Parallax** | ❌ **FAIL** | ❌ **FAIL** | ✅ **PASS** | [`universal-ui-v2/App.tsx#L97-L105`](universal-ui-v2/App.tsx): `v2-hero-parallax-bg` applies multi-plane `translate3d(0, ${scrollProgress * 80}px, 0)` with separate foreground z-index typography. |
| **Scroll Transformation** | ❌ **FAIL** | ❌ **FAIL** | ✅ **PASS** | [`universal-ui-v2/App.css#L188-L200`](universal-ui-v2/App.css): `.v2-media-layer` scales from `1.05` to `1` with opacity cross-fades linked to scroll chapter triggers. |
| **Video/Frame Scrubbing** | ❌ **FAIL** | ❌ **FAIL** | ✅ **PASS** | [`universal-ui-v2/App.tsx#L29-L38`](universal-ui-v2/App.tsx): `v2-scrub-story-container` maps continuous scroll progress deterministically to a 6-stage optical breakdown array (`scrubFrames[0..5]`). |
| **Reduced Motion Fidelity** | ✅ **PASS** | ✅ **PASS** | ✅ **PASS** | [`universal-ui-v2/App.css#L425-L446`](universal-ui-v2/App.css): `@media (prefers-reduced-motion: reduce)` unpins sticky viewports, removes transforms, and presents readable static layouts. |
| **Mobile Translation** | ✅ **PASS** | ✅ **PASS** | ✅ **PASS** | [`universal-ui-v2/App.css#L449-L495`](universal-ui-v2/App.css): Breakpoints at `1024px` and `768px` convert bento grids and sticky viewports into clean, non-overflowing vertical stacks. |

---

## 3. Results Summary
- **Baseline AI**: 35 / 110 (1 revision)
- **Actual Taste**: 91 / 110 (1 revision)
- **Universal UI V2**: 97 / 110 (3 revisions)
- **Machine-readable Results**: [`result.json`](result.json)
