import { useState } from 'react';
import { Cpu, Zap } from 'lucide-react';

export function AdaptiveOrchestrationShowcase() {
  const [selectedDomain, setSelectedDomain] = useState<'landing' | 'mobile' | 'cinematic'>('landing');

  const domainData = {
    landing: {
      id: "01 // DEVELOPER INFRASTRUCTURE",
      name: "Distributed Database Portal",
      classifiedTier: "L1 Minimal (3 Stages)",
      optimalTier: "L1 Minimal",
      isExactMatch: true,
      tasteScore: 93,
      adaptiveScore: 95,
      fullL3Score: 95,
      tokens: "11,340",
      fullTokens: "19,270",
      savings: "41.2% token savings",
      ttfui: "41.2s",
      fullTtfui: "64.8s",
      retainedGain: "100.0%",
      rationale: "Clean layout and technical documentation without complex state. L1 achieves full quality ceiling with zero over-orchestration."
    },
    mobile: {
      id: "02 // ERGONOMIC FIELD MOBILE",
      name: "Emergency Telehealth Interface",
      classifiedTier: "L2 Standard (8 Stages)",
      optimalTier: "L2 Standard",
      isExactMatch: true,
      tasteScore: 89,
      adaptiveScore: 99,
      fullL3Score: 100,
      tokens: "14,100",
      fullTokens: "17,270",
      savings: "18.4% token savings",
      ttfui: "49.6s",
      fullTtfui: "58.2s",
      retainedGain: "90.9%",
      rationale: "High-density touch ergonomics (>=52px) and critical clinical telemetry benefit strongly from Design Read + Dials + Bento composition."
    },
    cinematic: {
      id: "05 // EDITORIAL SCROLL STORY",
      name: "Hadal Zone Expedition",
      classifiedTier: "L3 Full Engine (19 Stages)",
      optimalTier: "L3 Full Engine",
      isExactMatch: true,
      tasteScore: 92,
      adaptiveScore: 103,
      fullL3Score: 103,
      tokens: "19,450",
      fullTokens: "19,450",
      savings: "Maximum quality route",
      ttfui: "68.2s",
      fullTtfui: "68.2s",
      retainedGain: "100.0%",
      rationale: "Scrubbed timeline choreography, sticky narrative viewports, and multi-plane depth require full 19-stage adversarial polish."
    }
  };

  const cur = domainData[selectedDomain];

  return (
    <section id="adaptive" className="section" style={{ backgroundColor: 'var(--bg-surface-elevated)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div className="reveal" style={{ marginBottom: '3.5rem' }}>
          <span className="tech-label">Track v2.1-Exp & v2.2 Architecture</span>
          <h2>Complexity-Aware Adaptive Orchestration</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '44rem' }}>
            Instead of forcing every task through all 19 stages, Universal UI dynamically deploys the minimum sufficient pipeline depth—capturing <strong>93.8% of marginal gains</strong> while slashing tokens and latency.
          </p>
        </div>

        {/* Domain Selector Tabs */}
        <div className="flex-gap reveal" style={{ marginBottom: '2.5rem' }}>
          <button 
            onClick={() => setSelectedDomain('landing')}
            className={`tab-btn ${selectedDomain === 'landing' ? 'active' : ''}`}
            style={{
              padding: '0.75rem 1.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              background: selectedDomain === 'landing' ? 'var(--bg-base)' : 'transparent',
              border: `1px solid ${selectedDomain === 'landing' ? 'var(--accent-cyan)' : 'var(--border-strong)'}`,
              color: selectedDomain === 'landing' ? 'var(--accent-cyan)' : 'var(--text-secondary)',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            01. Developer Portal (L1)
          </button>
          <button 
            onClick={() => setSelectedDomain('mobile')}
            className={`tab-btn ${selectedDomain === 'mobile' ? 'active' : ''}`}
            style={{
              padding: '0.75rem 1.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              background: selectedDomain === 'mobile' ? 'var(--bg-base)' : 'transparent',
              border: `1px solid ${selectedDomain === 'mobile' ? 'var(--accent-cyan)' : 'var(--border-strong)'}`,
              color: selectedDomain === 'mobile' ? 'var(--accent-cyan)' : 'var(--text-secondary)',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            02. Field Mobile UI (L2)
          </button>
          <button 
            onClick={() => setSelectedDomain('cinematic')}
            className={`tab-btn ${selectedDomain === 'cinematic' ? 'active' : ''}`}
            style={{
              padding: '0.75rem 1.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              background: selectedDomain === 'cinematic' ? 'var(--bg-base)' : 'transparent',
              border: `1px solid ${selectedDomain === 'cinematic' ? 'var(--accent-cyan)' : 'var(--border-strong)'}`,
              color: selectedDomain === 'cinematic' ? 'var(--accent-cyan)' : 'var(--text-secondary)',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            05. Cinematic Story (L3)
          </button>
        </div>

        {/* Interactive Matrix Display */}
        <div className="grid-2 reveal delay-100">
          {/* Left: Telemetry & Quality Card */}
          <div style={{ background: 'var(--bg-base)', border: '1px solid var(--border-strong)', padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-cyan)', marginBottom: '1.25rem' }}>
                <span>{cur.id}</span>
                <span>MATCH: {cur.isExactMatch ? '✓ T_pred == T_opt' : '○'}</span>
              </div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '0.75rem' }}>{cur.name}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                {cur.rationale}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem' }}>
                <div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-dim)', display: 'block' }}>TASTE SCORE</span>
                  <strong style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>{cur.tasteScore} / 110</strong>
                </div>
                <div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-dim)', display: 'block' }}>ADAPTIVE ROUTE</span>
                  <strong style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', color: 'var(--accent-cyan)' }}>{cur.adaptiveScore} / 110</strong>
                </div>
                <div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-dim)', display: 'block' }}>FULL L3 CONTROL</span>
                  <strong style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', color: 'var(--text-primary)' }}>{cur.fullL3Score} / 110</strong>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '2rem', background: 'rgba(0, 240, 255, 0.05)', border: '1px solid rgba(0, 240, 255, 0.2)', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>RETAINED MARGINAL GAIN (R_L)</span>
              <strong style={{ color: 'var(--accent-cyan)' }}>{cur.retainedGain} (Target $\ge$ 90%)</strong>
            </div>
          </div>

          {/* Right: Cost & Frontier Visualizer */}
          <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Cpu size={16} style={{ color: 'var(--accent-cyan)' }} />
                <span>PROCESS COST & PARETO FRONTIER</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>PREDICTED TIER</span>
                    <span style={{ color: 'var(--accent-cyan)' }}>{cur.classifiedTier}</span>
                  </div>
                  <div style={{ height: '4px', background: 'var(--border-strong)', borderRadius: '2px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: selectedDomain === 'landing' ? '30%' : selectedDomain === 'mobile' ? '65%' : '100%', background: 'var(--accent-cyan)' }}></div>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>TOKEN CONSUMPTION</span>
                  <strong style={{ color: 'var(--text-primary)' }}>{cur.tokens} tok <span style={{ color: 'var(--accent-cyan)', fontSize: '0.7rem' }}>({cur.savings})</span></strong>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>TIME TO FIRST USABLE UI</span>
                  <strong style={{ color: 'var(--text-primary)' }}>{cur.ttfui} <span style={{ color: 'var(--text-secondary)', fontSize: '0.7rem' }}>(vs. L3: {cur.fullTtfui})</span></strong>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>PARETO STATUS</span>
                  <strong style={{ color: '#4ade80' }}>✓ FRONTIER EFFICIENT (Dominates L2)</strong>
                </div>
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <Zap size={18} style={{ color: 'var(--accent-cyan)', flexShrink: 0 }} />
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', margin: 0, lineHeight: '1.4' }}>
                Empirical validation: Adaptive depth achieves optimal quality-cost balance without running redundant stages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
