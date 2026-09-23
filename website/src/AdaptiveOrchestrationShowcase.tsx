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
    <section id="adaptive" className="section" style={{ backgroundColor: 'var(--bg-base)', borderTop: '1px solid var(--border-strong)', borderBottom: '1px solid var(--border-strong)', position: 'relative', overflow: 'hidden' }}>
      {/* Glowing Core Background */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', width: '100%', height: '100%', background: 'radial-gradient(ellipse at center, rgba(0, 240, 255, 0.05) 0%, transparent 60%)', transform: 'translate(-50%, -50%)', pointerEvents: 'none', zIndex: 0 }}></div>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '32px 32px', zIndex: 0 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="reveal" style={{ marginBottom: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid var(--accent-cyan)', paddingBottom: '2rem' }}>
          <div>
            <span className="tech-label" style={{ color: 'var(--accent-cyan)' }}>[ ACTIVE MODULE : ORCHESTRATION ENGINE ]</span>
            <h2 style={{ color: 'var(--text-primary)', textShadow: '0 0 20px rgba(0,240,255,0.2)' }}>Complexity-Aware Adaptive Orchestration</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '44rem', fontSize: '1.1rem', margin: 0 }}>
              Instead of forcing every task through all 19 stages, Universal UI dynamically deploys the minimum sufficient pipeline depth—capturing <strong>93.8% of marginal gains</strong> while slashing tokens and latency.
            </p>
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)', textAlign: 'right' }}>
            <span style={{ display: 'block', color: 'var(--accent-cyan)' }}>SYS.ROUTING: DYNAMIC</span>
            OP.MODE: ADAPTIVE
          </div>
        </div>

        {/* Domain Selector Tabs - Telemetry Ribbon */}
        <div className="flex-gap reveal" style={{ marginBottom: '3rem', border: '1px solid var(--border-strong)', padding: '0.5rem', background: 'rgba(0,0,0,0.5)' }}>
          {['landing', 'mobile', 'cinematic'].map((domain) => (
            <button 
              key={domain}
              onClick={() => setSelectedDomain(domain as any)}
              style={{
                flex: 1,
                padding: '1.5rem',
                background: selectedDomain === domain ? 'rgba(0, 240, 255, 0.1)' : 'transparent',
                color: selectedDomain === domain ? 'var(--text-primary)' : 'var(--text-secondary)',
                border: selectedDomain === domain ? '1px solid var(--accent-cyan)' : '1px solid transparent',
                borderLeft: selectedDomain === domain ? '4px solid var(--accent-cyan)' : '1px solid transparent',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s'
              }}
            >
              <div style={{ color: selectedDomain === domain ? 'var(--accent-cyan)' : 'var(--text-dim)', marginBottom: '0.5rem', fontSize: '0.65rem' }}>
                {domain === 'landing' ? 'L1_MINIMAL' : domain === 'mobile' ? 'L2_STANDARD' : 'L3_FULL_ENGINE'}
              </div>
              {domain === 'landing' ? '01. DEVELOPER PORTAL (L1)' : domain === 'mobile' ? '02. FIELD MOBILE UI (L2)' : '05. CINEMATIC STORY (L3)'}
            </button>
          ))}
        </div>

        {/* Interactive Matrix Display */}
        <div className="grid-2 reveal delay-100" style={{ gap: '1px', background: 'var(--border-strong)', border: '1px solid var(--border-strong)' }}>
          {/* Left: Telemetry & Quality Card */}
          <div style={{ background: 'var(--bg-base)', padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
            {/* HUD Corners */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '20px', height: '20px', borderTop: '2px solid var(--accent-cyan)', borderLeft: '2px solid var(--accent-cyan)' }}></div>
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: '20px', height: '20px', borderBottom: '2px solid var(--accent-cyan)', borderRight: '2px solid var(--accent-cyan)' }}></div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-cyan)', marginBottom: '1.5rem', letterSpacing: '0.1em', borderBottom: '1px dashed var(--border-strong)', paddingBottom: '0.5rem' }}>
                <span>[ {cur.id} ]</span>
                <span>MATCH: {cur.isExactMatch ? '✓ T_pred == T_opt' : '○'}</span>
              </div>
              <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{cur.name}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '3rem', maxWidth: '90%' }}>
                {cur.rationale}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--border-strong)', border: '1px solid var(--border-strong)' }}>
                <div style={{ background: 'var(--bg-surface)', padding: '1.5rem', textAlign: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-dim)', display: 'block', marginBottom: '0.5rem', letterSpacing: '0.1em' }}>TASTE SCORE</span>
                  <strong style={{ fontFamily: 'var(--font-mono)', fontSize: '1.5rem', color: 'var(--text-secondary)' }}>{cur.tasteScore} <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>/ 110</span></strong>
                </div>
                <div style={{ background: 'rgba(0, 240, 255, 0.05)', padding: '1.5rem', textAlign: 'center', border: '1px solid var(--accent-cyan)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--accent-cyan)', display: 'block', marginBottom: '0.5rem', letterSpacing: '0.1em' }}>ADAPTIVE ROUTE</span>
                  <strong style={{ fontFamily: 'var(--font-mono)', fontSize: '1.5rem', color: 'var(--text-primary)', textShadow: '0 0 10px rgba(0,240,255,0.5)' }}>{cur.adaptiveScore} <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>/ 110</span></strong>
                </div>
                <div style={{ background: 'var(--bg-surface)', padding: '1.5rem', textAlign: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-dim)', display: 'block', marginBottom: '0.5rem', letterSpacing: '0.1em' }}>FULL L3 CONTROL</span>
                  <strong style={{ fontFamily: 'var(--font-mono)', fontSize: '1.5rem', color: 'var(--text-primary)' }}>{cur.fullL3Score} <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>/ 110</span></strong>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '3rem', background: 'var(--bg-surface)', border: '1px dashed var(--accent-cyan)', padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
              <span style={{ color: 'var(--text-dim)', letterSpacing: '0.1em' }}>RETAINED MARGINAL GAIN (R_L)</span>
              <strong style={{ color: 'var(--accent-cyan)', fontSize: '1rem', textShadow: '0 0 10px rgba(0,240,255,0.3)' }}>{cur.retainedGain} (Target $\ge$ 90%)</strong>
            </div>
          </div>

          {/* Right: Cost & Frontier Visualizer */}
          <div style={{ background: 'var(--bg-base)', padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', letterSpacing: '0.1em', borderBottom: '1px dashed var(--border-strong)', paddingBottom: '0.5rem' }}>
                <Cpu size={16} style={{ color: 'var(--accent-cyan)' }} />
                <span>PROCESS COST & PARETO FRONTIER</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <span style={{ color: 'var(--text-dim)' }}>PREDICTED TIER CLASSIFICATION</span>
                    <span style={{ color: 'var(--accent-cyan)', fontWeight: 700, textShadow: '0 0 10px rgba(0,240,255,0.2)' }}>{cur.classifiedTier}</span>
                  </div>
                  <div style={{ height: '4px', background: 'var(--bg-surface)', width: '100%', border: '1px solid var(--border-strong)' }}>
                    <div style={{ height: '100%', width: selectedDomain === 'landing' ? '30%' : selectedDomain === 'mobile' ? '65%' : '100%', background: 'var(--accent-cyan)' }}></div>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dotted var(--border-strong)', paddingBottom: '1rem' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>TOKEN CONSUMPTION LOG</span>
                  <strong style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>{cur.tokens} tok <span style={{ color: 'var(--text-dim)', fontSize: '0.75rem', fontWeight: 400 }}>({cur.savings})</span></strong>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dotted var(--border-strong)', paddingBottom: '1rem' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>LATENCY (TIME TO FIRST USABLE UI)</span>
                  <strong style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>{cur.ttfui} <span style={{ color: 'var(--text-dim)', fontSize: '0.75rem', fontWeight: 400 }}>(vs. L3: {cur.fullTtfui})</span></strong>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>ALGORITHMIC PARETO STATUS</span>
                  <strong style={{ color: 'var(--accent-cyan)', letterSpacing: '0.1em' }}>[ ✓ FRONTIER EFFICIENT ]</strong>
                </div>
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--border-strong)', paddingTop: '2rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start', background: 'var(--bg-surface)', padding: '1.5rem', marginTop: '3rem' }}>
              <Zap size={20} style={{ color: 'var(--accent-cyan)', flexShrink: 0 }} />
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: '1.6' }}>
                <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.25rem' }}>EMPIRICAL VALIDATION</strong>
                Adaptive depth achieves optimal quality-cost balance without running redundant stages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
