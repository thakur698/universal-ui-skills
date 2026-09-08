---
name: ui-tool-discovery
description: Discovers, evaluates, and conditionally activates UI tools, skills, and external integrations before executing UI tasks.
---

# UI Tool Discovery

## Mission

Make ui-tool-discovery the gateway for detecting available skills, MCP servers, integrations, animation tools, design tools, asset tools, browser/device tools, and visual-QA tools.
Never claim a tool was used unless it was actually available and invoked.

The orchestration contract is strict:
`DISCOVER` → `DETECT` → `CLASSIFY` → `SELECT` → `ACTIVATE` → `USE` → `VERIFY`

## 4 Levels of Classification

When assessing any tool, skill, or MCP server, classify it exactly into one of these categories:
1. **AVAILABLE + EXECUTABLE**: The tool is installed/available and the agent can invoke it automatically.
2. **AVAILABLE + MANUAL**: The tool is installed/available, but requires the human user to execute it manually.
3. **NOT AVAILABLE**: The tool is not present in the environment or agent's capabilities.
4. **REQUIRES USER SETUP**: The tool exists but lacks necessary credentials, API keys, or configuration to be used.

## Discovery Workflow

Before starting UI implementation, execute this process:

### 1. DISCOVER
- Check for available MCP (Model Context Protocol) servers in the agent environment.
- Check installed project dependencies (`package.json`, `pubspec.yaml`, etc.).
- Check available Universal UI Skills in `skills/`.
- Check external integrations documented in `integrations/`.

### 2. DETECT
Determine if the tools are available in the current environment.

### 3. CLASSIFY
Classify every relevant tool honestly using the 4 classifications above.

### 4. SELECT
Select only the tools relevant to the task.
- Prefer already-installed tools.
- Prefer deterministic/local tooling where possible.
- **Rule**: Ask before installing paid services, account connections, API keys, or destructive installations.

### 5. ACTIVATE
Activate the selected internal skills and MCP servers.

### 6. USE
Invoke the selected integrations. Never claim a tool was used unless it was actually invoked.

### 7. VERIFY
Validate that the tool executed successfully.

## Required Reporting

When UI Tool Discovery is complete, provide an explicit log for the master orchestrator. For example:

Tool: Rive
Detected: YES
Classification: AVAILABLE + EXECUTABLE
Selected: YES
Reason: Interactive animation required
Used: YES
Verification: Animation asset loaded and rendered successfully

Tool: Figma
Detected: NO
Classification: NOT AVAILABLE
Selected: NO
Fallback: Use existing project components/design tokens
