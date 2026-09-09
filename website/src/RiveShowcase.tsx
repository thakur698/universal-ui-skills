import { useRive } from '@rive-app/react-canvas';

export function RiveShowcase() {
  const { RiveComponent } = useRive({
    src: '/assets/vehicles.riv',
    autoplay: true,
  });

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-base)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div className="text-center mx-auto max-w-2xl reveal mb-8">
          <span className="tech-label text-anim-blur">Integration Proof</span>
          <h2 className="text-anim-blur text-anim-delay-1">Rive Execution Verified</h2>
          <p className="text-anim-blur text-anim-delay-2" style={{ color: 'var(--text-secondary)' }}>
            This component proves the Rive integration is executable in the React environment.
          </p>
        </div>
        <div 
          className="reveal delay-200"
          style={{ 
            width: '100%', 
            height: '400px', 
            background: 'var(--bg-surface-elevated)', 
            border: '1px solid var(--border-strong)',
            position: 'relative'
          }}
        >
          <div style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 10 }}>
            <span className="tech-label" style={{ color: 'var(--accent-cyan)' }}>AVAILABLE + EXECUTABLE</span>
          </div>
          <RiveComponent />
        </div>
      </div>
    </section>
  );
}
