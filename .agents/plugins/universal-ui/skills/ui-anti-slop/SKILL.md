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
- nested cards (cards inside cards)
- side-stripe borders (e.g. `border-l-4 border-primary` on cards/callouts)
- repeated three-card layouts
- generic SaaS dashboard grids
- centered hero copied everywhere
- excessive symmetrical layouts
- arbitrary floating elements
- kicker / eyebrow pill above every section heading

### CATEGORY B — Generic Styling

Reject or reconsider:
- random purple/blue gradients
- excessive glassmorphism
- giant blur effects
- excessive glow or zero-offset glow halos masquerading as depth
- giant soft shadows
- ghost cards (competing border + heavy shadow on the same element)
- pills of any kind (pill badges, tags, chips, floating pill eyebrows, or `rounded-full` containers are strictly banned)
- background colors or tinted containers behind icons (colored circles, rounded square tiles, or icon boxes are strictly banned)
- excessive rounded rectangles
- monospace used as a decorative costume for "technical" feel

### CATEGORY C — Generic Content Treatment

Reject or reconsider:
- unnecessary badges and pill tags
- excessive labels
- excessive helper text
- emoji used as primary product icons
- repetitive icon + label combinations
- icon substitution instead of rich imagery (using generic icons where real photos, product renders, UI captures, or technical diagrams should carry the story)
- background color behind icons (icons must sit directly on the surface without container boxes or tinted backdrops)

### CATEGORY D — Generic Motion

Reject or reconsider:
- animation on every component
- long entrance animations
- unnecessary bounce
- perpetual decorative movement
- motion that delays interaction
- animating images on hover directly (provide feedback on the container or trigger instead)

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
8. Are there any pills or `rounded-full` pill badges/chips? (If yes, eliminate them; use clean typographic hierarchy).
9. Is there any background color, tinted container, or box behind icons? (If yes, remove container backgrounds so icons sit cleanly on the surface).
10. Does the design use more and more images than icons? (If it leans on generic icon grids, replace them with rich photography, product renders, live UI captures, or architectural diagrams).

## Enforcement

If the result is generic, you must redesign it instead of simply reporting success. Remove unnecessary decorations, eliminate pills, remove icon background colors, prioritize rich imagery over icons, restore product context, and prioritize hierarchy over trends.

