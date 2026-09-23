---
name: ui-web
description: Web-specific implementation guidance for high-quality responsive UI.
---

# Web UI

## Prefer

- semantic HTML where applicable
- CSS variables/design tokens
- accessible interaction
- responsive layout primitives
- keyboard support
- pointer and touch compatibility

## Production Hardening & Craft Floor

Apply these standards to every web project:
- **Themed Browser Surfaces**: Override defaults. Set `::selection` background/text colors. Style scrollbars (`scrollbar-color` or `::-webkit-scrollbar`). Use brand hues for `:focus-visible` outlines (never default blue) with a slight offset. Set `caret-color` on inputs.
- **Typography Discipline**: Cap line measure at 65-75ch `max-width`. Use `text-wrap: balance` for multi-line headlines to avoid orphans. Use `text-wrap: pretty` for paragraphs. Use `font-variant-numeric: tabular-nums` for data.
- **Input Zoom Defense**: Form inputs must have `font-size: 16px` (or `1rem`) on mobile to prevent iOS Safari from aggressively zooming in.
- **Overflow Defense**: Grid and Flex children can blow out containers. Apply `min-width: 0` (and `min-height: 0` for grid) to fluid children to prevent overflow bugs.
- **Logical Properties**: Prefer logical properties (`margin-inline`, `padding-block`, `border-inline-start`) over physical ones (`margin-left`, `padding-top`) for robust RTL support.

## Interaction

Check:
- hover
- focus
- active
- disabled
- loading
- keyboard navigation
- reduced motion

## React/Next.js

Keep:
- UI state close to its owner when appropriate
- server/client boundaries intentional
- reusable components understandable
- style tokens centralized

Do not make every component depend on global state.
