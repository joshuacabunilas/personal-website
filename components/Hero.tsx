export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero-content reveal">
          <div className="section-label">Open for opportunities</div>
          <h1 className="hero-name">
            Joshua John <br />
            <span className="gradient-text">Cabunilas</span>
          </h1>
          <p className="hero-role">
            <strong>Software Engineer</strong> · Flutter Expert · .NET Architect
          </p>
          <div className="hero-actions">
            <a href="#experience" className="btn btn-primary">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              View My Work
            </a>
            <a href="mailto:joshuacabunilas20@gmail.com" className="btn btn-secondary">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
