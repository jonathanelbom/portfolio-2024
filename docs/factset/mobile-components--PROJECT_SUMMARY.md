# @fds/mobile-components — Project Summary

## Short Summary

`@fds/mobile-components` is a Vue 3 component library that fills the gap between FactSet's desktop-focused Fusion design system and the touch-first reality of the FactSet Mobile App, which renders product UI through webviews inside a native shell. It ships four production-grade components — a swipe-to-dismiss bottom sheet, horizontal tag navigation, a scroll-aware sticky header, and a mobile-styled contextual feed wrapper — along with a set of low-level composables for touch and scroll primitives that teams can use directly. The library solves a real friction point: standard Fusion components simply weren't built for small screens, pointer-coarse input, or the layout constraints of an iframe-rendered webview.

---

## Detailed Description

### What It Is

The FactSet Mobile App is a native shell — iOS and Android — that renders its product UI through webviews and iframes. That architecture means the web layer carries full responsibility for mobile UX fidelity: touch handling, momentum gestures, sticky headers, and compact layout patterns all have to be solved in web code, not native. The Fusion design system, which backs all FactSet web products, was designed for desktop-density and pointer devices. This library exists to bridge that gap — it extends Fusion with the patterns Fusion doesn't have, and patches Fusion component styles where they need to be recalibrated for mobile density and typography.

### What Was Built and What It Took

The core of the library is four components. **BottomSheet** wraps Fusion's `FusionDrawer2` and layers on a full swipe-to-dismiss gesture system: a `useTouchMove` composable tracks raw touch deltas and directions, the sheet follows the user's finger in real time, and on release it either snaps back or exits — with the backdrop opacity synced to how far the sheet has traveled, creating a physically grounded feel. On non-touch devices the drag handle disappears entirely. **TagNav** is a horizontally scrolling pill-button navigation rail built on `FusionButton`, with keyboard accessibility (arrow keys, Home/End), auto-scroll-into-view on focus, and reactive overflow detection for the consuming page to respond to. **ScrollUpStickyReveal** solves a universal mobile pattern — a sticky header that hides as you scroll down to maximize reading area, then snaps back when you reverse direction — driven by a throttled `useScrollDirection` composable that works against any scrollable element or the window. **ContextualFeed** is a mobile-styled wrapper around `@fds/contextual-feed`, replacing the standard feed item layout with mobile-density sub-components for News, Events, and Signals content, including a horizontal-scroll mode for card-style browsing.

Fusion was the base, but required meaningful overrides throughout. Mobile typography scale (from a canary Fusion build at `pr-1460`) is injected via `fusion-overrides.scss`, which resets heading font weights, recalibrates dropdown and filter-toggle styles, and patches padding that was designed for mouse targets. The `ContextualFeed` wrapper uses deep CSS selectors against Fusion's internal class names to re-space feed items and strip desktop-only separators — a pragmatic tradeoff made consciously given the speed of the original build.

### What This Unlocks

For teams building inside the FactSet Mobile App webview, this library eliminates the need to re-solve touch gestures, sticky-header logic, or mobile feed layout from scratch. The composables — `useTouch`, `useTouchMove`, `useScrollDirection`, `createSharedElementComposable` — are exported as first-class API and cover the low-level primitives most mobile web patterns need. The combination pattern stories (TagNav + ScrollUpStickyReveal, tabs + ScrollUpStickyReveal) demonstrate how the components compose together, giving product teams a runnable reference for common mobile page structures. The library is in active production use and is published to FactSet's private Artifactory registry; the deployed Storybook at `mobile-components.nprod.services.factset.com` serves as the living documentation and preview environment for every PR.
