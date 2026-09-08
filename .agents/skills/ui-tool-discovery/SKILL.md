---
name: ui-tool-discovery
description: Discovers, evaluates, and conditionally activates UI tools, skills, and external integrations before executing UI tasks.
---

# UI Tool Discovery

## Mission

Agents must not blindly attempt to use tools that are not configured or available. `ui-tool-discovery` forces an explicit evaluation phase to map out exactly what is executable in the current environment before orchestrating a V2 UI pipeline.

## The Discovery Pipeline

For each UI task, the agent must execute:
`DISCOVER → CLASSIFY → SELECT → ACTIVATE → VERIFY`

## Classification Matrix

Every tool, MCP server, integration, or skill MUST be classified into one of these four buckets:

1. **AVAILABLE + EXECUTABLE**
   - The tool is natively available and the agent has permission/capability to run it silently. (e.g., `browser_subagent`, `run_command` for `npm`).
2. **AVAILABLE + MANUAL**
   - The tool is available but requires user intervention or approval to run.
3. **NOT AVAILABLE**
   - The tool does not exist in this environment. (e.g., A Figma MCP when no token is provided).
4. **REQUIRES USER SETUP**
   - The tool could be used, but the user must first configure it (e.g., setting an API key).

## Execution Rules

- **Never Fabricate Execution**: Do not claim to have used a tool if it was classified as `NOT AVAILABLE` or `REQUIRES USER SETUP`.
- **Honest Fallbacks**: If a preferred external tool (e.g., Figma for reference analysis) is unavailable, explicitly state the fallback mechanism (e.g., "Figma unavailable → Code-first design direction").
- **Final Report**: The agent must output the discovery classification in its final execution report.
