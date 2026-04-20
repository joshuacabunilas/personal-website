const projects = [
  {
    icon: "🧬",
    title: "Detection of Acid-Fast Bacilli (AFB)",
    desc: "Built a detection system using the Mask R-CNN algorithm on microscopy images. Research was presented at ICBET 2023.",
    award: null,
  },
  {
    icon: "🚗",
    title: "IoT Smart Parking System",
    desc: "Developed an automated parking solution using Arduino Uno, Raspberry Pi, and the Blynk App for real-time slot monitoring.",
    award: "🏆 2nd Best Poster Thesis — 50th EECE Thesis Colloquium",
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <h2 className="section-title">
        <span className="icon">🚀</span>
        Projects & Awards
      </h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.title} className="project-card">
            <div className="project-card-icon">{p.icon}</div>
            <div className="project-card-title">{p.title}</div>
            <p className="project-card-desc">{p.desc}</p>
            {p.award && (
              <div className="award-badge">
                {p.award}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
