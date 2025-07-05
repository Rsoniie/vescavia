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
    <div className="w-full px-0 mx-0 py-20">
      <motion.ul
        className="list-none p-0 m-0 grid grid-cols-3 gap-3 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {order.map((videoUrl) => (
          <motion.li
            key={videoUrl}
            layout
            transition={spring}
            className="w-[45rem] h-[30rem] rounded-lg overflow-hidden bg-gray-100"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 15px rgba(0,0,0,0.2)',
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
              onError={(e) => console.error('Video failed to load:', videoUrl)}
            />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

const initialVideos = ['/vfx1.mp4', '/vfx2.mp4', '/vfx3.mp4'];

function shuffle([...array]: string[]) {
  return array.sort(() => Math.random() - 0.5);
}

const spring: Transition = {
  type: 'spring',
  damping: 20,
  stiffness: 300,
};
