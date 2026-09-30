# Dashboard Layouts: Project Summary

## Short Summary

I built an interactive prototype for exploring responsive financial dashboard layouts driven by CSS Grid Template Areas. It lets you define named grid regions across 1–4 column configurations and preview how they reflow at different container widths, with two editing modes: raw text input and a visual drag-and-resize canvas powered by GridStack.js. The goal was to prove out a declarative layout system that separates layout structure from component logic, with no JS-driven breakpoint switching at render time.

---

## Detailed Description

### What it is

This project explores a core question in dashboard design: how do you let end users rearrange a multi-widget financial dashboard without rebuilding the layout engine every time? The prototype centers on CSS Grid Template Areas as the layout primitive. Each widget is assigned a single-letter name (a–g), and the layout is defined as a 2D grid of those names per column count (1–4). CSS container queries alone handle switching between layouts at different viewport widths. The editor lets you inspect and modify those grid definitions either as raw text cells or by dragging and resizing widgets on a visual canvas, with the two representations staying in sync in real time. The right panel renders modules with overflow truncated by design: only the outer panel scrolls, not each module. That eliminates scroll interaction conflicts but clips content by default. A focus mode addresses that: it lets users expand any module to fill the panel with a smooth grow-in transition, then collapse it back out.

### What I found

The most surprising finding was how far pure CSS can take you. Injecting grid template strings as scoped CSS variables, bound to Vue reactive state, meant the layout responds to data changes without any re-rendering of the grid itself. Container queries layered on top replaced most of the usual JS resize-observer breakpoint logic. The focus mode animation was the biggest creative challenge. Truncating module overflow at the panel level was the right call for scroll UX, but it left users with no way to see a module's full content, which is why focus mode exists. The interaction needed physical weight: the module grows into the panel, then shrinks back to its position. Rather than trying to CSS-transition between two DOM states, I capture the module's `offsetTop`, `offsetLeft`, width, and height at the moment of click, write them as CSS custom properties, and animate from those stored coordinates using `transform: translate()`, which runs on the compositor and avoids repaints. The GridStack integration required building a bidirectional converter between GridStack's widget position model and the 2D string arrays the store uses as source of truth. Managing change-event listeners to prevent feedback loops was the trickiest part.

### So what

For product and engineering teams, this prototype validates that a fully declarative, CSS-first approach to responsive dashboard layout is practical, and simpler to reason about than a JS-driven grid system. The visual editor demonstrates that you can give non-technical users a drag-and-resize surface while keeping the underlying data model clean and serializable. The expand animation pattern is portable to any module-in-a-grid use case. The splitter-based panel balancing, where expanding the watchlist narrows the module grid, shows a lightweight alternative to complex layout state machines. CSS Grid Template Areas paired with container queries and reactive CSS variables is a credible foundation for a configurable dashboard, beyond a simple proof of concept.
