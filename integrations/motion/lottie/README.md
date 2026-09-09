# Lottie Integration

This directory contains the integration recipes and verification procedures for **Lottie**, the authored vector animation format based on Adobe After Effects JSON exports.

## Tool Status Matrix

| Framework | Status | Detector |
| :--- | :--- | :--- |
| **React Web** | `AVAILABLE + EXECUTABLE` (if `lottie-react` in package.json & `.json` animation exists) | `tests/lottie-detector.js` |
| **Flutter** | `DOCUMENTED / NEEDS EXECUTION TEST` | `tests/lottie-detector.js` |

## When to use Lottie
Refer to `ui-motion/SKILL.md`. Use Lottie for **authored, finite motion** (e.g., complex loading spinners, one-shot celebratory animations, detailed onboarding illustrations that play automatically).

## When NOT to use Lottie
Do not use Lottie for stateful, interactive animations that need to react seamlessly to user input mid-animation (use Rive instead), or for simple layout transitions (use CSS/Native instead).

## Contents
- `detection.md`: How the agent verifies Lottie is executable.
- `react-web.md`: Implementation recipe for React.
- `flutter.md`: Implementation recipe for Flutter.
- `fallback.md`: How to gracefully fall back if Lottie is unavailable.
