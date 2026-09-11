import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [filterState, setFilterState] = useState<'ALL' | 'ACTIVE' | 'CHARGING' | 'CRITICAL'>('ALL');
  const [activeAssetId, setActiveAssetId] = useState('HAUL-07');
  const [ackedMap, setAckedMap] = useState<{ [key: string]: boolean }>({});

  const haulFleet = [
    { id: 'HAUL-07', status: 'CRITICAL', sector: 'PIT-NORTH // SEC-04', speed: '0.0 KM/H', soc: '34%', payload: '284.2 T', brakeTemp: '112°C', geofence: 'WARNING BOUNDARY', alert: 'PROXIMITY COLLISION // 3.8M FROM LOADER-02' },
    { id: 'HAUL-12', status: 'ACTIVE', sector: 'HAUL-ROAD-BRAVO', speed: '28.2 KM/H', soc: '86%', payload: '240.0 T', brakeTemp: '74°C', geofence: 'IN BOUNDS', alert: null },
    { id: 'HAUL-18', status: 'CHARGING', sector: 'DEPOT-SOUTH // BAY-03', speed: '0.0 KM/H', soc: '98%', payload: '0.0 T', brakeTemp: '42°C', geofence: 'STATIONARY', alert: null },
    { id: 'HAUL-23', status: 'CRITICAL', sector: 'CRUSHER-FEED-ALPHA', speed: '0.0 KM/H', soc: '12%', payload: '292.8 T', brakeTemp: '128°C', geofence: 'LOCKED', alert: 'HYDRAULIC PRESSURE LOSS // AUTO-HALT' },
    { id: 'HAUL-31', status: 'ACTIVE', sector: 'PIT-SOUTH // SEC-09', speed: '22.4 KM/H', soc: '74%', payload: '255.4 T', brakeTemp: '68°C', geofence: 'IN BOUNDS', alert: null }
  ];

  const filteredAssets = haulFleet.filter(a => filterState === 'ALL' || a.status === filterState);
  const activeTruck = haulFleet.find(a => a.id === activeAssetId) || haulFleet[0];

  const toggleAcknowledge = (id: string) => {
    setAckedMap(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="v2-noc-cockpit">
      {/* Top Cockpit Telemetry Bar */}
      <header className="v2-noc-topbar">
        <div className="v2-noc-brand">
          <span className="v2-cockpit-title">AUTONOMOUS MINING NOC // SECTOR 04</span>
          <span className="v2-cockpit-sub">FLEET COMMAND ENGINE // 50 ACTIVE ASSETS // KERNEL 6.8</span>
        </div>

        <div className="v2-noc-telemetry-strip">
          <div className="v2-tel-item">
            <span className="v2-dot green"></span>
            <span>RADIO TELEMETRY: 99.98% OK (12MS)</span>
          </div>
          <div className="v2-tel-item">
            <span className="v2-dot red"></span>
            <span>ACTIVE ALERTS: 02 IMMEDIATE</span>
          </div>
        </div>
      </header>

      {/* Main Cockpit Split Surface */}
      <main className="v2-cockpit-layout">
        {/* Left: Asset List & Filter Tabs */}
        <section className="v2-fleet-deck">
          <div className="v2-deck-filters">
            <button className={`v2-filter-btn ${filterState === 'ALL' ? 'active' : ''}`} onClick={() => setFilterState('ALL')}>
              ALL (50)
            </button>
            <button className={`v2-filter-btn ${filterState === 'ACTIVE' ? 'active' : ''}`} onClick={() => setFilterState('ACTIVE')}>
              ACTIVE (44)
            </button>
            <button className={`v2-filter-btn ${filterState === 'CHARGING' ? 'active' : ''}`} onClick={() => setFilterState('CHARGING')}>
              CHARGING (04)
            </button>
            <button className={`v2-filter-btn ${filterState === 'CRITICAL' ? 'active' : ''}`} onClick={() => setFilterState('CRITICAL')}>
              CRITICAL (02)
            </button>
          </div>

          <div className="v2-asset-grid-stack">
            {filteredAssets.map(truck => (
              <div 
                key={truck.id}
                className={`v2-asset-row ${truck.id === activeAssetId ? 'selected' : ''} ${truck.status === 'CRITICAL' ? 'alert-row' : ''}`}
                onClick={() => setActiveAssetId(truck.id)}
              >
                <div className="row-head">
                  <span className="row-id">{truck.id}</span>
                  <span className={`row-status-tag ${truck.status.toLowerCase()}`}>{truck.status}</span>
                </div>
                <div className="row-metrics">
                  <span>{truck.sector}</span>
                  <span>SOC: {truck.soc}</span>
                  <span>LOAD: {truck.payload}</span>
                </div>
                {truck.alert && (
                  <div className="row-alert-snip">⚠️ {truck.alert}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Right: Dense Real-Time Telemetry & Alert Action Deck */}
        <section className="v2-inspector-deck">
          <div className="v2-inspector-header">
            <div className="v2-ins-title">
              <span className="v2-eyebrow">[ASSET DOSSIER]</span>
              <h2>TELEMETRY TELE-OPERATIONS // {activeTruck.id}</h2>
            </div>
            <div className="v2-asset-badge">
              <span>SECTOR: {activeTruck.sector}</span>
            </div>
          </div>

          {/* 4-Cell Telemetry Bento */}
          <div className="v2-telemetry-bento-grid">
            <div className="v2-bento-tile">
              <span className="bento-label">GROUND VELOCITY</span>
              <div className="bento-val">{activeTruck.speed}</div>
              <span className="bento-sub">RADAR DOPPLER MEASURED</span>
            </div>

            <div className="v2-bento-tile">
              <span className="bento-label">PAYLOAD MASS</span>
              <div className="bento-val">{activeTruck.payload}</div>
              <span className="bento-sub">4-POINT AXLE SENSORS</span>
            </div>

            <div className="v2-bento-tile">
              <span className="bento-label">BRAKE ROTOR TEMP</span>
              <div className={`bento-val ${parseInt(activeTruck.brakeTemp) > 100 ? 'temp-alert' : ''}`}>
                {activeTruck.brakeTemp}
              </div>
              <span className="bento-sub">THERMAL LIMIT: 140°C</span>
            </div>

            <div className="v2-bento-tile">
              <span className="bento-label">GEOFENCE & RTK GPS</span>
              <div className="bento-val">{activeTruck.geofence}</div>
              <span className="bento-sub">1.4CM CENTIMETRIC LOCK</span>
            </div>
          </div>

          {/* Priority Alert Stack */}
          {activeTruck.alert && (
            <div className="v2-critical-alert-card">
              <div className="v2-alert-top">
                <span className="v2-sev-badge">SEVERITY 01 // CRITICAL STOP</span>
                <span className="v2-alert-time">TIMESTAMP: 02:37:14 UTC</span>
              </div>
              <p className="v2-alert-body">{activeTruck.alert}</p>
              <div className="v2-alert-actions">
                <button 
                  className={`v2-ack-btn ${ackedMap[activeTruck.id] ? 'acked' : ''}`}
                  onClick={() => toggleAcknowledge(activeTruck.id)}
                >
                  {ackedMap[activeTruck.id] ? '✓ ACKNOWLEDGED BY NOC OPERATOR' : 'ACKNOWLEDGE & OVERRIDE LOCKOUT'}
                </button>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
