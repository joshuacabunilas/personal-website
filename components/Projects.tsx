export default function Projects() {
  return (
    <section className="section" id="projects" style={{ background: '#f5f5f7' }}>
      <div className="container reveal">
        <h2 className="section-title" style={{ color: '#1d1d1f' }}>Selected Works.</h2>
        
        <div className="content-grid">
          <div className="apple-card content-full" style={{ background: '#000', minHeight: '500px', justifyContent: 'center', textAlign: 'center' }}>
            <div className="card-label">Research Excellence</div>
            <div className="card-title" style={{ fontSize: '3rem' }}>Acid-Fast Bacilli Detection.</div>
            <p className="card-desc">AI-powered microscopy analysis presented at ICBET 2023.</p>
          </div>
          
          <div className="apple-card" style={{ background: '#fff', border: '1px solid #d2d2d7' }}>
            <div className="card-label" style={{ color: '#86868b' }}>IoT Solution</div>
            <div className="card-title" style={{ color: '#1d1d1f' }}>Smart Parking System.</div>
            <p className="card-desc" style={{ color: '#86868b' }}>Award-winning hardware integration.</p>
          </div>

          <div className="apple-card" style={{ background: '#0066cc', color: '#fff' }}>
            <div className="card-label" style={{ color: 'rgba(255,255,255,0.7)' }}>Open Source</div>
            <div className="card-title">Modern Design Tools.</div>
            <p className="card-desc" style={{ color: 'rgba(255,255,255,0.8)' }}>Crafting premium UI systems.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
