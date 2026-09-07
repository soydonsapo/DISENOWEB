---
name: Acoustic Poetry & Spatial Warmth
colors:
  surface: '#fff8f4'
  surface-dim: '#e2d8d1'
  surface-bright: '#fff8f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fcf2ea'
  surface-container: '#f6ece5'
  surface-container-high: '#f1e6df'
  surface-container-highest: '#ebe1da'
  on-surface: '#1f1b17'
  on-surface-variant: '#424845'
  inverse-surface: '#352f2b'
  inverse-on-surface: '#f9efe8'
  outline: '#737874'
  outline-variant: '#c2c8c3'
  surface-tint: '#4f6359'
  primary: '#4f6359'
  on-primary: '#ffffff'
  primary-container: '#9bb0a5'
  on-primary-container: '#31433b'
  inverse-primary: '#b6cbc0'
  secondary: '#83523d'
  on-secondary: '#ffffff'
  secondary-container: '#febda2'
  on-secondary-container: '#7a4a35'
  tertiary: '#725b35'
  on-tertiary: '#ffffff'
  tertiary-container: '#c4a77b'
  on-tertiary-container: '#503c1a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d2e8dc'
  primary-fixed-dim: '#b6cbc0'
  on-primary-fixed: '#0c1f18'
  on-primary-fixed-variant: '#384b42'
  secondary-fixed: '#ffdbcd'
  secondary-fixed-dim: '#f8b89d'
  on-secondary-fixed: '#331103'
  on-secondary-fixed-variant: '#683b27'
  tertiary-fixed: '#fedeae'
  tertiary-fixed-dim: '#e1c294'
  on-tertiary-fixed: '#281900'
  on-tertiary-fixed-variant: '#584320'
  background: '#fff8f4'
  on-background: '#1f1b17'
  surface-variant: '#ebe1da'
typography:
  display-lg:
    fontFamily: Poppins
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 64px
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.005em
  label-lg:
    fontFamily: Poppins
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  space-xxs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  space-3xl: 4rem
  space-4xl: 6rem
  gutter-mobile: 1rem
  gutter-tablet: 1.5rem
  gutter-desktop: 2.5rem
  margin-mobile: 1.25rem
  margin-tablet: 2.5rem
  margin-desktop: 5rem
---

## Brand & Style

The visual identity is anchored in contemplative warmth, acoustic intimacy, and literary grace. Designed around the poetic and scientific ethos of Jorge Drexler's music—where astrophysics meets folk guitar—this design system balances organic tactility with modern digital clarity.

### Personality & Emotional Tenor
- **Lyrical & Introspective:** Generous whitespace encourages paused reflection, akin to the silence between musical notes.
- **Acoustic Warmth:** Earthbound pigments (warm cream, soft sage, muted clay) replace sterile clinical whites, evoking linen notebook pages and resonant instrument wood.
- **Modern Intellectualism:** Contemporary geometric displays harmonize with a humanist, structural sans-serif engine, bridging poetic craft and deliberate precision.

### Aesthetic Direction
The visual language merges **Minimalism** and **Soft Glassmorphism**:
- Generous, uncluttered framing that treats text like printed poetry on archival paper.
- Translucent, cream-tinted floating panels with subtle backdrop filtration.
- Generous, organic curves (soft pill architecture) that soften interface boundaries, creating inviting, tactile interactive touchpoints.

## Colors

The palette is derived from natural elements: dried sage, sun-warmed river stones, clay earthenware, and unbleached fiber. High-contrast harsh blacks and pure optical whites are strictly avoided to sustain an intimate, domestic warmth.

### Roles & Harmonic Usage
- **Primary (`#9BB0A5` - Sage Mist):** Acts as the foundational anchor for active interactive surfaces, soft badges, playback progress, and ambient focus markers.
- **Secondary (`#E6A88E` - Terracotta Clay):** Brings organic vitality to highlights, secondary interactive states, and acoustic callouts.
- **Tertiary (`#E8C99B` - Golden Amber):** Evokes acoustic guitar lacquer, warm stage lamps, and lyric annotations. Used sparingly for moments of delight and celebratory indicators.
- **Neutral (`#4A443F` - Espresso Charcoal):** Grounding neutral for primary editorial copy and deep interface borders. Paired with an ultra-deep variant (`#2C2825`) for display headlines and a lighter tone (`#787069`) for subtle metadata.
- **Canvas & Surface Tiering:**
  - `Surface Base`: `#FAF7F2` (Warm Linen Cream)
  - `Surface Elevated`: `#F5EFEB` (Milled Parchment)
  - `Surface Translucent`: `rgba(250, 247, 242, 0.72)` with a 16px blur

## Typography

The typographic hierarchy combines the contemporary geometric cadence of **Poppins** for headlines and labels with the pristine legibility and humanist warmth of **Manrope** for body copy.

- **Poppins (Headlines & Labels):** Used across album titles, verse fragments, artist narratives, tracklists, and UI controls. Rendered with clean geometric lines to maintain a modern yet unhurried elegance.
- **Manrope (Body & Content):** Delivers exceptional readability for extended lyric reading, essays, and editorial prose.
- **Typographic Guidelines:**
  - Set metadata labels and track lengths in Poppins with subtle uppercase styling and loose letter spacing (`0.04em` to `0.06em`).
  - Stanza and lyric containers adopt `body-lg` (Manrope) with an expanded `32px` line-height to emulate verse composition.

