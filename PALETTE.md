# Colour Palette

Reference for all hex values used on the site. When adding a new project, pick an accent colour from the **Project accents** section or add your own following the guidance at the bottom.

---

## Site base colours

These are fixed in `css/style.css` under `:root` and are not changed per project.

| Name | Hex | Used for |
|---|---|---|
| `--bg-dark` | `#141210` | Page background, dark sections |
| `--bg-light` | `#F5F0EB` | Light text, light section backgrounds |
| `--text-primary` | `#1A1714` | Body text on light backgrounds |
| `--text-muted` | `#6B6460` | Secondary text on light backgrounds |

---

## Project accent colours — current projects

Each project has one accent colour. It becomes the gradient base for the entire section background.

| Project | Hex | Tone |
|---|---|---|
| Vila Kikinou | `#1A9B96` | Teal |
| Sf Gheorghe | `#5E5E2A` | Olive |
| Casa V | `#3B1558` | Deep purple |
| Casa LMMMI | `#5C1228` | Wine red |

---

## Placeholder accent colours — slots 5–8

| Slot | Hex | Tone |
|---|---|---|
| Placeholder 5 | `#1A5C9B` | Steel blue |
| Placeholder 6 | `#7A3B1E` | Burnt sienna |
| Placeholder 7 | `#2D6A4F` | Forest green |
| Placeholder 8 | `#4A235A` | Violet |

---

## Extension palette — ready to use

Tested against the dark background (`#141210`). All read well at full saturation and hold their character when mixed to 18–25% with the dark in the gradient.

### Warm

| Name | Hex |
|---|---|
| Rust | `#8B3A1A` |
| Terracotta | `#C25A2A` |
| Ochre | `#9B7A1A` |
| Amber | `#B5841E` |
| Deep gold | `#7A5C10` |

### Cool

| Name | Hex |
|---|---|
| Slate blue | `#2E5B82` |
| Cobalt | `#0D6EAB` |
| Indigo | `#2C3E7A` |
| Dusty teal | `#2A6E6E` |
| Sage | `#4A5E3A` |

### Neutral / earthy

| Name | Hex |
|---|---|
| Graphite | `#3A3530` |
| Warm grey | `#5A524A` |
| Dark sand | `#6B5C40` |
| Khaki | `#4F4A28` |
| Ash | `#424040` |

### Deep / saturated

| Name | Hex |
|---|---|
| Midnight green | `#0D3B2E` |
| Burgundy | `#6B1535` |
| Plum | `#4A1230` |
| Dark navy | `#1B2A4A` |
| Charcoal blue | `#1E2E3A` |

---

## How to pick a good accent colour

1. **Avoid pure primaries** — `#FF0000`, `#0000FF` etc. look harsh against the dark background. Shift them toward a brownish or greyish version (desaturate slightly).
2. **Test the gradient** — the CSS mixes your colour with `#141210` at 18–25%. Very light colours (pastels) will wash out. Very dark colours will barely register. Mid-to-dark saturated tones work best.
3. **One colour per project** — resist the urge to use the same accent twice. Each project should feel distinct when scrolling.
4. **Match the architecture** — warm tones (rust, terracotta, gold) suit organic/residential projects. Cool tones (blue, slate, teal) suit contemporary/minimal work.

To use a colour: copy the hex into the `accent:` field of the project object in `js/projects.js`.
