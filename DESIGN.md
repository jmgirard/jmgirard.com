---
name: jmgirard.com
description: A measuring instrument rendered as a website — enamelled chassis, engraved cream plates, brass rules, and amber spent only on live state.
colors:
  enamel: "#121a16"
  enamel-lit: "#1a2620"
  enamel-deep: "#0c110e"
  enamel-edge: "#2a3a32"
  plate: "#e9e3d4"
  plate-lit: "#f2eee2"
  plate-shade: "#d8d0bd"
  plate-ink: "#1d211c"
  plate-ink-soft: "#55584f"
  signal: "#e8a33d"
  signal-hot: "#f4b95c"
  signal-ink: "#171104"
  brass: "#a88146"
  brass-dim: "#6b5330"
  ink-on-enamel: "#ddd8c8"
  ink-on-enamel-bright: "#f0ece0"
  ink-on-enamel-soft: "#8e968d"
  stamp-stable-enamel: "#7fb894"
  stamp-experimental-enamel: "#d9a45c"
  stamp-deprecated-enamel: "#b09a93"
  stamp-stable-plate: "#33613f"
  stamp-experimental-plate: "#7d5a13"
  stamp-deprecated-plate: "#6d534c"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, -apple-system, Helvetica Neue, sans-serif"
    fontSize: "clamp(2.6rem, 1.8rem + 3.6vw, 5.2rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.015em"
    fontVariation: "font-stretch: 92%"
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.8rem, 1.45rem + 1.6vw, 2.75rem)"
    fontWeight: 500
    lineHeight: 1.14
    letterSpacing: "-0.02em"
    fontVariation: "font-stretch: 96%"
  title:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.45rem, 1.25rem + 0.9vw, 2rem)"
    fontWeight: 500
    lineHeight: 1.08
    fontVariation: "font-stretch: 96%"
  subtitle:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.15rem, 1.05rem + 0.4vw, 1.4rem)"
    fontWeight: 600
    lineHeight: 1.25
  reading:
    fontFamily: "Literata, ui-serif, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.15rem, 1.05rem + 0.4vw, 1.4rem)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(0.95rem, 0.9rem + 0.2vw, 1.05rem)"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "tabular-nums"
  label:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(0.76rem, 0.74rem + 0.1vw, 0.82rem)"
    fontWeight: 600
    letterSpacing: "0.16em"
    fontVariation: "font-stretch: 88%"
  stamp:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.68rem"
    fontWeight: 700
    letterSpacing: "0.14em"
    fontVariation: "font-stretch: 85%"
rounded:
  none: "0"
  hairline: "1px"
  control: "2px"
  lamp: "50%"
spacing:
  rule: "1px"
  rule-heavy: "2px"
  gutter: "clamp(1.25rem, 0.9rem + 1.7vw, 3rem)"
  card: "clamp(1.15rem, 2vw, 1.6rem)"
  section-head: "clamp(2.5rem, 6vw, 4.5rem)"
  band: "clamp(3rem, 7vw, 6rem)"
  chrome-h: "3.3rem"
  index-h: "2.3rem"
components:
  signal-button:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.signal-ink}"
    rounded: "{rounded.control}"
    padding: "0.85rem 1.4rem"
    typography: "{typography.body}"
  signal-button-hover:
    backgroundColor: "{colors.signal-hot}"
    textColor: "{colors.signal-ink}"
  stamp-stable:
    textColor: "{colors.stamp-stable-enamel}"
    rounded: "{rounded.hairline}"
    padding: "0.2rem 0.5rem"
    typography: "{typography.stamp}"
  stamp-experimental:
    textColor: "{colors.stamp-experimental-enamel}"
    rounded: "{rounded.hairline}"
    padding: "0.2rem 0.5rem"
    typography: "{typography.stamp}"
  stamp-deprecated:
    textColor: "{colors.stamp-deprecated-enamel}"
    rounded: "{rounded.hairline}"
    padding: "0.2rem 0.5rem"
    typography: "{typography.stamp}"
  plate-surface:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.plate-ink}"
    rounded: "{rounded.none}"
  unit-card:
    backgroundColor: "{colors.enamel}"
    textColor: "{colors.ink-on-enamel}"
    rounded: "{rounded.none}"
    padding: "{spacing.card}"
  unit-card-hover:
    backgroundColor: "{colors.enamel-lit}"
  instrument-card:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.plate-ink}"
    rounded: "{rounded.none}"
    padding: "clamp(1.1rem, 2vw, 1.5rem)"
  instrument-card-hover:
    backgroundColor: "{colors.plate-lit}"
  nav-link:
    textColor: "{colors.ink-on-enamel-soft}"
    typography: "{typography.label}"
    padding: "0.35rem 0"
  nav-link-current:
    textColor: "{colors.signal}"
  link-chip:
    textColor: "{colors.brass}"
    rounded: "{rounded.none}"
    padding: "0.2rem 0.5rem"
  link-chip-hover:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.enamel-deep}"
  engraved-label:
    textColor: "{colors.brass}"
    typography: "{typography.label}"
  engraved-label-onplate:
    textColor: "{colors.brass-dim}"
    typography: "{typography.label}"
