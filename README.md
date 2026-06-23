# Jonathan Elbom — Portfolio

Personal portfolio site built with React 18 + Vite.

## Deploy

Pushing to `main` automatically builds and deploys to [portfolio.jonnybomb.com](https://portfolio.jonnybomb.com) via GitHub Actions (`.github/workflows/deploy.yml`). The workflow runs `npm run build` then rsyncs `index.html` and `assets/` to DreamHost over SSH — nothing else on the server is touched.

Required GitHub Secrets: `DREAMHOST_HOST`, `DREAMHOST_USER`, `DREAMHOST_PATH`, `DREAMHOST_SSH_KEY`.

## Commands

```bash
npm run dev       # Start dev server at http://localhost:8081
npm run build     # Production build
npm run lint      # ESLint with zero max-warnings
npm run preview   # Preview production build
```

## Filter Bar

A sticky chip bar at the top of the content lets visitors filter projects by tag. Tags are multi-select with OR logic — selecting "motion" + "gesture" shows projects tagged with either.

**Tag groups:**
- Type: `prototype`, `production`, `case-study`
- Craft: `design-system`, `motion`, `gesture`, `ai`

Clicking **All** clears all active filters and restores the full portfolio.

## Curated Views

You can share a URL that loads a specific curated subset of projects. Two methods:

### Named collection (`?view=`)

```
/?view=motion-and-gesture
/?view=design-systems
/?view=ai
```

Named collections are defined in `src/data/collections.js`. Each has an optional blurb shown in a banner at the top of the content. To add a new collection, add an entry to that file:

```js
export const collections = {
  'my-collection': {
    blurb: 'Optional description shown to the viewer.',
    projects: ['factset-fusion-foundry', 'vrbo-card-carousel', ...],
  },
};
```

### Raw project IDs (`?projects=`)

```
/?projects=factset-fusion-foundry,vrbo-card-carousel,personal-dotz
```

A comma-separated list of project IDs. No blurb is shown — just the matching projects. Useful for one-off shares without needing to add a named collection.

### Resetting

When a curated view is active, a **"View Full Portfolio"** banner appears at the top with a button to restore the full site.

## Project IDs

Every project has a unique human-readable ID in the format `[company]-[descriptive-slug]`. These are the values used in `?projects=` params and `collections.js` entries.

**FactSet:** `factset-fusion-foundry`, `factset-semantic-color-tokens`, `factset-mobile-components`, `factset-ux-labs`, `factset-fusion-ux-playground`, `factset-fusion-mobile-playground`, `factset-dashboard-layouts`, `factset-doc-search-filters`, `factset-mobile-app`, `factset-under-the-hood`

**Indeed:** `indeed-jelboms-playground`, `indeed-my-jobs-playground`, `indeed-buildquest`, `indeed-apply`, `indeed-resumebuilder-autofill`, `indeed-applystart`

**Vrbo:** `vrbo-carousel-motion-study`, `vrbo-card-carousel`, `vrbo-drawer`, `vrbo-guest-selector`, `vrbo-hcom-property-details`, `vrbo-image-carousel`, `vrbo-inline-message`, `vrbo-modal-enhancements`, `vrbo-personalized-homepage`, `vrbo-photo-manager`, `vrbo-prod-demos`, `vrbo-search-filters-study`, `vrbo-single-image-carousel`, `vrbo-swipeable-carousel`, `vrbo-vertical-image-carousel`, `vrbo-tripboards-polling`, `vrbo-tripboards-proto`, `vrbo-northstar-experience`, `vrbo-eg-console`, `vrbo-eg-xp`, `vrbo-processes-outcomes`, `vrbo-spx-collab`, `vrbo-ds-guest-selector`

**Pearson:** `pearson-abbi`, `pearson-function-graphing`, `pearson-testnav-ios`

**Springbox:** `springbox-interactive-rfp`, `springbox-dell-swag-ball`, `springbox-nascar`, `springbox-lg-steam-particles`, `springbox-scion-configurator`, `springbox-scion-alt`, `springbox-magical-dash`, `springbox-superview`, `springbox-callaway`, `springbox-paypal-safety`, `springbox-dell-transposer`

**Enspire:** `enspire-k12-science`, `enspire-pnc-trivia`, `enspire-alms`, `enspire-pearson-templates`, `enspire-sap`

**Mental Modeler:** `mentalmodeler-tool`, `mentalmodeler-promo`, `mentalmodeler-umasslab`, `mentalmodeler-focos`

**Drop Party:** `dropparty-homepage`, `dropparty-components`

**Personal (JS):** `personal-dotz`, `personal-factorthat`, `personal-friday-night-jamz`, `personal-countdown`, `personal-mike-parsons`, `personal-doggie-search`, `personal-beats`

**Personal (Flash/AS):** `freelance-suddenly-almost-nearly`, `freelance-ut-wayfinder`, `freelance-jonnybomb`, `freelance-texas-weather`, `freelance-wedding`, `freelance-billiejo-jonathan`
