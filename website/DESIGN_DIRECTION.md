# Design Direction: Universal UI Skills Website

## 1. Product Context
- **Product Identity**: A serious, open-source orchestration framework and developer tool for AI coding agents.
- **Target User**: Software engineers, designers, AI practitioners.
- **Primary Goal**: Persuade the user that this framework prevents "AI slop" and delivers highly polished, product-specific UI.

## 2. Emotional Tone
- **Tone**: Technical, credible, precise, authoritative, editorial.
- **Metaphor**: A rigorous engineering manual or architectural blueprint. 

## 3. Typography Direction
- **Display**: A stark Serif for headlines (e.g., system serif or specialized web font if available) to convey editorial craftsmanship, contrasted with strong Sans-Serif (Inter/system-ui) and Monospace for technical commands.
- **Body**: System Sans-Serif (`system-ui`, `-apple-system`, `Inter`) for maximum legibility and density.
- **Technical**: Monospace (`ui-monospace`, `SFMono-Regular`, `Menlo`) for code blocks, file paths, and orchestration steps.

## 4. Visual Language
- **Color Roles**: 
  - Canvas/Background: `#0A0A0A` (Near black for a technical dark mode).
  - Surfaces: `#111111` to `#1A1A1A` (Extremely subtle variations in dark grey).
  - Borders: `#333333` (Sharp 1px solid lines).
  - Primary Accent: `#E2E8F0` (Off-white for text). `#00E5FF` (Cyan) or `#3B82F6` (Blue) applied *very* sparingly for active states or syntax highlighting.
- **Surface Strategy**: Flat. No glassmorphism. Structural divisions rely on 1px borders and grid lines rather than floating cards.
- **Radius System**: 0px to 4px. Extremely sharp corners to emphasize precision and technicality, avoiding the "friendly SaaS" 12px+ rounded aesthetic.
- **Depth Model**: Completely flat. No drop shadows. Hierarchy is achieved through contrast, typography, and spacing.

## 5. Rich Content
- **Imagery Strategy**: ASCII art/CSS-grid diagrams. We will build the orchestration pipeline (DISCOVER -> DETECT...) using raw CSS grids and connecting lines to look like an architectural diagram, not a generic 3D rendered graphic.
- **Icon Strategy**: Lucide React. Minimalist 1.5px stroke width. Used functionally (e.g., to indicate external links, code copy buttons, or QA statuses).
- **Motion Personality**: Instant or very fast (100-150ms). No bounce. Opacity fades and strict scale adjustments.
- **Layout Philosophy**: Asymmetric grids, distinct columns for navigation vs content, strong horizontal rules (`<hr>`) separating sections.

## 6. Anti-Slop Rationale
WHY DOES IT LOOK LIKE THIS?
If we use giant purple gradients and 24px border radii with soft shadows, the website looks like every generic AI wrapper startup from 2024. By reverting to a strict, monochromatic, high-contrast grid with serif typography, we immediately signal: "This is a serious tool built by engineers who care about design fundamentals, not trendy CSS tricks."