---

# Design System: jmgirard.com

## Overview

**Creative North Star: "The Calibrated Bench Instrument"**

This surface is a measuring instrument, not a page about one. A precision instrument has a dark enamelled chassis and light engraved plates screwed into it; the chassis carries identity, navigation and structure, and the plates carry anything a visitor must actually read at length. Brass hairlines rule and graduate every division, exactly as they do on a machined faceplate. Amber is the lamp: it is spent only on live state, on lab-led publication ticks, and on the single action the whole site is built to produce — an email.

The system's central commitment is that every claim carries its tolerance stamped beside it. The publication scale is drawn from the real bibliography and would disappear if the data were removed; the software rack labels each tool STABLE, EXPERIMENTAL or DEPRECATED in the author's own vocabulary. Nothing here is a decorative gauge. Density is high and deliberately unpadded: rules and seams do the separating that whitespace and cards would do elsewhere.

The world refuses two category ruts by construction — the consultant hero with three service cards, and the faculty page with a sidebar headshot. It also refuses the ornaments that usually accompany them: no eyebrow or kicker above a heading, no section numbering, no metric strip of big round numbers, no Unicode glyph standing in for an icon, and no faked hardware bevels. The instrument look is earned with honest borders, flat fills and one restrained offset shadow, never with a skeuomorphic gradient.

**Key Characteristics:**
- Two surfaces only: dark enamel chassis and cream engraved plate; a page alternates between them and nothing else.
- Brass hairlines (1px) and heavy rules (2px) instead of shadows, cards or rounded containers.
- Amber reserved: live state, lab-led ticks, the mailto control. Nothing else may take it.
- Condensed uppercase Archivo engraves labels; Literata reads at length.
- Square by default — the largest radius in the system is 2px.
- Data-derived graphics: the scale is the bibliography, drawn.

## Colors

A dark green-black enamel with warm cream plates inset into it, ruled in brass, lit in one amber.

### Primary
- **Signal Amber** (`{colors.signal}`): the lamp. It appears on the mailto control's fill, on the lit navigation tick of the current page, on lab-led publication ticks in the calibration rule, on the lab-led entry's left edge, on year figures in the publication list, on the readout numerals, on the focus ring, and on link hover. It is never used as a background for reading text, never as a decorative accent, and never on more than a few square centimetres of a viewport.
- **Signal Hot** (`{colors.signal-hot}`): the hover state of the amber control only.
- **Signal Ink** (`{colors.signal-ink}`): the near-black brown that reads on top of amber fills.
- **Signal Edge** (`{colors.signal-edge}`): the darker amber that borders the control and rings the lamp. Border only — never a fill, never text.
- **Lamp** (`{colors.lamp}`) and its three glow values (`{colors.lamp-glow}`, `{colors.lamp-glow-soft}`, `{colors.lamp-glow-hot}`): the lit indicator inside the control. The soft and hot values are the two ends of the pulse; nothing else may use them.

### Secondary
- **Brass** (`{colors.brass}`): the drawing colour. Every rule, graduation, baseline, tick and engraved label on the chassis. Also the year figures on the scale and the small uppercase link chips.
- **Brass Dim** (`{colors.brass-dim}`): the same drawing colour at plate strength. It carries seams, engraved labels sitting on a plate, unlit navigation ticks and the non-lab-led publication ticks.

