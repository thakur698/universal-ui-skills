import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [load, setLoad] = useState<'500k' | '2m' | '5m'>('500k');
  const [copied, setCopied] = useState(false);

  const telemetry = {
    '500k': { p50: '0.42ms', p99: '1.18ms', throughput: '512,000 ops/s', ram: '4.2 GB', wal: 'Zero-Copy' },
    '2m': { p50: '0.88ms', p99: '2.45ms', throughput: '2,048,000 ops/s', ram: '11.6 GB', wal: 'Direct-IO' },
    '5m': { p50: '1.64ms', p99: '4.82ms', throughput: '5,120,000 ops/s', ram: '24.8 GB', wal: 'Direct-IO NVMe' }
  };

  const cli = 'curl -sSf https://install.vector-db.tech | sh && vdb-cluster --init --wal-dir=/mnt/nvme';

  const copyCLI = () => {
    navigator.clipboard.writeText(cli);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="taste-app">
      {/* Monograph Top Bar */}
      <header className="taste-header">
        <div className="taste-brand">
          <span className="brand-code">VECTOR_TSDB // 01</span>
          <span className="brand-desc">DISTRIBUTED TIME-SERIES ENGINE</span>
        </div>
        <div className="taste-status">
          <span className="indicator-dot"></span>
          <span>CLUSTER RUNTIME STABLE // KERNEL 6.8</span>
        </div>
      </header>

      {/* Hero */}
      <section className="taste-hero">
        <div className="taste-meta-bar">
          <span>[DOC 01] SPECIFICATION</span>
          <span>TARGET: SRE & DATABASE INFRASTRUCTURE</span>
        </div>
        <h1 className="taste-headline">
          DETERMINISTIC ZERO-COPY TIME-SERIES STORAGE.
        </h1>
        <p className="taste-lead">
          Vectorized SIMD ingestion, lock-free ring buffers, and tiered columnar Parquet compaction for mission-critical observability.
        </p>
        <div className="taste-cli-wrapper">
          <div className="taste-cli-prompt">$ {cli}</div>
          <button onClick={copyCLI} className="taste-cli-btn">
            {copied ? '[COPIED_TO_CLIPBOARD]' : '[COPY_COMMAND]'}
          </button>
        </div>
      </section>

      {/* Benchmark Matrix */}
      <section className="taste-section">
        <div className="section-dossier-header">
          <span className="dossier-tag">[DOC 02] TELEMETRY BENCHMARK</span>
          <h2>VECTORIZED THROUGHPUT ON AWS C7I.16XLARGE</h2>
        </div>

        <div className="taste-filter-bar">
          <button 
            className={`filter-btn ${load === '500k' ? 'active' : ''}`}
            onClick={() => setLoad('500k')}
          >
            01 // 500,000 WRITES/SEC
          </button>
          <button 
            className={`filter-btn ${load === '2m' ? 'active' : ''}`}
            onClick={() => setLoad('2m')}
          >
            02 // 2,000,000 WRITES/SEC
          </button>
          <button 
            className={`filter-btn ${load === '5m' ? 'active' : ''}`}
            onClick={() => setLoad('5m')}
          >
            03 // 5,000,000 WRITES/SEC
          </button>
        </div>

        <div className="taste-grid-4">
          <div className="taste-grid-card">
            <span className="grid-label">P50 INGESTION LATENCY</span>
            <div className="grid-val">{telemetry[load].p50}</div>
            <span className="grid-meta">DIRECT NVMe RING BUFFER</span>
          </div>
          <div className="taste-grid-card">
            <span className="grid-label">P99 TAIL LATENCY</span>
            <div className="grid-val">{telemetry[load].p99}</div>
            <span className="grid-meta">ZERO GC PAUSE (C++20 CORE)</span>
          </div>
          <div className="taste-grid-card">
            <span className="grid-label">SUSTAINED THROUGHPUT</span>
            <div className="grid-val">{telemetry[load].throughput}</div>
            <span className="grid-meta">AVX-512 VECTORIZED PARSER</span>
          </div>
          <div className="taste-grid-card">
            <span className="grid-label">MEMORY FOOTPRINT</span>
            <div className="grid-val">{telemetry[load].ram}</div>
            <span className="grid-meta">ARENA ALLOCATION MODEL</span>
          </div>
        </div>
      </section>

      {/* Topology Monograph */}
      <section className="taste-section">
        <div className="section-dossier-header">
          <span className="dossier-tag">[DOC 03] TOPOLOGY SPECIFICATION</span>
          <h2>DECOUPLED CONSENSUS & LOGICAL ARCHITECTURE</h2>
        </div>

        <div className="taste-topology-card">
          <div className="topo-stage">
            <div className="stage-head">
              <span className="stage-code">PHASE 01</span>
              <h4>INGESTION & WIRE PROTOCOLS</h4>
            </div>
            <div className="stage-body">
              <span>OTLP / gRPC Stream</span>
              <span>Prometheus Remote Write</span>
              <span>Influx Wire Compatible</span>
            </div>
          </div>

          <div className="topo-divider">↓ KERNEL LOCK-FREE RING BUFFER ↓</div>

          <div className="topo-stage highlight-stage">
            <div className="stage-head">
              <span className="stage-code">PHASE 02</span>
              <h4>RAFT CONSENSUS & VECTOR ENGINE</h4>
            </div>
            <div className="stage-body">
              <span>Vectorized Query Planner</span>
              <span>Direct-IO LSM Partition Engine</span>
              <span>Gorilla Float Bit-Packing</span>
            </div>
          </div>

          <div className="topo-divider">↓ PARQUET BLOCK COMPACTION ↓</div>

          <div className="topo-stage">
            <div className="stage-head">
              <span className="stage-code">PHASE 03</span>
              <h4>TIERED STORAGE SUBSYSTEM</h4>
            </div>
            <div className="stage-body">
              <span>Hot: NVMe Direct-IO</span>
              <span>Warm: ZFS Compressed Pools</span>
              <span>Cold: Immutable Object Storage</span>
            </div>
          </div>
        </div>
      </section>

      {/* Strict Data Tier Matrix */}
      <section className="taste-section">
        <div className="section-dossier-header">
          <span className="dossier-tag">[DOC 04] RETENTION POLICIES</span>
          <h2>STORAGE TIERING & COST EFFICIENCY</h2>
        </div>

        <div className="taste-table-container">
          <table className="taste-table">
            <thead>
              <tr>
                <th>TIER IDENTIFIER</th>
                <th>MEDIUM</th>
                <th>QUERY P90</th>
                <th>COMPRESSION</th>
                <th>COST / TB / MO</th>
                <th>SLA COMMITMENT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>HOT // LOCAL</strong></td>
                <td>NVMe RAID-0 Arrays</td>
                <td>&lt; 0.50ms</td>
                <td>6.2 : 1 (Gorilla)</td>
                <td>$95.00</td>
                <td>99.999% Sub-second</td>
              </tr>
              <tr>
                <td><strong>WARM // ATTACHED</strong></td>
                <td>EBS GP3 / Local SSD</td>
                <td>2.40ms</td>
                <td>12.8 : 1 (ZSTD)</td>
                <td>$32.00</td>
                <td>99.99% High Availability</td>
              </tr>
              <tr>
                <td><strong>COLD // OBJECT</strong></td>
                <td>Amazon S3 / GCS</td>
                <td>45.00ms</td>
                <td>24.5 : 1 (Snappy Block)</td>
                <td>$5.80</td>
                <td>11 Nines Durability</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Monograph Footer */}
      <footer className="taste-footer">
        <div className="footer-meta">
          <span>VECTOR_TSDB CORE SPEC // APACHE 2.0 LICENSED</span>
          <span>SHA-256: 2A7EB0291B0E10A671A053C0</span>
        </div>
      </footer>
    </div>
  );
}
