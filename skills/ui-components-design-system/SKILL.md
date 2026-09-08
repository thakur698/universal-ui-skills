---
name: ui-components-design-system
description: Creates maintainable component systems, design tokens, variants and interaction states for web and mobile apps.
---

# Component + Design System Skill

## Token layers

Define:
1. primitive values
2. semantic tokens
3. component tokens

Example semantic tokens:
- `surfacePrimary`
- `surfaceElevated`
- `textPrimary`
- `textMuted`
- `actionPrimary`
- `borderSubtle`
- `focusRing`
- `spaceMd`
- `radiusControl`
- `motionStandard`

## Components

Prefer semantic components:
- Button
- IconButton
- Input
- Select
- Dialog
- Sheet
- Card
- ListItem
- Navigation
- Tabs
- Toast
- Badge
- Progress
- EmptyState

Platform naming can differ.

## State completeness

Interactive components should account for:
- default
- hover where applicable
- pressed
- focus
- disabled
- loading
- selected
- error
- success where relevant

## Avoid component inflation

Not every `div`, `Container` or wrapper needs to become a reusable component.

Extract when:
- repeated
- semantically meaningful
- independently testable
- visually governed

## Do not create visual inconsistency by over-abstraction

Shared components should support controlled variation.
