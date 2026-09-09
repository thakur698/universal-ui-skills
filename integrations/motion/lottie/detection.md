# Lottie Detection Procedure

Before `ui-tool-discovery` marks Lottie as `AVAILABLE + EXECUTABLE`, it must run a deterministic check via `tests/lottie-detector.js`.

## The Logic

1. **Check Dependency**:
   - Web: Look for `"lottie-react"`, `"lottie-web"`, or `"@lottiefiles/react-lottie-player"`.
   - Flutter: Look for `lottie:` under dependencies.
2. **Check Assets**:
   - Recursively search the `public` or `assets` directory for files with the `.json` extension that structurally appear to be Lottie files (checking for `v`, `fr`, `ip`, `op` keys if possible, or just assuming `.json` in an animation folder).
3. **Classification**:
   - Dependency + Asset -> `AVAILABLE + EXECUTABLE`
   - Dependency ONLY -> `REQUIRES USER SETUP` (Missing animation asset).
   - Missing Dependency -> `REQUIRES USER SETUP` (Agent may install if requested).
