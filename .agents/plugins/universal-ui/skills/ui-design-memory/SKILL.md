---
name: ui-design-memory
description: Enforces persistent product styling across sessions, preventing the AI from defaulting to its favorite generic aesthetic.
---

# UI Design Memory

## Mission

AI agents suffer from "amnesia" and default to their favorite generic aesthetics (often minimal SaaS layouts with purple gradients) in every new session. Design Memory ensures that a product retains its unique visual language over time.

## The "Do Not Default" Rule

**Do not copy visual choices from the previous task or session unless the user explicitly wants continuity.**

For every new product, the agent MUST explicitly re-evaluate:
- Typography
- Accent color
- Radius system
- Layout composition
- Motion language
- Imagery
- Density

## Persistent Memory Structure

If maintaining a long-term project, the agent should optionally create and update a `.design/` directory containing:

```text
.design/
├── DESIGN.md       # The core Design Read and Dials
├── TOKENS.md       # Extracted design tokens (Colors, Spacing, Typography)
├── REFERENCES.md   # The Reference analysis and Composition Map
├── COMPONENTS.md   # Rules for repeating components (Cards, Inputs, Buttons)
├── MOTION.md       # The established easing curves and animation behaviors
├── BRAND.md        # Tone of voice and visual metaphor constraints
└── DECISIONS.md    # Changelog of why specific visual choices were made
```

## Execution
- Before starting a UI task in an existing repository, the agent MUST read the `.design/` directory (if it exists) to inherit the product's established visual language.
- After completing a major UI task, the agent MUST update the relevant files in `.design/` to solidify its design decisions.
