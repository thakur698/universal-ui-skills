---
name: ui-visual-qa
description: Performs deterministic visual QA of web and mobile interfaces using screenshots, golden tests, component states and regression checks where available.
---

# Visual QA

## Build checks

Run the project's normal validation:
- type check
- lint
- tests
- build

## Visual checks

Inspect:
- spacing
- alignment
- text clipping
- responsive breakpoints
- loading states
- empty states
- error states
- focus/pressed states
- navigation transitions
- modal/sheet behavior

## Evidence

When tooling supports it:
- capture representative screenshots
- use golden/snapshot tests
- compare before/after states
- inspect multiple viewport/device sizes

## Required device/view set

Web:
- narrow
- desktop
- wide

Mobile:
- small phone
- large phone
- tablet when supported

## Completion rule

Compilation passing is not visual approval.

A visually broken UI must be fixed even when all code tests pass.
