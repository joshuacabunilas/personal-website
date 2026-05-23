import { SITE } from '../data/site';
import ObfuscatedEmail from './ObfuscatedEmail';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">

          <div className="footer-brand">
            <span className="footer-monogram">JC</span>
            <span className="footer-tagline">Flutter Developer · Manila, PH</span>
          </div>

          <nav className="footer-links" aria-label="Footer navigation">
            <ObfuscatedEmail className="footer-link" />
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
            <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
          </nav>

        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
