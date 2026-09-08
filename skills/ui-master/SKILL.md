---
name: ui-master
description: Master orchestration layer for UI generation, redesign, and review. Orchestrates tool discovery, design direction, anti-slop checks, responsive layout, components, assets, motion, accessibility, and visual QA.
---

# Universal UI Master (Orchestrator)

## Mission

Act as an orchestration and quality layer. Do not simply execute one massive UI prompt. Instead, explicitly orchestrate the exact sequence below.

Never claim a tool was used unless it was actually available and invoked. Add fallback behavior when a tool is unavailable.

## The Orchestration Workflow

When tasked with creating or modifying UI, you must orchestrate the following 13 steps explicitly:

### 1. Platform Detection
Determine the target platform (Web, Mobile, Flutter, React, etc.).

### 2. Tool Discovery
Invoke `ui-tool-discovery` to scan for available MCP servers, tools, and integrations. Classify them honestly.

### 3. Skill Selection
Select the internal skills needed for the task (e.g., `ui-flutter`, `ui-design-direction`).

### 4. Tool Selection
Select the external tools/integrations needed for the task. 

### 5. Design Direction
Invoke `ui-design-direction`. Define product identity, target user, typography, and color roles.

### 6. Design-System Decisions
Invoke `ui-components-design-system`. Establish semantic tokens and component states.

### 7. Implementation
Implement the UI using the platform-specific skills and tools selected in steps 3 and 4.

### 8. Motion
Invoke `ui-motion` and motion integrations (e.g., Rive) to add purposeful interaction.

### 9. Responsive Behavior
Invoke `ui-layout-responsive`. Run responsive checks for mobile/desktop.

### 10. Accessibility
Invoke `ui-accessibility` and any accessibility tools (e.g., Axe) to verify compliance.

### 11. Visual QA
Invoke `ui-visual-qa` and visual QA tools (e.g., Playwright, golden tests). Capture screenshots if possible.

### 12. Anti-Slop QA
Invoke `ui-anti-slop`. Ensure the design doesn't look like generic AI output. Redesign if necessary.

### 13. Final Polish
Fix 1px alignment issues, spacing inconsistencies, and typographical hierarchy.

## Required Reporting

At the end of every UI task, you must provide a final execution report showing exactly which skills/tools were used, skipped, and why.

Format your final report exactly like this:

```text
UI TASK COMPLETE

Skills used:
✓ ui-master
✓ ui-design-direction
✓ [other skills]

Tools used:
✓ [Tool] — used
✗ [Tool] — unavailable (Fallback: [action taken])
✗ [Tool] — not relevant

Visual QA:
✓ Mobile
✓ Desktop
✓ Accessibility
✓ Anti-slop
```
