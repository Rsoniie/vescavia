'use client';

import { motion } from 'framer-motion';
import { useTransform } from 'framer-motion';
import AnimatedBadge from '../ui/AnimatedBadge';

export default function ContactHero({
  titleY,
  fontClasses = {},
  variants = {},
  badges = ['Free Consultation', '24h Response', 'Custom Solutions'],
}) {
  const { containerVariants, itemVariants } = variants;

  return (
    <motion.div
      className="text-center mb-12 sm:mb-16"
      style={{ y: titleY }}
      variants={itemVariants}
    >
      <motion.h1
        className={`mb-4 sm:mb-6 font-bold text-white leading-tight ${fontClasses.title || ''}`}
        style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: '1.2' }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <motion.span
          className="inline-block mr-2"
          animate={{ rotate: [0, 15, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatDelay: 5,
          }}
        >
          🚀
        </motion.span>
        Ready to Scale Your Brand?
      </motion.h1>

      <motion.p
        className={`text-white/80 mb-8 sm:mb-12 max-w-2xl mx-auto ${fontClasses.body || ''}`}
        style={{
          fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
          lineHeight: '1.6',
        }}
        variants={itemVariants}
      >
        Let's make something{' '}
        <motion.span
          className="font-semibold text-purple-400"
          whileHover={{ scale: 1.05 }}
        >
          funky
        </motion.span>{' '}
        together. Drop us a message and begin your transformation today.
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-8"
        variants={containerVariants}
      >
        {badges.map((badge, index) => (
          <AnimatedBadge key={badge} variants={itemVariants}>
            {badge}
          </AnimatedBadge>
        ))}
      </motion.div>
    </motion.div>
  );
}
