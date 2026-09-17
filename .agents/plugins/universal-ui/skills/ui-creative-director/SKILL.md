---
name: ui-creative-director
description: Generates a definitive "Design Read" inference of the product before any code is written, establishing the creative baseline.
---

# UI Creative Director

## Mission

Before defining layout, code, or metrics, the agent must definitively interpret what it is building. The Creative Director analyzes the user's brief and infers the core attributes of the product to ensure the subsequent design is intentional, not generic.

## The Design Read

For every new UI task, generate a **Design Read** answering the following dimensions:

1. **PRODUCT TYPE**: (e.g., Consumer Fitness App, B2B SaaS Dashboard, E-commerce Storefront, Developer Tool)
2. **AUDIENCE**: (e.g., Casual users, High-intent power users, Enterprise admins)
3. **PRIMARY JOB**: What is the single most important action the user must accomplish here?
4. **EMOTIONAL TARGET**: (e.g., Energetic & Confident, Calm & Focused, Trustworthy & Institutional, Playful & Expressive)
5. **VISUAL METAPHOR**: (e.g., A tactile physical instrument, A stark architectural blueprint, An editorial magazine)
6. **CONTENT DENSITY**: (e.g., Sparse/Breatheable, High-Density/Data-Heavy)
7. **PLATFORM**: (e.g., Native Mobile iOS, Responsive Web, Desktop App)
8. **RISK LEVEL**: (e.g., Low-risk social interactions, High-risk financial transactions)
9. **REFERENCE INFLUENCE**: (e.g., Influenced by Strava/Apple Fitness, Influenced by Linear/Vercel)

## Example Read

> **Reading this as:**
> A consumer fitness mobile app for daily habit building, with a confident energetic visual language, high interaction frequency, medium visual density, and a tactile rather than corporate aesthetic. Influenced by modern athletic brands.

## Rules
- The Design Read MUST be generated and documented BEFORE any code or layout decisions are made.
- Do NOT skip straight to implementation.
- This Read will be passed to `ui-design-dials` to set the exact metric thresholds.
