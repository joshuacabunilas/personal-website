import { useState } from 'react';
import { categories } from '../data/skills';
import MacWindow from './MacWindow';

type Tier = 'primary' | 'secondary';

export default function Skills() {
  const [tier, setTier] = useState<Tier>('primary');
  const visible = categories.filter((c) => c.tier === tier);

  return (
    <section className="section" id="skills">
      <div className="container">
        <p className="section-label">Skills</p>
        <h2 className="section-title">Tech Stack</h2>

        <MacWindow title="~/skills">
          <div className="skills-tabs">
            <button
              className={`skills-tab${tier === 'primary' ? ' skills-tab--active' : ''}`}
              onClick={() => setTier('primary')}
            >
              Core Stack
            </button>
            <button
              className={`skills-tab${tier === 'secondary' ? ' skills-tab--active' : ''}`}
              onClick={() => setTier('secondary')}
            >
              Also Familiar With
            </button>
          </div>

          <div className="mac-body skills-body">
            {visible.map((cat) => (
              <div key={cat.label} className="skills-category">
                <h3 className="skills-category-label">{cat.label}</h3>
                <div className="skills-chips">
                  {cat.skills.map(({ name, icon: Icon, color }) => (
                    <span
                      key={name}
                      className={`skills-chip${tier === 'primary' ? ' skills-chip--primary' : ''}`}
                      style={tier === 'primary' && color ? { borderColor: `${color}55` } : undefined}
                    >
                      <Icon
                        size={15}
                        style={{ color: color ?? (tier === 'primary' ? 'var(--text)' : 'var(--text-dim)'), flexShrink: 0 }}
                        aria-hidden="true"
                      />
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </MacWindow>
      </div>
    </section>
  );
}
