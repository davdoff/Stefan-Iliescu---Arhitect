# Stefan Iliescu — Arhitect · Site Guide

Everything you need to update the site yourself. No build tools required — just edit and save.

---

## Files overview

| File | What it does |
|---|---|
| `index.html` | Page skeleton — contact details live here |
| `css/style.css` | All visual styles |
| `js/projects.js` | **Your main control panel** — all project data |
| `js/main.js` | Builds project sections from `projects.js` (rarely touched) |
| `PALETTE.md` | Colour reference for accent hex codes |
| `LAYOUTS.md` | Architecture rules for the layout system |
| `presets-final.md` | Exact coordinates for each of the 8 layout presets |

---

## How to add a new project

1. Create a folder: `images/project-N/` (next number after the last one)
2. Put your images inside: `hero.jpeg`, `detail-1.jpeg`, `detail-2.jpeg`, plus any extra gallery photos
3. Open `js/projects.js` and copy this block, filling in your values:

```js
{
  title:   'Project Name',
  accent:  '#1A9B96',          // pick a hex from PALETTE.md
  hero:    'images/project-N/hero.jpeg',
  details: [
    'images/project-N/detail-1.jpeg',
    'images/project-N/detail-2.jpeg',
  ],
  gallery: [
    'images/project-N/photo-3.jpeg',
    'images/project-N/photo-4.jpeg',
  ],
},
```

4. Paste it above the `ADD NEW PROJECTS BELOW THIS LINE` comment. The site updates automatically.

---

## How to change a project's layout

By default, projects are assigned layout presets **in order** (project 1 → layout-1, project 2 → layout-2, … cycling back to layout-1 after layout-8).

To **pin a project to a specific preset**, add a `layout` field:

```js
{
  title:  'Vila Serena',
  accent: '#2D6A4F',
  layout: 'layout-7',          // ← forces this preset regardless of order
  hero:   'images/project-5/hero.jpeg',
  ...
}
```

Layout-7 is the stakeholder-approved preset (image fills the right side, title sits in the gradient colour band on the left).

### The 8 presets at a glance

| Preset | Image position | Title corner | Character |
|---|---|---|---|
| layout-1 | Top-left 65% × 68% | Bottom-right | Dominant image, colour bottom-right |
| layout-2 | Right, full height | Top-left | Colour band on left |
| layout-3 | Centred, floating | Top-right | Colour wraps all sides |
| layout-4 | Left, full height | Bottom-right | Colour band on right |
| layout-5 | Left/centre, tall | Top-right | Colour bleeds right |
| layout-6 | Bottom-right, large | Top-right | Colour fills top-left |
| layout-7 | Right, full height | Bottom-left | **Stakeholder approved** |
| layout-8 | Right, offset centre | Top-left | Colour fills left + top |

---

## How to update a project's accent colour

Find the project in `js/projects.js` and change its `accent` value:

```js
accent: '#1A9B96',   // ← replace with any hex from PALETTE.md
```

The colour is used as the gradient base for the entire section background. See `PALETTE.md` for tested options.

---

## How to swap a hero image

Find the project and change its `hero` path:

```js
hero: 'images/project-1/gallery/hero.jpeg',
```

The image is always cropped to fill the layout block (`object-fit: cover`). Landscape photos generally work best. If a portrait photo crops badly, consider using `object-position` (ask a developer to add it to the `<img>` in `main.js`).

> **Current state:** all heroes temporarily point to project-1's image (`HERO_TEMP`) while layouts are being finalised. Each project has a `/* TODO: restore */` comment next to its hero line — replace those paths when the real images are ready.

---

## How to update contact information

Open `index.html` and find the `#contact` section near the bottom:

```html
<a href="mailto:stefan.iliescu@arhitect.ro" ...>stefan.iliescu@arhitect.ro</a>
<a href="tel:+40700000000" ...>+40 700 000 000</a>
<span ...>Cluj-Napoca, România</span>
```

Edit the `href` value **and** the visible text between the tags.

---

## How to reorder projects

The order of objects in the `projects` array in `js/projects.js` is the order they appear on the page. Drag-and-drop the objects to reorder. If a project has no `layout:` field pinned, its preset will change as its position changes — that is usually fine and intentional.

---

## How to remove a placeholder

The 4 placeholders (Proiect 5–8) at the bottom of `projects.js` have `title: null` and empty galleries. Replace one by copying a real project block over it, or delete the placeholder object entirely.

---

## Deploying changes

The site has no build step. Edit → save → push to GitHub. Changes go live immediately if the repo is connected to a hosting service (Netlify, Vercel, GitHub Pages, etc.).
