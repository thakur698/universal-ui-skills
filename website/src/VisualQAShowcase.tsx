import { Camera } from 'lucide-react';

export function VisualQAShowcase() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-surface-elevated)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        <div style={{ marginBottom: '3rem' }}>
          <span className="tech-label" style={{ color: 'var(--text-secondary)' }}>INTEGRATION PROOF</span>
          <h2 style={{ fontSize: '2.5rem', lineHeight: '1.1', marginBottom: '0.5rem' }}>Browser Visual QA<br />Verified</h2>
          <div style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.875rem' }}>AVAILABLE</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ border: '1px solid var(--border-subtle)', padding: '2rem', backgroundColor: 'var(--bg-surface)' }}>
          
          {/* Left Column: Matrix */}
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '1rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem', marginBottom: '1rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>STATUS</span>
              <span style={{ color: 'var(--accent-cyan)' }}>AVAILABLE</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '1rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem', marginBottom: '1rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>RUNTIME</span>
              <span style={{ color: 'var(--text-primary)' }}>Antigravity / Playwright</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '1rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem', marginBottom: '1rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>PACKAGE</span>
              <span style={{ color: 'var(--text-primary)' }}>browser_subagent</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '1rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem', marginBottom: '1rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>TARGET</span>
              <span style={{ color: 'var(--text-primary)' }}>React / Web / Flutter</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '1rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>VERIFICATION</span>
              <span style={{ color: 'var(--text-primary)' }}>Self-Referential Screenshot</span>
            </div>
          </div>

          {/* Right Column: Concept Proof */}
          <div className="flex-center" style={{ backgroundColor: 'var(--bg-base)', border: '1px solid var(--border-subtle)', padding: '2rem', position: 'relative', minHeight: '300px' }}>
             <div style={{ position: 'absolute', top: '1rem', left: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                QA SIMULATION
             </div>
             
             <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)' }}>
                <Camera size={48} style={{ color: 'var(--accent-cyan)', opacity: 0.8 }} />
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textAlign: 'center' }}>
                  AWAITING SCREENSHOT CAPTURE<br/>
                  <span style={{ color: 'var(--text-muted)' }}>The subagent will photograph this exact component.</span>
                </div>
             </div>
          </div>

        </div>

        {/* Timeline */}
        <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.875rem', color: 'var(--text-secondary)', overflowX: 'auto', paddingBottom: '1rem' }}>
           <span style={{ color: 'var(--text-primary)' }}>LAUNCH BROWSER</span>
           <span>→</span>
           <span style={{ color: 'var(--text-primary)' }}>NAVIGATE</span>
           <span>→</span>
           <span style={{ color: 'var(--text-primary)' }}>SET VIEWPORT</span>
           <span>→</span>
           <span style={{ color: 'var(--text-primary)' }}>WAIT FOR RENDER</span>
           <span>→</span>
           <span style={{ color: 'var(--accent-cyan)' }}>CAPTURE</span>
        </div>

      </div>
    </section>
  );
}