### Neutral — chassis
- **Enamel** (`{colors.enamel}`): the body background and the resting fill of every enamel card.
- **Enamel Lit** (`{colors.enamel-lit}`): one step up; the hover fill for enamel cards and the sticky year index.
- **Enamel Deep** (`{colors.enamel-deep}`): one step down; the footer, the portrait bezel field, and the translucent header.
- **Enamel Edge** (`{colors.enamel-edge}`): the hairline border colour inside the dark world. It is a border value, never text.
- **Ink on Enamel** (`{colors.ink-on-enamel}`): default body text on the chassis.
- **Ink on Enamel Bright** (`{colors.ink-on-enamel-bright}`): the brighter cream used for large headings and card titles, where the extra step reads as engraved lettering rather than body copy.
- **Ink on Enamel Soft** (`{colors.ink-on-enamel-soft}`): secondary text — author lists, venues, ledes, unlit navigation.
- **Ink on Enamel Faint** (`{colors.ink-on-enamel-faint}`): the quietest text that still passes 4.5:1 (6.7). Reserved for stated absences, such as "No open link on record". Not a general-purpose tertiary grey.

### Neutral — plate
- **Plate** (`{colors.plate}`): the warm cream reading surface inset into the chassis.
- **Plate Lit** (`{colors.plate-lit}`): the hover state of a plate-mounted card.
- **Plate Shade** (`{colors.plate-shade}`): the gap colour between plate cards; the 1px grid gap shows through as a machined joint.
- **Plate Ink** (`{colors.plate-ink}`) / **Plate Ink Soft** (`{colors.plate-ink-soft}`): text and secondary text on the plate.

### Tertiary — calibration stamps
Three maturity colours, each defined twice so the stamp stays legible on both surfaces. On enamel: **Stable Green** (`{colors.stamp-stable-enamel}`), **Experimental Amber-Tan** (`{colors.stamp-experimental-enamel}`), **Deprecated Grey-Rose** (`{colors.stamp-deprecated-enamel}`). On plate: `{colors.stamp-stable-plate}`, `{colors.stamp-experimental-plate}`, `{colors.stamp-deprecated-plate}`. The stamp draws its border from `currentColor`, so the pair is always self-consistent.

### Named Rules

**The Reserved Amber Rule.** Amber means one of three things and nothing else: live state, a lab-led publication, or the single mailto action. If a new element wants amber for emphasis, it gets brass or a brighter cream instead.

**The Two Surfaces Rule.** There are exactly two backgrounds in this system — enamel and plate. Anything a visitor must read at length goes on a plate; identity, navigation, indexes and data graphics stay on the chassis. A third surface colour is a defect, not an option.

**The Brass Draws, Amber Lights Rule.** Every rule, border, graduation and divider is brass or brass-dim. Amber never draws structure and brass never fills a control.

**The Brass-Dim-On-Plate Rule.** Brass at full strength fails contrast on cream (2.8:1) and is therefore never used for text on a plate; plate-side engraved labels use brass-dim (5.7:1). Brass on the plate is permitted only as a hairline border.

**The Verified Pair Rule.** These pairs were computed and pass 4.5:1; edits must not regress them. On enamel — ink-on-enamel 12.4, ink-on-enamel-bright 15.0, ink-on-enamel-soft 5.8, brass 5.0, signal 8.2, stamp colours 6.7–7.9. On enamel-lit — ink-on-enamel 11.0, ink-on-enamel-soft 5.1, signal 7.3. On plate — plate-ink 12.8, plate-ink-soft 5.7, brass-dim 5.7, stamp colours 4.9–5.6. Signal-ink on the amber control 8.7, and on its hover fill 10.7.

## Typography

**Display / Label Font:** Archivo Variable (weight 100–900, width 62–125%), self-hosted, preloaded, with `ui-sans-serif, system-ui` as fallback.
**Reading Font:** Literata Variable (weight 200–900), self-hosted, preloaded, with `ui-serif, Georgia` as fallback.

**Character:** Archivo condensed and tracked-out is the instrument's own stamped lettering — it labels, it does not talk. Literata is the technical serif that actually speaks: ledes, prose, blurbs, venue names. The pairing splits the page into things the instrument says about itself and things the operator says to you.

