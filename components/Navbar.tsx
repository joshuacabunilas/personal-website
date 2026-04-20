export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#top" style={{ fontWeight: 600, color: '#f5f5f7', textDecoration: 'none' }}>JJC</a>
        <ul className="navbar-links">
          <li><a href="#summary">Summary</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
        </ul>
        <div style={{ width: '40px' }} /> {/* Spacer for balance */}
      </div>
    </nav>
  );
}
