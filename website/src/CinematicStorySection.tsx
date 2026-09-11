import { useEffect, useState, useRef } from 'react';
import { Layers, Sparkles, Sliders, ShieldCheck, ArrowDown } from 'lucide-react';

export function CinematicStorySection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStoryChapter, setActiveStoryChapter] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

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
      icon: <Sparkles size={18} className="text-cyan" />,
      desc: "Zero-shot models jump straight into Inter with purple gradient meshes. The V2 engine intercepts the prompt, classifying target user personas, industry constraints, and distinct visual languages.",
      metricTitle: "VARIANCE TUNED",
      metricVal: "8.5 / 10",
      codeSnippet: "DESIGN_READ: SRE Telemetry Portal // Monospace High-Contrast // Zero Decorative Slop"
    },
    {
      num: "02 // MEDIA-FIRST COMPOSITION",
      title: "Hero Diagrams & Editorial Staging",
      badge: "ui-media-composition",
      icon: <Layers size={18} className="text-cyan" />,
      desc: "Instead of generic 3-column card rows, V2 composes asymmetric bento systems, live architectural data flows, and hero-scale editorial diagrams with verified focal points.",
      metricTitle: "MEDIA PROMINENCE",
      metricVal: "9.0 / 10",
      codeSnippet: "COMPOSITION: Asymmetric Bento Spec // Live Data-Bus Wireframes // WCAG AAA Contrast"
    },
    {
      num: "03 // DETERMINISTIC SCROLL CHOREOGRAPHY",
      title: "Pinned Stories & Timeline Scrubbing",
      badge: "ui-scroll-storytelling",
      icon: <Sliders size={18} className="text-cyan" />,
      desc: "Transforms static reading into sticky narrative disclosure. Progressively unfolds multi-phase technical architectures without scroll jank or horizontal mobile traps.",
      metricTitle: "SCROLL INTERACTION",
      metricVal: "8.0 / 10",
      codeSnippet: "SCROLL_TRACK: 300vh Pinned Viewport // Deterministic Timeline Frame Scrub // Zero Hijacking"
    },
    {
      num: "04 // MECHANICAL PRE-FLIGHT GATES",
      title: "Adversarial Quality Control",
      badge: "ui-preflight",
      icon: <ShieldCheck size={18} className="text-cyan" />,
      desc: "Before delivering UI, hard mechanical gates check contrast ratios, touch-target ergonomics (>=52px), and accessibility fallbacks for prefers-reduced-motion.",
      metricTitle: "PASS RATE",
      metricVal: "100% GATED",
      codeSnippet: "PREFLIGHT: Verified WCAG 2.1 AA // Reduced-Motion Fallback Validated // No Slop Detected"
    }
  ];

  const currentCh = chapters[activeStoryChapter];

  return (
    <div ref={containerRef} className="cinematic-story-track">
      <div className="sticky-stage-viewport">
        {/* Left Telemetry Depth Gauge */}
        <div className="telemetry-depth-rail">
          <div className="depth-rail-track">
            <div className="depth-rail-fill" style={{ height: `${scrollProgress * 100}%` }}></div>
            <div className="depth-rail-indicator" style={{ top: `${scrollProgress * 100}%` }}>
              <span>{(scrollProgress * 100).toFixed(0)}%</span>
            </div>
          </div>
          <span className="rail-label">V2 PROGRESSION</span>
        </div>

        {/* Center Main Staging Area */}
        <div className="cinematic-content-grid">
          {/* Chapter Narrative Card */}
          <div className="cinematic-narrative-pane">
            <div className="chapter-meta-tag">
              <span className="ch-icon">{currentCh.icon}</span>
              <span className="ch-num">{currentCh.num}</span>
              <span className="ch-badge">{currentCh.badge}</span>
            </div>

            <h2 className="ch-title">{currentCh.title}</h2>
            <p className="ch-desc">{currentCh.desc}</p>

            <div className="ch-code-box">
              <div className="code-header">
                <span className="code-dot"></span>
                <span>ENGINE TELEMETRY LOG</span>
              </div>
              <code className="code-text">{currentCh.codeSnippet}</code>
            </div>

            <div className="ch-metric-row">
              <div className="metric-box">
                <span className="m-title">{currentCh.metricTitle}</span>
                <strong className="m-val">{currentCh.metricVal}</strong>
              </div>
              <div className="metric-box">
                <span className="m-title">EVALUATOR AGREEMENT</span>
                <strong className="m-val">$\rho = 0.98$</strong>
              </div>
            </div>
          </div>

          {/* Interactive Visual Transformation Stage */}
          <div className="cinematic-visual-pane">
            <div className="visual-stage-frame">
              {/* Background Parallax Multi-Plane */}
              <div 
                className="parallax-backdrop-glow"
                style={{
                  transform: `translate3d(0, ${(scrollProgress - 0.5) * 60}px, 0)`,
                  opacity: 0.6 + scrollProgress * 0.4
                }}
              ></div>

              {/* Dynamic Interactive Visuals per Phase */}
              <div className="phase-visual-container">
                {activeStoryChapter === 0 && (
                  <div className="visual-card phase-0">
                    <div className="visual-card-head">PRODUCT DESIGN READ // INFERENCE</div>
                    <div className="visual-spec-matrix">
                      <div className="spec-tag">AUDIENCE: SRE / ARCHITECTS</div>
                      <div className="spec-tag">VIBE: MONOSPACE DARK TECH</div>
                      <div className="spec-tag">DENSITY: COCKPIT (9/10)</div>
                    </div>
                  </div>
                )}

                {activeStoryChapter === 1 && (
                  <div className="visual-card phase-1">
                    <div className="visual-card-head">BENTO COMPOSITION MATRIX</div>
                    <div className="mini-bento-grid">
                      <div className="mb-item hero">VECTOR SIMD COMPUTATION</div>
                      <div className="mb-item">NVMe WAL</div>
                      <div className="mb-item">HOT STORAGE</div>
                    </div>
                  </div>
                )}

                {activeStoryChapter === 2 && (
                  <div className="visual-card phase-2">
                    <div className="visual-card-head">SCROLL SCRUBBED TIMELINE</div>
                    <div className="timeline-visual-bar">
                      <div className="t-bar-fill" style={{ width: `${(scrollProgress / 0.75) * 100}%` }}></div>
                    </div>
                    <div className="timeline-telemetry">STAGE {(scrollProgress * 4).toFixed(0)} OF 4 // DETERMINISTIC SYNC</div>
                  </div>
                )}

                {activeStoryChapter === 3 && (
                  <div className="visual-card phase-3">
                    <div className="visual-card-head">PRE-FLIGHT GATE SIGN-OFF</div>
                    <div className="gate-list">
                      <div className="g-item pass">✓ WCAG AAA CONTRAST: PASSED</div>
                      <div className="g-item pass">✓ 52PX TOUCH ERGONOMICS: PASSED</div>
                      <div className="g-item pass">✓ ZERO ANIMATION SLOP: VERIFIED</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Crosshair telemetry overlays */}
              <div className="stage-crosshairs">
                <span className="ch-mark tl">+</span>
                <span className="ch-mark tr">+</span>
                <span className="ch-mark bl">+</span>
                <span className="ch-mark br">+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="sticky-scroll-footer">
          <ArrowDown size={14} className="bounce-anim" />
          <span>SCROLL TO ADVANCE V2 ENGINE PIPELINE (CHAPTER 0{activeStoryChapter + 1} / 04)</span>
        </div>
      </div>
    </div>
  );
}
