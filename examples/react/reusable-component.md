# React Example: Reusable Component

## The Component: `ActionCard`

## Design Direction
- Designed for a developer tooling SaaS product.
- High density, technical aesthetic.

## API Specification
```tsx
interface ActionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
  status?: 'default' | 'loading' | 'success' | 'error';
}
```

## Component States
- **Default**: 1px solid border (`border-gray-200`), white background.
- **Hover**: Cursor pointer, border changes to `border-blue-500`, background subtly changes to `bg-blue-50/50`.
- **Focus-visible**: Outline ring `ring-2 ring-blue-500 ring-offset-2`.
- **Loading**: Icon replaced with a spinner, pointer events disabled, opacity reduced to 70%.

## Anti-Slop Decisions
- Did not add a massive drop-shadow on hover. Used a precise border-color shift instead.
- Avoided making the entire card a generic blue gradient.
