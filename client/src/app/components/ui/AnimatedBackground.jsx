'use client';

import { motion, useSpring, useTransform } from 'framer-motion';
import { useMemo } from 'react';

export default function AnimatedBackground({
  mousePosition,
  scrollYProgress,
  className = '',
}) {
  const smoothScroll = useSpring(scrollYProgress, {
    mass: 0.2,
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  const orbScale = useTransform(smoothScroll, [0, 1], [1, 1.1]);

  const funkyColors = useMemo(
    () => ['#8b5cf6', '#ec4899', '#3b82f6', '#10b981', '#f59e0b'],
    [],
  );

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {/* Main glowing orbs */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-purple-500/8 rounded-full blur-3xl"
        style={{
          scale: orbScale,
          x: mousePosition.x * 2,
          y: mousePosition.y * 2,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-pink-500/8 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 20, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full opacity-40"
          style={{
            left: `${15 + i * 12}%`,
            top: `${25 + i * 8}%`,
            backgroundColor: funkyColors[i % funkyColors.length],
          }}
          animate={{
            y: [0, -60, 0],
            x: [0, 20, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
}
