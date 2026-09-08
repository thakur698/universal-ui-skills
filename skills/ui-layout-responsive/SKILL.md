---
name: ui-layout-responsive
description: Handles responsive web and mobile layout using constraints, hierarchy and platform-aware composition.
---

# Responsive Layout

## Mission

Handle responsive adaptation properly. Make it explicit that responsive design is NOT simply "scale desktop down". The system should fundamentally change composition, navigation, and density when necessary.

## Supported Layout Environments

### WEB
Design and test for these contexts:
- **Narrow Viewport**: Mobile web, split-screen desktop.
- **Laptop**: Standard 13-15" displays.
- **Desktop**: Large standard monitors (1080p to 1440p).
- **Wide Desktop**: Ultrawide monitors (preventing infinite line lengths and overstretched UI).

### MOBILE
Design and test for these contexts:
- **Small Phones**: Legacy devices like iPhone SE.
- **Large Phones**: Standard modern form factors.
- **Tablets**: Expanded canvases requiring split views or master-detail layouts.
- **Safe Areas**: Accounting for notches, dynamic islands, and home indicators.
- **Keyboard**: Ensuring inputs remain visible when the virtual keyboard is open.
- **Orientation**: (Where relevant) Handling portrait vs. landscape.
- **Text Scaling**: Adapting to user accessibility font size preferences without breaking layout.

## Composition Shifts

Instead of shrinking elements, consider:
- Collapsing horizontal navigation into drawers/bottom bars.
- Stacking multi-column layouts into single columns.
- Converting datatables to list cards on narrow viewports.
- Moving secondary actions behind menus.
- Anchoring primary actions to the bottom on mobile (thumb reachability).

## Verification

Consult `docs/responsive-checklist.md` to ensure layouts adapt correctly across platforms.
