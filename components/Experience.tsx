export default function Experience() {
  return (
    <section className="section" id="experience">
      <h2 className="section-title">
        <span className="icon">💼</span>
        Professional Experience
      </h2>

      <div className="exp-timeline">
        {/* Ventaja */}
        <div className="exp-card">
          <div className="exp-header">
            <span className="exp-company">VENTAJA INTERNATIONAL CORPORATION</span>
            <span className="exp-date">Nov 2023 – Present</span>
          </div>
          <p className="exp-role">Junior Software Engineer / L2 Support</p>
          <ul className="exp-list">
            <li>Architect and deploy cross-platform mobile features using Flutter, ensuring clean, efficient, and well-documented codebases.</li>
            <li>Implement BLoC state management patterns to handle complex application states and ensure performance scalability.</li>
            <li>Collaborate with senior developers to design and debug software using <strong>.NET Framework</strong> and <strong>Next.js</strong>.</li>
            <li>Utilize AI tools (Copilot, Claude) to refactor legacy code, automate unit testing, and accelerate feature prototyping.</li>
            <li>Resolve complex technical escalations and provide deep-dive debugging for critical L2 software issues.</li>
          </ul>

          <div className="exp-project">
            <div className="exp-project-label">🔑 Key Project</div>
            <div className="exp-project-title">Tubo PH — Mobile Timekeeping Solution</div>
            <p>
              Developed an economical timekeeping solution for manpower agencies, replacing unreliable manual and biometric systems.
              Integrated real-time tracking for geolocation, attendance, overtime, and automated notifications for both iOS and Android.
            </p>
          </div>
        </div>

        {/* Trend Micro */}
        <div className="exp-card">
          <div className="exp-header">
            <span className="exp-company">TREND MICRO</span>
            <span className="exp-date">Dec 2022 – Mar 2023</span>
          </div>
          <p className="exp-role">GRID DevOps Intern</p>
          <ul className="exp-list">
            <li>Engineered Python scripts to automate the download, installation, and uninstallation cycle for Microsoft Store applications.</li>
            <li>Conducted data gathering and vulnerability research on software affecting automotive systems.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
