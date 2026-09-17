import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

export function AnimatedNavLink({ href, children }: { href: string, children: string }) {
  const [isHovered, setIsHovered] = useState(false);
  const [displayText, setDisplayText] = useState(children);

  useEffect(() => {
    if (isHovered) {
      let iteration = 0;
      const interval = setInterval(() => {
        setDisplayText(
          children.split("").map((letter, index) => {
            if (index < iteration) {
              return children[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          }).join("")
        );
        if (iteration >= children.length) {
          clearInterval(interval);
        }
        iteration += 1 / 2;
      }, 30);
      return () => clearInterval(interval);
    } else {
      setDisplayText(children);
    }
  }, [isHovered, children]);

  return (
    <motion.a 
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.85rem',
        textDecoration: 'none',
        color: isHovered ? 'var(--accent-cyan)' : 'var(--text-secondary)',
        letterSpacing: '0.15em',
        transition: 'color 0.2s',
        minWidth: '120px',
        justifyContent: 'center'
      }}
    >
      <motion.span
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 10 }}
        style={{ color: 'var(--accent-cyan)', position: 'absolute', left: 0 }}
      >
        [
      </motion.span>
      <span style={{ position: 'relative', zIndex: 1 }}>{displayText}</span>
      <motion.span
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
        style={{ color: 'var(--accent-cyan)', position: 'absolute', right: 0 }}
      >
        ]
      </motion.span>
    </motion.a>
  );
}
