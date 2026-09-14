import { Lottie } from "lottie-react";
// @ts-ignore
// @ts-ignore
import animationData from "./assets/loading.json";

export function LottieShowcase() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-base)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        <div style={{ marginBottom: '3rem' }}>
          <span className="tech-label" style={{ color: 'var(--text-secondary)' }}>INTEGRATION PROOF</span>
          <h2 style={{ fontSize: '2.5rem', lineHeight: '1.1', marginBottom: '0.5rem' }}>Lottie Execution<br />Verified</h2>
          <div style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.875rem' }}>AVAILABLE + EXECUTABLE</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ border: '1px solid var(--border-subtle)', padding: '2rem', backgroundColor: 'var(--bg-surface)' }}>
          
          {/* Left Column: Matrix */}
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '1rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem', marginBottom: '1rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>STATUS</span>
              <span style={{ color: 'var(--accent-cyan)' }}>AVAILABLE + EXECUTABLE</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '1rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem', marginBottom: '1rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>RUNTIME</span>
              <span style={{ color: 'var(--text-primary)' }}>React / Web</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '1rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem', marginBottom: '1rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>PACKAGE</span>
              <span style={{ color: 'var(--text-primary)' }}>lottie-react</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '1rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem', marginBottom: '1rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>ASSET</span>
              <span style={{ color: 'var(--text-primary)' }}>loading.json</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '1rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem', marginBottom: '1rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>RENDERER</span>
              <span style={{ color: 'var(--text-primary)' }}>Canvas / SVG</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '1rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>VERIFICATION</span>
              <span style={{ color: 'var(--text-primary)' }}>Browser Visual QA</span>
            </div>
          </div>

          {/* Right Column: Animation */}
          <div className="flex-center" style={{ backgroundColor: 'var(--bg-base)', border: '1px solid var(--border-subtle)', padding: '2rem', position: 'relative', minHeight: '300px' }}>
             <div style={{ position: 'absolute', top: '1rem', left: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                LIVE ANIMATION
             </div>
             <div style={{ width: '200px', height: '200px' }}>
                <Lottie src={animationData} loop autoplay />
             </div>
          </div>

        </div>

        {/* Timeline */}
        <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.875rem', color: 'var(--text-secondary)', overflowX: 'auto', paddingBottom: '1rem' }}>
           <span style={{ color: 'var(--text-primary)' }}>EXTRACT</span>
           <span>→</span>
           <span style={{ color: 'var(--text-primary)' }}>LOAD</span>
           <span>→</span>
           <span style={{ color: 'var(--text-primary)' }}>PARSE</span>
           <span>→</span>
           <span style={{ color: 'var(--text-primary)' }}>MOUNT</span>
           <span>→</span>
           <span style={{ color: 'var(--accent-cyan)' }}>VERIFY</span>
        </div>

      </div>
    </section>
  );
}
