import { useState } from 'react';

const Icons = {
  Flutter: () => (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="none">
      <path d="M14.33 10L10.5 13.8L5.3 8.6L10.5 3.4L14.33 7.23L16.2 9.1L14.33 10ZM21 16.5L14.33 23.1L9.1 17.9L14.33 12.7L21 19.4L21 16.5Z" fill="#02569B"/>
      <path d="M14.33 7.23L16.2 9.1L14.33 11L10.5 14.8V17L14.33 23.1L21 16.5V19.4L14.33 26L9.1 20.8" fill="#0175C2" style={{opacity: 0.8}} />
      <path d="M14.33 10L16.2 8.13L14.33 6.26L10.5 10.13L14.33 14L16.2 12.13L14.33 10Z" fill="#13B9FD"/>
    </svg>
  ),
  DotNet: () => (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="none">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" fill="#512BD4"/>
      <path d="M14.5 14.5l-2.5 1.5-2.5-1.5V11l2.5-1.5 2.5 1.5v3.5z" fill="white"/>
      <circle cx="12" cy="12" r="1.5" fill="#512BD4"/>
    </svg>
  ),
  NextJS: () => (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 15.5L12 12V9.5h-.5V12l3 5.5h1.5l.5-.5zM9 9.5h1.5v6H9v-6z"/>
    </svg>
  ),
  React: () => (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#61DAFB" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="12" cy="12" r="2" fill="#61DAFB" stroke="none"/>
      <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(0 12 12)" />
      <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)" />
    </svg>
  ),
  Python: () => (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="none">
      <path d="M11.89 2c-1.63 0-3.07.13-4.22.38-1.57.34-2.73 1.15-3.32 2.38-.6 1.25-.66 2.76-.66 4.3v1h4.1v-.5c0-1.87 1.4-3.5 3.1-3.5s3.1 1.63 3.1 3.5v2h-6.17a4.2 4.2 0 0 0-3.38 1.67 4.2 4.2 0 0 0-.67 3.63c.38 1.23 1.4 2.2 2.67 2.2h4.38a4.2 4.2 0 0 0 3.38-1.67 4.2 4.2 0 0 0 .67-3.63c-.15-.49-.39-.93-.72-1.28l.72-1.72V9.06c0-1.54-.06-3.05-.66-4.3-.59-1.23-1.75-2.04-3.32-2.38-1.15-.25-2.59-.38-4.22-.38z" fill="#3776AB"/>
      <path d="M12.11 22c1.63 0 3.07-.13 4.22-.38 1.57-.34 2.73-1.15 3.32-2.38.6-1.25.66-2.76.66-4.3v-1h-4.1v.5c0 1.87-1.4 3.5-3.1 3.5s-3.1-1.63-3.1-3.5v-2h6.17a4.2 4.2 0 0 0 3.38-1.67 4.2 4.2 0 0 0 .67-3.63c-.38-1.23-1.4-2.2-2.67-2.2h-4.38a4.2 4.2 0 0 0-3.38 1.67 4.2 4.2 0 0 0-.67 3.63c.15.49.39.93.72 1.28l-.72 1.72v4.44c0 1.54.06 3.05.66 4.3.59 1.23 1.75 2.04 3.32 2.38 1.15.25 2.59.38 4.22.38z" fill="#FFD43B"/>
    </svg>
  ),
  TS: () => (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="#3178C6">
      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.015-.72.135-.36.54-.555 1.02-.54.6-.015 1.005.225 1.29.63.105.15.18.315.225.48h2.16c-.03-.36-.09-.705-.21-1.02-.375-1.065-1.275-1.71-2.43-1.89-1.14-.18-2.385.12-3.135.915-.51.525-.795 1.305-.63 2.025.18 1.155.975 1.905 2.7 2.655.945.39 1.47.675 1.71 1.215.135.345.105.945-.315 1.29-.42.3-1.155.36-1.71.135-.615-.225-.945-.615-1.185-1.215h-2.145c.045.495.195.915.465 1.275.66 1.11 1.83 1.515 3.315 1.5 1.2-.015 2.205-.36 2.85-1.11.45-.51.69-1.14.615-1.8zM4.695 12h7.62v2.16h-2.61v10.14h-2.43v-10.14h-2.58V12z"/>
    </svg>
  )
};

