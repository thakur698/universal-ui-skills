import { useEffect, useState } from 'react';
import { ArrowRight, Check, X, Code2, MonitorPlay, Sparkles, Box, Workflow, Layers, Video, Palette } from 'lucide-react';
import { BenchmarkShowcase } from './BenchmarkShowcase';
import { CinematicStorySection } from './CinematicStorySection';
import { AdaptiveOrchestrationShowcase } from './AdaptiveOrchestrationShowcase';
import { RiveShowcase } from './RiveShowcase';
import { LottieShowcase } from './LottieShowcase';
import { VisualQAShowcase } from './VisualQAShowcase';
import { SystemTopologyShowcase } from './SystemTopologyShowcase';
import { HardwareButton } from './HardwareButton';
import { AnimatedNavLink } from './AnimatedNavLink';
import { motion, useMotionValue, useSpring, useTransform, useScroll, useMotionTemplate } from 'framer-motion';
import registry from '../../integrations/registry.json';
import Lenis from 'lenis';

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
  useIntersectionObserver();

  const [activeStoryStage, setActiveStoryStage] = useState(0);

  const storyStages = [
    { title: "Brief & Design Read", desc: "Infers the true domain, audience, and aesthetic constraints before any code is generated." },
    { title: "Composition & Media Staging", desc: "Prioritizes editorial imagery, technical diagrams, and asymmetric bento layouts." },
    { title: "Scroll Choreography", desc: "Pins narrative sections, syncs video/frame timelines, and guards reduced-motion modes." },
    { title: "Adversarial Critic Gate", desc: "Automated multi-cycle visual QA and hard binary gates preventing broken deliverables." }
  ];

  // Mouse Parallax Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const clientMouseX = useMotionValue(0);
  const clientMouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const fastSpringConfig = { damping: 30, stiffness: 300 };
  
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);
  const spotlightX = useSpring(clientMouseX, fastSpringConfig);
  const spotlightY = useSpring(clientMouseY, fastSpringConfig);

  const parallaxX = useTransform(springX, [-0.5, 0.5], [-120, 120]);
  const parallaxY = useTransform(springY, [-0.5, 0.5], [-120, 120]);
  const bgParallaxX = useTransform(springX, [-0.5, 0.5], [-60, 60]);
  const bgParallaxY = useTransform(springY, [-0.5, 0.5], [-60, 60]);

  // Nav scroll behavior
  const { scrollY, scrollYProgress } = useScroll();
  const navPadding = useTransform(scrollY, [0, 50], ["1.5rem 0", "0.75rem 0"]);
  const navBackground = useTransform(scrollY, [0, 50], ["rgba(10, 10, 10, 0)", "rgba(10, 10, 10, 0.8)"]);
  const navBorder = useTransform(scrollY, [0, 50], ["1px solid rgba(0, 240, 255, 0)", "1px solid rgba(0, 240, 255, 0.3)"]);
  const navBackdropFilter = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(12px)"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    mouseX.set(x);
    mouseY.set(y);
    clientMouseX.set(e.clientX);
    clientMouseY.set(e.clientY);
  };

  // Global Background Color Transform
  const globalBgColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      "rgba(10, 10, 10, 1)",      // Top - Base very dark
      "rgba(6, 16, 20, 1)",       // 25% - Subtle deep cyan hint
      "rgba(12, 10, 18, 1)",      // 50% - Deep warm/purple tint for cinematic section
      "rgba(5, 8, 12, 1)",        // 75% - Deep navy
      "rgba(10, 10, 10, 1)"       // Bottom - Back to base
    ]
  );

  const spotlightColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      "rgba(0, 240, 255, 0.12)",   // Cyan
      "rgba(0, 150, 255, 0.12)",   // Blue
      "rgba(150, 0, 255, 0.08)",   // Purple
      "rgba(0, 50, 255, 0.08)",    // Navy
      "rgba(0, 240, 255, 0.12)"    // Cyan
    ]
  );

  const gridParallaxY = useTransform(scrollYProgress, [0, 1], ["0px", "-1500px"]);

  return (
    <motion.div onMouseMove={handleMouseMove} style={{ backgroundColor: globalBgColor, position: 'relative' }}>
      
      {/* Interactive Global Background Elements - Animated */}
      <motion.div
        style={{
          position: 'fixed',
          top: '-1500px', left: 0, right: 0, bottom: '-1500px', // Pad for parallax
          pointerEvents: 'none',
          zIndex: 50,
          y: gridParallaxY,
        }}
      >
        <motion.div
          animate={{ backgroundPositionY: ["0px", "120px"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 4 }}
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
            backgroundSize: '120px 120px',
          }}
        />
      </motion.div>

      {/* Subtle Cinematic Film Grain Overlay */}
      <div className="noise-overlay" />
      
      <motion.div
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          pointerEvents: 'none',
          zIndex: 50,
          background: useMotionTemplate`radial-gradient(800px circle at ${spotlightX}px ${spotlightY}px, ${spotlightColor}, transparent 80%)`
        }}
      />
      {/* Navigation */}
      <motion.nav 
        className="nav"
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          right: 0, 
          zIndex: 100, 
          background: navBackground, 
          borderBottom: navBorder, 
          backdropFilter: navBackdropFilter,
          padding: navPadding,
          transition: 'backdrop-filter 0.3s, background 0.3s'
        }}
      >
        <div className="container flex-between">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '1.25rem', letterSpacing: '0.15em', color: 'var(--text-primary)' }}>UNIVERSAL//UI</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', background: 'var(--bg-surface-elevated)', color: 'var(--text-secondary)', padding: '0.25rem 0.75rem', border: '1px solid var(--border-strong)' }}>
              ENGINE_V2.0
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginLeft: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--accent-cyan)' }}>
              <motion.div 
                animate={{ opacity: [1, 0.3, 1] }} 
                transition={{ duration: 2, repeat: Infinity }}
                style={{ width: '6px', height: '6px', background: 'var(--accent-cyan)' }}
              ></motion.div>
              SYS.ONLINE // 14ms
            </div>
          </div>
          <div className="nav-links" style={{ display: 'flex', gap: '1rem' }}>
            <AnimatedNavLink href="#pipeline">PIPELINE</AnimatedNavLink>
            <AnimatedNavLink href="#benchmarks">BENCHMARKS</AnimatedNavLink>
            <AnimatedNavLink href="#skills">SKILLS</AnimatedNavLink>
            <AnimatedNavLink href="#integrations">INTEGRATIONS</AnimatedNavLink>
          </div>
          <div className="flex-gap" style={{ alignItems: 'center' }}>
            <HardwareButton onClick={() => window.open('https://github.com/thakur698/universal-ui-skills', '_blank')}>
              <GithubIcon /> GITHUB
            </HardwareButton>
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <header className="section hero-bg" style={{ padding: '12rem 0 10rem 0', minHeight: '90vh', display: 'flex', alignItems: 'center', borderBottom: '1px solid var(--border-strong)', position: 'relative' }}>
        
        {/* HUD Elements */}
        <div style={{ position: 'absolute', top: '6rem', left: '2rem', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--accent-cyan)', letterSpacing: '0.2em', zIndex: 10 }}>
          SYS.OP.MODE: NOMINAL // 0x7F4A
          <br/>LATENCY: <span style={{ color: 'var(--text-primary)' }}>14ms</span>
        </div>
        <div style={{ position: 'absolute', bottom: '2rem', right: '2rem', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '0.2em', textAlign: 'right', zIndex: 10 }}>
          ENV: PRODUCTION (V2.1)
          <br/>GRID: ACTIVE ISOMETRIC
        </div>
        <div style={{ position: 'absolute', top: '6rem', right: '2rem', width: '40px', height: '40px', borderTop: '2px solid var(--accent-cyan)', borderRight: '2px solid var(--accent-cyan)', zIndex: 10 }}></div>
        <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', width: '40px', height: '40px', borderBottom: '2px solid var(--accent-cyan)', borderLeft: '2px solid var(--accent-cyan)', zIndex: 10 }}></div>

        <div className="container grid-2" style={{ width: '100%', alignItems: 'center' }}>
          <div className="reveal" style={{ position: 'relative', zIndex: 10 }}>
            <div className="tech-label" style={{ textShadow: '0 0 16px var(--accent-cyan)', letterSpacing: '0.2em' }}>
              ADAPTIVE DESIGN ENGINE // V2
            </div>
            <h1 style={{ color: 'var(--text-primary)', textShadow: '0 0 60px rgba(255, 255, 255, 0.25)', position: 'relative', fontSize: '4.5rem', lineHeight: 1.05 }}>
              From Generic Code<br />to Editorial Craft.
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '34rem', lineHeight: 1.6, textShadow: '0 0 20px rgba(0, 0, 0, 0.8)' }}>
              Universal UI V2 replaces AI slop with an orchestrated 19-stage pipeline: architectural composition, scroll choreography, precise dials, and adversarial visual critique.
            </p>
            <div className="flex-gap" style={{ marginTop: '3.5rem' }}>
              <HardwareButton onClick={() => window.location.href = '#benchmarks'} status="active">
                EXPLORE EVIDENCE <ArrowRight size={16} />
              </HardwareButton>
              <HardwareButton onClick={() => window.location.href = '#install'}>
                INSTALL ENGINE
              </HardwareButton>
            </div>
            
            {/* Telemetry Bar underneath text */}
            <div style={{ marginTop: '4rem', display: 'flex', gap: '2rem', borderTop: '1px solid var(--border-strong)', paddingTop: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)' }}>
              <div>
                <strong style={{ color: 'var(--text-primary)', display: 'block', fontSize: '1.25rem', marginBottom: '0.25rem' }}>19</strong>
                PIPELINE STAGES
              </div>
              <div>
                <strong style={{ color: 'var(--text-primary)', display: 'block', fontSize: '1.25rem', marginBottom: '0.25rem' }}>100%</strong>
                SLOP REJECTION
              </div>
              <div>
                <strong style={{ color: 'var(--text-primary)', display: 'block', fontSize: '1.25rem', marginBottom: '0.25rem' }}>&lt;70s</strong>
                TTFUI LATENCY
              </div>
            </div>
          </div>
          
          {/* Hero Visual: Advanced 19-Stage Orchestration Pipeline */}
          <motion.div 
            className="hero-diagram-container reveal delay-200" 
            style={{ position: 'relative', overflow: 'hidden', padding: '4rem', background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(10px)', x: parallaxX, y: parallaxY }}
          >
            
            {/* Glowing Core */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', width: '150%', height: '150%', transform: 'translate(-50%, -50%)', pointerEvents: 'none', zIndex: 0 }}>
              <motion.div style={{ width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(0, 240, 255, 0.15) 0%, transparent 50%)', mixBlendMode: 'screen', x: bgParallaxX, y: bgParallaxY }}></motion.div>
            </div>

            <div className="diagram-wrapper" style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--accent-cyan)', letterSpacing: '0.2em', marginBottom: '1.5rem', textAlign: 'center' }}>
                [ ORCHESTRATION PIPELINE : ACTIVE ]
              </div>

              <div className="diagram-node" style={{ background: 'var(--bg-base)' }}>01. Brief Extractor</div>
              <div className="diagram-line-v flow-v"></div>
              
              <div className="diagram-node active" style={{ boxShadow: '0 0 20px rgba(0, 240, 255, 0.2)' }}>02. Design Read & Dials</div>
              <div className="diagram-line-v flow-v"></div>

              <div className="diagram-branch" style={{ gap: '0.5rem' }}>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div className="diagram-node" style={{ fontSize: '0.7rem', padding: '0.5rem', width: '100%', background: 'var(--bg-base)' }}>Composition</div>
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div className="diagram-node" style={{ fontSize: '0.7rem', padding: '0.5rem', width: '100%', background: 'var(--bg-base)' }}>Media Plan</div>
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div className="diagram-node" style={{ fontSize: '0.7rem', padding: '0.5rem', width: '100%', background: 'var(--bg-base)' }}>Scroll Story</div>
                </div>
              </div>

              <div className="diagram-line-v flow-v"></div>
              <div className="diagram-node active" style={{ boxShadow: '0 0 20px rgba(0, 240, 255, 0.2)' }}>06. Implementation (React)</div>
              <div className="diagram-line-v flow-v"></div>

              <div className="diagram-branch" style={{ gap: '0.5rem' }}>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div className="diagram-node active" style={{ color: 'var(--bg-base)', background: 'var(--accent-cyan)', borderColor: 'var(--accent-cyan)', padding: '0.5rem', width: '100%', boxShadow: '0 0 20px rgba(0, 240, 255, 0.4)' }}>Visual Critic (Fix)</div>
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div className="diagram-node" style={{ padding: '0.5rem', width: '100%', background: 'var(--bg-base)' }}>Pre-Flight Gate</div>
                </div>
              </div>
              
              <div className="diagram-line-v flow-v"></div>
              <div className="diagram-node active" style={{ borderStyle: 'dashed', borderColor: 'var(--accent-cyan)', color: 'var(--accent-cyan)', background: 'transparent', letterSpacing: '0.1em' }}>
                19. DELIVERABLE &gt;_
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Interactive Storytelling Stage Showcase */}
      <section id="pipeline" className="section" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'var(--glow-cyan-strong)', opacity: 0.5 }}></div>
        <div className="container">
          <div className="reveal" style={{ marginBottom: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px dashed var(--border-strong)', paddingBottom: '2rem' }}>
            <div>
              <span className="tech-label" style={{ color: 'var(--accent-cyan)' }}>INTERACTIVE ENGINE CAPABILITIES</span>
              <h2 style={{ color: 'var(--text-primary)', textShadow: '0 0 20px rgba(255, 255, 255, 0.1)' }}>How the Architecture Operates</h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '44rem', margin: 0 }}>
                Instead of prompting a model to "make it modern," V2 deploys specialized deterministic skills at each phase.
              </p>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)', textAlign: 'right' }}>
              [ LOG_ID: 948A ]<br/>DIAGNOSTIC_MODE: ENABLED
            </div>
          </div>

          <div className="grid-2 reveal delay-100" style={{ gap: '1px', background: 'var(--border-strong)', border: '1px solid var(--border-strong)' }}>
            {/* Left selector */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border-strong)' }}>
              {storyStages.map((stage, idx) => (
                <div 
                  key={idx}
                  onClick={() => setActiveStoryStage(idx)}
                  style={{
                    padding: '2rem',
                    background: activeStoryStage === idx ? 'var(--bg-surface-elevated)' : 'var(--bg-base)',
                    cursor: 'pointer',
                    transition: 'all var(--dur-fast) var(--ease-cinematic)',
                    position: 'relative'
                  }}
                >
                  {activeStoryStage === idx && <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: 'var(--text-primary)', boxShadow: '0 0 16px var(--text-primary)' }}></div>}
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: activeStoryStage === idx ? 'var(--text-primary)' : 'var(--text-dim)', marginBottom: '0.75rem', letterSpacing: '0.1em' }}>
                    STAGE_0{idx + 1}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', margin: '0 0 0.5rem 0', color: activeStoryStage === idx ? 'var(--text-primary)' : 'var(--text-secondary)' }}>{stage.title}</h3>
                  <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', margin: 0 }}>{stage.desc}</p>
                </div>
              ))}
            </div>

            {/* Right preview simulation */}
            <div style={{ background: 'var(--bg-base)', padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '16px 16px', zIndex: 0, opacity: 0.5 }}></div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '3rem', borderBottom: '1px dashed var(--border-strong)', paddingBottom: '1rem' }}>
                  <span>ACTIVE_SIMULATOR // STAGE_0{activeStoryStage + 1}</span>
                  <span style={{ color: 'var(--accent-cyan)', textShadow: '0 0 10px var(--accent-cyan)' }}>STATUS: ENFORCED</span>
                </div>
                <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>{storyStages[activeStoryStage].title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem', maxWidth: '90%' }}>{storyStages[activeStoryStage].desc}</p>
              </div>

              <div style={{ borderTop: '1px solid var(--border-strong)', paddingTop: '2rem', display: 'flex', gap: '3rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', position: 'relative', zIndex: 1 }}>
                <div style={{ flex: 1, background: 'var(--bg-surface)', padding: '1.5rem', border: '1px solid var(--border-strong)' }}>
                  <span style={{ color: 'var(--text-dim)', display: 'block', marginBottom: '0.5rem', letterSpacing: '0.1em' }}>DIAL TUNING</span>
                  <strong style={{ color: 'var(--text-primary)', fontSize: '1rem' }}>1–10 QUANTITATIVE</strong>
                </div>
                <div style={{ flex: 1, background: 'rgba(0, 240, 255, 0.05)', padding: '1.5rem', border: '1px solid rgba(0, 240, 255, 0.2)' }}>
                  <span style={{ color: 'var(--accent-cyan)', display: 'block', marginBottom: '0.5rem', letterSpacing: '0.1em' }}>REDUCED MOTION</span>
                  <strong style={{ color: 'var(--text-primary)', fontSize: '1rem' }}>PASS // ACCESSIBLE</strong>
                </div>
                <div style={{ flex: 1, background: 'var(--bg-surface)', padding: '1.5rem', border: '1px solid var(--border-strong)' }}>
                  <span style={{ color: 'var(--text-dim)', display: 'block', marginBottom: '0.5rem', letterSpacing: '0.1em' }}>EVALUATOR</span>
                  <strong style={{ color: 'var(--text-primary)', fontSize: '1rem' }}>AGREEMENT: 98%</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cinematic Scroll Story Section */}
      <CinematicStorySection />

      {/* The Problem (Anti-Slop Comparison) */}
      <section className="section" style={{ backgroundColor: 'transparent' }}>
        <div className="container">
          <div className="reveal" style={{ marginBottom: '5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid var(--border-strong)', paddingBottom: '2rem' }}>
            <div>
              <span className="tech-label" style={{ color: '#f87171' }}>DIAGNOSTIC: THE PROBLEM</span>
              <h2 style={{ color: 'var(--text-primary)' }}>Functional code is not good design.</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '40rem', margin: 0 }}>
                LLMs jump to generic defaults when unguided. Universal UI V2 replaces templated slop with domain-calibrated design rules.
              </p>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)', textAlign: 'right' }}>
              ERR_CODE: 0x892F <br/>(DECORATIVE_SLOP_DETECTED)
            </div>
          </div>

          <div className="grid-2" style={{ gap: '2rem' }}>
            <div className="anti-slop-card reveal delay-100" style={{ position: 'relative', border: '1px solid #f87171', background: 'rgba(248, 113, 113, 0.05)', boxShadow: '0 0 40px rgba(248, 113, 113, 0.1)' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: '#f87171' }}></div>
              <div className="list-item" style={{ borderBottom: '1px dashed #f87171', paddingBottom: '1.5rem', marginBottom: '2rem' }}>
                <X size={20} className="text-red" /> <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: '#f87171', letterSpacing: '0.1em' }}>[ FATAL : GENERIC AI DEFAULTS ]</span>
              </div>
              <div className="list-item" style={{ color: '#fca5a5' }}><span className="text-red">×</span> 3-column identical card grids on every page</div>
              <div className="list-item" style={{ color: '#fca5a5' }}><span className="text-red">×</span> Purple-to-indigo gradient text on dark mesh</div>
              <div className="list-item" style={{ color: '#fca5a5' }}><span className="text-red">×</span> Decorative animation that hurts reading</div>
              <div className="list-item" style={{ color: '#fca5a5' }}><span className="text-red">×</span> Pill-shaped badges everywhere</div>
              <div className="list-item" style={{ color: '#fca5a5' }}><span className="text-red">×</span> Broken layout when motion is disabled</div>
            </div>

            <div className="anti-slop-card anti-slop-card-accent reveal delay-200" style={{ position: 'relative', border: '1px solid var(--accent-cyan)', background: 'rgba(0, 240, 255, 0.05)', boxShadow: '0 0 60px rgba(0, 240, 255, 0.15)' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'var(--accent-cyan)' }}></div>
              <div className="list-item" style={{ borderBottom: '1px dashed var(--accent-cyan)', paddingBottom: '1.5rem', marginBottom: '2rem' }}>
                <Check size={20} style={{ color: 'var(--text-primary)' }} /> <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--text-primary)', letterSpacing: '0.1em', textShadow: '0 0 10px rgba(255,255,255,0.3)' }}>[ NOMINAL : UNIVERSAL UI V2 ]</span>
              </div>
              <div className="list-item" style={{ color: 'var(--text-primary)' }}><span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>✓</span> Media-first composition & diagrams</div>
              <div className="list-item" style={{ color: 'var(--text-primary)' }}><span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>✓</span> Pinned storytelling & deterministic scrubbing</div>
              <div className="list-item" style={{ color: 'var(--text-primary)' }}><span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>✓</span> Parameterized design dials (Density, Variance)</div>
              <div className="list-item" style={{ color: 'var(--text-primary)' }}><span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>✓</span> Adversarial visual critic refinement loop</div>
              <div className="list-item" style={{ color: 'var(--text-primary)' }}><span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>✓</span> Sharp geometric primitives (0px borders)</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7-Domain Benchmark Showcase */}
      <BenchmarkShowcase />

      {/* 17 Skills Inventory Bento */}
      <section id="skills" className="section" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', borderTop: '1px solid var(--border-strong)' }}>
        <div className="container">
          <div className="reveal" style={{ marginBottom: '5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid var(--border-strong)', paddingBottom: '2rem' }}>
            <div>
              <span className="tech-label" style={{ color: 'var(--text-secondary)' }}>AGENTIC ARCHITECTURE</span>
              <h2 style={{ color: 'var(--text-primary)' }}>The 17-Skill System</h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '44rem', margin: 0 }}>
                Modular skills that compose dynamically based on the project's design read and target technology.
              </p>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-cyan)', textAlign: 'right' }}>
              PKG: universal-ui<br/>LOC: .agents/plugins/
            </div>
          </div>
          
          <div className="bento-grid reveal delay-100" style={{ gap: '1px', background: 'var(--border-strong)', border: '1px solid var(--border-strong)' }}>
            <div className="bento-item bento-span-2" style={{ background: 'var(--bg-base)', borderLeft: '4px solid var(--text-primary)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '1rem', right: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-dim)' }}>0x01</div>
              <div className="skill-icon" style={{ color: 'var(--text-primary)' }}><MonitorPlay size={24} /></div>
              <div className="skill-title" style={{ color: 'var(--text-primary)', fontSize: '1.25rem' }}>ui-master</div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0, lineHeight: 1.6 }}>Master orchestration layer. Enforces the 19-stage pipeline from brief to pre-flight.</p>
            </div>
            
            <div className="bento-item" style={{ background: 'var(--bg-base)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '1rem', right: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-dim)' }}>0x02</div>
              <div className="skill-icon"><Palette size={24} /></div>
              <div className="skill-title">ui-design-dials</div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: 1.6 }}>11 quantitative 1–10 metrics controlling density, variance, and motion.</p>
            </div>

            <div className="bento-item" style={{ background: 'var(--bg-base)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '1rem', right: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-dim)' }}>0x03</div>
              <div className="skill-icon"><Video size={24} /></div>
              <div className="skill-title">ui-scroll-storytelling</div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: 1.6 }}>Choreographs pinned sections, depth tracks, and progressive disclosure.</p>
            </div>

            <div className="bento-item" style={{ background: 'var(--bg-base)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '1rem', right: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-dim)' }}>0x04</div>
              <div className="skill-icon"><Layers size={24} /></div>
              <div className="skill-title">ui-media-composition</div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: 1.6 }}>Prioritizes full-bleed imagery and technical diagrams over card slop.</p>
            </div>

            <div className="bento-item" style={{ background: 'var(--bg-base)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '1rem', right: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-dim)' }}>0x05</div>
              <div className="skill-icon"><Workflow size={24} /></div>
              <div className="skill-title">ui-cinematic-motion</div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: 1.6 }}>Spring physics, multi-plane depth, and staged hero reveals.</p>
            </div>

            <div className="bento-item" style={{ background: 'var(--bg-base)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '1rem', right: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-dim)' }}>0x06</div>
              <div className="skill-icon"><Sparkles size={24} /></div>
              <div className="skill-title">ui-creative-director</div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: 1.6 }}>Generates the definitive Product Design Read before writing code.</p>
            </div>

            <div className="bento-item bento-span-2" style={{ background: 'var(--bg-base)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(0, 240, 255, 0.05) 2px, transparent 2px)', backgroundSize: '16px 16px', zIndex: 0 }}></div>
              <div style={{ position: 'absolute', top: '1rem', right: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--accent-cyan)', zIndex: 1 }}>0x07 // ACTIVE</div>
              <div className="skill-icon" style={{ color: 'var(--accent-cyan)', position: 'relative', zIndex: 1, textShadow: '0 0 10px var(--accent-cyan)' }}><Code2 size={24} /></div>
              <div className="skill-title" style={{ color: 'var(--text-primary)', fontSize: '1.25rem', position: 'relative', zIndex: 1 }}>ui-visual-critic</div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0, lineHeight: 1.6, position: 'relative', zIndex: 1 }}>Adversarial feedback loop scoring 14 design dimensions to drive fixes.</p>
            </div>

            <div className="bento-item" style={{ background: 'var(--bg-base)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '1rem', right: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-dim)' }}>0x08</div>
              <div className="skill-icon"><Box size={24} /></div>
              <div className="skill-title">ui-preflight</div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: 1.6 }}>Hard mechanical pass/fail gate preventing broken UI delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main>
        {/* The New System Topology Showcase */}
        <SystemTopologyShowcase />

        <AdaptiveOrchestrationShowcase />
      </main>

      {/* Integrations */}
      <section id="integrations" className="section" style={{ backgroundColor: 'transparent' }}>
        <div className="container">
          <div className="terminal-window reveal">
            <div className="terminal-header">
              <div className="terminal-dot"></div>
              <div className="terminal-dot"></div>
              <div className="terminal-dot"></div>
              <div style={{ marginLeft: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)', letterSpacing: '0.05em' }}>
                bash — universal-ui-skills-v2
              </div>
            </div>
            <div className="terminal-body grid-2">
              <div>
                <span className="tech-label">Discovery Contract</span>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>We don't fake execution.</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                  The engine automatically inspects the environment to verify which UI libraries and rendering engines are actually executable before invoking them.
                </p>
                <div>
                  <div className="status-row">
                    <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>AVAILABLE + EXECUTABLE</span>
                    <span style={{ color: 'var(--text-secondary)' }}>Agent can invoke</span>
                  </div>
                  <div className="status-row">
                    <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>AVAILABLE + MANUAL</span>
                    <span style={{ color: 'var(--text-secondary)' }}>Requires user</span>
                  </div>
                  <div className="status-row">
                    <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>NOT AVAILABLE</span>
                    <span style={{ color: 'var(--text-secondary)' }}>Agent uses fallback</span>
                  </div>
                  <div className="status-row" style={{ border: 'none' }}>
                    <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>REQUIRES USER SETUP</span>
                    <span style={{ color: 'var(--text-secondary)' }}>Missing credentials</span>
                  </div>
                </div>
              </div>
              
              <div>
                <span className="tech-label">Registry</span>
                <h3 style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 400 }}>Integration Status</h3>
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
                        <td style={{ color: integration.repository_status === 'VERIFIED' ? 'var(--text-primary)' : 'var(--text-dim)', fontWeight: integration.repository_status === 'VERIFIED' ? 700 : 400 }}>
                          {integration.repository_status === 'VERIFIED' ? '✓ VERIFIED' : '○ PENDING'}
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
      <section id="install" className="section text-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}>
        <div className="container max-w-2xl mx-auto">
          <h2>Install the V2 Engine.</h2>
          <div className="code-block" style={{ margin: '2.5rem 0' }}>
            <code style={{ color: 'var(--code-text)', fontSize: '1rem' }}>npx skills add https://github.com/thakur698/universal-ui-skills</code>
            <button 
              onClick={() => navigator.clipboard.writeText('npx skills add https://github.com/thakur698/universal-ui-skills')}
              style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', fontFamily: 'var(--font-mono)', fontWeight: 700, letterSpacing: '0.1em' }}
            >
              COPY
            </button>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '2.5rem' }}>
            Compatible with Antigravity, Claude Code (via plugin), Cursor, and custom agentic frameworks.
          </p>
          <a href="https://github.com/thakur698/universal-ui-skills" target="_blank" rel="noreferrer" className="btn-primary">
            <GithubIcon /> STAR ON GITHUB
          </a>
        </div>
      </section>

      <VisualQAShowcase />
      <LottieShowcase />
      <RiveShowcase />

      {/* Footer */}
      <footer style={{ backgroundColor: 'transparent', padding: '4rem 0', borderTop: '1px solid var(--border-strong)' }}>
        <div className="container flex-between" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)' }}>
          <div>UNIVERSAL UI SKILLS V2 // ADAPTIVE DESIGN ENGINE // STRICT UI PROTOCOL</div>
          <div className="nav-links" style={{ gap: '1.5rem', fontSize: '0.75rem' }}>
            <a href="https://github.com/thakur698/universal-ui-skills">GITHUB</a>
            <a href="https://github.com/thakur698/universal-ui-skills/issues">ISSUES</a>
            <a href="https://github.com/thakur698/universal-ui-skills/pulls">CONTRIBUTE</a>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}

export default App;
