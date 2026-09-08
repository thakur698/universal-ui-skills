# Universal UI Skills

A reusable, open-source **AI-agent UI skill pack for web and mobile apps**.

The goal is simple:

> Build interfaces that feel intentional, product-specific and professionally art-directed — not generic AI-generated "slop".

Works as a foundation for AI coding agents such as Antigravity, Claude Code, Codex, Cursor, Windsurf and other skills-compatible environments.

## Supported product types

- SaaS/web applications
- consumer web apps
- mobile apps
- Flutter applications
- React / Next.js applications
- dashboards and admin products
- ecommerce/product experiences
- developer tools
- content applications
- game UI when desired

The core skills are framework-agnostic. Platform/framework skills add implementation-specific guidance.

## Skill map

| Skill | Purpose |
|---|---|
| `ui-master` | Orchestrates the entire UI workflow |
| `ui-design-direction` | Creates visual/product-specific art direction |
| `ui-anti-slop` | Detects and rejects generic AI UI patterns |
| `ui-layout-responsive` | Responsive layout and adaptive composition |
| `ui-motion` | Purposeful interaction and animation |
| `ui-components-design-system` | Component architecture and design tokens |
| `ui-assets` | Icons, illustrations, imagery and asset consistency |
| `ui-accessibility` | Inclusive and usable UI |
| `ui-visual-qa` | Screenshot/golden/visual regression workflow |
| `ui-web` | Web-specific implementation guidance |
| `ui-mobile` | Mobile-specific implementation guidance |
| `ui-flutter` | Flutter-specific implementation guidance |
| `ui-react` | React/Next.js-specific implementation guidance |

## Core philosophy

This skill pack is not a style preset.

It does not force:
- one color palette
- one typography style
- one radius
- one component library
- one trendy design aesthetic

Instead, it forces the agent to **make deliberate design decisions** before generating a large amount of UI.

## Anti-AI-slop principles

Reject defaults such as:
- excessive rounded cards
- repeated pill UI
- random purple/blue gradients
- giant soft shadows
- decorative glassmorphism everywhere
- dashboard grids where hierarchy is not grid-based
- generic hero sections
- emoji as product iconography
- inconsistent icon families
- "every section is a card"
- animation on everything
- excessive text inside UI
- visual effects without product purpose

## Installation

Using the Skills CLI:

```bash
npx skills add https://github.com/YOUR_USERNAME/universal-ui-skills
```

Install a specific skill:

```bash
npx skills add https://github.com/YOUR_USERNAME/universal-ui-skills --skill "ui-master"
```

## Recommended workflow

```text
Product context
      ↓
Design direction
      ↓
Information architecture
      ↓
Design tokens
      ↓
Component language
      ↓
Screen composition
      ↓
Assets
      ↓
Implementation
      ↓
Motion
      ↓
Responsive/accessibility
      ↓
Visual QA
      ↓
Anti-slop review
      ↓
Polish
```

## Tooling philosophy

External tools are adapters, not hard dependencies.

The skills can be used without any single commercial service. Agents should inspect available integrations and use compatible tooling for:

- design references
- Figma/design-to-code
- image/asset creation
- animation
- browser/device automation
- screenshot capture
- visual regression
- accessibility checks

Never commit API keys or proprietary assets.

## License

MIT.
