const projects = [
  {
    icon: "🧬",
    title: "Detection of Acid-Fast Bacilli",
    desc: "Mask R-CNN system for microscopy images. Presented at ICBET 2023.",
    class: "bento-2x1",
  },
  {
    icon: "🚗",
    title: "IoT Smart Parking",
    desc: "Automated solution using Arduino, Pi, and Blynk. 2nd Best Poster Award.",
    class: "bento-2x1",
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="reveal">
        <span className="section-label">Creations</span>
        <h2 className="section-title">Selected Projects</h2>
        <div className="bento-grid" style={{ gridAutoRows: 'auto' }}>
          {projects.map((p) => (
            <div key={p.title} className={`bento-item glass ${p.class}`} style={{ minHeight: '260px' }}>
              <div className="bento-header">{p.icon}</div>
              <div className="bento-title">{p.title}</div>
              <div className="bento-desc">{p.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
