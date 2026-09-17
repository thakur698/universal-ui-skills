---
name: ui-visual-qa
description: Performs deterministic visual QA of web and mobile interfaces using screenshots, golden tests, component states and regression checks where available.
---

# Visual QA

## Mission

Visual QA ensures that what was intended visually is actually rendering correctly.

**Important distinction:**
CODE QA (compilation, unit tests) is NOT VISUAL QA.
Passing builds and tests does NOT equal visual approval.

## Structured Visual QA Process

Follow these steps rigorously:

1. **Build verification**: Does it compile and launch?
2. **Layout inspection**: Are elements in the right place? Any clipping or overflow?
3. **Responsive inspection**: Does it break at narrow or ultra-wide dimensions?
4. **Interaction-state inspection**: Do hover, active, and focus states render correctly?
5. **Accessibility inspection**: Is contrast sufficient? Are focus rings visible?
6. **Screenshot inspection**: If tooling allows, capture screenshots and evaluate visual balance.
7. **Anti-slop inspection**: Does the result look generic or generated?
8. **Final polish**: Fix spacing, alignment, and typography issues before declaring success.

## Tooling Integration

Where tooling exists, support and utilize:
- Screenshot capture (e.g., Puppeteer, Playwright)
- Browser automation
- Device automation (e.g., Appium, Flutter Integration Tests)
- Golden tests (e.g., Flutter golden tests, Storybook)
- Snapshot tests
- Visual regression tools (e.g., Percy, Chromatic)

**Critical rules:**
- Do not invent screenshots if tooling cannot generate them.
- Do not claim visual validation happened unless evidence exists.
