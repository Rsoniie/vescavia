'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import DynamicEmoji from '../components/animations/dynamicComp';

export default function DefinesUs() {
  const [loaded, setLoaded] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const images = ['/img1.webp', '/img2.jpg', '/img3.webp', '/img4.avif'];
  useEffect(() => {
    if (inView) setLoaded(true);
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      className="min-h-[50vh] bg-[var(--color-surface)] p-8 md:p-12 my-14 flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={loaded ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-24 items-center">
        <div className="w-full md:w-[30%] flex justify-center">
          <DynamicEmoji images={images} />
        </div>

        <div className="w-full md:w-[70%] space-y-6">
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-[var(--color-text-inverse)]"
            initial={{ y: -20, opacity: 0 }}
            animate={loaded ? { y: 0, opacity: 1 } : {}}
            transition={{
              delay: 0.4,
              type: 'spring',
              stiffness: 100,
            }}
          >
            What Defines Us?
          </motion.h1>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={loaded ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <motion.p
              className="text-lg md:text-xl text-[var(--color-text-inverse)] leading-relaxed"
              initial={{ x: 20, opacity: 0 }}
              animate={loaded ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              At Vescavia, we believe in the power of bold ideas and creative storytelling. Our team is passionate about transforming visions into viral realities, blending strategy, design, and technology to help brands stand out in a crowded digital world.
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-[var(--color-text-inverse)] leading-relaxed"
              initial={{ x: 20, opacity: 0 }}
              animate={loaded ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
            >
              We don’t just create content—we craft experiences that connect, engage, and inspire. From brand management to web development and viral ad campaigns, we’re dedicated to scaling your brand with authenticity, innovation, and measurable results.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
