'use client';

import { motion } from 'framer-motion';

export default function FloatingEmoji({
  emoji,
  index,
  className = '',
  position = {},
}) {
  const defaultPosition = {
    top: `${20 + index * 15}%`,
    left: index % 2 === 0 ? '10%' : '80%',
  };

  return (
    <motion.div
      className={`absolute text-xl pointer-events-none opacity-60 ${className}`}
      style={{ ...defaultPosition, ...position }}
      animate={{
        y: [0, -15, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 5 + index,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: index * 0.5,
      }}
    >
      {emoji}
    </motion.div>
  );
}
