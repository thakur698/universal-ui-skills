import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [triage, setTriage] = useState<'red' | 'yellow' | 'green'>('red');
  const [hr, setHr] = useState(118);
  const [bp, setBp] = useState('88/54');
  const [spo2, setSpo2] = useState(89);
  const [recording, setRecording] = useState(false);
  const [synced, setSynced] = useState(false);

  return (
    <div className="mobile-app">
      {/* Top Header */}
      <div className="status-bar">
        <span>UNIT 42-ALPHA</span>
        <span className={synced ? "sync-on" : "sync-off"}>
          {synced ? "● CLOUD SYNCED" : "○ OFFLINE (LOCAL CACHED)"}
        </span>
      </div>

      <div className="patient-header">
        <h2>MALE, ~45 YRS // TRAUMA</h2>
        <span className="case-id">CASE #2026-0912-04</span>
      </div>

      {/* Triage Level Selector */}
      <div className="triage-selector">
        <button 
          className={`triage-btn btn-red ${triage === 'red' ? 'selected' : ''}`}
          onClick={() => setTriage('red')}
        >
          IMMEDIATE (RED)
        </button>
        <button 
          className={`triage-btn btn-yellow ${triage === 'yellow' ? 'selected' : ''}`}
          onClick={() => setTriage('yellow')}
        >
          DELAYED (YELLOW)
        </button>
        <button 
          className={`triage-btn btn-green ${triage === 'green' ? 'selected' : ''}`}
          onClick={() => setTriage('green')}
        >
          MINIMAL (GREEN)
        </button>
      </div>

      {/* Vitals Grid */}
      <div className="vitals-container">
        <div className="vital-card critical">
          <span className="vital-title">HEART RATE</span>
          <div className="vital-value">{hr} <span className="unit">BPM</span></div>
          <div className="quick-stepper">
            <button onClick={() => setHr(h => h - 5)}>-5</button>
            <button onClick={() => setHr(h => h + 5)}>+5</button>
          </div>
        </div>

        <div className="vital-card critical">
          <span className="vital-title">BLOOD PRESSURE</span>
          <div className="vital-value">{bp} <span className="unit">MMHG</span></div>
          <span className="vital-sub">HYPOTENSIVE CRITICAL</span>
        </div>

        <div className="vital-card critical">
          <span className="vital-title">SpO2 OXYGEN</span>
          <div className="vital-value">{spo2}%</div>
          <div className="quick-stepper">
            <button onClick={() => setSpo2(s => Math.max(70, s - 1))}>-1%</button>
            <button onClick={() => setSpo2(s => Math.min(100, s + 1))}>+1%</button>
          </div>
        </div>
      </div>

      {/* Emergency Field Actions (Thumb Zone) */}
      <div className="bottom-action-zone">
        <button 
          className={`audio-toggle-btn ${recording ? 'recording' : ''}`}
          onClick={() => setRecording(!recording)}
        >
          {recording ? "🔴 TRANSMITTING FIELD AUDIO..." : "🎙️ RECORD VOICE TRIAGE NOTE"}
        </button>
        
        <button 
          className="dispatch-btn"
          onClick={() => setSynced(true)}
        >
          DISPATCH TRAUMA PACKET TO BASE
        </button>
      </div>
    </div>
  );
}
