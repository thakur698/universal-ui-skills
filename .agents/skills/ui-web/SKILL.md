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
