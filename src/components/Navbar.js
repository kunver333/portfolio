import React, { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map(l => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#hero" className="navbar__brand">
          <span className="navbar__brand-mono">KS</span>
          <span className="navbar__brand-dot" />
        </a>

        <ul className="navbar__links">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={`navbar__link ${activeSection === href.slice(1) ? 'navbar__link--active' : ''}`}
              >
                <span className="navbar__link-num">{String(navLinks.indexOf(navLinks.find(l => l.href === href)) + 1).padStart(2, '0')}.</span>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a href="mailto:kunversudhanshu333@gmail.com" className="navbar__cta">
          Hire Me
        </a>

        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {navLinks.map(({ label, href }) => (
          <a key={href} href={href} className="navbar__mobile-link" onClick={handleLinkClick}>
            <span className="navbar__link-num">{String(navLinks.indexOf(navLinks.find(l => l.href === href)) + 1).padStart(2, '0')}.</span>
            {label}
          </a>
        ))}
        <a href="mailto:kunversudhanshu333@gmail.com" className="navbar__cta navbar__cta--mobile" onClick={handleLinkClick}>
          Hire Me
        </a>
      </div>
    </nav>
  );
}
