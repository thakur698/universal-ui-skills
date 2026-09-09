# Lottie: React Web Recipe

## Installation
Run: `npm install lottie-react`

## Minimal Example

```tsx
import Lottie from "lottie-react";
import animationData from "../../public/assets/lottie-sample.json";

export function LottieShowcase() {
  return (
    <div style={{ width: '400px', height: '400px' }}>
      <Lottie 
        animationData={animationData} 
        loop={true} 
        autoplay={true} 
      />
    </div>
  );
}
```
