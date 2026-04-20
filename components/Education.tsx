export default function Education() {
  return (
    <section className="section" id="education">
      <div className="reveal">
        <span className="section-label">Background</span>
        <h2 className="section-title">Academic & Certs</h2>

        <div className="edu-grid">
          <div className="edu-card glass">
            <div className="edu-icon">🏛️</div>
            <div className="edu-degree">B.S. Computer Engineering</div>
            <div className="edu-school">Mapúa University</div>
          </div>
          <div className="edu-card glass">
            <div className="edu-icon">📚</div>
            <div className="edu-degree">Secondary Education</div>
            <div className="edu-school">Don Bosco Makati</div>
          </div>
        </div>

        <div className="experience-card glass" style={{ marginTop: '2rem' }}>
          <div className="exp-project-label">Certifications</div>
          <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>
            SQL for Data Science · Google Data Analytics · Deep Learning (Keras) · AWS Configuration · Azure DevOps · CCNA Routing & Switching
          </p>
        </div>
      </div>
    </section>
  );
}
