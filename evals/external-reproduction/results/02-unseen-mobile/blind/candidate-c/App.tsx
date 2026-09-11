import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [triageCategory, setTriageCategory] = useState<'RED' | 'YELLOW' | 'GREEN'>('RED');
  const [heartRate, setHeartRate] = useState(124);
  const [bpSystolic, setBpSystolic] = useState(84);
  const [spo2Percent, setSpo2Percent] = useState(88);
  const [audioActive, setAudioActive] = useState(false);
  const [syncedCloud, setSyncedCloud] = useState(false);

  return (
    <div className="taste-mobile-layout">
      {/* High-Contrast Clinical Monograph Header */}
      <header className="clinical-header">
        <div className="clinical-meta">
          <span className="unit-id">TRIAGE // RESPONDER-07</span>
          <div className="connection-state">
            <span className={`status-dot ${syncedCloud ? 'dot-green' : 'dot-amber'}`}></span>
            <span>{syncedCloud ? 'SYNCED' : 'OFFLINE CACHE'}</span>
          </div>
        </div>
        <div className="patient-banner">
          <h1>MALE // APPROX 45Y // POLYTRAUMA</h1>
          <span className="incident-code">INCIDENT: INC-2026-0912-A</span>
        </div>
      </header>

      {/* High-Stress Triage Priority Switcher */}
      <section className="triage-strip">
        <button 
          className={`triage-box red ${triageCategory === 'RED' ? 'active' : ''}`}
          onClick={() => setTriageCategory('RED')}
        >
          <span className="box-code">P1</span>
          <span className="box-label">IMMEDIATE</span>
        </button>
        <button 
          className={`triage-box yellow ${triageCategory === 'YELLOW' ? 'active' : ''}`}
          onClick={() => setTriageCategory('YELLOW')}
        >
          <span className="box-code">P2</span>
          <span className="box-label">DELAYED</span>
        </button>
        <button 
          className={`triage-box green ${triageCategory === 'GREEN' ? 'active' : ''}`}
          onClick={() => setTriageCategory('GREEN')}
        >
          <span className="box-code">P3</span>
          <span className="box-label">MINIMAL</span>
        </button>
      </section>

      {/* Critical Vitals Monograph */}
      <section className="vitals-dossier">
        {/* Heart Rate Block */}
        <div className="vital-dossier-card alert-state">
          <div className="dossier-header">
            <span className="dossier-label">01 // CARDIAC FREQUENCY</span>
            <span className="dossier-status">TACHYCARDIA CRITICAL</span>
          </div>
          <div className="dossier-main">
            <span className="dossier-numeric">{heartRate}</span>
            <span className="dossier-unit">BPM</span>
          </div>
          <div className="glove-stepper">
            <button className="stepper-btn" onClick={() => setHeartRate(h => h - 10)}>-10</button>
            <button className="stepper-btn" onClick={() => setHeartRate(h => h - 2)}>-2</button>
            <button className="stepper-btn" onClick={() => setHeartRate(h => h + 2)}>+2</button>
            <button className="stepper-btn" onClick={() => setHeartRate(h => h + 10)}>+10</button>
          </div>
        </div>

        {/* Systolic Pressure */}
        <div className="vital-dossier-card alert-state">
          <div className="dossier-header">
            <span className="dossier-label">02 // NON-INVASIVE SYSTOLIC</span>
            <span className="dossier-status">HYPOTENSION LEVEL 2</span>
          </div>
          <div className="dossier-main">
            <span className="dossier-numeric">{bpSystolic}</span>
            <span className="dossier-unit">/ 52 MMHG</span>
          </div>
          <div className="glove-stepper">
            <button className="stepper-btn" onClick={() => setBpSystolic(b => b - 5)}>-5</button>
            <button className="stepper-btn" onClick={() => setBpSystolic(b => b + 5)}>+5</button>
          </div>
        </div>

        {/* SpO2 Blood Oxygen */}
        <div className="vital-dossier-card alert-state">
          <div className="dossier-header">
            <span className="dossier-label">03 // PULSE OXIMETRY</span>
            <span className="dossier-status">HYPOXEMIC THRESHOLD</span>
          </div>
          <div className="dossier-main">
            <span className="dossier-numeric">{spo2Percent}</span>
            <span className="dossier-unit">% SpO2</span>
          </div>
          <div className="glove-stepper">
            <button className="stepper-btn" onClick={() => setSpo2Percent(s => Math.max(60, s - 2))}>-2%</button>
            <button className="stepper-btn" onClick={() => setSpo2Percent(s => Math.min(100, s + 2))}>+2%</button>
          </div>
        </div>
      </section>

      {/* Field Ergonomics: Bottom Action Controls */}
      <footer className="field-action-dock">
        <button 
          className={`audio-btn ${audioActive ? 'active' : ''}`}
          onClick={() => setAudioActive(!audioActive)}
        >
          {audioActive ? '[TRANSMITTING AUDIO TELEMETRY]' : '[RECORD TELE-MEDIC AUDIO NOTE]'}
        </button>

        <button 
          className="dispatch-action-btn"
          onClick={() => setSyncedCloud(true)}
        >
          TRANSMIT TRIAGE TELEMETRY TO BASE →
        </button>
      </footer>
    </div>
  );
}
