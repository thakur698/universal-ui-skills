Tool: Automated Screenshots
Purpose: Provide a visual artifact of the rendered UI for the agent to inspect for Anti-Slop or layout issues.
Type: External Tool / Agent Capability
Required: No
Installation: Relies on the agent's browser control capabilities (e.g., Antigravity `browser_subagent`).
Agent compatibility: Verified (Antigravity).
Credentials required: No.
Paid: No.
Fallback: Proceed without visual inspection. Rely strictly on DOM inspection or code review.
How ui-master uses it: `ui-tool-discovery` identifies if the agent can view rendered web pages. If so, `ui-visual-qa` asks the agent to navigate to the local dev server, capture a screenshot, and review it against the `ui-design-direction`.
