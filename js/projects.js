/*
  ──────────────────────────────────────────────────────────────────
  HOW TO ADD OR EDIT A PROJECT
  ──────────────────────────────────────────────────────────────────

  Each object in the array below is one project section on the page.
  The order here = the order on the page. Layouts cycle 1→8
  automatically, or you can pin a specific layout (see below).

  Required fields
  ───────────────
  title   — project name shown on the site (set null to hide)
  accent  — a hex colour that represents this project (see PALETTE.md)
  hero    — path to the main photo shown in the section
  details — array of 2 photo paths for the lightbox
  gallery — array of any additional photos for the lightbox (can be [])

  Optional field
  ──────────────
  layout  — force a specific preset: 'layout-1' … 'layout-8'
             If omitted, the site assigns layouts in order automatically.
             Example: layout: 'layout-7'   ← stakeholder-approved preset

  NOTE: All hero paths currently point to project-1's image so every
  layout preset is visible while the full photo library is being
  finalised. Replace each hero path with the real image when ready.
  ──────────────────────────────────────────────────────────────────
*/

const HERO_TEMP = 'images/project-1/gallery/hero.jpeg';

const projects = [

  /* ── Project 1 — Vila Kikinou ──────────────────────────────── */
  {
    title:   'Vila Kikinou',
    accent:  '#5b7d9c',
    hero:    'images/project-1/gallery/hero.jpeg',                        /* TODO: restore 'images/project-1/gallery/hero.jpeg' */
    details: [
      'images/project-1/gallery/detail-1.jpeg',
      'images/project-1/gallery/detail-2.jpeg',
    ],
    gallery: []
  },

  /* ── Project 2 — Sf Gheorghe ───────────────────────────────── */
  {
    title:   'Sf Gheorghe',
    accent:  '#0f1a1b',
    hero:    "images/project-2/hero.jpeg",                        /* TODO: restore 'images/project-2/gallery/hero.jpeg' */
    details: [

    ],
    gallery: [
      
    ],
  },

  /* ── Project 3 — Casa V ────────────────────────────────────── */
  {
    title:   'Pensiunea H',
    accent:  '#5e2609',
    hero:    'images/project-3/hero.jpeg',                        /* TODO: restore 'images/project-3/hero.png' */
    details: [
      'images/project-3/detail-1.jpeg',
      'images/project-3/detail-2.jpeg',
    ],
    gallery: [
      
    ],
  },

  /* ── Project 4 — Casa LMMMI ────────────────────────────────── */
  {
    title:   'Casa LMMMI',
    accent:  '#99153d',
    hero:    'images/project-4/hero.jpeg',                        /* TODO: restore 'images/project-4/hero.jpeg' */
    details: [
      'images/project-4/detail-1.jpeg',
      'images/project-4/detail-2.jpeg',
    ],
    gallery: [
      
    ],
  },

  /* ── Placeholder 5 — fill layout-5 slot ───────────────────── */
  /* Replace with real project when ready                         */
  {
    title:   'Casa A',
    accent:  '#1A5C9B',
    hero:    'images/project-5/hero.jpeg',
    details: [], gallery: [],
  },

  /* ── Placeholder 6 — fill layout-6 slot ───────────────────── */
  {
    title:   'Casa R',
    accent:  '#7A3B1E',
    hero:    'images/project-6/hero.jpeg',
    details: [], gallery: [],
  },

  /* ── Placeholder 7 — fill layout-7 slot (Vila Serena style) ── */
  /* layout-7 is the stakeholder-approved preset                   */
  {
    title:   'Vila M',
    accent:  '#2D6A4F',
    layout:  'layout-7',
    hero:    'images/project-8/hero.jpeg',
    details: [], gallery: [],
  },
  {
    title:   'Vila M',
    accent:  '#2D6A4F',
    layout:  'layout-7',
    hero:    'images/project-7/hero.jpeg',
    details: [], gallery: [],
  },


  /* ── Placeholder 8 — fill layout-8 slot ───────────────────── */
  {
    title:   'Casa T',
    accent:  '#4A235A',
    hero:    'images/project-9/hero.jpeg',
    details: [], gallery: [],
  },

  {
    title:   'Casa T',
    accent:  '#4A235A',
    hero:    'images/project-10/hero.jpeg',
    details: [], gallery: [],
  },
  {
    title:   'Casa T',
    accent:  '#4A235A',
    hero:    'images/project-11/hero.jpeg',
    details: [], gallery: [],
  },
  {
    title:   'Casa M',
    accent:  '#b75bdb',
    layout:  'layout-7',
    hero:    'images/project-12/hero3.jpeg',
    details: [], gallery: [],
  },
  {
    title:   'Casa T',
    accent:  '#4A235A',
    hero:    'images/project-11/hero.jpeg',
    details: [], gallery: [],
  }
  /* ── ADD NEW PROJECTS BELOW THIS LINE ──────────────────────────
  {
    title:   'Project Name',
    accent:  '#HEXCOLOR',      // pick from PALETTE.md
    hero:    'images/project-N/hero.jpeg',
    details: [
      'images/project-N/detail-1.jpeg',
      'images/project-N/detail-2.jpeg',
    ],
    gallery: [
      'images/project-N/photo-1.jpeg',
    ],
    // layout: 'layout-7',    // optional: pin to a specific preset
  },
  ─────────────────────────────────────────────────────────────── */

];
