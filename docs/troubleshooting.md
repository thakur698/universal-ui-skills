# Troubleshooting

## Generic Generated Outputs
**Symptom**: The AI agent keeps generating the exact same layout (cards, blue gradients) for every project.
**Solution**: Ensure `ui-design-direction` is explicitly invoked before implementation. Force the agent to write out the `design-direction-template.md`.

## Accessibility Failures
**Symptom**: Text is unreadable or fails contrast checks.
**Solution**: Require the agent to explicitly declare the contrast ratio of text against its background using WCAG 2.1 standards before committing the style.

## Layout Breaking on Mobile
**Symptom**: The layout horizontal scrolls or squishes unreadably on mobile screens.
**Solution**: Run the `evals/responsive/mobile.md` checklist. Force the agent to redesign the composition (e.g., stacking grids into single columns) rather than just scaling elements.
