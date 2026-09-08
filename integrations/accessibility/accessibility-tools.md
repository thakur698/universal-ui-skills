Tool: Accessibility Auditing (e.g., axe-core, Lighthouse)
Purpose: Automatically scan the DOM for accessibility violations (contrast, ARIA roles, labels).
Type: Dependency Library / CLI
Required: No
Installation: `npm install -D @axe-core/cli` or use built-in Chrome Lighthouse.
Agent compatibility: Verified.
Credentials required: No.
Paid: No.
Fallback: The agent must perform manual code inspection against the `evals/accessibility/basic.md` checklist.
How ui-master uses it: `ui-tool-discovery` checks if axe-core or Lighthouse CLI is available. If yes, `ui-accessibility` orchestrates running the scanner against the rendered UI and automatically fixes reported violations.
