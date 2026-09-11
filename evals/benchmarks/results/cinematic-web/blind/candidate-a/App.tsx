import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('glass');

  return (
    <div className="taste-camera-app">
      {/* Editorial Minimal Header */}
      <header className="header">
        <div className="brand">
          <span className="brand-title">AURA // 01</span>
          <span className="brand-sub">PRECISION OPTICAL SYSTEM</span>
        </div>
        <div className="status-indicator">
          <span className="dot"></span>
          <span className="status-text">EDITION 2026 // LIMITED RUN</span>
        </div>
      </header>

      {/* Main Full-Bleed Editorial Hero */}
      <section className="hero">
        <div className="hero-meta">
          <span className="index">[01] SYSTEM MONOGRAPH</span>
          <span className="serial">MF-100S / SENSOR 54.0 × 40.5MM</span>
        </div>
        <h1 className="hero-headline">
          THE GEOMETRY OF PURE RESOLUTION.
        </h1>
        <div className="hero-media-container">
          <img 
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1600&q=85" 
            alt="Aura 01 Camera Body" 
            className="hero-main-img"
          />
          <div className="hero-caption">
            FIG 1.0 — SOLID MONOLITH TITANIUM CHASSIS WITH ANODIZED GRAPHITE SHIELD.
          </div>
        </div>
      </section>

      {/* Editorial Statement / Split Section */}
      <section className="manifesto">
        <div className="manifesto-grid">
          <div className="manifesto-col-left">
            <span className="section-label">[02] ARCHITECTURE</span>
            <h2>BUILT WITHOUT COMPROMISE.</h2>
          </div>
          <div className="manifesto-col-right">
            <p className="lead-text">
              We stripped away every ornamental curve, decorative screen, and redundant switch. In their place remains only structural rigidity, absolute optical purity, and zero mechanical shutter latency.
            </p>
            <div className="manifesto-stats">
              <div className="stat-block">
                <span className="stat-val">102 MP</span>
                <span className="stat-desc">BACK-ILLUMINATED SENSOR</span>
              </div>
              <div className="stat-block">
                <span className="stat-val">16-BIT</span>
                <span className="stat-desc">RAW UNCOMPRESSED COLOR</span>
              </div>
              <div className="stat-block">
                <span className="stat-val">15 STOPS</span>
                <span className="stat-desc">MEASURED DYNAMIC RANGE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modular Optics Editorial Grid */}
      <section className="optics-monograph">
        <div className="section-meta-header">
          <span className="meta-tag">[03] OPTIC ELEMENTS</span>
          <span className="meta-counter">03 / 05</span>
        </div>
        
        <div className="tab-control">
          <button 
            className={`tab-btn ${activeTab === 'glass' ? 'active' : ''}`}
            onClick={() => setActiveTab('glass')}
          >
            01. FLUORITE CORE
          </button>
          <button 
            className={`tab-btn ${activeTab === 'mount' ? 'active' : ''}`}
            onClick={() => setActiveTab('mount')}
          >
            02. TITANIUM BAYONET
          </button>
          <button 
            className={`tab-btn ${activeTab === 'shutter' ? 'active' : ''}`}
            onClick={() => setActiveTab('shutter')}
          >
            03. ROTARY CALIBRATION
          </button>
        </div>

        <div className="editorial-display">
          {activeTab === 'glass' && (
            <div className="display-card">
              <div className="display-img-wrap">
                <img 
                  src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&q=85" 
                  alt="Fluorite Core" 
                />
              </div>
              <div className="display-info">
                <h3>SYNTHETIC FLUORITE ELEMENT</h3>
                <p>Anomalous partial dispersion characteristics eliminate secondary spectrum chromatic aberrations across all focal planes.</p>
                <span className="footnote">TOLERANCE ±0.0001MM</span>
              </div>
            </div>
          )}
          {activeTab === 'mount' && (
            <div className="display-card">
              <div className="display-img-wrap">
                <img 
                  src="https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?auto=format&fit=crop&w=1200&q=85" 
                  alt="Titanium Bayonet" 
                />
              </div>
              <div className="display-info">
                <h3>65MM BAYONET INTERFACE</h3>
                <p>Zero flange-focal deflection under heavy cine-telephoto payloads with hardened vacuum-deposited diamond-like carbon coating.</p>
                <span className="footnote">PAYLOAD CAP: 12.5KG</span>
              </div>
            </div>
          )}
          {activeTab === 'shutter' && (
            <div className="display-card">
              <div className="display-img-wrap">
                <img 
                  src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1200&q=85" 
                  alt="Rotary Calibration" 
                />
              </div>
              <div className="display-info">
                <h3>MAGNETIC DETENT WHEEL</h3>
                <p>Solid brass knurled tactile feedback calibrated to 1/3 EV increments with haptic leaf spring tensioners.</p>
                <span className="footnote">TESTED TO 1,000,000 CYCLES</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Strict Spec Table */}
      <section className="specifications">
        <div className="specs-header">
          <span className="label">[04] MONOGRAPH DOSSIER</span>
          <h2>TECHNICAL SPECIFICATIONS</h2>
        </div>
        <div className="spec-dossier">
          <div className="dossier-row">
            <span className="dossier-code">01 // SENSOR</span>
            <span className="dossier-name">Medium Format 102 Megapixel Dual-Gain ISO</span>
            <span className="dossier-val">43.8 × 32.9 mm</span>
          </div>
          <div className="dossier-row">
            <span className="dossier-code">02 // BASE CHASSIS</span>
            <span className="dossier-name">Forged Grade 5 Titanium Body with Silicon Gaskets</span>
            <span className="dossier-val">IP68 Certified</span>
          </div>
          <div className="dossier-row">
            <span className="dossier-code">03 // VIEWING SYSTEM</span>
            <span className="dossier-name">9.44M-Dot Quad-OLED Electronic Viewfinder (120Hz)</span>
            <span className="dossier-val">0.95× Magnification</span>
          </div>
          <div className="dossier-row">
            <span className="dossier-code">04 // STORAGE</span>
            <span className="dossier-name">Dual CFexpress Type B (PCIe 4.0 4000MB/s)</span>
            <span className="dossier-val">Raw Uncompressed</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="editorial-footer">
        <div className="footer-top">
          <div className="col">
            <span className="footer-lead">AURA OPTICAL LABORATORY</span>
            <p>ZURICH // TOKYO // SAN FRANCISCO</p>
          </div>
          <div className="col right">
            <button className="inquire-btn">REQUEST ALLOCATION</button>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 AURA SYSTEMS GMBH. ALL RIGHTS RESERVED.</span>
          <span>DOCUMENT REF: AR-2026-MF100</span>
        </div>
      </footer>
    </div>
  );
}
