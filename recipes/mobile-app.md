# Recipe: Mobile App

When tasked with building a native or PWA mobile application, orchestrate the following workflow:

## 1. Tool Discovery
- Check for `Lottie` (onboarding animations).
- Check for `Browser Automation` (Playwright) to emulate mobile viewport QA.

## 2. Design Direction
- **Goal**: High-frequency interaction, task completion.
- **Typography**: System fonts (San Francisco/Roboto) for legibility at small sizes.
- **Depth**: Flat with subtle elevation for floating action buttons or bottom sheets.

## 3. Component System
- Full-width lists with 16px/24px gutters.
- Standardized `BottomNav` and `AppBar`.

## 4. Responsive Layout
- Respect safe areas (iOS notches, Android nav bars).
- Keep primary actions thumb-reachable (bottom half of screen).

## 5. Motion
- Standard transitions: Page pushes (slide left), modals (slide up).
- Micro-interactions: Button press scaling (e.g., scale 0.95).

## 6. Accessibility & QA
- Touch targets must be 44x44pt minimum.
- Run `evals/responsive/mobile.md` checklist.
