---
name: ui-gsap-animation
description: High-performance, complex animation choreography using GSAP (GreenSock Animation Platform) for web interfaces, including ScrollTrigger and Flip.
---

# UI GSAP Animation

## Mission

GSAP (GreenSock Animation Platform) is the industry standard for high-performance, cross-browser, and complex UI motion. Within Universal UI, GSAP is deployed when native CSS or standard declarative constraints are exceeded—specifically for deep timeline choreography, advanced scroll-linked narratives (ScrollTrigger), and complex layout transitions (Flip).

Cinematic storytelling requires precise control over timing, hardware acceleration, and seamless cleanup. GSAP provides this control surface.

---

## The Great Points of GSAP in Universal UI

### 1. Unmatched Timeline Choreography
GSAP's `gsap.timeline()` allows for sequencing that is nearly impossible to maintain in pure CSS or declarative libraries.
- **The Position Parameter**: Absolute (`1`), relative (`+=1`), and relative-to-previous (`<`, `>`) timing allows sub-millisecond precision over when elements enter and exit.
- **Staggers**: Advanced staggering across grids or arrays with `stagger: { amount: 1.5, grid: [3,3], from: "center" }` creates organic, fluid entrances.

### 2. ScrollTrigger: The Gold Standard for Scroll Storytelling
When scroll dictates the narrative, GSAP's ScrollTrigger is mandatory.
- **Scrubbing**: Links animation progress directly to the scrollbar (`scrub: 1` for smooth interpolation).
- **Pinning**: `pin: true` locks a section in the viewport while internal animations play out, essential for editorial deep-dives and cinematic scroll reveals.
- **Snapping**: Seamlessly snaps the viewport to narrative beats or sections.

### 3. FLIP (First, Last, Invert, Play) Transitions
The `Flip` plugin handles impossible layout animations—like moving a DOM element from one nested container to an entirely different structural branch without visual breakage.
- Used for hero image expansions, e-commerce cart fly-ins, and complex bento grid resorting.

### 4. Flawless React Integration (`@gsap/react`)
Memory leaks are the enemy of cinematic UI. GSAP provides the `useGSAP()` hook which automatically handles cleanup and scoping in React.
- **Scoping**: `useGSAP(() => { ... }, { scope: containerRef })` ensures animations only affect elements within a specific component, preventing global selector collisions and maintaining component isolation.

### 5. Deterministic Hardware Acceleration
GSAP automatically handles transform matrices, injects `force3D: "auto"`, and optimizes DOM reads/writes to prevent layout thrashing. It achieves 60/120fps on mobile where other libraries drop frames.

---

## Implementation Constraints & Rules

### React Hygiene (Mandatory)
NEVER use raw `useEffect` for GSAP animations in React. You MUST use `@gsap/react`'s `useGSAP()` hook to prevent unmount memory leaks and React Strict Mode double-firing.

```tsx
// ❌ BAD (Memory leak waiting to happen, breaks in Strict Mode)
useEffect(() => {
  gsap.to(".box", { x: 100 });
}, []);

// ✅ GOOD (Automatic cleanup and scoping)
useGSAP(() => {
  gsap.to(".box", { x: 100 });
}, { scope: containerRef });
```

### Accessibility (prefers-reduced-motion)
Cinematic GSAP animations MUST respect accessibility. Use `gsap.matchMedia()` to provide fallback static states or vastly simplified fades when users request reduced motion.

```javascript
let mm = gsap.matchMedia();

mm.add("(prefers-reduced-motion: no-preference)", () => {
  // Full cinematic timeline
  gsap.timeline()
    .to(".hero", { scale: 1.5, opacity: 1 })
    .to(".title", { y: 0, stagger: 0.1 });
});

mm.add("(prefers-reduced-motion: reduce)", () => {
  // Simple, instant fade-in
  gsap.to([".hero", ".title"], { opacity: 1, duration: 0.2 });
});
```

### Zero Generic Slop
Do not use GSAP to create generic "floaty" elements, random rotating blobs, or arbitrary bouncy buttons. GSAP is an industrial tool for *intentional narrative design*. If an animation does not serve the product story or architectural structure, it must be removed.

### Performance Floor
- **Animate only Transforms and Opacity**: Never animate `width`, `height`, `top`, `left`, `margin`, or `padding` unless using the `Flip` plugin.
- **Kill triggers**: Always ensure ScrollTriggers are killed on component unmount (handled automatically by `useGSAP`).
