# Rive Detection Procedure

Before `ui-tool-discovery` marks Rive as `AVAILABLE + EXECUTABLE`, it must run a deterministic check. We use `tests/rive-detector.js` for this.

## The Logic

1. **Check Environment**:
   - Is there a `package.json` (React/Web) or `pubspec.yaml` (Flutter) in the target directory?
2. **Check Dependency**:
   - Web: Look for `"@rive-app/react-canvas"` or `"@rive-app/canvas"`.
   - Flutter: Look for `rive:` under dependencies.
3. **Check Assets**:
   - Recursively search the `public` or `assets` directory for files with the `.riv` extension.
4. **Classification**:
   - Dependencies exist AND `.riv` file exists -> `AVAILABLE + EXECUTABLE`
   - Dependencies exist BUT NO `.riv` file -> `REQUIRES USER SETUP` (Agent needs a `.riv` file to do anything useful).
   - Dependencies missing, but environment supports package managers (npm/flutter) -> `REQUIRES USER SETUP` (Agent may install it *if* explicitly deciding to use Rive, but asset is still needed).
   - Environment unknown -> `NOT AVAILABLE`
