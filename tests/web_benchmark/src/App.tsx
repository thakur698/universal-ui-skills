import './App.css';

function App() {
  return (
    <div className="v2-app">
      <nav className="v2-nav">
        <div className="nav-left">
          <div className="v2-logo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            DevAPI
          </div>
          <div className="v2-links">
            <a href="#">Products</a>
            <a href="#">Solutions</a>
            <a href="#">Documentation</a>
          </div>
        </div>
        <div className="nav-right">
          <a href="#" className="link-muted">Sign In</a>
          <button className="v2-btn-primary">Get API Key</button>
        </div>
      </nav>

      <main className="v2-main">
        {/* V2 Diagram-Led Hero */}
        <section className="v2-hero">
          <div className="hero-content">
            <div className="pill-badge">v3.0.0 Now Available</div>
            <h1>The data infrastructure<br/>for modern developers.</h1>
            <p>Build faster, scale seamlessly, and manage your data with a REST API designed for sub-10ms global latency and enterprise-grade security.</p>
            <div className="hero-actions">
              <button className="v2-btn-primary">Start Building</button>
              <button className="v2-btn-secondary">Read Documentation</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="code-window">
              <div className="window-header">
                <span className="dot close"></span>
                <span className="dot min"></span>
                <span className="dot max"></span>
                <span className="title">bash</span>
              </div>
              <pre><code>
<span className="token-cmd">curl</span> -X POST https://api.devapi.com/v1/clusters \<br/>
  -H <span className="token-str">"Authorization: Bearer $API_KEY"</span> \<br/>
  -H <span className="token-str">"Content-Type: application/json"</span> \<br/>
  -d <span className="token-str">'&#123;"region": "us-east", "nodes": 3&#125;'</span>
<br/>
<span className="token-comment"># Output:</span><br/>
<span className="token-success">&#123;</span><br/>
  "id": "cluster_9x8jf",<br/>
  "status": "provisioning",<br/>
  "estimated_time": "45s"<br/>
<span className="token-success">&#125;</span>
              </code></pre>
            </div>
          </div>
        </section>

        {/* V2 Bento Grid (Visual Density = 8) */}
        <section className="v2-bento-section">
          <div className="v2-bento-grid">
            <div className="bento-card col-span-2 row-span-2 highlight-card">
              <div className="card-content">
                <h3>Global Edge Network</h3>
                <p>Deploy your data close to your users. Our Anycast network automatically routes requests to the nearest of our 35 global edge locations, ensuring sub-10ms latency.</p>
              </div>
              <div className="card-visual network-visual">
                <div className="pulse-dot"></div>
                <div className="pulse-dot pos-2"></div>
                <div className="pulse-dot pos-3"></div>
              </div>
            </div>
            
            <div className="bento-card">
              <div className="icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3>Enterprise Security</h3>
              <p>SOC2 Type II, HIPAA compliance, and end-to-end encryption by default.</p>
            </div>
            
            <div className="bento-card">
              <div className="icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              </div>
              <h3>Infinite Scale</h3>
              <p>Serverless architecture that scales from 0 to 1M+ requests automatically.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
