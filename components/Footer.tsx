export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">

          <div className="footer-brand">
            <span className="footer-monogram">JC</span>
            <span className="footer-tagline">Flutter Developer · Manila, PH</span>
          </div>

          <div className="footer-links">
            <a href="mailto:joshuacabunilas20@gmail.com">Email</a>
            <a href="https://linkedin.com/in/joshua-cabunilas-0587b8179" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/joshuacabunilas" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>

        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© {new Date().getFullYear()} Joshua John Cabunilas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
