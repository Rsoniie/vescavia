'use client';
import { Transition } from 'motion/react';
import * as motion from 'motion/react-client';
import { useEffect, useState } from 'react';

export default function VideoGrid() {
  const [order, setOrder] = useState(initialVideos);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      const timeout = setTimeout(() => setOrder(shuffle(order)), 1000);
      return () => clearTimeout(timeout);
    }
  }, [order, isActive]);

  useEffect(() => {
    setIsActive(true);
  }, []);

  return (
    <div className="w-full px-4 mx-auto py-20 max-w-7xl">
      <motion.ul
        className="list-none p-0 m-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {order.map((videoUrl, index) => (
          <motion.li
            key={`${videoUrl}-${index}`}
            layout
            transition={spring}
            className="w-full aspect-square rounded-lg overflow-hidden bg-gray-100 shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            <video
              src={videoUrl}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              onError={(e) => {
                console.error('Video failed to load:', videoUrl);
                // You could set a fallback image here
              }}
            />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

// Add some sample videos or use placeholder
const initialVideos = [
  '/vfx1.mp4', 
  '/vfx2.mp4', 
  '/vfx3.mp4'
];

function shuffle([...array]: string[]) {
  return array.sort(() => Math.random() - 0.5);
}

const spring: Transition = {
  type: 'spring',
  damping: 20,
  stiffness: 300,
};