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
  icons?: React.ReactNode[]; // <-- add icons prop
  bgColors?: string[]; // <-- add bgColors prop
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
  icons,
  bgColors,
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

  // If icons are provided, use them; otherwise, use emojis
  const enhancedMessages = messages.map((msg, i) =>
    icons && icons[i] ? (
      <span
        className={`flex items-center justify-center mx-2 h-full w-full relative`}
        key={i}
      >
        <span
          className={`absolute inset-0 ${bgColors && bgColors[i] ? bgColors[i] : ''} h-full w-full`}
          style={{ zIndex: 0 }}
        />
        <span className="relative z-10 flex items-center px-8 py-2 text-black">
          {icons[i]}
          <span>{msg}</span>
        </span>
      </span>
    ) : (
      <span
        className={`flex items-center justify-center mx-2 h-full w-full relative`}
        key={i}
      >
        <span
          className={`absolute inset-0 ${bgColors && bgColors[i] ? bgColors[i] : ''} h-full w-full`}
          style={{ zIndex: 0 }}
        />
        <span className="relative z-10 flex items-center px-8 py-2 text-black">
          {currentEmojis[i] || DEFAULT_EMOJIS[i][0]} {msg}
        </span>
      </span>
    ),
  );

  return (
    <div
      className={`w-full overflow-hidden ${className}`}
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
              <span key={`msg-${setIndex}-${index}`}>{message}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
