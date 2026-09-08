Tool: Rive
Purpose: Interactive, stateful vector animation (ideal for complex micro-interactions, characters, or game UI).
Type: Dependency Library
Required: No
Installation: Add `rive` (Flutter) or `@rive-app/react-canvas` (React) to the project.
Agent compatibility: Verified.
Credentials required: No (to use the open-source runtime).
Paid: No (runtime is free, editor has paid tiers).
Fallback: Use framework-native animations (e.g., Flutter `AnimatedContainer` or CSS Transitions).
How ui-master uses it: `ui-tool-discovery` checks if Rive is already in the project dependencies. If so, `ui-motion` recommends using it for Hero-level animations or complex stateful Micro-interactions.
