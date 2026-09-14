# Anti-Slop Philosophy

AI slop happens when an agent optimizes for "looks modern" instead of "fits the product".

## Core Principles

1. **Hierarchy over decoration**: If you remove all shadows, gradients, and rounded corners, does the screen still make sense?
2. **Domain specific**: A medical dashboard should not look like a consumer gaming app.
3. **Restraint**: Do not use every CSS trick you know just because you can.
4. **Image & Media Dominance**: Use more and more images than icons across websites and apps. Primary feature storytelling belongs to real photography, product renders, UI captures, and architectural diagrams. Icons are strictly utility tools.
5. **Zero Pills**: Avoid `rounded-full` pill badges, tags, chips, or floating pill containers. Use clean typography, micro-borders, and spatial hierarchy instead.
6. **No Background Color Behind Icons**: Icons must sit directly on the background surface without tinted boxes, colored circles, square containers, or glass tiles.

## Red Flags
- Every section is a card.
- Floating elements with no structural grounding.
- Random purple/blue gradients used as a fallback for "modern".
- Pills of any kind (`rounded-full` badges, tags, chips, floating eyebrows).
- Background colors, tinted boxes, or container tiles behind icons (`bg-primary/10 rounded-xl p-3`).
- Relying on generic icon grids to explain features instead of rich images and diagrams.
- Giant soft drop-shadows on every element.
- Motion on every component on load.

## The Key Test
> Could this UI belong to 20 unrelated products?
If yes, redesign it.

