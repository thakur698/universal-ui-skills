---
name: ui-react
description: React and Next.js-specific implementation guidance for polished product UI.
---

# React UI

## Structure

Prefer:
- composable semantic components
- CSS variables/design tokens
- predictable state ownership
- accessible primitives
- responsive layout

## Avoid

- massive components
- duplicated variants
- inline style sprawl when tokens would be clearer
- unnecessary global state
- turning every wrapper into an abstraction

## Visual validation

Use browser/device tooling when available and inspect screenshots at representative viewport sizes.
