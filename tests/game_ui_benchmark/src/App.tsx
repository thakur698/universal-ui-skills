import { useState } from 'react';
import './App.css';

function App() {
  const [gameState, setGameState] = useState('menu');

  return (
    <div className="v2-game-app">
      {gameState === 'menu' && (
        <div className="v2-screen">
          <div className="v2-top-bar">
            <div className="v2-currency-pill">
              <span className="v2-icon gold">💰</span>
              <span className="v2-value">1,240</span>
            </div>
            <div className="v2-currency-pill">
              <span className="v2-icon gem">💎</span>
              <span className="v2-value">12</span>
            </div>
            <button className="v2-settings-btn">⚙️</button>
          </div>

          <div className="v2-main-menu-center">
            <div className="v2-title-container">
              <h1 className="v2-game-title">SUPER<br/>ADVENTURE</h1>
              <div className="v2-level-badge">LVL 4: DARK CAVE</div>
            </div>

            <button 
              className="v2-play-btn-huge"
              onClick={() => setGameState('playing')}
            >
              <div className="btn-inner">PLAY</div>
            </button>
          </div>
          
          <div className="v2-bottom-bar">
            <button className="v2-diegetic-btn">
              <span className="icon">🛡️</span>
              <span className="label">UPGRADES</span>
            </button>
            <button className="v2-diegetic-btn">
              <span className="icon">🗺️</span>
              <span className="label">WORLD</span>
            </button>
          </div>
        </div>
      )}

      {gameState === 'playing' && (
        <div className="v2-screen v2-playing">
          <div className="v2-hud-top">
            <button className="v2-pause-btn" onClick={() => setGameState('menu')}>⏸</button>
            
            <div className="v2-health-bar-container">
              <div className="v2-health-icon">❤️</div>
              <div className="v2-health-track">
                <div className="v2-health-fill" style={{width: '80%'}}></div>
              </div>
            </div>
            
            <div className="v2-score-display">
              <span className="label">SCORE</span>
              <span className="value">4,500</span>
            </div>
          </div>
          
          <div className="v2-gameplay-canvas">
            {/* Visual Critic: Ensure this doesn't look like an empty div, make it look like a game viewport */}
            <div className="v2-world-placeholder">
              [ Game World Rendering ]
            </div>
          </div>
          
          <div className="v2-hud-controls">
            <div className="joystick-placeholder">
              <div className="stick"></div>
            </div>
            <div className="action-buttons-right">
              <button className="v2-action-btn secondary">🗡️</button>
              <button className="v2-action-btn primary">A</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
