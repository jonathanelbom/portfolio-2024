# Project Summary

## Short Summary

I built a high-fidelity mobile prototype of a FactSet Markets app — a browsable financial dashboard spanning market overviews, equities, news, global search, and a user profile — using the existing Fusion design system. It demonstrates that a native-feeling iOS/Android experience is achievable on top of Fusion's desktop components through targeted CSS overrides, custom interaction layers, and a dual-scale typography system. The prototype surfaces a concrete, prioritized gap list for what Fusion needs to support mobile natively versus what can ship today as additive layers.

---

## Detailed Description

### What it is

This prototype asks a straightforward but consequential question: can Fusion — a design system built for desktop financial software — support a genuine mobile app experience without a full parallel rebuild? The playground is a working Markets app with a real navigation structure: a home feed (watchlist, market indices, news, events), a markets drill-down (equities, FX, commodities, ETFs, bonds), a global search view, and a user profile with appearance settings and tab management. All data is mocked but structured to match what a production API would send. It runs against a pre-release `@fds/fusion-mobile` package that ships experimental mobile-specific variants of core Fusion components, installed alongside the stable `@fds/fusion` release.

### What I found

The prototype reveals three categories of work required to make Fusion feel mobile-native. First, **interaction patterns**: Fusion's components have no awareness of touch gestures, so custom layers handle swipe-to-reveal list actions (`SwipeableRow`), drag-and-drop tab reordering (`ProfileTabReorder` + `useDragReorder`), and iOS keyboard handling in the search view (using the `visualViewport` API to resize the scroll container when the software keyboard appears). Second, **navigation choreography**: route transitions — push, pop, drawer-up/down, fade — are entirely custom. A composable tracks each route's depth via a `meta.index` field and drives Vue's transition system to produce the iOS slide and sheet effects. Third, **typography**: Fusion's existing type scale was augmented with a parallel mobile scale, switchable via a `data-platform` attribute on the app root, so the same class names render at the correct sizes for both web and mobile contexts. All Fusion overrides are surgical and encapsulated in thin "Enhancer" wrapper components, avoiding direct library forks.

### So what

The practical takeaway is a prioritized gap list. Touch gestures, route transitions, and the dual-scale typography system are all implementable without forking Fusion — they're additive layers any team can adopt today. The pre-release `@fds/fusion-mobile` package already covers the component-level changes (button sizing, tab bar behavior). The Enhancer component pattern — thin wrappers applying targeted CSS overrides to Fusion internals — gives teams a low-risk path to ship mobile-adapted components without waiting for library releases. This prototype is a concrete artifact for design, product, and engineering to align on which interaction patterns are essential for a V1 mobile release, which are already solved here, and which remain open design problems.
