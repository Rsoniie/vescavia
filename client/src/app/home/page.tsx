'use client';
import React, { useEffect, useState, useMemo } from 'react';
import { Inter, Jaro } from 'next/font/google';
import { Pacifico, Oswald, Lora, Indie_Flower } from 'next/font/google';
import Button from '../components/button';
import MarqueeBanner from '../components/animations/bottomBanner';
import AnimatedWord from './components/AnimatedWord'; // Add this import
import dynamic from 'next/dynamic';

const ScrollUpAnimation = dynamic(
  () => import('../components/animations/scrollAnimation1'),
  { ssr: false }
);
const DefinesUsPage = dynamic(() => import('./definesUs'), {
  loading: () => <div className="h-20 bg-gray-100 animate-pulse" />,
});

import {
  FaRegLightbulb,
  FaVideo,
  FaBullhorn,
  FaLaptopCode,
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jaro = Jaro({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-jaro',
  display: 'swap',
});

const emojis = ['/px1.jpg', '/px2.jpg', '/px3.jpg', '/px4.jpg'];

const SERVICES = [
  {
    name: 'Brand Management',
    icon: <FaRegLightbulb className="inline-block align-middle mr-2" />,
    bg: '[background-color:rgb(254,100,39)]',
  },
  {
    name: 'Video Editing',
    icon: <FaVideo className="inline-block align-middle mr-2" />,
    bg: '[background-color:rgb(134,56,196)]',
  },
  {
    name: 'Ad Creation',
    icon: <FaBullhorn className="inline-block align-middle mr-2" />,
    bg: '[background-color:#fbff15]',
  },
  {
    name: 'Web Development',
    icon: <FaLaptopCode className="inline-block align-middle mr-2" />,
    bg: '[background-color:#b9f151]',
  },
];

const DYNAMIC_WORDS = [
  {
    word: 'reality',
    font: 'font-jaro',
    color: 'text-orange-500',
  },
  {
    word: 'brands',
    font: 'font-pacifico',
    color: 'text-purple-600',
  },
  {
    word: 'campaigns',
    font: 'font-oswald',
    color: 'text-yellow-400',
  },
  {
    word: 'websites',
    font: 'font-lora',
    color: 'text-green-500',
  },
  {
    word: 'stories',
    font: 'font-indie',
    color: 'text-blue-500',
  },
];

// Font imports (Google Fonts)
const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pacifico',
  display: 'swap',
});
const oswald = Oswald({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-oswald',
  display: 'swap',
});
const lora = Lora({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-lora',
  display: 'swap',
});
const indie = Indie_Flower({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-indie',
  display: 'swap',
});

const fontVars = `${jaro.variable} ${pacifico.variable} ${oswald.variable} ${lora.variable} ${indie.variable}`;

// Create constants for repeated class combinations

const HERO_SECTION_CLASSES = `min-h-[60vh] flex flex-col bg-black text-white ${inter.variable} ${fontVars} font-sans`;
const HEADING_CLASSES = `mb-6 sm:mb-8 font-bold ${jaro.variable} font-sans text-white leading-none`;
const DESCRIPTION_CLASSES =
  'text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mb-6 sm:mb-8 text-white';

export default function Home() {
  const [wordIndex, setWordIndex] = useState(0);

  // Memoize marquee props
  const marqueeProps = useMemo(
    () => ({
      messages: SERVICES.map((service) => service.name),
      icons: SERVICES.map((service) => service.icon),
      bgColors: SERVICES.map((service) => service.bg),
      speed: 15,
      direction: 'right' as const,
      thickness: 'medium' as const,
      pauseOnHover: true,
    }),
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % DYNAMIC_WORDS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className={HERO_SECTION_CLASSES}>
        <div className="flex flex-col flex-1 my-25">
          <section className="w-full flex flex-col justify-center p-6 sm:p-8 md:p-12">
            <main className="text-left">
              <h1 className={HEADING_CLASSES} style={{ fontSize: '3rem' }}>
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                  Vescavia:
                  <span className="ml-2 ">
                    where Ideas turn into{' '}
                    <AnimatePresence mode="wait">
                      <AnimatedWord
                        word={DYNAMIC_WORDS[wordIndex].word}
                        font={DYNAMIC_WORDS[wordIndex].font}
                        color={DYNAMIC_WORDS[wordIndex].color}
                      />
                    </AnimatePresence>
                  </span>
                </span>
              </h1>
              <p className={DESCRIPTION_CLASSES}>
                We&apos;re the funky brand scaling agency that transforms your
                vision into viral reality. From mind-blowing videos to
                conversion-crushing ads.
              </p>
              <div className="hidden lg:block">
                <Button textContent="Get Started" />
              </div>
            </main>
          </section>
          <div className="block lg:hidden mb-6 flex justify-center">
            <Button textContent="Get Started" />
          </div>
        </div>
      </div>

      <div className="w-full z-50">
        <MarqueeBanner {...marqueeProps} />
      </div>

      <ScrollUpAnimation />
      <DefinesUsPage />
    </>
  );
}
