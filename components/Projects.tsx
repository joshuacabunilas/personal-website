import { projects, BADGE_LABEL } from '../data/projects';

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <p className="section-label">Projects</p>
        <h2 className="section-title">Things I&apos;ve built</h2>

        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.name} className="project-card">
              <div className="project-card-top">
                <div className="project-name">{p.name}</div>
                {p.badge && (
                  <span className={`project-badge project-badge--${p.badge}`}>
                    {BADGE_LABEL[p.badge]}
                  </span>
                )}
              </div>

              {p.highlight && (
                <div className="project-highlight">{p.highlight}</div>
              )}

              <p className="project-desc">{p.desc}</p>

              <div className="project-tags">
                {p.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              {(p.github || p.appStore || p.playStore || p.url) && (
                <div className="project-links">
                  {p.github && (
                    <a href={p.github} className="project-link" target="_blank" rel="noopener noreferrer" aria-label={`View ${p.name} on GitHub`}>
                      GitHub
                    </a>
                  )}
                  {p.appStore && (
                    <a href={p.appStore} className="project-link" target="_blank" rel="noopener noreferrer" aria-label={`View ${p.name} on the App Store`}>
                      App Store
                    </a>
                  )}
                  {p.playStore && (
                    <a href={p.playStore} className="project-link" target="_blank" rel="noopener noreferrer" aria-label={`View ${p.name} on the Play Store`}>
                      Play Store
                    </a>
                  )}
                  {p.url && (
                    <a href={p.url} className="project-link" target="_blank" rel="noopener noreferrer" aria-label={p.urlLabel ? `${p.urlLabel} — ${p.name}` : `View ${p.name} live`}>
                      {p.urlLabel ?? 'Live'}
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
