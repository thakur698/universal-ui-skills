---
name: ui-scroll-storytelling
description: Designs scroll-driven storytelling, progressive disclosure, pinned sections, horizontal translation, and video scrubbing for web and mobile.
---

# UI Scroll Storytelling

## Mission

Scroll storytelling transforms a static page into an engaging, narrative journey. Scrolling is an active user input: as the user scrolls, visual elements, typography, and media choreograph to progressively disclose information with clarity and intention.

Do NOT add scroll interaction to every section. A premium page uses scroll storytelling selectively where it elevates the narrative (e.g. Hero reveal, sticky comparison, video scrub), interspersed with quiet, static sections.

---

## Core Scroll Patterns

The agent must consciously select from these 13 standardized scroll patterns:

1. **SCROLL REVEAL**: Content enters view via structured, staged threshold triggers.
2. **SCROLL FADE**: Opacity shifts linked smoothly to scroll progress.
3. **SCROLL MOVE**: Directional translation (X or Y) proportional to viewport distance.
4. **SCROLL SCALE**: Focal elements expand or contract to transition between overview and detail.
5. **SCROLL PARALLAX**: Multi-layer depth cues with distinct scroll velocity ratios.
6. **STICKY SECTION**: Persistent visual anchor on one side while descriptive content scrolls past.
7. **PINNED SECTION**: Entire viewport locks while internal choreography (timeline, transforms) plays out.
8. **LAYERED STORYTELLING**: Background, midground, and foreground planes interact to create depth.
9. **HORIZONTAL STORYTELLING (VERTICAL SCROLL)**: Vertical scrolling drives horizontal track translation.
10. **MEDIA TRANSFORMATION**: Images or video frames reshape (e.g. Card $\rightarrow$ Full Bleed) during scroll.
11. **TEXT/MEDIA CHOREOGRAPHY**: Visual changes timed precisely with accompanying headline reveals.
12. **PROGRESSIVE DISCLOSURE**: Complex features or data points revealed step-by-step.
13. **SCROLL-CONTROLLED STATE TRANSITIONS**: Interactive UI states, tabs, or metrics driven by scroll milestones.

---

## The 7 Mandatory Questions

Every scroll interaction must answer:

1. **What changes?** (Exact property: opacity, translate, scale, clip-path, video frame, active state).
2. **Why does it change?** (What narrative insight or hierarchy does the change communicate?).
3. **What should the eye follow?** (The primary visual anchor during the transition).
4. **What does the scroll position communicate?** (e.g. Progression through a multi-step workflow, architectural depth).
5. **What happens when the user scrolls quickly?** (No broken layout, instant catch-up, no stuck pin traps).
6. **What happens on mobile?** (Defined mobile fallback strategy: unpinned flow, reduced displacement).
7. **What happens with reduced motion?** (Degrades gracefully to static, fully accessible layout).

---

## Parallax Layer Architecture

Controlled parallax creates depth and spatial hierarchy without disorienting the user:

- **BACKGROUND ($0.2\times$ – $0.4\times$ speed)**: Ambient textures, deep gradients, atmospheric planes.
- **MIDGROUND ($0.5\times$ – $0.8\times$ speed)**: Supporting visual assets, secondary diagrams, architecture frames.
- **CONTENT ($1.0\times$ baseline speed)**: Primary headlines, actionable copy, interactive controls (MUST remain legible).
- **FOREGROUND ($1.1\times$ – $1.3\times$ speed)**: Overlapping badges, subtle depth accents.

> **Rule:** Never apply parallax directly to long-form body text or primary CTAs. Text displacement must never compromise readability.

---

## Sticky & Pinned Section Architectures

### Sticky Visual Layout
```text
┌─────────────────────────────────────────────────────────┐
│                                                         │
│   [ STICKY VISUAL ANCHOR ]           Section 01: Ingestion│
│   (Diagram / Screenshot /            Section 02: Processing│
│    Interactive Model)                Section 03: Security │
│                                      Section 04: Edge Sync│
│                                                         │
└─────────────────────────────────────────────────────────┘
```

Supported Sticky Types:
- **Sticky Media**: High-resolution photography or 3D render updating states.
- **Sticky Typography**: Bold narrative statement anchored while supporting proof scrolls.
- **Sticky Product Screenshot**: Live application viewport highlighting features in sequence.
- **Sticky Comparison Visual**: Before / After or competitor diff reacting to scroll milestones.
- **Sticky Timeline**: Step indicator advancing through chronological phases.

---

## Video Scrubbing Specification

Link scroll progress directly to video playback:

$$\text{Scroll Position (0\% to 100\%)} \longleftrightarrow \text{Video Timestamp (0.0s to Duration)}$$

### Requirements:
1. **Poster Image**: High-fidelity static poster rendered instantly before video load.
2. **Loading State**: Non-blocking skeleton loader; page does not stutter during video buffer.
3. **Graceful Fallback**: If video fails or on low-power mode, fallback to static step sequence.
4. **No Core Dependency**: Critical value propositions must be readable in text; video is illustrative.
5. **Mobile & Reduced Motion**: Replace heavy video scrubbing with static carousel or tabbed steps.

---

## Implementation Strategies

### Web (React / Vanilla):
- Prefer CSS `animation-timeline: view()` or `ScrollTimeline` where supported.
- Use native `IntersectionObserver` with lightweight transforms.
- When Framer Motion / Motion is available, use `useScroll()`, `useTransform()`, and `useSpring()`.
- For pinned scroll sequences, use standard CSS `position: sticky; top: 0;`.
- Avoid `window.addEventListener('scroll')` without throttling/RAF.

### Flutter:
- Use `CustomScrollView` with `SliverAppBar`, `SliverPersistentHeader`, and `SliverToBoxAdapter`.
- Leverage `ScrollController` listener paired with `AnimatedBuilder` or `Transform`.
- Use Rive state machines triggered by scroll offset thresholds.

---

## Failure Modes (Anti-Patterns to Avoid)

- ❌ **Scroll Trap**: Pinned section that requires 10+ wheel turns to escape.
- ❌ **Everywhere Motion**: Every single section translating, scaling, and fading.
- ❌ **Unreadable Fly-ins**: Text flying in from random screen edges during rapid scroll.
- ❌ **Broken Mobile Stacking**: Desktop sticky layouts collapsing into zero-height containers on mobile.
