---
name: ui-media-composition
description: Media-first composition system prioritizing images, video, illustrations, and diagrams over generic icon grids.
---

# UI Media Composition

## Mission

Universal UI Skills treats **IMAGE, VIDEO, ILLUSTRATION, DIAGRAM, TYPOGRAPHY, LAYOUT, and MOTION** as the primary visual storytelling language.

Whenever building a website, app, dashboard, or product experience with Universal UI Skills, **use more and more images than icons**. Primary visual communication MUST be carried by rich visual assets: real photography, product renders, live UI captures, 3D artwork, custom illustrations, or technical diagrams.

Icons are strictly utility tools (navigation, actions, system controls), NOT the default visual language. Never use icons as a lazy replacement for meaningful visual media.

---

## Three Non-Negotiable Composition Rules

1. **Maximize Image Prominence**: Populate sections with rich imagery, product renders, photography, and diagrams rather than icon lists. Images carry the narrative; icons do not.
2. **Zero Pills**: Do NOT create pills. Strictly avoid `rounded-full` pill badges, floating pill tags, pill chips, or pill containers (e.g. `<span class="rounded-full px-3 py-1 bg-...">...</span>`). Use crisp typography, subtle borders, or spatial layout instead.
3. **No Background Color Behind Icons**: Do NOT add background colors, tinted boxes, colored circles, square containers, or glass tiles behind icons. Icons must sit directly on the background surface or inline with copy without decorative box fills.

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

## INTERACTIVE HERO MANDATE

For website UI tasks, DO NOT default to:
- centered headline
- subtitle
- two buttons
- static image
- generic gradient background
- empty whitespace
- generic SaaS hero template

The default hero must be an intentional visual experience.

REQUIRED:
1. A product-specific visual concept.
2. Meaningful imagery, product render, illustration, video, diagram, environmental scene, or other rich media.
3. Purposeful motion or interaction.
4. Strong visual depth/layering where appropriate.
5. Responsive behavior that preserves the concept on mobile.

PREFERRED:
- animated image layers
- parallax depth
- cursor/reactive visuals
- scroll-linked transformation
- video or frame sequencing
- interactive product visualization
- layered typography/media choreography
- animated diagrams
- Rive/Lottie interactive visual objects where they add meaning

The hero should communicate the product before the user reads every word.

Do not add animation merely to satisfy this rule. Motion must reinforce hierarchy, product meaning, spatial depth, interaction, or storytelling.

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
      ├─────► [YES] ──► Use Minimal, Semantic Utility Icon (NO background color/box)
      │
     [NO]
      │
      ▼
Use Strong Typography & Layout Composition Instead (NO pill badges)
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
- Semantic status indicators (verified checkmark, error dot)

### Prohibited Uses of Icons:
- ❌ **Background Color Behind Icons**: Never add background color behind icons. Do not place icons inside colored boxes, tinted squares, rounded circles, or glass tiles (e.g., `<div class="bg-primary/10 rounded-xl p-3"><Icon /></div>`). Icons must rest directly on the surface.
- ❌ **Pills & Pill Badges**: Never wrap icons or text in `rounded-full` pill badges, floating pill chips, or pill containers.
- ❌ **Feature Storytelling**: Do not build generic `[Icon] + Title + Description` grids repeated 3–6 times as the main feature section. Use images and diagrams instead.
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