### Hierarchy
- **Display** (600, `clamp(2.6rem, 5.2rem)`, 1.08, width 92%): page nameplates on interior pages only. One per page, in bright cream, sitting on a 2px brass rule.
- **Headline** (500, `clamp(1.8rem, 2.75rem)`, 1.14, tracking −0.02em, width 96%): the home lede — a single sentence that states the work, with one italic serif phrase in amber inside it.
- **Title** (500–700, `clamp(1.45rem, 2rem)`, width 88–96%): section headings, the leading range name, year headings in the record, group counts. Capped at 24ch and balanced.
- **Subtitle** (600, `clamp(1.15rem, 1.4rem)`): card names, publication titles, range names.
- **Reading** (Literata 400, `clamp(1.15rem, 1.4rem)`, 1.6): the operator's prose, ledes, range descriptions, card blurbs, footer pitch.
- **Body** (400, `clamp(0.95rem, 1.05rem)`, 1.55, tabular numerals): list items, readouts, notes.
- **Label / Engraved** (600, `clamp(0.76rem, 0.82rem)`, tracking 0.16em, uppercase, width 88%, brass): every engraved caption on the instrument — "Published record", "About", "Appointments", language tags, group names.
- **Stamp** (700, `{typography.micro-lg}`, tracking 0.14em, uppercase, width 85%): calibration stamps only.
- **Micro** (`{typography.micro-lg}` 0.72rem, `{typography.micro}` 0.62rem, `{typography.micro-sm}` 0.58rem): the three engraved micro-steps below the body ramp. They carry scale year figures, language tags, link chips, index entries, footer roles and legal lines. They are a real part of the ramp, not one-off literals — an instrument's smallest lettering is still lettering.
- **Body Small** (`{typography.step-0-sm}` 0.88rem): Literata at card-blurb and venue size, where full body would crowd the rack.

### Named Rules

**The Two Voices Rule.** Archivo labels and titles; Literata reads. If a block is a sentence a person would say aloud, it is serif; if it is a name the instrument stamped on itself, it is condensed uppercase Archivo.

**The Measure Rule.** Every text block carries an explicit character cap sized to its role: 24ch section titles, 30ch footer pitch, 34ch range ledes, 46–58ch publication titles, 48–66ch prose and notes, 78ch author lists. Prose never runs the full container width.

**The Named Step Rule.** Every font-size in the build resolves to a token on this ramp, including the micro steps. A literal `font-size` in a component is drift: if a new size is genuinely needed, it is added here first and then used.

**The No Kicker Rule.** A heading is never preceded by an eyebrow, kicker or section number. The engraved label is a standalone caption in its own column or above a block — never a label-over-title stack.

## Layout

The page is a stack of full-bleed horizontal bands. Each band paints its own background (enamel, enamel-lit, plate or enamel-deep) edge to edge, and its content is constrained by `.chassis`: `max-width: 1440px`, centred, with symmetric `{spacing.gutter}` padding. There is no global grid; each band declares the grid it needs.

Observed band grammar:
- **Face** (home first viewport): two columns, `1.35fr / 0.85fr` — the lede and amber control left, the portrait bezel right — collapsing to one column at 900px, with the bezel capped at 400px.
- **Nameplate** (interior page heads): `auto / 1fr`, baseline-aligned to the bottom, capped top by a 2px brass rule and bottom by a 1px edge hairline. One column below 760px.
- **Operator plate**: `8rem / 1fr` — a sticky engraved label column beside the prose. One column below 900px, label unsticks.
- **Channels** (ranges): full-width rows, `0.9fr / 1.1fr`, each row divided by 1px edge hairlines. One column below 900px.
- **Racks** (software, instruments): a grid whose 1px gap is filled by the surface behind it, so cards read as units seated in a chassis rather than as floating cards. The plate rack is a fixed 3 columns (2 at 900px, 1 at 560px); the enamel rack is `repeat(auto-fit, minmax(270px, 1fr))`.
- **Footer**: `1fr / 0.75fr / 0.9fr / 0.9fr` on enamel-deep; 2 columns at 900px with the portrait dropped; 1 column at 560px.

Rhythm is fluid rather than stepped: section heads use `{spacing.section-head}`, full bands use `{spacing.band}`, cards use `{spacing.card}`, and every one is a `clamp()` so density scales with viewport instead of snapping at breakpoints. Breakpoints in use: 900px (structural collapse), 760px (nameplate), 720px (chrome and index reflow), 640px/560px (type and rack minimums).

### Named Rules

**The Sticky Budget Rule.** Three layers can stick at once — the header, the year index, the year heading. `--chrome-h` (3.3rem) and `--index-h` (2.3rem) exist so each layer offsets by the sum of the ones above it: the index sticks at `var(--chrome-h)`, year headings at `calc(var(--chrome-h) + var(--index-h))`. Both values change at 720px (5.2rem / 2.1rem) because the chrome wraps to two rows there. Any change to the header's height or wrap behaviour must update these tokens in the same edit, and the mobile year index is forced to a single non-wrapping scroll row precisely so its height stays knowable.

**The Full-Bleed Band Rule.** Backgrounds go on the section, never on `.chassis`. A band that paints only to the container edge breaks the chassis illusion.

## Elevation & Depth

