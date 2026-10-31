/**
 * BibTeX reader for the lab's publications.bib.
 *
 * The record of truth lives in the AffCom Lab repo; this site fetches it at
 * build time so there is one file to keep current, not two. Written against
 * that file rather than the general grammar: @article / @inproceedings /
 * @incollection / @misc, brace-delimited values, unquoted numeric years, and
 * three custom fields — `primary` (lab-led work), `preprint`, `materials`.
 */

export const LAB_BIB_URL = 'https://raw.githubusercontent.com/jmgirard/affcomlab/main/publications.bib';

const AUTHOR = 'Girard';

/** Split entries on top-level `@type{key,` boundaries. */
function splitEntries(src) {
  const out = [];
  const re = /@(\w+)\s*\{\s*([^,]+),/g;
  let m;
  while ((m = re.exec(src))) {
    const start = re.lastIndex;
    let depth = 1;
    let i = start;
    while (i < src.length && depth > 0) {
      const ch = src[i];
      if (ch === '{') depth++;
      else if (ch === '}') depth--;
      i++;
    }
    out.push({ type: m[1].toLowerCase(), key: m[2].trim(), body: src.slice(start, i - 1) });
    re.lastIndex = i;
  }
  return out;
}

/** Parse `field = {value}` / `field = value` pairs, respecting nested braces. */
function parseFields(body) {
  const fields = {};
  let i = 0;
  while (i < body.length) {
    const eq = body.indexOf('=', i);
    if (eq === -1) break;
    const name = body.slice(i, eq).replace(/^[\s,]+/, '').trim().toLowerCase();
    if (!name || /\s/.test(name)) { i = eq + 1; continue; }

    let j = eq + 1;
    while (j < body.length && /\s/.test(body[j])) j++;

    let value;
    if (body[j] === '{') {
      let depth = 1;
      const start = ++j;
      while (j < body.length && depth > 0) {
        if (body[j] === '{') depth++;
        else if (body[j] === '}') depth--;
        j++;
      }
      value = body.slice(start, j - 1);
    } else {
      const start = j;
      while (j < body.length && body[j] !== ',') j++;
      value = body.slice(start, j).trim();
    }
    fields[name] = value;
    i = j + 1;
  }
  return fields;
}

/**
 * Strip the TeX that survives in this file: protective braces, escaped
 * characters, and accent macros like {\"o} and {\'e}.
 */
function clean(str = '') {
  const ACCENTS = {
    '"': { o: 'ö', a: 'ä', u: 'ü', e: 'ë', i: 'ï', O: 'Ö', A: 'Ä', U: 'Ü' },
    "'": { e: 'é', a: 'á', o: 'ó', i: 'í', u: 'ú', c: 'ć', E: 'É', A: 'Á', O: 'Ó' },
    '`': { e: 'è', a: 'à', o: 'ò', i: 'ì', u: 'ù' },
    '^': { e: 'ê', a: 'â', o: 'ô', i: 'î', u: 'û' },
    '~': { n: 'ñ', a: 'ã', o: 'õ' },
    'c': { c: 'ç', C: 'Ç' },
    'v': { s: 'š', c: 'č', z: 'ž', S: 'Š', C: 'Č', Z: 'Ž' },
  };

  return str
    .replace(/\{\\(["'`^~cv])\{?(\w)\}?\}/g, (m, acc, ch) => ACCENTS[acc]?.[ch] ?? ch)
    .replace(/\\(["'`^~])\{?(\w)\}?/g, (m, acc, ch) => ACCENTS[acc]?.[ch] ?? ch)
    .replace(/\\&/g, '&')
    .replace(/\\_/g, '_')
    .replace(/\\%/g, '%')
    .replace(/\\\$/g, '$')
    .replace(/\{|\}/g, '')
    .replace(/\s+/g, ' ')
    .replace(/---/g, '—')
    .replace(/--/g, '–')
    .trim();
}

/**
 * BibTeX author lists are `Last, First and Last, First`, with braces
 * protecting compound surnames such as {Aafjes-van Doorn}.
 */
function parseAuthors(raw = '') {
  if (!raw) return [];
  return raw
    .split(/\s+and\s+/i)
    .map((name) => {
      const t = name.trim();
      if (!t) return null;
      const [last, first] = t.includes(',') ? t.split(',') : [t.split(' ').pop(), t.split(' ').slice(0, -1).join(' ')];
      const family = clean(last || '');
      const given = clean(first || '');
      return {
        family,
        given,
        initials: given.split(/[\s.]+/).filter(Boolean).map((p) => p[0] + '.').join(' '),
        isGirard: family === AUTHOR,
      };
    })
    .filter(Boolean);
}

/** Years are numeric except for values like `in press`. */
function parseYear(raw = '') {
  const v = clean(raw);
  const n = Number.parseInt(v, 10);
  return {
    label: Number.isNaN(n) ? v : String(n),
    value: Number.isNaN(n) ? null : n,
    // "in press" sorts ahead of every dated entry.
    sort: Number.isNaN(n) ? 9999 : n,
  };
}

/** shortDOI (`10/g824tc`) and full DOIs both resolve at doi.org. */
function doiUrl(doi) {
  if (!doi) return null;
  const d = clean(doi).replace(/^https?:\/\/(dx\.)?doi\.org\//, '');
  return `https://doi.org/${d}`;
}

const VENUE_FIELDS = ['journal', 'booktitle', 'publisher'];

export async function loadPublications(url = LAB_BIB_URL) {
  const res = await fetch(url);
  // Fail the build rather than ship a page with an empty record.
  if (!res.ok) throw new Error(`Could not fetch ${url}: ${res.status} ${res.statusText}`);
  const src = await res.text();

  const pubs = splitEntries(src).map(({ type, key, body }) => {
    const f = parseFields(body);
    const authors = parseAuthors(f.author);
    const year = parseYear(f.year);
    const venueField = VENUE_FIELDS.find((k) => f[k]);

    return {
      key,
      type,
      title: clean(f.title),
      shortTitle: f.shorttitle ? clean(f.shorttitle) : null,
      authors,
      authorPosition: authors.findIndex((a) => a.isGirard) + 1 || null,
      year,
      venue: venueField ? clean(f[venueField]) : null,
      venueKind: venueField === 'booktitle' ? 'conference' : venueField === 'journal' ? 'journal' : 'other',
      volume: f.volume ? clean(f.volume) : null,
      number: f.number ? clean(f.number) : null,
      pages: f.pages ? clean(f.pages) : null,
      abstract: f.abstract ? clean(f.abstract) : null,
      doi: clean(f.doi || ''),
      doiUrl: doiUrl(f.doi),
      pmid: f.pmid ? clean(f.pmid) : null,
      preprint: f.preprint ? clean(f.preprint) : null,
      materials: f.materials ? clean(f.materials) : null,
      // `primary = {true}` marks lab-led work Jeff drove, regardless of author order.
      labLed: clean(f.primary || '').toLowerCase() === 'true',
      keywords: f.keywords ? clean(f.keywords).split(',').map((k) => k.trim()).filter(Boolean) : [],
    };
  });

  pubs.sort((a, b) => b.year.sort - a.year.sort || a.title.localeCompare(b.title));
  return pubs;
}

/**
 * Vancouver-ish author list with Girard emphasised. Built from the author objects rather than
 * by replacing text: "Girard J." is a substring of "Girard J. M.", so string
 * surgery double-wraps the very entries that matter most.
 */
export function formatAuthorsHtml(authors, max = 8) {
  const render = (a) => {
    const name = `${a.family} ${a.initials}`.trim();
    return a.isGirard ? `<b>${name}</b>` : name;
  };

  if (authors.length <= max) return authors.map(render).join(', ');

  const girardAt = authors.findIndex((a) => a.isGirard);

  // On a huge collaboration (the Seamless Interaction paper carries ~90 authors)
  // a plain cutoff drops Girard from his own record. Keep him visible.
  if (girardAt >= max) {
    const head = authors.slice(0, max - 1).map(render).join(', ');
    const tail = girardAt === authors.length - 1 ? '' : ', et al.';
    return `${head} … ${render(authors[girardAt])}${tail}`;
  }

  return `${authors.slice(0, max).map(render).join(', ')}, et al.`;
}
