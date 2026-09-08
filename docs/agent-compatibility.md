# Agent Compatibility

The Universal UI Skills are designed to be as portable as practical across AI coding environments. However, claims of compatibility are strictly honest. If an agent has not been explicitly tested in this repository's CI or manual environments, it is marked as requiring verification.

| Agent Environment | Compatibility | Notes |
|---|---|---|
| Antigravity | **PARTIAL** | Supports skill invocation and repository context. Tool execution verification pending. |
| Claude Code | **PARTIAL** | Supports via `.claude-plugin` but may require manual direction for complex workflows. |
| Cursor | **PARTIAL** | Can read `.cursorrules` or context files. You must manually feed the skill documents to the context. |
| Windsurf | **UNKNOWN** | Pending verification. |
| GitHub Copilot | **PARTIAL** | Can reference repository files, but complex multi-step orchestration is limited. |
| Codex | **UNKNOWN** | - |

Do NOT claim universal compatibility without verification.
