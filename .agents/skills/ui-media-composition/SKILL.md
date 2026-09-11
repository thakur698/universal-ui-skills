---
name: ui-media-composition
description: Media-first composition system prioritizing images, video, illustrations, and diagrams over generic icon grids.
---

# UI Media Composition

## Mission

Universal UI Skills treats **IMAGE, VIDEO, ILLUSTRATION, DIAGRAM, TYPOGRAPHY, LAYOUT, and MOTION** as the primary visual storytelling language. 

Icons are NOT the default visual language. Prefer visual assets over iconography for primary UI storytelling. Use icons sparingly and only when they improve usability or interaction clarity. When an icon is genuinely needed, prefer premium animated/interactable icon systems such as Lottie or Rive over generic static icon libraries.

---

## Visual Hierarchy Priority

1. **Product imagery / photography** (Hardware, UI, real contexts)
2. **Custom illustrations / diagrams** (Technical architectures, workflows, editorial concepts)
3. **Rich media / video** (Product reveals, interactive frame scrubbing, loops)
4. **Typography + composition** (Asymmetric bento scales, editorial type hierarchies)
5. **Interactive visual objects** (Live sandboxes, canvas models, responsive widgets)
6. **Premium animated icons** (Stateful Rive runtimes, lightweight Lottie vector sequences)
7. **Static utility icons** (Minimal functional glyphs for common navigation/actions)

---

## The Feature Communication Decision Flow

```text
Feature / Capability to Communicate
      │
      ▼
Can this be communicated better with imagery/diagrams/media?
      │
      ├─────► [YES] ──► Use Product Image / Custom Illustration / Architecture Diagram
      │
     [NO]
      │
      ▼
Does an interactive visual object improve it?
      │
      ├─────► [YES] ──► Use Stateful Rive Object / Lottie Motion Sequence
      │
     [NO]
      │
      ▼
Is a utility icon actually required for immediate operational recognition?
      │
      ├─────► [YES] ──► Use Minimal, Semantic Utility Icon
      │
     [NO]
      │
      ▼
Use Strong Typography & Layout Composition Instead
```

---

## The Icon Policy

### Permitted Uses of Icons (Utility Only):
- Navigation & headers (menu, back, home)
- Search inputs & filter triggers
- Dialog dismiss / close buttons
- Settings & system toggles
- Media playback controls (play, pause, volume)
- Directional indicators / arrows / pagination
- Accessibility controls
- Small utility actions (copy code, download, external link)
- Semantic status indicators (verified badge, success checkmark, error dot)

### Prohibited Uses of Icons:
- ❌ **Feature Storytelling**: Do not build generic `[Icon] + Title + Description` grids repeated 3–6 times as the main feature section.
- ❌ **Hero Visuals**: Do not place a large floating icon where a product screenshot, diagram, or illustration belongs.
- ❌ **Product Differentiation**: Do not use generic icons to explain complex architectural advantages.
- ❌ **Empty Card Filler**: Do not slap an icon into a card just because there is empty space.
- ❌ **Replacing Real Visual Media**: If a photograph, interactive model, data visualization, or technical diagram is more expressive, you MUST use the richer media.
- ❌ **Emoji Substitutions**: Never substitute emojis for semantic icons.

---

## Media-First Planning Framework

Before implementing any substantial visual section, determine the **Media Plan**:

### 1. Media Type
- **Photograph**: High-fidelity editorial, lifestyle, hardware, or contextual imagery.
- **Product Screenshot / Live UI**: Actual application interface, code terminal, or viewport render.
- **Illustration**: Purposeful editorial art, technical drawing, or narrative concept.
- **Generated Artwork**: Thematic visual generated via AI image tools.
- **Technical Diagram**: Interactive architecture map, pipeline flow, or network topology.
- **Animation / Lottie / Rive**: Stateful interactive vector motion or micro-narrative.
- **Video / Media Stream**: Scrubbed video walkthrough, product reveal, or hardware detail.
- **2D/3D Canvas**: Interactive physics canvas, shader backdrop, or spatial model.

### 2. Media Role
- `HERO`: Anchor visual establishing immediate product identity.
- `BACKGROUND`: Subtle atmospheric texture, depth gradient, or ambient video loop.
- `FOCAL VISUAL`: Primary focal point of a section (e.g. interactive terminal, diagram).
- `NARRATIVE VISUAL`: Step-by-step imagery illustrating a user journey or transformation.
- `SUPPORTING VISUAL`: Secondary context accompanying a specific feature statement.
- `COMPARISON`: Before / After, side-by-side diff, or benchmark contrast.
- `PROOF`: Social proof showcase, customer integration badge, certification mark.
- `INTERACTION SURFACE`: Directly clickable, pannable, or scrubbable visual component.

### 3. Media Scale
- **Full Bleed**: Edge-to-edge spanning $100\text{vw}$ for maximum immersive impact.
- **Large Editorial**: Spanning 8–10 columns of a 12-column grid ($>65\%$ container width).
- **Medium / Balanced**: 50/50 split container or asymmetric primary tile.
- **Supporting**: Compact inset within an asymmetric bento cell or disclosure panel.

### 4. Media Treatment
- **Clean Framed**: Elevated container with subtle $1\text{px}$ border and ambient drop shadow.
- **Masked / Silhouette**: Object isolated from background or masked via geometric clip-path.
- **Layered / Overlapped**: Visual elements breaking container boundaries to create z-axis depth.
- **Split Bleed**: Image pinned to one viewport edge while content is contained.
- **Window Frame**: macOS / browser window header styling for developer & product tools.

---

## Media Performance & Optimization

Every media asset must include performance hygiene:
1. **Responsive Sizing**: Use `<picture>` with `srcset` or Next.js `<Image>` for device-scaled resolution.
2. **Explicit Dimensions**: Always specify `width` and `height` or `aspect-ratio` to prevent Cumulative Layout Shift (CLS).
3. **Lazy Loading**: Native `loading="lazy"` on all images below the initial viewport fold.
4. **Decoding**: Set `decoding="async"` on non-critical images.
5. **Video Efficiency**: Use modern codecs (AV1 / VP9 / H.265), muted autoplay with `playsinline`, and explicit `poster` images.
