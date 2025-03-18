import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="logo">
          <span className="code-brackets">{'<'}</span>
          <span className="logo-name">Raphael</span>
          <span className="code-brackets">{'/>'}</span>
        </Link>

        <div className={`menu-btn ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <div className="menu-btn-line"></div>
          <div className="menu-btn-line"></div>
          <div className="menu-btn-line"></div>
        </div>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === '/about' ? 'active' : ''}>
            <Link to="/about">About</Link>
          </li>
          <li className={location.pathname === '/projects' ? 'active' : ''}>
            <Link to="/projects">Projects</Link>
          </li>
          <li className={location.pathname === '/contact' ? 'active' : ''}>
            <Link to="/contact">Contact</Link>
          </li>
          <li className="resume-btn">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;