import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [alloy, setAlloy] = useState<'PT950' | 'AU750' | 'CARBON'>('PT950');
  const [dialGuilloche, setDialGuilloche] = useState<'PARIS' | 'GRAINED' | 'SKELETON'>('PARIS');
  const [strapLeather, setStrapLeather] = useState<'CROCODILE' | 'VEAL' | 'TITANIUM'>('CROCODILE');
  const [certModal, setCertModal] = useState(false);

  const priceModel = {
    alloy: { PT950: 54000, AU750: 46000, CARBON: 41000 },
    dial: { PARIS: 4800, GRAINED: 3200, SKELETON: 8600 },
    strap: { CROCODILE: 2400, VEAL: 1100, TITANIUM: 5200 }
  };

  const calculatedTotal = priceModel.alloy[alloy] + priceModel.dial[dialGuilloche] + priceModel.strap[strapLeather];

  return (
    <div className="taste-horlogerie-app">
      {/* Top Monograph Bar */}
      <header className="horlogerie-top">
        <div className="brand-dossier">
          <span className="brand-atelier">ATELIER HAUTE HORLOGERIE // GENÈVE</span>
          <span className="brand-serial">PIÈCE UNIQUE // CALIBRE 1400 MANUAL</span>
        </div>
        <div className="price-tag">
          <span className="price-currency">VALUATION:</span>
          <span className="price-amount">${calculatedTotal.toLocaleString()} CHF</span>
        </div>
      </header>

      {/* Main Split Configurator */}
      <div className="horlogerie-workspace">
        {/* Left: High-Contrast Monolith Display */}
        <div className="timepiece-display-chamber">
          <div className="chamber-meta">
            <span>[FIG 01] MONOCHROME CAD RENDER</span>
            <span>CHOPARD / DUFOUR ALLIANCE SPEC</span>
          </div>

          <div className={`timepiece-render-chassis ${alloy.toLowerCase()}`}>
            <div className={`timepiece-dial ${dialGuilloche.toLowerCase()}`}>
              <div className="hand-hour"></div>
              <div className="hand-minute"></div>
              <div className="tourbillon-aperture">
                <div className="tourbillon-cage"></div>
              </div>
            </div>
            <div className={`timepiece-lugs ${alloy.toLowerCase()}`}></div>
          </div>

          <div className="timepiece-telemetry-strip">
            <div className="tele-item">
              <span className="tele-label">ALLOY DENSITY</span>
              <span className="tele-val">{alloy === 'PT950' ? '21.45 g/cm³' : alloy === 'AU750' ? '15.50 g/cm³' : '1.82 g/cm³'}</span>
            </div>
            <div className="tele-item">
              <span className="tele-label">FREQUENCY</span>
              <span className="tele-val">21,600 VPH (3Hz)</span>
            </div>
            <div className="tele-item">
              <span className="tele-label">POWER RESERVE</span>
              <span className="tele-val">72 HOURS TWIN-BARREL</span>
            </div>
          </div>
        </div>

        {/* Right: Technical Specification & Configuration Dossier */}
        <div className="specification-dossier">
          {/* Metallurgy */}
          <section className="dossier-group">
            <div className="group-heading">
              <span className="group-num">01 // CASE METALLURGY</span>
              <span className="group-spec">39.5MM × 9.2MM FORGED</span>
            </div>
            <div className="option-list">
              <button 
                className={`option-cell ${alloy === 'PT950' ? 'selected' : ''}`}
                onClick={() => setAlloy('PT950')}
              >
                <div className="opt-title">950 PLATINUM (PT950)</div>
                <div className="opt-desc">Cold-forged mirror polished case with hand-beveled hollow lugs.</div>
                <div className="opt-price">+54,000 CHF</div>
              </button>
              <button 
                className={`option-cell ${alloy === 'AU750' ? 'selected' : ''}`}
                onClick={() => setAlloy('AU750')}
              >
                <div className="opt-title">18K 5N ROSE GOLD (AU750)</div>
                <div className="opt-desc">Proprietary palladium-stabilized copper alloy with satin flanks.</div>
                <div className="opt-price">+46,000 CHF</div>
              </button>
              <button 
                className={`option-cell ${alloy === 'CARBON' ? 'selected' : ''}`}
                onClick={() => setAlloy('CARBON')}
              >
                <div className="opt-title">FORGED AEROSPACE CARBON</div>
                <div className="opt-desc">High-temperature autoclaved carbon matrix with matte titanium core.</div>
                <div className="opt-price">+41,000 CHF</div>
              </button>
            </div>
          </section>

          {/* Dial Guilloché */}
          <section className="dossier-group">
            <div className="group-heading">
              <span className="group-num">02 // DIAL GUILLOCHAGE</span>
              <span className="group-spec">SOLID GOLD ENGINE-TURNED</span>
            </div>
            <div className="option-list">
              <button 
                className={`option-cell ${dialGuilloche === 'PARIS' ? 'selected' : ''}`}
                onClick={() => setDialGuilloche('PARIS')}
              >
                <div className="opt-title">CLOUS DE PARIS PYRAMIDAL</div>
                <div className="opt-price">+4,800 CHF</div>
              </button>
              <button 
                className={`option-cell ${dialGuilloche === 'GRAINED' ? 'selected' : ''}`}
                onClick={() => setDialGuilloche('GRAINED')}
              >
                <div className="opt-title">GRANULATION FLINT FINISH</div>
                <div className="opt-price">+3,200 CHF</div>
              </button>
              <button 
                className={`option-cell ${dialGuilloche === 'SKELETON' ? 'selected' : ''}`}
                onClick={() => setDialGuilloche('SKELETON')}
              >
                <div className="opt-title">OPENWORKED ANGLAGE SKELETON</div>
                <div className="opt-price">+8,600 CHF</div>
              </button>
            </div>
          </section>

          {/* Actions */}
          <div className="dossier-actions">
            <button className="cert-preview-btn" onClick={() => setCertModal(true)}>
              [INSPECT ALLOCATION CERTIFICATE]
            </button>
            <button className="commission-btn">
              SUBMIT COMMISSION DOSSIER →
            </button>
          </div>
        </div>
      </div>

      {/* Certificate of Provenance Modal */}
      {certModal && (
        <div className="modal-dossier-backdrop">
          <div className="modal-dossier-card">
            <span className="cert-seal">GENÈVE // 1839</span>
            <h3>CERTIFICAT DE PROVENANCE ET D'AUTHENTICITÉ</h3>
            <p className="cert-lead">Pièce Unique manufacturée sous les critères du Poinçon de Genève.</p>
            <div className="cert-data-grid">
              <div><span>ALLIAGE BOÎTIER:</span> <strong>{alloy}</strong></div>
              <div><span>GUILLOCHAGE CADRAN:</span> <strong>{dialGuilloche}</strong></div>
              <div><span>HABILLAGE BRACELET:</span> <strong>{strapLeather}</strong></div>
              <div><span>NUMÉRO UNIQUE:</span> <strong>PU-2026-0912-A</strong></div>
            </div>
            <button className="cert-close-btn" onClick={() => setCertModal(false)}>[FERMER LE DOSSIER]</button>
          </div>
        </div>
      )}
    </div>
  );
}
