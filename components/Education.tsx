export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container reveal">
        <h2 className="section-title">Academic Background.</h2>
        
        <div className="content-grid">
          <div className="apple-card">
            <div className="card-label">Degree</div>
            <div className="card-title">Mapúa University.</div>
            <p className="card-desc">B.S. Computer Engineering with Honors.</p>
          </div>
          <div className="apple-card" style={{ background: '#f5f5f7', color: '#1d1d1f' }}>
            <div className="card-label" style={{ color: '#86868b' }}>Certification</div>
            <div className="card-title">Cloud Architecture.</div>
            <p className="card-desc" style={{ color: '#86868b' }}>AWS, Azure, and SQL Data Science.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
