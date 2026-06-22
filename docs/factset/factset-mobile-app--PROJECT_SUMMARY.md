# Project Summary — FactSet Mobile App

---

## Short Summary

The FactSet Mobile App project was nine months of design-to-code work, starting from a clunky existing app users didn't like and ending with a live, design-system-accurate mobile experience. My role was sole design technologist: I designed in code rather than Figma ("My Figma is a browser"), stress-testing the production stack against the design intent and building the infrastructure that let other teams build on top of what I'd proven out.

---

## Detailed Description

### What it is

The existing app was functional but not good. It was missing features from the web, had clunky interaction patterns, and users consistently said so. The core design challenge: how do you deliver the right amount of content and functionality in a consumable, modern mobile experience when your platform is a native shell rendering web content through stacked iframes?

I held three criteria consistently across the project: preserved design intent (what the designers envisioned actually made it through to implementation), modern touch-first interaction (not a shrunk-down web app), and implementable by any team without degrading the first two. I presented the work in four chapters — the initial prototype, scaling into systems, specific design decisions, and live app plus impact — using live demos, Storybook, Figma snippets, and code snippets side by side.

### What I found

**Chapter 1: Can we actually build this?** I stress-tested the production stack against the Figma designs before anyone wrote a line of product code. Some things worked with composition — I extended DS components for tables and tabs rather than replacing them, adding mobile-specific behavior without touching what already worked. I also defined the "From Figma to Code" handoff standard during this chapter: a typography annotation table that started with hard-coded pixel values and Figma swatch names (values engineers couldn't use directly) and became a spec with Fusion token names and CSS variables they could actually implement against.

**Chapter 2: The DS Ripple Effect.** Product teams started pulling my demo code directly into production — I didn't push for that, but the quality was there and the adoption pressure was real. That mandated the DS team to officially support what I'd built. They created a Fusion canary release from my implementation and built a shared table library from my table code. Two systems came out of this chapter directly. First, the Unified Type System: designers were choosing type styles visually, not semantically, and mobile and desktop were two disconnected systems. The fix was one semantic class name with two rendering targets — web or mobile, determined by a platform flag. I built the CSS prototype to prove the concept; the DS team built the production version. Second, the `@fds/mobile-components` recipe repo: a shared layer between Fusion DS and the apps, too reusable for one app but too specific for the core DS. It shipped three recipes — BottomSheet (composed from FusionDrawer2 with swipe-to-dismiss physics; "the transition tracks your finger while dragging, then animates to close — the physics make it feel native, not programmed"), ScrollUpStickyReveal (hide on scroll down, reveal on scroll up intent), and TagNav.

I also hit a hard constraint here: the full-screen typeahead I pushed for (more focus, more space, solves soft keyboard, sticky header, and overflow list in one move) ran into the iframe structure. I built three variants — ideal (bottom sheet over footer tabs, not buildable today), current (sheet opens within the content app area only), and a compromise (sheet in app area, header and footer fade and disable to keep focus clear). The three-variant approach let design and engineering make an intentional choice rather than just accepting a limitation.

**Chapter 3: Details that make it feel right.** The UX-Labs repo was a second recipe repo for patterns with a lighter dependency footprint. SwipeableRow — an iOS swipe pattern where short swipe reveals actions and full swipe executes — let users delete recently viewed results without cluttering the UI. I built `usePointerMove` as a reusable composable so the pointer logic lives separately from the component. Drag-to-Reorder let users control which sections appear as footer tabs; the web implementation didn't support touch, so I built it to work for both mouse and touch with smooth space-making animations at drop zones, plus button controls for users with manual dexterity issues. The Mobile Frame Structure chapter was about making the invisible visible: the native shell uses a header, footer, and stacked iframes, and design was making decisions without knowing this structure existed. I inspected the DOM in the native app's web dev mode, mapped the frame layers, verified with the frame engineers, and documented it so design could build what was actually possible.

**Chapter 4: Live app.** Home and Markets shipped fully — the design intent made it through. The rest was in flight at the time of the presentation. Adoption was growing at an encouraging pace.

### So what

The impact slide tells the real story: demo code adopted directly into production by multiple teams, the DS team building Fusion canary releases from my prototype work, recipe repos available to any team at FactSet. But the line I'm most proud of is this one: designers opening Chrome DevTools to do QA. That's a culture shift. Not everyone has to write code — but when designers are inspecting computed styles and checking token names against the spec, the gap between design intent and implementation closes in a fundamentally different way than any process change can produce.

---

*Project summary written 2026-06-11, based on the May 2026 FactSet Mobile App project review presentation.*
