const skillCategories = [
  {
    icon: "📱",
    title: "Mobile Development",
    desc: "Flutter, Dart, BLoC, Clean Architecture",
    class: "bento-2x2",
  },
  {
    icon: "🌐",
    title: "Web & Backend",
    desc: "Next.js, .NET Framework, C#, C++, Python",
    class: "bento-2x1",
  },
  {
    icon: "🤖",
    title: "AI Tools",
    desc: "GitHub Copilot, Claude AI, Antigravity",
    class: "bento-1x2",
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    desc: "AWS, Azure, Linux, Bash",
    class: "bento-1x2",
  },
  {
    icon: "🔌",
    title: "Embedded",
    desc: "TensorFlow, OpenCV, Arduino, Pi",
    class: "bento-2x1",
  },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="reveal">
        <span className="section-label">Expertise</span>
        <h2 className="section-title">Technical Arsenal</h2>
        <div className="bento-grid">
          {skillCategories.map((cat) => (
            <div key={cat.title} className={`bento-item glass ${cat.class}`}>
              <div className="bento-header">{cat.icon}</div>
              <div className="bento-title">{cat.title}</div>
              <div className="bento-desc">{cat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