## Layout & Spacing

Layouts follow an intentional, airy rhythm that privileges focus and restraint over data density.

### Grid System
- **Desktop (1200px+):** 12-column symmetrical layout, max container width of `1280px`, `40px` gutters, and `80px` screen margins.
- **Tablet (768px - 1199px):** 8-column layout, `24px` gutters, and `40px` screen margins.
- **Mobile (Up to 767px):** 4-column responsive flow, `16px` gutters, and `20px` margins.

### Compositional Rules
- **Poetic Offsets:** Feature content (such as song narratives and quotes) often occupies asymmetrical columns (e.g., 5 columns copy, 1 column empty pause, 6 columns interactive audio or photography).
- **Macro-Spacing Cadence:** Major thematic sections must be partitioned with `space-4xl` (`6rem`) or `space-3xl` (`4rem`) to prevent cognitive crowding.

## Elevation & Depth

Spatial layering avoids heavy, drop-shadow realism in favor of soft, atmospheric ambient shadows and translucent parchment planes.

### Depth Hierarchy
1. **Canvas (Level 0):** `#FAF7F2` — The silent, tactile background sheet.
2. **Resting Glass Surfaces (Level 1):** Translucent cream `#FAF7F2` with 75% opacity, backdrop blur of `16px`, and an ultra-subtle border: `1px solid rgba(74, 68, 63, 0.07)`. Shadow: `0 4px 24px -2px rgba(44, 40, 37, 0.04)`.
3. **Elevated Floating Cards / Menus (Level 2):** `#F5EFEB` with 88% opacity, blur of `24px`. Shadow: `0 12px 36px -4px rgba(44, 40, 37, 0.07)`, tinted with warm umber.
4. **Modal Dialogs & Persistent Player (Level 3):** Solid `#FAF7F2` with 94% opacity, blur of `32px`. Ambient shadow: `0 24px 60px -8px rgba(44, 40, 37, 0.12)`, bounded by a soft clay highlight `1px solid rgba(230, 168, 142, 0.25)`.

### Border Styling
Borders act as physical paper edges rather than structural frames: keep borders thin (`1px`), low-contrast, and naturally integrated with background tones.

## Shapes

The shape system adopts a roundedness tier of `3` (Pill-shaped architecture), bringing soft curvature and an acoustic, organic flow to every interface component.

- **Base Controls (`rounded`):** `1rem` (16px) — Inputs, chips, secondary pills, tooltips.
- **Cards & Media Panels (`rounded-lg`):** `2rem` (32px) — Lyric cards, tour date modules, album cover holders.
- **Overlays & Audio Player (`rounded-xl`):** `3rem` (48px) — Floating dock controls, bottom sheets, prominent media modules.
- **Full Radius (`rounded-full`):** Used universally for standalone action pills, avatars, play/pause toggles, and active badges.

## Components

### 1. Buttons
- **Primary Button:** Pill-shaped (`rounded-full`), background `#9BB0A5`, foreground `#2C2825`, subtle warm inner shadow. On hover, shifts to a rich sage tint with a `0.98` scale compression to evoke tactile resistance.
- **Secondary / Ghost Button:** Transparent with a `1px` border in `rgba(74, 68, 63, 0.18)`, text in `#4A443F`. On hover, fills with `rgba(155, 176, 165, 0.12)`.
- **Text Button:** Poppins label with subtle letter-spacing, accompanied by a trailing hairline arrow (`→`) that translates `3px` on hover.

### 2. Cards & Content Containers
- Formed with `rounded-lg` (`2rem`) using translucent cream (`rgba(250, 247, 242, 0.8)`) backed by a `16px` backdrop filter.
- Padding inside cards defaults to `space-xl` (`2rem`) desktop and `space-lg` (`1.5rem`) mobile.
- Headers inside cards utilize Poppins (`headline-md`), paired with neutral body copy in Manrope.

### 3. Chips & Badges
- **Category Chips:** Pill-shaped (`rounded-full`), padded `space-xs` vertically and `space-md` horizontally.
- Inactive state: `rgba(74, 68, 63, 0.05)` fill with `#4A443F` text.
- Active state: `#9BB0A5` fill with deep `#2C2825` text.

### 4. Input Fields
- Enclosed pill contours (`rounded-full`) or softened rectangles (`rounded`), filled with `rgba(245, 239, 235, 0.8)`.
- Border is `1px solid rgba(74, 68, 63, 0.12)`. On focus, the field expands to `1.5px solid #9BB0A5` with an ambient glow of `rgba(155, 176, 165, 0.2)`.

### 5. Checkboxes & Radio Controls
- Circular and pebble geometries.
- Unchecked: `1.5px solid rgba(74, 68, 63, 0.24)` on `#FAF7F2`.
- Checked: `#9BB0A5` fill with a centered dot in `#2C2825`.

### 6. Specialized Components: Floating Audio Player & Lyric Scroller
- **Persistent Lyric Scroller:** Centered layout where active stanzas appear in `headline-lg` (`Poppins`, `#2C2825`), while preceding and succeeding verses gently recede into `body-lg` (`Manrope`) at 40% opacity (`#787069`).
- **Floating Acoustic Dock:** A `rounded-xl` glass bar pinned near the viewport bottom containing minimal playback controls, a scrub line tinted in `#E6A88E`, and track duration indicators set in `label-sm`.