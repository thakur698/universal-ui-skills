import { Lottie } from "lottie-react";
// @ts-ignore
import animationData from "./assets/loading.json";

export function LottieShowcase() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-base)', borderTop: '1px solid var(--border-strong)', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'var(--glow-cyan-strong)', opacity: 0.5 }}></div>
      <div className="container">
        
        <div style={{ marginBottom: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid var(--border-strong)', paddingBottom: '2rem' }}>
          <div>
            <span className="tech-label" style={{ color: 'var(--text-secondary)' }}>INTEGRATION PROOF</span>
            <h2 style={{ fontSize: '3rem', lineHeight: '1.05', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Lottie Execution Verified</h2>
          </div>
          <div style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', letterSpacing: '0.1em', textAlign: 'right' }}>
            STATUS: AVAILABLE<br/>
            LOTTIE_REACT: EXECUTABLE
          </div>
        </div>

        <div className="grid-2" style={{ gap: '1px', background: 'var(--border-strong)', border: '1px solid var(--border-strong)' }}>
          
          {/* Left Column: Matrix */}
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', background: 'var(--bg-surface)', padding: '3rem', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--accent-cyan)' }}></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed var(--border-strong)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
              <span style={{ color: 'var(--text-dim)' }}>RUNTIME</span>
              <span style={{ color: 'var(--text-primary)' }}>React / Web</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed var(--border-strong)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
              <span style={{ color: 'var(--text-dim)' }}>PACKAGE</span>
              <span style={{ color: 'var(--text-primary)' }}>lottie-react</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed var(--border-strong)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
              <span style={{ color: 'var(--text-dim)' }}>ASSET</span>
              <span style={{ color: 'var(--text-primary)' }}>loading.json</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed var(--border-strong)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
              <span style={{ color: 'var(--text-dim)' }}>RENDERER</span>
              <span style={{ color: 'var(--text-primary)' }}>Canvas / SVG</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-dim)' }}>VERIFICATION</span>
              <span style={{ color: 'var(--accent-cyan)' }}>Browser Visual QA</span>
            </div>
          </div>

          {/* Right Column: Animation */}
          <div style={{ backgroundColor: 'var(--bg-base)', padding: '3rem', position: 'relative', minHeight: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundImage: 'radial-gradient(rgba(0,240,255,0.05) 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
             <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-cyan)', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '8px', height: '8px', background: 'var(--accent-cyan)', animation: 'pulse 2s infinite' }}></div>
                LIVE ANIMATION
             </div>
             
             {/* HUD Brackets */}
             <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', width: '15px', height: '15px', borderTop: '2px solid var(--accent-cyan)', borderRight: '2px solid var(--accent-cyan)' }}></div>
             <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', width: '15px', height: '15px', borderBottom: '2px solid var(--accent-cyan)', borderLeft: '2px solid var(--accent-cyan)' }}></div>
             <div style={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem', width: '15px', height: '15px', borderBottom: '2px solid var(--accent-cyan)', borderRight: '2px solid var(--accent-cyan)' }}></div>
             
             <div style={{ width: '240px', height: '240px', filter: 'brightness(1.5) drop-shadow(0 0 20px rgba(0,240,255,0.3))' }}>
                {/* @ts-ignore */}
                {(() => {
                  const LottieAny = Lottie as any;
                  return <LottieAny animationData={animationData} loop autoplay />;
                })()}
             </div>
          </div>

        </div>

        {/* Timeline */}
        <div style={{ marginTop: '3rem', display: 'flex', gap: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-secondary)', overflowX: 'auto', paddingBottom: '1rem', letterSpacing: '0.1em' }}>
           <span style={{ color: 'var(--text-primary)' }}>EXTRACT</span>
           <span style={{ color: 'var(--accent-cyan)' }}>→</span>
           <span style={{ color: 'var(--text-primary)' }}>LOAD</span>
           <span style={{ color: 'var(--accent-cyan)' }}>→</span>
           <span style={{ color: 'var(--text-primary)' }}>PARSE</span>
           <span style={{ color: 'var(--accent-cyan)' }}>→</span>
           <span style={{ color: 'var(--text-primary)' }}>MOUNT</span>
           <span style={{ color: 'var(--accent-cyan)' }}>→</span>
           <span style={{ color: 'var(--accent-cyan)' }}>VERIFY</span>
        </div>

      </div>
    </section>
  );
}
