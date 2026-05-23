import { education } from '../data/education';

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <p className="section-label">Education</p>
        <h2 className="section-title">Background</h2>

        <dl className="edu-list">
          {education.map((item) => (
            <div key={item.school} className="edu-item">
              <dt className="edu-year">{item.period}</dt>
              <dd>
                <div className="edu-school">{item.school}</div>
                <div className="edu-degree">{item.degree}</div>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
