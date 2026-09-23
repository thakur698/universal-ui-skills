import { Camera } from 'lucide-react';

export function VisualQAShowcase() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-base)', borderTop: '1px solid var(--border-strong)', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'var(--glow-cyan-strong)', opacity: 0.5 }}></div>
      <div className="container">
        
        <div style={{ marginBottom: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid var(--border-strong)', paddingBottom: '2rem' }}>
          <div>
            <span className="tech-label" style={{ color: 'var(--text-secondary)' }}>INTEGRATION PROOF</span>
            <h2 style={{ fontSize: '3rem', lineHeight: '1.05', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Browser Visual QA Verified</h2>
          </div>
          <div style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', letterSpacing: '0.1em', textAlign: 'right' }}>
            STATUS: AVAILABLE<br/>
            PLAYWRIGHT: STANDBY
          </div>
        </div>

        <div className="grid-2" style={{ gap: '1px', background: 'var(--border-strong)', border: '1px solid var(--border-strong)' }}>
          
          {/* Left Column: Matrix */}
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', background: 'var(--bg-surface)', padding: '3rem', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--accent-cyan)' }}></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed var(--border-strong)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
              <span style={{ color: 'var(--text-dim)' }}>RUNTIME</span>
              <span style={{ color: 'var(--text-primary)' }}>Antigravity / Playwright</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed var(--border-strong)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
              <span style={{ color: 'var(--text-dim)' }}>PACKAGE</span>
              <span style={{ color: 'var(--text-primary)' }}>browser_subagent</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed var(--border-strong)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
              <span style={{ color: 'var(--text-dim)' }}>TARGET</span>
              <span style={{ color: 'var(--text-primary)' }}>React / Web / Flutter</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-dim)' }}>VERIFICATION</span>
              <span style={{ color: 'var(--accent-cyan)' }}>Self-Referential Screenshot</span>
            </div>
          </div>

          {/* Right Column: Concept Proof */}
          <div style={{ backgroundColor: 'var(--bg-base)', padding: '3rem', position: 'relative', minHeight: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundImage: 'radial-gradient(rgba(0,240,255,0.05) 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
             <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-cyan)', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '8px', height: '8px', background: 'var(--accent-cyan)', animation: 'pulse 2s infinite' }}></div>
                QA SIMULATION
             </div>
             
             {/* HUD Brackets */}
             <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', width: '15px', height: '15px', borderTop: '2px solid var(--accent-cyan)', borderRight: '2px solid var(--accent-cyan)' }}></div>
             <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', width: '15px', height: '15px', borderBottom: '2px solid var(--accent-cyan)', borderLeft: '2px solid var(--accent-cyan)' }}></div>
             <div style={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem', width: '15px', height: '15px', borderBottom: '2px solid var(--accent-cyan)', borderRight: '2px solid var(--accent-cyan)' }}></div>
             
             <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', color: 'var(--text-secondary)', padding: '2rem', border: '1px dashed rgba(0,240,255,0.3)', background: 'rgba(0,240,255,0.02)' }}>
                <Camera size={48} style={{ color: 'var(--accent-cyan)', filter: 'drop-shadow(0 0 10px rgba(0,240,255,0.5))' }} />
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', textAlign: 'center', lineHeight: '1.6', color: 'var(--accent-cyan)' }}>
                  AWAITING SCREENSHOT CAPTURE<br/>
                  <span style={{ color: 'var(--text-dim)', fontSize: '0.75rem' }}>The subagent will photograph this exact component.</span>
                </div>
             </div>
          </div>

        </div>

        {/* Timeline */}
        <div style={{ marginTop: '3rem', display: 'flex', gap: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-secondary)', overflowX: 'auto', paddingBottom: '1rem', letterSpacing: '0.1em' }}>
           <span style={{ color: 'var(--text-primary)' }}>LAUNCH BROWSER</span>
           <span style={{ color: 'var(--accent-cyan)' }}>→</span>
           <span style={{ color: 'var(--text-primary)' }}>NAVIGATE</span>
           <span style={{ color: 'var(--accent-cyan)' }}>→</span>
           <span style={{ color: 'var(--text-primary)' }}>SET VIEWPORT</span>
           <span style={{ color: 'var(--accent-cyan)' }}>→</span>
           <span style={{ color: 'var(--text-primary)' }}>WAIT FOR RENDER</span>
           <span style={{ color: 'var(--accent-cyan)' }}>→</span>
           <span style={{ color: 'var(--accent-cyan)' }}>CAPTURE</span>
        </div>

      </div>
    </section>
  );
}
