import { useState } from 'react';
import benchmarkData from './data/aggregate-results.json';

type BenchmarkId = '01-flutter-onboarding' | '02-web-landing-page' | '03-mobile-dashboard' | '04-ecommerce-storefront' | '05-game-ui' | '06-react-saas';
type Version = 'baseline_ai' | 'taste_simulated' | 'universal_ui_v2';

const BENCHMARK_MAP: Record<BenchmarkId, { title: string, folder: string }> = {
  '01-flutter-onboarding': { title: 'Flutter Onboarding', folder: 'flutter' },
  '02-web-landing-page': { title: 'Web Landing Page', folder: 'web-landing' },
  '03-mobile-dashboard': { title: 'Mobile Dashboard', folder: 'mobile-dashboard' },
  '04-ecommerce-storefront': { title: 'Ecommerce Storefront', folder: 'ecommerce' },
  '05-game-ui': { title: 'Game UI', folder: 'game_ui' },
  '06-react-saas': { title: 'React SaaS', folder: 'saas' }
};

export function BenchmarkShowcase() {
  const [activeTab, setActiveTab] = useState<BenchmarkId>('02-web-landing-page');
  const [activeVersion, setActiveVersion] = useState<Version>('universal_ui_v2');

  const currentBenchmark = benchmarkData.benchmarks.find(b => b.id === activeTab);
  if (!currentBenchmark) return null;

  const currentResults = currentBenchmark.results[activeVersion as keyof typeof currentBenchmark.results];
  const isTasteNull = activeTab === '01-flutter-onboarding' && activeVersion === 'taste_simulated';

  return (
    <section id="benchmarks" className="section" style={{ backgroundColor: 'var(--bg-base)' }}>
      <div className="container">
        <div className="reveal">
          <span className="tech-label">Empirical Evaluation</span>
          <h2 style={{ marginBottom: '1rem' }}>Controlled Benchmarks</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '44rem', marginBottom: '3rem' }}>
            The benchmark system is designed to compare UI approaches and identify failure modes. Current results are experimental evidence from controlled evaluations, not universal proof of superiority. We evaluate Universal UI V2 against Baseline AI, Taste-simulated controls, and officially executed Taste skills across distinct UI domains.
          </p>
        </div>

        <div className="benchmark-tabs reveal delay-100">
          {benchmarkData.benchmarks.map((b) => (
            <button
              key={b.id}
              className={`tab-button ${activeTab === b.id ? 'active' : ''}`}
              onClick={() => {
                setActiveTab(b.id as BenchmarkId);
                if (b.id === '01-flutter-onboarding' && activeVersion === 'taste_simulated') {
                  setActiveVersion('universal_ui_v2'); // Fallback if Taste is selected for Flutter
                }
              }}
            >
              {BENCHMARK_MAP[b.id as BenchmarkId]?.title || b.id}
            </button>
          ))}
        </div>

        <div className="benchmark-result reveal delay-200">
          <div className="benchmark-data">
            <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {BENCHMARK_MAP[activeTab].title}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '2rem' }}>
              {currentBenchmark.task}
            </p>

            <div className="version-selector">
              <button 
                className={`version-btn ${activeVersion === 'universal_ui_v2' ? 'active' : ''}`}
                onClick={() => setActiveVersion('universal_ui_v2')}
              >
                <span>Universal UI V2</span>
                <span className="version-score">{currentBenchmark.results.universal_ui_v2?.total || 0} / 110</span>
              </button>
              <button 
                className={`version-btn ${activeVersion === 'taste_simulated' ? 'active' : ''}`}
                onClick={() => setActiveVersion('taste_simulated')}
                disabled={activeTab === '01-flutter-onboarding'}
                style={{ opacity: activeTab === '01-flutter-onboarding' ? 0.5 : 1, cursor: activeTab === '01-flutter-onboarding' ? 'not-allowed' : 'pointer' }}
              >
                <span>Taste-simulated</span>
                <span className="version-score">{currentBenchmark.results.taste_simulated?.total || 'N/A'}</span>
              </button>
              <button 
                className={`version-btn ${activeVersion === 'baseline_ai' ? 'active' : ''}`}
                onClick={() => setActiveVersion('baseline_ai')}
              >
                <span>Baseline AI</span>
                <span className="version-score">{currentBenchmark.results.baseline_ai?.total || 0} / 110</span>
              </button>
            </div>

            {!isTasteNull && currentResults && typeof currentResults === 'object' && 'total' in currentResults && (
              <div className="score-grid">
                <div className="score-item">
                  <div className="score-label">Design Quality</div>
                  <div className="score-value">{currentResults.design_quality}/10</div>
                </div>
                <div className="score-item">
                  <div className="score-label">Product Fit</div>
                  <div className="score-value">{currentResults.product_fit}/10</div>
                </div>
                <div className="score-item">
                  <div className="score-label">Distinctiveness</div>
                  <div className="score-value">{currentResults.distinctiveness}/10</div>
                </div>
                <div className="score-item">
                  <div className="score-label">Anti-slop</div>
                  <div className="score-value">{currentResults.anti_slop}/10</div>
                </div>
              </div>
            )}
            {isTasteNull && (
              <div style={{ padding: '2rem 0', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', fontSize: '0.875rem' }}>
                Taste-simulated control not applicable for Flutter domain.
              </div>
            )}

            <div style={{ marginTop: '2rem', padding: '1rem', background: 'var(--bg-surface-elevated)', borderLeft: '2px solid var(--border-strong)' }}>
              <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                <strong>Disclaimer:</strong> Results are from this project's controlled internal evaluations. "Taste-simulated" refers to a simulation of documented Taste-style constraints.
              </p>
            </div>
          </div>
          
          <div className="benchmark-preview">
            {isTasteNull ? (
              <div style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>No Screenshot Available</div>
            ) : (
              <img 
                src={`/assets/benchmarks/${BENCHMARK_MAP[activeTab].folder}/phase_${activeVersion === 'baseline_ai' ? 'a_baseline' : activeVersion === 'taste_simulated' ? 'b_taste' : 'c_v2'}.png`} 
                alt={`${activeVersion} screenshot`} 
                className="benchmark-image"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
