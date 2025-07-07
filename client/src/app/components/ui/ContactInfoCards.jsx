'use client';

import { motion } from 'framer-motion';
import InfoCard from '../ui/InfoCard';
import { useState } from 'react';

export default function ContactInfoCards({
  className = '',
  variants = {},
  fontClasses = {},
  cards = [
    {
      icon: '⚡',
      title: 'Quick Response',
      desc: 'We respond within 24 hours',
      color: 'bg-yellow-100/20',
      hoverColor: 'bg-yellow-100/40'
    },
    {
      icon: '🎨',
      title: 'Creative Solutions',
      desc: 'Tailored to your brand needs',
      color: 'bg-purple-100/20',
      hoverColor: 'bg-purple-100/40'
    },
    {
      icon: '🚀',
      title: 'Scale Ready',
      desc: 'Built for growth and success',
      color: 'bg-blue-100/20',
      hoverColor: 'bg-blue-100/40'
    },
  ],
}) {
  const { containerVariants, itemVariants } = variants;
  const [hoveredCard, setHoveredCard] = useState(null);

  const defaultContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const defaultItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      y: -10,
      scale: 1.03,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 ${className}`}
      variants={containerVariants || defaultContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          variants={itemVariants || defaultItemVariants}
          whileHover="hover"
          onHoverStart={() => setHoveredCard(index)}
          onHoverEnd={() => setHoveredCard(null)}
          className="relative focus-within:ring-2 focus-within:ring-yellow-300 focus:outline-none rounded-2xl"
        >
          {/* Animated background layer */}
          <motion.div
            className={`absolute inset-0 rounded-2xl z-0 transition-colors duration-300 ${card.color}`}
            animate={{
              backgroundColor: hoveredCard === index
                ? card.hoverColor.replace('/40', '/60') || '#fff'
                : card.color,
              scale: hoveredCard === index ? 1.02 : 1,
            }}
            transition={{ type: 'spring', stiffness: 300 }}
          />

          {/* Subtle dot accents */}
          {hoveredCard === index && (
            <>
              <motion.div
                className="absolute top-2 left-2 w-2 h-2 rounded-full bg-white/30 z-10"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1 }}
              />
              <motion.div
                className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-white/30 z-10"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              />
            </>
          )}

          {/* InfoCard content */}
          <div className="relative z-10">
            <InfoCard
              icon={card.icon}
              title={card.title}
              description={card.desc}
              fontClasses={fontClasses}
              isHovered={hoveredCard === index}
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
