---
name: ui-anti-slop
description: Detects and prevents generic AI-generated UI patterns in web and mobile products.
---

# Anti-Slop UI Review

## Reject by default

- "modern SaaS" templates with no product-specific reasoning
- identical cards everywhere
- endless rounded containers
- excessive pill controls
- default gradient hero
- random purple/blue glow
- excessive blur
- generic glassmorphism
- huge drop shadows
- emoji replacing real icons
- mixed icon families
- decorative noise
- arbitrary floating UI
- excessive badges
- repeated centered layouts
- one component pattern copied into every context
- excessive animation
- fake complexity

## Red flags

Ask:
1. Could this screen belong to 20 unrelated products?
2. Is a component present only because AI commonly uses it?
3. Is the surface/container hierarchy doing useful work?
4. Does the color system communicate meaning?
5. Is the decoration tied to product identity?
6. Does the UI still make sense without the effects?

## Fix strategy

When a pattern is generic:
- simplify first
- then introduce product-specific visual language
- alter composition rather than adding decoration
- use meaningful assets
- use typography and spacing to create character
- create variants based on real context

## Anti-slop does NOT mean minimal

A rich UI can be excellent.

The restriction is against **unjustified generic styling**, not visual richness.
