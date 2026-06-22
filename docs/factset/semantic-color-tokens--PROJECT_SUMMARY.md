# Fusion Design System — Semantic Color Token Taxonomy

## Short Summary

I built the complete Tier 2 (semantic) color token taxonomy for the Fusion Design System: 76 tokens across interactive, text, status, and surface categories, delivered in both Style Dictionary JSON (for code) and Figma Variables (for design). The system resolves color through a three-layer architecture — primitives → intensity aliases → interaction-state tokens — so the entire interface can be rebranded by changing just 14 alias tokens. This closes the gap between ad-hoc primitive references in components and a principled, cross-platform contract that designers and developers share.

---

## Detailed Description

### What it is

Fusion is FactSet's enterprise design system, serving a large fintech platform where the same UI toolkit gets white-labeled across different clients. This project defines the middle layer of a three-tier token architecture: Tier 1 (raw color values like `blue-17`) already existed; Tier 3 (component-specific overrides) may come later; what was missing was Tier 2 — the semantic layer that gives color *meaning*. A semantic token like `interactive-brand-rest` doesn't say "this is `#0070c9`"; it says "this is the color a brand-intention interactive element sits at when it's waiting for input." That layer of indirection is what makes theming, accessibility audits, and cross-component consistency possible at scale. The project spans two completed phases: Phase 1 locked the interactive token taxonomy (buttons, forms, navigation), and Phase 2 expanded it to cover all four design element categories — interactive, content/text, status feedback, and surface backgrounds.

### What I found

The hardest design problems were naming ones, not implementation ones. The first major decision was whether interactive tokens should include a *property* segment — distinguishing fills from borders from text. The answer turned out to be no: a primary button and a secondary button both use the same brand blue, one as a fill and one as a border. A single `interactive-brand-rest` token covers both, and the component decides how to apply it. That single call eliminated dozens of redundant tokens and simplified theming overnight. A subtler problem was compound interaction states: a tag component goes from neutral gray at rest to brand blue when selected, and the system needed to express "selected + hover" cleanly. The compound state pattern (`brand-selected-hover`) generalized to menus, checkboxes, and toggles without modification — which was validation that the taxonomy was thinking in systems, not solving components one at a time. The three-layer architecture (primitive → intensity alias → state token) required real invention: it separates *how intense* a brand color is (alias tier) from *when* it appears (state tier), which is what makes it possible to rebrand from blue to purple by touching only 14 tokens while still allowing fine-grained per-state overrides where needed. Thirty-plus component inventory audits — buttons, inputs, tables, menus, drawers, calendars, data visualization, and more — grounded every decision in observed behavior rather than theory.

### How the work was done

The token taxonomy is one deliverable. The other is the workflow infrastructure I built to run Phase 2 at scale and hand it off without me becoming a bottleneck.

**CLAUDE.md as project intelligence.** Every design decision made during Phase 1 and Phase 2 is encoded in the repo's CLAUDE.md: all 12 resolved decisions (D1–D12), the naming pattern, validation rules, what to compare against Brad Frost's model and why, success criteria. Any new session — mine or a teammate's — picks up the full context of the system without a briefing. That's what made multi-month, multi-session work coherent.

**Agent skills for designers.** When designers on the team got Claude Code licenses with minimal training and no terminal experience, I built four skills that abstracted the entire workflow:

- `/new-branch` and `/sync-main` handle git branching and syncing — no command line knowledge required.
- `/submit-work` is one step: stage all changes, write a generated commit message, push to remote, open a pull request, print the URL.
- `/new-inventory [Component] [image.png]` is the centerpiece. A designer drops a component screenshot into a staging folder and runs the command. Claude reads the process methodology, launches parallel agents to analyze each image, cross-references every observed color value against the full token reference, flags any name or primitive mapping that doesn't match, then enters plan mode with a structured proposal and explicit questions for the design team. Nothing changes until the designer approves. After approval, Claude writes the inventory file and moves the image to its permanent location.

**The insight behind it.** The `/new-inventory` skill encodes the same judgment I was applying manually across 30+ component audits: which table format to use, how to order interaction states, when to flag a discrepancy vs. accept it, how to document Q&A so decisions don't get re-litigated. That process was documentable. Once it was documented in `PROCESS-INVENTORY.md`, it could be invoked. The designers became the decision-makers. The skill became the execution layer.

---

### So what

This token set is the handshake between design and engineering that makes scale possible. For designers, importing the Figma Variables files means every fill, stroke, and text color in components points to a named semantic intent — not a bare hex value. For engineers, the Style Dictionary JSON drops into any CSS pipeline and outputs custom properties that survive white-label rebrands, dark mode, and accessibility updates without touching component code. For FactSet specifically, it means a client rebrand changes 14 alias tokens, not hundreds of hardcoded primitives scattered across the codebase. The taxonomy is intentionally conservative on scope — it does not prescribe Tier 3 component tokens, and it leaves room for future categories like data visualization and row-level interaction states — but the decisions made here (D1 through D12) are documented and locked, so Phase 3 inherits clear conventions rather than starting from scratch.

The token set is the artifact. The workflow infrastructure is the multiplier. With the skills in place, Phase 3 component inventories can be run by designers without me in the loop: drop an image, review a proposal, approve it, submit. The knowledge isn't locked in one person. It's in the repo.
