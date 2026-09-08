---
name: ui-accessibility
description: Accessibility review for web and mobile UI, including contrast, keyboard/touch interaction, semantics and motion.
---

# Accessibility

## Mission

Ensure the interface is inclusive, usable by everyone, and meets fundamental accessibility requirements.

## Core Accessibility Checks

Require checks for:
- **Contrast**: Minimum contrast ratios for text (4.5:1) and essential UI elements (3:1).
- **Readable Text**: Legible font sizes and appropriate line heights.
- **Focus Visibility**: Clear, distinct focus rings or styles for keyboard navigation.
- **Keyboard Interaction**: All interactive elements must be reachable and operable via keyboard.
- **Touch Targets**: Minimum 44x44pt or 48x48dp for touch-based interactions.
- **Semantic Labels**: Correct ARIA roles, `alt` text, or semantics nodes.
- **Form Labels**: Explicitly associated labels for all inputs (no placeholders as labels).
- **Error Communication**: Descriptive text errors, not just red borders.
- **Logical Reading Order**: The DOM or semantic tree must match the visual order.
- **Text Scaling**: Layout must not break when users increase their system font sizes.
- **Reduced Motion**: Respect system preferences (`prefers-reduced-motion`) and disable non-essential animations.

## Strict Prohibitions

Explicitly prohibit:
**"State communicated only through color"**

If an error state is only indicated by the color red, it is inaccessible to color-blind users. You must include an icon, a text label, or a pattern change.
