import { SITE } from '../data/site';
import ObfuscatedEmail from './ObfuscatedEmail';

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <p className="section-label">Contact</p>
        <h2 className="section-title">Get in touch</h2>

        <div className="contact-availability">
          <span className="contact-status-dot" aria-hidden="true" />
          <span>Open to new opportunities</span>
        </div>

        <p className="contact-text">
          Whether you have a project in mind, a role to discuss, or just want to connect —
          my inbox is always open. I typically respond within 24 hours.
        </p>

        <div className="contact-actions">
          <ObfuscatedEmail className="contact-email-btn" label="Send me an email" />
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-linkedin"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
