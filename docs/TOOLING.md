# Tooling & Integrations Registry

External tools are adapters, not hard dependencies.

## 3 Levels of Integration

When assessing an external tool for this framework, understand its level of integration:

1. **Documentation**: The tool is documented, but the agent cannot invoke it automatically (e.g., "Rive can be used for animation").
2. **Detection**: The agent can reliably detect if the tool is installed/available in the environment (e.g., checking `package.json`).
3. **Execution**: The agent can automatically execute the tool (e.g., "Use Playwright to capture a screenshot").

Your goal is to reach Level 2 + Level 3 wherever the host agent supports it.

## Tool Matrix

*Note: Claims of "verified" below mean the tool has been actively integration-tested in a specific agent environment. Unverified tools are marked as "experimental" or "partial" until explicitly proven to execute.*

| Category | Tool | Purpose | Required? | Compatibility | Notes |
|---|---|---|---|---|---|
| Design | Figma | Design-to-code, reference | Optional | Requires verification | Requires API keys outside repo |
| Visual QA | Playwright | Browser automation/screenshots | Optional | Requires verification | Ideal for web snapshot tests |
| Visual QA | Percy | Visual regression | Experimental | Partial | Requires CI integration |
| Motion | Rive | Interactive stateful animation | Optional | Requires verification | Best for Flutter/React |
| Motion | Framer Motion | Web React animation | Optional | Requires verification | Excellent for layout animations |

## Integration Principles
- Do NOT make external vendor APIs mandatory for the core skills.
- Do NOT commit API keys.
- Do NOT force the installation of a dependency just for decoration.
- Agents must **detect** what is already installed and use compatible tools before suggesting new ones.
