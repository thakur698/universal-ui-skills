import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface HardwareButtonProps {
  children: ReactNode;
  onClick?: () => void;
  status?: 'default' | 'active' | 'warning';
  className?: string;
  fullWidth?: boolean;
}

export function HardwareButton({ children, onClick, status = 'default', className = '', fullWidth = false }: HardwareButtonProps) {
  
  const getStatusColor = () => {
    switch (status) {
      case 'active': return 'var(--accent-cyan)';
      case 'warning': return '#f87171';
      default: return 'var(--text-primary)';
    }
  };

  const getStatusBg = () => {
    switch (status) {
      case 'active': return 'rgba(0, 240, 255, 0.1)';
      case 'warning': return 'rgba(248, 113, 113, 0.1)';
      default: return 'var(--bg-surface)';
    }
  };

  const getStatusShadow = () => {
    switch (status) {
      case 'active': return '0 0 15px rgba(0, 240, 255, 0.3)';
      case 'warning': return '0 0 15px rgba(248, 113, 113, 0.3)';
      default: return 'none';
    }
  };

  return (
    <motion.button
      onClick={onClick}
      className={`hardware-btn ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem',
        padding: '1rem 2rem',
        background: getStatusBg(),
        border: `1px solid ${getStatusColor()}`,
        color: getStatusColor(),
        fontFamily: 'var(--font-mono)',
        fontSize: '0.85rem',
        letterSpacing: '0.1em',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: getStatusShadow(),
        width: fullWidth ? '100%' : 'auto',
      }}
    >
      {/* Corner Brackets */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '8px', height: '8px', borderTop: `2px solid ${getStatusColor()}`, borderLeft: `2px solid ${getStatusColor()}` }}></div>
      <div style={{ position: 'absolute', bottom: 0, right: 0, width: '8px', height: '8px', borderBottom: `2px solid ${getStatusColor()}`, borderRight: `2px solid ${getStatusColor()}` }}></div>
      
      {/* Animated Scanline Background */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none', backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '4px 4px', opacity: 0.5, zIndex: 0 }}></div>
      
      <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        {children}
      </span>
    </motion.button>
  );
}
