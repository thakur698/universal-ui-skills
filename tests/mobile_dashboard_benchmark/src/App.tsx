import { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('Week');
  
  const transactions = [
    { id: 1, name: 'Starbucks', category: 'Food & Drink', date: 'Today, 9:41 AM', amount: -5.40, icon: '☕' },
    { id: 2, name: 'Stripe Payout', category: 'Income', date: 'Yesterday', amount: 3200.00, icon: '💼' },
    { id: 3, name: 'Netflix', category: 'Entertainment', date: 'Oct 21, 2026', amount: -15.99, icon: '🍿' },
    { id: 4, name: 'Whole Foods', category: 'Groceries', date: 'Oct 20, 2026', amount: -84.50, icon: '🛒' },
    { id: 5, name: 'Uber', category: 'Transport', date: 'Oct 19, 2026', amount: -24.10, icon: '🚗' },
  ];

  return (
    <div className="v2-app">
      <header className="v2-header">
        <div className="header-top">
          <div className="user-profile">
            <img src="https://ui-avatars.com/api/?name=User&background=38bdf8&color=fff&rounded=true" alt="User" />
            <span>Hello, User</span>
          </div>
          <button className="icon-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
          </button>
        </div>
        
        <div className="balance-section">
          <p className="balance-label">Total Balance</p>
          <h1 className="balance-amount">$12,450<span className="cents">.00</span></h1>
          <div className="balance-change positive">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
            <span>+2.4% this week</span>
          </div>
        </div>
      </header>
      
      <main className="v2-main">
        <section className="v2-chart-card">
          <div className="chart-header">
            <h3>Spending</h3>
            <div className="tab-group">
              {['Day', 'Week', 'Month'].map(tab => (
                <button 
                  key={tab} 
                  className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className="v2-chart-visual">
            <div className="v2-bar" style={{height: '40%'}}><div className="bar-tooltip">$120</div></div>
            <div className="v2-bar" style={{height: '70%'}}></div>
            <div className="v2-bar" style={{height: '30%'}}></div>
            <div className="v2-bar active" style={{height: '90%'}}></div>
            <div className="v2-bar" style={{height: '50%'}}></div>
            <div className="v2-bar" style={{height: '65%'}}></div>
            <div className="v2-bar" style={{height: '80%'}}></div>
          </div>
        </section>

        <section className="v2-transactions">
          <div className="section-header">
            <h3>Recent Activity</h3>
            <button className="text-btn">See All</button>
          </div>
          
          <div className="transaction-list">
            {transactions.map(t => (
              <div key={t.id} className="v2-t-item">
                <div className="t-icon">{t.icon}</div>
                <div className="t-details">
                  <p className="t-name">{t.name}</p>
                  <p className="t-category">{t.category} • {t.date}</p>
                </div>
                <div className={`t-amount ${t.amount > 0 ? 'positive' : ''}`}>
                  {t.amount > 0 ? '+' : ''}{t.amount.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      
      <nav className="v2-bottom-nav">
        <button className="nav-item active">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
        </button>
        <button className="nav-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
        </button>
        <button className="nav-fab">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        </button>
        <button className="nav-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
        </button>
        <button className="nav-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        </button>
      </nav>
    </div>
  );
}

export default App;
