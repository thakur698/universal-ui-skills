import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [selectedColor, setSelectedColor] = useState('Midnight');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="v2-app">
      <nav className={`v2-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="v2-logo">AURA.</div>
          <div className="v2-nav-links">
            <a href="#">Overview</a>
            <a href="#">Tech Specs</a>
            <a href="#">Compare</a>
          </div>
          <div className="v2-nav-action">
            <span className="nav-price">$299</span>
            <button className="v2-btn-buy">Buy</button>
          </div>
        </div>
      </nav>

      <main className="v2-main">
        {/* V2 Immersive Hero */}
        <section className="v2-hero">
          <div className="hero-text">
            <p className="hero-eyebrow">New Arrival</p>
            <h1>Sound, <br/>perfected.</h1>
            <p className="hero-subtext">Active Noise Cancellation. 30-hour battery. Studio-quality audio.</p>
          </div>
          <div className="hero-image-container">
            <div className="v2-product-img">
              {/* V2 relies on beautiful asset planning */}
              <div className="asset-placeholder">
                <span className="asset-label">Asset: High-Res 3D Render of Headphones (Floating)</span>
              </div>
            </div>
          </div>
        </section>

        {/* V2 Purchase/Detail Section (Editorial Layout) */}
        <section className="v2-editorial-buy">
          <div className="editorial-left">
            <div className="sticky-content">
               <div className="gallery-placeholder">
                  <span className="asset-label">Asset: Lifestyle Image</span>
               </div>
            </div>
          </div>
          
          <div className="editorial-right">
            <div className="buy-flow">
              <h2>Aura Pro Wireless</h2>
              <p className="v2-price">$299.00</p>
              
              <div className="color-selector">
                <p className="selector-label">Color - <strong>{selectedColor}</strong></p>
                <div className="color-options">
                  <button 
                    className={`color-btn midnight ${selectedColor === 'Midnight' ? 'active' : ''}`}
                    onClick={() => setSelectedColor('Midnight')}
                    aria-label="Midnight Black"
                  ></button>
                  <button 
                    className={`color-btn starlight ${selectedColor === 'Starlight' ? 'active' : ''}`}
                    onClick={() => setSelectedColor('Starlight')}
                    aria-label="Starlight Silver"
                  ></button>
                </div>
              </div>
              
              <div className="v2-trust-box">
                <div className="trust-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12l5 5l10 -10"></path></svg>
                  <div>
                    <strong>Free Delivery</strong>
                    <span>Get it by Thursday, Oct 28</span>
                  </div>
                </div>
                <div className="trust-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
                  <div>
                    <strong>14-Day Returns</strong>
                    <span>Return for free within 14 days</span>
                  </div>
                </div>
              </div>
              
              <div className="action-sticky-bottom">
                <button className="v2-btn-primary">Add to Bag</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
