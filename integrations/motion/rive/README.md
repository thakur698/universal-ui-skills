# Rive Integration

This directory contains the integration recipes and verification procedures for **Rive**, the interactive, stateful vector animation engine.

## Tool Status Matrix

| Framework | Status | Detector |
| :--- | :--- | :--- |
| **Flutter** | `AVAILABLE + EXECUTABLE` (Verified via test component) | `tests/rive-detector.js` |
| **React Web** | `AVAILABLE + EXECUTABLE` (Verified via test component) | `tests/rive-detector.js` |

## When to use Rive
Refer to `ui-motion/SKILL.md`. Use Rive for **stateful, interactive animations** (e.g., a character that follows the cursor, a button that reacts to multiple hover/click states, game UI).

## When NOT to use Rive
Do not use Rive for simple layout transitions, standard modal reveals, or non-interactive loops. Use CSS or native Flutter animations for layout, and Lottie for authored, finite loops.

## Contents
- `detection.md`: How the agent verifies Rive is executable.
- `flutter.md`: Implementation recipe for Flutter.
- `react-web.md`: Implementation recipe for React.
- `fallback.md`: How to gracefully fall back if Rive is unavailable.
