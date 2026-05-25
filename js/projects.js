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

  Optional fields
  ───────────────
  layout   — force a specific preset: 'layout-1' … 'layout-8'
              If omitted, the site assigns layouts in order automatically.
              Example: layout: 'layout-7'   ← stakeholder-approved preset

  portrait — set true when the hero photo is vertical / portrait-oriented.
              Switches rendering to object-fit:contain so the full image
              shows; the accent gradient fills any exposed space around it.
              Example: portrait: true

  NOTE: All hero paths currently point to project-1's image so every
  layout preset is visible while the full photo library is being
  finalised. Replace each hero path with the real image when ready.
  ──────────────────────────────────────────────────────────────────
*/

const HERO_TEMP = 'images/project-1/gallery/hero.jpeg';

const projects = [

  /* ── Project 1 — Vila Kairos ───────────────────────────────── */
  {
    title:   'Vila Kairos',
    accent:  '#5b7d9c',
    hero:    'images/project-1/gallery/hero.jpeg',
    details: [],
    gallery: [
      'galeryImages/Kairos/WhatsApp Image 2026-05-07 at 21.48.05.jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.18.56 (1).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.18.56.jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.18.57 (1).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.18.57 (2).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.18.57 (3).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.18.57.jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.18.58 (1).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.18.58 (2).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.18.58 (3).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.18.58 (4).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.18.58.jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.18.59 (1).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.18.59 (2).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.18.59 (3).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.18.59 (4).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.18.59.jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.00 (1).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.00 (2).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.00 (3).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.00 (4).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.00.jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.01 (1).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.01 (2).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.01 (3).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.01.jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.02 (1).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.02 (2).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.02 (3).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.02 (4).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.02 (5).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.02 (6).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.02 (7).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.02.jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.03 (1).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.03 (2).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.03 (3).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.03 (4).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.03.jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.04 (1).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.04 (2).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.04 (3).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.04 (4).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.04 (5).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.04.jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.05 (1).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.05 (2).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.05 (3).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.05.jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.06 (1).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.06 (2).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.06 (3).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.06 (4).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.06.jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.07 (1).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.07 (2).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.07 (3).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.07 (4).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.07.jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.08 (1).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.08 (2).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.08 (3).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.08 (4).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.08 (5).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.08 (6).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.08 (7).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.08.jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.09 (1).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.09 (2).jpeg',
      'galeryImages/Kairos/WhatsApp Image 2026-05-24 at 15.19.09.jpeg',
    ],
  },
  /* ── Project 1 — Vila Kairos ───────────────────────────────── */
  {
    title:   'Vila Kikinou',
    accent:  '#bd486b',
    hero:    'images/project-4/hero.jpeg',
    details: [],
    gallery: [
      
      'galeryImages/Kikinou/WhatsApp Image 2026-05-07 at 21.44.36 (1).jpeg',
      'galeryImages/Kikinou/WhatsApp Image 2026-05-07 at 21.44.36 (10).jpeg',
      'galeryImages/Kikinou/WhatsApp Image 2026-05-07 at 21.44.36 (3).jpeg',
      'galeryImages/Kikinou/blabla.jpeg',
      'galeryImages/Kikinou/WhatsApp Image 2026-05-07 at 21.44.36 (4).jpeg',
      'galeryImages/Kikinou/WhatsApp Image 2026-05-07 at 21.44.36 (5).jpeg',
      'galeryImages/Kikinou/WhatsApp Image 2026-05-07 at 21.44.36 (6).jpeg',
      'galeryImages/Kikinou/WhatsApp Image 2026-05-07 at 21.44.36 (7).jpeg',
      'galeryImages/Kikinou/WhatsApp Image 2026-05-07 at 21.44.36 (8).jpeg',
      'galeryImages/Kikinou/WhatsApp Image 2026-05-07 at 21.44.36 (9).jpeg',
      'galeryImages/Kikinou/WhatsApp Image 2026-05-07 at 21.44.36.jpeg',
      'galeryImages/Kikinou/WhatsApp Image 2026-05-07 at 21.44.37 (1).jpeg',
      'galeryImages/Kikinou/WhatsApp Image 2026-05-07 at 21.44.37 (2).jpeg',
      'galeryImages/Kikinou/WhatsApp Image 2026-05-07 at 21.44.37 (3).jpeg',
      'galeryImages/Kikinou/WhatsApp Image 2026-05-07 at 21.44.37 (4).jpeg',
      'galeryImages/Kikinou/WhatsApp Image 2026-05-07 at 21.44.37.jpeg',
    ],
  },
  /* ── Project 1 — Vila Kairos ───────────────────────────────── */
  {
    title:   'Casa T',
    accent:  '#5c2951',
        layout:  'layout-4',
    hero:    'images/project-11/hero.jpg',
    details: [ ],
    gallery: [],
  },

  /* ── Vila Mirabello ────────────────────────────────────────── */
  {
    title:   'Vila Mirabello',
    accent:  '#0e2e69',
    layout:  'layout-7',
    hero:    'images/project-12/hero.jpg',
    details: [],
    gallery: [
      'galeryImages/Mirabello/0000 carefull.jpg',
      'galeryImages/Mirabello/00000careful again.jpg',
      'galeryImages/Mirabello/010-min.jpg',
      'galeryImages/Mirabello/011-min.jpg',
      'galeryImages/Mirabello/012-min(1).jpg',
      'galeryImages/Mirabello/013-min.jpg',
      'galeryImages/Mirabello/021-min.jpg',
      'galeryImages/Mirabello/032-min.jpg',
      'galeryImages/Mirabello/036-min.jpg',
      'galeryImages/Mirabello/038-min.jpg',
      'galeryImages/Mirabello/105-min.jpg',
      'galeryImages/Mirabello/114-min.jpg',
      'galeryImages/Mirabello/125-min.jpg',
      'galeryImages/Mirabello/132-min.jpg',
    ],
  },
  /* ── Project 2 — Vila B ────────────────────────────────────── */
  {
    title:   'VIla B',
    accent:  '#0f1a1b',
    portrait: true,
    hero:    'images/project-2/hero.jpeg',
    details: [],
    gallery: [
      'galeryImages/vila B/WhatsApp Image 2026-05-07 at 21.56.49.jpeg',
      'galeryImages/vila B/WhatsApp Image 2026-05-07 at 21.56.50.jpeg',
    ],
  },
    {
    title:   'Vila LMMMI',
    accent:  '#b31c1c',
    layout:  'layout-7',
    hero:    'images/project-10/hero.jpeg',
    details: [],
    gallery: [
      'galeryImages/vila LMMMI/1.jpeg',
      'galeryImages/vila LMMMI/2.jpeg',
      'galeryImages/vila LMMMI/3.jpeg',
      'galeryImages/vila LMMMI/4.jpeg',
      'galeryImages/vila LMMMI/hero.jpeg',
      'galeryImages/vila LMMMI/WhatsApp Image 2026-05-06 at 21.56.30.jpeg',
      'galeryImages/vila LMMMI/WhatsApp Image 2026-05-06 at 21.58.15 (1).jpeg',
      'galeryImages/vila LMMMI/WhatsApp Image 2026-05-06 at 21.58.15 (2).jpeg',
      'galeryImages/vila LMMMI/WhatsApp Image 2026-05-06 at 21.58.15 (3).jpeg',
      'galeryImages/vila LMMMI/WhatsApp Image 2026-05-06 at 21.58.15 (4).jpeg',
      'galeryImages/vila LMMMI/WhatsApp Image 2026-05-06 at 21.59.51 (1).jpeg',
      'galeryImages/vila LMMMI/WhatsApp Image 2026-05-06 at 21.59.51 (2).jpeg',
      'galeryImages/vila LMMMI/WhatsApp Image 2026-05-06 at 21.59.51 (3).jpeg',
      'galeryImages/vila LMMMI/WhatsApp Image 2026-05-06 at 21.59.51 (4).jpeg',
      'galeryImages/vila LMMMI/WhatsApp Image 2026-05-06 at 21.59.51.jpeg',
      'galeryImages/vila LMMMI/WhatsApp Image 2026-05-06 at 22.01.54 (1).jpeg',
      'galeryImages/vila LMMMI/WhatsApp Image 2026-05-06 at 22.01.54 (2).jpeg',
      'galeryImages/vila LMMMI/WhatsApp Image 2026-05-06 at 22.01.54 (3).jpeg',
      'galeryImages/vila LMMMI/WhatsApp Image 2026-05-06 at 22.01.54 (4).jpeg',
      'galeryImages/vila LMMMI/WhatsApp Image 2026-05-06 at 22.01.54 (5).jpeg',
      'galeryImages/vila LMMMI/WhatsApp Image 2026-05-06 at 22.01.54 (6).jpeg',
      'galeryImages/vila LMMMI/WhatsApp Image 2026-05-06 at 22.01.54 (7).jpeg',
      'galeryImages/vila LMMMI/WhatsApp Image 2026-05-06 at 22.01.54 (8).jpeg',
      'galeryImages/vila LMMMI/WhatsApp Image 2026-05-06 at 22.01.54.jpeg',
      'galeryImages/vila LMMMI/WhatsApp Image 2026-05-06 at 22.11.24.jpeg',
    ],
  },

  /* ── Project 3 — Pensiunea H ───────────────────────────────── */
  {
    title:   'Pensiunea H',
    accent:  '#5e2609',
    hero:    'images/project-3/hero.jpeg',
    details: [],
    gallery: [

      'galeryImages/pensiunea H/WhatsApp Image 2026-05-07 at 21.55.22 (2).jpeg',
      'galeryImages/pensiunea H/WhatsApp Image 2026-05-07 at 21.55.22.jpeg',
      'galeryImages/pensiunea H/WhatsApp Image 2026-05-07 at 21.55.50 (1).jpeg',
      'galeryImages/pensiunea H/WhatsApp Image 2026-05-07 at 21.55.50 (2).jpeg',
      'galeryImages/pensiunea H/WhatsApp Image 2026-05-07 at 21.55.50 (3).jpeg',
      'galeryImages/pensiunea H/WhatsApp Image 2026-05-07 at 21.55.50.jpeg',
      'galeryImages/pensiunea H/WhatsApp Image 2026-05-07 at 21.55.51 (1).jpeg',
      'galeryImages/pensiunea H/WhatsApp Image 2026-05-07 at 21.55.22 (1).jpeg',
      'galeryImages/pensiunea H/WhatsApp Image 2026-05-07 at 21.55.51.jpeg',
      'galeryImages/pensiunea H/WhatsApp Image 2026-05-07 at 21.57.54 (1).jpeg',
      'galeryImages/pensiunea H/WhatsApp Image 2026-05-07 at 21.57.54 (2).jpeg',
      'galeryImages/pensiunea H/WhatsApp Image 2026-05-07 at 21.57.54 (3).jpeg',
      'galeryImages/pensiunea H/WhatsApp Image 2026-05-07 at 21.57.54 (4).jpeg',
      'galeryImages/pensiunea H/WhatsApp Image 2026-05-07 at 21.57.54.jpeg',
      'galeryImages/pensiunea H/WhatsApp Image 2026-05-07 at 21.57.55 (1).jpeg',
      'galeryImages/pensiunea H/WhatsApp Image 2026-05-07 at 21.57.55.jpeg',
    ],
  },



  /* ── Project 5 — Tree House Cosoba ────────────────────────── */
  {
    title:   'Tree House Cosoba',
    accent:  '#449121',
        layout:  'layout-4',
    hero:    'images/project-5/hero.jpeg',
    details: [],
    gallery: [
      'galeryImages/Tree House/WhatsApp Image 2026-05-07 at 21.35.14 (2).jpeg',
      'galeryImages/Tree House/WhatsApp Image 2026-05-07 at 21.35.14 (3).jpeg',
      'galeryImages/Tree House/WhatsApp Image 2026-05-07 at 21.35.14 (4).jpeg',
      'galeryImages/Tree House/WhatsApp Image 2026-05-07 at 21.35.14.jpeg',
      'galeryImages/Tree House/WhatsApp Image 2026-05-07 at 21.52.31 (1).jpeg',
      'galeryImages/Tree House/WhatsApp Image 2026-05-07 at 21.52.31 (2).jpeg',
      'galeryImages/Tree House/WhatsApp Image 2026-05-07 at 21.52.31 (3).jpeg',
      'galeryImages/Tree House/WhatsApp Image 2026-05-07 at 21.52.31 (4).jpeg',
      'galeryImages/Tree House/WhatsApp Image 2026-05-07 at 21.52.31 (5).jpeg',
      'galeryImages/Tree House/WhatsApp Image 2026-05-07 at 21.52.31.jpeg',
    ],
  },

  /* ── Project 6 — Trei Case de Piatra ──────────────────────── */
  {
    title:   'Trei Case de Piatra',
    accent:  '#f5c670',
    hero:    'images/project-6/hero.jpeg',
    details: [],
    gallery: [
      'galeryImages/3 case de piatra/WhatsApp Image 2026-05-06 at 22.08.09 (1).jpeg',
      'galeryImages/3 case de piatra/WhatsApp Image 2026-05-06 at 22.08.09 (2).jpeg',
      'galeryImages/3 case de piatra/WhatsApp Image 2026-05-06 at 22.08.09 (3).jpeg',
      'galeryImages/3 case de piatra/WhatsApp Image 2026-05-06 at 22.08.09 (4).jpeg',
      'galeryImages/3 case de piatra/WhatsApp Image 2026-05-06 at 22.08.09.jpeg',
      'galeryImages/3 case de piatra/WhatsApp Image 2026-05-06 at 22.08.10 (1).jpeg',
      'galeryImages/3 case de piatra/WhatsApp Image 2026-05-06 at 22.08.10 (2).jpeg',
      'galeryImages/3 case de piatra/WhatsApp Image 2026-05-06 at 22.08.10 (3).jpeg',
      'galeryImages/3 case de piatra/WhatsApp Image 2026-05-06 at 22.08.10 (4).jpeg',
      'galeryImages/3 case de piatra/WhatsApp Image 2026-05-06 at 22.08.10 (5).jpeg',
      'galeryImages/3 case de piatra/WhatsApp Image 2026-05-06 at 22.08.10 (6).jpeg',
      'galeryImages/3 case de piatra/WhatsApp Image 2026-05-06 at 22.08.10 (7).jpeg',
      'galeryImages/3 case de piatra/WhatsApp Image 2026-05-06 at 22.08.10 (8).jpeg',
      'galeryImages/3 case de piatra/WhatsApp Image 2026-05-06 at 22.08.10 (9).jpeg',
      'galeryImages/3 case de piatra/WhatsApp Image 2026-05-06 at 22.08.10.jpeg',
      'galeryImages/3 case de piatra/WhatsApp Image 2026-05-07 at 21.42.50 (1).jpeg',
      'galeryImages/3 case de piatra/WhatsApp Image 2026-05-07 at 21.42.50.jpeg',
    ],
  },

  /* ── Project 7 — Vila L ────────────────────────────────────── */
  {
    title:   'Vila L',
    accent:  '#1d2c0c',
    layout:  'layout-5',
    hero:    'images/project-7/hero.jpeg',
    details: [],
    gallery: [
      'galeryImages/vila L/WhatsApp Image 2026-05-06 at 22.03.09 (1).jpeg',
      'galeryImages/vila L/WhatsApp Image 2026-05-06 at 22.03.09 (2).jpeg',
      'galeryImages/vila L/WhatsApp Image 2026-05-06 at 22.03.09.jpeg',
      'galeryImages/vila L/WhatsApp Image 2026-05-06 at 22.06.10 (1).jpeg',
      'galeryImages/vila L/WhatsApp Image 2026-05-06 at 22.06.10 (2).jpeg',
      'galeryImages/vila L/WhatsApp Image 2026-05-06 at 22.06.10 (3).jpeg',
      'galeryImages/vila L/WhatsApp Image 2026-05-06 at 22.06.10 (4).jpeg',
      'galeryImages/vila L/WhatsApp Image 2026-05-06 at 22.06.10 (5).jpeg',
      'galeryImages/vila L/WhatsApp Image 2026-05-06 at 22.06.10 (6).jpeg',
      'galeryImages/vila L/WhatsApp Image 2026-05-06 at 22.06.10.jpeg',
      'galeryImages/vila L/WhatsApp Image 2026-05-07 at 21.54.23.jpeg',
    ],
  },

  /* ── Project 8 — Taverna Filos ─────────────────────────────── */
  {
    title:   'Taverna Filos',
    accent:  '#5ac8f3',
    layout:  'layout-7',
    hero:    'images/project-8/hero.jpeg',
    details: [],
    gallery: [
      'galeryImages/Filos/WhatsApp Image 2026-05-06 at 22.26.07 (1).jpeg',
      'galeryImages/Filos/WhatsApp Image 2026-05-06 at 22.26.07 (2).jpeg',
      'galeryImages/Filos/WhatsApp Image 2026-05-06 at 22.26.07.jpeg',
      'galeryImages/Filos/WhatsApp Image 2026-05-06 at 22.26.08 (1).jpeg',
      'galeryImages/Filos/WhatsApp Image 2026-05-06 at 22.26.08 (10).jpeg',
      'galeryImages/Filos/WhatsApp Image 2026-05-06 at 22.26.08 (2).jpeg',
      'galeryImages/Filos/WhatsApp Image 2026-05-06 at 22.26.08 (3).jpeg',
      'galeryImages/Filos/WhatsApp Image 2026-05-06 at 22.26.08 (4).jpeg',
      'galeryImages/Filos/WhatsApp Image 2026-05-06 at 22.26.08 (5).jpeg',
      'galeryImages/Filos/WhatsApp Image 2026-05-06 at 22.26.08 (6).jpeg',
      'galeryImages/Filos/WhatsApp Image 2026-05-06 at 22.26.08 (7).jpeg',
      'galeryImages/Filos/WhatsApp Image 2026-05-06 at 22.26.08 (8).jpeg',
      'galeryImages/Filos/WhatsApp Image 2026-05-06 at 22.26.08 (9).jpeg',
      'galeryImages/Filos/WhatsApp Image 2026-05-06 at 22.26.08.jpeg',
    ],
  },

  /* ── Project 9 — Pensiunea Sf Gheorghe ────────────────────── */
  {
    title:   'Pensiunea Sf Gheorhe',
    accent:  '#92652a',
        layout:  'layout-4',
    hero:    'images/project-9/hero.jpeg',
    details: [],
    gallery: [
      'galeryImages/pensiune Sf. Gheorghe/1.jpeg',
      'galeryImages/pensiune Sf. Gheorghe/2.jpeg',
      'galeryImages/pensiune Sf. Gheorghe/3.jpeg',
      'galeryImages/pensiune Sf. Gheorghe/4.jpeg',
      'galeryImages/pensiune Sf. Gheorghe/5.jpeg',
      'galeryImages/pensiune Sf. Gheorghe/6.jpeg',
      'galeryImages/pensiune Sf. Gheorghe/7.jpeg',
      'galeryImages/pensiune Sf. Gheorghe/9.jpeg',
      'galeryImages/pensiune Sf. Gheorghe/WhatsApp Image 2026-05-06 at 18.52.07.jpeg',
    ],
  },

  /* ── Project 10 — Vila LMMMI ───────────────────────────────── */




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
