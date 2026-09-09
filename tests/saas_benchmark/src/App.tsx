import { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="v2-saas-app dark-theme">
      {/* Sidebar Navigation */}
      <aside className="v2-sidebar">
        <div className="sidebar-header">
          <div className="workspace-switcher">
            <div className="avatar">A</div>
            <span className="workspace-name">Acme Corp</span>
            <span className="icon-chevrons">↕</span>
          </div>
        </div>

        <nav className="v2-nav-menu">
          <div className="nav-section">
            <p className="section-label">Overview</p>
            <button 
              className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
              onClick={() => setActiveTab('dashboard')}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              Dashboard
            </button>
            <button 
              className={`nav-item ${activeTab === 'deployments' ? 'active' : ''}`}
              onClick={() => setActiveTab('deployments')}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
              Deployments
              <span className="badge">3</span>
            </button>
          </div>
          
          <div className="nav-section">
            <p className="section-label">Configuration</p>
            <button 
              className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
              onClick={() => setActiveTab('settings')}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
              Settings
            </button>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="v2-main-area">
        <header className="v2-topbar">
          <div className="breadcrumbs">
            <span>Acme Corp</span>
            <span className="separator">/</span>
            <span className="current">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</span>
          </div>
          <div className="topbar-actions">
            <button className="icon-btn" aria-label="Notifications">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
            </button>
            <div className="user-avatar-small">
              <img src="https://ui-avatars.com/api/?name=Admin&background=random" alt="User" />
            </div>
          </div>
        </header>

        <main className="v2-content">
          {activeTab === 'dashboard' && (
            <div className="dashboard-view">
              <div className="page-header">
                <h1>Overview</h1>
                <div className="header-actions">
                  <span className="last-updated">Updated just now</span>
                  <button className="v2-btn-primary">View Analytics</button>
                </div>
              </div>

              <div className="bento-grid">
                <div className="bento-card metric">
                  <div className="metric-header">
                    <span className="title">Total Requests</span>
                    <span className="trend positive">+12.5%</span>
                  </div>
                  <div className="metric-value">1,234,567</div>
                  <div className="sparkline-placeholder"></div>
                </div>
                
                <div className="bento-card metric">
                  <div className="metric-header">
                    <span className="title">Error Rate</span>
                    <span className="trend negative">+0.1%</span>
                  </div>
                  <div className="metric-value">0.42%</div>
                  <div className="sparkline-placeholder error"></div>
                </div>

                <div className="bento-card metric">
                  <div className="metric-header">
                    <span className="title">Active Users</span>
                    <span className="trend positive">+5.2%</span>
                  </div>
                  <div className="metric-value">8,901</div>
                  <div className="sparkline-placeholder neutral"></div>
                </div>
              </div>

              <div className="bento-card table-card">
                <div className="card-header">
                  <h3>Recent Activity</h3>
                  <button className="btn-ghost">View All</button>
                </div>
                
                <table className="v2-data-table">
                  <thead>
                    <tr>
                      <th>Deployment</th>
                      <th>Status</th>
                      <th>Environment</th>
                      <th>Duration</th>
                      <th>Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="code-cell">
                        <span className="commit-hash">a1b2c3d</span>
                        <span className="commit-msg">Update marketing copy</span>
                      </td>
                      <td>
                        <div className="status-badge success">
                          <div className="dot"></div> Ready
                        </div>
                      </td>
                      <td>Production</td>
                      <td className="mono">1m 12s</td>
                      <td className="subtle">2m ago</td>
                    </tr>
                    <tr>
                      <td className="code-cell">
                        <span className="commit-hash">f4e5d6c</span>
                        <span className="commit-msg">Fix navigation bug on mobile</span>
                      </td>
                      <td>
                        <div className="status-badge error">
                          <div className="dot"></div> Failed
                        </div>
                      </td>
                      <td>Staging</td>
                      <td className="mono">45s</td>
                      <td className="subtle">15m ago</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'deployments' && (
            <div className="dashboard-view">
              <div className="page-header">
                <h1>Deployments</h1>
              </div>
              <div className="v2-empty-state">
                <div className="empty-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                </div>
                <h3>No deployments found</h3>
                <p>Connect your repository or use the CLI to create your first deployment.</p>
                <div className="empty-actions">
                  <button className="v2-btn-secondary">Read Docs</button>
                  <button className="v2-btn-primary">Connect Repository</button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
