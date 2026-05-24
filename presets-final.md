# Gallery Presets — Final Spec (photo-free)

Authoritative, unambiguous definition of the 8 layout presets, derived from the
clean redraw (grey = page, black = image block, yellow = title group).
**Supersedes `PRESETS.md`.** Pairs with `LAYOUTS.md`.

Each preset has two layers:
- **ASCII map** — for humans, approximate (4×3 cells).
- **Coordinates (JSON)** — the source of truth. The image block is an absolute
  rectangle in page-percentage units; the title group snaps to a page corner.

```
Legend:  I = image block   T = title group (heading + "View full gallery" button)
         . = accent color (page background showing through)

Coordinate system: page is 0–100 on both axes. Origin (0,0) = top-left.
  image: { x, y, w, h }  — all percentages of the page box
  title: { corner, pad } — corner is one of top-left / top-right /
                           bottom-left / bottom-right; pad is inset from that corner
```

---

### preset-1 — image top-left, title bottom-right
```
I I I .
I I I .
. . . T
```

### preset-2 — image right (full height), title top-left
```
T . I I
. . I I
. . I I
```

### preset-3 — image centered (margin all around), title top-right
```
. . . T
. I I .
. . . .
```

### preset-4 — image left (full height), title bottom-right
```
I I . .
I I . .
I I . T
```

### preset-5 — image left/center, title top-right
```
I I . T
I I . .
I I . .
```

### preset-6 — image bottom-right, title top-right
```
. . . T
. I I I
. I I I
```

### preset-7 — image right (full height), title bottom-left
```
. I I I
. I I I
T I I I
```

### preset-8 — image right (vertically centered), title top-left
```
T . . .
. I I I
. I I I
```

---

## Source of truth — coordinates (JSON)

```json
{
  "preset-1": { "image": { "x": 0,  "y": 0,  "w": 65, "h": 68 },  "title": { "corner": "bottom-right" } },
  "preset-2": { "image": { "x": 52, "y": 0,  "w": 48, "h": 100 }, "title": { "corner": "top-left" } },
  "preset-3": { "image": { "x": 30, "y": 28, "w": 48, "h": 45 },  "title": { "corner": "top-right" } },
  "preset-4": { "image": { "x": 0,  "y": 0,  "w": 58, "h": 100 }, "title": { "corner": "bottom-right" } },
  "preset-5": { "image": { "x": 0,  "y": 8,  "w": 55, "h": 84 },  "title": { "corner": "top-right" } },
  "preset-6": { "image": { "x": 38, "y": 30, "w": 60, "h": 68 },  "title": { "corner": "top-right" } },
  "preset-7": { "image": { "x": 35, "y": 0,  "w": 65, "h": 100 }, "title": { "corner": "bottom-left" } },
  "preset-8": { "image": { "x": 33, "y": 15, "w": 62, "h": 70 },  "title": { "corner": "top-left" } }
}
```

Shared defaults (override per project, not per preset unless noted):
```json
{
  "page_ratio": "3 / 2",
  "accent_bg": "#e9e4dc",
  "title_pad": "clamp(1rem, 3vw, 2.5rem)"
}
```

### How to implement a preset
1. Page = a positioning context with `aspect-ratio: var(--page-ratio)` and
   `background: var(--accent-bg)`. Accent color is just this background.
2. Image block = absolutely positioned using the `x/y/w/h` percentages
   (`left`, `top`, `width`, `height`).
3. Title group = absolutely positioned, pinned to its `corner` with `title_pad`.
4. Switching preset = swapping the four image numbers + the title corner. Nothing
   else changes.

---

## Handling different photo sizes & orientations

The **image block has a fixed shape** (the rectangle above). The actual photo —
which may be portrait, landscape, square, huge or tiny — is fitted *into* that
block. The block does not resize to the photo; the photo conforms to the block.

**Default: fill and crop (recommended for these templates).**
```css
.gallery-layout__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;        /* fills the block, crops overflow, never distorts */
  object-position: center;  /* which part survives the crop */
  display: block;
}
```
- `object-fit: cover` guarantees the block is always fully filled regardless of
  the photo's aspect ratio — this keeps every preset looking consistent.
- Control the crop with `object-position` (e.g. `center top` to keep faces /
  skylines, `center` for general use). Expose it as a per-image option.

**Alternative: show the whole photo (no crop).**
```css
.gallery-layout__image img { object-fit: contain; }
.gallery-layout__image { background: #00000010; } /* fills the letterbox gaps */
```
Use `contain` when the full image matters (logos, products). Expect empty bars
around portrait photos in a wide block; give the block a neutral fill so the bars
aren't jarring.

**Portrait photos in wide blocks (and vice-versa).** With `cover` they crop
heavily. Three ways to handle, in order of effort:
1. Pick a preset whose block proportion suits the photo (tall block ↔ portrait).
2. Set `object-position` so the important part survives the crop.
3. Art-direction: serve a differently-cropped file per case via `<picture>` +
   `<source media="...">` if a single crop won't do.

**Don't let the block shape drift.** Because the block is sized in page
percentages, its aspect ratio is fixed by the preset — so swapping photos never
shifts the layout. If you ever want the block itself to follow the photo's
orientation, that's a separate variant (set `height: auto` + an `aspect-ratio`
on the block) and should be opted into explicitly, not the default.

**Mobile (<768px).** The stacked image (see `LAYOUTS.md` §5) should use a fixed
`aspect-ratio` (e.g. `16 / 10`) with `object-fit: cover` so portrait photos
don't blow the section height out. Keep `object-position` consistent with desktop.

**Always** set a meaningful `alt`, and a placeholder/skeleton background on the
block for slow loads.
