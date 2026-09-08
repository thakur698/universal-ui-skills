Tool: Icon Systems (e.g., Lucide, Phosphor, Material Symbols)
Purpose: Provide a consistent, scalable, and semantic set of iconography for the UI.
Type: Dependency Library
Required: Yes (for products that need icons).
Installation: `npm install lucide-react` (React) or use built-in `Icons` (Flutter).
Agent compatibility: Verified.
Credentials required: No.
Paid: No.
Fallback: Use built-in framework icons or SVG strings.
How ui-master uses it: `ui-tool-discovery` checks the `package.json` or `pubspec.yaml` to see which icon library is already installed. `ui-assets` then instructs the agent to ONLY use icons from that specific library to ensure visual consistency (stroke width, style).
