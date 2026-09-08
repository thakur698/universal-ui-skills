# Universal UI Skills

> **Make AI-generated interfaces feel designed, not generated.**

Universal UI Skills is an open-source skill system for AI coding agents that helps create polished, distinctive **web and mobile interfaces** without falling into repetitive "AI-slop" patterns.

It is designed to work across product types and frameworks, including **React, Next.js, Flutter, mobile apps, SaaS products, dashboards, consumer apps, ecommerce and more**.

The project is intentionally vendor-neutral: the core skills provide design reasoning, implementation guidance and visual QA without requiring a specific paid tool or API.

---

## Why this exists

AI coding agents are extremely good at producing functional interfaces quickly.

The problem is that functional UI can still look:

- generic
- repetitive
- over-carded
- overly rounded
- visually noisy
- inconsistent
- heavily dependent on gradients and glow
- copied from common SaaS patterns

Universal UI Skills adds a structured design process before and after implementation.

Instead of:

```text
Prompt → Code → Done
```

the system encourages:

```text
Product context
      ↓
Design direction
      ↓
Information hierarchy
      ↓
Design tokens
      ↓
Component language
      ↓
Screen composition
      ↓
Implementation
      ↓
Motion
      ↓
Responsive + accessibility
      ↓
Visual QA
      ↓
Anti-slop review
      ↓
Polish
```

---

## What you get

| Skill | Purpose |
|---|---|
| `ui-master` | Orchestrates a complete UI generation/redesign workflow |
| `ui-design-direction` | Establishes product-specific visual direction |
| `ui-anti-slop` | Detects generic AI-generated visual patterns |
| `ui-layout-responsive` | Handles responsive/adaptive composition |
| `ui-motion` | Creates purposeful motion and interaction feedback |
| `ui-components-design-system` | Builds reusable tokens, components and states |
| `ui-assets` | Keeps icons, illustrations and imagery coherent |
| `ui-accessibility` | Reviews accessibility and inclusive interaction |
| `ui-visual-qa` | Uses screenshots/tests/goldens for visual verification |
| `ui-web` | Web implementation guidance |
| `ui-mobile` | Mobile implementation guidance |
| `ui-flutter` | Flutter implementation guidance |
| `ui-react` | React/Next.js implementation guidance |

The master skill can coordinate the focused skills instead of forcing every project into one visual template.

---

# Installation

## Skills CLI

Install the complete skill repository:

```bash
npx skills add https://github.com/thakur698/universal-ui-skills
```

Install only the master skill:

```bash
npx skills add https://github.com/thakur698/universal-ui-skills --skill "ui-master"
```

Install a focused skill:

```bash
npx skills add https://github.com/thakur698/universal-ui-skills --skill "ui-anti-slop"
```

---

# Use with AI coding agents

The repository is intended for agentic workflows.

Typical workflow:

```text
1. Install skills
2. Open your existing project
3. Tell the agent what product/screen you are building
4. Ask it to inspect the current UI before modifying it
5. Let the design-direction skill establish the visual language
6. Implement using the appropriate framework skill
7. Add motion intentionally
8. Validate responsive behavior and accessibility
9. Capture screenshots / run visual QA
10. Run the anti-slop review
11. Polish the highest-impact visual issues
```

The skills are useful with environments that can load repository-based agent instructions and skills.

---

# Core design philosophy

Universal UI Skills does **not** enforce one aesthetic.

It does not say every product should be:

- dark
- minimal
- glassmorphic
- colorful
- heavily animated
- rounded
- "modern"

Instead, it asks the agent to derive the visual language from the actual product.

A fitness app, finance dashboard, game, developer tool and education product should not automatically look identical.

---

# Anti-slop standard

The system rejects or questions patterns such as:

- excessive rounded cards
- "everything is a card"
- endless pill controls
- random purple/blue gradients
- decorative glassmorphism without purpose
- giant soft shadows
- emoji replacing real product icons
- inconsistent icon families
- random glow effects
- generic dashboard grids
- repeated centered hero layouts
- visual effects without product meaning
- animation on everything
- UI copied mechanically from another screen

### The key question

> **Could this interface belong to 20 unrelated products?**

If the answer is yes, the agent should revisit the visual direction and composition.

Anti-slop does **not** mean "make everything minimal".

Rich, expressive and highly visual interfaces are welcome when the visual decisions are justified by the product.

---

# Design before duplication

Before generating many screens, the agent should establish:

### Typography
- display hierarchy
- body hierarchy
- numeric/data treatment
- weight strategy
- line-height strategy

### Color
Semantic roles such as:

- background
- surface
- elevated surface
- text primary
- text secondary
- border
- brand
- interactive
- success
- warning
- error

### Shape
- radius families
- control geometry
- border language
- icon containers

