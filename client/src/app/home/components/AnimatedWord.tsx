import { motion } from 'framer-motion';

interface AnimatedWordProps {
  word: string;
  font: string;
  color: string;
}

export default function AnimatedWord({ word, font, color }: AnimatedWordProps) {
  return (
    <motion.span
      key={word}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className={`inline-block font-bold ${color} ${font}`}
      style={{
        fontSize: 'inherit',
        minWidth: 180,
        fontFamily: `var(--font-${font.replace('font-', '')})`,
      }}
    >
      {word}
    </motion.span>
  );
}
