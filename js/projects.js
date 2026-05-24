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
    accent:  '#1A9B96',
    hero:    HERO_TEMP,                        /* TODO: restore 'images/project-1/gallery/hero.jpeg' */
    details: [
      'images/project-1/gallery/detail-1.jpeg',
      'images/project-1/gallery/detail-2.jpeg',
    ],
    gallery: [
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.04 (1).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.04 (2).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.04 (3).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.04 (4).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.04 (5).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.04 (6).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.04.jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.05 (1).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.05 (2).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.05 (3).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.05 (4).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.05 (5).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.05 (6).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.05 (7).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.05.jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.06 (1).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.06 (2).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.06 (3).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.06 (4).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.06 (5).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.06 (6).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.06 (7).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.06.jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.07 (1).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.07 (2).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.07 (3).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.07 (4).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.07 (5).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.07 (6).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.07 (7).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.07 (8).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.07 (9).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.07 (10).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.07.jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.08 (1).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.08 (2).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.08 (3).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.08 (4).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.08 (5).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.08 (6).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.08 (7).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.08.jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.09 (1).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.09 (2).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.09 (3).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.09 (4).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.09 (5).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.09 (6).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.09.jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.11 (1).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.11 (2).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.11 (3).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.11 (4).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.11 (5).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.11 (6).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.11 (7).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.11 (8).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.11 (9).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.11 (10).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.11 (11).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.11 (12).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.11 (13).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.11 (14).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.11.jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.12 (1).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.12 (2).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.12 (3).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.12.jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.13 (1).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.13 (2).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.13 (3).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.13 (4).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.13 (5).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.13 (6).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.13 (7).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.13 (8).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.13 (9).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.13.jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.14 (1).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.14 (2).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.14 (3).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.14 (4).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.14 (5).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.14 (6).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.14 (7).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.14 (8).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.14 (9).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.14 (10).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.14.jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.15 (1).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.15 (2).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.15 (3).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.15 (4).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.15 (5).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.15 (6).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.15 (7).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.15.jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.16 (1).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.16 (2).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.16 (3).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.16 (4).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.16 (5).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.16 (6).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.16 (7).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.16 (8).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.16 (9).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.16 (10).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.16.jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.17 (1).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.17 (2).jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.42.17.jpeg',
      'images/project-1/gallery/WhatsApp Image 2026-05-06 at 21.44.51.jpeg',
    ],
  },

  /* ── Project 2 — Sf Gheorghe ───────────────────────────────── */
  {
    title:   'Sf Gheorghe',
    accent:  '#5E5E2A',
    hero:    HERO_TEMP,                        /* TODO: restore 'images/project-2/gallery/hero.jpeg' */
    details: [
      'images/project-2/gallery/detail-1.jpeg',
      'images/project-2/gallery/detail-2.jpeg',
    ],
    gallery: [
      'images/project-2/gallery/WhatsApp Image 2026-05-06 at 21.54.39.jpeg',
      'images/project-2/gallery/WhatsApp Image 2026-05-06 at 21.56.30 (1).jpeg',
      'images/project-2/gallery/WhatsApp Image 2026-05-06 at 21.56.30 (2).jpeg',
      'images/project-2/gallery/WhatsApp Image 2026-05-06 at 21.56.30 (3).jpeg',
      'images/project-2/gallery/WhatsApp Image 2026-05-06 at 21.56.30 (4).jpeg',
      'images/project-2/gallery/WhatsApp Image 2026-05-06 at 21.56.30.jpeg',
      'images/project-2/gallery/WhatsApp Image 2026-05-06 at 21.58.15 (1).jpeg',
      'images/project-2/gallery/WhatsApp Image 2026-05-06 at 21.58.15 (2).jpeg',
      'images/project-2/gallery/WhatsApp Image 2026-05-06 at 21.58.15.jpeg',
      'images/project-2/gallery/WhatsApp Image 2026-05-06 at 21.59.51 (1).jpeg',
      'images/project-2/gallery/WhatsApp Image 2026-05-06 at 21.59.51 (2).jpeg',
      'images/project-2/gallery/WhatsApp Image 2026-05-06 at 21.59.51.jpeg',
      'images/project-2/gallery/WhatsApp Image 2026-05-06 at 22.01.54 (1).jpeg',
      'images/project-2/gallery/WhatsApp Image 2026-05-06 at 22.01.54 (2).jpeg',
      'images/project-2/gallery/WhatsApp Image 2026-05-06 at 22.01.54 (3).jpeg',
      'images/project-2/gallery/WhatsApp Image 2026-05-06 at 22.01.54.jpeg',
    ],
  },

  /* ── Project 3 — Casa V ────────────────────────────────────── */
  {
    title:   'Casa V',
    accent:  '#3B1558',
    hero:    HERO_TEMP,                        /* TODO: restore 'images/project-3/hero.png' */
    details: [
      'images/project-3/detail-1.jpeg',
      'images/project-3/detail-2.jpeg',
    ],
    gallery: [
      'images/project-3/WhatsApp Image 2026-05-06 at 21.46.11 (1).jpeg',
      'images/project-3/WhatsApp Image 2026-05-06 at 21.46.12.jpeg',
      'images/project-3/WhatsApp Image 2026-05-06 at 21.51.04 (1).jpeg',
      'images/project-3/WhatsApp Image 2026-05-06 at 21.51.04.jpeg',
    ],
  },

  /* ── Project 4 — Casa LMMMI ────────────────────────────────── */
  {
    title:   'Casa LMMMI',
    accent:  '#5C1228',
    hero:    HERO_TEMP,                        /* TODO: restore 'images/project-4/hero.jpeg' */
    details: [
      'images/project-4/detail-1.jpeg',
      'images/project-4/detail-2.jpeg',
    ],
    gallery: [
      'images/project-4/WhatsApp Image 2026-05-06 at 18.52.06.jpeg',
      'images/project-4/WhatsApp Image 2026-05-06 at 18.52.07 (2).jpeg',
      'images/project-4/WhatsApp Image 2026-05-06 at 18.52.07 (4).jpeg',
      'images/project-4/WhatsApp Image 2026-05-06 at 18.52.07 (5).jpeg',
      'images/project-4/WhatsApp Image 2026-05-06 at 18.52.07 (6).jpeg',
      'images/project-4/WhatsApp Image 2026-05-06 at 18.52.07 (8).jpeg',
      'images/project-4/WhatsApp Image 2026-05-06 at 18.52.07.jpeg',
      'images/project-4/WhatsApp Image 2026-05-06 at 18.53.45.jpeg',
    ],
  },

  /* ── Placeholder 5 — fill layout-5 slot ───────────────────── */
  /* Replace with real project when ready                         */
  {
    title:   null,
    accent:  '#1A5C9B',
    hero:    HERO_TEMP,
    details: [], gallery: [],
  },

  /* ── Placeholder 6 — fill layout-6 slot ───────────────────── */
  {
    title:   null,
    accent:  '#7A3B1E',
    hero:    HERO_TEMP,
    details: [], gallery: [],
  },

  /* ── Placeholder 7 — fill layout-7 slot (Vila Serena style) ── */
  /* layout-7 is the stakeholder-approved preset                   */
  {
    title:   null,
    accent:  '#2D6A4F',
    layout:  'layout-7',
    hero:    HERO_TEMP,
    details: [], gallery: [],
  },

  /* ── Placeholder 8 — fill layout-8 slot ───────────────────── */
  {
    title:   null,
    accent:  '#4A235A',
    hero:    HERO_TEMP,
    details: [], gallery: [],
  },

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
