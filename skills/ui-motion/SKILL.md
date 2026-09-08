---
name: ui-motion
description: Designs purposeful interaction and animation systems for web and mobile applications.
---

# Motion

## Motion exists to communicate

Use motion for:
- feedback
- hierarchy
- navigation
- continuity
- state change
- progress
- reward
- focus

## Avoid

- animating every component
- long entrance animations
- constant movement
- bounce everywhere
- decorative parallax without purpose

## Motion levels

### Micro
Press, toggle, hover, small feedback.

### Standard
Panel transitions, route changes, modal movement, list insertion/removal.

### Hero
Rare important events such as completion, onboarding moments and major reveals.

## Platform guidance

Web:
- respect `prefers-reduced-motion`
- avoid blocking interaction
- use transform/opacity efficiently where appropriate

Mobile:
- preserve touch responsiveness
- avoid animations that delay primary actions
- respect reduced-motion/accessibility settings where supported

Flutter:
- use native animation primitives for simple transitions
- consider Rive for interactive stateful motion
- consider Lottie for authored, finite animation assets

React/web:
- use CSS transitions/animations when sufficient
- use a motion library when it adds meaningful orchestration

## Rule

A component should not animate simply because it can.
