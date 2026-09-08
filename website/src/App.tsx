import { useEffect } from 'react';
import { ArrowRight, Check, X, Code2, MonitorPlay, Sparkles, Box, Workflow, Monitor, Wrench, Package } from 'lucide-react';

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
            <div className="text-sm font-mono text-text-muted mb-4 uppercase tracking-widest">Universal UI Skills V2</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6 text-text-primary tracking-tight">
              An adaptive design engine for AI coding agents.
            </h1>
            <p className="text-xl text-text-secondary mb-8 font-sans max-w-2xl mx-auto leading-relaxed">
              Turn product context into distinctive, production-ready interfaces through design direction, references, composition, motion, visual critique, and pre-flight QA.
            </p>
            <div className="flex-gap">
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
            <span className="tech-label">The Problem</span>
            <h2>Functional does not mean well-designed.</h2>
            <p style={{ color: 'var(--text-secondary)' }}>
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

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <div className="reveal">
            <span className="tech-label">Architecture</span>
            <h2 style={{ marginBottom: '3rem' }}>The Skill System</h2>
          </div>
          
          <div className="grid-3 reveal delay-100" style={{ borderTop: '1px solid var(--border-subtle)', borderLeft: '1px solid var(--border-subtle)' }}>
            {[
              { icon: <MonitorPlay size={20} />, name: 'ui-master', desc: 'The core orchestration layer.' },
              { icon: <Wrench size={20} />, name: 'ui-tool-discovery', desc: 'Detects available MCPs and tools.' },
              { icon: <Sparkles size={20} />, name: 'ui-design-direction', desc: 'Sets visual identity before coding.' },
              { icon: <Box size={20} />, name: 'ui-components-design-system', desc: 'Translates rules to tokens.' },
              { icon: <Monitor size={20} />, name: 'ui-layout-responsive', desc: 'Ensures structural adaptability.' },
              { icon: <Workflow size={20} />, name: 'ui-motion', desc: 'Adds communicative interaction.' },
              { icon: <Package size={20} />, name: 'ui-assets', desc: 'Manages semantic iconography.' },
              { icon: <Check size={20} />, name: 'ui-accessibility', desc: 'Validates inclusiveness.' },
              { icon: <Code2 size={20} />, name: 'ui-visual-qa', desc: 'Performs layout inspection.' }
            ].map((skill, i) => (
              <div key={i} className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-title">{skill.name}</div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: 0 }}>{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="section" style={{ backgroundColor: 'var(--bg-surface-elevated)' }}>
        <div className="container grid-2">
          <div>
            <span className="tech-label">Discovery Contract</span>
            <h2>We don't fake execution.</h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              The system discovers what tools are actually available before using them. It classifies every tool strictly:
            </p>
            <div>
              <div className="status-row">
                <span className="text-white">AVAILABLE + EXECUTABLE</span>
                <span style={{ color: 'var(--text-secondary)' }}>Agent can invoke</span>
              </div>
              <div className="status-row">
                <span className="text-white">AVAILABLE + MANUAL</span>
                <span style={{ color: 'var(--text-secondary)' }}>Requires user</span>
              </div>
              <div className="status-row">
                <span className="text-white">NOT AVAILABLE</span>
                <span style={{ color: 'var(--text-secondary)' }}>Agent uses fallback</span>
              </div>
              <div className="status-row" style={{ border: 'none' }}>
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
                  <th>Tool</th>
                  <th>Category</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-white">Playwright</td>
                  <td style={{ color: 'var(--text-secondary)' }}>Visual QA</td>
                  <td style={{ color: 'var(--accent-cyan)' }}>VERIFIED</td>
                </tr>
                <tr>
                  <td className="text-white">Axe-core</td>
                  <td style={{ color: 'var(--text-secondary)' }}>Accessibility</td>
                  <td style={{ color: 'var(--accent-cyan)' }}>VERIFIED</td>
                </tr>
                <tr>
                  <td className="text-white">Rive</td>
                  <td style={{ color: 'var(--text-secondary)' }}>Motion</td>
                  <td style={{ color: 'var(--text-secondary)' }}>PARTIAL</td>
                </tr>
                <tr>
                  <td className="text-white">Figma</td>
                  <td style={{ color: 'var(--text-secondary)' }}>Design</td>
                  <td style={{ color: 'var(--text-secondary)' }}>PARTIAL</td>
                </tr>
              </tbody>
            </table>
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
