# Rive Fallback Strategy

If `ui-tool-discovery` reports Rive as `NOT AVAILABLE` or `REQUIRES USER SETUP` (and the user hasn't provided a `.riv` file), the agent MUST gracefully fall back. 

**Do NOT attempt to invent a `.riv` file.**

## Fallback Rules

1. **React Web**:
   - Use CSS Transitions (`transition: all 0.3s ease;`) for hover states, scale changes, and opacities.
   - Use CSS Keyframes for infinite loops (e.g., a spinning loading icon).
2. **Flutter**:
   - Use `AnimatedContainer`, `AnimatedOpacity`, or `TweenAnimationBuilder` for state changes.

In the final execution report, the agent must explicitly state:
`Rive: NOT AVAILABLE -> Fallback: Used native CSS transitions for interactive states.`
