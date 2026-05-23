import { useState } from 'react';
import { categories } from '../data/skills';
import MacWindow from './MacWindow';

type Tier = 'primary' | 'secondary';

export default function Skills() {
  const [tier, setTier] = useState<Tier>('primary');
  const isPrimary = tier === 'primary';
  const allSkills = categories
    .filter((c) => c.tier === tier)
    .flatMap((c) => c.skills);

  return (
    <section className="section" id="skills">
      <div className="container">
        <p className="section-label">Skills</p>
        <h2 className="section-title">Tech Stack</h2>

        <MacWindow title="~/skills">
          <div className="skills-tabs">
            <button
              className={`skills-tab${isPrimary ? ' skills-tab--active' : ''}`}
              onClick={() => setTier('primary')}
            >
              Core Stack
            </button>
            <button
              className={`skills-tab${!isPrimary ? ' skills-tab--active' : ''}`}
              onClick={() => setTier('secondary')}
            >
              Also Familiar With
            </button>
          </div>

          <div className="mac-body skills-body">
            <div className="skill-icon-grid">
              {allSkills.map(({ name, icon: Icon, color }) => (
                <div
                  key={name}
                  className={`skill-icon-tile${isPrimary ? ' skill-icon-tile--primary' : ''}`}
                >
                  <div
                    className="skill-icon-box"
                    style={color ? { background: `${color}18`, borderColor: `${color}45` } : undefined}
                  >
                    <Icon
                      size={isPrimary ? 28 : 22}
                      style={{ color: color ?? 'var(--text-muted)' }}
                      aria-hidden="true"
                    />
                  </div>
                  <span className="skill-icon-name">{name}</span>
                </div>
              ))}
            </div>

          </div>
        </MacWindow>
      </div>
    </section>
  );
}
