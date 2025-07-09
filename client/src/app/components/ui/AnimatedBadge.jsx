'use client';

import { motion } from 'framer-motion';

export default function AnimatedBadge({
  children,
  className = '',
  variants,
  ...props
}) {
  return (
    <motion.div
      className={`bg-white/5 rounded-full px-4 py-2 text-sm text-white backdrop-blur-sm border border-white/10 ${className}`}
      variants={variants}
      whileHover={{
        scale: 1.05,
        backgroundColor: 'rgba(168, 85, 247, 0.2)',
        borderColor: 'rgba(168, 85, 247, 0.4)',
      }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
