import { useState, ReactNode } from 'react';
import { experiences } from '../data/experience';
import MacWindow from './MacWindow';

type Exp = typeof experiences[0];

function highlightBullet(text: string, highlights: string[]): ReactNode {
  if (!highlights.length) return text;
  const escaped = [...highlights]
    .sort((a, b) => b.length - a.length)
    .map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const regex = new RegExp(`(${escaped.join('|')})`, 'g');
  const parts = text.split(regex);
  return parts.map((part, i) =>
    highlights.includes(part) ? <strong key={i} className="bullet-highlight">{part}</strong> : part
  );
}

export default function Experience() {
  const [selected, setSelected] = useState<Exp>(experiences[0]);
  const [detailOut, setDetailOut] = useState(false);

  function handleSelect(exp: Exp) {
    if (exp.role === selected.role) return;
    setDetailOut(true);
    setTimeout(() => {
      setSelected(exp);
      setDetailOut(false);
    }, 120);
  }

  return (
    <section className="section" id="experience">
      <div className="container">
        <p className="section-label">Experience</p>
        <h2 className="section-title">Where I&apos;ve worked</h2>

        <MacWindow title="~/experience">
          <div className="finder-pane">
            <ul className="finder-sidebar" aria-label="Experience list">
              {experiences.map((exp) => (
                <li key={exp.role}>
                  <button
                    className={`finder-sidebar-item exp-sidebar-item${selected.role === exp.role ? ' finder-sidebar-item--active' : ''}`}
                    onClick={() => handleSelect(exp)}
                    aria-current={selected.role === exp.role ? true : undefined}
                  >
                    <div className="exp-sidebar-text">
                      <span className="exp-sidebar-company">{exp.shortName}</span>
                      <span className="exp-sidebar-period">{exp.period}</span>
                    </div>
                    {exp.current && <span className="exp-sidebar-now" aria-label="Current position" />}
                  </button>
                </li>
              ))}
            </ul>

            <div className={`finder-detail${detailOut ? ' finder-detail--out' : ''}`}>
              <div className="exp-detail-header">
                <div>
                  <h3 className="timeline-company">{selected.company}</h3>
                  <p className="timeline-role">{selected.role}</p>
                </div>
                <div className="timeline-period">
                  {selected.current && <span className="timeline-badge">Now</span>}
                  {selected.period}
                </div>
              </div>

              <ul className="timeline-bullets">
                {selected.bullets.map((b, i) => (
                  <li key={i}>{highlightBullet(b, selected.highlights)}</li>
                ))}
              </ul>

              <div className="project-tags">
                {selected.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </MacWindow>
      </div>
    </section>
  );
}
