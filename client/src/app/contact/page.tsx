'use client';

import Navbar from '../components/navbar';
import React, { useRef } from 'react';
import { Inter, Jaro } from 'next/font/google';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Head from 'next/head';

// Import components
import AnimatedBackground from '../components/ui/AnimatedBackground';
import ContactHero from '../components/ui/ContactHero';
import ContactImageSection from '../components/ui/ContactImageSection';
import ContactFormSection from '../components/ui/ContactFormSection';
import ContactInfoCards from '../components/ui/ContactInfoCards';
import useMousePosition from '../components/hooks/useMousePosition.js';
import { animationVariants } from '../components/hooks/constants/animations.js';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jaro = Jaro({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-jaro',
});

export default function ContactPage() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const mousePosition = useMousePosition();
  const isInView = useInView(heroRef, { once: true, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Transform values
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const titleY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);
  const formY = useTransform(scrollYProgress, [0, 1], [0, -20]);

  // Font classes
  const fontClasses = {
    title: `${jaro.variable} font-sans`,
    body: `${inter.variable} font-sans`,
  };

  return (
    <>
      <Navbar />
      <Head>
        <title>Contact Us | Vescavia</title>
        <meta
          name="description"
          content="Get in touch with the creative team behind Vescavia and let's scale your brand."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preload" href="/images/contact/doll.png" as="image" />
      </Head>

      <motion.div
        ref={containerRef}
        className="min-h-screen bg-gradient-to-br from-[#11001D] via-[#1a012a] to-[#11001D] pt-35 pb-12 px-4 relative overflow-hidden"
        style={{ y: backgroundY }}
        variants={animationVariants.containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatedBackground
          mousePosition={mousePosition}
          scrollYProgress={scrollYProgress}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <ContactHero
            titleY={titleY}
            fontClasses={fontClasses}
            variants={animationVariants}
          />

          <motion.div
            className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-stretch"
            variants={animationVariants.itemVariants}
          >
            <ContactImageSection />
            <ContactFormSection
              formY={formY}
              fontClasses={fontClasses}
              variants={animationVariants}
            />
          </motion.div>

          <ContactInfoCards
            variants={animationVariants}
            fontClasses={fontClasses}
          />
        </div>
      </motion.div>
    </>
  );
}
