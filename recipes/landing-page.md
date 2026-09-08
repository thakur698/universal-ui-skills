# Recipe: Web Landing Page

When tasked with building a landing page, orchestrate the following workflow:

## 1. Tool Discovery
- Check for `Framer Motion` (web animation).
- Check for image generation capabilities for hero assets.

## 2. Design Direction
- **Goal**: Conversion and brand communication.
- **Typography**: High contrast, display headers.
- **Depth**: Atmospheric or layered (to create a premium feel).

## 3. Component System
- Tokens for large spacing (e.g., `py-24` sections).
- Reusable `PrimaryCTA` button with clear hover states.

## 4. Responsive Layout
- Desktop: Multi-column feature grids, side-by-side hero text/image.
- Mobile: Single-column stack, center-aligned hero text, drawer navigation.

## 5. Motion
- Hero entrance: Smooth fade/slide up (Staggered).
- Scroll-linked reveals: Elements fade in as they enter the viewport.

## 6. Anti-Slop Check
- Avoid making it look like a generic SaaS template if it's a consumer product.
- Ensure the hero section doesn't just say "Welcome to [App]".
