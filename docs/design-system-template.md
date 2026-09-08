# Design System Template

Use this to define semantic tokens and components. Avoid hardcoding hex values or raw pixel sizes directly in component templates.

## Semantic Tokens

### Typography
- `font-family-display`: [Value]
- `font-family-body`: [Value]
- `text-scale-h1` through `h6`: [Values]
- `text-scale-body`: [Value]

### Spacing & Layout
- `space-baseline`: [e.g., 4px or 8px]
- `space-padding-component`: [Value]
- `space-layout-gutter`: [Value]

### Colors
- `color-brand-primary`: [Value]
- `color-surface-base`: [Value]
- `color-surface-elevated`: [Value]
- `color-text-primary`: [Value]
- `color-text-secondary`: [Value]
- `color-border-subtle`: [Value]

### Effects
- `radius-small`, `radius-medium`, `radius-large`: [Values]
- `shadow-sm`, `shadow-md`, `shadow-lg`: [Values]
- `transition-duration-fast`: [e.g., 150ms]

## Component States Checklist

Ensure your primary interactive components (e.g., Buttons, Inputs, Cards) handle these states:

- [ ] Default (Resting)
- [ ] Hover (Web)
- [ ] Pressed / Active
- [ ] Focus / Focus-Visible
- [ ] Disabled (Visually muted, non-interactive)
- [ ] Loading (Spinner, Skeleton)
- [ ] Error (Validation failed)
