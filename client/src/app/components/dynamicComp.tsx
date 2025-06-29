

'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const DynamicEmoji = () => {
  const ghostImages = ['/img1.webp', '/img2.jpg', '/img3.webp', '/img4.avif'];
  const [currentImage, setCurrentImage] = useState(ghostImages[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      const idx = Math.floor(Math.random() * ghostImages.length);
      setCurrentImage(ghostImages[idx]);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-full relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ scale: 0.2, opacity: 0, y: 100, rotate: -30 }}
          animate={{ scale: 1, opacity: 1, y: 0, rotate: 0 }}
          exit={{ scale: 0.5, opacity: 0, rotate: 30, transition: { duration: 0.3 } }}
          transition={{ type: 'spring', stiffness: 80, damping: 8 }}
          className="absolute"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
            whileTap={{ scale: 0.9 }}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-80 h-80"
          >
            <Image
              src={currentImage}
              alt="Dynamic reach visual"
              fill
              sizes="(max-width: 640px) 100vw, 320px"
              className="object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
              unoptimized
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <motion.div
        className="absolute bottom-0 h-1 bg-white/50 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: '70%' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      />
    </div>
  );
};

export default DynamicEmoji;
