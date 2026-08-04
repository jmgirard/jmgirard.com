/**
 * Datasets and benchmarks Jeff helped release, newest first.
 *
 * Two things are stamped on every entry because they are what a visitor
 * actually needs and what most lab pages omit: what it costs to get the data
 * (`access`) and what his hand in it actually was (`role`). A corpus he is
 * eighth author on is not the same claim as one he led, and collapsing the
 * two would overstate the record.
 *
 * Where one release is built on another, `builtOn` points at the source. When
 * that source is also his (Seamless Interaction under FriendBench), it links
 * to its own entry on the page rather than off-site.
 */

/** How hard it is to actually get the data. */
export const ACCESS = {
  open: {
    short: 'OPEN',
    label: 'Open',
    note: 'Downloadable now, no request needed.',
  },
  gated: {
    short: 'GATED',
    label: 'Click-through',
    note: 'Public, behind terms you accept at download.',
  },
  request: {
    short: 'ON REQUEST',
    label: 'On request',
    note: 'Released to researchers after an access agreement.',
  },
};

export const datasets = [
  {
    id: 'friendbench',
    name: 'FriendBench',
    kind: 'Benchmark',
    title: 'Thin-slice social perception from dyadic interaction',
    year: 2026,
    role: 'Led',
    org: { name: 'Fluid Concepts Research', url: 'https://fluidconcepts.ai' },
    access: 'gated',
    license: 'CC BY-NC 4.0',
    modalities: ['Text', 'Audio', 'Video'],
    scale: '96 dyads',
    blurb:
      'Can a model tell whether two people have met before from a 20-second clip of them talking? Every dyad answers the same ice-breaker prompt, so the content cannot give it away — the signal is in the manner. Ships the answer key, ~90 crowd raters per modality, and zero-shot predictions from 26 models.',
    calibration:
      'Chance is 50%. The best model reaches 66.7% on audio and on video; the human crowd reaches 71.9% on video. Text is near chance for everyone.',
    builtOn: { name: 'Seamless Interaction', url: '#seamless' },
    url: 'https://huggingface.co/datasets/fluid-concepts/friend-bench',
    urlLabel: 'Hugging Face',
    paper: null,
    paperLabel: 'MINT 2026 (in press)',
  },
  {
    id: 'seamless',
    name: 'Seamless Interaction',
    kind: 'Dataset',
    title: 'Dyadic Audiovisual Motion Modeling and Large-Scale Dataset',
    year: 2025,
    role: 'Co-authored',
    org: { name: 'Meta FAIR', url: 'https://ai.meta.com/research/seamless-interaction/' },
    access: 'open',
    license: 'CC BY-NC 4.0',
    modalities: ['Video', 'Audio', 'Transcripts', 'Body & face motion'],
    scale: '4,000+ hours · 4,000+ participants',
    blurb:
      'Face-to-face interaction at a scale nothing else in this area approaches: over 4,000 hours of dyadic conversation across improvised and scripted contexts, with transcripts and extracted body and face motion. Built to train models that generate and understand how two people behave toward each other, not how one person emotes at a camera.',
    calibration: null,
    builtOn: null,
    url: 'https://github.com/facebookresearch/seamless_interaction',
    urlLabel: 'Download',
    paper: 'https://arxiv.org/abs/2506.22554',
    paperLabel: 'Agrawal et al. (2025)',
  },
  {
    id: 'dynamos',
    name: 'DynAMoS',
    kind: 'Dataset',
    title: 'Dynamic Affective Movie Clip Database for Subjectivity Analysis',
    year: 2023,
    role: 'Led',
    access: 'request',
    license: null,
    modalities: ['Video', 'Ratings'],
    scale: '22 clips · 83 raters',
    blurb:
      'Affective movie clips selected to provoke disagreement rather than consensus, with metadata and emotion ratings from 83 participants. Built for work on subjectivity: when raters differ, that difference is the measurement, not noise in it.',
    calibration: null,
    builtOn: null,
    url: 'https://dynamos.mgb.org',
    urlLabel: 'Request access',
    paper: 'https://doi.org/10.1109/ACII59096.2023.10388135',
    paperLabel: 'Girard, Tie & Liebenthal (2023)',
  },
  {
    id: 'gft',
    name: 'GFT',
    kind: 'Dataset',
    title: 'Sayette Group Formation Task Spontaneous Facial Expression Database',
    year: 2017,
    role: 'Led',
    access: 'request',
    license: null,
    modalities: ['Video', 'FACS'],
    scale: '96 participants',
    blurb:
      'Spontaneous behavior from unscripted three-person social interactions, with frame-level Facial Action Coding System annotation. Group conversation, not posed expression in front of a camera.',
    calibration: null,
    builtOn: null,
    url: 'https://osf.io/7wcyz',
    urlLabel: 'Request access',
    paper: 'https://doi.org/10.1109/fg.2017.144',
    paperLabel: 'Girard et al. (2017)',
  },
  {
    id: 'mmse',
    name: 'MMSE / BP4D+',
    kind: 'Dataset',
    title: 'Multimodal Spontaneous Emotion Corpus for Human Behavior Analysis',
    year: 2016,
    role: 'Co-authored',
    access: 'request',
    license: null,
    modalities: ['3D', 'Thermal', 'Physiology', 'FACS'],
    scale: '140 participants',
    blurb:
      'An extension of BP4D adding thermal imaging and physiological recording to the 3D video, with frame-level FACS annotation — so a facial signal can be checked against what the body was doing underneath it.',
    calibration: null,
    builtOn: null,
    url: 'https://www.cs.binghamton.edu/~lijun/Research/3DFE/3DFE_Analysis.html',
    urlLabel: 'Request access',
    paper: 'https://doi.org/10.1109/cvpr.2016.374',
    paperLabel: 'Zhang et al. (2016)',
  },
  {
    id: 'bp4d',
    name: 'BP4D',
    kind: 'Dataset',
    title: 'Binghamton–Pittsburgh 4D Spontaneous Emotion Database',
    year: 2014,
    role: 'Co-authored',
    access: 'request',
    license: null,
    modalities: ['3D', 'Video', 'FACS'],
    scale: '41 participants',
    blurb:
      'Spontaneous facial behavior during emotion elicitation, captured as high-resolution 3D dynamic video and annotated frame by frame with FACS. Still one of the standard training corpora for automated action unit detection.',
    calibration: null,
    builtOn: null,
    url: 'https://www.cs.binghamton.edu/~lijun/Research/3DFE/3DFE_Analysis.html',
    urlLabel: 'Request access',
    paper: 'https://doi.org/10.1016/j.imavis.2014.06.002',
    paperLabel: 'Zhang et al. (2014)',
  },
];

export const datasetSummary = {
  total: datasets.length,
  benchmarks: datasets.filter((d) => d.kind === 'Benchmark').length,
  led: datasets.filter((d) => d.role === 'Led').length,
  firstYear: Math.min(...datasets.map((d) => d.year)),
  lastYear: Math.max(...datasets.map((d) => d.year)),
};
