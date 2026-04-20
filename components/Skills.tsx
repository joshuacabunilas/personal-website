const skillCategories = [
  {
    icon: "📱",
    title: "Mobile Development",
    tags: ["Flutter", "Dart", "BLoC", "Clean Architecture", "iOS", "Android"],
  },
  {
    icon: "🌐",
    title: "Web & Backend",
    tags: ["Next.js", ".NET Framework", "C#", "C++", "Python", "JavaScript"],
  },
  {
    icon: "🤖",
    title: "AI & Developer Tools",
    tags: ["GitHub Copilot", "Claude AI", "Antigravity/Cursor", "Postman", "Visual Studio"],
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    tags: ["AWS", "Azure DevOps", "Linux/Unix", "Bash Scripting"],
  },
  {
    icon: "🔌",
    title: "Embedded & AI",
    tags: ["TensorFlow", "OpenCV", "Mask R-CNN", "Arduino Uno", "Raspberry Pi"],
  },
  {
    icon: "🔗",
    title: "Networking",
    tags: ["CCNA", "Routing/Switching", "VLANs", "VPNs", "Microsoft SQL"],
  },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <h2 className="section-title">
        <span className="icon">⚡</span>
        Technical Skills
      </h2>
      <div className="skills-grid">
        {skillCategories.map((cat) => (
          <div key={cat.title} className="skill-card">
            <div className="skill-card-header">
              <span className="skill-card-icon">{cat.icon}</span>
              <span className="skill-card-title">{cat.title}</span>
            </div>
            <div className="skill-tags">
              {cat.tags.map((tag) => (
                <span key={tag} className="skill-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
