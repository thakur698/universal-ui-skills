Tool: Golden Tests / Snapshot Tests
Purpose: Deterministically ensure the UI renders correctly across platforms (especially Flutter) by comparing output to a baseline image.
Type: Testing Framework
Required: No
Installation: Built-in to Flutter (`flutter test --update-goldens`) or use Jest Image Snapshot for Web.
Agent compatibility: Verified.
Credentials required: No.
Paid: No.
Fallback: Use manual screenshot inspection or code QA.
How ui-master uses it: `ui-tool-discovery` checks if golden tests exist in the `tests/` directory. If they do, `ui-visual-qa` instructs the agent to run the golden tests to verify the UI changes didn't break existing pixel-perfect layouts.
