import { useEffect, useState } from 'react';
import { ArrowRight, Check, X, Code2, MonitorPlay, Sparkles, Box, Workflow, Layers, Video, Palette, Sun, Moon } from 'lucide-react';
import { BenchmarkShowcase } from './BenchmarkShowcase';
import { CinematicStorySection } from './CinematicStorySection';
import { AdaptiveOrchestrationShowcase } from './AdaptiveOrchestrationShowcase';
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
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useIntersectionObserver();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const [activeStoryStage, setActiveStoryStage] = useState(0);

  const storyStages = [
    { title: "Brief & Design Read", desc: "Infers the true domain, audience, and aesthetic constraints before any code is generated." },
    { title: "Composition & Media Staging", desc: "Prioritizes editorial imagery, technical diagrams, and asymmetric bento layouts." },
    { title: "Scroll Choreography & Motion", desc: "Pins narrative sections, syncs video/frame timelines, and guards reduced-motion modes." },
    { title: "Adversarial Critic & Pre-Flight", desc: "Automated multi-cycle visual QA and hard binary gates preventing broken deliverables." }
  ];

  return (
    <div>
      {/* Navigation */}
      <nav className="nav">
        <div className="container flex-between">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: '1.1rem', letterSpacing: '0.1em' }}>UNIVERSAL // UI</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', background: 'rgba(0, 229, 255, 0.1)', color: 'var(--accent-cyan)', padding: '0.2rem 0.5rem', border: '1px solid rgba(0, 229, 255, 0.2)' }}>
              ENGINE V2
            </span>
          </div>
          <div className="nav-links">
            <a href="#pipeline">Pipeline</a>
            <a href="#benchmarks">Benchmarks</a>
            <a href="#skills">17 Skills</a>
            <a href="#reproduction">Reproduction</a>
            <a href="#integrations">Integrations</a>
          </div>
          <div className="flex-gap" style={{ alignItems: 'center' }}>
            <button 
              onClick={toggleTheme} 
              style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center', padding: '0.5rem' }}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <a href="https://github.com/thakur698/universal-ui-skills" target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}>
              <GithubIcon /> GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="section hero-bg" style={{ borderBottom: '1px solid var(--border-subtle)', padding: '8rem 0 6rem 0' }}>
        <div className="container grid-2">
          <div className="reveal">
            <div className="text-sm font-mono mb-4 uppercase tracking-widest text-anim-blur" style={{ color: 'var(--accent-cyan)' }}>
              Adaptive Design Engine for Coding Agents
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6 text-text-primary tracking-tight text-anim-blur text-anim-delay-1" style={{ lineHeight: 1.05 }}>
              From Generic Code<br />to Editorial Craft.
            </h1>
            <p className="text-xl text-text-secondary mb-8 font-sans max-w-2xl leading-relaxed text-anim-blur text-anim-delay-2" style={{ fontSize: '1.15rem', color: 'var(--text-secondary)' }}>
              Universal UI Skills V2 replaces generic AI defaults with an orchestrated 19-stage pipeline: media-first composition, scroll choreography, parameterized design dials, adversarial visual critique, and pre-flight gates.
            </p>
            <div className="flex-gap text-anim-blur text-anim-delay-3">
              <a href="#benchmarks" className="btn-primary">
                Explore 7-Domain Evidence <ArrowRight size={16} />
              </a>
              <a href="#install" className="btn-secondary">
                Install Engine
              </a>
            </div>
          </div>
          
          {/* Hero Visual: 19-Stage Orchestration Pipeline */}
          <div className="hero-diagram-container reveal delay-200">
            <div className="diagram-wrapper">
              <div className="diagram-node">01. Brief</div>
              <div className="diagram-line-v flow-v"></div>
              
              <div className="diagram-node active">02. Design Read & Dials</div>
              <div className="diagram-line-v flow-v"></div>

              <div className="diagram-branch">
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div className="diagram-node" style={{ fontSize: '0.7rem' }}>Composition</div>
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div className="diagram-node" style={{ fontSize: '0.7rem' }}>Media Plan</div>
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div className="diagram-node" style={{ fontSize: '0.7rem' }}>Scroll Story</div>
                </div>
              </div>

              <div className="diagram-line-v flow-v"></div>
              <div className="diagram-node active" style={{ animationDelay: '0.4s' }}>06. Implementation (React / Flutter / Web)</div>
              <div className="diagram-line-v flow-v"></div>

              <div className="diagram-branch">
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div className="diagram-node active" style={{ animationDelay: '0.6s', color: 'var(--accent-cyan)' }}>Visual Critic (Fix Loop)</div>
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div className="diagram-node">Pre-Flight Gate</div>
                </div>
              </div>
              
              <div className="diagram-line-v flow-v"></div>
              <div className="diagram-node active" style={{ borderStyle: 'dashed', borderColor: 'var(--accent-cyan)', color: 'var(--accent-cyan)' }}>19. Final UI Deliverable</div>
            </div>
          </div>
        </div>
      </header>

      {/* Interactive Storytelling Stage Showcase */}
      <section id="pipeline" className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="reveal" style={{ marginBottom: '3.5rem' }}>
            <span className="tech-label">Interactive Engine Capabilities</span>
            <h2>How the V2 Architecture Operates</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '44rem' }}>
              Instead of prompting a model to "make it modern," Universal UI V2 deploys specialized skills that execute deterministic design choices at each phase.
            </p>
          </div>

          <div className="grid-2 reveal delay-100">
            {/* Left selector */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {storyStages.map((stage, idx) => (
                <div 
                  key={idx}
                  onClick={() => setActiveStoryStage(idx)}
                  style={{
                    padding: '1.5rem',
                    background: activeStoryStage === idx ? 'var(--bg-surface-elevated)' : 'transparent',
                    border: `1px solid ${activeStoryStage === idx ? 'var(--accent-cyan)' : 'var(--border-subtle)'}`,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: activeStoryStage === idx ? 'var(--accent-cyan)' : 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                    STAGE 0{idx + 1}
                  </div>
                  <h3 style={{ fontSize: '1.1rem', margin: '0 0 0.5rem 0', color: 'var(--text-primary)' }}>{stage.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: 0 }}>{stage.desc}</p>
                </div>
              ))}
            </div>

            {/* Right preview simulation */}
            <div style={{ background: 'var(--bg-base)', border: '1px solid var(--border-strong)', padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                  <span>ACTIVE SIMULATOR // STAGE 0{activeStoryStage + 1}</span>
                  <span style={{ color: 'var(--accent-cyan)' }}>STATUS: ENFORCED</span>
                </div>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>{storyStages[activeStoryStage].title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{storyStages[activeStoryStage].desc}</p>
              </div>

              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem', display: 'flex', gap: '2rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
                <div>
                  <span style={{ color: 'var(--text-secondary)', display: 'block' }}>DIAL TUNING</span>
                  <strong style={{ color: 'var(--text-primary)' }}>1–10 QUANTITATIVE</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--text-secondary)', display: 'block' }}>REDUCED MOTION</span>
                  <strong style={{ color: 'var(--accent-cyan)' }}>PASS // ACCESSIBLE</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--text-secondary)', display: 'block' }}>EVALUATOR AGREEMENT</span>
                  <strong style={{ color: 'var(--text-primary)' }}>$\rho = 0.98$</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Cinematic Scroll Story Section */}
      <CinematicStorySection />

      {/* The Problem (Anti-Slop Comparison) */}
      <section className="section" style={{ backgroundColor: 'var(--bg-base)' }}>
        <div className="container">
          <div className="text-center mx-auto max-w-2xl reveal" style={{ marginBottom: '4rem' }}>
            <span className="tech-label text-anim-blur">The Problem</span>
            <h2 className="text-anim-blur text-anim-delay-1">Functional code is not good design.</h2>
            <p className="text-anim-blur text-anim-delay-2" style={{ color: 'var(--text-secondary)' }}>
              LLMs jump to generic defaults when unguided. Universal UI V2 replaces templated slop with domain-calibrated design rules.
            </p>
          </div>

          <div className="grid-2">
            <div className="anti-slop-card reveal delay-100">
              <div className="list-item" style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
                <X size={16} className="text-red" /> <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', color: '#f87171' }}>GENERIC AI DEFAULTS</span>
              </div>
              <div className="list-item"><span className="text-red">×</span> 3-column identical card grids on every page</div>
              <div className="list-item"><span className="text-red">×</span> Purple-to-indigo gradient text on dark mesh</div>
              <div className="list-item"><span className="text-red">×</span> Decorative animation that hurts reading</div>
              <div className="list-item"><span className="text-red">×</span> Emojis substituted for semantic iconography</div>
              <div className="list-item"><span className="text-red">×</span> Broken layout when JavaScript/motion is disabled</div>
            </div>

            <div className="anti-slop-card anti-slop-card-accent reveal delay-200">
              <div className="list-item" style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
                <Check size={16} style={{ color: 'var(--text-primary)' }} /> <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', color: 'var(--text-primary)' }}>UNIVERSAL UI V2 ENGINE</span>
              </div>
              <div className="list-item"><span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>✓</span> Media-first composition & diagrams</div>
              <div className="list-item"><span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>✓</span> Pinned storytelling & deterministic scrubbing</div>
              <div className="list-item"><span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>✓</span> Parameterized design dials (Density, Variance, Motion)</div>
              <div className="list-item"><span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>✓</span> Adversarial visual critic refinement loop</div>
              <div className="list-item"><span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>✓</span> Full `@media (prefers-reduced-motion)` fallbacks</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7-Domain Benchmark Showcase */}
      <BenchmarkShowcase />

      {/* 17 Skills Inventory Bento */}
      <section id="skills" className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="reveal">
            <span className="tech-label">Architecture</span>
            <h2 style={{ marginBottom: '1rem' }}>The 17-Skill System</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '44rem', marginBottom: '3rem' }}>
              Modular skills that compose dynamically based on the project's design read and target technology.
            </p>
          </div>
          
          <div className="bento-grid reveal delay-100">
            <div className="bento-item bento-span-2" style={{ borderLeft: '3px solid var(--accent-cyan)' }}>
              <div className="skill-icon"><MonitorPlay size={20} /></div>
              <div className="skill-title">ui-master</div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: 0 }}>Master orchestration layer. Enforces the 19-stage pipeline from brief to pre-flight.</p>
            </div>
            
            <div className="bento-item">
              <div className="skill-icon"><Palette size={20} /></div>
              <div className="skill-title">ui-design-dials</div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: 0 }}>11 quantitative 1–10 metrics controlling density, variance, and motion.</p>
            </div>

            <div className="bento-item">
              <div className="skill-icon"><Video size={20} /></div>
              <div className="skill-title">ui-scroll-storytelling</div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: 0 }}>Choreographs pinned sections, depth tracks, and progressive disclosure.</p>
            </div>

            <div className="bento-item">
              <div className="skill-icon"><Layers size={20} /></div>
              <div className="skill-title">ui-media-composition</div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: 0 }}>Prioritizes full-bleed imagery and technical diagrams over card slop.</p>
            </div>

            <div className="bento-item">
              <div className="skill-icon"><Workflow size={20} /></div>
              <div className="skill-title">ui-cinematic-motion</div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: 0 }}>Spring physics, multi-plane depth, and staged hero reveals.</p>
            </div>

            <div className="bento-item">
              <div className="skill-icon"><Sparkles size={20} /></div>
              <div className="skill-title">ui-creative-director</div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: 0 }}>Generates the definitive Product Design Read before writing code.</p>
            </div>

            <div className="bento-item bento-span-2" style={{ background: 'var(--bg-surface-elevated)' }}>
              <div className="skill-icon" style={{ color: 'var(--accent-cyan)' }}><Code2 size={20} /></div>
              <div className="skill-title">ui-visual-critic</div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: 0 }}>Adversarial feedback loop scoring 14 design dimensions to drive fixes.</p>
            </div>

            <div className="bento-item">
              <div className="skill-icon"><Box size={20} /></div>
              <div className="skill-title">ui-preflight</div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: 0 }}>Hard mechanical pass/fail gate preventing broken UI delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* External Reproduction & Generalization Track */}
      <section id="reproduction" className="section" style={{ backgroundColor: 'var(--bg-base)' }}>
        <div className="container">
          <div className="reveal">
            <span className="tech-label">Scientific Rigor</span>
            <h2 style={{ marginBottom: '1rem' }}>External Reproduction & Cost Telemetry</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '44rem', marginBottom: '3rem' }}>
              We evaluate generalization on out-of-distribution briefs with sealed telemetry measuring both quality scores and process costs (time, tokens, revisions).
            </p>
          </div>

          <div className="grid-2 reveal delay-100">
            <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', padding: '2.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>5 Unseen Out-of-Distribution Tasks</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>
                  <span>01 // Distributed DB Portal (SRE)</span>
                  <strong style={{ color: 'var(--accent-cyan)' }}>95 / 110 (+2 vs Taste)</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>
                  <span>02 // Clinical Paramedic Mobile</span>
                  <strong style={{ color: 'var(--accent-cyan)' }}>100 / 110 (+11 vs Taste)</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>
                  <span>03 // Haute Horlogerie Configurator</span>
                  <strong style={{ color: 'var(--accent-cyan)' }}>97 / 110 (+4 vs Taste)</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>
                  <span>04 // Autonomous Fleet NOC Cockpit</span>
                  <strong style={{ color: 'var(--accent-cyan)' }}>99 / 110 (+4 vs Taste)</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem' }}>
                  <span>05 // Hadal Zone Deep-Sea Story</span>
                  <strong style={{ color: 'var(--accent-cyan)' }}>103 / 110 (+11 vs Taste)</strong>
                </div>
              </div>
            </div>

            <div style={{ background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-subtle)', padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Key Cost & Quality Takeaway</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  V2 averaged <strong>98.8 / 110</strong> across unseen tasks (vs. Taste's 92.4 and Baseline's 41.4). The +6.4 point margin required 2.36x tokens and 2.18x time—demonstrating massive ROI on mobile and cinematic storytelling, while identifying optimization opportunities on simple text portals.
                </p>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                PROTOCOL: DOUBLE-BLIND RANDOMIZED // SPEARMAN $\rho = 0.98$
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Adaptive Orchestration Depth Interactive Showcase */}
      <AdaptiveOrchestrationShowcase />

      {/* Integrations */}
      <section id="integrations" className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="terminal-window reveal">
            <div className="terminal-header">
              <div className="terminal-dot"></div>
              <div className="terminal-dot"></div>
              <div className="terminal-dot"></div>
              <div style={{ marginLeft: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                bash — universal-ui-skills-v2
              </div>
            </div>
            <div className="terminal-body grid-2">
              <div>
                <span className="tech-label text-anim-blur">Discovery Contract</span>
                <h2 className="text-anim-blur text-anim-delay-1">We don't fake execution.</h2>
                <p className="text-anim-blur text-anim-delay-2" style={{ color: 'var(--text-secondary)' }}>
                  The engine automatically inspects the environment to verify which UI libraries and rendering engines are actually executable before invoking them.
                </p>
                <div>
                  <div className="status-row text-anim-blur text-anim-delay-3">
                    <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>AVAILABLE + EXECUTABLE</span>
                    <span style={{ color: 'var(--text-secondary)' }}>Agent can invoke</span>
                  </div>
                  <div className="status-row text-anim-blur text-anim-delay-3">
                    <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>AVAILABLE + MANUAL</span>
                    <span style={{ color: 'var(--text-secondary)' }}>Requires user</span>
                  </div>
                  <div className="status-row text-anim-blur text-anim-delay-3">
                    <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>NOT AVAILABLE</span>
                    <span style={{ color: 'var(--text-secondary)' }}>Agent uses fallback</span>
                  </div>
                  <div className="status-row text-anim-blur text-anim-delay-3" style={{ border: 'none' }}>
                    <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>REQUIRES USER SETUP</span>
                    <span style={{ color: 'var(--text-secondary)' }}>Missing credentials</span>
                  </div>
                </div>
              </div>
              
              <div>
                <span className="tech-label">Registry</span>
                <h2 style={{ marginBottom: '1.5rem' }}>Integration Status</h2>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Integration</th>
                      <th>Environment</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.values(registry).map((integration, idx) => (
                      <tr key={idx}>
                        <td style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>{integration.tool}</td>
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
      <section id="install" className="section text-center" style={{ backgroundColor: 'var(--bg-base)' }}>
        <div className="container max-w-2xl mx-auto">
          <h2>Install the V2 Engine.</h2>
          <div className="code-block" style={{ marginBottom: '1.5rem' }}>
            <code style={{ color: 'var(--text-primary)' }}>npx skills add https://github.com/thakur698/universal-ui-skills</code>
            <button 
              onClick={() => navigator.clipboard.writeText('npx skills add https://github.com/thakur698/universal-ui-skills')}
              style={{ background: 'transparent', border: 'none', color: 'var(--accent-cyan)', cursor: 'pointer', fontFamily: 'var(--font-mono)', fontWeight: 700 }}
            >
              COPY
            </button>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
            Compatible with Antigravity, Claude Code (via plugin), Cursor, and custom agentic frameworks.
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
      <footer style={{ backgroundColor: 'var(--bg-surface)', padding: '4rem 0', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container flex-between" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
          <div>UNIVERSAL UI SKILLS V2 // ADAPTIVE DESIGN ENGINE</div>
          <div className="footer-links">
            <a href="https://github.com/thakur698/universal-ui-skills">GitHub</a>
            <a href="https://github.com/thakur698/universal-ui-skills/issues">Issues</a>
            <a href="https://github.com/thakur698/universal-ui-skills/pulls">Contribute</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