const SkillStack = ({ title, icon: Icon, main, details }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="apple-card" 
      style={{ 
        background: isHovered ? '#1d1d1f' : '#2c2c2e', 
        color: '#f5f5f7',
        justifyContent: 'center',
        padding: '2.5rem',
        cursor: 'default',
        transform: isHovered ? 'scale(1.02) translateY(-4px)' : 'scale(1)',
        boxShadow: isHovered ? '0 20px 40px rgba(0,0,0,0.4)' : 'none',
        transition: 'all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
        border: '1px solid rgba(255,255,255,0.05)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.2rem' }}>
        <div style={{ 
          background: 'rgba(255,255,255,0.08)', 
          padding: '1.2rem', 
          borderRadius: '22px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: isHovered ? 'rotate(10deg) scale(1.1)' : 'rotate(0deg)',
          transition: 'all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
          boxShadow: isHovered ? '0 10px 20px rgba(0,0,0,0.2)' : 'none'
        }}>
          <Icon />
        </div>
        <div>
          <div className="card-label" style={{ marginBottom: '0.2rem', opacity: 0.8, fontSize: '0.8rem' }}>{title} Stack</div>
          <div className="card-title" style={{ fontSize: '1.75rem', fontWeight: 700 }}>{main}</div>
        </div>
      </div>
      
      <div style={{ 
        maxHeight: isHovered ? '200px' : '48px',
        opacity: isHovered ? 1 : 0.7,
        overflow: 'hidden',
        transition: 'all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)',
        fontSize: '1rem',
        color: '#a1a1a6',
        lineHeight: 1.5
      }}>
        {details}
      </div>
      
      <div style={{ 
        marginTop: '1.5rem', 
        height: '3px', 
        background: 'linear-gradient(90deg, var(--accent-blue) 0%, transparent 100%)', 
        width: isHovered ? '100%' : '0%',
        transition: 'width 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)',
        borderRadius: '99px'
      }} />
    </div>
  );
};

export default function Skills() {
  return (
    <section className="section" id="skills" style={{ background: '#f5f5f7' }}>
      <div className="container reveal">
        <h2 className="section-title" style={{ color: '#1d1d1f' }}>Technical Stacks.</h2>
        <p className="section-desc" style={{ color: '#86868b' }}>Precision-engineered architecture for global-scale products.</p>
        
        <div className="content-grid">
          <SkillStack 
            title="Mobile" 
            icon={Icons.Flutter} 
            main="Flutter."
            details="BLoC state management · Clean Architecture · Dart · Native Integrations · Optimized UI Performance"
          />
          <SkillStack 
            title="Enterprise" 
            icon={Icons.DotNet} 
            main=".NET."
            details="Scalable Web APIs · C# · Entity Framework Core · SQL Server · Microservices · JWT Security"
          />
          <SkillStack 
            title="Frontend" 
            icon={Icons.NextJS} 
            main="Next.js."
            details="React · Server Components · TypeScript · Tailwind CSS · Progressive Web Apps · Vercel Edge"
          />
          <SkillStack 
            title="Intelligence" 
            icon={Icons.Python} 
            main="Python."
            details="TensorFlow · OpenCV · Computer Vision · Deep Learning · Data Pipelines · Automated Research"
          />
        </div>

        <div className="apple-card content-full" style={{ 
          marginTop: '1rem', 
          background: '#ffffff', 
          border: '1px solid #d2d2d7', 
          color: '#1d1d1f',
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
        }}>
          <div className="card-label" style={{ color: '#86868b' }}>Core Engineering</div>
          <div className="card-title">Foundations of Excellence.</div>
          <p className="card-desc" style={{ color: '#1d1d1f', fontSize: '1.1rem' }}>
            Data Structures · Optimized Algorithms · Operating Systems · Embedded Logic (C/C++) · Cloud Infrastructure (AWS/Azure) · Continuous Integration & Deployment (CI/CD)
          </p>
        </div>
      </div>
    </section>
  );
}
