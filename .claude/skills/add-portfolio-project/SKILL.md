---
name: add-portfolio-project
description: Add or update a project entry in the portfolio data files. Use when the user wants to add a new project to any section (FactSet, Indeed, Vrbo, Mental Modeler, Pearson, etc.), fill in details on an existing stub entry, or update content like descriptions, images, or links for an existing project.
---

# Add Portfolio Project

## Section → File Map

| Section | File |
|---------|------|
| FactSet | `src/data/factset.js` |
| Indeed | `src/data/indeed.js` |
| Vrbo / EG | `src/data/vrbo.js` |
| Mental Modeler | `src/data/mentalmodeler.js` |
| Pearson | `src/data/pearson.js` |
| Drop Party | `src/data/dropparty.js` |
| Jonnybomb JS | `src/data/jonnybomb_js.js` |
| Jonnybomb AS | `src/data/jonnybomb_as.js` |
| Springbox / Enspire | `src/data/prev.js` |

## Process

### 1. Identify the target

Ask which section/company and whether this is:
- **Updating a stub** — entry already exists with empty fields to fill in
- **Adding new** — a brand new entry to insert

Read the target data file to see existing entries and confirm the export pattern used (it varies slightly per file).

### 2. Gather project details

Collect all fields in as few questions as possible. Mark clearly what's optional:

| Field | Required | Notes |
|-------|----------|-------|
| Title | Yes | Derives `id` (lowercase, spaces → hyphens) |
| Description | No | HTML strings OK (`<br/>`, `<i>`, `<b>`) |
| Images | No | URIs relative to `public/images/` — e.g. `factset/my-shot.png`. Remind user to place files in `public/images/<section>/` before referencing them. |
| Videos | No | Full YouTube or Vimeo URLs |
| Links | No | Pairs of (label, url); label can be empty string |
| Sizes | Yes | `'desktop'`, `'mobile'`, or both |
| imageBgColor | No | Hex string for card background color |

### 3. Write the entry

Use this standard format:

```js
{
    id: 'project-title-slug',
    title: 'Project Title',
    tags: ['section-tag'],
    description: '',
    images: [
        { label: '', id: '', type: 'image', uri: 'section/filename.ext' }
    ],
    videos: [{ url: 'https://youtube.com/watch?v=...' }],
    links: [{ label: 'View demo', id: '', url: 'https://...' }],
    sizes: ['desktop'],
    // imageBgColor: '#f1f9fd',
}
```

**Format notes:**
- Omit empty arrays (`videos`, `links`, `images`) when there are no entries — keep stubs minimal
- Match the existing file's field naming: some files use `descr` not `description`, some use `assets` not `images`. When in doubt use `images`/`description` — `transformProject()` normalizes both
- `tags` must match the section tag already in use (check existing entries in the file)

### 4. Insert or update

- **Stub update:** Replace the matching entry object in-place using the Edit tool
- **New entry:** Append to the raw array before the export/return statement. Never modify the export line — it uses `filterAndSort` and `transformProject` from `src/data/util.js` and must stay intact

### 5. Verify

Run `npm run lint` and confirm zero warnings/errors before reporting the task done.
