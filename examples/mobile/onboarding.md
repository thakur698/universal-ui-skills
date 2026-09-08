# Mobile Example: Onboarding

## Design Direction
- **Identity**: Consumer fitness tracking app.
- **Tone**: Energetic, motivating, premium.
- **Typography**: Display serif for large emotional headlines, sans-serif for readable body text.
- **Color Roles**: High-contrast black background, vibrant neon green (`#39FF14`) primary action.
- **Surface**: Layered. Imagery sits behind content gradients.

## Hierarchy
1. High-quality aspirational imagery.
2. Short, punchy headline.
3. Primary CTA ("Get Started").

## Components
- `CarouselScreen`: Full-bleed image background with bottom-aligned text overlay.
- `PrimaryButton`: Full-width (minus padding), pill-shaped, vibrant color.
- `PageIndicator`: Minimal dots showing current screen position.

## Motion
- **Hero**: When transitioning between onboarding screens, the image slowly zooms out (scale 1.1 to 1.0) while text crossfades smoothly.
- **Micro**: Button scale down slightly (`0.98`) on press.

## Responsive Behavior
- **Safe Areas**: Button explicitly pads bottom by `safe-area-inset-bottom`.
- **Text Scaling**: Button text remains readable even if scaled up to 150%, falling back to multi-line if necessary.

## Anti-Slop Decisions
- Rejected adding a generic "card" behind the text. The text sits cleanly on a gradient overlay.
- Rejected unnecessary animations on the "Get Started" button (no continuous pulsing).
