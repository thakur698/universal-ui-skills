import { useState } from 'react';
import benchmarkData from './data/aggregate-results.json';

type BenchmarkId = '01-flutter-onboarding' | '02-web-landing-page' | '03-mobile-dashboard' | '04-ecommerce-storefront' | '05-game-ui' | '06-react-saas' | '07-cinematic-web-experience';
type Version = 'baseline_ai' | 'taste_simulated' | 'actual_taste' | 'universal_ui_v2';

const BENCHMARK_MAP: Record<BenchmarkId, { title: string, domain: string }> = {
  '01-flutter-onboarding': { title: 'Flutter Onboarding', domain: 'Mobile' },
  '02-web-landing-page': { title: 'Web Landing Page', domain: 'Web / SaaS' },
  '03-mobile-dashboard': { title: 'Mobile Dashboard', domain: 'Finance' },
  '04-ecommerce-storefront': { title: 'Ecommerce Storefront', domain: 'Commerce' },
  '05-game-ui': { title: 'Game UI', domain: 'Gaming' },
  '06-react-saas': { title: 'React SaaS', domain: 'B2B Dev' },
  '07-cinematic-web-experience': { title: 'Cinematic Web Experience', domain: 'Storytelling' }
};

export function BenchmarkShowcase() {
  const [activeTab, setActiveTab] = useState<BenchmarkId>('07-cinematic-web-experience');
  const [activeVersion, setActiveVersion] = useState<Version>('universal_ui_v2');

  const currentBenchmark = benchmarkData.benchmarks.find(b => b.id === activeTab);
  if (!currentBenchmark) return null;

  const currentResults = currentBenchmark.results[activeVersion as keyof typeof currentBenchmark.results];
  const hasActualTaste = 'actual_taste' in currentBenchmark.results;
  const hasTasteSimulated = 'taste_simulated' in currentBenchmark.results && currentBenchmark.results.taste_simulated?.total !== null;

  return (
    <section id="benchmarks" className="section" style={{ backgroundColor: 'var(--bg-base)', borderTop: '1px solid var(--border-strong)', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'var(--glow-cyan-strong)', opacity: 0.5 }}></div>
      <div className="container">
        <div className="reveal" style={{ marginBottom: '5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid var(--border-strong)', paddingBottom: '2rem' }}>
          <div>
            <span className="tech-label" style={{ color: 'var(--text-secondary)' }}>EMPIRICAL EVALUATION</span>
            <h2 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Controlled 7-Domain Benchmark Suite</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '44rem', margin: 0 }}>
              Evaluated under frozen <strong>Benchmark Protocol v1.0</strong> and <strong>Rubric v1.0 (110 points)</strong>. Compares Universal UI V2 against Baseline AI, Taste-simulated controls, and officially executed Taste skills across 7 real-world domains.
            </p>
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-cyan)', textAlign: 'right' }}>
            SUITE: BENCHMARK_V1<br/>MAX_SCORE: 110_PTS
          </div>
        </div>

        {/* Benchmark Domain Tabs */}
        <div className="benchmark-tabs reveal delay-100" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem', padding: '0.5rem', border: '1px dashed var(--border-strong)', background: 'var(--bg-surface)' }}>
          {benchmarkData.benchmarks.map((b) => (
            <button
              key={b.id}
              className={`tab-button ${activeTab === b.id ? 'active' : ''}`}
              style={{
                flex: '1 1 auto',
                background: activeTab === b.id ? 'rgba(0, 240, 255, 0.1)' : 'transparent',
                border: activeTab === b.id ? '1px solid var(--accent-cyan)' : '1px solid transparent',
                color: activeTab === b.id ? 'var(--text-primary)' : 'var(--text-dim)',
                boxShadow: activeTab === b.id ? 'inset 0 0 10px rgba(0,240,255,0.05)' : 'none',
              }}
              onClick={() => {
                setActiveTab(b.id as BenchmarkId);
                // Adjust active version selection if condition doesn't exist
                if (b.id === '07-cinematic-web-experience' && activeVersion === 'taste_simulated') {
                  setActiveVersion('actual_taste');
                } else if (b.id === '01-flutter-onboarding' && (activeVersion === 'actual_taste' || activeVersion === 'taste_simulated')) {
                  setActiveVersion('universal_ui_v2');
                }
              }}
            >
              <span>{BENCHMARK_MAP[b.id as BenchmarkId]?.title || b.id}</span>
              <span style={{ fontSize: '0.65rem', opacity: 0.7, marginLeft: '0.4rem', fontFamily: 'var(--font-mono)', color: activeTab === b.id ? 'var(--accent-cyan)' : 'var(--text-dim)' }}>
                [{BENCHMARK_MAP[b.id as BenchmarkId]?.domain}]
              </span>
            </button>
          ))}
        </div>

        {/* Benchmark Card */}
        <div className="benchmark-result reveal delay-200" style={{ position: 'relative', background: 'var(--bg-base)', border: '1px solid var(--border-strong)', padding: '3rem' }}>
          {/* Diagnostic Overlay */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none', backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '16px 16px', zIndex: 0 }}></div>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '20px', height: '20px', borderTop: '2px solid var(--accent-cyan)', borderLeft: '2px solid var(--accent-cyan)', pointerEvents: 'none' }}></div>
          <div style={{ position: 'absolute', bottom: 0, right: 0, width: '20px', height: '20px', borderBottom: '2px solid var(--accent-cyan)', borderRight: '2px solid var(--accent-cyan)', pointerEvents: 'none' }}></div>

          <div className="benchmark-data" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px dashed var(--border-strong)', paddingBottom: '1rem' }}>
              <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-primary)', margin: 0 }}>
                {BENCHMARK_MAP[activeTab]?.title}
              </h3>
              <span className="tech-label" style={{ margin: 0, color: 'var(--accent-cyan)' }}>[ EVALUATING PERFORMANCE ]</span>
            </div>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '3rem', lineHeight: '1.6', maxWidth: '80%' }}>
              <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>TASK PARAMETERS:</strong>
              {currentBenchmark.task}
            </p>

            {/* Version Selector Buttons */}
            <div className="version-selector" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1px', marginBottom: '3rem', background: 'var(--border-strong)', border: '1px solid var(--border-strong)' }}>
              {/* Universal UI V2 */}
              <button 
                className={`version-btn ${activeVersion === 'universal_ui_v2' ? 'active' : ''}`}
                style={{ background: activeVersion === 'universal_ui_v2' ? 'rgba(0, 240, 255, 0.05)' : 'var(--bg-surface)', border: 'none', padding: '1.5rem' }}
                onClick={() => setActiveVersion('universal_ui_v2')}
              >
                <span>Universal UI V2</span>
                <span className="version-score" style={{ color: activeVersion === 'universal_ui_v2' ? 'var(--accent-cyan)' : 'var(--text-dim)', fontSize: '1.25rem', textShadow: activeVersion === 'universal_ui_v2' ? '0 0 10px rgba(0,240,255,0.3)' : 'none' }}>
                  {currentBenchmark.results.universal_ui_v2?.total || 0} / 110
                </span>
              </button>

              {/* Actual Taste (if available) */}
              {hasActualTaste && (
                <button 
                  className={`version-btn ${activeVersion === 'actual_taste' ? 'active' : ''}`}
                  style={{ background: activeVersion === 'actual_taste' ? 'rgba(255, 255, 255, 0.05)' : 'var(--bg-surface)', border: 'none', padding: '1.5rem' }}
                  onClick={() => setActiveVersion('actual_taste')}
                >
                  <span>Actual Taste (Official)</span>
                  <span className="version-score" style={{ color: activeVersion === 'actual_taste' ? 'var(--text-primary)' : 'var(--text-dim)', fontSize: '1.25rem' }}>
                    {(currentBenchmark.results as { actual_taste?: { total: number } }).actual_taste?.total || 'N/A'} / 110
                  </span>
                </button>
              )}

              {/* Taste Simulated (if available) */}
              {hasTasteSimulated && (
                <button 
                  className={`version-btn ${activeVersion === 'taste_simulated' ? 'active' : ''}`}
                  style={{ background: activeVersion === 'taste_simulated' ? 'rgba(255, 255, 255, 0.05)' : 'var(--bg-surface)', border: 'none', padding: '1.5rem' }}
                  onClick={() => setActiveVersion('taste_simulated')}
                >
                  <span>Taste-simulated</span>
                  <span className="version-score" style={{ color: activeVersion === 'taste_simulated' ? 'var(--text-primary)' : 'var(--text-dim)', fontSize: '1.25rem' }}>
                    {(currentBenchmark.results as { taste_simulated?: { total: number } }).taste_simulated?.total || 'N/A'}
                  </span>
                </button>
              )}

              {/* Baseline AI */}
              <button 
                className={`version-btn ${activeVersion === 'baseline_ai' ? 'active' : ''}`}
                style={{ background: activeVersion === 'baseline_ai' ? 'rgba(248, 113, 113, 0.05)' : 'var(--bg-surface)', border: 'none', padding: '1.5rem' }}
                onClick={() => setActiveVersion('baseline_ai')}
              >
                <span>Baseline AI</span>
                <span className="version-score" style={{ color: activeVersion === 'baseline_ai' ? '#f87171' : 'var(--text-dim)', fontSize: '1.25rem' }}>
                  {currentBenchmark.results.baseline_ai?.total || 0} / 110
                </span>
              </button>
            </div>

            {/* Dimension Breakdown Grid */}
            {currentResults && typeof currentResults === 'object' && 'total' in currentResults && (
              <div className="score-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1px', background: 'var(--border-strong)', border: '1px solid var(--border-strong)' }}>
                {[
                  { label: 'Product Fit', value: currentResults.product_fit || currentResults.design_quality },
                  { label: 'Hierarchy & Space', value: currentResults.visual_hierarchy },
                  { label: 'Typography', value: currentResults.typography },
                  { label: 'Composition / Bento', value: currentResults.composition },
                  { label: 'Distinctiveness', value: currentResults.distinctiveness },
                  { label: 'Responsive Quality', value: currentResults.responsive_quality },
                  { label: 'Accessibility', value: currentResults.accessibility },
                  { label: 'Motion / States', value: currentResults.motion },
                  { label: 'Consistency', value: currentResults.consistency },
                  { label: 'Anti-Slop Strictness', value: currentResults.anti_slop }
                ].map((item, idx) => (
                  <div key={idx} className="score-item" style={{ background: 'var(--bg-base)', padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div className="score-label" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '0.1em', marginBottom: '1rem' }}>{item.label}</div>
                    <div className="score-value" style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', color: 'var(--text-primary)' }}>{item.value}<span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>/10</span></div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
