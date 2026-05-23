import { experiences } from '../data/experience';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <p className="section-label">Experience</p>
        <h2 className="section-title">Where I&apos;ve worked</h2>

        <ol className="timeline">
          {experiences.map((exp, i) => (
            <li key={i} className={`timeline-item${exp.current ? ' timeline-current' : ''}`}>
              <span className="timeline-dot" aria-hidden="true" />

              <div className="timeline-header">
                <div>
                  <div className="timeline-company">{exp.company}</div>
                  <div className="timeline-role">{exp.role}</div>
                </div>
                <div className="timeline-period">
                  {exp.current && <span className="timeline-badge">Now</span>}
                  {exp.period}
                </div>
              </div>

              <p className="timeline-desc">{exp.desc}</p>

              <div className="timeline-tags">
                {exp.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
