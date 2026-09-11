import React, { useState, useEffect, useRef } from 'react';
import './App.css';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [pinnedPhase, setPinnedPhase] = useState(0); // 0, 1, 2
  const [scrubIndex, setScrubIndex] = useState(0);
  const pinnedSectionRef = useRef<HTMLDivElement>(null);
  const scrubSectionRef = useRef<HTMLDivElement>(null);

  // High-performance scroll tracking for pinned storytelling and scrub
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalDocHeight = document.documentElement.scrollHeight - window.innerHeight;
      const overallProgress = totalDocHeight > 0 ? scrollY / totalDocHeight : 0;
      setScrollProgress(overallProgress);

      // Pinned Section Phase Calculation
      if (pinnedSectionRef.current) {
        const rect = pinnedSectionRef.current.getBoundingClientRect();
        const sectionHeight = pinnedSectionRef.current.offsetHeight - window.innerHeight;
        if (rect.top <= 0 && sectionHeight > 0) {
          const progress = Math.min(1, Math.max(0, -rect.top / sectionHeight));
          if (progress < 0.33) setPinnedPhase(0);
          else if (progress < 0.66) setPinnedPhase(1);
          else setPinnedPhase(2);
        }
      }

      // Video/Optic Frame Scrubbing calculation
      if (scrubSectionRef.current) {
        const rect = scrubSectionRef.current.getBoundingClientRect();
        const scrubHeight = scrubSectionRef.current.offsetHeight - window.innerHeight;
        if (rect.top <= 0 && scrubHeight > 0) {
          const progress = Math.min(1, Math.max(0, -rect.top / scrubHeight));
          const frameIndex = Math.min(5, Math.floor(progress * 6));
          setScrubIndex(frameIndex);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrubFrames = [
    {
      title: "STAGE 01 // SOLID ANODIZED CHASSIS",
      desc: "5-axis CNC milled aircraft-grade monoblock housing with integrated thermal conduction channels.",
      img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1400&q=85",
      focal: "FLANGE DEPTH: 19.25MM",
      iso: "MASS: 780G"
    },
    {
      title: "STAGE 02 // 102MP BACK-ILLUMINATED SENSOR",
      desc: "Medium format silicon with quantum copper wiring delivering 16 stops of measured optical latitude.",
      img: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1400&q=85",
      focal: "ACTIVE PIXELS: 11,648 × 8,736",
      iso: "BASE ISO: 64"
    },
    {
      title: "STAGE 03 // 5-AXIS MAGNETIC LEVITATION IBIS",
      desc: "Sub-micron electromagnetic voice coil suspension compensating up to 7.0 stops of shake.",
      img: "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?auto=format&fit=crop&w=1400&q=85",
      focal: "FREQUENCY: 10,000 HZ",
      iso: "COMPENSATION: 7.0 STOPS"
    },
    {
      title: "STAGE 04 // QUARTZ OPTICAL LOW-PASS ARRAY",
      desc: "Zero-birefringence synthetic fluorite stack eliminating moiré without loss of high-frequency MTF acuity.",
      img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1400&q=85",
      focal: "TRANSMITTANCE: 99.8%",
      iso: "COATING: AR-NANO"
    },
    {
      title: "STAGE 05 // ELECTROMAGNETIC LEAF SHUTTER",
      desc: "Carbon-fiber shutter blades tested to 500,000 cycles with high-speed sync up to 1/2000s.",
      img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1400&q=85",
      focal: "SYNC: 1/2000S",
      iso: "DURABILITY: 500K"
    },
    {
      title: "STAGE 06 // COMPLETE OPTICAL INTEGRATION",
      desc: "Hermetically sealed chassis ready for extreme alpine and sub-zero expeditionary capture.",
      img: "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?auto=format&fit=crop&w=1400&q=85",
      focal: "WEATHER: IP68 CERTIFIED",
      iso: "OPERATING: -25°C TO 55°C"
    }
  ];

  return (
    <div className="v2-cinematic-app">
      {/* Editorial Navigation Bar */}
      <nav className="v2-navbar">
        <div className="v2-nav-inner">
          <div className="v2-brand">
            <span className="v2-brand-mark">KRONOS // OPTICS</span>
            <span className="v2-brand-model">TITANIUM MEDIUM FORMAT</span>
          </div>
          <div className="v2-nav-center">
            <span className="v2-telemetry">SCROLL OFFSET: {(scrollProgress * 100).toFixed(0)}%</span>
          </div>
          <div className="v2-nav-actions">
            <button className="v2-spec-btn">SYSTEM MONOGRAPH</button>
            <button className="v2-order-btn">ACQUIRE ALLOCATION</button>
          </div>
        </div>
      </nav>

      {/* Hero: Editorial Cinematic Full-Bleed Media with Controlled Parallax */}
      <header className="v2-hero">
        <div 
          className="v2-hero-parallax-bg"
          style={{ transform: `translate3d(0, ${scrollProgress * 80}px, 0)` }}
        >
          <img 
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1920&q=85" 
            alt="Kronos X-1 Camera Masterpiece"
            className="v2-hero-img"
          />
          <div className="v2-hero-vignette"></div>
        </div>
        
        <div className="v2-hero-content">
          <div className="v2-hero-badge">
            <span className="v2-badge-dot"></span>
            <span>SYSTEM LAUNCH 2026 // MONOLITH SERIES</span>
          </div>
          <h1 className="v2-hero-title">
            THE ARCHITECTURE<br />OF ABSOLUTE LIGHT.
          </h1>
          <p className="v2-hero-lead">
            Medium format 102MP unibody. Engineered for extreme optical resolving power without algorithmic interpolation.
          </p>
          <div className="v2-hero-stats">
            <div className="v2-stat-item">
              <span className="stat-label">SENSOR DIMENSION</span>
              <span className="stat-value">54.0 × 40.5 MM</span>
            </div>
            <div className="v2-stat-item">
              <span className="stat-label">COLOR RESOLUTION</span>
              <span className="stat-value">16-BIT UNCOMPRESSED</span>
            </div>
            <div className="v2-stat-item">
              <span className="stat-label">BODY CHASSIS</span>
              <span className="stat-value">GRADE 5 TITANIUM</span>
            </div>
          </div>
        </div>
      </header>

      {/* Pinned Storytelling Section: Sticky Viewport with Progressive Narrative States */}
      <section ref={pinnedSectionRef} className="v2-pinned-storytelling-container">
        <div className="v2-sticky-viewport">
          <div className="v2-sticky-media-backdrop">
            <div className={`v2-media-layer layer-0 ${pinnedPhase === 0 ? 'active' : ''}`}>
              <img 
                src="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?auto=format&fit=crop&w=1600&q=85" 
                alt="Expedition Landscape" 
              />
              <div className="v2-layer-tag">PHASE 01 // EXPEDITION RESOLVING POWER</div>
            </div>
            <div className={`v2-media-layer layer-1 ${pinnedPhase === 1 ? 'active' : ''}`}>
              <img 
                src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1600&q=85" 
                alt="Fluorite Optic Group" 
              />
              <div className="v2-layer-tag">PHASE 02 // 0.0001MM GLASS TOLERANCE</div>
            </div>
            <div className={`v2-media-layer layer-2 ${pinnedPhase === 2 ? 'active' : ''}`}>
              <img 
                src="https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?auto=format&fit=crop&w=1600&q=85" 
                alt="Titanium Bayonet Core" 
              />
              <div className="v2-layer-tag">PHASE 03 // STRUCTURAL PURITY</div>
            </div>
          </div>

          <div className="v2-sticky-overlay-content">
            <div className="v2-pinned-indicators">
              <span className={`indicator ${pinnedPhase === 0 ? 'active' : ''}`}>01. SENSOR</span>
              <span className={`indicator ${pinnedPhase === 1 ? 'active' : ''}`}>02. OPTICS</span>
              <span className={`indicator ${pinnedPhase === 2 ? 'active' : ''}`}>03. CHASSIS</span>
            </div>

            <div className="v2-narrative-box">
              {pinnedPhase === 0 && (
                <div className="narrative-card">
                  <span className="narrative-step">NARRATIVE CHAPTER 01</span>
                  <h2>A Sensor Born for Gigapixel Fidelity.</h2>
                  <p>
                    Every pixel well is micro-milled to capture photon incidence up to 48 degrees off-axis. Shadows retain full chromatic fidelity where conventional sensors collapse into noise.
                  </p>
                </div>
              )}
              {pinnedPhase === 1 && (
                <div className="narrative-card">
                  <span className="narrative-step">NARRATIVE CHAPTER 02</span>
                  <h2>Fluorite Elements Polished to Wavefront Limits.</h2>
                  <p>
                    Hand-finished in our Kyoto optical facility. Secondary spectrum dispersion is physically eliminated before photons strike the imaging plane.
                  </p>
                </div>
              )}
              {pinnedPhase === 2 && (
                <div className="narrative-card">
                  <span className="narrative-step">NARRATIVE CHAPTER 03</span>
                  <h2>Monolithic Forged Grade 5 Titanium.</h2>
                  <p>
                    Zero frame distortion under thermal extremes from sub-zero Antarctic expeditions to high-altitude equatorial deserts.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Scroll-Driven Optical Scrubbing Section (Deterministic Scroll -> Frame Timeline) */}
      <section ref={scrubSectionRef} className="v2-scrub-story-container">
        <div className="v2-scrub-sticky-viewport">
          <div className="v2-scrub-header">
            <div className="v2-scrub-title-block">
              <span className="v2-section-eyebrow">DETERMINISTIC OPTICAL BREAKDOWN</span>
              <h2>THE INTERNAL ARCHITECTURE</h2>
            </div>
            <div className="v2-scrub-progress-pill">
              STAGE {scrubIndex + 1} OF 6 // {Math.round(((scrubIndex + 1) / 6) * 100)}% DISCLOSED
            </div>
          </div>

          <div className="v2-scrub-media-frame">
            <div className="v2-scrub-image-container">
              <img 
                src={scrubFrames[scrubIndex].img} 
                alt={scrubFrames[scrubIndex].title} 
                className="v2-scrub-img"
              />
              <div className="v2-scrub-crosshairs">
                <span className="ch ch-tl">+</span>
                <span className="ch ch-tr">+</span>
                <span className="ch ch-bl">+</span>
                <span className="ch ch-br">+</span>
              </div>
            </div>
            
            <div className="v2-scrub-telemetry-sidebar">
              <div className="v2-scrub-stage-tag">{scrubFrames[scrubIndex].title}</div>
              <p className="v2-scrub-stage-desc">{scrubFrames[scrubIndex].desc}</p>
              
              <div className="v2-scrub-data-table">
                <div className="scrub-data-row">
                  <span>METRIC // 01</span>
                  <strong>{scrubFrames[scrubIndex].focal}</strong>
                </div>
                <div className="scrub-data-row">
                  <span>METRIC // 02</span>
                  <strong>{scrubFrames[scrubIndex].iso}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Bento Grid: Technical Specifications & Capability Matrix */}
      <section className="v2-bento-section">
        <div className="v2-bento-header">
          <span className="v2-section-eyebrow">SYSTEM ATTRIBUTES</span>
          <h2>ENGINEERING DOSSIER</h2>
        </div>

        <div className="v2-bento-grid">
          {/* Main Hero Bento Card */}
          <div className="bento-card bento-hero">
            <span className="bento-tag">CORE PROCESSOR</span>
            <h3>NEURAL FLUX DUAL ENGINE</h3>
            <p>Processes 16-bit uncompressed RAW data at 12 frames per second with real-time deep sub-pixel phase reconstruction.</p>
            <div className="bento-spec-badge">1.2 TFLOPS OPTICAL DSP</div>
          </div>

          {/* Secondary Bento Card */}
          <div className="bento-card bento-secondary">
            <span className="bento-tag">ELECTRONIC VIEWFINDER</span>
            <h3>9.44M-DOT QUAD-OLED</h3>
            <p>0.95× magnification, 120Hz refresh rate, and zero blackout during high-speed burst sequences.</p>
          </div>

          {/* Feature Stat Bento Card */}
          <div className="bento-card bento-stat">
            <span className="bento-tag">DYNAMIC LATITUDE</span>
            <div className="bento-big-num">16.4</div>
            <span className="bento-sub-text">MEASURED STOPS DYNAMIC RANGE</span>
          </div>

          {/* Shutter Bento Card */}
          <div className="bento-card bento-shutter">
            <span className="bento-tag">ELECTROMAGNETIC BRAKE</span>
            <h3>SILENT LEAF SYSTEM</h3>
            <p>Sub-0.1ms trigger latency with electromagnetic eddy-current stabilization.</p>
          </div>

          {/* Material Bento Card */}
          <div className="bento-card bento-wide">
            <div className="bento-wide-content">
              <span className="bento-tag">CHASSIS INTEGRITY</span>
              <h3>HERMETIC SEALING // IP68</h3>
              <p>Reinforced with 38 fluoro-elastomer gaskets for continuous operation in arctic, salt-mist, and desert environments.</p>
            </div>
            <div className="bento-wide-metric">
              <span>RATED TEMPERATURE</span>
              <strong>-25°C → +55°C</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Footer: Editorial Signature */}
      <footer className="v2-footer">
        <div className="v2-footer-content">
          <div className="v2-footer-col">
            <span className="v2-footer-logo">KRONOS OPTICAL INSTRUMENTS</span>
            <p>KYOTO // STUTTGART // SAN FRANCISCO</p>
          </div>
          <div className="v2-footer-col v2-footer-cta">
            <button className="v2-order-btn-large">RESERVE CAMERA ALLOCATION</button>
            <span className="v2-guarantee">LIMITED GLOBAL BATCH OF 500 UNITS ANNUALLY</span>
          </div>
        </div>
        <div className="v2-footer-bottom">
          <span>© 2026 KRONOS OPTICS LABORATORY. REGISTERED TRADEMARK.</span>
          <span>COMPLIANCE: WCAG 2.1 AA // ZERO TRACKING SCRIPTS</span>
        </div>
      </footer>
    </div>
  );
}
