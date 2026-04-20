export default function Footer() {
  return (
    <footer className="section" style={{ background: '#1d1d1f', padding: '60px 0' }}>
      <div className="container reveal" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '2rem' }}>Ready to collaborate?</h2>
        <div style={{ display: 'flex', gap: '3rem', justifyContent: 'center', marginBottom: '3rem' }}>
          <a href="mailto:joshuacabunilas20@gmail.com" className="link-button">Email</a>
          <a href="https://linkedin.com/in/joshuacabunilas" className="link-button">LinkedIn</a>
        </div>
        <p style={{ color: '#86868b', fontSize: '0.8rem' }}>
          Copyright © {new Date().getFullYear()} Joshua John Cabunilas. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
