import { useState } from 'react';
import { projects, BADGE_LABEL, Project } from '../data/projects';
import MacWindow from './MacWindow';

export default function Projects() {
  const [selected, setSelected] = useState<Project>(projects[0]);
  const [detailOut, setDetailOut] = useState(false);

  function handleSelect(p: Project) {
    if (p.name === selected.name) return;
    setDetailOut(true);
    setTimeout(() => {
      setSelected(p);
      setDetailOut(false);
    }, 120);
  }

  return (
    <section className="section" id="projects">
      <div className="container">
        <p className="section-label">Projects</p>
        <h2 className="section-title">Things I&apos;ve built</h2>

        <MacWindow title="~/projects">
          <div className="finder-pane">
            <ul className="finder-sidebar" aria-label="Project list">
              {projects.map((p) => (
                <li key={p.name}>
                  <button
                    className={`finder-sidebar-item${selected.name === p.name ? ' finder-sidebar-item--active' : ''}`}
                    onClick={() => handleSelect(p)}
                    aria-current={selected.name === p.name ? true : undefined}
                  >
                    <span className="finder-sidebar-name">{p.name}</span>
                    {p.badge && (
                      <span className={`finder-sidebar-dot finder-sidebar-dot--${p.badge}`} aria-hidden="true" />
                    )}
                  </button>
                </li>
              ))}
            </ul>

            <div className={`finder-detail${detailOut ? ' finder-detail--out' : ''}`}>
              <div className="finder-detail-header">
                <h3 className="finder-detail-name">{selected.name}</h3>
                {selected.badge && (
                  <span className={`project-badge project-badge--${selected.badge}`}>
                    {BADGE_LABEL[selected.badge]}
                  </span>
                )}
              </div>

              {selected.highlight && (
                <p className="project-highlight">{selected.highlight}</p>
              )}

              <p className="project-desc">{selected.desc}</p>

              <div className="project-tags">
                {selected.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              {(selected.github || selected.appStore || selected.playStore || selected.url) ? (
                <div className="project-links">
                  {selected.github && (
                    <a href={selected.github} className="project-link" target="_blank" rel="noopener noreferrer" aria-label={`View ${selected.name} on GitHub`}>
                      GitHub
                    </a>
                  )}
                  {selected.appStore && (
                    <a href={selected.appStore} className="project-link" target="_blank" rel="noopener noreferrer" aria-label={`View ${selected.name} on the App Store`}>
                      App Store
                    </a>
                  )}
                  {selected.playStore && (
                    <a href={selected.playStore} className="project-link" target="_blank" rel="noopener noreferrer" aria-label={`View ${selected.name} on the Play Store`}>
                      Play Store
                    </a>
                  )}
                  {selected.url && (
                    <a href={selected.url} className="project-link" target="_blank" rel="noopener noreferrer" aria-label={selected.urlLabel ? `${selected.urlLabel} — ${selected.name}` : `View ${selected.name} live`}>
                      {selected.urlLabel ?? 'Live'}
                    </a>
                  )}
                </div>
              ) : (
                <p className="finder-detail-private">Source code is private</p>
              )}
            </div>
          </div>
        </MacWindow>
      </div>
    </section>
  );
}
