# Gallery Layout Templates — Spec

Source of truth for building the website's gallery/feature blocks. Read this
together with the reference sketch image. Where the sketches are messy, this
document wins — it is the cleaned-up, canonical interpretation.

---

## 1. Goal

ONE configurable HTML + CSS template (not eight separate files). The layout is
driven entirely by **modifier classes** and **CSS custom properties**. Switching
layout = changing one class. Resizing the image = changing one variable. No JS
required.

---

## 2. Vocabulary

| Term in sketch | Meaning in code |
|---|---|
| `IMAGINE` box | The **image block** — image placeholder / `<img>` slot |
| `Titlu` / `Scris Titlu` | The **title group** = heading text **+** a "View full gallery" button. Always one unit. |
| zig-zag / hatched area | The **accent color region** — solid background color. The palette is intentionally undecided; expose it as `--accent-bg`. Color shows wherever the image is NOT. |

---

## 3. The configurable API

### HTML structure (fixed for every layout)
```html
<section class="gallery-layout gallery-layout--preset-1">
  <figure class="gallery-layout__image">
    <img src="..." alt="..." />
  </figure>
  <div class="gallery-layout__title">
    <h2 class="gallery-layout__heading">Title goes here</h2>
    <a class="gallery-layout__button" href="...">View full gallery</a>
  </div>
</section>
```

### CSS custom properties (the knobs)
| Variable | Purpose | Example default |
|---|---|---|
| `--accent-bg` | Background color region (palette TBD) | `#e9e4dc` |
| `--img-w` | **Image block width** (share of container) | `55%` |
| `--img-h` | **Image block height** (share of container) | `70%` |
| `--ratio` | Desktop container aspect ratio | `3 / 2` |
| `--pad` | Inner padding for the title group from its corner | `clamp(1rem, 3vw, 2.5rem)` |

> **Image size is the primary axis.** `--img-w` / `--img-h` should change the
> image block cleanly **without** breaking any preset's positioning. Test each
> preset at a small (e.g. 40% / 50%) and large (e.g. 70% / 100%) image size.

### How positioning works
- The container is a positioning context with `background: var(--accent-bg)` and
  a desktop `aspect-ratio: var(--ratio)`.
- The **image block** is sized by `--img-w` / `--img-h` and pinned to an edge or
  corner per preset.
- The **title group** is pinned to a corner with `--pad` offset.
- The accent color is simply the container background showing through the empty
  space. Do **not** add separate colored divs.

---

## 4. The eight presets

Each preset sets: image horizontal align, image vertical align, and title corner.
These are cleaned-up versions of the sketches — proportions are suggestions
driven by the variables above, not pixel measurements.

| Preset | Image horizontal | Image vertical | Title corner | Notes |
|---|---|---|---|---|
| `--preset-1` | center | top | bottom-center | color frames left + right of image |
| `--preset-2` | right | full height | top-left | image fills right side, color = left |
| `--preset-3` | center | center | top-right | color wraps top / left / bottom |
| `--preset-4` | left | full height | bottom-right | image fills left side, color = right |
| `--preset-5` | left-of-center | center | top-right | color on right + bottom |
| `--preset-6` | right | bottom | top (full width band) | color = top-left L-shape |
| `--preset-7` | right | full height | bottom-left | title sits over the color, color = left |
| `--preset-8` | right | bottom | top-left | color fills all around the image |

---

## 5. Responsive behavior

Single breakpoint at **768px**. Below it, every preset collapses to the SAME
stacked layout (do not preserve the desktop arrangement on mobile):

1. Image block on top — full width, `--img-h` ignored, use a natural/auto or
   fixed mobile height.
2. Title group below the image.
3. Accent color becomes the full-width page/section background behind both.
4. `aspect-ratio` is dropped; the section grows to fit its content.

---

## 6. Reference CSS skeleton

Illustrative starting point — implement all eight presets following this shape.

```css
.gallery-layout {
  --accent-bg: #e9e4dc;
  --img-w: 55%;
  --img-h: 70%;
  --ratio: 3 / 2;
  --pad: clamp(1rem, 3vw, 2.5rem);

  position: relative;
  aspect-ratio: var(--ratio);
  background: var(--accent-bg);
  overflow: hidden;
}

.gallery-layout__image {
  position: absolute;
  width: var(--img-w);
  height: var(--img-h);
  margin: 0;
}
.gallery-layout__image img { width: 100%; height: 100%; object-fit: cover; display: block; }

.gallery-layout__title { position: absolute; padding: var(--pad); }

/* Example preset: image pinned right & full height, title bottom-left */
.gallery-layout--preset-7 .gallery-layout__image {
  right: 0; top: 0; height: 100%; /* --img-h overridden to full */
}
.gallery-layout--preset-7 .gallery-layout__title { left: 0; bottom: 0; }

/* Mobile: identical stack for all presets */
@media (max-width: 768px) {
  .gallery-layout {
    aspect-ratio: auto;
    display: flex;
    flex-direction: column;
  }
  .gallery-layout__image {
    position: static;
    width: 100%;
    height: auto;
  }
  .gallery-layout__title { position: static; }
}
```

---

## 7. Build checklist (for Claude Code)

- [ ] One HTML template + one CSS file. No JS.
- [ ] Implement all 8 presets as `--preset-N` modifier classes.
- [ ] Image block size controlled only by `--img-w` / `--img-h`; verify each
      preset holds at small and large sizes.
- [ ] Title group always contains heading + "View full gallery" button.
- [ ] Accent color = container background only (no extra colored elements).
- [ ] Single 768px breakpoint; all presets collapse to the stacked mobile layout.
- [ ] Build a **demo page rendering all 8 presets** in a grid so they can be
      compared side-by-side against the sketch image.
- [ ] Use semantic tags (`section`, `figure`, `h2`, `a`) and an `alt` on images.

## 8. Open items (confirm before final styling)

- Palette / `--accent-bg` value(s) — currently a placeholder.
- Default desktop aspect ratio (`--ratio`) — assumed `3 / 2`.
- Whether different presets should use different default image sizes, or share
  one global default.
