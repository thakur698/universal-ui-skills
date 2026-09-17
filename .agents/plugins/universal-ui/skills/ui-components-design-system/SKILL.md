---
name: ui-components-design-system
description: Creates maintainable component systems, design tokens, variants and interaction states for web and mobile apps.
---

# UI Components & Design System

## Mission

Create reusable, semantically named, and maintainable component architectures.
Avoid both extremes:
- BAD: One-off visual code (inline styles, magic numbers) everywhere.
- ALSO BAD: Turning every tiny wrapper into a bloated, over-engineered component.

## Design Tokens

Require semantic design tokens. Do not hardcode magic values across the UI.
At minimum cover:
- **Typography**: scales, weights, line heights
- **Spacing**: padding, margins, gaps
- **Colors**: semantic palette (primary, secondary, success, error, text, background)
- **Surfaces**: background, elevated, raised, depressed
- **Borders**: colors, widths, styles
- **Radii**: none, small, medium, large, full
- **Elevation**: shadows, z-index layers
- **Motion**: duration, easing curves
- **Focus**: ring colors, offset
- **States**: active, disabled, hover variables

### Semantic Token Naming

Examples of good token naming:
- `color-surface-elevated`
- `text-primary-inverse`
- `space-layout-gutter`
- `radius-control-default`

## Component States

Require rigorous component states. Ensure you design and implement the following states for interactive components:
- **Default**: The resting state.
- **Hover**: (Where relevant, primarily web)
- **Pressed**: Active state during interaction.
- **Focus**: Keyboard or programmatic focus.
- **Disabled**: Uninteractive and visually muted.
- **Loading**: Awaiting data or action completion.
- **Selected**: Chosen option in a set.
- **Error**: Invalid state.
- **Success**: (Where applicable)

## Anti-Slop Component Rules

1. **No Pill Components**: Do NOT build or use pill badges, pill tags, pill chips, or floating pill containers (`rounded-full` enclosures). Structure metadata and labels with crisp typography, micro-borders, or simple layout hierarchy.
2. **No Icon Background Containers**: Do NOT build component wrappers that add colored background fills, tinted boxes, circular backdrops, or square containers behind icons (e.g. `bg-primary/10 rounded-xl p-3`). Icons must render cleanly directly on the surface.
3. **Image Primacy**: Design components to showcase rich visual media (screenshots, photography, 3D assets, architecture diagrams) rather than repetitive icon containers.

## Documentation

Document your component structures using the `docs/design-system-template.md` format.

