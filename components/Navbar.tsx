export default function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar-brand">JJC</span>
      <ul className="navbar-links">
        <li><a href="#summary">Summary</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#education">Education</a></li>
        <li>
          <a
            className="navbar-cta"
            href="mailto:joshuacabunilas20@gmail.com"
          >
            Hire Me
          </a>
        </li>
      </ul>
    </nav>
  );
}
