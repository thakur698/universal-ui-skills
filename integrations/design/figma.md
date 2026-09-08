Tool: Figma
Purpose: Connect to Figma API to read design tokens, layout dimensions, or component variants.
Type: External API
Required: No
Installation: Agent-specific Figma plugin or direct REST API access.
Agent compatibility: Partial (Depends on agent's ability to hold API keys securely).
Credentials required: Yes (Figma Personal Access Token).
Paid: Freemium.
Fallback: Use `ui-design-direction` to generate a fresh design direction from scratch.
How ui-master uses it: `ui-tool-discovery` checks if Figma credentials exist. If yes, `ui-master` instructs the agent to read the specified Figma file to extract the visual language instead of generating one.
