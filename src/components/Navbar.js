import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => scrollToSection('home')}>
          Portfolio
        </div>
        <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <a
            href="#home"
            className={activeSection === 'home' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            Home
          </a>
          <a
            href="#about"
            className={activeSection === 'about' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
          >
            About
          </a>
          <a
            href="#experience"
            className={activeSection === 'experience' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('experience');
            }}
          >
            Experience
          </a>
          <a
            href="#education"
            className={activeSection === 'education' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('education');
            }}
          >
            Education
          </a>
          <a
            href="#certifications"
            className={activeSection === 'certifications' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('certifications');
            }}
          >
            Certifications
          </a>
          <a
            href="#projects"
            className={activeSection === 'projects' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            Contact
          </a>
        </div>
        <button
          className="navbar-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

