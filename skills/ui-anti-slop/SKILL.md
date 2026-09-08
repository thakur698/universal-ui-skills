---
name: ui-anti-slop
description: Detects and prevents generic AI-generated UI patterns in web and mobile products.
---

# Anti-Slop UI Review

## Mission

Prevent the interface from looking like generic "AI slop".
AI slop happens when an agent optimizes for "looks modern" instead of "fits the product".

## Anti-Slop Categories

### CATEGORY A — Generic Structure

Reject or reconsider:
- every section becoming a card
- repeated three-card layouts
- generic SaaS dashboard grids
- centered hero copied everywhere
- excessive symmetrical layouts
- arbitrary floating elements

### CATEGORY B — Generic Styling

Reject or reconsider:
- random purple/blue gradients
- excessive glassmorphism
- giant blur effects
- excessive glow
- giant soft shadows
- endless pills
- excessive rounded rectangles

### CATEGORY C — Generic Content Treatment

Reject or reconsider:
- unnecessary badges
- excessive labels
- excessive helper text
- emoji used as primary product icons
- repetitive icon + label combinations

### CATEGORY D — Generic Motion

Reject or reconsider:
- animation on every component
- long entrance animations
- unnecessary bounce
- perpetual decorative movement
- motion that delays interaction

### CATEGORY E — Generic Implementation

Reject or reconsider:
- default component-library appearance becoming the entire product identity
- copied component patterns without contextual variation
- arbitrary magic numbers
- visual duplication instead of a design system

## Anti-Slop Review Questions

Ask yourself these questions before declaring success:

1. Could this UI belong to 20 unrelated products?
2. Which visual decisions are actually specific to the product?
3. Which elements exist only because AI commonly generates them?
4. Is decoration doing useful work?
5. Is hierarchy stronger than decoration?
6. Is the typography doing enough visual work?
7. Is the screen memorable without effects?

## Enforcement

If the result is generic, you must redesign it instead of simply reporting success. Remove unnecessary decorations, restore product context, and prioritize hierarchy over trends.
