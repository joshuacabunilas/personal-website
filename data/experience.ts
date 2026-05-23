export interface Experience {
  period: string;
  company: string;
  shortName: string;
  role: string;
  bullets: string[];
  highlights: string[];
  tags: string[];
  current: boolean;
}

export const experiences: Experience[] = [
  {
    period: 'May 2024 – Present',
    company: 'Ventaja International Corporation',
    shortName: 'Ventaja',
    role: 'Flutter Mobile Developer',
    bullets: [
      'Built and maintained 3+ cross-platform apps (iOS & Android) using Flutter, Dart, Clean Architecture, and BLoC',
      'Reduced app crash rate by 60% through systematic debugging and performance improvements',
      'Shipped Tubo PH — a timekeeping solution for manpower agencies — and PayRemit, a fintech app for Filipino migrant workers',
    ],
    highlights: ['3+', '60%', 'Tubo PH', 'PayRemit'],
    tags: ['Flutter', 'Dart', 'BLoC', 'Clean Architecture', 'iOS & Android'],
    current: true,
  },
  {
    period: 'Nov 2023 – May 2024',
    company: 'Ventaja International Corporation',
    shortName: 'Ventaja',
    role: 'Junior Software Engineer / L2 Support',
    bullets: [
      'Worked across .NET, Next.js, and Flutter stacks alongside senior developers',
      'Resolved an average of 3 complex L2 technical support tickets per week',
      'Contributed to feature development and bug fixes across multiple products',
    ],
    highlights: ['.NET', 'Next.js', '3 complex L2'],
    tags: ['.NET', 'Next.js', 'Flutter', 'L2 Support'],
    current: false,
  },
  {
    period: 'Dec 2022 – Mar 2023',
    company: 'Trend Micro',
    shortName: 'Trend Micro',
    role: 'GRID DevOps Intern — Core Tech',
    bullets: [
      'Wrote Python automation scripts to streamline GRID team internal workflows',
      'Gathered and analyzed vulnerability data for automotive software (SCVM project)',
      'Built CLI tools to automate Microsoft App Store application management',
    ],
    highlights: ['Python automation scripts', 'CLI tools', 'SCVM'],
    tags: ['Python', 'DevOps', 'Automation', 'Cybersecurity'],
    current: false,
  },
];
