# Lottie Fallback Strategy

If `ui-tool-discovery` reports Lottie as `NOT AVAILABLE` or `REQUIRES USER SETUP` (and the user hasn't provided a `.json` animation file), the agent MUST gracefully fall back. 

**Do NOT attempt to invent or hallucinate a Lottie `.json` file.**

## Fallback Rules

1. **React Web**:
   - Use CSS Keyframes (e.g., standard CSS spinners) or static SVG illustrations.
2. **Flutter**:
   - Use `CircularProgressIndicator` or standard Material/Cupertino animations.

In the final execution report, state explicitly:
`Lottie: NOT AVAILABLE -> Fallback: Used native CSS keyframes for loading state.`
