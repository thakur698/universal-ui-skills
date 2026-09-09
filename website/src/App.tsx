import { useEffect } from 'react';
import { ArrowRight, Check, X, Code2, MonitorPlay, Sparkles, Box, Workflow, Monitor } from 'lucide-react';
import { BenchmarkShowcase } from './BenchmarkShowcase';
import { RiveShowcase } from './RiveShowcase';
import { LottieShowcase } from './LottieShowcase';
import { VisualQAShowcase } from './VisualQAShowcase';
import registry from '../../integrations/registry.json';

// Native IntersectionObserver Hook for Scroll Reveals
function useIntersectionObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optional: observer.unobserve(entry.target) if we only want it to reveal once
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-8.8a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.2-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a5.5 5.5 0 0 0-.2 3.8 5.5 5.5 0 0 0-1.5 3.8c0 7.3 3 8.5 6 8.8-.6.5-1 1.4-1 3.2v4"></path><path d="M9 18c-4.5 1.5-5-2.5-7-3"></path></svg>
);

function App() {
  useIntersectionObserver();

  return (
    <div>
      {/* Navigation */}
      <nav className="nav">
        <div className="container flex-between">
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', letterSpacing: '-0.02em' }}>Universal UI Skills</div>
          <div className="nav-links">
            <a href="#skills">Skills</a>
            <a href="#workflow">Workflow</a>
            <a href="#integrations">Integrations</a>
            <a href="#docs">Docs</a>
          </div>
          <a href="https://github.com/thakur698/universal-ui-skills" target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}>
            <GithubIcon /> GitHub
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="section hero-bg" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container grid-2">
          <div className="reveal">
            <div className="text-sm font-mono text-text-muted mb-4 uppercase tracking-widest text-anim-blur" style={{ color: 'var(--text-secondary)' }}>Universal UI Skills V2</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6 text-text-primary tracking-tight text-anim-blur text-anim-delay-1" style={{ borderBottom: '2px solid var(--text-primary)', display: 'inline-block', paddingBottom: '0.5rem' }}>
              Adaptive Design Engine.
            </h1>
            <p className="text-xl text-text-secondary mb-8 font-sans max-w-2xl mx-auto leading-relaxed text-anim-blur text-anim-delay-2">
              Turn product context into distinctive, production-ready interfaces through design direction, references, composition, motion, visual critique, and pre-flight QA.
            </p>
            <div className="flex-gap text-anim-blur text-anim-delay-3">
              <a href="#install" className="btn-primary">
                Get Started <ArrowRight size={16} />
              </a>
              <a href="https://github.com/thakur698/universal-ui-skills" target="_blank" rel="noreferrer" className="btn-secondary">
                View on GitHub
              </a>
            </div>
          </div>
          
          {/* Hero Visual: CSS Orchestration Pipeline V2 */}
          <div className="hero-diagram-container reveal delay-200">
            <div className="diagram-wrapper">
              <div className="diagram-node">Brief</div>
              <div className="diagram-line-v flow-v"></div>
              
              <div className="diagram-node active">Design Read</div>
              <div className="diagram-line-v flow-v"></div>

              <div className="diagram-node active" style={{ animationDelay: '0.2s' }}>References & Dials</div>
              <div className="diagram-line-v flow-v"></div>
              
              <div className="diagram-branch">
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div className="diagram-line-h flow-h" style={{ width: '100%', position: 'absolute', top: 0 }}></div>
                  <div className="diagram-line-v flow-v" style={{ height: '1rem' }}></div>
                  <div className="diagram-node">Composition</div>
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div className="diagram-line-v flow-v" style={{ height: '1rem', marginTop: 0 }}></div>
                  <div className="diagram-node">System</div>
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div className="diagram-line-v flow-v" style={{ height: '1rem' }}></div>
                  <div className="diagram-node">Asset</div>
                </div>
              </div>
              
              <div className="diagram-line-v flow-v"></div>
              <div className="diagram-node active" style={{ animationDelay: '0.5s' }}>Build (V1 Layer)</div>
              <div className="diagram-line-v flow-v"></div>
              
              <div className="diagram-branch">
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div className="diagram-line-h flow-h" style={{ width: '100%', position: 'absolute', top: 0 }}></div>
                  <div className="diagram-line-v flow-v" style={{ height: '1rem' }}></div>
                  <div className="diagram-node active" style={{ animationDelay: '0.7s' }}>Critique Loop</div>
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div className="diagram-line-v flow-v" style={{ height: '1rem' }}></div>
                  <div className="diagram-node">Pre-Flight</div>
                </div>
              </div>
              
              <div className="diagram-line-v flow-v"></div>
              <div className="diagram-node active" style={{ borderStyle: 'dashed' }}>Final UI</div>
            </div>
          </div>
        </div>
      </header>

      {/* The Problem (Anti-Slop) */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="text-center mx-auto max-w-2xl reveal" style={{ marginBottom: '4rem' }}>
            <span className="tech-label text-anim-blur">The Problem</span>
            <h2 className="text-anim-blur text-anim-delay-1">Functional does not mean well-designed.</h2>
            <p className="text-anim-blur text-anim-delay-2" style={{ color: 'var(--text-secondary)' }}>
              AI can generate code quickly, but without strict orchestration, it relies on generic templates. We call this "AI Slop."
            </p>
          </div>

          <div className="grid-2">
            <div className="anti-slop-card reveal delay-100">
              <div className="list-item" style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
                <X size={16} className="text-red" /> <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', color: '#f87171' }}>GENERIC AI UI</span>
              </div>
              <div className="list-item"><span className="text-red">×</span> Every section is a card</div>
              <div className="list-item"><span className="text-red">×</span> Excessive pill shapes</div>
              <div className="list-item"><span className="text-red">×</span> Random purple/blue gradients</div>
              <div className="list-item"><span className="text-red">×</span> Meaningless drop-shadows</div>
              <div className="list-item"><span className="text-red">×</span> Emoji replacing semantic icons</div>
            </div>

            <div className="anti-slop-card anti-slop-card-accent reveal delay-200">
              <div className="list-item" style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
                <Check size={16} className="text-white" /> <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', color: '#fff' }}>PRODUCT-SPECIFIC UI</span>
              </div>
              <div className="list-item"><span className="text-white">✓</span> Intentional design direction</div>
              <div className="list-item"><span className="text-white">✓</span> Strict typographic hierarchy</div>
              <div className="list-item"><span className="text-white">✓</span> Coherent surface strategy</div>
              <div className="list-item"><span className="text-white">✓</span> Purposeful motion</div>
              <div className="list-item"><span className="text-white">✓</span> Explicit visual QA checks</div>
            </div>
          </div>
        </div>
      </section>

      <hr style={{ border: 'none', borderTop: '1px solid var(--border-strong)', margin: 0 }} />

      <BenchmarkShowcase />

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <div className="reveal">
            <span className="tech-label">Architecture</span>
            <h2 style={{ marginBottom: '3rem' }}>The Skill System</h2>
          </div>
          
          <div className="bento-grid reveal delay-100">
            <div className="bento-item bento-span-2">
              <div className="skill-icon"><MonitorPlay size={20} /></div>
              <div className="skill-title">ui-master</div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: 0 }}>The core orchestration layer. Enforces the strict V2 pipeline.</p>
            </div>
            <div className="bento-item">
              <div className="skill-icon"><Sparkles size={20} /></div>
              <div className="skill-title">ui-design-direction</div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: 0 }}>Sets visual identity before coding.</p>
            </div>
            
            <div className="bento-item">
              <div className="skill-icon"><Box size={20} /></div>
              <div className="skill-title">ui-components-design-system</div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: 0 }}>Translates rules to tokens.</p>
            </div>
            <div className="bento-item">
              <div className="skill-icon"><Monitor size={20} /></div>
              <div className="skill-title">ui-layout-responsive</div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: 0 }}>Ensures structural adaptability.</p>
            </div>
            <div className="bento-item">
              <div className="skill-icon"><Workflow size={20} /></div>
              <div className="skill-title">ui-motion</div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: 0 }}>Adds communicative interaction.</p>
            </div>

            <div className="bento-item bento-span-2" style={{ borderLeft: '2px solid var(--accent-cyan)' }}>
              <div className="skill-icon" style={{ color: 'var(--accent-cyan)' }}><Code2 size={20} /></div>
              <div className="skill-title" style={{ color: 'var(--text-primary)' }}>ui-visual-critic</div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: 0 }}>The mandatory AI critique feedback loop that forces refinement.</p>
            </div>
            <div className="bento-item" style={{ background: 'var(--bg-surface-elevated)' }}>
              <div className="skill-icon"><Check size={20} /></div>
              <div className="skill-title">ui-preflight</div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: 0 }}>The final validation gate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="section" style={{ backgroundColor: 'var(--bg-surface-elevated)' }}>
        <div className="container">
          <div className="terminal-window reveal">
            <div className="terminal-header">
              <div className="terminal-dot"></div>
              <div className="terminal-dot"></div>
              <div className="terminal-dot"></div>
              <div style={{ marginLeft: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                bash - universal-ui-v2
              </div>
            </div>
            <div className="terminal-body grid-2">
              <div>
                <span className="tech-label text-anim-blur">Discovery Contract</span>
                <h2 className="text-anim-blur text-anim-delay-1">We don't fake execution.</h2>
                <p className="text-anim-blur text-anim-delay-2" style={{ color: 'var(--text-secondary)' }}>
                  The system discovers what tools are actually available before using them. It classifies every tool strictly:
                </p>
                <div>
                  <div className="status-row text-anim-blur text-anim-delay-3">
                    <span className="text-white">AVAILABLE + EXECUTABLE</span>
                    <span style={{ color: 'var(--text-secondary)' }}>Agent can invoke</span>
                  </div>
                  <div className="status-row text-anim-blur text-anim-delay-3">
                    <span className="text-white">AVAILABLE + MANUAL</span>
                    <span style={{ color: 'var(--text-secondary)' }}>Requires user</span>
                  </div>
                  <div className="status-row text-anim-blur text-anim-delay-3">
                    <span className="text-white">NOT AVAILABLE</span>
                    <span style={{ color: 'var(--text-secondary)' }}>Agent uses fallback</span>
                  </div>
                  <div className="status-row text-anim-blur text-anim-delay-3" style={{ border: 'none' }}>
                    <span className="text-white">REQUIRES USER SETUP</span>
                    <span style={{ color: 'var(--text-secondary)' }}>Missing credentials</span>
                  </div>
                </div>
              </div>
              
              <div>
                <span className="tech-label">Registry</span>
                <h2 style={{ marginBottom: '1.5rem' }}>Integrations</h2>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Integration</th>
                      <th>Verified Environment</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.values(registry).map((integration, idx) => (
                      <tr key={idx}>
                        <td className="text-white font-mono">{integration.tool}</td>
                        <td style={{ color: 'var(--text-secondary)' }}>{integration.verified_environment}</td>
                        <td style={{ color: integration.repository_status === 'VERIFIED' ? 'var(--accent-cyan)' : 'var(--text-secondary)' }}>
                          {integration.repository_status === 'VERIFIED' ? '✓ Verified' : '○ Pending'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation */}
      <section id="install" className="section text-center">
        <div className="container max-w-2xl mx-auto">
          <h2>Start orchestrating UI.</h2>
          <div className="code-block" style={{ marginBottom: '1.5rem' }}>
            <code style={{ color: 'var(--text-primary)' }}>npx skills add https://github.com/thakur698/universal-ui-skills</code>
            <button 
              onClick={() => navigator.clipboard.writeText('npx skills add https://github.com/thakur698/universal-ui-skills')}
              style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', fontFamily: 'var(--font-mono)' }}
            >
              Copy
            </button>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
            Compatible with Antigravity, Claude Code (via plugin), and Cursor.
          </p>
          <a href="https://github.com/thakur698/universal-ui-skills" target="_blank" rel="noreferrer" className="btn-primary">
            <GithubIcon /> Star on GitHub
          </a>
        </div>
      </section>

      <VisualQAShowcase />
      <LottieShowcase />
      <RiveShowcase />

      {/* Footer */}
      <footer style={{ backgroundColor: 'var(--bg-surface)', padding: '3rem 0' }}>
        <div className="container flex-between" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
          <div>Universal UI Skills © 2024</div>
          <div className="footer-links">
            <a href="https://github.com/thakur698/universal-ui-skills/issues">Issues</a>
            <a href="https://github.com/thakur698/universal-ui-skills/pulls">Contribute</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
