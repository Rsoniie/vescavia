'use client';

import React, { useState, useEffect } from 'react';

interface MarqueeBannerProps {
  messages?: string[];
  speed?: number;
  direction?: 'left' | 'right';
  backgroundColor?: string;
  textColor?: string;
  className?: string;
  pauseOnHover?: boolean;
  thickness?: 'thin' | 'medium' | 'thick';
  emojiVariants?: string[][];
}

const DEFAULT_EMOJIS = [
  ['🚀', '🛸', '👾', '🌌'],
  ['🎉', '🎊', '✨', '🎈'],
  ['🌟', '⭐', '💫', '☄️'],
];

export default function MarqueeBanner({
  messages = ['New feature release!', 'Limited time offer', "Don't miss out"],
  speed = 20,
  direction = 'left',
  backgroundColor = 'bg-white',
  textColor = 'text-[#11001D]',
  className = '',
  pauseOnHover = true,
  thickness = 'medium',
  emojiVariants = DEFAULT_EMOJIS,
}: MarqueeBannerProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [currentEmojis, setCurrentEmojis] = useState<string[]>([]);

  const animationClass =
    direction === 'left' ? 'animate-marquee' : 'animate-marquee-right';
  const animationStyle = { '--speed': `${speed}s` } as React.CSSProperties;

  const thicknessClasses = {
    thin: 'py-2 text-sm',
    medium: 'py-4 text-3xl',
    thick: 'py-6 text-5xl',
  };
  useEffect(() => {
    const rotateEmojis = () => {
      const newEmojis = emojiVariants.map(
        (group) => group[Math.floor(Math.random() * group.length)],
      );
      setCurrentEmojis(newEmojis);
    };

    rotateEmojis();
    const interval = setInterval(rotateEmojis, 5000);
    return () => clearInterval(interval);
  }, [emojiVariants]);
  useEffect(() => {
    document.documentElement.style.setProperty('--speed', `${speed}s`);
  }, [speed]);

  const enhancedMessages = messages.map(
    (msg, i) => `${currentEmojis[i] || DEFAULT_EMOJIS[i][0]} ${msg}`,
  );

  return (
    <div
      className={`w-full overflow-hidden ${backgroundColor} ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div className="relative flex w-max min-w-full">
        {[...Array(3)].map((_, setIndex) => (
          <div
            key={`marquee-set-${setIndex}`}
            className={`flex whitespace-nowrap ${textColor} font-bold ${thicknessClasses[thickness]} items-center ${animationClass} ${isPaused ? 'animation-paused' : ''}`}
            style={animationStyle}
            aria-hidden={setIndex > 0}
          >
            {enhancedMessages.map((message, index) => (
              <span
                key={`msg-${setIndex}-${index}`}
                className="mx-8 whitespace-nowrap"
              >
                {message}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
