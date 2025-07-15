'use client';
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useViewportScroll, useTransform } from 'framer-motion';

export default function VideoGrid() {
  const [current, setCurrent] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const videos = initialVideos;

  // Scroll zoom effect
  const { scrollY } = useViewportScroll();
  // Adjust these values for when the zoom should start/end
  const scale = useTransform(scrollY, [0, 400], [1, 1.1]);
  const borderRadius = useTransform(scrollY, [0, 400], ["1rem", "0rem"]);
  const boxShadow = useTransform(scrollY, [0, 400], [
    "0 10px 30px rgba(0,0,0,0.3)",
    "0 0px 0px rgba(0,0,0,0)"
  ]);

  // Advance to next video on end
  const handleEnded = () => {
    setCurrent((prev) => (prev + 1) % videos.length);
  };

  // When current changes, play the new video
  useEffect(() => {
    const vid = videoRefs.current[current];
    if (vid) {
      vid.currentTime = 0;
      vid.play();
    }
  }, [current]);

  return (
    <div className="w-full flex justify-center items-center">
      <motion.div
        className="relative w-[90vw] aspect-video bg-black overflow-hidden"
        style={{ scale, borderRadius, boxShadow }}
      >
        <AnimatePresence mode="wait">
          <motion.video
            key={videos[current]}
            ref={(el) => {
              videoRefs.current[current] = el;
            }}
            src={videos[current]}
            className="w-full h-full object-cover"
            autoPlay
            loop={false}
            muted
            playsInline
            onEnded={handleEnded}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

const initialVideos = ['/sv1.mp4', '/sv2.mp4', '/sv3.mp4', '/sv4.mp4'];

function shuffle([...array]: string[]) {
  return array.sort(() => Math.random() - 0.5);
}
