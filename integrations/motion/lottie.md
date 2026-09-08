Tool: Lottie
Purpose: Playback of authored, finite vector animations (ideal for loading spinners, success checks, onboarding illustrations).
Type: Dependency Library
Required: No
Installation: Add `lottie-web` (Web), `lottie-react` (React), or `lottie-flutter` (Flutter).
Agent compatibility: Verified.
Credentials required: No.
Paid: No.
Fallback: Use framework-native animations or static SVGs.
How ui-master uses it: `ui-tool-discovery` checks if Lottie is installed. If yes, `ui-motion` can orchestrate fetching a public Lottie JSON file and integrating it for Hero or Standard level animations.
