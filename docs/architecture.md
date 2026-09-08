# Canonical Architecture

The Universal UI Skills repository is structured around a **Master Orchestrator** orchestrating **Focused Skills** and **Integrations**.

## Architecture Diagram

```text
                  UNIVERSAL UI SKILLS
                           │
                           ▼
                     UI MASTER
                           │
             ┌─────────────┴─────────────┐
             ▼                           ▼
      TOOL DISCOVERY              DESIGN DIRECTION
             │                           │
             ▼                           ▼
       TOOL SELECTION              DESIGN SYSTEM
             │                           │
     ┌───────┼────────┐                  │
     ▼       ▼        ▼                  ▼
  Design   Assets   Motion          Components
     │       │        │                  │
     └───────┴────────┴──────────────────┘
                           │
                           ▼
                     IMPLEMENTATION
                           │
              ┌────────────┼────────────┐
              ▼            ▼            ▼
          Responsive   Accessibility   Motion
              │            │            │
              └────────────┼────────────┘
                           ▼
                       VISUAL QA
                           │
                           ▼
                     ANTI-SLOP QA
                           │
                           ▼
                         POLISH
                           │
                           ▼
                    FINAL REPORT
```

## Directory Structure

```text
skills/
├── ui-master/
├── ui-tool-discovery/
├── ui-design-direction/
├── ui-anti-slop/
├── ui-components-design-system/
├── ui-layout-responsive/
├── ui-motion/
├── ui-assets/
├── ui-accessibility/
├── ui-visual-qa/
├── ui-web/
├── ui-mobile/
├── ui-flutter/
└── ui-react/

integrations/
├── design/
├── assets/
├── motion/
├── browser/
├── visual-qa/
└── accessibility/

recipes/
├── landing-page.md
├── mobile-app.md
├── flutter-app.md
├── dashboard.md
├── ecommerce.md
└── game-ui.md

evals/
├── anti-slop/
├── responsive/
├── accessibility/
├── visual-quality/
└── motion/
```

## Core Flow
1. `ui-master` evaluates the current state and product context.
2. `ui-tool-discovery` discovers, detects, and selects tools and skills relevant to the task.
3. `ui-design-direction` sets the visual rules.
4. `ui-components-design-system` translates rules into tokens and components.
5. `ui-layout-responsive` ensures structural adaptability.
6. Implement using framework-specific skills (`ui-web`, `ui-mobile`, `ui-flutter`, `ui-react`).
7. `ui-motion` adds interaction communication.
8. `ui-accessibility` validates inclusiveness.
9. `ui-visual-qa` visually inspects the result.
10. `ui-anti-slop` evaluates against generic AI patterns.
