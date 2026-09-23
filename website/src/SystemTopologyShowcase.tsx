import { motion } from 'framer-motion';
import { Network, Server, Database } from 'lucide-react';
import { HardwareButton } from './HardwareButton';

export function SystemTopologyShowcase() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  };

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-base)', borderTop: '1px solid var(--border-strong)', position: 'relative', overflow: 'hidden' }}>
      {/* Background Matrix */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '64px 64px', zIndex: 0 }}></div>
      <div style={{ position: 'absolute', top: '50%', left: '50%', width: '100%', height: '100%', background: 'radial-gradient(ellipse at center, rgba(0, 240, 255, 0.05) 0%, transparent 60%)', transform: 'translate(-50%, -50%)', pointerEvents: 'none', zIndex: 0 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div 
          className="reveal" 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          style={{ marginBottom: '4rem', borderBottom: '1px solid var(--accent-cyan)', paddingBottom: '2rem' }}
        >
          <motion.span variants={itemVariants} className="tech-label" style={{ color: 'var(--accent-cyan)' }}>[ DIAGRAM : NETWORK TOPOLOGY ]</motion.span>
          <motion.h2 variants={itemVariants} style={{ fontSize: '3rem', lineHeight: '1.05', marginBottom: '1rem', color: 'var(--text-primary)', textShadow: '0 0 20px rgba(0,240,255,0.2)' }}>Live Architecture State</motion.h2>
          <motion.p variants={itemVariants} style={{ color: 'var(--text-secondary)', maxWidth: '44rem', fontSize: '1.1rem', margin: 0 }}>
            Media-first composition prioritizes structural data flows over generic iconography. This interactive topology diagram is built with Framer Motion spring physics and tactile hardware states.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid-3" 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          style={{ gap: '2rem' }}
        >
          {/* Node 1 */}
          <motion.div variants={itemVariants} style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-strong)', padding: '2rem', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--accent-cyan)' }}></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px dashed var(--border-strong)', paddingBottom: '1rem' }}>
               <Network style={{ color: 'var(--accent-cyan)' }} />
               <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-cyan)' }}>NODE_01</span>
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Ingress Gateway</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '2rem' }}>Handles incoming telemetry and traffic routing.</p>
            <HardwareButton fullWidth status="active">
              INSPECT NODE
            </HardwareButton>
          </motion.div>

          {/* Node 2 */}
          <motion.div variants={itemVariants} style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-strong)', padding: '2rem', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--text-dim)' }}></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px dashed var(--border-strong)', paddingBottom: '1rem' }}>
               <Server style={{ color: 'var(--text-primary)' }} />
               <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)' }}>NODE_02</span>
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Compute Cluster</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '2rem' }}>Distributed processing for heavy orchestration.</p>
            <HardwareButton fullWidth>
              BOOT SEQUENCE
            </HardwareButton>
          </motion.div>

          {/* Node 3 */}
          <motion.div variants={itemVariants} style={{ background: 'var(--bg-surface)', border: '1px solid #f87171', padding: '2rem', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: '#f87171' }}></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px dashed #f87171', paddingBottom: '1rem' }}>
               <Database style={{ color: '#f87171' }} />
               <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#f87171' }}>NODE_03</span>
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>State Storage</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '2rem' }}>Persistent storage cluster. Currently requires attention.</p>
            <HardwareButton fullWidth status="warning">
              RESOLVE ALERT
            </HardwareButton>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
