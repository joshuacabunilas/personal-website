export default function Footer() {
  return (
    <footer className="footer" style={{ padding: '80px 0' }}>
      <div className="container reveal">
        <div className="navbar-brand gradient-text" style={{ fontSize: '2rem', marginBottom: '1rem', display: 'block' }}>
          JJC
        </div>
        <p className="hero-role" style={{ fontSize: '1rem', marginBottom: '2rem' }}>
          Building digital excellence since 2023.
        </p>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginBottom: '2rem' }}>
          <a href="mailto:joshuacabunilas20@gmail.com" className="btn btn-secondary">Email</a>
          <a href="https://linkedin.com/in/joshuacabunilas" className="btn btn-secondary">LinkedIn</a>
        </div>
        <div className="footer-sub">
          © {new Date().getFullYear()} · Design for 2026
        </div>
      </div>
    </footer>
  );
}
