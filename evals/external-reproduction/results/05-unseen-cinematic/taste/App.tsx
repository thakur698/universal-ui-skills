import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [selectedDepthTier, setSelectedDepthTier] = useState<'SURFACE' | 'TWILIGHT' | 'MIDNIGHT' | 'ABYSSAL' | 'HADAL'>('HADAL');

  const depthTiers = {
    SURFACE: { depth: '0 - 200M', zone: 'EPIPELAGIC', pressure: '1.0 - 21.0 ATM', temp: '24.5 °C', light: '100% PHOTIC', fauna: 'Surface Pelagic, Phytoplankton Bloom, Cetaceans' },
    TWILIGHT: { depth: '200 - 1,000M', zone: 'MESOPELAGIC', pressure: '21.0 - 101.0 ATM', temp: '8.2 °C', light: '1% - 0.01% ATTENUATED', fauna: 'Lanternfish, Hatchetfish, Siphonophores' },
    MIDNIGHT: { depth: '1,000 - 4,000M', zone: 'BATHYPELAGIC', pressure: '101.0 - 401.0 ATM', temp: '3.8 °C', light: '0.00% APHOTIC', fauna: 'Gulper Eel, Giant Squid, Vampire Squid' },
    ABYSSAL: { depth: '4,000 - 6,000M', zone: 'ABYSSOPELAGIC', pressure: '401.0 - 601.0 ATM', temp: '1.9 °C', light: '0.00% APHOTIC', fauna: 'Tripod Fish, Abyssal Grenadiers, Dumbo Octopus' },
    HADAL: { depth: '6,000 - 10,928M', zone: 'HADALPELAGIC // CHALLENGER DEEP', pressure: '1,086.0 ATM (15,960 PSI)', temp: '1.1 °C', light: 'TOTAL DARKNESS // BIOLUMINESCENT ONLY', fauna: 'Pseudoliparis swirei (Mariana Snailfish), Hirondellea gigas' }
  };

  const currentTier = depthTiers[selectedDepthTier];

  return (
    <div className="taste-ocean-app">
      {/* Top Monograph Status */}
      <header className="ocean-monograph-top">
        <div className="ocean-brand">
          <span className="brand-code">HADAL_EXPEDITION // 2026</span>
          <span className="brand-loc">CHALLENGER DEEP // MARIANA TRENCH (11°22′N 142°36′E)</span>
        </div>
        <div className="telemetry-pill">
          <span className="depth-metric">RECORD DEPTH: 10,928M</span>
          <span className="press-metric">HYDROSTATIC: 1,086 ATM</span>
        </div>
      </header>

      {/* Main Editorial Monograph Content */}
      <main className="ocean-dossier-layout">
        {/* Tier Selector Navigation */}
        <nav className="tier-selector-strip">
          {(Object.keys(depthTiers) as Array<keyof typeof depthTiers>).map((tierKey, index) => (
            <button 
              key={tierKey}
              className={`tier-btn ${selectedDepthTier === tierKey ? 'active' : ''}`}
              onClick={() => setSelectedDepthTier(tierKey)}
            >
              <span className="t-idx">0{index + 1}</span>
              <span className="t-name">{tierKey}</span>
            </button>
          ))}
        </nav>

        {/* Bathymetric Stage & Data Grid */}
        <section className="ocean-telemetry-stage">
          <div className="stage-meta-head">
            <span className="stage-ref">[DOC 05] OCEANOGRAPHIC DOSSIER</span>
            <h2>{currentTier.zone} // {currentTier.depth}</h2>
          </div>

          <div className="bathymetry-matrix">
            <div className="bathy-tile">
              <span className="bathy-label">HYDROSTATIC PRESSURE</span>
              <div className="bathy-val">{currentTier.pressure}</div>
              <span className="bathy-sub">TITANIUM SPHERE CALIBRATED</span>
            </div>
            <div className="bathy-tile">
              <span className="bathy-label">AMBIENT TEMPERATURE</span>
              <div className="bathy-val">{currentTier.temp}</div>
              <span className="bathy-sub">THERMOCLINE STRATIFICATION</span>
            </div>
            <div className="bathy-tile">
              <span className="bathy-label">SOLAR IRRADIANCE</span>
              <div className="bathy-val">{currentTier.light}</div>
              <span className="bathy-sub">PHOTOMULTIPLIER SENSOR</span>
            </div>
            <div className="bathy-tile">
              <span className="bathy-label">SUBMERSIBLE TELEMETRY</span>
              <div className="bathy-val">DEEPSEA CHAL-01</div>
              <span className="bathy-sub">ACOUSTIC BEACON LOCKED</span>
            </div>
          </div>

          <div className="benthic-monograph-card">
            <h3>BENTHIC TAXONOMY & BIOLOGICAL SPECIFICATION</h3>
            <p>{currentTier.fauna}</p>
            <div className="card-footnote">ACOUSTIC BATHYMETRY MULTIBEAM SWATH: 120 DEGREES // FREQUENCY 12 KHZ</div>
          </div>
        </section>
      </main>

      {/* Monograph Footer */}
      <footer className="ocean-footer">
        <span>WOODS HOLE OCEANOGRAPHIC & JAMSTEC CONSORTIUM SPECIFICATION</span>
        <span>SHA-256: 69CC191C342DE670331A</span>
      </footer>
    </div>
  );
}
