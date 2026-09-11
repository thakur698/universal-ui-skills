import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="baseline-camera-app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">LUMEN OPTICS</div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#story">Story</a>
          <a href="#reveal">Reveal</a>
          <a href="#specs">Specs</a>
          <button className="btn-primary">Pre-Order Now</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <span className="badge">Next Generation Flagship</span>
          <h1 className="hero-title">
            Redefining Precision Photography.
          </h1>
          <p className="hero-subtitle">
            Engineered with a 100MP Medium Format Sensor, titanium unibody, and quantum-coated glass optics.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Explore X-100</button>
            <button className="btn-secondary">Watch Film</button>
          </div>
        </div>
        <div className="hero-image-container">
          <img 
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80" 
            alt="Lumen X-100 Camera" 
            className="hero-image"
          />
        </div>
      </header>

      {/* 3-Column Features Section */}
      <section id="features" className="features-section">
        <div className="section-header">
          <h2>Mastery in Every Detail</h2>
          <p>Cutting-edge optical engineering built for the world's most demanding visual storytellers.</p>
        </div>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>100MP Medium Format</h3>
            <p>Unmatched dynamic range with 16-bit color depth capture for ultimate clarity.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Bionic Shutter</h3>
            <p>Sub-millisecond shutter lag with whisper-quiet magnetic electromagnetic damping.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Titanium Chassis</h3>
            <p>Milled from aircraft-grade titanium with complete weather sealing down to -20°C.</p>
          </div>
        </div>
      </section>

      {/* Narrative Story Section (Simulated Fixed/Parallax) */}
      <section id="story" className="story-section" style={{ backgroundPositionY: `${scrollY * 0.2}px` }}>
        <div className="story-overlay">
          <div className="story-content">
            <span className="story-tag">Optic Legacy</span>
            <h2>Pure Glass. Zero Compromise.</h2>
            <p>
              Hand-ground fluorite elements minimize chromatic aberration while delivering razor-sharp corner-to-corner resolution. Every beam of light is focused with mathematical perfection.
            </p>
          </div>
        </div>
      </section>

      {/* Product Reveal Section (Video / Media Scrub simulation) */}
      <section id="reveal" className="reveal-section">
        <div className="reveal-container">
          <h2>The Inner Architecture</h2>
          <p>Scroll down to reveal the internal modular assembly.</p>
          <div className="media-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&q=80" 
              alt="Exploded view" 
              className="reveal-media"
            />
            <div className="reveal-caption">
              <span>Sensor Stage Progress: {Math.min(100, Math.floor(scrollY / 10))}%</span>
            </div>
          </div>
        </div>
      </section>

      {/* Specs Section */}
      <section id="specs" className="specs-section">
        <div className="specs-container">
          <h2>Technical Specifications</h2>
          <div className="specs-table">
            <div className="spec-row">
              <span className="spec-label">Sensor</span>
              <span className="spec-val">43.8 x 32.9 mm CMOS 102MP</span>
            </div>
            <div className="spec-row">
              <span className="spec-label">ISO Sensitivity</span>
              <span className="spec-val">ISO 50 to 102,400</span>
            </div>
            <div className="spec-row">
              <span className="spec-label">Stabilization</span>
              <span className="spec-val">5-axis 7.0 stop in-body OIS</span>
            </div>
            <div className="spec-row">
              <span className="spec-label">Weight</span>
              <span className="spec-val">790g (body only)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>© 2026 Lumen Optics Inc. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
