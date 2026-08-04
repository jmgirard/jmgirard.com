/**
 * The 19 projects Jeff lists in his GitHub profile README — his own curation,
 * not the full ~56-repo inventory. Groups, descriptions and maturity labels
 * are carried over as authored. `agreement` and `mReliability` are absent from
 * the README deliberately and are not reinstated here.
 *
 * Maturity ships with the work: it is how he characterizes his own software,
 * and hiding it to look more finished would misrepresent him.
 */

/** Calibration grades, in the instrument's own vocabulary. */
export const GRADES = {
  stable: {
    label: 'In calibration',
    short: 'STABLE',
    note: 'Ready for use.',
  },
  experimental: {
    label: 'Under calibration',
    short: 'EXPERIMENTAL',
    note: 'Working, still moving.',
  },
  deprecated: {
    label: 'Withdrawn',
    short: 'DEPRECATED',
    note: 'Superseded; kept for the record.',
  },
};

export const groups = [
  {
    id: 'statistics',
    name: 'Statistics',
    caption: 'Measurement and structure, packaged for R.',
    items: [
      {
        name: 'circumplex',
        grade: 'stable',
        lang: 'R',
        blurb: 'Analyzing and visualizing circular data.',
        url: 'https://circumplex.jmgirard.com/',
      },
      {
        name: 'ackwards',
        grade: 'stable',
        lang: 'R',
        blurb: 'Hierarchical structure (bass-ackwards) analysis.',
        url: 'https://github.com/jmgirard/ackwards',
      },
      {
        name: 'intraclass',
        grade: 'experimental',
        lang: 'R',
        blurb: 'Intraclass correlations (ICCs).',
        url: 'https://github.com/jmgirard/intraclass',
      },
      {
        name: 'bsync',
        grade: 'experimental',
        lang: 'R',
        blurb: 'Behavioral synchrony analyses.',
        url: 'https://github.com/jmgirard/bsync',
      },
    ],
  },
  {
    id: 'research',
    name: 'Research',
    caption: 'Instruments for collecting and coding human behavior.',
    items: [
      {
        name: 'openac',
        grade: 'experimental',
        lang: 'R',
        blurb: 'Automating common affective computing and social signal processing tasks.',
        url: 'https://github.com/jmgirard/openac',
      },
      {
        name: 'tidymedia',
        grade: 'experimental',
        lang: 'R',
        blurb: 'Working with audio, video and image files.',
        url: 'https://github.com/jmgirard/tidymedia',
      },
      {
        name: 'facs',
        grade: 'experimental',
        lang: 'R',
        blurb: 'Working with Facial Action Coding System data.',
        url: 'https://github.com/jmgirard/facs',
      },
      {
        name: 'hitop',
        grade: 'experimental',
        lang: 'R',
        blurb: 'Working with Hierarchical Taxonomy of Psychopathology data.',
        url: 'https://github.com/jmgirard/hitop',
      },
      {
        name: 'rlmstudio',
        grade: 'experimental',
        lang: 'R',
        blurb: 'Accessing and controlling local AI models through LM Studio.',
        url: 'https://github.com/jmgirard/rlmstudio',
      },
      {
        name: 'CARMA',
        grade: 'deprecated',
        lang: 'MATLAB',
        blurb: 'Collecting continuous media annotations.',
        url: 'https://carma.jmgirard.com',
      },
      {
        name: 'DARMA',
        grade: 'deprecated',
        lang: 'MATLAB',
        blurb: 'Collecting continuous two-dimensional media annotations.',
        url: 'https://darma.jmgirard.com',
      },
    ],
  },
  {
    id: 'quarto',
    name: 'Quarto',
    caption: 'Extensions for documents that have to do more.',
    items: [
      {
        name: 'embedpdf',
        grade: 'stable',
        lang: 'Quarto',
        blurb: 'Embedding PDF files in HTML.',
        url: 'https://github.com/jmgirard/embedpdf',
      },
      {
        name: 'lordicon',
        grade: 'stable',
        lang: 'Quarto',
        blurb: 'Embedding animated Lordicon icons in HTML.',
        url: 'https://github.com/jmgirard/lordicon',
      },
      {
        name: 'details',
        grade: 'stable',
        lang: 'Quarto',
        blurb: 'Interactive details blocks in HTML documents.',
        url: 'https://github.com/jmgirard/details',
      },
      {
        name: 'honeypot',
        grade: 'experimental',
        lang: 'Quarto',
        blurb: 'Detecting LLM cheating on HTML assignments.',
        url: 'https://github.com/jmgirard/honeypot',
      },
    ],
  },
  {
    id: 'containers',
    name: 'Containers',
    caption: 'Reproducible environments, so a result survives the machine it ran on.',
    items: [
      {
        name: 'rstudio2u',
        grade: 'stable',
        lang: 'Docker',
        blurb: 'Multiarchitecture image combining RStudio and r2u.',
        url: 'https://github.com/jmgirard/rstudio2u',
      },
      {
        name: 'r2u-ssh',
        grade: 'stable',
        lang: 'Docker',
        blurb: 'Reaching r2u from Positron over SSH.',
        url: 'https://github.com/jmgirard/r2u-ssh',
      },
      {
        name: 'rocker-bayes',
        grade: 'stable',
        lang: 'Docker',
        blurb: 'Multiarchitecture image for Bayesian analysis in R.',
        url: 'https://github.com/jmgirard/rocker-bayes',
      },
      {
        name: 'audio-whisper',
        grade: 'stable',
        lang: 'Docker',
        blurb: 'AI transcription from R with CUDA support.',
        url: 'https://github.com/jmgirard/audio-whisper',
      },
    ],
  },
];

export const allSoftware = groups.flatMap((g) => g.items.map((i) => ({ ...i, group: g.id })));

export const softwareSummary = {
  total: allSoftware.length,
  stable: allSoftware.filter((i) => i.grade === 'stable').length,
  experimental: allSoftware.filter((i) => i.grade === 'experimental').length,
  deprecated: allSoftware.filter((i) => i.grade === 'deprecated').length,
};

/** Curated highlights for the front panel; the full rack lives on /software. */
/**
 * The front-panel six. Chosen for relevance to the three service ranges and
 * balanced across calibration states — deprecated tools stay on /software,
 * where the full record belongs, rather than fronting the offer.
 */
export const featured = ['circumplex', 'ackwards', 'intraclass', 'openac', 'honeypot', 'embedpdf'];
