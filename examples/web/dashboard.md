# Web Example: Dashboard

## Design Direction
- **Identity**: Enterprise analytics for marketers.
- **Tone**: Clinical, precise, trustworthy.
- **Typography**: Inter (System sans-serif) for high data density readability.
- **Color Roles**: Dark sidebar (slate-900), white canvas for content, high-contrast primary blue (`#2563EB`) for data highlights.
- **Surface**: Flat. Data cards use subtle 1px borders, no shadows.

## Hierarchy
1. Primary navigation (Left Sidebar).
2. Page context (Top Header with date picker).
3. Key metrics summary (Top row of data cards).
4. Detailed charts (Main body).

## Components
- `SidebarNav`: Dark background, active state highlighted with subtle translucent background.
- `MetricCard`: Minimal padding, large typography for the value, small subtle trend indicator.
- `DataChart`: Responsive container for canvas/SVG elements.

## Motion
- **Micro**: Fast, 100ms background color transitions on navigation links.
- **Standard**: None. Tab switching should feel instant to not slow down power users.

## Responsive Behavior
- **Desktop (1024px+)**: Sidebar is fixed on the left.
- **Tablet (768px - 1023px)**: Sidebar becomes an icon-only rail.
- **Mobile (< 768px)**: Sidebar moves to a bottom navigation bar. Data cards stack into a single column.

## Anti-Slop Decisions
- Rejected adding large soft drop-shadows to every data card.
- Removed arbitrary gradients from the sidebar.
- Avoided using emoji icons for navigation.
