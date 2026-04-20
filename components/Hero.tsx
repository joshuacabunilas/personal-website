export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="reveal">
        <h1 className="hero-title">
          Joshua John <br />
          <span className="gradient-text">Cabunilas</span>
        </h1>
        <p className="hero-sub">
          Software Engineer. Mobile Expert. .NET Architect.
        </p>
        <div className="hero-actions">
          <a href="#experience" className="link-button">
            View Experience 
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 15L12 10L7 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="mailto:joshuacabunilas20@gmail.com" className="link-button">
            Get in Touch
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 15L12 10L7 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
