# Flutter Example: Polished App Screen

## Design Direction
- **Identity**: Personal finance tracker.
- **Tone**: Secure, clear, focused.
- **Color Roles**: Deep green primary, soft gray backgrounds for the canvas, white surfaces for transaction lists.

## Components
- `TransactionListTile`: Native Flutter `ListTile` customized with specific typography scales and tight spacing.
- `BalanceHeader`: Large typography component with a background color matching the primary theme.

## Motion
- **Standard**: Uses Flutter's native `Hero` widget to transition from the transaction list to the detail screen seamlessly.

## QA Considerations
- Flutter Golden tests run on this screen to ensure text scaling and layout constraints hold up across iOS and Android device widths.

## Anti-Slop Decisions
- Rejected replacing the native `ListView` scroll physics with custom bouncy scrolling.
- Avoided nesting everything inside heavily rounded `Container` widgets.
