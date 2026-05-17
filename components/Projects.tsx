const projects = [
  {
    name: 'Tubo PH',
    desc: 'Timekeeping solution for manpower agencies — tracks employee locations, lateness, absences, and overtime on iOS & Android at ₱50/employee/month, replacing unreliable biometric systems.',
    tags: ['Flutter', 'Dart', 'BLoC', 'iOS & Android'],
    badge: 'private',
    highlight: null,
  },
  {
    name: 'PayRemit',
    desc: 'Fintech app for Filipino and Indian migrant workers to pay SSS, Pag-IBIG, and PhilHealth contributions, settle bills, and purchase load — available on iOS & Android.',
    tags: ['Flutter', 'Dart', 'BLoC', 'Fintech'],
    badge: 'private',
    highlight: null,
  },
  {
    name: 'AFB Detection — MASK R-CNN',
    desc: 'AI-powered microscopy tool detecting Acid-Fast Bacilli in slit-skin smear slides. Presented at ICBET 2023.',
    tags: ['Python', 'TensorFlow', 'ML', 'Research'],
    badge: 'research',
    highlight: '2nd Best Poster Thesis · ICBET 2023',
  },
  {
    name: 'IoT Smart Parking System',
    desc: 'Embedded systems project using Arduino and the Blynk app for real-time parking slot detection and remote monitoring.',
    tags: ['Arduino', 'C++', 'IoT', 'Embedded'],
    badge: null,
    highlight: null,
  },
  {
    name: 'COVID-19 Herd Immunity Predictor',
    desc: 'C++ simulation predicting the timeline of COVID-19 herd immunity in the Philippines using epidemiological modelling.',
    tags: ['C++', 'Simulation', 'Research'],
    badge: 'research',
    highlight: null,
  },
];

const BADGE_LABEL: Record<string, string> = {
  private:  'Private',
  research: 'Research',
};

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <p className="section-label">Projects</p>
        <h2 className="section-title">Things I&apos;ve built</h2>

        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.name} className="project-card">
              <div className="project-card-top">
                <div className="project-name">{p.name}</div>
                {p.badge && (
                  <span className={`project-badge project-badge--${p.badge}`}>
                    {BADGE_LABEL[p.badge]}
                  </span>
                )}
              </div>

              {p.highlight && (
                <div className="project-highlight">{p.highlight}</div>
              )}

              <p className="project-desc">{p.desc}</p>

              <div className="project-tags">
                {p.tags.map(tag => (
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
