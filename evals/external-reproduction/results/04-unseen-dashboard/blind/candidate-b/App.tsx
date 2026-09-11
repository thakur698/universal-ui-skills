import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [filterStatus, setFilterStatus] = useState<'ALL' | 'ACTIVE' | 'CRITICAL'>('ALL');
  const [selectedTruck, setSelectedTruck] = useState('HT-104');
  const [acknowledged, setAcknowledged] = useState(false);

  const trucks = [
    { id: 'HT-101', status: 'ACTIVE', zone: 'Sector 4 North', battery: '92%', payload: '240t', speed: '24 km/h' },
    { id: 'HT-104', status: 'CRITICAL', zone: 'Haul Road B', battery: '41%', payload: '255t', speed: '0 km/h', alert: 'PROXIMITY COLLISION WARNING' },
    { id: 'HT-108', status: 'ACTIVE', zone: 'Sector 2 Pit', battery: '78%', payload: '210t', speed: '18 km/h' },
    { id: 'HT-112', status: 'CRITICAL', zone: 'Crusher Ingest', battery: '18%', payload: '260t', speed: '0 km/h', alert: 'HYDRAULIC PRESSURE LOSS' }
  ];

  const filtered = trucks.filter(t => filterStatus === 'ALL' || t.status === filterStatus);

  return (
    <div className="dashboard-app">
      <header className="dash-header">
        <h1>AUTONOMOUS FLEET CONTROL ROOM // NOC</h1>
        <div className="telemetry-clock">LIVE FEED: 50 ACTIVE ASSETS</div>
      </header>

      <div className="dash-grid">
        {/* Fleet List */}
        <div className="fleet-pane">
          <div className="filter-buttons">
            <button className={filterStatus === 'ALL' ? 'active' : ''} onClick={() => setFilterStatus('ALL')}>ALL (50)</button>
            <button className={filterStatus === 'ACTIVE' ? 'active' : ''} onClick={() => setFilterStatus('ACTIVE')}>ACTIVE (46)</button>
            <button className={filterStatus === 'CRITICAL' ? 'active' : ''} onClick={() => setFilterStatus('CRITICAL')}>CRITICAL (2)</button>
          </div>

          <div className="truck-list">
            {filtered.map(t => (
              <div 
                key={t.id} 
                className={`truck-card ${t.id === selectedTruck ? 'selected' : ''} ${t.status === 'CRITICAL' ? 'crit' : ''}`}
                onClick={() => setSelectedTruck(t.id)}
              >
                <div className="truck-head">
                  <strong>{t.id}</strong>
                  <span className={`status-pill ${t.status.toLowerCase()}`}>{t.status}</span>
                </div>
                <div className="truck-stats">
                  <span>Zone: {t.zone}</span>
                  <span>Battery: {t.battery}</span>
                  <span>Payload: {t.payload}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Telemetry Detail */}
        <div className="detail-pane">
          <h2>TELEMETRY INSPECTOR: {selectedTruck}</h2>
          <div className="detail-stats-grid">
            <div className="d-card"><span>SPEED</span><strong>24.2 KM/H</strong></div>
            <div className="d-card"><span>TIRE PRESSURE</span><strong>124 PSI</strong></div>
            <div className="d-card"><span>BRAKE TEMP</span><strong>340 °C</strong></div>
            <div className="d-card"><span>GEOFENCE</span><strong>IN BOUNDS</strong></div>
          </div>

          <div className="alert-section">
            <h3>PRIORITY ALERT QUEUE</h3>
            <div className="alert-box">
              <span>⚠️ PROXIMITY SENSOR TRIGGERED ON HAUL ROAD B</span>
              <button className="btn-ack" onClick={() => setAcknowledged(true)}>
                {acknowledged ? '✓ ACKNOWLEDGED' : 'ACKNOWLEDGE ALERT'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