### Depth
- flat
- outlined
- layered
- subtle elevation
- atmospheric

### Motion
- micro interaction
- standard transitions
- important hero moments

This creates a system instead of a pile of unrelated screens.

---

# Motion philosophy

Motion is treated as communication.

Use it for:

- interaction feedback
- state changes
- navigation
- continuity
- focus
- progress
- rewards

Do not animate every element just to make a screen feel "premium".

For Flutter, simple interactions should use native animation primitives where appropriate; specialized animation tools can be introduced when the interaction genuinely benefits from them.

For web, motion should remain responsive, accessible and compatible with reduced-motion preferences.

---

# Visual QA

Compilation success does not equal visual success.

Where the project/tooling supports it, validate with:

- screenshots
- golden/snapshot tests
- component state checks
- responsive viewport/device checks
- accessibility checks
- interaction-state checks

Review representative layouts across:

### Web
- narrow viewport
- desktop
- wide desktop

### Mobile
- small phone
- large phone
- tablet where supported

The agent should fix:

- clipping
- overflow
- hierarchy problems
- spacing problems
- contrast problems
- inconsistent states
- awkward responsive composition

before declaring the UI finished.

---

# Framework support

### React / Next.js

Use:

```text
ui-master
ui-design-direction
ui-components-design-system
ui-layout-responsive
ui-motion
ui-accessibility
ui-visual-qa
ui-web
ui-react
```

### Flutter

Use:

```text
ui-master
ui-design-direction
ui-components-design-system
ui-layout-responsive
ui-motion
ui-accessibility
ui-visual-qa
ui-mobile
ui-flutter
```

### Other stacks

The framework-neutral skills can still be used:

```text
ui-design-direction
ui-anti-slop
ui-layout-responsive
ui-motion
ui-components-design-system
ui-assets
ui-accessibility
ui-visual-qa
```

Add the stack-specific skill when available.

---

# Tooling

This project intentionally keeps external tooling optional.

Useful categories include:

### Design
- Figma and compatible design workflows
- reference/moodboard tools
- design-system documentation tools

### Assets
- image generation/editing
- vector tools
- icon systems
- licensed illustration/asset libraries

### Motion
- native CSS / Flutter / React animation
- Rive
- Lottie
- platform motion APIs

### Visual QA
- browser automation
- device automation
- screenshot capture
- golden/snapshot testing
- accessibility auditing

The agent should check what is already available before installing additional dependencies.

Never commit API keys or proprietary assets.

---

# Repository structure

```text
universal-ui-skills/
├── .github/
├── .claude-plugin/
├── skills/
│   ├── ui-master/
│   ├── ui-design-direction/
│   ├── ui-anti-slop/
│   ├── ui-layout-responsive/
│   ├── ui-motion/
│   ├── ui-components-design-system/
│   ├── ui-assets/
│   ├── ui-accessibility/
│   ├── ui-visual-qa/
│   ├── ui-web/
│   ├── ui-mobile/
│   ├── ui-flutter/
│   └── ui-react/
├── docs/
├── examples/
├── scripts/
├── tests/
├── AGENTS.md
├── CONTRIBUTING.md
├── SECURITY.md
├── LICENSE
└── README.md
```

---

# Recommended project prompt

After installing the skill, a project prompt can be as simple as:

```text
Use the Universal UI Skills workflow.

First inspect the existing product and UI architecture.

Then:
1. establish a product-specific design direction
2. preserve strong existing patterns
3. create/reuse a coherent design system
4. compose the screen around hierarchy rather than generic templates
5. implement using the project's existing architecture
6. add purposeful motion
7. handle responsive behavior
8. handle accessibility
9. perform screenshot/visual QA where available
10. run the anti-slop review
11. fix visual issues before reporting completion

Do not use generic SaaS/dashboard styling unless it genuinely fits the product.
Do not add decoration merely to make the screen look "AI-generated premium".
```

---

# Contributing

Contributions are welcome.

Good contributions include:

- improved UI review heuristics
- framework-specific implementation guidance
- better responsive patterns
- stronger accessibility rules
- motion techniques
- visual QA workflows
- examples showing distinctive UI

See [CONTRIBUTING.md](CONTRIBUTING.md).

---

# Roadmap

Planned areas for expansion:

- richer example projects
- screenshot-based UI evaluation recipes
- framework-specific design-system adapters
- stronger visual regression workflows
- additional mobile framework skills
- additional web framework skills
- reusable design-quality checklists
- community-contributed UI patterns

---

# License

MIT.

Third-party tools, libraries and assets referenced by this project remain under their respective licenses.

---

## Author / Project

**Universal UI Skills**

GitHub:
https://github.com/thakur698/universal-ui-skills
