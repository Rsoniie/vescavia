'use client';
import React, { useEffect, useState } from 'react';
import { Inter, Jaro } from 'next/font/google';
import { Roboto, Pacifico, Oswald, Lora, Indie_Flower } from 'next/font/google';
import DynamicEmoji from '../components/animations/dynamicComp';
import Button from '../components/button';
import MarqueeBanner from '../components/animations/bottomBanner';
import ScrollUpAnimation from '../components/animations/scrollAnimation1';
import DefinesUsPage from './definesUs';
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
});

const jaro = Jaro({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-jaro',
});

// const emojis = ['/img1.webp', '/img2.jpg', '/img3.webp', '/img4.avif'];
const emojis = ['/px1.jpg', '/px2.jpg', '/px3.jpg', '/px4.jpg'];

const services = [
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

const dynamicWords = [
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
const pacifico = Pacifico({ subsets: ['latin'], weight: '400', variable: '--font-pacifico' });
const oswald = Oswald({ subsets: ['latin'], weight: '400', variable: '--font-oswald' });
const lora = Lora({ subsets: ['latin'], weight: '400', variable: '--font-lora' });
const indie = Indie_Flower({ subsets: ['latin'], weight: '400', variable: '--font-indie' });

const fontVars = `${jaro.variable} ${pacifico.variable} ${oswald.variable} ${lora.variable} ${indie.variable}`;

export default function Home() {
  const [wordIndex, setWordIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % dynamicWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div
        className={`min-h-[60vh] flex flex-col bg-black text-white ${inter.variable} ${fontVars} font-sans`}
      >
        <div className="flex flex-col flex-1 my-25">
          <section className="w-full flex flex-col justify-center p-6 sm:p-8 md:p-12">
            <main className="text-left">
              <h1
                className={`mb-6 sm:mb-8 font-bold ${jaro.variable} font-sans text-white leading-none`}
                style={{ fontSize: '3rem' }}
              >
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                  Vescavia:
                  <span className="ml-2 ">
                    where Ideas turn into{' '}
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={dynamicWords[wordIndex].word}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.5 }}
                        className={`inline-block font-bold ${dynamicWords[wordIndex].color} ${dynamicWords[wordIndex].font}`}
                        style={{
                          fontSize: 'inherit',
                          minWidth: 180,
                          fontFamily: `var(--font-${dynamicWords[wordIndex].font.replace('font-', '')})`,
                        }}
                      >
                        {dynamicWords[wordIndex].word}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mb-6 sm:mb-8 text-white">
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
        <MarqueeBanner
          messages={services.map((service) => service.name)}
          icons={services.map((service) => service.icon)}
          bgColors={services.map((service) => service.bg)}
          speed={15}
          direction="right"
          thickness="medium"
          pauseOnHover={true}
        />
      </div>

      <ScrollUpAnimation />
      <div className="h-5 bg-white"></div>

      <DefinesUsPage />
      <div className="w-full bg-white h-5"></div>
    </>
  );
}
