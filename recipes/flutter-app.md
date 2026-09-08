# Recipe: Flutter App

When tasked with building a Flutter app, orchestrate the following workflow:

## 1. Tool Discovery
- Check `pubspec.yaml` for `rive` or `lottie`.
- Verify if Golden Tests are set up in the `test/` directory.

## 2. Design Direction
- **Goal**: Cross-platform consistency with platform-specific affordances.
- **Typography**: Define a strict `TextTheme` in `ThemeData`.

## 3. Component System
- Do not hardcode colors in widgets. Extract to `Theme.of(context).colorScheme`.
- Avoid arbitrary `Container` nesting when `SizedBox` or `Padding` is sufficient.

## 4. Responsive Layout
- Use `LayoutBuilder` or `MediaQuery` to adapt the scaffold (e.g., BottomNav on mobile, NavigationRail on desktop).

## 5. Motion
- Use `Hero` animations for image/card transitions between routes.
- Use `ImplicitlyAnimatedWidget`s (`AnimatedContainer`, `AnimatedOpacity`) for state changes.

## 6. Visual QA
- Execute `flutter test --update-goldens` if golden tests exist.
- Otherwise, inspect the widget tree layout constraints.
