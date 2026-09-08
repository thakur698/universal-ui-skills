# Recipe: Game UI

When tasked with building Game UI, orchestrate the following workflow:

## 1. Tool Discovery
- Check for `Rive` or WebGL engines if applicable.
- Check for custom font loading capabilities.

## 2. Design Direction
- **Goal**: Immersion, thematic consistency, high feedback.
- **Typography**: Thematic display fonts (pixel, fantasy, sci-fi).
- **Depth**: Highly stylized. Can be entirely skeuomorphic (wood, metal) or extremely flat/neon depending on the game genre.

## 3. Component System
- Non-standard buttons (custom shapes, heavy borders).
- HUD elements (health bars, resource counters, minimaps).

## 4. Motion
- **Hero**: Aggressive, highly expressive animations (screen shakes, particle bursts, dramatic slides).
- **Micro**: High-feedback hover states (sound cues, color inversion).

## 5. Anti-Slop Check
- Standard SaaS components (like basic gray borders and drop shadows) look out of place here. Redesign to fit the specific game theme.
