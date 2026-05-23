export interface Experience {
  period: string;
  company: string;
  role: string;
  desc: string;
  tags: string[];
  current: boolean;
}

export const experiences: Experience[] = [
  {
    period: 'May 2024 – Present',
    company: 'Ventaja International Corporation',
    role: 'Flutter Mobile Developer',
    desc: 'Contributed to 3+ cross-platform mobile apps (iOS & Android) using Flutter, Dart, Clean Architecture, and BLoC. Achieved a 60% reduction in app crash rate through systematic debugging. Key projects include Tubo PH — a timekeeping solution for manpower agencies — and PayRemit, a fintech app for Filipino migrant workers.',
    tags: ['Flutter', 'Dart', 'BLoC', 'Clean Architecture', 'iOS & Android'],
    current: true,
  },
  {
    period: 'Nov 2023 – May 2024',
    company: 'Ventaja International Corporation',
    role: 'Junior Software Engineer / L2 Support',
    desc: 'Worked across .NET, Next.js, and Flutter alongside senior developers. Resolved an average of 3 complex L2 technical tickets per week while contributing to feature development and bug fixes.',
    tags: ['.NET', 'Next.js', 'Flutter', 'L2 Support'],
    current: false,
  },
  {
    period: 'Dec 2022 – Mar 2023',
    company: 'Trend Micro',
    role: 'GRID DevOps Intern — Core Tech',
    desc: 'Created Python automation scripts for the GRID team, gathered vulnerability data for automotive software (SCVM project), and built CLI tools to automate Microsoft App Store application management.',
    tags: ['Python', 'DevOps', 'Automation', 'Cybersecurity'],
    current: false,
  },
];
