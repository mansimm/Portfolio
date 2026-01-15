import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <div className="home-text">
          <h1 className="home-title">
            Hi, I'm <span className="highlight">Mansi</span>
          </h1>
          <h2 className="home-subtitle">Software Engineer</h2>
          <p className="home-description">
            I'm a passionate software engineer with 5 years of experience building
            scalable, secure, and high-performance backend systems using Java and Spring Boot.
          </p>
          <div className="home-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>
        <div className="home-image">
          {/* Replace the SVG with your profile photo */}
          {/* Option 1: Use image from public folder */}
          <img 
            src="/images/profile/profile-photo.jpg" 
            alt="Mansi - Software Engineer" 
            className="profile-photo"
            onError={(e) => {
              // Fallback to SVG if image doesn't exist
              e.target.style.display = 'none';
              e.target.nextElementSibling.style.display = 'block';
            }}
          />
          {/* Fallback SVG placeholder */}
          <div className="avatar-placeholder" style={{ display: 'none' }}>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="80" fill="#2563eb" opacity="0.1" />
              <circle cx="100" cy="80" r="30" fill="#2563eb" />
              <path d="M 50 160 Q 100 140 150 160" stroke="#2563eb" strokeWidth="20" fill="none" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll down</span>
        <div className="scroll-arrow">↓</div>
      </div>
    </section>
  );
};

export default Home;

