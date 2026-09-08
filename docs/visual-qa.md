# Visual QA Process

Compilation success does not equal visual success. Passing unit tests does not equal visual success.

## Process

1. **Build Verification**: Does it render without crashing?
2. **Layout Inspection**: Are elements in the correct place? Any overflow or clipping?
3. **Responsive Inspection**: Does it work on the smallest and largest target screens?
4. **Interaction Inspection**: Check hover, active, and focus states.
5. **Accessibility Inspection**: Check contrast and keyboard navigability.
6. **Screenshot Inspection**: Compare to design direction (Golden tests, snapshots).
7. **Anti-Slop Inspection**: Does it look generic?
8. **Final Polish**: Fix 1px misalignments and padding issues.

Do not claim visual validation happened unless evidence exists (e.g., screenshots or automated visual regression tests).
