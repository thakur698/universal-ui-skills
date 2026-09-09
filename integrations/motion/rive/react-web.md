# Rive: React Web Recipe

## Installation
Run: `npm install @rive-app/react-canvas`

## Usage Constraints
- Always use the canvas renderer (`@rive-app/react-canvas`), not the webgl one, unless explicitly requested for performance reasons, as canvas is more stable across older browsers.
- Always implement the `.riv` asset load inside a `useEffect` or standard React hook to avoid memory leaks. Use the `useRive` hook.

## Minimal Example

```tsx
import { useRive, useStateMachineInput } from '@rive-app/react-canvas';

export function RiveShowcase() {
  const { rive, RiveComponent } = useRive({
    src: '/assets/sample.riv', // Path must be relative to public/
    stateMachines: 'State Machine 1', // Must match the state machine name in the file
    autoplay: true,
  });

  // Example of binding an input if known
  // const onClickInput = useStateMachineInput(rive, 'State Machine 1', 'onClick');

  return (
    <div style={{ width: '400px', height: '400px' }}>
      <RiveComponent />
    </div>
  );
}
```
