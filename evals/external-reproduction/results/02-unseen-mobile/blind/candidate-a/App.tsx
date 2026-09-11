import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [triageStatus, setTriageStatus] = useState<'RED' | 'YELLOW' | 'GREEN'>('RED');
  const [heartRate, setHeartRate] = useState(128);
  const [systolic, setSystolic] = useState(82);
  const [diastolic, setDiastolic] = useState(50);
  const [spo2, setSpo2] = useState(87);
  const [respRate, setRespRate] = useState(26);
  const [audioRecording, setAudioRecording] = useState(false);
  const [isSynced, setIsSynced] = useState(false);
  const [activeQuickVitals, setActiveQuickVitals] = useState<'hr' | 'bp' | 'spo2' | 'rr'>('hr');

  return (
    <div className="v2-clinical-app">
      {/* High-Contrast Clinical Status Header */}
      <header className="v2-clinical-topbar">
        <div className="v2-meta-left">
          <span className="v2-unit-badge">MED-ALPHA // 04</span>
          <span className="v2-patient-id">PATIENT #912-702</span>
        </div>
        <div className="v2-connection-pill">
          <span className={`v2-pulse-dot ${isSynced ? 'synced' : 'cached'}`}></span>
          <span className="v2-sync-text">{isSynced ? 'BASE CONNECTED' : 'LOCAL CACHE (OFFLINE)'}</span>
        </div>
      </header>

      {/* Patient Demographic Bar */}
      <section className="v2-patient-strip">
        <div className="v2-patient-info">
          <h2>MALE // ~45 YRS // VEHICULAR TRAUMA</h2>
          <span className="v2-gcs">GCS: 11 (E3V3M5) // AIRWAY MAINTAINED</span>
        </div>
      </section>

      {/* Triage Priority Selector (Minimum 56px Touch Target) */}
      <section className="v2-triage-selector">
        <button 
          className={`v2-triage-btn red ${triageStatus === 'RED' ? 'selected' : ''}`}
          onClick={() => setTriageStatus('RED')}
        >
          <span className="triage-num">P1</span>
          <span className="triage-name">IMMEDIATE</span>
          <span className="triage-sub">CRITICAL THREAT</span>
        </button>
        <button 
          className={`v2-triage-btn yellow ${triageStatus === 'YELLOW' ? 'selected' : ''}`}
          onClick={() => setTriageStatus('YELLOW')}
        >
          <span className="triage-num">P2</span>
          <span className="triage-name">DELAYED</span>
          <span className="triage-sub">SERIOUS STABLE</span>
        </button>
        <button 
          className={`v2-triage-btn green ${triageStatus === 'GREEN' ? 'selected' : ''}`}
          onClick={() => setTriageStatus('GREEN')}
        >
          <span className="triage-num">P3</span>
          <span className="triage-name">MINIMAL</span>
          <span className="triage-sub">AMBULATORY</span>
        </button>
      </section>

      {/* Tactical Vitals 2x2 Bento Grid */}
      <section className="v2-vitals-bento">
        {/* Heart Rate */}
        <div 
          className={`v2-vital-cell ${activeQuickVitals === 'hr' ? 'focused' : ''} ${heartRate > 120 ? 'critical-alert' : ''}`}
          onClick={() => setActiveQuickVitals('hr')}
        >
          <div className="v2-cell-top">
            <span className="vital-tag">HEART RATE</span>
            <span className="vital-flag">TACHYCARDIA</span>
          </div>
          <div className="v2-cell-val">
            <span className="numeric">{heartRate}</span>
            <span className="unit">BPM</span>
          </div>
        </div>

        {/* Blood Pressure */}
        <div 
          className={`v2-vital-cell ${activeQuickVitals === 'bp' ? 'focused' : ''} ${systolic < 90 ? 'critical-alert' : ''}`}
          onClick={() => setActiveQuickVitals('bp')}
        >
          <div className="v2-cell-top">
            <span className="vital-tag">BLOOD PRESSURE</span>
            <span className="vital-flag">HYPOTENSIVE</span>
          </div>
          <div className="v2-cell-val">
            <span className="numeric">{systolic}/{diastolic}</span>
            <span className="unit">MMHG</span>
          </div>
        </div>

        {/* SpO2 Oxygen */}
        <div 
          className={`v2-vital-cell ${activeQuickVitals === 'spo2' ? 'focused' : ''} ${spo2 < 90 ? 'critical-alert' : ''}`}
          onClick={() => setActiveQuickVitals('spo2')}
        >
          <div className="v2-cell-top">
            <span className="vital-tag">PULSE OX (SpO2)</span>
            <span className="vital-flag">HYPOXIC</span>
          </div>
          <div className="v2-cell-val">
            <span className="numeric">{spo2}%</span>
            <span className="unit">O2 SAT</span>
          </div>
        </div>

        {/* Respiration */}
        <div 
          className={`v2-vital-cell ${activeQuickVitals === 'rr' ? 'focused' : ''}`}
          onClick={() => setActiveQuickVitals('rr')}
        >
          <div className="v2-cell-top">
            <span className="vital-tag">RESP. RATE</span>
            <span className="vital-flag">ELEVATED</span>
          </div>
          <div className="v2-cell-val">
            <span className="numeric">{respRate}</span>
            <span className="unit">/ MIN</span>
          </div>
        </div>
      </section>

      {/* Gloved Rapid-Entry Stepper Zone (Thumb Reachable) */}
      <section className="v2-stepper-panel">
        <div className="v2-stepper-header">
          <span>RAPID VITAL ADJUSTMENT: <strong>{activeQuickVitals.toUpperCase()}</strong></span>
        </div>
        <div className="v2-stepper-buttons">
          {activeQuickVitals === 'hr' && (
            <>
              <button className="glove-btn" onClick={() => setHeartRate(h => h - 10)}>-10</button>
              <button className="glove-btn" onClick={() => setHeartRate(h => h - 2)}>-2</button>
              <button className="glove-btn" onClick={() => setHeartRate(h => h + 2)}>+2</button>
              <button className="glove-btn" onClick={() => setHeartRate(h => h + 10)}>+10</button>
            </>
          )}
          {activeQuickVitals === 'bp' && (
            <>
              <button className="glove-btn" onClick={() => setSystolic(s => s - 5)}>-5 SYS</button>
              <button className="glove-btn" onClick={() => setSystolic(s => s + 5)}>+5 SYS</button>
              <button className="glove-btn" onClick={() => setDiastolic(d => d - 5)}>-5 DIA</button>
              <button className="glove-btn" onClick={() => setDiastolic(d => d + 5)}>+5 DIA</button>
            </>
          )}
          {activeQuickVitals === 'spo2' && (
            <>
              <button className="glove-btn" onClick={() => setSpo2(s => Math.max(50, s - 5))}>-5%</button>
              <button className="glove-btn" onClick={() => setSpo2(s => Math.max(50, s - 1))}>-1%</button>
              <button className="glove-btn" onClick={() => setSpo2(s => Math.min(100, s + 1))}>+1%</button>
              <button className="glove-btn" onClick={() => setSpo2(s => Math.min(100, s + 5))}>+5%</button>
            </>
          )}
          {activeQuickVitals === 'rr' && (
            <>
              <button className="glove-btn" onClick={() => setRespRate(r => r - 2)}>-2</button>
              <button className="glove-btn" onClick={() => setRespRate(r => r - 1)}>-1</button>
              <button className="glove-btn" onClick={() => setRespRate(r => r + 1)}>+1</button>
              <button className="glove-btn" onClick={() => setRespRate(r => r + 2)}>+2</button>
            </>
          )}
        </div>
      </section>

      {/* Emergency Field Action Dock (Bottom 35% of Viewport) */}
      <footer className="v2-action-dock">
        <button 
          className={`v2-audio-record-btn ${audioRecording ? 'recording-active' : ''}`}
          onClick={() => setAudioRecording(!audioRecording)}
        >
          <span className="mic-icon">{audioRecording ? '🔴' : '🎙️'}</span>
          <span className="mic-text">
            {audioRecording ? 'TRANSMITTING CONTINUOUS VOICE TELEMETRY' : 'HOLD / TAP FOR VOICE TRIAGE NOTE'}
          </span>
        </button>

        <button 
          className="v2-dispatch-button"
          onClick={() => setIsSynced(true)}
        >
          <span>TRANSMIT TRAUMA PACKET TO BASE DISPATCH →</span>
        </button>
      </footer>
    </div>
  );
}
