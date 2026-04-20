export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="reveal">
        <span className="section-label">Journey</span>
        <h2 className="section-title">Professional Path</h2>
        
        <div className="card-stack">
          {/* Ventaja */}
          <div className="experience-card glass">
            <div className="exp-header">
              <span className="exp-company gradient-text">VENTAJA INTERNATIONAL</span>
              <span className="exp-date">2023 – Present</span>
            </div>
            <p className="exp-role">Junior Software Engineer</p>
            <ul className="exp-list">
              <li>Architect cross-platform mobile features using Flutter & BLoC.</li>
              <li>Collaborate on .NET & Next.js enterprise solutions.</li>
              <li>Utilize AI tools to accelerate feature prototyping and refactoring.</li>
            </ul>
            <div className="exp-project">
              <div className="exp-project-label">Flagship Project</div>
              <div className="exp-project-title">Tubo PH — Timekeeping Solution</div>
              <p>Developed an automated biometric-replacement for manpower agencies with real-time geolocation and tracking.</p>
            </div>
          </div>

          {/* Trend Micro */}
          <div className="experience-card glass">
            <div className="exp-header">
              <span className="exp-company gradient-text">TREND MICRO</span>
              <span className="exp-date">2022 – 2023</span>
            </div>
            <p className="exp-role">GRID DevOps Intern</p>
            <ul className="exp-list">
              <li>Engineered Python scripts for automated software lifecycle management.</li>
              <li>Conducted vulnerability research on automotive software systems.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
