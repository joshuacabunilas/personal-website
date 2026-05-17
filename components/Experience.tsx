const experiences = [
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

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <p className="section-label">Experience</p>
        <h2 className="section-title">Where I&apos;ve worked</h2>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <div key={i} className={`timeline-item${exp.current ? ' timeline-current' : ''}`}>
              <span className="timeline-dot" />

              <div className="timeline-header">
                <div>
                  <div className="timeline-company">{exp.company}</div>
                  <div className="timeline-role">{exp.role}</div>
                </div>
                <div className="timeline-period">
                  {exp.current && <span className="timeline-badge">Now</span>}
                  {exp.period}
                </div>
              </div>

              <p className="timeline-desc">{exp.desc}</p>

              <div className="timeline-tags">
                {exp.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
