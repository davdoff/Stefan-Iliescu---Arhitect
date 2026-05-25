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

  subtitle — short line shown below the title (location, year, typology, etc.)
              Omit the field entirely to show nothing.
              Example: subtitle: 'Santorini, Grecia · 2024'

  subtitleUrl — if provided, wraps the subtitle in a clickable link.
                Opens in a new tab. Requires subtitle to also be set.
                Example: subtitleUrl: 'https://www.instagram.com/p/EXAMPLE/'

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
    subtitle: "Fotografii de Alexandru Paul, Ceramica de Victoria Finala",
    hero:    'images/project-1/gallery/hero.jpeg',
    details: [],
    gallery: [
      'galeryImages/Kairos/Kairos_01.jpeg',
      'galeryImages/Kairos/Kairos_02.jpeg',
      'galeryImages/Kairos/Kairos_03.jpeg',
      'galeryImages/Kairos/Kairos_04.jpeg',
      'galeryImages/Kairos/Kairos_05.jpeg',
      'galeryImages/Kairos/Kairos_06.jpeg',
      'galeryImages/Kairos/Kairos_07.jpeg',
      'galeryImages/Kairos/Kairos_08.jpeg',
      'galeryImages/Kairos/Kairos_09.jpeg',
      'galeryImages/Kairos/Kairos_10.jpeg',
      'galeryImages/Kairos/Kairos_11.jpeg',
      'galeryImages/Kairos/Kairos_12.jpeg',
      'galeryImages/Kairos/Kairos_13.jpeg',
      'galeryImages/Kairos/Kairos_14.jpeg',
      'galeryImages/Kairos/Kairos_15.jpeg',
      'galeryImages/Kairos/Kairos_16.jpeg',
      'galeryImages/Kairos/Kairos_17.jpeg',
      'galeryImages/Kairos/Kairos_18.jpeg',
      'galeryImages/Kairos/Kairos_19.jpeg',
      'galeryImages/Kairos/Kairos_20.jpeg',
      'galeryImages/Kairos/Kairos_21.jpeg',
      'galeryImages/Kairos/Kairos_22.jpeg',
      'galeryImages/Kairos/Kairos_23.jpeg',
      'galeryImages/Kairos/Kairos_24.jpeg',
      'galeryImages/Kairos/Kairos_25.jpeg',
      'galeryImages/Kairos/Kairos_26.jpeg',
      'galeryImages/Kairos/Kairos_27.jpeg',
      'galeryImages/Kairos/Kairos_28.jpeg',
      'galeryImages/Kairos/Kairos_29.jpeg',
      'galeryImages/Kairos/Kairos_30.jpeg',
      'galeryImages/Kairos/Kairos_31.jpeg',
      'galeryImages/Kairos/Kairos_32.jpeg',
      'galeryImages/Kairos/Kairos_33.jpeg',
      'galeryImages/Kairos/Kairos_34.jpeg',
      'galeryImages/Kairos/Kairos_35.jpeg',
      'galeryImages/Kairos/Kairos_36.jpeg',
      'galeryImages/Kairos/Kairos_37.jpeg',
      'galeryImages/Kairos/Kairos_38.jpeg',
      'galeryImages/Kairos/Kairos_39.jpeg',
      'galeryImages/Kairos/Kairos_40.jpeg',
      'galeryImages/Kairos/Kairos_41.jpeg',
      'galeryImages/Kairos/Kairos_42.jpeg',
      'galeryImages/Kairos/Kairos_43.jpeg',
      'galeryImages/Kairos/Kairos_44.jpeg',
      'galeryImages/Kairos/Kairos_45.jpeg',
      'galeryImages/Kairos/Kairos_46.jpeg',
      'galeryImages/Kairos/Kairos_47.jpeg',
      'galeryImages/Kairos/Kairos_48.jpeg',
      'galeryImages/Kairos/Kairos_49.jpeg',
      'galeryImages/Kairos/Kairos_50.jpeg',
      'galeryImages/Kairos/Kairos_51.jpeg',
      'galeryImages/Kairos/Kairos_52.jpeg',
      'galeryImages/Kairos/Kairos_53.jpeg',
      'galeryImages/Kairos/Kairos_54.jpeg',
      'galeryImages/Kairos/Kairos_55.jpeg',
      'galeryImages/Kairos/Kairos_56.jpeg',
      'galeryImages/Kairos/Kairos_57.jpeg',
      'galeryImages/Kairos/Kairos_58.jpeg',
      'galeryImages/Kairos/Kairos_59.jpeg',
      'galeryImages/Kairos/Kairos_60.jpeg',
      'galeryImages/Kairos/Kairos_61.jpeg',
      'galeryImages/Kairos/Kairos_62.jpeg',
      'galeryImages/Kairos/Kairos_63.jpeg',
      'galeryImages/Kairos/Kairos_64.jpeg',
      'galeryImages/Kairos/Kairos_65.jpeg',
      'galeryImages/Kairos/Kairos_66.jpeg',
      'galeryImages/Kairos/Kairos_67.jpeg',
      'galeryImages/Kairos/Kairos_68.jpeg',
    ],
  },

  /* ── Project 2 — Vila Kikinou ──────────────────────────────── */
  {
    title:   'Vila Kikinou',
    accent:  '#bd486b',
    hero:    'images/project-4/hero.jpeg',
    details: [],
    gallery: [
      'galeryImages/Kikinou/Kikinou_01.jpeg',
      'galeryImages/Kikinou/Kikinou_02.jpeg',
      'galeryImages/Kikinou/Kikinou_03.jpeg',
      'galeryImages/Kikinou/Kikinou_04.jpeg',
      'galeryImages/Kikinou/Kikinou_05.jpeg',
      'galeryImages/Kikinou/Kikinou_06.jpeg',
      'galeryImages/Kikinou/Kikinou_07.jpeg',
      'galeryImages/Kikinou/Kikinou_08.jpeg',
      'galeryImages/Kikinou/Kikinou_09.jpeg',
      'galeryImages/Kikinou/Kikinou_10.jpeg',
      'galeryImages/Kikinou/Kikinou_11.jpeg',
    ],
  },

  /* ── Project 3 — Casa T ────────────────────────────────────── */
  {
    title:   'Vila Achilleas',
    accent:  '#5c2951',
    layout:  'layout-4',
    subtitle: "Fotografii Șerban Bonciocat, vezi mai multe->",
    subtitleUrl: "https://share.google/3JxwcuMWTO3FT3xoM",   
    hero:    'images/project-11/hero.jpg',
    details: [],
    gallery: [
      'galeryImages/vila Achilleas/vila Achilleas_01.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_02.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_03.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_04.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_05.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_06.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_07.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_08.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_09.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_10.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_11.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_12.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_13.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_14.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_15.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_16.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_17.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_18.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_19.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_20.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_21.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_22.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_23.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_24.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_25.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_26.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_27.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_28.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_29.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_30.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_31.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_32.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_33.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_34.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_35.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_36.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_37.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_38.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_39.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_40.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_41.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_42.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_43.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_44.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_45.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_46.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_47.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_48.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_49.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_50.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_51.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_52.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_53.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_54.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_55.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_56.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_57.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_58.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_59.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_60.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_61.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_62.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_63.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_64.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_65.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_66.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_67.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_68.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_69.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_70.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_71.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_72.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_73.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_74.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_75.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_76.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_77.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_78.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_79.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_80.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_81.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_82.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_83.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_84.jpg',
      'galeryImages/vila Achilleas/vila Achilleas_85.jpg',
    ],
  },

  /* ── Vila Mirabello ────────────────────────────────────────── */
  {
    title:   'Vila Mirabello',
    accent:  '#0e2e69',
    layout:  'layout-7',
    subtitle: "Vezi mai multe->",
    subtitleUrl: "https://share.google/zTyC2YakMYra3aJCf",
    hero:    'images/project-12/hero.jpg',
    details: [],
    gallery: [
      'galeryImages/Mirabello/Mirabello_01.jpg',
      'galeryImages/Mirabello/Mirabello_02.jpg',
      'galeryImages/Mirabello/Mirabello_03.jpg',
      'galeryImages/Mirabello/Mirabello_04.jpg',
      'galeryImages/Mirabello/Mirabello_05.jpg',
      'galeryImages/Mirabello/Mirabello_06.jpg',
      'galeryImages/Mirabello/Mirabello_07.jpg',
      'galeryImages/Mirabello/Mirabello_08.jpg',
      'galeryImages/Mirabello/Mirabello_09.jpg',
      'galeryImages/Mirabello/Mirabello_10.jpg',
      'galeryImages/Mirabello/Mirabello_11.jpg',
      'galeryImages/Mirabello/Mirabello_12.jpg',
      'galeryImages/Mirabello/Mirabello_13.jpg',
      'galeryImages/Mirabello/Mirabello_14.jpg',
    ],
  },

  /* ── Project 4 — Vila B ────────────────────────────────────── */
  {
    title:   'VIla B',
    accent:  '#0f1a1b',
    portrait: true,
    hero:    'images/project-2/hero.jpeg',
    details: [],
    gallery: [
      'galeryImages/vila B/vila B_01.jpeg',
      'galeryImages/vila B/vila B_02.jpeg',
    ],
  },

  /* ── Project 5 — Vila LMMMI ────────────────────────────────── */
  {
    title:   'Vila LMMMI',
    accent:  '#b31c1c',
    layout:  'layout-7',
    hero:    'images/project-10/hero.jpeg',
    details: [],
    gallery: [
      'galeryImages/vila LMMMI/vila LMMMI_01.jpeg',
      'galeryImages/vila LMMMI/vila LMMMI_02.jpeg',
      'galeryImages/vila LMMMI/vila LMMMI_03.jpeg',
      'galeryImages/vila LMMMI/vila LMMMI_04.jpeg',
      'galeryImages/vila LMMMI/vila LMMMI_05.jpeg',
      'galeryImages/vila LMMMI/vila LMMMI_06.jpeg',
      'galeryImages/vila LMMMI/vila LMMMI_07.jpeg',
      'galeryImages/vila LMMMI/vila LMMMI_08.jpeg',
      'galeryImages/vila LMMMI/vila LMMMI_09.jpeg',
      'galeryImages/vila LMMMI/vila LMMMI_10.jpeg',
      'galeryImages/vila LMMMI/vila LMMMI_11.jpeg',
      'galeryImages/vila LMMMI/vila LMMMI_12.jpeg',
      'galeryImages/vila LMMMI/vila LMMMI_13.jpeg',
      'galeryImages/vila LMMMI/vila LMMMI_14.jpeg',
      'galeryImages/vila LMMMI/vila LMMMI_15.jpeg',
      'galeryImages/vila LMMMI/vila LMMMI_16.jpeg',
      'galeryImages/vila LMMMI/vila LMMMI_17.jpeg',
      'galeryImages/vila LMMMI/vila LMMMI_18.jpeg',
      'galeryImages/vila LMMMI/vila LMMMI_19.jpeg',
      'galeryImages/vila LMMMI/vila LMMMI_20.jpeg',
      'galeryImages/vila LMMMI/vila LMMMI_21.jpeg',
      'galeryImages/vila LMMMI/vila LMMMI_22.jpeg',
      'galeryImages/vila LMMMI/vila LMMMI_23.jpeg',
      'galeryImages/vila LMMMI/vila LMMMI_24.jpeg',
      'galeryImages/vila LMMMI/vila LMMMI_25.jpeg',
    ],
  },

  /* ── Project 6 — Pensiunea H ───────────────────────────────── */
  {
    title:   'Pensiunea H',
    accent:  '#5e2609',
    hero:    'images/project-3/hero.jpeg',
    details: [],
    gallery: [
      'galeryImages/pensiunea H/pensiunea H_01.jpeg',
      'galeryImages/pensiunea H/pensiunea H_02.jpeg',
      'galeryImages/pensiunea H/pensiunea H_03.jpeg',
      'galeryImages/pensiunea H/pensiunea H_04.jpeg',
      'galeryImages/pensiunea H/pensiunea H_05.jpeg',
      'galeryImages/pensiunea H/pensiunea H_06.jpeg',
      'galeryImages/pensiunea H/pensiunea H_07.jpeg',
      'galeryImages/pensiunea H/pensiunea H_08.jpeg',
      'galeryImages/pensiunea H/pensiunea H_09.jpeg',
    ],
  },

  /* ── Project 7 — Tree House Cosoba ────────────────────────── */
  {
    title:   'Tree House Cosoba',
    accent:  '#449121',
        layout:  'layout-4',
    hero:    'images/project-5/hero.jpeg',
    details: [],
    gallery: [
      'galeryImages/Tree House/Tree House_01.jpeg',
      'galeryImages/Tree House/Tree House_02.jpeg',
      'galeryImages/Tree House/Tree House_03.jpeg',
      'galeryImages/Tree House/Tree House_04.jpeg',
      'galeryImages/Tree House/Tree House_05.jpeg',
      'galeryImages/Tree House/Tree House_06.jpeg',
      'galeryImages/Tree House/Tree House_07.jpeg',
      'galeryImages/Tree House/Tree House_08.jpeg',
      'galeryImages/Tree House/Tree House_09.jpeg',
      'galeryImages/Tree House/Tree House_10.jpeg',
    ],
  },

  /* ── Project 8 — Trei Case de Piatra ──────────────────────── */
  {
    title:   'Trei Case de Piatra',
    accent:  '#f5c670',
    hero:    'images/project-6/hero.jpeg',
    details: [],
    gallery: [
      'galeryImages/3 case de piatra/3 case de piatra_01.jpeg',
      'galeryImages/3 case de piatra/3 case de piatra_02.jpeg',
      'galeryImages/3 case de piatra/3 case de piatra_03.jpeg',
      'galeryImages/3 case de piatra/3 case de piatra_04.jpeg',
      'galeryImages/3 case de piatra/3 case de piatra_05.jpeg',
      'galeryImages/3 case de piatra/3 case de piatra_06.jpeg',
      'galeryImages/3 case de piatra/3 case de piatra_07.jpeg',
      'galeryImages/3 case de piatra/3 case de piatra_08.jpeg',
      'galeryImages/3 case de piatra/3 case de piatra_09.jpeg',
      'galeryImages/3 case de piatra/3 case de piatra_10.jpeg',
      'galeryImages/3 case de piatra/3 case de piatra_11.jpeg',
      'galeryImages/3 case de piatra/3 case de piatra_12.jpeg',
      'galeryImages/3 case de piatra/3 case de piatra_13.jpeg',
      'galeryImages/3 case de piatra/3 case de piatra_14.jpeg',
    ],
  },

  /* ── Project 9 — Vila L ────────────────────────────────────── */
  {
    title:   'Vila L',
    accent:  '#1d2c0c',
    layout:  'layout-5',
    hero:    'images/project-7/hero.jpeg',
    details: [],
    gallery: [
      'galeryImages/vila L/vila L_01.jpeg',
      'galeryImages/vila L/vila L_02.jpeg',
      'galeryImages/vila L/vila L_03.jpeg',
      'galeryImages/vila L/vila L_04.jpeg',
      'galeryImages/vila L/vila L_05.jpeg',
      'galeryImages/vila L/vila L_06.jpeg',
      'galeryImages/vila L/vila L_07.jpeg',
      'galeryImages/vila L/vila L_08.jpeg',
      'galeryImages/vila L/vila L_09.jpeg',
      'galeryImages/vila L/vila L_10.jpeg',
      'galeryImages/vila L/vila L_11.jpeg',
    ],
  },

  /* ── Project 10 — Taverna Filos ────────────────────────────── */
  {
    title:   'Taverna Filos',
    accent:  '#5ac8f3',
    layout:  'layout-7',
    hero:    'images/project-8/hero.jpeg',
    details: [],
    gallery: [
      'galeryImages/Filos/Filos_01.jpeg',
      'galeryImages/Filos/Filos_02.jpeg',
      'galeryImages/Filos/Filos_03.jpeg',
      'galeryImages/Filos/Filos_04.jpeg',
      'galeryImages/Filos/Filos_05.jpeg',
      'galeryImages/Filos/Filos_06.jpeg',
      'galeryImages/Filos/Filos_07.jpeg',
      'galeryImages/Filos/Filos_08.jpeg',
      'galeryImages/Filos/Filos_09.jpeg',
      'galeryImages/Filos/Filos_10.jpeg',
      'galeryImages/Filos/Filos_11.jpeg',
      'galeryImages/Filos/Filos_12.jpeg',
      'galeryImages/Filos/Filos_13.jpeg',
      'galeryImages/Filos/Filos_14.jpeg',
    ],
  },

  /* ── Project 11 — Pensiunea Sf Gheorghe ───────────────────── */
  {
    title:   'Pensiunea Sf Gheorhe',
    accent:  '#92652a',
        layout:  'layout-4',
    hero:    'images/project-9/hero.jpeg',
    details: [],
    gallery: [
      'galeryImages/pensiune Sf. Gheorghe/pensiune Sf. Gheorghe_01.jpeg',
      'galeryImages/pensiune Sf. Gheorghe/pensiune Sf. Gheorghe_02.jpeg',
      'galeryImages/pensiune Sf. Gheorghe/pensiune Sf. Gheorghe_03.jpeg',
      'galeryImages/pensiune Sf. Gheorghe/pensiune Sf. Gheorghe_04.jpeg',
      'galeryImages/pensiune Sf. Gheorghe/pensiune Sf. Gheorghe_05.jpeg',
      'galeryImages/pensiune Sf. Gheorghe/pensiune Sf. Gheorghe_06.jpeg',
      'galeryImages/pensiune Sf. Gheorghe/pensiune Sf. Gheorghe_07.jpeg',
      'galeryImages/pensiune Sf. Gheorghe/pensiune Sf. Gheorghe_08.jpeg',
      'galeryImages/pensiune Sf. Gheorghe/pensiune Sf. Gheorghe_09.jpeg',
    ],
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
      'galeryImages/FolderName/FolderName_01.jpeg',
    ],
    // layout: 'layout-7',    // optional: pin to a specific preset
  },
  ─────────────────────────────────────────────────────────────── */

];
