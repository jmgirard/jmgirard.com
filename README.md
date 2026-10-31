# jmgirard.com

Personal professional site for Jeff Girard. Astro, static output, no client-side
framework.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview  # serve the built output
```

## What this site is

A one-page personal front door for consulting and outside collaborators. The
full research record lives on the lab site, [affcom.ku.edu](https://affcom.ku.edu)
(repo `jmgirard/affcomlab`), and this site links there instead of repeating it.
It uses the lab site's palette, fonts, buttons and cards so the two read as one
family. See `DESIGN.md`.

## Where the content lives

| What | Source | Notes |
|---|---|---|
| Publications | `publications.bib` in `jmgirard/affcomlab` | Fetched from GitHub at build time by `src/lib/bib.js`. The build fails if the fetch fails or a selected key is missing. |
| Selected papers | `SELECTED` in `src/pages/index.astro` | Five bib keys. Each title links to its card on the lab publications page. |
| Services, appointments, bio | `src/pages/index.astro` | `bio.md` (gitignored) is the source of record for the bio. |
| Old pages | `redirects` in `astro.config.mjs` | `/publications`, `/software` and `/datasets` redirect to the lab site. |

Because the bib comes from the lab repo, a new paper there shows up here (in the
publication count) on the next build of this site. Push to `main` or run the
workflow by hand to rebuild.

### Photography

Camera originals are gitignored. The committed derivative the build consumes is
`src/assets/headshot-working.jpg`. Regenerate it from the original if a
different crop is needed:

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
