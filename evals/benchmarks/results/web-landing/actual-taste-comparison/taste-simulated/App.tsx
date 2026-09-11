import './App.css';

function App() {
  return (
    <div className="taste-sim-app">
      <header className="taste-sim-nav">
        <div className="taste-sim-logo">DEVAPI.</div>
        <button className="taste-sim-btn-nav">GET API KEY</button>
      </header>
      <main className="taste-sim-main">
        <div className="taste-sim-grid">
          <div className="taste-sim-left">
            <h1 className="taste-sim-title">THE BEST API FOR DEVELOPERS.</h1>
            <p className="taste-sim-desc">
              Build faster, scale seamlessly, and manage your data with our powerful REST API.
            </p>
            <button className="taste-sim-btn-hero">START BUILDING</button>
          </div>
          <div className="taste-sim-right">
            <div className="taste-sim-img-placeholder">
              <span>IMG: DATA VISUALIZATION</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
