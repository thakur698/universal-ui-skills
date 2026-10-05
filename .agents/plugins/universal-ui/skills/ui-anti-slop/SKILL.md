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

## Anti-Patterns (Code Examples)

When auditing code, strictly reject the following structures. Agents learn best from concrete examples:

### 1. Icon Background Containers (Strictly Forbidden)
❌ **SLOP (Reject):**
```html
<div class="bg-blue-100 rounded-lg p-2 flex items-center justify-center">
  <svg class="w-5 h-5 text-blue-600">...</svg>
</div>
```
✅ **ANTI-SLOP (Accept):**
```html
<svg class="w-6 h-6 text-blue-600">...</svg>
```
*Icons must sit cleanly on the surface. No containers, no boxes, no tinted backdrops.*

### 2. Ghost Cards
❌ **SLOP (Reject):**
```html
<div class="border border-gray-200 shadow-xl rounded-xl">...</div>
```
✅ **ANTI-SLOP (Accept):**
```html
<!-- Either Border OR Shadow, never both -->
<div class="border border-gray-200 rounded-xl">...</div>
<!-- OR -->
<div class="shadow-xl border-transparent rounded-xl">...</div>
```

## Anti-Slop Review Questions

Before declaring success, you MUST explicitly output a markdown checklist answering these 10 questions. You cannot pass the review unless question 8 (Pills) and 9 (Icon Backgrounds) are explicitly answered 'No':

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