The system is flat by doctrine. Depth is produced by tonal layering between four enamel steps and by 1px brass or edge hairlines — not by shadows. There are exactly two shadows in the build, both honest offset-and-blur, and both attached to the one amber control. Gradients appear once, in the seam, as a fade to transparent at both ends of a hairline — the machined equivalent of a rule that does not quite reach the edge.

### Shadow Vocabulary
There are exactly two shadow tokens, and both carry a real offset and blur:

- **`--shadow-2`** (`0 2px 6px rgba(0,0,0,0.45)`): the resting state of anything that sits above its surface — the amber mailto control, and the hero portrait bezel.
- **`--shadow-1`** (`0 1px 3px rgba(0,0,0,0.5)`): the pressed state, paired with `translateY(1px)`.
- **Lamp glow** (`0 0 0 1px var(--signal-edge), 0 0 9px 2px var(--lamp-glow)`): the lit indicator inside the control, and the equivalent glow on the current-page navigation tick. This is a light source, not a depth cue, which is why it is the one zero-offset shadow the system permits.

A zero-offset, zero-blur inset hairline is **not** a shadow in this system. An earlier build used one on the portrait bezel; it was decoration wearing depth's clothes and was replaced with `--shadow-2`. Frames are made with a real 1px border and padding, never with a faked inset edge.

### Named Rules

**The Honest Hardware Rule.** The instrument is drawn, not simulated. Flat fills, real 1px borders, one offset shadow on the one control. No multi-stop metallic gradients, no light/dark bevel pairs, no emboss, no faux screw heads.

**The Hairline Depth Rule.** When two things need separating, use a rule — `{spacing.rule}` brass-dim or enamel-edge between rows and cards, `{spacing.rule-heavy}` brass under a heading that opens a section. Shadow is not a separator here.

## Shapes

Square is the default and near-total condition. Rectangular ticks, rectangular stamps, rectangular cards, rectangular plates. The three exceptions are deliberate and tiny: the amber control takes a 2px radius (a machined chamfer, not a rounded button), the calibration stamp takes 1px, and the indicator lamp is a 9px circle — the only true curve in the system, and it earns it by being a lamp.

Borders carry the form language. Cards are outlined or seated in a 1px gap; plates are bounded top and bottom by brass-dim; section-opening headings sit under a 2px brass rule; the lab-led publication entry carries a 1px amber left edge. The recurring silhouette is the tick: a small filled rectangle, 9–16px wide, used as a scale graduation in the calibration rule, as the navigation state indicator, as a list bullet, and as a legend swatch. When something needs a mark, it gets a tick.

## Components

### Buttons — the signal control
- **Shape:** near-square (2px radius), 1px `#6d4d15` border.
- **Primary (and only) button:** amber fill, near-black ink, 700 weight, `0.85rem 1.4rem` padding, with a lit lamp inside it. It is always a `mailto:` link. The system has no secondary or ghost button; a non-primary action is a link with a brass underline.
- **Hover / Active:** fill lifts to signal-hot at 140ms; active presses 1px down and drops the shadow to 1/3.
- **Lamp:** a 9px circle, pale gold, pulsing on a 3.2s ease-in-out loop, suppressed under `prefers-reduced-motion`.

### Calibration stamp
- **Style:** uppercase 0.68rem condensed caps, 1px `currentColor` border, 1px radius, `0.2rem 0.5rem` padding, never wrapping. Colour is the maturity colour; DEPRECATED additionally carries a 1px line-through.
- **Surface-aware:** on a plate, all three colours switch to their darker plate variants via a `.plate .stamp--*` override.
- **Behaviour:** the stamp is content, not decoration. It carries the author's own README wording (`STABLE` / `EXPERIMENTAL` / `DEPRECATED`, expanded in the legend as "In calibration" / "Under calibration" / "Withdrawn"). It is never hidden, softened, greyed out, or omitted for a tool that would look better without it.

### Cards — racks and units
- **Corner style:** square (0).
- **Seating:** cards live in a grid whose `gap` is exactly 1px and whose background is the surface behind them (plate-shade behind plate cards, enamel-edge outline around enamel cards), so the join reads as a machined seam rather than a gutter.
- **Background:** enamel for the software rack, plate for the instruments rack. Hover lifts one tonal step (enamel-lit / plate-lit) over 140–160ms. No lift, no scale, no shadow.
- **Deprecated units** darken to `color-mix(in srgb, var(--enamel) 88%, #000)` and soften their title — quieter, never hidden.
- **Internal padding:** `{spacing.card}`.

