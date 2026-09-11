import { useState } from 'react';
import './App.css';

export default function App() {
  const [activeTab, setActiveTab] = useState<'curl' | 'node' | 'python'>('curl');

  return (
    <div className="taste-app">
      {/* Navigation: Height <= 80px, single line desktop */}
      <nav className="taste-nav">
        <div className="taste-nav-container">
          <div className="taste-brand">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="brand-icon">
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
            <span className="brand-name">DevAPI</span>
          </div>

          <div className="taste-nav-links">
            <a href="#endpoints">Endpoints</a>
            <a href="#benchmarks">Benchmarks</a>
            <a href="#documentation">Documentation</a>
            <a href="#pricing">Pricing</a>
          </div>

          <div className="taste-nav-actions">
            <a href="#login" className="taste-nav-signin">Sign In</a>
            <button className="taste-btn-primary">Get API Key</button>
          </div>
        </div>
      </nav>

      <main className="taste-main">
        {/* Hero Section: Anti-center split layout, fits initial viewport */}
        <section className="taste-hero">
          <div className="taste-hero-left">
            <div className="taste-eyebrow">API ENGINE V4.2</div>
            <h1 className="taste-headline">
              Programmable endpoints for modern engineering teams.
            </h1>
            <p className="taste-subtext">
              Deploy sub-10ms global edge clusters with real-time replication, automated failover, and complete schema governance.
            </p>
            <div className="taste-cta-group">
              <button className="taste-btn-primary">Start free trial</button>
              <button className="taste-btn-secondary">View documentation</button>
            </div>
            <div className="taste-hero-meta">
              <span className="meta-indicator"></span>
              <span className="meta-text">All systems operational · 99.999% uptime SLA</span>
            </div>
          </div>

          <div className="taste-hero-right">
            <div className="taste-code-card">
              <div className="code-card-header">
                <div className="code-tabs">
                  <button 
                    className={`code-tab ${activeTab === 'curl' ? 'active' : ''}`}
                    onClick={() => setActiveTab('curl')}
                  >
                    cURL
                  </button>
                  <button 
                    className={`code-tab ${activeTab === 'node' ? 'active' : ''}`}
                    onClick={() => setActiveTab('node')}
                  >
                    Node.js
                  </button>
                  <button 
                    className={`code-tab ${activeTab === 'python' ? 'active' : ''}`}
                    onClick={() => setActiveTab('python')}
                  >
                    Python
                  </button>
                </div>
                <span className="code-status">200 OK · 4.2ms</span>
              </div>

              <div className="code-body">
                {activeTab === 'curl' && (
                  <pre>
                    <code>
                      <span className="c-dim">$ </span>curl -X POST https://api.devapi.com/v1/clusters \<br />
                      &nbsp;&nbsp;-H <span className="c-green">"Authorization: Bearer $DEVAPI_KEY"</span> \<br />
                      &nbsp;&nbsp;-H <span className="c-green">"Content-Type: application/json"</span> \<br />
                      &nbsp;&nbsp;-d <span className="c-green">'&#123;"region":"global","tier":"edge-pro"&#125;'</span><br />
                      <br />
                      <span className="c-comment">// Response payload</span><br />
                      &#123;<br />
                      &nbsp;&nbsp;<span className="c-key">"cluster_id"</span>: <span className="c-val">"cls_9918a2"</span>,<br />
                      &nbsp;&nbsp;<span className="c-key">"edge_nodes"</span>: <span className="c-num">48</span>,<br />
                      &nbsp;&nbsp;<span className="c-key">"p99_latency"</span>: <span className="c-val">"3.8ms"</span>,<br />
                      &nbsp;&nbsp;<span className="c-key">"status"</span>: <span className="c-status">"active"</span><br />
                      &#125;
                    </code>
                  </pre>
                )}

                {activeTab === 'node' && (
                  <pre>
                    <code>
                      <span className="c-keyword">import</span> &#123; DevAPI &#125; <span className="c-keyword">from</span> <span className="c-green">'@devapi/sdk'</span>;<br />
                      <br />
                      <span className="c-keyword">const</span> client = <span className="c-keyword">new</span> DevAPI(&#123; apiKey: process.env.KEY &#125;);<br />
                      <span className="c-keyword">const</span> cluster = <span className="c-keyword">await</span> client.clusters.provision(&#123;<br />
                      &nbsp;&nbsp;region: <span className="c-green">'global'</span>,<br />
                      &nbsp;&nbsp;tier: <span className="c-green">'edge-pro'</span><br />
                      &#125;);
                    </code>
                  </pre>
                )}

                {activeTab === 'python' && (
                  <pre>
                    <code>
                      <span className="c-keyword">from</span> devapi <span className="c-keyword">import</span> Client<br />
                      <br />
                      client = Client(api_key=os.getenv(<span className="c-green">"KEY"</span>))<br />
                      cluster = client.clusters.provision(<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;region=<span className="c-green">"global"</span>, tier=<span className="c-green">"edge-pro"</span><br />
                      )
                    </code>
                  </pre>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Logo Wall: Directly UNDER hero, Simple Icons SVG marks */}
        <section className="taste-logo-wall">
          <p className="logo-wall-label">TRUSTED BY CORE INFRASTRUCTURE TEAMS WORLDWIDE</p>
          <div className="logo-strip">
            <div className="logo-item">
              <svg role="img" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              <span>GitHub</span>
            </div>

            <div className="logo-item">
              <svg role="img" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M24 22.525H0l12-21.05 12 21.05z" />
              </svg>
              <span>Vercel</span>
            </div>

            <div className="logo-item">
              <svg role="img" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M19.344 14.562l-7.344 8.438-7.344-8.438H12v-14h7.344v14z" />
              </svg>
              <span>Linear</span>
            </div>

            <div className="logo-item">
              <svg role="img" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M16.924 9.613A5.5 5.5 0 0 0 6.643 8.32a3.86 3.86 0 0 0-2.457 4.908A3.33 3.33 0 0 0 4.5 19.5h15a4.5 4.5 0 0 0 .5-8.973 5.48 5.48 0 0 0-3.076-.914z"/>
              </svg>
              <span>Cloudflare</span>
            </div>

            <div className="logo-item">
              <svg role="img" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M21.362 9.354H12V.316a.316.316 0 0 0-.555-.205L2.148 12.046a.316.316 0 0 0 .239.522h9.362v9.038a.316.316 0 0 0 .555.205l9.297-11.935a.316.316 0 0 0-.239-.522z"/>
              </svg>
              <span>Supabase</span>
            </div>
          </div>
        </section>

        {/* Feature Section: 3-cell Bento Grid with rhythm (2+1 split) */}
        <section className="taste-bento-section">
          <div className="taste-section-header">
            <h2>Engineered for extreme reliability</h2>
            <p>High-throughput data operations with zero cold starts and sub-millisecond edge resolution.</p>
          </div>

          <div className="taste-bento-grid">
            <div className="bento-tile bento-large">
              <div className="bento-badge">GLOBAL EDGE ORCHESTRATION</div>
              <h3>Sub-10ms latency across 38 edge locations</h3>
              <p>Dynamic geo-routing provisions connections through our multi-cloud fiber backbone, ensuring packets never traverse public transit congested routes.</p>
              
              <div className="latency-telemetry">
                <div className="telemetry-node">
                  <span className="node-city">US-East</span>
                  <span className="node-ms c-green">2.4ms</span>
                </div>
                <div className="telemetry-node">
                  <span className="node-city">EU-Central</span>
                  <span className="node-ms c-green">5.1ms</span>
                </div>
                <div className="telemetry-node">
                  <span className="node-city">AP-East</span>
                  <span className="node-ms c-green">7.8ms</span>
                </div>
              </div>
            </div>

            <div className="bento-tile">
              <div className="tile-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <h3>Hardware-Isolated Security</h3>
              <p>End-to-end payload signing with mTLS 1.3, granular RBAC, and ephemeral cryptographic keys generated per request.</p>
            </div>

            <div className="bento-tile">
              <div className="tile-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <h3>Continuous Failover Protocol</h3>
              <p>Automated zero-loss traffic migration. Should an upstream provider experience degradation, failover completes in under 12ms.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
