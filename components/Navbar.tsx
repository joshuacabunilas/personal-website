import { useEffect, useRef, useState } from 'react';

const NAV_LINKS = [
  { href: '#about',      label: 'About' },
  { href: '#skills',     label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects',   label: 'Projects' },
  { href: '#education',  label: 'Education' },
  { href: '#contact',    label: 'Contact' },
];

export default function Navbar() {
  const [theme, setTheme]       = useState<'dark' | 'light'>('dark');
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef                 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'light') {
      setTheme('light');
    } else if (!stored && window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.35, rootMargin: '-52px 0px 0px 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    if (next === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'dark');
    }
  }

  function handleNavClick() {
    setMenuOpen(false);
  }

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar-scrolled' : ''}`} aria-label="Main navigation">
        <a href="#top" className="navbar-logo" aria-label="Back to top">
          <span className="navbar-monogram" aria-hidden="true">JC</span>
        </a>

        <span className="navbar-sep" aria-hidden="true" />

        <ul className="navbar-links">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={active === href.slice(1) ? 'nav-active' : ''}
                aria-current={active === href.slice(1) ? 'true' : undefined}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <span className="navbar-sep" aria-hidden="true" />

        <div className="navbar-controls">
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            aria-pressed={theme === 'light'}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            className="hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <HamburgerIcon open={menuOpen} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu" ref={menuRef} role="navigation" aria-label="Mobile navigation">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={active === href.slice(1) ? 'nav-active' : ''}
              onClick={handleNavClick}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return open ? (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ) : (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}
