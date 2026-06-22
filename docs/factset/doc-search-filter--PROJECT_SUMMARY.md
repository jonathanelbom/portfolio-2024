# DocSearchFilters — Project Summary

## Short summary

This prototype explores the document search and filtering experience for FactSet's mobile app — specifically the flow of browsing and narrowing broker research, filings, transcripts, and other financial documents on a company entity page. It spans two full iterations: a designer-authored stakeholder mockup that validated look and feel, followed by a developer-ready implementation that solved the hard mobile platform problems required for production handoff.

Built with Fusion Foundry — FactSet's internal prototyping framework for building high-fidelity, interactive prototypes using the actual Fusion Design System component library and real mock data.

---

## Detailed description

**What it is**

The experience centers on a financial professional viewing a company entity page (Apple Inc. in the prototype) and needing to filter a large feed of financial documents by type, research category, filing form, source, or analyst/contributor. The filter opens as a bottom sheet with a document-type picker and contextual sub-filter sections that change based on selection — Broker Research shows research type and contributor filters; Filings adds form type and source; Transcripts shows call topic. Drilling into contributor or form/source filters opens a full-screen typeahead search with a scrollable results list. The prototype was built in two phases: first as a phone-frame mockup (complete with iOS status bar, entity header, and bottom nav chrome) for stakeholder review, then rebuilt as a clean developer handoff implementation using Fusion Design System components throughout.

**What I found**

The stakeholder mockup phase confirmed the workflow — the visual context of the phone frame was essential for stakeholders who couldn't evaluate the interaction without seeing it in its full mobile environment. The dev-ready phase introduced the most technically demanding part of the prototype: getting the full-screen typeahead overlay to behave correctly on mobile Safari. When a soft keyboard opens on iOS, Safari exposes extra scroll space outside the visible DOM, which causes the page to shift and the overlay to scroll out of frame in ways that break the experience entirely. The solution required two composables working together: `useVisualViewport` tracks the actual rendered viewport height as the keyboard appears and disappears, writing it as a `--vvh` CSS custom property that overrides the full-height calculation; and `useDocumentTouchMove` selectively suppresses `touchmove` events via `preventDefault`, blocking the Safari-introduced scroll while still allowing scroll inside the results list itself. Validating this required testing on a physical iPhone using Vite's local network URL — browser DevTools could not reproduce the issue.

**So what**

This prototype proves out a production-ready implementation of a pattern that is notoriously difficult to get right on mobile: a full-screen overlay with a soft keyboard and a scrollable results list. The phone-frame iteration gives stakeholders something concrete to react to; the dev-ready iteration gives the engineering team working, tested code they can build directly from. The visual viewport and touch-scroll suppression work is a solved, encapsulated pattern — reusable across any future FactSet mobile feature that involves keyboard-triggered overlays.
