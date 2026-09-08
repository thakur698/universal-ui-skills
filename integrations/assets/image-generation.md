Tool: Image Generation (e.g., Midjourney, DALL-E)
Purpose: Generate placeholder or final illustrative assets (e.g., onboarding heroes, empty state graphics) that match a specific design direction.
Type: External Tool
Required: No
Installation: Not installed locally; triggered via agent capabilities if the agent has access to an image generation API.
Agent compatibility: Partial (Depends on agent tools, e.g., Antigravity `generate_image`).
Credentials required: Handled by agent.
Paid: Handled by agent.
Fallback: Use solid color placeholders or search for open-source vector illustrations (e.g., unDraw).
How ui-master uses it: `ui-tool-discovery` checks if the agent can generate images. If yes, `ui-assets` writes a prompt matching the `ui-design-direction` to generate an asset.
