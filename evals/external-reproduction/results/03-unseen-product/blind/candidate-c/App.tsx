import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [metalSelection, setMetalSelection] = useState<'PT950' | 'AU750_ROSE' | 'CARBON_TITANIUM'>('PT950');
  const [guillocheStyle, setGuillocheStyle] = useState<'CLOUS_DE_PARIS' | 'FLAMME_WAVE' | 'OPEN_TOURBILLON'>('CLOUS_DE_PARIS');
  const [handFinish, setHandFinish] = useState<'HEAT_BLUED' | 'POLISHED_STEEL' | 'ROSE_GOLD'>('HEAT_BLUED');
  const [strapOption, setStrapOption] = useState<'ALLIGATOR_BLACK' | 'ALLIGATOR_HAVANA' | 'TITANIUM_MESH'>('ALLIGATOR_BLACK');
  const [certDrawerOpen, setCertDrawerOpen] = useState(false);
  const [zoomMaterial, setZoomMaterial] = useState(false);

  const metallurgyPricing = {
    PT950: { base: 62000, name: '950 Platinum Cold-Forged', code: 'PT-950', density: '21.45 g/cm³' },
    AU750_ROSE: { base: 54000, name: '18K 5N Rose Gold (Palladium Stabilized)', code: 'AU-750', density: '15.50 g/cm³' },
    CARBON_TITANIUM: { base: 48000, name: 'NTPT Forged Carbon / Grade 5 Titanium Core', code: 'C-TI5', density: '1.85 g/cm³' }
  };

  const dialPricing = {
    CLOUS_DE_PARIS: { add: 4500, name: 'Clous de Paris Hobnail Engine-Turned' },
    FLAMME_WAVE: { add: 5800, name: 'Vague Circulaire Hand-Guilloché' },
    OPEN_TOURBILLON: { add: 14500, name: 'Openworked 60-Second Flying Tourbillon' }
  };

  const strapPricing = {
    ALLIGATOR_BLACK: { add: 1800, name: 'Mississippiensis Matte Black Hand-Stitched' },
    ALLIGATOR_HAVANA: { add: 2100, name: 'Havana Patina Saddle-Stitched' },
    TITANIUM_MESH: { add: 4800, name: 'Grade 5 Milanese Articulated Mesh' }
  };

  const totalBOM = metallurgyPricing[metalSelection].base + dialPricing[guillocheStyle].add + strapPricing[strapOption].add;

  return (
    <div className="v2-horlogerie-app">
      {/* Header Bar */}
      <nav className="v2-atelier-nav">
        <div className="v2-brand-block">
          <span className="v2-brand-atelier">ATELIER KRONOS // BESPOKE COMMISSIONS</span>
          <span className="v2-brand-calibre">CALIBRE K-01 FLYING TOURBILLON // MANUFACTURE GENÈVE</span>
        </div>
        <div className="v2-valuation-pill">
          <span className="val-label">TOTAL COMMISSION VALUE:</span>
          <span className="val-amount">${totalBOM.toLocaleString()} CHF</span>
        </div>
      </nav>

      {/* Main Split Studio */}
      <main className="v2-studio-layout">
        {/* Left Interactive Timepiece Chamber */}
        <section className="v2-timepiece-stage">
          <div className="v2-stage-toolbar">
            <span className="v2-stage-title">[REAL-TIME OPTICAL RENDERING]</span>
            <button 
              className={`v2-zoom-toggle ${zoomMaterial ? 'active' : ''}`}
              onClick={() => setZoomMaterial(!zoomMaterial)}
            >
              {zoomMaterial ? '🔍 1:1 CASE VIEW' : '🔍 MACRO MATERIAL ZOOM'}
            </button>
          </div>

          <div className={`v2-render-chamber ${zoomMaterial ? 'macro-mode' : ''}`}>
            <div className={`v2-chassis-bezel ${metalSelection.toLowerCase()}`}>
              <div className={`v2-dial-face ${guillocheStyle.toLowerCase()}`}>
                <div className={`v2-hand v2-hour ${handFinish.toLowerCase()}`}></div>
                <div className={`v2-hand v2-minute ${handFinish.toLowerCase()}`}></div>
                {guillocheStyle === 'OPEN_TOURBILLON' && (
                  <div className="v2-tourbillon-module">
                    <div className="v2-cage-bridge"></div>
                  </div>
                )}
                <div className="v2-dial-indices"></div>
              </div>
            </div>
          </div>

          {/* Material & Acoustic Telemetry Bar */}
          <div className="v2-telemetry-bento">
            <div className="tele-box">
              <span className="t-label">METALLURGY DENSITY</span>
              <strong>{metallurgyPricing[metalSelection].density}</strong>
            </div>
            <div className="tele-box">
              <span className="t-label">ESCAPEMENT</span>
              <strong>VARIABLE INERTIA TITANIUM</strong>
            </div>
            <div className="tele-box">
              <span className="t-label">CHRONOMETRY</span>
              <strong>ISO 3159 5-POS TESTED</strong>
            </div>
            <div className="tele-box">
              <span className="t-label">PRODUCTION LIMIT</span>
              <strong>PIÈCE UNIQUE 1/1</strong>
            </div>
          </div>
        </section>

        {/* Right Configuration Studio */}
        <section className="v2-config-studio">
          {/* 01 Metallurgy */}
          <div className="v2-config-group">
            <div className="v2-group-header">
              <span className="v2-group-num">01 // METALLURGY & CASE ARCHITECTURE</span>
              <span className="v2-group-meta">39.0MM × 8.8MM PROFILE</span>
            </div>
            <div className="v2-options-stack">
              <button 
                className={`v2-opt-card ${metalSelection === 'PT950' ? 'selected' : ''}`}
                onClick={() => setMetalSelection('PT950')}
              >
                <div className="opt-meta-top">
                  <strong>950 PLATINUM (PT950)</strong>
                  <span className="opt-cost">+62,000 CHF</span>
                </div>
                <p>Cold-forged high-density platinum unibody with mirror-polished concave bezel and hand-anglage lugs.</p>
              </button>

              <button 
                className={`v2-opt-card ${metalSelection === 'AU750_ROSE' ? 'selected' : ''}`}
                onClick={() => setMetalSelection('AU750_ROSE')}
              >
                <div className="opt-meta-top">
                  <strong>18K 5N ROSE GOLD (AU750)</strong>
                  <span className="opt-cost">+54,000 CHF</span>
                </div>
                <p>Proprietary copper-palladium alloy preventing tarnishing with brushed satin flanks.</p>
              </button>

              <button 
                className={`v2-opt-card ${metalSelection === 'CARBON_TITANIUM' ? 'selected' : ''}`}
                onClick={() => setMetalSelection('CARBON_TITANIUM')}
              >
                <div className="opt-meta-top">
                  <strong>NTPT CARBON & GRADE 5 TITANIUM</strong>
                  <span className="opt-cost">+48,000 CHF</span>
                </div>
                <p>Multi-directional carbon-fiber composite with blasted aerospace grade 5 titanium monobloc skeleton.</p>
              </button>
            </div>
          </div>

          {/* 02 Guilloche */}
          <div className="v2-config-group">
            <div className="v2-group-header">
              <span className="v2-group-num">02 // DIAL GUILLOCHÉ & APERTURE</span>
              <span className="v2-group-meta">HAND ENGINE-TURNED GOLD</span>
            </div>
            <div className="v2-options-stack">
              <button 
                className={`v2-opt-card ${guillocheStyle === 'CLOUS_DE_PARIS' ? 'selected' : ''}`}
                onClick={() => setGuillocheStyle('CLOUS_DE_PARIS')}
              >
                <div className="opt-meta-top">
                  <strong>CLOUS DE PARIS HOBNAIL</strong>
                  <span className="opt-cost">+4,500 CHF</span>
                </div>
              </button>
              <button 
                className={`v2-opt-card ${guillocheStyle === 'FLAMME_WAVE' ? 'selected' : ''}`}
                onClick={() => setGuillocheStyle('FLAMME_WAVE')}
              >
                <div className="opt-meta-top">
                  <strong>VAGUE CIRCULAIRE GUILLOCHÉ</strong>
                  <span className="opt-cost">+5,800 CHF</span>
                </div>
              </button>
              <button 
                className={`v2-opt-card ${guillocheStyle === 'OPEN_TOURBILLON' ? 'selected' : ''}`}
                onClick={() => setGuillocheStyle('OPEN_TOURBILLON')}
              >
                <div className="opt-meta-top">
                  <strong>OPENWORKED FLYING TOURBILLON</strong>
                  <span className="opt-cost">+14,500 CHF</span>
                </div>
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="v2-action-stack">
            <button className="v2-btn-cert" onClick={() => setCertDrawerOpen(true)}>
              [INSPECT ALLOCATION CERTIFICATE & PROVENANCE]
            </button>
            <button className="v2-btn-commission">
              COMMISSION BESPOKE TIMEPIECE ALLOCATION →
            </button>
          </div>
        </section>
      </main>

      {/* Provenance Certificate Overlay */}
      {certDrawerOpen && (
        <div className="v2-cert-overlay">
          <div className="v2-cert-modal">
            <div className="cert-header">
              <span className="cert-creed">MANUFACTURE D'HORLOGERIE D'ART // GENÈVE</span>
              <h2>CERTIFICAT D'ORIGINE ET DE PROVENANCE</h2>
              <span className="cert-id">ALLOCATION REF: K-2026-PU-0912</span>
            </div>
            <div className="cert-spec-table">
              <div className="spec-item"><span>BOÎTIER MÉTALLURGIQUE:</span> <strong>{metallurgyPricing[metalSelection].name}</strong></div>
              <div className="spec-item"><span>CADRAN GUILLOCHÉ:</span> <strong>{dialPricing[guillocheStyle].name}</strong></div>
              <div className="spec-item"><span>HABILLAGE BRACELET:</span> <strong>{strapPricing[strapOption].name}</strong></div>
              <div className="spec-item"><span>CHRONOMÉTRIE:</span> <strong>POINÇON DE GENÈVE OFFICIELLEMENT CERTIFIÉ</strong></div>
            </div>
            <button className="v2-close-cert" onClick={() => setCertDrawerOpen(false)}>[FERMER LE REGISTRE]</button>
          </div>
        </div>
      )}
    </div>
  );
}
