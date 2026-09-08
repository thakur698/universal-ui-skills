Tool: Browser Automation (e.g., Playwright, Puppeteer)
Purpose: Automate the browser to interact with the rendered UI, verify layout, and capture screenshots for visual QA.
Type: Dependency Library / Testing Tool
Required: No
Installation: `npm install -D @playwright/test`
Agent compatibility: Verified (Agent can run the test script and analyze the output or captured screenshots).
Credentials required: No.
Paid: No.
Fallback: The agent must rely on Code QA (build success) and mental modeling of the CSS/layout code, explicitly stating that Visual QA was skipped.
How ui-master uses it: `ui-tool-discovery` checks if Playwright or similar is installed. If yes, `ui-visual-qa` instructs the agent to run a script to open the page at various viewports and capture screenshots for analysis.
