export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container reveal">
        <h2 className="section-title">Professional Path.</h2>
        
        <div className="card-stack" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="apple-card" style={{ minHeight: '400px', justifyContent: 'center' }}>
            <div className="card-label">2023 – Present</div>
            <div className="card-title">Ventaja International.</div>
            <p className="card-desc" style={{ fontSize: '1.5rem', fontWeight: 500 }}>
              Junior Software Engineer creating Tubo PH — the next-gen labor management system.
            </p>
            <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <li>• Flutter & BLoC</li>
              <li>• .NET Architecture</li>
              <li>• AI-Augmented Dev</li>
            </ul>
          </div>

          <div className="apple-card" style={{ background: '#f5f5f7', color: '#1d1d1f' }}>
            <div className="card-label" style={{ color: '#86868b' }}>2022 – 2023</div>
            <div className="card-title">Trend Micro.</div>
            <p className="card-desc" style={{ color: '#1d1d1f' }}>
              GRID DevOps & Cybersecurity Intern focused on Python automation and research.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
