import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [depth, setDepth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollMax = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollMax > 0 ? window.scrollY / scrollMax : 0;
      setDepth(Math.min(11000, Math.floor(progress * 11000)));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pressureAtm = (1 + depth / 10).toFixed(0);

  return (
    <div className="ocean-app" style={{ backgroundColor: `rgb(${Math.max(2, 10 - depth/1000)}, ${Math.max(4, 20 - depth/500)}, ${Math.max(10, 40 - depth/300)})` }}>
      <header className="ocean-nav">
        <span>EXPEDITION HADAL // MARIANA TRENCH</span>
        <div className="depth-counter">DEPTH: {depth} M // PRESSURE: {pressureAtm} ATM</div>
      </header>

      {/* Surface Zone */}
      <section className="depth-section">
        <h1>01 // EPIPELAGIC (0M - 200M)</h1>
        <p>The photic zone where sunlight penetrates and photosynthesis sustains surface pelagic marine life.</p>
      </section>

      {/* Mesopelagic */}
      <section className="depth-section">
        <h1>02 // MESOPELAGIC (200M - 1,000M)</h1>
        <p>The Twilight Zone. Sunlight rapidly attenuates. Bioluminescence becomes the primary visual mechanism.</p>
      </section>

      {/* Bathypelagic */}
      <section className="depth-section">
        <h1>03 // BATHYPELAGIC (1,000M - 4,000M)</h1>
        <p>Total darkness. Temperature drops to 4°C. Hydrostatic pressure exceeds 100 atmospheres.</p>
      </section>

      {/* Hadal Trench */}
      <section className="depth-section hadal">
        <h1>04 // HADAL ZONE (6,000M - 11,000M)</h1>
        <p>Challenger Deep. 1,100 atmospheres of crushing ambient hydrostatic pressure. Endemic amphipods and snailfish.</p>
        <div className="telemetry-box">
          <div>Submersible: TRIESTE II // STATUS: ACTIVE DEPLOYMENT</div>
          <div>Bathymetric Multibeam: 10,928m Measured Basin Depth</div>
        </div>
      </section>
    </div>
  );
}
