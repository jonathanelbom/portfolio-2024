# DocSearchFilters: Project Summary

## Short summary

This prototype explores the document search and filtering experience for FactSet's mobile app: the flow of browsing and narrowing broker research, filings, transcripts, and other financial documents on a company entity page. It spans two full iterations: a designer-authored stakeholder mockup that validated look and feel, followed by a developer-ready implementation that solved the hard mobile platform problems required for production handoff.

Built with Fusion Foundry, FactSet's internal prototyping framework for building high-fidelity, interactive prototypes using the Fusion Design System component library and real mock data.

---

## Detailed description

**What it is**

The experience centers on a financial professional viewing a company entity page (Apple Inc. in the prototype) who needs to filter a large feed of financial documents by type, research category, filing form, source, or analyst/contributor. The filter opens as a bottom sheet with a document-type picker and contextual sub-filter sections that change based on selection: Broker Research shows research type and contributor filters; Filings adds form type and source; Transcripts shows call topic. Drilling into contributor or form/source filters opens a full-screen typeahead search with a scrollable results list. The prototype was built in two phases: first as a phone-frame mockup (complete with iOS status bar, entity header, and bottom nav chrome) for stakeholder review, then rebuilt as a clean developer handoff implementation using Fusion Design System components throughout.

**What I found**

The stakeholder mockup phase confirmed the workflow. Stakeholders needed the visual context of the phone frame to evaluate the interaction; they couldn't judge it without seeing it in its full mobile environment. The dev-ready phase introduced the hardest technical part of the prototype: getting the full-screen typeahead overlay to behave on mobile Safari. When a soft keyboard opens on iOS, Safari exposes extra scroll space outside the visible DOM, which shifts the page and scrolls the overlay out of frame, breaking the experience. The fix required two composables working together. `useVisualViewport` tracks the rendered viewport height as the keyboard appears and disappears, writing it as a `--vvh` CSS custom property that overrides the full-height calculation. `useDocumentTouchMove` suppresses `touchmove` events via `preventDefault`, blocking the Safari-introduced scroll while still allowing scroll inside the results list. Validating this required testing on a physical iPhone using Vite's local network URL; browser DevTools could not reproduce the issue.

**So what**

This prototype proves out a production-ready implementation of a pattern that is hard to get right on mobile: a full-screen overlay with a soft keyboard and a scrollable results list. The phone-frame iteration gives stakeholders something concrete to react to; the dev-ready iteration gives the engineering team working, tested code they can build from. The visual viewport and touch-scroll suppression work forms a solved, encapsulated pattern, reusable across any future FactSet mobile feature that involves keyboard-triggered overlays.
