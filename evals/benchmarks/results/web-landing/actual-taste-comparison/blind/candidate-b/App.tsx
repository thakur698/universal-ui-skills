import './App.css';

function App() {
  return (
    <div className="ui-sim-app">
      <header className="ui-sim-nav">
        <div className="ui-sim-logo">DEVAPI.</div>
        <button className="ui-sim-btn-nav">GET API KEY</button>
      </header>
      <main className="ui-sim-main">
        <div className="ui-sim-grid">
          <div className="ui-sim-left">
            <h1 className="ui-sim-title">THE BEST API FOR DEVELOPERS.</h1>
            <p className="ui-sim-desc">
              Build faster, scale seamlessly, and manage your data with our powerful REST API.
            </p>
            <button className="ui-sim-btn-hero">START BUILDING</button>
          </div>
          <div className="ui-sim-right">
            <div className="ui-sim-img-placeholder">
              <span>IMG: DATA VISUALIZATION</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
