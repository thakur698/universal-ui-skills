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
    <section id="benchmarks" className="section" style={{ backgroundColor: 'var(--bg-base)' }}>
      <div className="container">
        <div className="reveal">
          <span className="tech-label">Empirical Evaluation</span>
          <h2 style={{ marginBottom: '1rem' }}>Controlled 7-Domain Benchmark Suite</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '44rem', marginBottom: '3rem' }}>
            Evaluated under frozen <strong>Benchmark Protocol v1.0</strong> and <strong>Rubric v1.0 (110 points)</strong>. Compares Universal UI V2 against Baseline AI, Taste-simulated controls, and officially executed Taste skills across 7 real-world domains.
          </p>
        </div>

        {/* Benchmark Domain Tabs */}
        <div className="benchmark-tabs reveal delay-100" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
          {benchmarkData.benchmarks.map((b) => (
            <button
              key={b.id}
              className={`tab-button ${activeTab === b.id ? 'active' : ''}`}
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
              <span style={{ fontSize: '0.65rem', opacity: 0.7, marginLeft: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                [{BENCHMARK_MAP[b.id as BenchmarkId]?.domain}]
              </span>
            </button>
          ))}
        </div>

        {/* Benchmark Card */}
        <div className="benchmark-result reveal delay-200">
          <div className="benchmark-data">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-primary)', margin: 0 }}>
                {BENCHMARK_MAP[activeTab]?.title}
              </h3>
              <span className="tech-label" style={{ margin: 0 }}>RUBRIC V1.0 // 110 PTS</span>
            </div>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '2rem', lineHeight: '1.6' }}>
              {currentBenchmark.task}
            </p>

            {/* Version Selector Buttons */}
            <div className="version-selector" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem', marginBottom: '2rem' }}>
              {/* Universal UI V2 */}
              <button 
                className={`version-btn ${activeVersion === 'universal_ui_v2' ? 'active' : ''}`}
                onClick={() => setActiveVersion('universal_ui_v2')}
              >
                <span>Universal UI V2</span>
                <span className="version-score" style={{ color: 'var(--accent-cyan)' }}>
                  {currentBenchmark.results.universal_ui_v2?.total || 0} / 110
                </span>
              </button>

              {/* Actual Taste (if available) */}
              {hasActualTaste && (
                <button 
                  className={`version-btn ${activeVersion === 'actual_taste' ? 'active' : ''}`}
                  onClick={() => setActiveVersion('actual_taste')}
                >
                  <span>Actual Taste (Official)</span>
                  <span className="version-score">
                    {(currentBenchmark.results as { actual_taste?: { total: number } }).actual_taste?.total || 'N/A'} / 110
                  </span>
                </button>
              )}

              {/* Taste Simulated (if available) */}
              {hasTasteSimulated && (
                <button 
                  className={`version-btn ${activeVersion === 'taste_simulated' ? 'active' : ''}`}
                  onClick={() => setActiveVersion('taste_simulated')}
                >
                  <span>Taste-simulated</span>
                  <span className="version-score">
                    {(currentBenchmark.results as { taste_simulated?: { total: number } }).taste_simulated?.total || 'N/A'}
                  </span>
                </button>
              )}

              {/* Baseline AI */}
              <button 
                className={`version-btn ${activeVersion === 'baseline_ai' ? 'active' : ''}`}
                onClick={() => setActiveVersion('baseline_ai')}
              >
                <span>Baseline AI</span>
                <span className="version-score">
                  {currentBenchmark.results.baseline_ai?.total || 0} / 110
                </span>
              </button>
            </div>

            {/* Dimension Breakdown Grid */}
            {currentResults && typeof currentResults === 'object' && 'total' in currentResults && (
              <div className="score-grid">
                <div className="score-item">
                  <div className="score-label">Product Fit</div>
                  <div className="score-value">{currentResults.product_fit || currentResults.design_quality}/10</div>
                </div>
                <div className="score-item">
                  <div className="score-label">Hierarchy & Space</div>
                  <div className="score-value">{currentResults.visual_hierarchy}/10</div>
                </div>
                <div className="score-item">
                  <div className="score-label">Typography</div>
                  <div className="score-value">{currentResults.typography}/10</div>
                </div>
                <div className="score-item">
                  <div className="score-label">Composition / Bento</div>
                  <div className="score-value">{currentResults.composition}/10</div>
                </div>
                <div className="score-item">
                  <div className="score-label">Distinctiveness</div>
                  <div className="score-value">{currentResults.distinctiveness}/10</div>
                </div>
                <div className="score-item">
                  <div className="score-label">Responsive Quality</div>
                  <div className="score-value">{currentResults.responsive_quality}/10</div>
                </div>
                <div className="score-item">
                  <div className="score-label">Accessibility</div>
                  <div className="score-value">{currentResults.accessibility}/10</div>
                </div>
                <div className="score-item">
                  <div className="score-label">Motion / States</div>
                  <div className="score-value">{currentResults.motion}/10</div>
                </div>
                <div className="score-item">
                  <div className="score-label">Consistency</div>
                  <div className="score-value">{currentResults.consistency}/10</div>
                </div>
                <div className="score-item">
                  <div className="score-label">Anti-Slop Strictness</div>
                  <div className="score-value">{currentResults.anti_slop}/10</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
