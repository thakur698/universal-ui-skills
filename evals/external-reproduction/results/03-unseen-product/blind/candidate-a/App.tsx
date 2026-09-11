import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [metal, setMetal] = useState<'platinum' | 'rosegold' | 'carbon'>('rosegold');
  const [guilloche, setGuilloche] = useState<'clous' | 'sunburst' | 'waves'>('clous');
  const [strap, setStrap] = useState<'alligator' | 'rubber' | 'titanium'>('alligator');
  const [showCert, setShowCert] = useState(false);

  const prices = {
    metal: { platinum: 48000, rosegold: 42000, carbon: 39000 },
    guilloche: { clous: 3500, sunburst: 2000, waves: 4200 },
    strap: { alligator: 1800, rubber: 800, titanium: 4500 }
  };

  const totalPrice = prices.metal[metal] + prices.guilloche[guilloche] + prices.strap[strap];

  return (
    <div className="watch-app">
      <header className="watch-nav">
        <div className="logo">VAUCHER & CIE // 1839</div>
        <div className="total-price">${totalPrice.toLocaleString()} USD</div>
      </header>

      <div className="config-layout">
        {/* Watch Visualizer */}
        <div className="visualizer-pane">
          <div className={`watch-render-box ${metal}`}>
            <div className={`dial-layer ${guilloche}`}>
              <div className="watch-hands"></div>
            </div>
            <div className={`strap-layer ${strap}`}></div>
          </div>
          <div className="watch-spec-tag">
            CHRONOMETRE SOUVERAIN // {metal.toUpperCase()} // 39MM
          </div>
        </div>

        {/* Controls */}
        <div className="controls-pane">
          <section className="ctrl-group">
            <h3>01 // CASE METALLURGY</h3>
            <div className="btn-row">
              <button className={metal === 'rosegold' ? 'active' : ''} onClick={() => setMetal('rosegold')}>
                18K Rose Gold (+$42k)
              </button>
              <button className={metal === 'platinum' ? 'active' : ''} onClick={() => setMetal('platinum')}>
                950 Platinum (+$48k)
              </button>
              <button className={metal === 'carbon' ? 'active' : ''} onClick={() => setMetal('carbon')}>
                Forged Carbon (+$39k)
              </button>
            </div>
          </section>

          <section className="ctrl-group">
            <h3>02 // GUILLOCHÉ PATTERN</h3>
            <div className="btn-row">
              <button className={guilloche === 'clous' ? 'active' : ''} onClick={() => setGuilloche('clous')}>
                Clous de Paris
              </button>
              <button className={guilloche === 'sunburst' ? 'active' : ''} onClick={() => setGuilloche('sunburst')}>
                Soleil Guilloché
              </button>
              <button className={guilloche === 'waves' ? 'active' : ''} onClick={() => setGuilloche('waves')}>
                Côtes Circulaires
              </button>
            </div>
          </section>

          <section className="ctrl-group">
            <h3>03 // BESPOKE STRAP</h3>
            <div className="btn-row">
              <button className={strap === 'alligator' ? 'active' : ''} onClick={() => setStrap('alligator')}>
                Matte Alligator
              </button>
              <button className={strap === 'rubber' ? 'active' : ''} onClick={() => setStrap('rubber')}>
                FKM Vulcanized Rubber
              </button>
              <button className={strap === 'titanium' ? 'active' : ''} onClick={() => setStrap('titanium')}>
                Grade 5 Mesh Bracelet
              </button>
            </div>
          </section>

          <div className="action-row">
            <button className="btn-cert" onClick={() => setShowCert(!showCert)}>
              {showCert ? 'HIDE CERTIFICATE' : 'PREVIEW PROVENANCE CERTIFICATE'}
            </button>
            <button className="btn-reserve">COMMISSION TIMEPIECE</button>
          </div>
        </div>
      </div>

      {/* Provenance Certificate Modal */}
      {showCert && (
        <div className="cert-overlay">
          <div className="cert-card">
            <h2>CERTIFICAT DE PROVENANCE HAUTE HORLOGERIE</h2>
            <p>Piece Unique No. 2026-VC-{metal.slice(0, 2).toUpperCase()}-99</p>
            <div className="cert-specs">
              <div>Case: {metal.toUpperCase()}</div>
              <div>Guilloche: {guilloche.toUpperCase()}</div>
              <div>Strap: {strap.toUpperCase()}</div>
              <div>Regulation: 5-Position ISO 3159 Chronometer Tested</div>
            </div>
            <button className="btn-close" onClick={() => setShowCert(false)}>CLOSE</button>
          </div>
        </div>
      )}
    </div>
  );
}
