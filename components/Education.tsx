const certGroups = [
  {
    label: "Mobile & Data",
    certs: ["SQL for Data Science", "Google Data Analytics"],
  },
  {
    label: "AI & Cloud",
    certs: ["Deep Learning with Keras", "AWS Configuration", "Azure DevOps Boards"],
  },
  {
    label: "Networking",
    certs: ["CCNA Routing & Switching", "Fundamentals of Network Communication"],
  },
];

export default function Education() {
  return (
    <section className="section" id="education">
      <h2 className="section-title">
        <span className="icon">🎓</span>
        Education
      </h2>

      <div className="edu-grid">
        <div className="edu-card">
          <div className="edu-icon">🏛️</div>
          <div className="edu-degree">
            Bachelor of Science in Computer Engineering
            <br />
            <span style={{ fontSize: "0.8rem", fontWeight: 400, color: "var(--text-muted)" }}>
              Specialization: Embedded Systems
            </span>
          </div>
          <div className="edu-school">Mapúa University</div>
        </div>
        <div className="edu-card">
          <div className="edu-icon">📚</div>
          <div className="edu-degree">Secondary & Elementary Education</div>
          <div className="edu-school">Don Bosco Technical Institute Makati</div>
        </div>
      </div>

      <h2 className="section-title" style={{ marginTop: "48px" }}>
        <span className="icon">🏅</span>
        Core Certifications
      </h2>
      {certGroups.map((group) => (
        <div key={group.label}>
          <div className="cert-sub-title">{group.label}</div>
          <div className="cert-tags">
            {group.certs.map((c) => (
              <span key={c} className="cert-tag">{c}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
