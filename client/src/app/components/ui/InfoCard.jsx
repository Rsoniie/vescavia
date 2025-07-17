'use client';

import { motion, AnimatePresence } from 'framer-motion';

import React from 'react';

export default function InfoCard({
  icon,
  title,
  description,
  fontClasses = {},
  isHovered,
}) {
  // Variants for the container
  const containerVariants = {
    initial: { scale: 1 },
    hovered: {
      scale: 1.02,
      boxShadow: '0px 12px 24px rgba(255, 255, 255, 0.1)',
    },
  };

  // Variants for the icon
  const iconVariants = {
    hovered: {
      scale: [1, 1.2, 1],
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  };

  // Variants for each character
  const charVariants = {
    hovered: (i) => ({
      y: [0, -5, 0],
      color: ['#ffffff', '#facc15', '#ffffff'],
      transition: {
        delay: i * 0.03,
        duration: 0.6,
        repeat: Infinity,
        repeatDelay: 2,
      },
    }),
  };

  return (
    <motion.div
      role="group"
      aria-label={title}
      variants={containerVariants}
      initial="initial"
      animate={isHovered ? 'hovered' : 'initial'}
      className={`p-6 rounded-2xl backdrop-blur-md border border-[color-mix(in_srgb,var(--color-text-primary)_10%,transparent)] relative overflow-hidden transition-all duration-300 ease-in-out bg-[color-mix(in_srgb,var(--color-background-dark)_50%,transparent)]`}
    >
      {/* Icon */}
      <motion.div
        className="text-4xl mb-4"
        variants={iconVariants}
        animate={isHovered ? 'hovered' : 'initial'}
      >
        {icon}
      </motion.div>

      {/* Title */}
      <motion.h3
        className={`text-xl font-bold mb-2 text-white ${fontClasses?.title || ''}`}
      >
        {title.split('').map((char, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={charVariants}
            animate={isHovered ? 'hovered' : 'initial'}
            className="inline-block"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.h3>

      {/* Description */}
      <motion.p
        className={`text-white/80 text-sm leading-relaxed ${fontClasses?.description || ''}`}
        animate={{
          opacity: isHovered ? 1 : 0.85,
          x: isHovered ? [0, 4, -4, 0] : 0,
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {description}
      </motion.p>

      {/* Hover effect overlays */}
      <AnimatePresence>
        {isHovered && (
          <>
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 pointer-events-none rounded-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.6 }}
            />
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
