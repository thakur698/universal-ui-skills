import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [load, setLoad] = useState<'100k' | '500k' | '1m'>('100k');
  const [copied, setCopied] = useState(false);

  const latencies = {
    '100k': { write: '1.2ms', read: '0.8ms', throughput: '120k ops/sec', p99: '2.4ms' },
    '500k': { write: '3.4ms', read: '1.9ms', throughput: '540k ops/sec', p99: '5.1ms' },
    '1m': { write: '7.8ms', read: '4.2ms', throughput: '1.05M ops/sec', p99: '11.8ms' }
  };

  const cliSnippet = "curl -fsSL https://get.chronosdb.io | sh && chronos-server --cluster-join=node-01.us-east";

  const handleCopy = () => {
    navigator.clipboard.writeText(cliSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="landing-app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="brand">
          <span className="brand-logo">⚡</span>
          <span className="brand-name">CHRONOS_DB</span>
          <span className="brand-ver">v2.4.0-GA</span>
        </div>
        <div className="nav-links">
          <a href="#benchmarks">Benchmarks</a>
          <a href="#topology">Topology</a>
          <a href="#quickstart">Quickstart</a>
          <a href="#tiers">Storage Tiers</a>
          <a href="https://github.com" className="btn-gh">GitHub ★ 14.2k</a>
        </div>
      </nav>

      {/* Hero */}
      <header className="hero">
        <div className="hero-container">
          <div className="badge">OPEN SOURCE TIME-SERIES ENGINE</div>
          <h1>Sub-Millisecond Ingestion at Petabyte Scale</h1>
          <p className="hero-desc">
            Distributed columnar time-series storage with zero-copy vectorized execution, lock-free LSM trees, and native SQL & PromQL compatibility.
          </p>
          <div className="hero-actions">
            <div className="cli-box">
              <code>{cliSnippet}</code>
              <button onClick={handleCopy} className="btn-copy">
                {copied ? '✓ COPIED' : 'COPY'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Benchmark Visualizer */}
      <section id="benchmarks" className="section">
        <div className="section-head">
          <h2>Interactive Query & Ingest Benchmark</h2>
          <p>Real-world measured latency on bare-metal c6i.8xlarge clusters across varying write pressure.</p>
        </div>
        
        <div className="bench-controls">
          <button 
            className={`tab-btn ${load === '100k' ? 'active' : ''}`}
            onClick={() => setLoad('100k')}
          >
            100,000 Writes/sec
          </button>
          <button 
            className={`tab-btn ${load === '500k' ? 'active' : ''}`}
            onClick={() => setLoad('500k')}
          >
            500,000 Writes/sec
          </button>
          <button 
            className={`tab-btn ${load === '1m' ? 'active' : ''}`}
            onClick={() => setLoad('1m')}
          >
            1,000,000 Writes/sec
          </button>
        </div>

        <div className="bench-card-grid">
          <div className="bench-card">
            <span className="card-label">Write Latency (p50)</span>
            <div className="card-metric">{latencies[load].write}</div>
            <span className="card-sub">Vectorized WAL Append</span>
          </div>
          <div className="bench-card">
            <span className="card-label">Read Latency (p50)</span>
            <div className="card-metric">{latencies[load].read}</div>
            <span className="card-sub">Index Cache Hit</span>
          </div>
          <div className="bench-card">
            <span className="card-label">Throughput</span>
            <div className="card-metric">{latencies[load].throughput}</div>
            <span className="card-sub">Sustained IOPS</span>
          </div>
          <div className="bench-card">
            <span className="card-label">p99 Tail Latency</span>
            <div className="card-metric alert">{latencies[load].p99}</div>
            <span className="card-sub">Zero GC pauses</span>
          </div>
        </div>
      </section>

      {/* Architecture Topology Diagram */}
      <section id="topology" className="section topology-section">
        <div className="section-head">
          <h2>Distributed Storage Topology</h2>
          <p>Decoupled compute and storage with independent auto-scaling ingestion workers.</p>
        </div>

        <div className="topo-diagram">
          <div className="topo-layer">
            <div className="layer-title">CLIENT INGESTION TIER</div>
            <div className="nodes-row">
              <div className="topo-node">Prometheus Remote Write</div>
              <div className="topo-node">OTLP gRPC Stream</div>
              <div className="topo-node">Postgres Wire Protocol</div>
            </div>
          </div>

          <div className="topo-arrow">↓ Lock-Free Ring Buffer</div>

          <div className="topo-layer highlight">
            <div className="layer-title">CHRONOS DISTRIBUTED COMPUTE CLUSTER</div>
            <div className="nodes-row">
              <div className="topo-node active">Query Router & Planner</div>
              <div className="topo-node active">Vectorized SIMD Engine</div>
              <div className="topo-node active">WAL Partition Manager</div>
            </div>
          </div>

          <div className="topo-arrow">↓ Zero-Copy Compaction / Parquet Export</div>

          <div className="topo-layer">
            <div className="layer-title">PERSISTENT STORAGE TIERS</div>
            <div className="nodes-row">
              <div className="topo-node storage">NVMe SSD (Hot - 7 Days)</div>
              <div className="topo-node storage">EBS GP3 (Warm - 30 Days)</div>
              <div className="topo-node storage">S3 / Object Store (Cold - Inf)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Retention Tier Comparisons */}
      <section id="tiers" className="section">
        <div className="section-head">
          <h2>Retention & Lifecycle Tiering</h2>
          <p>Automated policy-driven data migration without downtime or re-indexing.</p>
        </div>

        <div className="table-wrapper">
          <table className="tier-table">
            <thead>
              <tr>
                <th>Tier</th>
                <th>Storage Medium</th>
                <th>Query Latency</th>
                <th>Compression Ratio</th>
                <th>Cost / GB / Mo</th>
                <th>Target Use-Case</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>HOT TIER</strong></td>
                <td>Local NVMe RAID-0</td>
                <td>&lt; 1ms (Sub-millisecond)</td>
                <td>6:1 (Gorilla Float Compression)</td>
                <td>$0.12</td>
                <td>Real-time anomaly detection & alerting</td>
              </tr>
              <tr>
                <td><strong>WARM TIER</strong></td>
                <td>ZFS Compressed Disk</td>
                <td>2ms – 8ms</td>
                <td>14:1 (Columnar ZSTD)</td>
                <td>$0.04</td>
                <td>Operational dashboards & incident post-mortems</td>
              </tr>
              <tr>
                <td><strong>COLD TIER</strong></td>
                <td>S3 / GCS Object Store</td>
                <td>25ms – 80ms</td>
                <td>22:1 (Snappy Parquet Blocks)</td>
                <td>$0.007</td>
                <td>Long-term audit, compliance & ML model training</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <span>CHRONOS_DB // APACHE 2.0 LICENSED OPEN SOURCE PROJECT</span>
          <div className="footer-links">
            <a href="#">Documentation</a>
            <a href="#">Architecture Whitepaper</a>
            <a href="#">Prometheus Exporter</a>
            <a href="#">Discord Community</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
