/*
  ──────────────────────────────────────────────────────────────────
  HOW TO ADD A NEW PROJECT
  ──────────────────────────────────────────────────────────────────

  1. Create a folder:  images/project-N/
     (replace N with the next number, e.g. project-5)

  2. Put these files inside that folder:
       hero.jpeg       — the full-screen background photo
       detail-1.jpeg   — first photo shown on the page
       detail-2.jpeg   — second photo shown on the page
       + any other photos you want in the gallery

  3. Copy one of the project objects below, paste it at the end
     of the array (before the closing ] ), and fill in:
       title   — project name shown on the site
       accent  — a hex colour that represents this project
       hero    — path to the hero image
       details — paths to the two detail photos (array of 2)
       gallery — paths to ALL other photos (array, can be empty [])

  4. Save the file. The site updates automatically — no HTML editing needed.
  ──────────────────────────────────────────────────────────────────
*/

const projects = [

  /* ── Project 1 — Vila Kikinou ──────────────────────────────── */
  {
    title:   'Vila Kikinou',
    accent:  '#1A9B96',
    hero:    'images/project-1/gallery/hero.jpeg',
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
    hero:    'images/project-2/gallery/hero.jpeg',
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
    hero:    'images/project-3/hero.png',
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
    hero:    'images/project-4/hero.jpeg',
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

  /* ── ADD NEW PROJECTS BELOW THIS LINE ──────────────────────────
  {
    title:   'Project Name',
    accent:  '#HEXCOLOR',
    hero:    'images/project-5/hero.jpeg',
    details: [
      'images/project-5/detail-1.jpeg',
      'images/project-5/detail-2.jpeg',
    ],
    gallery: [
      'images/project-5/photo-1.jpeg',
      'images/project-5/photo-2.jpeg',
    ],
  },
  ─────────────────────────────────────────────────────────────── */

];
