import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'ACTIVE' | 'CRITICAL'>('ALL');
  const [selectedAsset, setSelectedAsset] = useState('TRUCK-07');
  const [ackedAlerts, setAckedAlerts] = useState<string[]>([]);

  const fleet = [
    { id: 'TRUCK-07', status: 'CRITICAL', zone: 'PIT-NORTH // SEC-04', speed: '0.0 KM/H', battery: '38%', payload: '280.5 T', temp: '94°C', alert: 'PROXIMITY RADAR FAULT // LOCKOUT' },
    { id: 'TRUCK-12', status: 'ACTIVE', zone: 'HAUL-ROAD-02', speed: '28.4 KM/H', battery: '82%', payload: '245.0 T', temp: '76°C', alert: null },
    { id: 'TRUCK-19', status: 'CRITICAL', zone: 'CRUSHER-FEED // 01', speed: '0.0 KM/H', battery: '14%', payload: '290.2 T', temp: '108°C', alert: 'HYDRAULIC DEFLECTION CRITICAL' },
    { id: 'TRUCK-24', status: 'ACTIVE', zone: 'BENCH-LEVEL-09', speed: '21.0 KM/H', battery: '94%', payload: '0.0 T', temp: '68°C', alert: null }
  ];

  const filteredFleet = fleet.filter(f => activeFilter === 'ALL' || f.status === activeFilter);

  const toggleAck = (id: string) => {
    setAckedAlerts(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  return (
    <div className="taste-noc-app">
      {/* Top Monograph Status */}
      <header className="noc-header">
        <div className="noc-brand">
          <span className="brand-code">MINING_TELEMETRY // NOC-01</span>
          <span className="brand-zone">SECTOR 04 HAULAGE REPO // 50 AUTONOMOUS UNITS</span>
        </div>
        <div className="noc-clock">
          <span className="live-dot"></span>
          <span>SUB-SECOND TELEMETRY // LATENCY 14MS</span>
        </div>
      </header>

      {/* Main Cockpit Layout */}
      <div className="noc-cockpit-grid">
        {/* Left: Asset List & Filters */}
        <section className="noc-asset-deck">
          <div className="deck-filter-bar">
            <button className={`filter-btn ${activeFilter === 'ALL' ? 'active' : ''}`} onClick={() => setActiveFilter('ALL')}>
              01 // ALL (50)
            </button>
            <button className={`filter-btn ${activeFilter === 'ACTIVE' ? 'active' : ''}`} onClick={() => setActiveFilter('ACTIVE')}>
              02 // NOMINAL (46)
            </button>
            <button className={`filter-btn ${activeFilter === 'CRITICAL' ? 'active' : ''}`} onClick={() => setActiveFilter('CRITICAL')}>
              03 // CRITICAL (04)
            </button>
          </div>

          <div className="asset-card-stack">
            {filteredFleet.map(truck => (
              <div 
                key={truck.id} 
                className={`asset-cell ${truck.id === selectedAsset ? 'active' : ''} ${truck.status === 'CRITICAL' ? 'crit-cell' : ''}`}
                onClick={() => setSelectedAsset(truck.id)}
              >
                <div className="asset-cell-head">
                  <strong>{truck.id}</strong>
                  <span className={`status-code ${truck.status.toLowerCase()}`}>{truck.status}</span>
                </div>
                <div className="asset-cell-meta">
                  <span>{truck.zone}</span>
                  <span>BATTERY: {truck.battery}</span>
                  <span>PAYLOAD: {truck.payload}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Right: Selected Asset Telemetry & Alert Stack */}
        <section className="noc-telemetry-dossier">
          <div className="dossier-heading">
            <span className="dossier-ref">[DOC 04] REAL-TIME ASSET TELEMETRY</span>
            <h2>INSPECTOR // {selectedAsset}</h2>
          </div>

          <div className="telemetry-stat-matrix">
            <div className="stat-dossier-card">
              <span className="stat-label">01 // GROUND VELOCITY</span>
              <div className="stat-value">28.4 KM/H</div>
              <span className="stat-sub">RADAR RADIAL SPEED</span>
            </div>
            <div className="stat-dossier-card">
              <span className="stat-label">02 // PAYLOAD MASS</span>
              <div className="stat-value">280.5 T</div>
              <span className="stat-sub">STRAIN GAUGE CALIBRATED</span>
            </div>
            <div className="stat-dossier-card">
              <span className="stat-label">03 // HUB TEMPERATURE</span>
              <div className="stat-value">94.2 °C</div>
              <span className="stat-sub">WITHIN THERMAL ENVELOPE</span>
            </div>
            <div className="stat-dossier-card">
              <span className="stat-label">04 // GEOFENCE STATUS</span>
              <div className="stat-value">LOCKED</div>
              <span className="stat-sub">RTK-GPS ACCURACY 1.2CM</span>
            </div>
          </div>

          {/* Priority Alert Action Stack */}
          <div className="priority-alert-chamber">
            <div className="alert-chamber-head">
              <span className="chamber-label">CRITICAL OPERATIONAL ALERT QUEUE</span>
              <span className="chamber-count">02 PENDING INTERVENTIONS</span>
            </div>

            <div className="alert-action-card">
              <div className="alert-desc">
                <span className="alert-sev">SEV-01 CRITICAL</span>
                <p>PROXIMITY COLLISION WARNING: VEHICLE 07 HALTED 4.2M FROM EXCAVATOR 02 ON HAUL ROAD B.</p>
              </div>
              <button 
                className={`ack-btn ${ackedAlerts.includes(selectedAsset) ? 'acked' : ''}`}
                onClick={() => toggleAck(selectedAsset)}
              >
                {ackedAlerts.includes(selectedAsset) ? '[ACKNOWLEDGED_BY_NOC]' : '[ACKNOWLEDGE_ALERT]'}
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
