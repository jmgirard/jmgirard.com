---
name: jmgirard.com
description: The personal front door to the AffCom Lab. It borrows the lab site's visual system so the two sites read as one family.
source-of-truth: theme.scss in jmgirard/affcomlab
colors:
  paper: "#faf7f2"
  paper-2: "#f4f0e9"
  ink: "#1c1a17"
  ink-soft: "#3d3833"
  muted: "#6d675f"
  line: "#e2dbd0"
  col-comm: "#d9613b"
  col-mh: "#17a398"
  col-ip: "#8a4fa8"
  col-meth: "#c99a2e"
  col-cs: "#3b6fd6"
typography:
  headings: "Fraunces 600, Georgia fallback"
  body: "Source Sans 3 400/600, 1.05rem"
---

# jmgirard.com design

## Relation to the lab site

This site does not have its own visual identity. It uses the design system of
affcom.ku.edu, which is defined in `theme.scss` in the `jmgirard/affcomlab`
repo. If the lab theme changes, change it there first. Then copy the change into
`src/styles/site.css`. The tokens in the front matter above mirror that file.

The two sites have different jobs. The lab site holds the research record:
people, publications, datasets, software and courses. This site speaks to
companies and outside collaborators. It says who Jeff is, what he does for
clients and how to reach him. It links to the lab for everything else and does
not repeat it.

## Borrowed patterns

Each part of the page reuses a pattern from the lab site.

| Part | Lab pattern |
|---|---|
| Header | The lab navbar: Fraunces name, 600-weight links, a hairline that grows under the link on hover. |
| Hero | The lab homepage hero: eyebrow, large Fraunces name, lede, muted role line, pill buttons. |
| Section titles | Fraunces h2 with a 1px `line` rule under it. |
| Appointments | The timeline on the lab profile pages: a ruled spine with open dots. |
| Work with me | The opportunity cards: white card, 14px radius, 4px coloured left border. |
| Selected papers | The short publication list on the lab profile pages. |
| More at the lab | The resource cards: the whole card is the link, and it lifts 3px on hover. |
| Footer | `paper-2` band with muted text. |

## Colour

The page is paper and ink. The five research-area colours appear only as the
left border and list markers of the three service cards: `col-cs` for AI
evaluation, `col-mh` for measurement and statistics, and `col-meth` for tooling
and training. Do not add other accent colours.

## Constraints

The layout must work at 375px with a 16px gutter and no horizontal scroll.
Every hover motion has a `prefers-reduced-motion` fallback. Body text on paper
uses `ink`, `ink-soft` or `muted`, and all three pass 4.5:1 contrast.
