# Recipe: Dashboard / Admin Panel

When tasked with building a dashboard, orchestrate the following workflow:

## 1. Tool Discovery
- Check for Charting libraries (e.g., Recharts, Chart.js).
- Check for component libraries (e.g., shadcn/ui, MUI).

## 2. Design Direction
- **Goal**: Data density, scannability, operational efficiency.
- **Typography**: Tabular numerals for data grids, compact line heights.
- **Surface**: Subtle borders (1px) for separation; avoid heavy drop shadows on data cards to reduce visual noise.

## 3. Component System
- High-density data tables, metric summary cards, and filtering sidebars.
- Consistent empty states for zero-data conditions.

## 4. Responsive Layout
- Desktop: Left navigation rail, expansive data grids.
- Mobile: Convert tables to stacked cards; move nav to a hamburger menu.

## 5. Anti-Slop Check
- Do not make a 3-card layout if there are 7 important metrics.
- Avoid unnecessary badges. Only use colors for state (Success/Warning/Error).
