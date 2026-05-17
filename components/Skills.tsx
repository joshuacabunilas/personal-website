import {
  SiFlutter, SiDart,
  SiDotnet, SiCsharp, SiPython, SiMicrosoftsqlserver,
  SiNextdotjs, SiReact, SiJavascript,
  SiAmazonaws, SiGit, SiPostman, SiGithubactions,
  SiArduino, SiRaspberrypi, SiTensorflow, SiOpencv, SiCplusplus,
} from 'react-icons/si';

const categories = [
  {
    label: 'Mobile',
    skills: [
      { name: 'Flutter',    icon: SiFlutter,           color: '#02569B' },
      { name: 'Dart',       icon: SiDart,              color: '#0175C2' },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: '.NET',       icon: SiDotnet,            color: '#512BD4' },
      { name: 'C#',         icon: SiCsharp,            color: '#239120' },
      { name: 'Python',     icon: SiPython,            color: '#3776AB' },
      { name: 'SQL Server', icon: SiMicrosoftsqlserver, color: '#CC2927' },
    ],
  },
  {
    label: 'Web',
    skills: [
      { name: 'Next.js',    icon: SiNextdotjs,         color: null },
      { name: 'React',      icon: SiReact,             color: '#61DAFB' },
      { name: 'JavaScript', icon: SiJavascript,        color: '#F7DF1E' },
    ],
  },
  {
    label: 'Cloud & Tools',
    skills: [
      { name: 'AWS',            icon: SiAmazonaws,      color: '#FF9900' },
      { name: 'Git',            icon: SiGit,            color: '#F05032' },
      { name: 'Postman',        icon: SiPostman,        color: '#FF6C37' },
      { name: 'GitHub Actions', icon: SiGithubactions,  color: null },
    ],
  },
  {
    label: 'Embedded & ML',
    skills: [
      { name: 'Arduino',      icon: SiArduino,      color: '#00979D' },
      { name: 'Raspberry Pi', icon: SiRaspberrypi,  color: '#A22846' },
      { name: 'TensorFlow',   icon: SiTensorflow,   color: '#FF6F00' },
      { name: 'OpenCV',       icon: SiOpencv,       color: '#5C3EE8' },
      { name: 'C++',          icon: SiCplusplus,    color: '#00599C' },
    ],
  },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="skills-header">
          <div>
            <p className="section-label">Skills</p>
            <h2 className="section-title" style={{ marginBottom: 0 }}>Tech Stack</h2>
          </div>
        </div>

        <div className="skills-categories">
          {categories.map((cat) => (
            <div key={cat.label} className="skills-category">
              <p className="skills-category-label">{cat.label}</p>
              <div className="skills-chips">
                {cat.skills.map(({ name, icon: Icon, color }) => (
                  <span key={name} className="skills-chip">
                    <Icon size={14} style={{ color: color ?? 'var(--text)', flexShrink: 0 }} />
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
