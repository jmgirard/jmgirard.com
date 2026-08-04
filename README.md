# jmgirard.com

Personal professional site for Jeff Girard. Astro, static output, no client-side
framework.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview  # serve the built output
```

## Where the content lives

| What | Source | Notes |
|---|---|---|
| Publications | `references.bib` | Parsed at build time by `src/lib/bib.js`. Never hand-transcribe an entry into markup — edit the .bib and rebuild. |
| Software | `src/data/software.js` | The 19 projects from the GitHub profile README, with their maturity labels. |
| Bio | `bio.md` | Source of record. `src/pages/index.astro` mirrors it; keep them in sync. |
| Product context | `PRODUCT.md` | Audience, positioning, constraints, infrastructure facts. |

### The BibTeX custom fields

`references.bib` carries three non-standard fields the build depends on:

- `primary = {true}` — lab-led work Jeff drove, regardless of author position.
  Renders as amber ticks on the calibration rule and as flagged entries.
- `preprint = {url}` — open preprint. Rendered as a PREPRINT link.
- `materials = {url}` — data or code. Rendered as a MATERIALS link.

Non-numeric years (`in press`) are supported and sort ahead of dated entries.

### Photography

Camera originals are gitignored. The committed derivatives the build consumes
live in `src/assets/` (`headshot-working.jpg` for the hero, `headshot-smiling.jpg`
for the footer). Regenerate from the originals if a different crop is needed:

```bash
sips -Z 2400 --setProperty formatOptions 88 --out src/assets/headshot-working.jpg <original>.JPG
```

## Deployment

GitHub Pages, via `.github/workflows/deploy.yml` on push to `main`.

- `public/CNAME` sets the apex domain.
- `public/.nojekyll` is **required** — without it GitHub Pages runs Jekyll, which
  ignores `_astro/` and silently 404s every stylesheet, font and image.

### ⚠️ Before pointing the apex at GitHub Pages

The MX record for jmgirard.com is currently `0 jmgirard.com.`, meaning mail
routes to whatever the apex A record resolves to. Repointing the apex at GitHub
Pages without changing MX first would hand `me@jmgirard.com` to GitHub's web
servers and silently break incoming mail.

Order of operations:

1. Change MX to target the InMotion server's hostname or IP directly, not `jmgirard.com`.
2. Verify mail still delivers.
3. Only then repoint the apex A records at GitHub Pages.

DNS is served by InMotion's nameservers, so both edits happen in the same panel.
The InMotion plan is paid through 2027-11 and is kept for mail. Note the domain
registration expires earlier, 2026-11-08.

Existing subdomains already on GitHub Pages must not be disturbed:
`circumplex`, `carma`, `darma`, `mreliability`. `r.jmgirard.com` points elsewhere.

## Screenshots

```bash
npm run preview
node scripts/shoot.mjs http://localhost:4322 .impeccable/shots
```

Captures desktop and mobile with real device emulation over the DevTools
protocol. Plain `chrome --screenshot` ignores the viewport meta and produces
clipped, misleading mobile output — hence the script.
