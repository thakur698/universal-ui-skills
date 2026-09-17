import { useEffect, useState, useRef } from 'react';
import { Layers, Sparkles, Sliders, ShieldCheck, ArrowDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function CinematicStorySection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStoryChapter, setActiveStoryChapter] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const bgParallaxY = useTransform(scrollYProgress, [0, 1], ["0px", "800px"]);
  const frontParallaxY = useTransform(scrollYProgress, [0, 1], ["-200px", "500px"]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const trackHeight = containerRef.current.offsetHeight - window.innerHeight;
      
      if (rect.top <= 0 && trackHeight > 0) {
        const rawProgress = Math.min(1, Math.max(0, -rect.top / trackHeight));
        setScrollProgress(rawProgress);

        if (rawProgress < 0.25) setActiveStoryChapter(0);
        else if (rawProgress < 0.50) setActiveStoryChapter(1);
        else if (rawProgress < 0.75) setActiveStoryChapter(2);
        else setActiveStoryChapter(3);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const chapters = [
    {
      num: "01 // DESIGN READ",
      title: "Reading Context Before Code",
      badge: "ui-creative-director",
      icon: <Sparkles size={20} style={{ color: 'var(--text-primary)' }} />,
      desc: "Zero-shot models jump straight into Inter with purple gradient meshes. The V2 engine intercepts the prompt, classifying target user personas, industry constraints, and distinct visual languages.",
      metricTitle: "VARIANCE TUNED",
      metricVal: "8.5 / 10",
      codeSnippet: "DESIGN_READ: SRE Telemetry Portal // Monospace High-Contrast // Zero Decorative Slop"
    },
    {
      num: "02 // MEDIA-FIRST COMPOSITION",
      title: "Hero Diagrams & Editorial Staging",
      badge: "ui-media-composition",
      icon: <Layers size={20} style={{ color: 'var(--text-primary)' }} />,
      desc: "Instead of generic 3-column card rows, V2 composes asymmetric bento systems, live architectural data flows, and hero-scale editorial diagrams with verified focal points.",
      metricTitle: "MEDIA PROMINENCE",
      metricVal: "9.0 / 10",
      codeSnippet: "COMPOSITION: Asymmetric Bento Spec // Live Data-Bus Wireframes // WCAG AAA Contrast"
    },
    {
      num: "03 // DETERMINISTIC SCROLL CHOREOGRAPHY",
      title: "Pinned Stories & Timeline Scrubbing",
      badge: "ui-scroll-storytelling",
      icon: <Sliders size={20} style={{ color: 'var(--text-primary)' }} />,
      desc: "Transforms static reading into sticky narrative disclosure. Progressively unfolds multi-phase technical architectures without scroll jank or horizontal mobile traps.",
      metricTitle: "SCROLL INTERACTION",
      metricVal: "8.0 / 10",
      codeSnippet: "SCROLL_TRACK: 300vh Pinned Viewport // Deterministic Timeline Frame Scrub // Zero Hijacking"
    },
    {
      num: "04 // MECHANICAL PRE-FLIGHT GATES",
      title: "Adversarial Quality Control",
      badge: "ui-preflight",
      icon: <ShieldCheck size={20} style={{ color: 'var(--text-primary)' }} />,
      desc: "Before delivering UI, hard mechanical gates check contrast ratios, touch-target ergonomics (>=52px), and accessibility fallbacks for prefers-reduced-motion.",
      metricTitle: "PASS RATE",
      metricVal: "100% GATED",
      codeSnippet: "PREFLIGHT: Verified WCAG 2.1 AA // Reduced-Motion Fallback Validated // No Slop Detected"
    }
  ];

  const currentCh = chapters[activeStoryChapter];

  return (
    <div ref={containerRef} className="cinematic-story-track" style={{ position: 'relative' }}>
      {/* Background Matrix & Depth Elements */}
      <motion.div style={{ position: 'absolute', top: '-50%', bottom: '-50%', left: 0, right: 0, pointerEvents: 'none', backgroundImage: 'radial-gradient(ellipse at center, rgba(0, 240, 255, 0.03) 0%, transparent 70%)', zIndex: 0, y: bgParallaxY }}></motion.div>
      <motion.div style={{ position: 'absolute', top: '-50%', bottom: '-50%', left: 0, right: 0, pointerEvents: 'none', backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '128px 128px', zIndex: 0, y: frontParallaxY }}></motion.div>

      <div className="sticky-stage-viewport" style={{ zIndex: 1 }}>
        {/* Left Telemetry Depth Gauge */}
        <div className="telemetry-depth-rail" style={{ position: 'absolute', left: '2rem', top: '50%', transform: 'translateY(-50%)', height: '60vh', display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <span className="rail-label" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--accent-cyan)', letterSpacing: '0.2em' }}>[ SCROLL TELEMETRY ]</span>
          <div className="depth-rail-track" style={{ width: '2px', height: '100%', background: 'var(--border-strong)', position: 'relative' }}>
            <div className="depth-rail-fill" style={{ height: `${scrollProgress * 100}%`, background: 'var(--accent-cyan)', boxShadow: '0 0 10px var(--accent-cyan)' }}></div>
            <div className="depth-rail-indicator" style={{ position: 'absolute', top: `${scrollProgress * 100}%`, transform: 'translateY(-50%)', left: '10px', background: 'var(--bg-base)', border: '1px solid var(--accent-cyan)', padding: '0.25rem 0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--accent-cyan)' }}>
              {(scrollProgress * 100).toFixed(0)}%
            </div>
          </div>
        </div>

        {/* Center Main Staging Area */}
        <div className="cinematic-content-grid" style={{ paddingLeft: '8rem', maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '400px 1fr', gap: '4rem', alignItems: 'center', height: '100%' }}>
          {/* Chapter Narrative Card */}
          <div className="cinematic-narrative-pane" style={{ position: 'relative' }}>
            <div className="chapter-meta-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)', marginBottom: '1.5rem', borderBottom: '1px dashed var(--border-strong)', paddingBottom: '0.5rem' }}>
              <span className="ch-icon" style={{ color: 'var(--accent-cyan)' }}>{currentCh.icon}</span>
              <span className="ch-num" style={{ letterSpacing: '0.1em' }}>{currentCh.num}</span>
              <span className="ch-badge" style={{ background: 'rgba(0, 240, 255, 0.1)', color: 'var(--accent-cyan)', padding: '0.1rem 0.5rem', border: '1px solid rgba(0,240,255,0.2)' }}>{currentCh.badge}</span>
            </div>

            <h2 className="ch-title" style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{currentCh.title}</h2>
            <p className="ch-desc" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>{currentCh.desc}</p>

            <div className="ch-code-box" style={{ background: 'var(--bg-base)', border: '1px solid var(--border-strong)', padding: '1.5rem', marginBottom: '2.5rem', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '10px', height: '10px', borderTop: '1px solid var(--accent-cyan)', borderLeft: '1px solid var(--accent-cyan)' }}></div>
              <div className="code-header" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-dim)', marginBottom: '1rem', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="code-dot" style={{ width: '6px', height: '6px', background: 'var(--accent-cyan)', display: 'inline-block' }}></span>
                ENGINE TELEMETRY LOG
              </div>
              <code className="code-text" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-primary)', lineHeight: 1.5, display: 'block' }}>{currentCh.codeSnippet}</code>
            </div>

            <div className="ch-metric-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--border-strong)', border: '1px solid var(--border-strong)' }}>
              <div className="metric-box" style={{ background: 'var(--bg-surface)', padding: '1.5rem' }}>
                <span className="m-title" style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{currentCh.metricTitle}</span>
                <strong className="m-val" style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '1.25rem', color: 'var(--accent-cyan)', textShadow: '0 0 10px rgba(0,240,255,0.3)' }}>{currentCh.metricVal}</strong>
              </div>
              <div className="metric-box" style={{ background: 'var(--bg-surface)', padding: '1.5rem' }}>
                <span className="m-title" style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>EVALUATOR AGREEMENT</span>
                <strong className="m-val" style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '1.25rem', color: 'var(--text-primary)' }}>$\rho = 0.98$</strong>
              </div>
            </div>
          </div>

          {/* Interactive Visual Transformation Stage */}
          <div style={{ position: 'relative', height: '600px', width: '100%', border: '1px solid var(--accent-cyan)', background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(10px)', boxShadow: '0 0 40px rgba(0, 240, 255, 0.05)' }}>
            <div style={{ position: 'absolute', inset: '1rem', border: '1px dashed rgba(0, 240, 255, 0.3)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              
              {/* Dynamic Interactive Visuals per Phase */}
              <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                {activeStoryChapter === 0 && (
                  <div style={{ padding: '2rem', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: '1rem', background: 'var(--bg-base)', border: '1px solid var(--border-strong)' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-secondary)', borderBottom: '1px solid var(--border-strong)', paddingBottom: '1rem' }}>PRODUCT DESIGN READ // INFERENCE</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem' }}>
                      <div style={{ background: 'var(--bg-surface)', padding: '1rem', border: '1px solid var(--border-strong)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-primary)' }}>AUDIENCE: SRE / ARCHITECTS</div>
                      <div style={{ background: 'var(--bg-surface)', padding: '1rem', border: '1px solid var(--border-strong)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-primary)' }}>VIBE: MONOSPACE DARK TECH</div>
                      <div style={{ background: 'var(--text-primary)', padding: '1rem', border: '1px solid var(--text-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--bg-base)' }}>DENSITY: COCKPIT (9/10)</div>
                    </div>
                  </div>
                )}

                {activeStoryChapter === 1 && (
                  <div style={{ padding: '2rem', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: '1rem', background: 'var(--bg-base)', border: '1px solid var(--border-strong)' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-secondary)', borderBottom: '1px solid var(--border-strong)', paddingBottom: '1rem' }}>BENTO COMPOSITION MATRIX</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '1px', background: 'var(--border-strong)', border: '1px solid var(--border-strong)', flex: 1, marginTop: '1rem' }}>
                      <div style={{ background: 'var(--text-primary)', gridColumn: 'span 2', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--bg-base)' }}>VECTOR SIMD COMPUTATION</div>
                      <div style={{ background: 'var(--bg-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>NVMe WAL</div>
                      <div style={{ background: 'var(--bg-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>HOT STORAGE</div>
                    </div>
                  </div>
                )}

                {activeStoryChapter === 2 && (
                  <div style={{ padding: '2rem', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: '1rem', background: 'var(--bg-base)', border: '1px solid var(--border-strong)' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-secondary)', borderBottom: '1px solid var(--border-strong)', paddingBottom: '1rem' }}>SCROLL SCRUBBED TIMELINE</div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '2rem' }}>
                      <div style={{ height: '2px', background: 'var(--border-strong)', width: '100%', position: 'relative' }}>
                        <div style={{ height: '100%', background: 'var(--text-primary)', width: `${(scrollProgress / 0.75) * 100}%` }}></div>
                        <div style={{ position: 'absolute', top: '-10px', left: `${(scrollProgress / 0.75) * 100}%`, transform: 'translateX(-50%)', width: '20px', height: '22px', border: '1px solid var(--text-primary)', background: 'var(--bg-base)' }}></div>
                      </div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-secondary)', textAlign: 'center' }}>
                        STAGE {(scrollProgress * 4).toFixed(0)} OF 4 // DETERMINISTIC SYNC
                      </div>
                    </div>
                  </div>
                )}

                {activeStoryChapter === 3 && (
                  <div style={{ padding: '2rem', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: '1rem', background: 'var(--bg-base)', border: '1px solid var(--border-strong)' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-cyan)', borderBottom: '1px solid var(--border-strong)', paddingBottom: '1rem' }}>[ PRE-FLIGHT GATE SIGN-OFF ]</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                        <ShieldCheck size={18} style={{ color: 'var(--accent-cyan)' }} /> WCAG AAA CONTRAST: PASSED
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                        <ShieldCheck size={18} style={{ color: 'var(--accent-cyan)' }} /> 52PX TOUCH ERGONOMICS: PASSED
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                        <ShieldCheck size={18} style={{ color: 'var(--accent-cyan)' }} /> ZERO ANIMATION SLOP: VERIFIED
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Crosshair telemetry overlays */}
              <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                <span style={{ position: 'absolute', top: 0, left: 0, padding: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '1rem', color: 'var(--accent-cyan)', lineHeight: 1 }}>+</span>
                <span style={{ position: 'absolute', top: 0, right: 0, padding: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '1rem', color: 'var(--accent-cyan)', lineHeight: 1 }}>+</span>
                <span style={{ position: 'absolute', bottom: 0, left: 0, padding: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '1rem', color: 'var(--accent-cyan)', lineHeight: 1 }}>+</span>
                <span style={{ position: 'absolute', bottom: 0, right: 0, padding: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '1rem', color: 'var(--accent-cyan)', lineHeight: 1 }}>+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Scroll Indicator */}
        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-cyan)', letterSpacing: '0.1em' }}>
          <ArrowDown size={16} style={{ animation: 'bounce 2s infinite' }} />
          <span>[ SCROLL TO ADVANCE V2 ENGINE: CH_0{activeStoryChapter + 1}/04 ]</span>
        </div>
      </div>
    </div>
  );
}