### Navigation
- **Chrome:** sticky, translucent enamel-deep at 92% with a 6px backdrop blur, closed by a brass seam. Left: name plus engraved sub-label, divided by a 1px vertical edge rule. Centre-left: three uppercase links. Right: the email address as an engraved label.
- **Link state:** each link carries a 2×11px tick. Unlit ticks are brass-dim; hover raises the tick to brass and the label to full cream; the current page lights both the label and the tick amber, with a 7px amber glow.
- **Mobile (≤720px):** the bar wraps, the contact label is dropped, and the nav becomes a full-width justified row — which is why `--chrome-h` grows to 5.2rem there.

### Link chips
Small uppercase brass labels in a 1px brass-dim box (DOI, Preprint, Materials, Repository). On hover they invert to an amber fill with enamel-deep text. When a publication has no open link, the space carries an italic "No open link on record" rather than collapsing — an absent record is stated, not hidden.

### Calibration rule (signature component)
The instrument's main scale, and the piece the whole world is built around. Every tick is one real publication from `references.bib`, placed in a per-year column, stacked upward from a 1.5px brass baseline; each year carries a major graduation below the line. Lab-led work is filled amber and sorted to the bottom of its stack, nearest the scale; collaborations are brass-dim at 85% opacity. In-press work sits in a trailing column with a dashed amber stroke. Every tick carries an SVG `<title>` with year and paper title, and the whole figure carries a sentence-level `aria-label` stating the counts. Ticks grow from the baseline on first paint (620ms, staggered 40ms per column, capped after the tenth), suppressed under `prefers-reduced-motion`. A `compact` variant reduces the tick unit from 11px to 7px.

**The graphic is the data.** If the bibliography were removed the figure would vanish; it has no fixed geometry of its own.

### Readout
Counts stated inline along a hairline, the way a scale is annotated: a wrapping baseline-aligned row above a 1px edge rule, each item small and soft-inked, with its numeral in amber at 700 and tabular figures. This is the system's answer to a metrics strip — same information, no boxes, no oversized numerals.

### Arrow
A drawn SVG: an 11px line plus a chevron polyline at 1.25px stroke in `currentColor`, matching the chassis line weight. It translates 3px on parent hover, and rotates −90° when it means "back to top". Never a Unicode arrow, never an icon font.

### Engraved label
The instrument's own lettering: condensed 600 uppercase Archivo at 0.16em tracking in brass, or brass-dim when it sits on a plate. Used for captions, column labels, group names, language tags and the header sub-label. It labels a region; it never introduces a heading.

## Do's and Don'ts

### Do:
- **Do** alternate chassis and plate, and put anything a visitor must read at length on a plate.
- **Do** reserve amber for live state, lab-led publications and the single mailto control.
- **Do** draw every rule, divider and graduation in brass or brass-dim at 1px, or 2px when it opens a section.
- **Do** use brass-dim, not brass, for any text on a plate (brass fails contrast there at 2.8:1).
- **Do** print the calibration stamp on every software item, in the author's own vocabulary, including DEPRECATED.
- **Do** update `--chrome-h` / `--index-h` in the same edit as any change to the header's height or wrapping, and keep the mobile year index a single non-wrapping row.
- **Do** give each text block an explicit `ch` cap sized to its role.
- **Do** paint band backgrounds on the section element and constrain only the inner `.chassis`.
- **Do** derive graphics from real data, so removing the data removes the graphic.
- **Do** wrap every animation in `@media (prefers-reduced-motion: no-preference)` and hold transitions at 90–160ms.

### Don't:
- **Don't** introduce a third surface colour, or a card that floats free of a rule, seam or 1px seating gap.
- **Don't** spend amber on decoration, on a heading, or on a second call to action — there is one action.
- **Don't** add an eyebrow, kicker, or section number above a heading.
- **Don't** build a metric strip of oversized round numbers; counts belong in the inline readout.
- **Don't** use a Unicode character or an icon font as an icon — draw it as SVG at the chassis stroke weight, like `Arrow.astro`.
- **Don't** fake hardware: no metallic gradients, embossing, or paired light/dark bevels. Depth is tonal layering, hairlines, and one offset shadow on the amber control.
- **Don't** soften, grey out, hide, or omit a maturity stamp to make the work look more finished than it is.
- **Don't** round a corner past 2px; the lamp is the system's only circle.
- **Don't** let a heading, list item or link rely on colour alone for state — the navigation tick, the stamp border and the lab-led left edge each carry the state in form as well as hue.
