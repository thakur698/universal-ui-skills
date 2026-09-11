import React, { useState, useEffect, useRef } from 'react';
import './App.css';

export default function App() {
  const [scrollPct, setScrollPct] = useState(0);
  const [depthMeter, setDepthMeter] = useState(0);
  const [activeZoneIndex, setActiveZoneIndex] = useState(0);
  const scrollTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalScrollable = document.documentElement.scrollHeight - window.innerHeight;
      const pct = totalScrollable > 0 ? Math.min(1, Math.max(0, scrollY / totalScrollable)) : 0;
      setScrollPct(pct);

      const calculatedDepth = Math.round(pct * 10928);
      setDepthMeter(calculatedDepth);

      if (calculatedDepth < 200) setActiveZoneIndex(0);
      else if (calculatedDepth < 1000) setActiveZoneIndex(1);
      else if (calculatedDepth < 4000) setActiveZoneIndex(2);
      else if (calculatedDepth < 6000) setActiveZoneIndex(3);
      else setActiveZoneIndex(4);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const oceanicZones = [
    { name: 'EPIPELAGIC ZONE (SUNLIT)', depth: '0M — 200M', pressure: '1.0 — 21.0 ATM', temp: '24.5 °C', light: '100% PHOTIC', fauna: 'Surface Pelagic, Phytoplankton Blooms, Cetaceans' },
    { name: 'MESOPELAGIC ZONE (TWILIGHT)', depth: '200M — 1,000M', pressure: '21.0 — 101.0 ATM', temp: '8.2 °C', light: '0.5% ATTENUATED', fauna: 'Bioluminescent Lanternfish, Hatchetfish, Siphonophores' },
    { name: 'BATHYPELAGIC ZONE (MIDNIGHT)', depth: '1,000M — 4,000M', pressure: '101.0 — 401.0 ATM', temp: '3.8 °C', light: '0.00% APHOTIC', fauna: 'Gulper Eel, Vampire Squid, Anglerfish Lure' },
    { name: 'ABYSSOPELAGIC ZONE (ABYSS)', depth: '4,000M — 6,000M', pressure: '401.0 — 601.0 ATM', temp: '1.9 °C', light: '0.00% APHOTIC', fauna: 'Tripod Fish, Deep-Sea Grenadiers, Dumbo Octopus' },
    { name: 'HADALPELAGIC ZONE (CHALLENGER DEEP)', depth: '6,000M — 10,928M', pressure: '1,086.0 ATM', temp: '1.1 °C', light: '0.00% BIOLUMINESCENT ONLY', fauna: 'Pseudoliparis swirei (Mariana Snailfish), Giant Amphipods' }
  ];

  const currentZone = oceanicZones[activeZoneIndex];
  const pressureAtm = (1 + depthMeter / 10.06).toFixed(1);

  return (
    <div className="v2-ocean-app">
      {/* Editorial Navigation & Telemetry HUD */}
      <nav className="v2-hud-nav">
        <div className="v2-hud-brand">
          <span className="hud-title">EXPEDITION HADAL // MARIANA TRENCH</span>
          <span className="hud-sub">JAMSTEC & WHOI CONSORTIUM ACOUSTIC BATHYMETRY</span>
        </div>
        <div className="v2-hud-telemetry">
          <div className="hud-stat">
            <span className="stat-l">DEPTH:</span>
            <strong className="stat-v cyan">{depthMeter.toLocaleString()} M</strong>
          </div>
          <div className="hud-stat">
            <span className="stat-l">PRESSURE:</span>
            <strong className="stat-v">{pressureAtm} ATM</strong>
          </div>
        </div>
      </nav>

      {/* Pinned 400vh Depth Track */}
      <div ref={scrollTrackRef} className="v2-depth-scroll-track">
        <div className="v2-sticky-bathymetry-stage">
          {/* Depth Meter Visualizer Bar */}
          <div className="v2-vertical-depth-gauge">
            <div className="gauge-track">
              <div className="gauge-fill" style={{ height: `${scrollPct * 100}%` }}></div>
              <div className="gauge-marker" style={{ top: `${scrollPct * 100}%` }}>
                <span>{depthMeter}M</span>
              </div>
            </div>
          </div>

          {/* Center Stage: Ambient Light Shift & Submersible Model */}
          <div className="v2-submersible-stage">
            <div 
              className="v2-water-column-backdrop"
              style={{
                background: `radial-gradient(circle at 50% 30%, 
                  rgba(6, 40, 75, ${Math.max(0, 1 - scrollPct * 1.5)}) 0%, 
                  rgba(2, 6, 12, 1) ${Math.min(100, 30 + scrollPct * 70)}%)`
              }}
            >
              <div className="v2-bathy-wireframe">
                <div className="wireframe-rings"></div>
                <div className="submersible-blip">
                  <span className="blip-pulse"></span>
                  <span className="sub-label">DEEPSEA CHAL-01</span>
                </div>
              </div>
            </div>

            {/* Zone Telemetry & Narrative Chapter */}
            <div className="v2-narrative-overlay">
              <div className="v2-zone-dossier-card">
                <div className="dossier-header-bar">
                  <span className="zone-code">CHAPTER 0{activeZoneIndex + 1} // {currentZone.depth}</span>
                  <span className="zone-progress">{Math.round(scrollPct * 100)}% DESCENT</span>
                </div>
                <h2>{currentZone.name}</h2>
                
                <div className="zone-metrics-bento">
                  <div className="b-tile">
                    <span>HYDROSTATIC PRESSURE</span>
                    <strong>{currentZone.pressure}</strong>
                  </div>
                  <div className="b-tile">
                    <span>WATER TEMPERATURE</span>
                    <strong>{currentZone.temp}</strong>
                  </div>
                  <div className="b-tile">
                    <span>LIGHT TRANSMISSION</span>
                    <strong>{currentZone.light}</strong>
                  </div>
                  <div className="b-tile">
                    <span>ENDEMIC BENTHIC FAUNA</span>
                    <strong>{currentZone.fauna}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reduced-Motion Fallback Chapter Index */}
      <section className="v2-static-chapter-dossier">
        <h2>BATHYMETRIC STRATIFICATION ARCHIVE</h2>
        <div className="chapter-grid">
          {oceanicZones.map((z, i) => (
            <div key={i} className="static-chapter-card">
              <span className="ch-num">ZONE 0{i + 1} // {z.depth}</span>
              <h3>{z.name}</h3>
              <p>Pressure: {z.pressure} | Temp: {z.temp}</p>
              <span className="ch-fauna">{z.fauna}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="v2-ocean-footer">
        <div className="footer-meta">
          <span>EXPEDITION HADAL DATA ACCESS // WCAG 2.1 AA COMPLIANT</span>
          <span>CHALLENGER DEEP BASIN COORDINATES: 11°22.4′N 142°35.5′E</span>
        </div>
      </footer>
    </div>
  );
}
