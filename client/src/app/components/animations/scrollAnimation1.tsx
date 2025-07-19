'use client';
import { useEffect, useState, useRef } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from 'framer-motion';

// Move outside component to prevent recreation on each render
const VIDEOS = ['/sv1.mp4', '/sv2.mp4', '/sv3.mp4', '/sv4.mp4'];

export default function VideoGrid() {
  const [current, setCurrent] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Preload next video for smoother transitions
  useEffect(() => {
    const nextIndex = (current + 1) % VIDEOS.length;
    const nextVideo = videoRefs.current[nextIndex];
    if (nextVideo) {
      nextVideo.load(); // Preload next video
    }
  }, [current]);

  // Replace deprecated useViewportScroll with useScroll
  const { scrollY } = useScroll();
  
  // Call hooks directly at the top level - DO NOT wrap in useMemo
  const scale = useTransform(scrollY, [0, 400], [1, 1.1]);
  const borderRadius = useTransform(scrollY, [0, 400], ['1rem', '0rem']);
  const boxShadow = useTransform(
    scrollY,
    [0, 400],
    ['0 10px 30px rgba(0,0,0,0.3)', '0 0px 0px rgba(0,0,0,0)']
  );

  // Advance to next video on end
  const handleEnded = () => {
    setCurrent((prev) => (prev + 1) % VIDEOS.length);
  };

  // When current changes, play the new video
  useEffect(() => {
    const vid = videoRefs.current[current];
    if (vid) {
      vid.currentTime = 0;
      vid.play();
    }
  }, [current]);

  const handleLoadedData = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  return (
    <div className="w-full flex justify-center items-center">
      <motion.div
        className="relative w-[90vw] aspect-video bg-black overflow-hidden"
        style={{ scale, borderRadius, boxShadow }}
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          </div>
        )}

        {hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-black text-white">
            <p>Unable to load video</p>
          </div>
        )}

        <AnimatePresence mode="wait">
          <motion.video
            key={VIDEOS[current]}
            ref={(el) => {
              if (el) videoRefs.current[current] = el;
            }}
            src={VIDEOS[current]}
            className="w-full h-full object-cover"
            autoPlay
            loop={false}
            muted
            playsInline
            preload="metadata"
            onEnded={handleEnded}
            onLoadedData={handleLoadedData}
            onError={handleError}
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
