---
name: ui-layout-responsive
description: Handles responsive web and mobile layout using constraints, hierarchy and platform-aware composition.
---

# Responsive UI

## Web

Account for:
- narrow laptop
- standard desktop
- wide desktop
- browser zoom
- content density
- navigation changes
- keyboard/mouse interaction

Prefer:
- fluid containers
- max-width constraints
- intentional breakpoints
- flexible grids
- adaptive sidebars
- contextual sticky elements

## Mobile

Account for:
- small phones
- large phones
- notches
- safe areas
- keyboard
- touch reachability
- orientation when relevant
- dynamic type/text scaling

## Do not

- design one fixed canvas and scale it everywhere
- use magic coordinates everywhere
- allow content to collide with system UI
- make all desktop UI simply "stack vertically"

## Responsive principle

Change composition when necessary.

A mobile layout is often a different composition of the same information, not a shrunken desktop screen.
