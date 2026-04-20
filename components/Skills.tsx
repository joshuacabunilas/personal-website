export default function Skills() {
  const skills = [
    { title: "Mobile", desc: "Flutter, Dart, BLoC Expert.", color: "#000" },
    { title: "Backend", desc: ".NET, C#, Python, SQL.", color: "#1d1d1f" },
    { title: "Web", desc: "Next.js, React, Clean UI.", color: "#1d1d1f" },
    { title: "AI", desc: "Neural Networks & LLMs.", color: "#000" },
  ];

  return (
    <section className="section" id="skills" style={{ background: '#f5f5f7' }}>
      <div className="container reveal">
        <h2 className="section-title" style={{ color: '#1d1d1f' }}>Technical Arsenal.</h2>
        <p className="section-desc" style={{ color: '#86868b' }}>Precision-engineered stack for world-class solutions.</p>
        
        <div className="content-grid">
          {skills.map((s, idx) => (
            <div key={s.title} className="apple-card" style={{ background: s.color, color: '#f5f5f7' }}>
              <div className="card-label">Capability {idx + 1}</div>
              <div className="card-title">{s.title}.</div>
              <div className="card-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
