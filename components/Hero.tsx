export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="mac-window">

          <div className="mac-titlebar">
            <div className="mac-dots">
              <span className="mac-dot mac-dot-red" />
              <span className="mac-dot mac-dot-yellow" />
              <span className="mac-dot mac-dot-green" />
            </div>
            <span className="mac-title">~/portfolio</span>
          </div>

          <div className="mac-body">
            <div className="hero-layout">
              <div className="hero-avatar-wrap">
                <img
                  src="/avatar.jpg"
                  alt="Joshua Cabunilas"
                  className="hero-avatar"
                />
              </div>
              <div className="hero-info">
                <p className="hero-location">Parañaque City, Philippines</p>
                <h1 className="hero-name">Joshua John Cabunilas</h1>
                <p className="hero-role">Flutter Mobile Developer</p>
                <p className="hero-current">
                  Currently at{' '}
                  <span style={{ color: 'var(--text)', fontWeight: 500 }}>Ventaja International</span>
                  {' '}— building Tubo PH &amp; PayRemit
                </p>
                <div className="mac-divider" />
                <div className="hero-links">
                  <a href="/CV-Joshua Cabunilas-2026.pdf" download className="hero-link-primary">
                    Download CV
                  </a>
                  <a href="https://github.com/joshuacabunilas" className="hero-link" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a href="https://linkedin.com/in/joshua-cabunilas-0587b8179" className="hero-link" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                  <a href="mailto:joshuacabunilas20@gmail.com" className="hero-link">Email</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
