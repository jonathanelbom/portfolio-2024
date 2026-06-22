# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at http://localhost:8081
npm run build     # Production build
npm run lint      # ESLint with zero max-warnings
npm run preview   # Preview production build
```

No test runner is configured. The one test file (`ExpandableTransition.test.jsx`) has no runner wired up in `package.json`.

## Architecture

Single-page portfolio app built with React 18 + Vite. MUI v5 (Material UI) is the component/styling foundation; Framer Motion is available but minimally used. React Router DOM is installed but routing is **commented out** — the app renders a single-view layout directly.

### Layout tree

```
App
├── BrandStripe          (decorative top color stripe)
├── PageHeader           (name, title, resume links)
├── Content              (main page body — all sections)
│   ├── Section (Hello intro)
│   ├── Section (Full Time Work)
│   │   └── ProjectGrid per company → Grid → GridItem
│   ├── Section (Consulting Work)
│   ├── Section (Personal Projects)
│   └── Section (What's That You Say / feedback)
└── ProjectDialog        (modal opened when a project is selected)
```

### Global state

`src/context/AppContext/AppContext.jsx` uses `React.useReducer` with split state/dispatch contexts. State controls:
- `modalOpen` / `selectedProject` — which project dialog is open
- `condensed` — toggles max-width constraint on the main content column
- `allExpanded{Work|Consulting|Personal|Feedback}` — expand/collapse all rows in a section
- `activeFilters: []` — array of active tag strings; empty = show all (OR logic, multi-select)
- `curatedView: null` — `{ blurb, ids }` when a curated URL param is active, else null

Import with `useAppState()` / `useAppDispatch()` and dispatch via `ACTION_TYPE.*` constants.

Relevant action types:
- `SET_ACTIVE_FILTER` — pass a tag string to toggle it in/out of `activeFilters`; pass `null` to clear all
- `SET_CURATED_VIEW` — pass `{ blurb, ids }` to activate a curated view; pass `null` to clear

### Data layer

Each employer/project group has its own file in `src/data/` (e.g. `vrbo.js`, `indeed.js`, `factset.js`). All are re-exported from `src/data/index.js` as the `projects` array, but `Content.jsx` imports individual arrays directly for finer control.

**Project item shape** (defined in `src/data/util.js`):
```js
{
  id, title, tags, descr,
  assets: [{ label, id, type: 'image'|'video'|'pdf', uri }],
  links: [{ label, id, url }],
  videos: [...],
  pdfs: [...],
}
```

Helper utilities in `src/data/util.js`: `template`, `transformProject`, `filterAndSort`, `createList`.  
Items tagged `'exclude'` are filtered out by `filterAndSort`.

### Theme

Defined in `src/constants/theme.js`. Primary color is `#8a1b12` (dark red). Custom typography variants: `headlineTop`, `headlineBottom`, `sectionHeadline`, `sectionItemHeadline`, `projectTitle`, `workTitle`, `workDate`, `workRole`. Fonts: Roboto + Roboto Condensed. MUI ripple is disabled globally.

Layout width constants live in `src/constants/styles.js`.

### Key custom components

- **`ExpandableTransition`** — animated height collapse/expand wrapper; used by `ProjectGrid` for accordion behavior
- **`SwipeableCarousel`** — touch-friendly carousel with pan gesture hooks (`usePan`, `useCardCount`)
- **`Grid` / `GridItem`** — responsive project grid; accepts a `sizing` prop for column counts per breakpoint
- **`Flex`** — thin MUI Box wrapper with flex defaults (from `src/components/IFL/ifl.jsx`)
- **`VideoPlayer`** — wraps `react-player`
- **`ProjectDialog`** — full project detail modal driven by AppContext `selectedProject`

### Filter and curation system

**Filter bar** — `src/components/FilterBar/FilterBar.jsx`: sticky chip row above all sections. Tags: `prototype`, `production`, `case-study` | `design-system`, `motion`, `gesture`, `ai`. Multi-select OR logic. "All" chip clears filters.

**Curated views** — defined in `src/data/collections.js`. Each entry has a `blurb` and `projects` array of IDs. Activated via URL params read on mount in `Content.jsx`:
- `?view=collection-key` — loads a named collection from `collections.js`
- `?projects=id1,id2,id3` — loads a raw comma-separated list of project IDs

When a curated view is active, `FilterBar` is replaced by `CuratedBanner` (`src/components/CuratedBanner/CuratedBanner.jsx`) which shows the blurb and a "View Full Portfolio" reset button.

**Project IDs** follow the pattern `[company]-[descriptive-slug]`. See `README.md` for the full list. To add a new named collection, add an entry to `src/data/collections.js`.

### ESLint / Prettier

`react/prop-types` rule is **disabled**. Lint runs with `--max-warnings 0` so any warning fails the check. Config is in `.eslintrc.cjs`.
