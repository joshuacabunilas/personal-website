export interface Project {
  name: string;
  desc: string;
  tags: string[];
  badge: 'private' | 'research' | null;
  highlight: string | null;
  /** Public GitHub repository URL, or null if private */
  github: string | null;
  /** App Store URL, or null if unavailable */
  appStore: string | null;
  /** Play Store URL, or null if unavailable */
  playStore: string | null;
  /** Generic link (e.g. research poster, live demo), or null if unavailable */
  url: string | null;
  /** Override the default "Live" button label */
  urlLabel?: string;
}

export const BADGE_LABEL: Record<string, string> = {
  private: 'Private',
  research: 'Research',
};

export const projects: Project[] = [
  {
    name: 'Tubo PH',
    desc: 'Contributed to a timekeeping solution for manpower agencies — tracks employee locations, lateness, absences, and overtime on iOS & Android at ₱50/employee/month, replacing unreliable biometric systems.',
    tags: ['Flutter', 'Dart', 'BLoC', 'iOS & Android'],
    badge: 'private',
    highlight: null,
    github: null,
    appStore: 'https://apps.apple.com/ph/app/tubo-ph/id6477137169',
    playStore: 'https://play.google.com/store/apps/details?id=com.tubo.ph&hl=en_AU',
    url: null,
  },
  {
    name: 'PayRemit',
    desc: 'Contributed to a fintech app for Filipino and Indian migrant workers to pay SSS, Pag-IBIG, and PhilHealth contributions, settle bills, and purchase load — available on iOS & Android.',
    tags: ['Flutter', 'Dart', 'GetX', 'Fintech'],
    badge: 'private',
    highlight: null,
    github: null,
    appStore: 'https://apps.apple.com/ph/app/payremit/id6449449744',
    playStore: null,
    url: null,
  },
  {
    name: 'AFB Detection — MASK R-CNN',
    desc: 'AI-powered microscopy tool detecting Acid-Fast Bacilli in slit-skin smear slides. Presented at ICBET 2023.',
    tags: ['Python', 'TensorFlow', 'ML', 'Research'],
    badge: 'research',
    highlight: '2nd Best Poster Thesis · ICBET 2023',
    github: null,
    appStore: null,
    playStore: null,
    url: '/afb-detection-poster.pdf',
    urlLabel: 'View Poster',
  },
  {
    name: 'IoT Smart Parking System',
    desc: 'Embedded systems project using Arduino and the Blynk app for real-time parking slot detection and remote monitoring.',
    tags: ['Arduino', 'C++', 'IoT', 'Embedded'],
    badge: null,
    highlight: null,
    github: null,
    appStore: null,
    playStore: null,
    url: null,
  },
  {
    name: 'COVID-19 Herd Immunity Predictor',
    desc: 'C++ simulation predicting the timeline of COVID-19 herd immunity in the Philippines using epidemiological modelling.',
    tags: ['C++', 'Simulation', 'Research'],
    badge: 'research',
    highlight: null,
    github: null,
    appStore: null,
    playStore: null,
    url: null,
  },
];
