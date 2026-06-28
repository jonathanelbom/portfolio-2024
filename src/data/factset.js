import { filterAndSort, transformProject } from './util';

const _factset = [
    {
        images: [
            { label: '', id: '', type: 'image', uri: 'factset/fusion-ux-playground--1.png' },
            { label: '', id: '', type: 'image', uri: 'factset/fusion-ux-playground--2.png' },
            { label: '', id: '', type: 'image', uri: 'factset/fusion-ux-playground--3.png' },
        ],
        title: 'Fusion UX Playground',
        id: 'factset-fusion-ux-playground',
        description:
            "<b>What it is</b><br/>The Fusion UX Playground is a curated gallery of design explorations I've built as a design technologist — each demo is a self-contained experiment tackling a real UX problem, interaction challenge, or design pattern using FactSet's production Vue stack and the Fusion design system. The demos range from responsive reflow techniques and mobile navigation patterns to full-page application layouts, accessibility deep-dives, and component-level proposals. Rather than living in slide decks or static mockups, these explorations live as running code that designers, engineers, and product stakeholders can interact with directly.<br/><br/><b>What I found</b><br/>Across the collection, a few consistent themes emerge. Responsive behavior frequently requires reaching beyond what Fusion exposes out of the box — resize observers and container queries appear throughout to achieve the adaptive layouts that designs call for. Several demos reveal genuine gaps in the system: the label-value pattern shows up so often across FactSet UIs that I built a full component proposal to standardize it. Others expose edge cases worth surfacing — frozen column scroll conflicts, pill color opacity limitations, and the nuanced accessibility tradeoffs between roving tab index and aria-activedescendant for keyboard-navigable tab components. Where Fusion covers the need cleanly, the demos show the idiomatic path; where it doesn't, the workaround is explicit and preserved as signal rather than cleaned up and hidden.<br/><br/><b>So what</b><br/>The playground serves two audiences simultaneously. For product teams, it's a working pattern library — a place to see how a UX problem has been explored and to borrow or adapt code that's already been validated in the stack. For the Fusion team, the demos with custom components, CSS overrides, or workarounds point directly to where the system could expand, making it a practical backlog of real use cases rather than abstract wishlists. The goal throughout is to close the gap between design intent and production reality — not by compromising the design, but by proving it can be built.",
        tags: ['factset', 'prototype', 'playground', 'design-system'],
        links: [
            {
                url: 'https://portfolio.jonnybomb.com/work/factset/fusion-ux-playground/#/',
            },
        ],
        sizes: ['desktop'],
        imageBgColor: '#a2d0ef55',
    },
    {
        images: [
            { label: '', id: '', type: 'image', uri: 'factset/mobile-components--storybook-zoom.png' },
            { label: '', id: '', type: 'image', uri: 'factset/mobile-components--bottom-sheet-storybook-zoom.png' },
            { label: '', id: '', type: 'image', uri: 'factset/mobile-components--bottom-sheet-code-zoom.png' },
            {
                label: '',
                id: '',
                type: 'image',
                uri: 'factset/mobile-components--scroll-up-sticky-reveal-storybook-zoom.png',
            },
            {
                label: '',
                id: '',
                type: 'image',
                uri: 'factset/mobile-components--scroll-up-sticky-reveal-code-zoom.png',
            },
        ],
        title: 'Mobile Components',
        id: 'factset-mobile-components',
        description:
            "<b>What it is</b><br/>The FactSet Mobile App is a native shell — iOS and Android — that renders its product UI through webviews and iframes. That architecture means the web layer carries full responsibility for mobile UX fidelity: touch handling, momentum gestures, sticky headers, and compact layout patterns all have to be solved in web code, not native. The Fusion design system, which backs all FactSet web products, was designed for desktop-density and pointer devices. This library exists to bridge that gap — it extends Fusion with the patterns Fusion doesn't have, and patches Fusion component styles where they need to be recalibrated for mobile density and typography.<br/><br/><b>What was built and what it took</b><br/>The core of the library is four components. <b>BottomSheet</b> wraps Fusion's <code>FusionDrawer2</code> and layers on a full swipe-to-dismiss gesture system: a <code>useTouchMove</code> composable tracks raw touch deltas and directions, the sheet follows the user's finger in real time, and on release it either snaps back or exits — with the backdrop opacity synced to how far the sheet has traveled, creating a physically grounded feel. <b>TagNav</b> is a horizontally scrolling pill-button navigation rail built on <code>FusionButton</code>, with keyboard accessibility (arrow keys, Home/End), auto-scroll-into-view on focus, and reactive overflow detection. <b>ScrollUpStickyReveal</b> solves a universal mobile pattern — a sticky header that hides as you scroll down to maximize reading area, then snaps back when you reverse direction — driven by a throttled <code>useScrollDirection</code> composable. <b>ContextualFeed</b> is a mobile-styled wrapper around <code>@fds/contextual-feed</code>, replacing the standard feed item layout with mobile-density sub-components for News, Events, and Signals content, including a horizontal-scroll mode for card-style browsing.<br/><br/><b>What this unlocks</b><br/>For teams building inside the FactSet Mobile App webview, this library eliminates the need to re-solve touch gestures, sticky-header logic, or mobile feed layout from scratch. The composables — <code>useTouch</code>, <code>useTouchMove</code>, <code>useScrollDirection</code>, <code>createSharedElementComposable</code> — are exported as first-class API and cover the low-level primitives most mobile web patterns need. The library is in active production use and is published to FactSet's private Artifactory registry; the deployed Storybook serves as the living documentation and preview environment for every PR.",
        tags: ['factset', 'production', 'design-system', 'gesture'],
        links: [
            {
                url: 'https://portfolio.jonnybomb.com/work/factset/mobile-components/?path=/docs/introduction--docs',
            },
        ],
        sizes: ['mobile'],
        imageBgColor: '#a2d0ef55',
    },
    {
        images: [
            { label: '', id: '', type: 'image', uri: 'factset/ux-labs--swipeable-row-storybook.png' },
            { label: '', id: '', type: 'image', uri: 'factset/ux-labs--use-pointer-move-code.png' },
        ],
        title: 'UX Labs',
        id: 'factset-ux-labs',
        description:
            "<code>@fds/ux-labs</code> is a growing library of individually-shippable Vue 3 components, composables, and CSS utilities that raise the quality bar for Fusion 8 applications — each solving a specific interaction problem Fusion doesn't cover out of the box. Published as an npm package to FactSet Artifactory.<br/><br/><b>SwipeableRow</b> brings iOS-style swipe-to-reveal actions to list interfaces, with left and right action panels, full-swipe execution mode, and genuine keyboard accessibility. The most complex part is scroll conflict resolution — the component detects whether a gesture is vertical (scroll) or horizontal (swipe) and commits to one path for the lifetime of that gesture. Multi-row coordination uses Vue's <code>provide</code>/<code>inject</code>: a <code>SwipeCoordinationContext</code> ensures only one row is open at a time without coupling rows to each other.<br/><br/><b>BottomSheet</b> extends Fusion's <code>FusionDrawer2</code> with drag-to-dismiss behavior. The physics-proportional dismiss animation is the key detail: if the sheet has already traveled 60% off-screen when the user lifts their finger, the remaining animation plays at 40% of its full duration rather than restarting from the user's position. Backdrop dimming is live and synced to drag position using <code>v-bind</code> inside a CSS <code>&lt;style module&gt;</code> with a <code>:has()</code> selector targeting the sibling lightbox element.<br/><br/><b>usePointerMove / vPointerMove</b> is the foundation both gesture components build on — a composable that unifies touch and mouse tracking into a single callback API with per-frame velocity, cumulative delta, and per-event movement. Mouse events attach lazily to <code>window</code> on drag to prevent losing the cursor; a <code>touchOnly</code> config mode disables mouse drag where it would feel wrong. The directive form (<code>v-pointer-move</code>) makes gesture callbacks ergonomic to attach directly in templates.<br/><br/><b>CSS Utilities</b> is a suite of SCSS files — layout, spacing, and border — that bring utility classes to Fusion apps in a way that actually works inside Vue's three styling modes. The three-mixin pattern (<code>-global</code>, <code>-module</code>, <code>-scoped</code>) solves the core problem: Fusion's existing utility classes only work in global scope and have no effect inside <code>&lt;style module&gt;</code> or <code>&lt;style scoped&gt;</code>.",
        tags: ['factset', 'production', 'design-system', 'gesture'],
        links: [
            {
                url: 'https://portfolio.jonnybomb.com/work/factset/ux-labs/?path=/docs/introduction--docs',
            },
        ],
        sizes: ['mobile/desktop'],
        imageBgColor: '#a2d0ef55',
    },
    {
        images: [
            { label: '', id: '', type: 'image', uri: 'factset/dashboard-layouts--panels.png' },
            { label: '', id: '', type: 'image', uri: 'factset/dashboard-layouts--editor-drag-and-drop.png' },
            { label: '', id: '', type: 'image', uri: 'factset/dashboard-layouts--editor-text-based.png' },
            { label: '', id: '', type: 'image', uri: 'factset/dashboard-layouts--focus.png' },
        ],
        title: 'Dashboard Layouts',
        id: 'factset-dashboard-layouts',
        description:
            "<b>What it is</b><br/>This project explores a core question in dashboard design: how do you let end users rearrange a multi-widget financial dashboard without rebuilding the layout engine every time? The prototype centers on CSS Grid Template Areas as the layout primitive — each widget is assigned a single-letter name (a–g), and the layout is defined as a 2D grid of those names per column count (1–4). Switching between layouts at different viewport widths is handled entirely by CSS container queries, not JavaScript. The editor lets you inspect and modify those grid definitions either as raw text cells or by dragging and resizing widgets on a visual canvas, with the two representations staying in sync in real time. A focus mode lets users expand any module to fill the panel with a smooth grow-in transition, then collapse it back out.<br/><br/><b>What I found</b><br/>The most surprising finding was how far pure CSS can take you. Injecting grid template strings as scoped CSS variables — bound directly to Vue reactive state — meant the layout responds to data changes without any re-rendering of the grid itself. Container queries layered on top replaced the usual JS resize-observer breakpoint logic almost entirely. The focus mode animation was the biggest creative challenge: the module grows contextually to fill the panel, then shrinks back to its position. Rather than trying to CSS-transition between two DOM states, I capture the module's <code>offsetTop</code>, <code>offsetLeft</code>, width, and height at the moment of click, write them as CSS custom properties, and animate from those stored coordinates using <code>transform: translate()</code> — which runs on the compositor and avoids repaints. The GridStack integration required building a bidirectional converter between GridStack's widget position model and the 2D string arrays the store uses as source of truth; managing change-event listeners carefully to prevent feedback loops was the trickiest part.<br/><br/><b>So what</b><br/>For product and engineering teams, this prototype validates that a fully declarative, CSS-first approach to responsive dashboard layout is practical — and meaningfully simpler to reason about than a JS-driven grid system. The visual editor demonstrates that you can give non-technical users a drag-and-resize surface while keeping the underlying data model clean and serializable. The expand animation pattern is directly portable to any module-in-a-grid use case. The takeaway: CSS Grid Template Areas paired with container queries and reactive CSS variables is a credible foundation for a configurable dashboard, not just a proof of concept.",
        tags: ['factset', 'prototype', 'motion'],
        links: [
            {
                url: 'https://portfolio.jonnybomb.com/work/factset/dashboard-layouts/#/',
            },
        ],
        sizes: ['desktop'],
        imageBgColor: '#a2d0ef55',
    },
    {
        images: [
            { label: '', id: '', type: 'image', uri: 'factset/mobile-playground--fusion-mobile-app.png' },
            { label: '', id: '', type: 'image', uri: 'factset/mobile-playground--figma-design-2.png' },
            { label: '', id: '', type: 'image', uri: 'factset/mobile-playground--drag-to-reorder.png' },
            { label: '', id: '', type: 'image', uri: 'factset/mobile-playground--mobile-structure-2.png' },
            { label: '', id: '', type: 'image', uri: 'factset/mobile-playground--figma-hand-off-4.png' },
            { label: '', id: '', type: 'image', uri: 'factset/mobile-playground--figma-hand-off-5.png' },
        ],
        title: 'Fusion Mobile Playground',
        id: 'factset-fusion-mobile-playground',
        description:
            "<b>What it is</b><br/>This prototype asks a straightforward but consequential question: can Fusion — a design system built for desktop financial software — support a genuine mobile app experience without a full parallel rebuild? The playground is a working Markets app with a real navigation structure: a home feed (watchlist, market indices, news, events), a markets drill-down (equities, FX, commodities, ETFs, bonds), a global search view, and a user profile with appearance settings and tab management. All data is mocked but structured to match what a production API would send. It runs against a pre-release <code>@fds/fusion-mobile</code> package that ships experimental mobile-specific variants of core Fusion components, installed alongside the stable <code>@fds/fusion</code> release.<br/><br/><b>What I found</b><br/>The prototype reveals three categories of work required to make Fusion feel mobile-native. First, <b>interaction patterns</b>: Fusion's components have no awareness of touch gestures, so custom layers handle swipe-to-reveal list actions (<code>SwipeableRow</code>), drag-and-drop tab reordering (<code>ProfileTabReorder</code> + <code>useDragReorder</code>), and iOS keyboard handling in the search view (using the <code>visualViewport</code> API to resize the scroll container when the software keyboard appears). Second, <b>navigation choreography</b>: route transitions — push, pop, drawer-up/down, fade — are entirely custom. A composable tracks each route's depth via a <code>meta.index</code> field and drives Vue's transition system to produce the iOS slide and sheet effects. Third, <b>typography</b>: Fusion's existing type scale was augmented with a parallel mobile scale, switchable via a <code>data-platform</code> attribute on the app root, so the same class names render at the correct sizes for both web and mobile contexts. All Fusion overrides are surgical and encapsulated in thin \"Enhancer\" wrapper components, avoiding direct library forks.<br/><br/><b>So what</b><br/>The practical takeaway is a prioritized gap list. Touch gestures, route transitions, and the dual-scale typography system are all implementable without forking Fusion — they're additive layers any team can adopt today. The pre-release <code>@fds/fusion-mobile</code> package already covers the component-level changes (button sizing, tab bar behavior). The Enhancer component pattern — thin wrappers applying targeted CSS overrides to Fusion internals — gives teams a low-risk path to ship mobile-adapted components without waiting for library releases. This prototype is a concrete artifact for design, product, and engineering to align on which interaction patterns are essential for a V1 mobile release, which are already solved here, and which remain open design problems.",
        tags: ['factset', 'prototype', 'playground', 'gesture'],
        links: [],
        sizes: ['mobile'],
        imageBgColor: '#a2d0ef55',
    },
    {
        images: [
            { label: '', id: '', type: 'image', uri: 'factset/doc-search-filter--1.png' },
            { label: '', id: '', type: 'image', uri: 'factset/doc-search-filter--2.png' },
            { label: '', id: '', type: 'image', uri: 'factset/doc-search-filter--3.png' },
        ],
        title: 'Doc Search Filters',
        id: 'factset-doc-search-filters',
        description:
            "<b>What it is</b><br/>This prototype explores the document search and filtering experience for FactSet's mobile app — browsing and narrowing broker research, filings, transcripts, and other financial documents on a company entity page. The filter opens as a bottom sheet with a document-type picker and contextual sub-filter sections that change based on selection: Broker Research shows research type and contributor filters; Filings adds form type and source; Transcripts shows call topic. Drilling into contributor or form/source filters opens a full-screen typeahead search with a scrollable results list. Built across two phases: a phone-frame mockup (complete with iOS status bar, entity header, and bottom nav chrome) for stakeholder review, then rebuilt as a clean developer handoff using Fusion Design System components throughout.<br/><br/><b>What I found</b><br/>The dev-ready phase introduced the most technically demanding part: getting the full-screen typeahead overlay to behave correctly on mobile Safari. When a soft keyboard opens on iOS, Safari exposes extra scroll space outside the visible DOM, causing the page to shift and the overlay to scroll out of frame. The solution required two composables working together: <code>useVisualViewport</code> tracks the actual rendered viewport height as the keyboard appears and disappears, writing it as a <code>--vvh</code> CSS custom property that overrides the full-height calculation; <code>useDocumentTouchMove</code> selectively suppresses <code>touchmove</code> events via <code>preventDefault</code>, blocking the Safari-introduced scroll while still allowing scroll inside the results list. Validating this required testing on a physical iPhone using Vite's local network URL — browser DevTools could not reproduce the issue.<br/><br/><b>So what</b><br/>This prototype proves out a production-ready implementation of a pattern that is notoriously difficult on mobile: a full-screen overlay with a soft keyboard and a scrollable results list. The phone-frame iteration gives stakeholders something concrete to react to; the dev-ready iteration gives engineering working, tested code to build directly from. The visual viewport and touch-scroll suppression work is a solved, encapsulated pattern — reusable across any future FactSet mobile feature that involves keyboard-triggered overlays.",
        tags: ['factset', 'prototype', 'gesture'],
        links: [
            {
                url: 'https://portfolio.jonnybomb.com/work/factset/doc-search-filter/#/entity-landing-d',
            },
        ],
        sizes: ['mobile'],
        imageBgColor: '#a2d0ef55',
    },
    {
        images: [
            { label: '', id: '', type: 'image', uri: 'factset/semantic-color-tokens--1.png' },
            { label: '', id: '', type: 'image', uri: 'factset/semantic-color-tokens--2.png' },
            { label: '', id: '', type: 'image', uri: 'factset/semantic-color-tokens--3.png' },
            { label: '', id: '', type: 'image', uri: 'factset/semantic-color-tokens--4.png' },
            { label: '', id: '', type: 'image', uri: 'factset/semantic-color-tokens--5.png' },
            { label: '', id: '', type: 'image', uri: 'factset/semantic-color-tokens--6.png' },
            { label: '', id: '', type: 'image', uri: 'factset/semantic-color-tokens--skills.png' },
            { label: '', id: '', type: 'image', uri: 'factset/semantic-color-tokens--token-stats.png' },
        ],
        title: 'Semantic Color Tokens',
        id: 'factset-semantic-color-tokens',
        description:
            '<b>What it is</b><br/>Fusion is FactSet\'s enterprise design system, serving a large fintech platform where the same UI toolkit gets white-labeled across different clients. This project defines the middle layer of a three-tier token architecture: Tier 1 (raw color values like <code>blue-17</code>) already existed; what was missing was Tier 2 — the semantic layer that gives color <i>meaning</i>. A semantic token like <code>interactive-brand-rest</code> doesn\'t say "this is #0070c9"; it says "this is the color a brand-intention interactive element sits at when it\'s waiting for input." The project spans two completed phases: Phase 1 locked the interactive token taxonomy (buttons, forms, navigation), and Phase 2 expanded to all four design element categories — interactive, content/text, status feedback, and surface backgrounds. 76 tokens total, delivered in both Style Dictionary JSON (for code) and Figma Variables (for design).<br/><br/><b>What I found</b><br/>The hardest design problems were naming ones, not implementation ones. The first major decision: should interactive tokens include a property segment — distinguishing fills from borders from text? The answer was no. A primary button and a secondary button both use the same brand blue, one as a fill and one as a border. A single <code>interactive-brand-rest</code> token covers both, and the component decides how to apply it — eliminating dozens of redundant tokens and simplifying theming overnight. The compound state pattern (<code>brand-selected-hover</code>) generalized to menus, checkboxes, and toggles without modification — validation that the taxonomy was thinking in systems, not solving components one at a time. The three-layer architecture (primitive → intensity alias → state token) separates <i>how intense</i> a brand color is from <i>when</i> it appears, making it possible to rebrand from blue to purple by touching only 14 tokens. Thirty-plus component inventory audits — buttons, inputs, tables, menus, drawers, calendars, data visualization — grounded every decision in observed behavior rather than theory.<br/><br/><b>How the work was done</b><br/>The token taxonomy is one deliverable. The other is the workflow infrastructure I built to run Phase 2 at scale. Every design decision made during Phase 1 and Phase 2 is encoded in the repo\'s CLAUDE.md — all 12 resolved decisions (D1–D12), the naming pattern, validation rules, success criteria — so any new session picks up the full context without a briefing. When designers on the team got Claude Code licenses with minimal training and no terminal experience, I built four skills that abstracted the entire workflow: <code>/new-branch</code> and <code>/sync-main</code> handle git; <code>/submit-work</code> stages changes, writes a commit message, pushes, and opens a PR in one step. The centerpiece is <code>/new-inventory [Component] [image.png]</code>: a designer drops a screenshot into a staging folder and runs the command — Claude reads the process methodology, launches parallel agents to analyze the image, cross-references every observed color value against the full token reference, flags discrepancies, then enters plan mode with a structured proposal and explicit questions. Nothing changes until the designer approves. The skill encodes the same judgment I was applying manually across 30+ audits: which table format to use, how to order interaction states, when to flag a discrepancy vs. accept it. The designers became the decision-makers. The skill became the execution layer.<br/><br/><b>So what</b><br/>This token set is the handshake between design and engineering that makes scale possible. For designers, importing the Figma Variables means every fill, stroke, and text color points to a named semantic intent — not a bare hex value. For engineers, the Style Dictionary JSON outputs custom properties that survive white-label rebrands, dark mode, and accessibility updates without touching component code. For FactSet specifically, a client rebrand changes 14 alias tokens, not hundreds of hardcoded primitives scattered across the codebase. The token set is the artifact. The workflow infrastructure is the multiplier — with the skills in place, Phase 3 component inventories can be run by designers without me in the loop.',
        tags: ['factset', 'production', 'design-system', 'ai'],
        links: [],
        sizes: ['mobile/desktop'],
        imageBgColor: '#a2d0ef55',
    },
    {
        images: [
            { label: '', id: '', type: 'image', uri: 'factset/fusion-foundry--1.png' },
            { label: '', id: '', type: 'image', uri: 'factset/fusion-foundry--2.png' },
            { label: '', id: '', type: 'image', uri: 'factset/fusion-foundry--3.png' },
            { label: '', id: '', type: 'image', uri: 'factset/fusion-foundry--4.png' },
            { label: '', id: '', type: 'image', uri: 'factset/fusion-foundry--5.png' },
            { label: '', id: '', type: 'image', uri: 'factset/fusion-foundry--6.png' },
        ],
        title: 'Fusion Foundry',
        id: 'factset-fusion-foundry',
        description:
            "<b>What it is</b><br/>Fusion Foundry is a \"Figma Make for FactSet\" — a lightweight Vue 3 starter app pre-wired with the Fusion design system, a live settings panel for previewing themes and densities, and a purpose-built Claude Code configuration that gives designers two entry points into the same workflow. The first is Figma-anchored: paste a frame URL, run <code>/from-figma</code>, and Claude maps the design to real Fusion components and builds a running screen. The second is natural language: describe what you need and Claude routes that intent to the right components and builds it. In both cases, a designer talks to Claude in chat, Claude runs commands and builds components, and they see results immediately at <code>localhost:5173</code>. The terminal is mostly invisible. Every piece of the configuration (CLAUDE.md, custom agent skills, enforcement hooks) exists to make that conversation produce correct, production-quality Fusion code without the designer needing to know what a <code>FusionDrawer2</code> prop looks like.<br/><br/><b>What I found</b><br/>Two hard problems emerged, and solving one didn't help with the other. The first was correctness: getting Claude to write <i>Fusion</i> Vue, not generic Vue. Fusion has strong opinions about typography classes, color tokens, and component semantics — a <code>FusionMenu</code> is not a <code>FusionDropdownSelect</code> — and a model without those constraints silently produces code that looks right visually but is semantically wrong. The solution was a layered knowledge architecture: <code>@fds/fusion</code> ships its own <code>docs/ai/</code> directory with per-component API docs that Claude reads on demand via a <code>fds-docs</code> skill, while CLAUDE.md encodes the higher-level conventions: styling rules, deprecated components, the right component for each semantic role, and hand-verified examples. The second was intent routing: getting Claude to reach for the right component, not improvise. Even when it reached for a Fusion component, it often picked the wrong one — four dropdown variants exist, and choosing the wrong one breaks keyboard navigation silently. The solution was a semantic component selection table in CLAUDE.md mapping common design intentions to the correct Fusion component, enforced by a blocking hook that intercepts direct <code>@fds</code> package lookups and forces the <code>fds-docs</code> skill instead. Routing accuracy improved not by making the model smarter at inference, but by giving it richer knowledge of <i>when to use what</i> — decision guides, not just API references.<br/><br/><b>So what</b><br/>This unlocks something that wasn't previously accessible to FactSet designers: the ability to build a fully interactive, design-system-accurate prototype without writing code or involving an engineer. The Figma path produces results anchored to a real design; the natural language path is faster for exploratory work where a Figma file doesn't exist yet. For product and engineering teams, the output from either path is a prototype built from the same components that ship to production — not a throwaway Tailwind mockup — which means stakeholder reviews, accessibility checks, and handoff conversations can happen on something that actually represents the target experience.",
        tags: ['factset', 'prototype', 'design-system', 'ai'],
        links: [],
        sizes: ['mobile/desktop'],
        imageBgColor: '#a2d0ef55',
    },
    {
        images: [{ label: '', id: '', type: 'image', uri: 'factset/factset-mobile-app-presentation.png' }],
        title: 'FactSet Mobile App',
        id: 'factset-mobile-app',
        description:
            "<b>What it is</b><br/>Nine months of design-to-code work, starting from a clunky existing app users didn't like and ending with a live, design-system-accurate mobile experience. My role was sole design technologist — I designed in code rather than Figma, stress-testing the production stack against the design intent and building the infrastructure that let other teams build on top of what I'd proven out. Three criteria held throughout: preserved design intent, modern touch-first interaction, and implementable by any team without degrading the first two.<br/><br/><b>What I found</b><br/><b>Chapter 1 — Can we actually build this?</b> I stress-tested the stack against Figma designs before anyone wrote a line of product code. Some things worked with composition — I extended DS components for tables and tabs rather than replacing them, adding mobile-specific behavior without touching what already worked. I also defined the \"From Figma to Code\" handoff standard: a typography annotation table that started with hard-coded pixel values and Figma swatch names and became a spec with Fusion token names and CSS variables engineers could actually implement against.<br/><br/><b>Chapter 2 — The DS Ripple Effect.</b> Product teams started pulling my demo code directly into production. That mandated the DS team to officially support what I'd built. Two systems came out of this directly: the Unified Type System (one semantic class name, two rendering targets — web or mobile — determined by a platform flag; I built the CSS prototype, the DS team built the production version) and the <code>@fds/mobile-components</code> recipe repo — a shared layer between Fusion DS and the apps. It shipped BottomSheet, ScrollUpStickyReveal, and TagNav. I also hit a hard iframe constraint and responded with three design variants, letting design and engineering make an intentional choice rather than just accepting a limitation.<br/><br/><b>Chapter 3 — Details that make it feel right.</b> SwipeableRow, Drag-to-Reorder (mouse and touch, with smooth space-making animations and button controls for manual dexterity), and Mobile Frame Structure documentation — I inspected the native app's DOM, mapped the iframe layers, verified with the frame engineers, and documented the structure so design could build what was actually possible.<br/><br/><b>So what</b><br/>Demo code adopted directly into production by multiple teams. The DS team building Fusion canary releases from my prototype work. Recipe repos available to any team at FactSet. But the line I'm most proud of: designers opening Chrome DevTools to do QA. When designers are inspecting computed styles and checking token names against the spec, the gap between design intent and implementation closes in a way no process change can produce.",
        tags: ['factset', 'case-study'],
        links: [
            {
                type: 'pdf',
                url: 'https://portfolio.jonnybomb.com/pdf/factset/factset-mobile-app--from-prototype-to-production.pdf',
            },
        ],
        sizes: ['mobile'],
    },
    {
        images: [{ label: '', id: '', type: 'image', uri: 'factset/under-the-hood.png' }],
        title: 'Under the Hood: From Figma to Code',
        id: 'factset-under-the-hood',
        description:
            "<b>What it is</b><br/>A teaching and alignment presentation delivered live to FactSet designers as part of the internal Under the Hood series. The structure moves from framing to exposure to practice: first, establish that the same Figma file serves three audiences with different needs (product/stakeholders want the full story, designers keep explorations and iterations, engineers need a focused build reference with minimal cognitive load). Then expose the gap between Figma components and web components, which are built for different purposes and don't map one-to-one. Then show what that gap costs in real examples. Then offer a better path through annotation practices grounded in how the production system actually works. A hands-on exercise at the end asked participants to annotate a real screen (the Advisor Dashboard) with engineering-ready specs.<br/><br/><b>What I found</b><br/>The examples made the abstract concrete, drawn directly from FactSet's own components and files. A button in Figma shows 8px inline padding in Spacious mode; in code, it's implemented at 24px — a discrepancy no one flagged. A designer reduces one side of an icon button's padding for visual alignment; the web component applies equal padding by design, so the change requires custom CSS or a new variant and can break with future updates. A card in Figma keeps header and footer areas visible even when empty; in code, those are slots that collapse completely when unused, so the Figma component and the real component look different in the same configuration. These aren't edge cases — they're the kind of silent mismatch that surfaces at handoff and causes back-and-forth. The annotation examples showed the same asymmetry from the other direction: a typography annotation that says \"14px, Medium, Tertiary\" is accurate from a design perspective but useless to an engineer who needs \"Heading S, <code>--staticTextTertiary</code>\" to implement correctly.<br/><br/><b>So what</b><br/>Awareness is the leverage point. Designers don't need to become engineers, but understanding where Figma diverges from code changes what goes into a file and how much gets caught before handoff rather than after. Detaching or modifying a component to fix a visual alignment issue is fast in Figma and expensive in code. Using Figma swatch names in annotations instead of CSS variable names forces engineers to manually map every reference, increasing the risk of incorrect styles. Neither problem is hard to fix once a designer knows it exists.",
        tags: ['factset', 'case-study'],
        links: [
            {
                type: 'pdf',
                url: 'https://portfolio.jonnybomb.com/pdf/factset/under-the-hood--from-figma-to-code.pdf',
            },
        ],
        sizes: ['desktop'],
    },
    {
        images: [{ label: '', id: '', type: 'image', uri: 'factset/everything-is-in-between-something.png' }],
        title: 'Everything Is In Between Something',
        id: 'factset-everything-is-in-between-something',
        description: `Design and engineering have always felt like neighboring countries to me. For most of my career, I've worked somewhere along the river between them. Lately, I've realized I'm not alone there. Read my story.`,
        tags: ['factset', 'case-study', 'ai'],
        links: [
            {
                url: 'https://portfolio.jonnybomb.com/pdf/Jonathan%20Elbom%20-%20Everything%20is%20in%20between%20something.pdf',
            },
        ],
        sizes: ['pdf'],
    },
];

const PROTOTYPE_IDS = [
    'factset-fusion-ux-playground',
    'factset-fusion-mobile-playground',
    'factset-dashboard-layouts',
    'factset-doc-search-filters',
    'factset-mobile-app',
    'factset-under-the-hood',
];
const RECIPE_IDS = ['factset-mobile-components', 'factset-ux-labs'];
const AI_IDS = [
    'factset-semantic-color-tokens',
    'factset-fusion-foundry',
    'factset-everything-is-in-between-something',
];

export const factset_prototypes = filterAndSort(
    _factset.filter((p) => PROTOTYPE_IDS.includes(p.id)).map(transformProject),
);
export const factset_recipes = filterAndSort(_factset.filter((p) => RECIPE_IDS.includes(p.id)).map(transformProject));
export const factset_ai = filterAndSort(_factset.filter((p) => AI_IDS.includes(p.id)).map(transformProject));
export const factset = [...factset_prototypes, ...factset_recipes, ...factset_ai];
