import './App.css';

function App() {
  return (
    <div className="baseline-app">
      <nav className="baseline-nav">
        <div className="baseline-logo">DevAPI</div>
        <div className="baseline-nav-links">
          <a href="#">Features</a>
          <a href="#">Docs</a>
          <a href="#">Pricing</a>
        </div>
        <button className="baseline-btn-primary">Get API Key</button>
      </nav>

      <main className="baseline-main">
        <section className="baseline-hero">
          <h1>The Best API for Developers</h1>
          <p>Build faster, scale seamlessly, and manage your data with our powerful REST API.</p>
          <div className="baseline-hero-btns">
            <button className="baseline-btn-primary">Start Building</button>
            <button className="baseline-btn-secondary">Read Docs</button>
          </div>
        </section>

        <section className="baseline-features">
          <h2>Why Choose DevAPI?</h2>
          <div className="baseline-cards">
            <div className="baseline-card">
              <div className="baseline-icon">⚡</div>
              <h3>Lightning Fast</h3>
              <p>Sub-10ms latency globally.</p>
            </div>
            <div className="baseline-card">
              <div className="baseline-icon">🔒</div>
              <h3>Secure</h3>
              <p>Enterprise-grade security by default.</p>
            </div>
            <div className="baseline-card">
              <div className="baseline-icon">📈</div>
              <h3>Scalable</h3>
              <p>Handle millions of requests per second.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
