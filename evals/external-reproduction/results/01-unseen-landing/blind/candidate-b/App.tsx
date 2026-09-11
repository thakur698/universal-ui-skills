import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [activeTier, setActiveTier] = useState<'hot' | 'warm' | 'cold'>('hot');
  const [loadPreset, setLoadPreset] = useState<'250k' | '1m' | '5m'>('1m');
  const [copied, setCopied] = useState(false);
  const [hoverNode, setHoverNode] = useState<string | null>(null);

  const benchmarks = {
    '250k': { p50: '0.38ms', p99: '0.94ms', throughput: '265k ops/s', ram: '2.1 GB', cpu: '14%' },
    '1m': { p50: '0.74ms', p99: '1.82ms', throughput: '1,048k ops/s', ram: '7.8 GB', cpu: '48%' },
    '5m': { p50: '1.42ms', p99: '3.90ms', throughput: '5,180k ops/s', ram: '21.4 GB', cpu: '88%' }
  };

  const cliCommand = "curl -fsSL https://get.nexus-tsdb.dev | bash && nexus-server --config=/etc/nexus/cluster.hcl";

  const handleCopy = () => {
    navigator.clipboard.writeText(cliCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="v2-infra-app">
      {/* Editorial Navigation */}
      <nav className="v2-nav">
        <div className="v2-nav-inner">
          <div className="v2-brand">
            <span className="v2-brand-name">NEXUS // TSDB</span>
            <span className="v2-brand-sub">DISTRIBUTED TIME-SERIES RUNTIME</span>
          </div>
          <div className="v2-nav-telemetry">
            <span className="v2-status-dot"></span>
            <span>GA RELEASE v3.1.0 // LINUX KERNEL eBPF ZERO-COPY</span>
          </div>
          <div className="v2-nav-actions">
            <a href="#topology" className="v2-nav-link">TOPOLOGY</a>
            <a href="#benchmarks" className="v2-nav-link">BENCHMARKS</a>
            <a href="#tiering" className="v2-nav-link">TIERING</a>
            <button onClick={handleCopy} className="v2-nav-btn">
              {copied ? 'COPIED' : 'INSTALL CLI'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero: Asymmetric Technical Statement with Inline CLI */}
      <header className="v2-hero">
        <div className="v2-hero-content">
          <div className="v2-hero-badge">
            <span className="v2-badge-tag">STORAGE ENGINE SPECIFICATION</span>
            <span className="v2-badge-ref">RFC-2026-09</span>
          </div>
          <h1 className="v2-hero-title">
            DETERMINISTIC 1M+ OPS/SEC<br />TIME-SERIES INGESTION.
          </h1>
          <p className="v2-hero-lead">
            Lock-free memory-mapped ring buffers, AVX-512 SIMD query execution, and automated tiered Parquet compaction built for high-throughput SRE telemetry.
          </p>

          <div className="v2-cli-card">
            <div className="v2-cli-header">
              <span className="cli-dot red"></span>
              <span className="cli-dot yellow"></span>
              <span className="cli-dot green"></span>
              <span className="cli-label">TERMINAL INSTALLATION // C6I.16XLARGE READY</span>
            </div>
            <div className="v2-cli-body">
              <code className="v2-code-snippet">$ {cliCommand}</code>
              <button onClick={handleCopy} className="v2-copy-btn">
                {copied ? '✓ COPIED' : 'COPY COMMAND'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Interactive Query & Ingestion Benchmark Visualizer */}
      <section id="benchmarks" className="v2-section">
        <div className="v2-section-header">
          <span className="v2-eyebrow">[MODULE 01] LIVE TELEMETRY SIMULATOR</span>
          <h2>VECTORIZED INGEST & QUERY BENCHMARK</h2>
          <p>Measured on AWS c6i.16xlarge (64 vCPU, 128GB RAM, NVMe RAID-0) under sustained write saturation.</p>
        </div>

        <div className="v2-bench-container">
          <div className="v2-bench-tabs">
            <button 
              className={`v2-bench-tab ${loadPreset === '250k' ? 'active' : ''}`}
              onClick={() => setLoadPreset('250k')}
            >
              250,000 OPS/SEC <span className="tab-meta">LOW PRESSURE</span>
            </button>
            <button 
              className={`v2-bench-tab ${loadPreset === '1m' ? 'active' : ''}`}
              onClick={() => setLoadPreset('1m')}
            >
              1,000,000 OPS/SEC <span className="tab-meta">NOMINAL CLUSTER</span>
            </button>
            <button 
              className={`v2-bench-tab ${loadPreset === '5m' ? 'active' : ''}`}
              onClick={() => setLoadPreset('5m')}
            >
              5,000,000 OPS/SEC <span className="tab-meta">EXTREME BURST</span>
            </button>
          </div>

          <div className="v2-bench-grid">
            <div className="v2-metric-card">
              <span className="metric-eyebrow">P50 WRITE LATENCY</span>
              <div className="metric-val">{benchmarks[loadPreset].p50}</div>
              <span className="metric-footnote">eBPF Zero-Copy Kernel Hook</span>
            </div>
            <div className="v2-metric-card">
              <span className="metric-eyebrow">P99 TAIL LATENCY</span>
              <div className="metric-val highlight">{benchmarks[loadPreset].p99}</div>
              <span className="metric-footnote">Zero GC Jitter / Arena Allocator</span>
            </div>
            <div className="v2-metric-card">
              <span className="metric-eyebrow">SUSTAINED THROUGHPUT</span>
              <div className="metric-val">{benchmarks[loadPreset].throughput}</div>
              <span className="metric-footnote">AVX-512 Vectorized Parsing</span>
            </div>
            <div className="v2-metric-card">
              <span className="metric-eyebrow">CLUSTER CPU UTILIZATION</span>
              <div className="metric-val">{benchmarks[loadPreset].cpu}</div>
              <span className="metric-footnote">RAM: {benchmarks[loadPreset].ram}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Real-Time Interactive Distributed Architecture Topology */}
      <section id="topology" className="v2-section">
        <div className="v2-section-header">
          <span className="v2-eyebrow">[MODULE 02] ARCHITECTURAL SPECIFICATION</span>
          <h2>DECOUPLED STORAGE TOPOLOGY</h2>
          <p>Hover over architecture nodes to inspect data path, isolation guarantees, and consensus invariants.</p>
        </div>

        <div className="v2-topology-board">
          {/* Layer 1: Ingestion Protocols */}
          <div className="v2-topo-layer">
            <div className="v2-layer-label">01 // INGESTION PROTOCOLS & GATEWAYS</div>
            <div className="v2-nodes-row">
              <div 
                className={`v2-node ${hoverNode === 'otlp' ? 'hovered' : ''}`}
                onMouseEnter={() => setHoverNode('otlp')}
                onMouseLeave={() => setHoverNode(null)}
              >
                <span className="node-tag">PROTOCOL 01</span>
                <strong>OpenTelemetry (OTLP gRPC)</strong>
                <span className="node-sub">Streaming Protobuf Ingestion</span>
              </div>
              <div 
                className={`v2-node ${hoverNode === 'prom' ? 'hovered' : ''}`}
                onMouseEnter={() => setHoverNode('prom')}
                onMouseLeave={() => setHoverNode(null)}
              >
                <span className="node-tag">PROTOCOL 02</span>
                <strong>Prometheus Remote-Write</strong>
                <span className="node-sub">Snappy Compressed Blocks</span>
              </div>
              <div 
                className={`v2-node ${hoverNode === 'sql' ? 'hovered' : ''}`}
                onMouseEnter={() => setHoverNode('sql')}
                onMouseLeave={() => setHoverNode(null)}
              >
                <span className="node-tag">PROTOCOL 03</span>
                <strong>PostgreSQL Wire v3</strong>
                <span className="node-sub">Vectorized SQL/PromQL Parser</span>
              </div>
            </div>
          </div>

          <div className="v2-topo-bus">
            <span>↓ eBPF KERNEL LOCK-FREE RING BUFFER (RING_SZ: 64MB PER CORE) ↓</span>
          </div>

          {/* Layer 2: Compute & Memory Engine */}
          <div className="v2-topo-layer v2-engine-layer">
            <div className="v2-layer-label">02 // NEXUS VECTOR COMPUTATION ENGINE</div>
            <div className="v2-nodes-row">
              <div 
                className={`v2-node active ${hoverNode === 'wal' ? 'hovered' : ''}`}
                onMouseEnter={() => setHoverNode('wal')}
                onMouseLeave={() => setHoverNode(null)}
              >
                <span className="node-tag">CONCURRENCY</span>
                <strong>Lock-Free In-Memory WAL</strong>
                <span className="node-sub">Direct NVMe DMA Write Pipeline</span>
              </div>
              <div 
                className={`v2-node active ${hoverNode === 'simd' ? 'hovered' : ''}`}
                onMouseEnter={() => setHoverNode('simd')}
                onMouseLeave={() => setHoverNode(null)}
              >
                <span className="node-tag">COMPUTE</span>
                <strong>AVX-512 SIMD Vector Engine</strong>
                <span className="node-sub">Columnar Aggregation & Windowing</span>
              </div>
              <div 
                className={`v2-node active ${hoverNode === 'raft' ? 'hovered' : ''}`}
                onMouseEnter={() => setHoverNode('raft')}
                onMouseLeave={() => setHoverNode(null)}
              >
                <span className="node-tag">CONSENSUS</span>
                <strong>Multi-Raft Partition Router</strong>
                <span className="node-sub">Sub-millisecond Leader Election</span>
              </div>
            </div>
          </div>

          <div className="v2-topo-bus">
            <span>↓ ZERO-COPY CONTINUOUS PARQUET COMPACTION & ENCRYPTION ↓</span>
          </div>

          {/* Layer 3: Tiered Storage Subsystem */}
          <div className="v2-topo-layer">
            <div className="v2-layer-label">03 // PERSISTENT STORAGE TIERING</div>
            <div className="v2-nodes-row">
              <div 
                className={`v2-node storage ${hoverNode === 'hot' ? 'hovered' : ''}`}
                onMouseEnter={() => setHoverNode('hot')}
                onMouseLeave={() => setHoverNode(null)}
              >
                <span className="node-tag">HOT // 7 DAYS</span>
                <strong>NVMe Local RAID-0</strong>
                <span className="node-sub">&lt; 0.5ms Read / Gorilla Encoding</span>
              </div>
              <div 
                className={`v2-node storage ${hoverNode === 'warm' ? 'hovered' : ''}`}
                onMouseEnter={() => setHoverNode('warm')}
                onMouseLeave={() => setHoverNode(null)}
              >
                <span className="node-tag">WARM // 90 DAYS</span>
                <strong>Attached ZFS SSD Pools</strong>
                <span className="node-sub">2ms – 5ms Read / ZSTD Compression</span>
              </div>
              <div 
                className={`v2-node storage ${hoverNode === 'cold' ? 'hovered' : ''}`}
                onMouseEnter={() => setHoverNode('cold')}
                onMouseLeave={() => setHoverNode(null)}
              >
                <span className="node-tag">COLD // ∞ ARCHIVE</span>
                <strong>S3 / GCS / Azure Blob</strong>
                <span className="node-sub">Snappy Parquet / $0.004 per GB</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Retention Tier Matrix with Tabbed Selector */}
      <section id="tiering" className="v2-section">
        <div className="v2-section-header">
          <span className="v2-eyebrow">[MODULE 03] DATA LIFECYCLE MANAGEMENT</span>
          <h2>RETENTION TIERS & ECONOMIC SPECIFICATION</h2>
          <p>Automated migration policies maintain predictable storage costs across petabyte archives.</p>
        </div>

        <div className="v2-tier-table-wrapper">
          <table className="v2-tier-table">
            <thead>
              <tr>
                <th>TIER DESIGNATION</th>
                <th>PHYSICAL MEDIUM</th>
                <th>P90 QUERY LATENCY</th>
                <th>COMPRESSION RATIO</th>
                <th>STORAGE COST / TB</th>
                <th>RECOVERY OBJECTIVE</th>
              </tr>
            </thead>
            <tbody>
              <tr className={activeTier === 'hot' ? 'row-active' : ''} onClick={() => setActiveTier('hot')}>
                <td><span className="tier-badge hot">HOT STORAGE</span></td>
                <td>NVMe PCIe 4.0 Direct RAID</td>
                <td><strong>&lt; 0.45 ms</strong></td>
                <td>6.2 : 1 (Gorilla Float)</td>
                <td>$85.00 / mo</td>
                <td>Instantaneous / Active Alerts</td>
              </tr>
              <tr className={activeTier === 'warm' ? 'row-active' : ''} onClick={() => setActiveTier('warm')}>
                <td><span className="tier-badge warm">WARM STORAGE</span></td>
                <td>Attached Block Storage (GP3)</td>
                <td><strong>2.10 ms</strong></td>
                <td>14.1 : 1 (ZSTD Lvl 6)</td>
                <td>$28.00 / mo</td>
                <td>Sub-second Dashboards</td>
              </tr>
              <tr className={activeTier === 'cold' ? 'row-active' : ''} onClick={() => setActiveTier('cold')}>
                <td><span className="tier-badge cold">COLD OBJECT</span></td>
                <td>Cloud Object Storage (S3/GCS)</td>
                <td><strong>35.00 ms</strong></td>
                <td>24.8 : 1 (Parquet SIMD)</td>
                <td>$4.20 / mo</td>
                <td>Long-term Audit & ML Training</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Footer */}
      <footer className="v2-footer">
        <div className="v2-footer-content">
          <div className="v2-footer-col">
            <span className="footer-title">NEXUS OPEN SOURCE CORE</span>
            <p>APACHE 2.0 LICENSED // AUDITED BY NCC GROUP</p>
          </div>
          <div className="v2-footer-col v2-footer-right">
            <span>REPOSITORY COMMIT: SHA-256: 2A7EB0291B0E10A6</span>
            <span>COMPLIANCE: PROMETHEUS 2.0 & OTLP 1.3 SPEC</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
