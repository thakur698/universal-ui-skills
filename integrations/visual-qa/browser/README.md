# Browser Visual QA Integration

The `browser_subagent` integration enables the Universal UI Skills system to automatically capture screenshots of rendered web and Flutter applications. This capability is foundational to the Critic loop (`ui-visual-critic`), allowing the agent to visually inspect, score, and iterate on its own code.

## Verification Contract

This integration has been explicitly **VERIFIED** for React and static web targets.

- **repository_status**: `VERIFIED`
- **runtime_status**: `AVAILABLE`

## Usage (ui-tool-discovery)

When `ui-tool-discovery` determines that Visual QA is required, it must check if the `browser_subagent` tool is natively provided by the IDE environment (e.g., Antigravity). If it is available, it is classified as `AVAILABLE + EXECUTABLE` or `AVAILABLE`.

## Adapter Protocol

When a subagent or agent requests visual QA, the adapter executes the following steps:
1. **Start Application**: Ensure the target application is running (e.g., `npm run dev`, `flutter run -d web-server`). Wait for the port to bind.
2. **Open URL**: Instruct the `browser_subagent` to navigate to the local URL (e.g., `http://localhost:3005`).
3. **Set Viewport**: Define exact resolutions for responsive testing (e.g., `1440x900`, `768x1024`, `375x812`).
4. **Wait Conditions**: Wait for a specific duration or for specific DOM nodes to render to bypass async loading (e.g., Lottie/Rive animations).
5. **Capture Screenshot**: The subagent returns a WebP/PNG screenshot artifact to the workspace.
6. **Critique**: The `ui-visual-critic` evaluates the screenshot against the Brief's requirements and the `ui-design-direction`.
