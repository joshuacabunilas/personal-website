import Image from 'next/image';
import { SITE } from '../data/site';
import ObfuscatedEmail from './ObfuscatedEmail';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="mac-window">

          <div className="mac-titlebar">
            <div className="mac-dots" aria-hidden="true">
              <span className="mac-dot mac-dot-red" />
              <span className="mac-dot mac-dot-yellow" />
              <span className="mac-dot mac-dot-green" />
            </div>
            <span className="mac-title">~/portfolio</span>
          </div>

          <div className="mac-body">
            <div className="hero-layout">
              <div className="hero-avatar-wrap">
                <Image
                  src="/avatar.jpg"
                  alt={`${SITE.name}, ${SITE.title}`}
                  width={148}
                  height={148}
                  layout="fixed"
                  objectFit="cover"
                  objectPosition="center top"
                  className="hero-avatar"
                  priority
                />
              </div>
              <div className="hero-info">
                <p className="hero-location">{SITE.location}</p>
                <h1 className="hero-name">{SITE.name}</h1>
                <p className="hero-role">{SITE.title}</p>
                <p className="hero-current">
                  Currently at{' '}
                  <span style={{ color: 'var(--text)', fontWeight: 500 }}>Ventaja International</span>
                  {' '}— building Tubo PH &amp; PayRemit
                </p>
                <div className="mac-divider" />
                <div className="hero-links">
                  <a href={SITE.cvPath} download className="hero-link-primary">
                    Download CV
                  </a>
                  <a href={SITE.github} className="hero-link" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a href={SITE.linkedin} className="hero-link" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                  <ObfuscatedEmail className="hero-link" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
