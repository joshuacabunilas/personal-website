import { categories } from '../data/skills';

export default function Skills() {
  const primary   = categories.filter((c) => c.tier === 'primary');
  const secondary = categories.filter((c) => c.tier === 'secondary');

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="skills-header">
          <div>
            <p className="section-label">Skills</p>
            <h2 className="section-title" style={{ marginBottom: 0 }}>Tech Stack</h2>
          </div>
        </div>

        <div className="skills-tier-block">
          <p className="skills-tier-label">Core stack</p>
          <div className="skills-categories">
            {primary.map((cat) => (
              <div key={cat.label} className="skills-category">
                <h3 className="skills-category-label">{cat.label}</h3>
                <div className="skills-chips">
                  {cat.skills.map(({ name, icon: Icon, color }) => (
                    <span key={name} className="skills-chip skills-chip--primary">
                      <Icon size={14} style={{ color: color ?? 'var(--text)', flexShrink: 0 }} aria-hidden="true" />
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-tier-block">
          <p className="skills-tier-label">Also familiar with</p>
          <div className="skills-categories">
            {secondary.map((cat) => (
              <div key={cat.label} className="skills-category">
                <h3 className="skills-category-label">{cat.label}</h3>
                <div className="skills-chips">
                  {cat.skills.map(({ name, icon: Icon, color }) => (
                    <span key={name} className="skills-chip">
                      <Icon size={14} style={{ color: color ?? 'var(--text-dim)', flexShrink: 0 }} aria-hidden="true" />
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
