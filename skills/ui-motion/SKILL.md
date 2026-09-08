---
name: ui-motion
description: Designs purposeful interaction and animation systems for web and mobile applications.
---

# UI Motion System

## Mission

Motion is treated as communication, not decoration. Do not animate every element just to make a screen feel "premium".

## Explicit Motion Levels

### MICRO
- Button presses, switch toggles, checkbox interactions.
- Tiny feedback ensuring the user knows an input registered.

### STANDARD
- Modal opens/closes, route transitions, panel expansions.
- List insertion/deletion, layout state transitions.
- Focus should remain on continuity.

### HERO
- Major task completion, rewards, onboarding reveals, major product events.
- Highly expressive but rare.

## Required Motion Checks

Require every non-trivial animation to answer:
1. What changed?
2. Why does the user need to notice?
3. What is the visual focal point?
4. Does motion delay interaction?
5. What is the reduced-motion behavior?

## Framework Guidance

### Flutter
- Use native animation primitives for simple motion (e.g., `AnimatedContainer`, `TweenAnimationBuilder`).
- Use Rive when interactive, stateful animation is genuinely useful (e.g., complex characters, custom animated icons).
- Use Lottie for authored, finite animations where appropriate.

### Web
- Use CSS transitions/animations where sufficient (they are performant and native).
- Use framework motion libraries (e.g., Framer Motion) only when they add real value (e.g., layout animations, complex orchestration).
- Do NOT force a dependency just to have animation.
