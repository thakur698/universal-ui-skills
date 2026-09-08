---
name: ui-flutter
description: Flutter-specific implementation skill for polished web and mobile application UI.
---

# Flutter UI

## Structure

Prefer:
- theme-driven tokens
- semantic widgets
- reusable components
- `LayoutBuilder`
- `MediaQuery`
- `SafeArea`
- responsive constraints

## Avoid

- magic-positioned layouts
- large monolithic widget trees
- hardcoded colors everywhere
- hardcoded font sizes throughout the app
- default Material styling becoming the entire product identity

## Animation

Use Flutter primitives for simple motion.

Use Rive/Lottie only when justified by the interaction or visual design.

## Validation

Use:
- `flutter analyze`
- `flutter test`
- widget tests
- golden tests when appropriate
