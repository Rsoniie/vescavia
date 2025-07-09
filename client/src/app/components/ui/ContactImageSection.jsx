'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import FloatingEmoji from '../ui/FloatingEmoji';

export default function ContactImageSection({
  imageSrc = '/images/contact/doll.png',
  imageAlt = 'Creative brand illustration',
  emojis = ['✨', '🎨', '🔥', '💡'],
  className = '',
}) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      className={`hidden md:block w-full lg:w-1/3 relative ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 200 }}
    >
      <div className="relative overflow-hidden rounded-xl h-full">
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{
            scale: imageLoaded ? 1 : 1.02,
            opacity: imageLoaded ? 1 : 0.8,
          }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={500}
            height={700}
            className={`object-cover h-full w-full rounded-xl transition-all duration-700 ${
              imageLoaded ? 'blur-0' : 'blur-sm'
            }`}
            quality={85}
            priority
            onLoad={() => setImageLoaded(true)}
          />
        </motion.div>

        {/* Floating emojis */}
        {emojis.map((emoji, i) => (
          <FloatingEmoji key={i} emoji={emoji} index={i} />
        ))}
      </div>
    </motion.div>
  );
}
