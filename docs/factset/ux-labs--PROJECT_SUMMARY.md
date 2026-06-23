# @fds/ux-labs — Project Summary

`@fds/ux-labs` is a curated collection of production-ready Vue 3 components, composables, and CSS utilities that raise the quality bar for Fusion 8 applications. Rather than a single prototype, it is a growing library of individually-shippable patterns — each solving a specific interaction problem that Fusion itself doesn't cover out of the box. The library is published as an npm package to FactSet Artifactory.

---

## SwipeableRow

**Short summary**

SwipeableRow brings iOS-style swipe-to-reveal actions to FactSet list interfaces, with support for left and right action panels, a full-swipe execution mode, and complete keyboard accessibility. It solves the coordination problem of a list of rows — ensuring only one is open at a time — without coupling rows directly to each other.

**Detailed description**

SwipeableRow is a touch-first list row component that reveals action buttons when the user swipes left or right. It's the standard pattern in mobile apps for quick actions on list items — archive an email, delete a task, flag a notification — and it lets product teams surface these actions without needing a context menu or an extra navigation layer. The component wraps any content in a swipeable surface and accepts arbitrary slot content for the revealed left and right panels.

The most complex part isn't the swipe itself — it's scroll conflict resolution. The component detects whether the first gesture movement is primarily vertical (scrolling the page) or horizontal (swiping the row) and commits to one path, ignoring the other for the lifetime of that gesture. Full-swipe mode required careful threshold logic: a configurable percentage of row width (default 75%) triggers a snap-to-dismiss animation, followed by a short delayed event emission so the parent can respond after the animation completes rather than mid-flight. The momentum bounce-back — allowing 100px of over-close before snapping back — gives the interaction a physical feel without requiring spring physics. Multi-row coordination is handled via Vue's `provide`/`inject`: a `SwipeCoordinationContext` lives in the `SwipeCoordinationProvider`, and each row registers on mount so that opening any row automatically closes any currently-open sibling.

The keyboard path is genuine, not a checkbox: Tab to focus a row, Arrow keys to navigate between rows, Tab again to reach the revealed action buttons, and Escape to close and return focus to the row's main button. This means SwipeableRow is accessible in the full sense — not just functionally equivalent but naturally operable by keyboard-only users and compatible with screen readers via semantic ARIA grouping.

---

## BottomSheet

**Short summary**

BottomSheet extends Fusion's `FusionDrawer2` primitive with drag-to-dismiss behavior, making mobile bottom panels feel native — the sheet follows the user's finger, and the dismiss animation speed adapts to how far the drag has already traveled.

**Detailed description**

A modal bottom panel that slots into the familiar Fusion Drawer primitive while adding the interaction signature that makes mobile sheets feel right: drag down to dismiss. The sheet follows the pointer in real time, revealing the backdrop beneath as it moves, then either snaps back or completes the dismiss depending on how far the drag went. It's the right pattern for mobile settings panels, filter drawers, contextual detail views, and any overlay that should feel lighter than a full-page modal.

The most interesting implementation detail is the physics-proportional dismiss animation. When the user lifts their finger mid-drag, the remaining animation only plays the remaining distance — if the sheet has already traveled 60% of the way off-screen, the dismiss transition runs at 40% of its full 400ms duration rather than always playing the full animation from the user's current position. This required reading the drawer's live bounding rect on gesture end and computing a percentage. The backdrop dimming is equally live: the Fusion lightbox overlay fades in sync with the drag position using `v-bind` inside a CSS `<style module>`, targeting the sibling lightbox element via a `:has()` selector. This is a pattern Vue makes possible but that requires intentional layout — the lightbox and the sheet must be adjacent siblings in the DOM.

BottomSheet is immediately applicable to any Fusion app expanding to tablet or touch form factors, which is most FactSet apps. The `:has()` + `v-bind` technique for animating DOM siblings proportionally to a drag gesture is a transferable pattern that other components in this library could reuse.

---

## usePointerMove / vPointerMove

**Short summary**

`usePointerMove` is a low-level composable that unifies touch and mouse gesture tracking into a single callback API — including per-frame velocity, cumulative delta, and per-event movement — available as both a composable and a `v-pointer-move` Vue directive for declarative use in templates.

**Detailed description**

This is the foundation layer that both SwipeableRow and BottomSheet are built on. Rather than each gesture component re-implementing touch event handling independently, this composable provides a consistent, normalized stream of pointer state. It abstracts over `TouchEvent` and `MouseEvent`, attaches the appropriate listeners to any target element, and reactively switches between them if the device's input modality changes — useful on hybrid tablet devices where users alternate between touch and trackpad.

Unifying touch and mouse required more thought than the happy path suggests. Touch events fire on the element they started on and stay there, while mouse events "escape" to the window on drag — so `mousemove` and `mouseup` are lazily attached to `window` on `mousedown` and cleaned up on `mouseup`. A `touchOnly` config mode exists for cases like BottomSheet where mouse drag-to-dismiss would feel wrong on a desktop. Direction and velocity are computed per-event, making it straightforward for consumers to build threshold-based gesture recognition (e.g., "only respond if the swipe is primarily horizontal") without the composable needing to know anything about the gesture's intent. The directive form (`v-pointer-move`) makes it ergonomic to attach these callbacks directly in `<template>` without scaffolding a composable in `<script setup>`.

As the lowest-level building block in the library, `usePointerMove` is the most broadly reusable piece. Any gesture-driven component — carousels, drag-to-reorder, pull-to-refresh, pan-zoom — can build on it without re-solving cross-device input normalization.

---

## CSS Utilities

**Short summary**

Three standalone SCSS utility files bring a utility-class system to Fusion apps, with token-aligned spacing, flex layout, positioning, and border utilities — delivered as SCSS mixins that work correctly inside Vue CSS Modules, scoped styles, or global stylesheets.

**Detailed description**

A suite of declarative utility classes for the layout and spacing work that comes up constantly in Fusion application development. The three files — `layout-classes.scss` (flex, display, overflow, position, z-index), `spacing-classes.scss` (padding, margin, gap, border-radius tied to `@fds/fusion-tokens`), and `border-classes.scss` (logical property borders using the Fusion border color token) — are consumed as SCSS `@use` imports rather than a pre-built CSS bundle, so teams include only what they need and nothing they don't.

The three-mixin pattern (`-global`, `-module`, `-scoped`) is the key architectural decision. Fusion's existing utility classes only work in global scope; inside a Vue `<style module>` or `<style scoped>`, class names are hashed and the global utilities have no effect. The `-module` mixin wraps each rule in `:global()` to bypass Vue's CSS Modules hashing; the `-scoped` mixin uses `:deep()` so rules reach into child component trees. An optional `$use-important: true` flag resolves specificity conflicts with existing Fusion styles when needed. Each file is independently includable — consuming `layout-classes.scss` has no dependencies, while `spacing-classes.scss` requires `@fds/fusion-tokens` at compile time.

For teams already using CSS Modules in Fusion applications, this provides a practical, incremental path to utility-class ergonomics without a global stylesheet reset. It also establishes a clear pattern for how other design-system-adjacent utilities can be shipped in a way that actually works across Vue's three styling modes.
