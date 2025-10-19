'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from './Footer';

interface AboutSectionProps {
  title: string;
  description: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ title, description }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text-primary)]">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-brand-primary)] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-brand-accent)] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h1
              className="font-jaro text-6xl sm:text-7xl md:text-8xl lg:text-[122px] lowercase mb-8 leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-purple-200/70"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {title.toLowerCase()}
            </motion.h1>
            <motion.p
              className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision & Motto - Simple Text Layout */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
         
          </motion.div>

          <div className="space-y-16">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid lg:grid-cols-3 gap-8 items-start"
            >
              <div className="lg:col-span-1">
                <h3 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">
                  Our Mission
                </h3>
              </div>
              <div className="lg:col-span-2">
                <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                  To transform bold ideas into extraordinary digital experiences
                  that scale businesses and create lasting impact in the digital
                  world. We are committed to delivering exceptional results
                  through innovative technology and human-centered design,
                  ensuring our clients achieve their business goals while
                  building brands that can't be ignored.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid lg:grid-cols-3 gap-8 items-start"
            >
              <div className="lg:col-span-1">
                <h3 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">
                  Our Vision
                </h3>
              </div>
              <div className="lg:col-span-2">
                <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                  To be the leading creative agency that bridges the gap between
                  innovative technology and human-centered design, making brands
                  unforgettable. We envision a future where every digital
                  interaction is meaningful, every brand story resonates deeply,
                  and every business relationship thrives through mutual success
                  and collaborative innovation.
                </p>
              </div>
            </motion.div>

            {/* Motto */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid lg:grid-cols-3 gap-8 items-start"
            >
              <div className="lg:col-span-1">
                <h3 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">
                  Our Motto
                </h3>
              </div>
              <div className="lg:col-span-2">
                <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  <span className="text-2xl font-bold text-[var(--color-brand-primary)] block mb-2">
                    "From Bold Ideas to Bold Brands"
                  </span>
                  We believe every great brand starts with a fearless vision and
                  the courage to bring it to life. This motto embodies our
                  commitment to transforming ambitious concepts into
                  market-leading brands that drive real business impact and
                  create lasting connections with audiences.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Principles - Modern Card Layout */}
      <section className="py-20 bg-[var(--color-background-dark)]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
              Our Principles
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              The core values that guide our work and relationships
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Business Wins - Geometric Blocks */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[var(--color-background)] border border-[var(--color-brand-primary)]/20 rounded-2xl overflow-hidden shadow-lg shadow-[var(--color-brand-primary)]/10 hover:shadow-xl hover:shadow-[var(--color-brand-accent)]/20 hover:border-[var(--color-brand-accent)]/40 transition-all duration-300 group"
            >
              {/* Visual Section - Geometric Blocks */}
              <div className="relative h-64 bg-gradient-to-br from-[var(--color-background)] to-[var(--color-background-dark)] overflow-hidden">
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 400 300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Geometric blocks pattern */}
                  <rect
                    x="20"
                    y="40"
                    width="80"
                    height="60"
                    fill="var(--color-brand-primary)"
                    className="group-hover:scale-110 transition-transform duration-500"
                    style={{ transformOrigin: 'center' }}
                  />
                  <rect
                    x="120"
                    y="20"
                    width="60"
                    height="80"
                    fill="var(--color-brand-accent)"
                    className="group-hover:scale-105 transition-transform duration-700"
                    style={{ transformOrigin: 'center' }}
                  />
                  <rect
                    x="200"
                    y="60"
                    width="100"
                    height="40"
                    fill="var(--color-brand-secondary)"
                    className="group-hover:scale-110 transition-transform duration-600"
                    style={{ transformOrigin: 'center' }}
                  />
                  <rect
                    x="320"
                    y="30"
                    width="50"
                    height="70"
                    fill="var(--color-brand-primary)"
                    opacity="0.7"
                    className="group-hover:scale-105 transition-transform duration-800"
                    style={{ transformOrigin: 'center' }}
                  />
                  <rect
                    x="50"
                    y="140"
                    width="90"
                    height="50"
                    fill="var(--color-brand-accent)"
                    opacity="0.8"
                    className="group-hover:scale-110 transition-transform duration-500"
                    style={{ transformOrigin: 'center' }}
                  />
                  <rect
                    x="160"
                    y="130"
                    width="70"
                    height="90"
                    fill="var(--color-brand-secondary)"
                    opacity="0.6"
                    className="group-hover:scale-105 transition-transform duration-700"
                    style={{ transformOrigin: 'center' }}
                  />
                  <rect
                    x="250"
                    y="150"
                    width="80"
                    height="60"
                    fill="var(--color-brand-primary)"
                    opacity="0.9"
                    className="group-hover:scale-110 transition-transform duration-600"
                    style={{ transformOrigin: 'center' }}
                  />
                </svg>
              </div>
              {/* Text Section */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4 bg-gradient-to-r from-[var(--color-brand-primary)] to-[var(--color-brand-accent)] bg-clip-text text-transparent">
                  Business Wins, We Win.
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  Your success is our success. We're fundamentally committed to
                  ensuring our partners achieve their business goals through
                  exceptional results and unwavering dedication.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Our Word - Organic Shapes */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="bg-[var(--color-background)] border border-[var(--color-brand-primary)]/20 rounded-2xl overflow-hidden shadow-lg shadow-[var(--color-brand-primary)]/10 hover:shadow-xl hover:shadow-[var(--color-brand-accent)]/20 hover:border-[var(--color-brand-accent)]/40 transition-all duration-300 group"
            >
              {/* Visual Section - Organic Shapes */}
              <div className="relative h-64 bg-gradient-to-br from-[var(--color-background)] to-[var(--color-background-dark)] overflow-hidden">
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 400 300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Organic flowing shapes */}
                  <path
                    d="M50 80 Q120 40, 180 80 T320 100 Q350 120, 360 160 Q340 200, 280 180 Q200 160, 120 180 Q80 160, 50 120 Z"
                    fill="var(--color-brand-accent)"
                    className="group-hover:scale-105 transition-transform duration-500"
                    style={{ transformOrigin: 'center' }}
                  />
                  <path
                    d="M80 140 Q140 110, 200 140 T300 160 Q320 180, 310 210 Q290 230, 250 220 Q180 200, 130 220 Q100 200, 80 170 Z"
                    fill="var(--color-brand-primary)"
                    opacity="0.8"
                    className="group-hover:scale-110 transition-transform duration-700"
                    style={{ transformOrigin: 'center' }}
                  />
                  <path
                    d="M200 50 Q250 30, 300 50 T370 80 Q380 100, 370 130 Q350 150, 310 140 Q260 130, 220 140 Q190 130, 180 100 Q190 70, 200 50 Z"
                    fill="var(--color-brand-secondary)"
                    opacity="0.7"
                    className="group-hover:scale-105 transition-transform duration-600"
                    style={{ transformOrigin: 'center' }}
                  />
                  <ellipse
                    cx="100"
                    cy="200"
                    rx="40"
                    ry="25"
                    fill="var(--color-brand-accent)"
                    opacity="0.9"
                    className="group-hover:scale-110 transition-transform duration-800"
                    style={{ transformOrigin: 'center' }}
                  />
                </svg>
              </div>
              {/* Text Section */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4 bg-gradient-to-r from-[var(--color-brand-primary)] to-[var(--color-brand-accent)] bg-clip-text text-transparent">
                  Our Word is our Bond.
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  In fast-paced environments with multiple stakeholders, we hold
                  ourselves accountable for our promises and deliver exceptional
                  results without compromise, building trust through consistent
                  action.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Creativity - Scattered Dots */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-[var(--color-background)] border border-[var(--color-brand-primary)]/20 rounded-2xl overflow-hidden shadow-lg shadow-[var(--color-brand-primary)]/10 hover:shadow-xl hover:shadow-[var(--color-brand-accent)]/20 hover:border-[var(--color-brand-accent)]/40 transition-all duration-300 group"
            >
              {/* Visual Section - Scattered Dots */}
              <div className="relative h-64 bg-gradient-to-br from-[var(--color-background)] to-[var(--color-background-dark)] overflow-hidden">
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 400 300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Scattered circles pattern */}
                  <circle
                    cx="80"
                    cy="60"
                    r="25"
                    fill="var(--color-brand-secondary)"
                    className="group-hover:scale-125 transition-transform duration-500"
                    style={{ transformOrigin: 'center' }}
                  />
                  <circle
                    cx="180"
                    cy="40"
                    r="15"
                    fill="var(--color-brand-accent)"
                    className="group-hover:scale-110 transition-transform duration-700"
                    style={{ transformOrigin: 'center' }}
                  />
                  <circle
                    cx="300"
                    cy="70"
                    r="35"
                    fill="var(--color-brand-primary)"
                    opacity="0.8"
                    className="group-hover:scale-115 transition-transform duration-600"
                    style={{ transformOrigin: 'center' }}
                  />
                  <circle
                    cx="120"
                    cy="120"
                    r="20"
                    fill="var(--color-brand-secondary)"
                    opacity="0.7"
                    className="group-hover:scale-120 transition-transform duration-800"
                    style={{ transformOrigin: 'center' }}
                  />
                  <circle
                    cx="250"
                    cy="110"
                    r="12"
                    fill="var(--color-brand-accent)"
                    opacity="0.9"
                    className="group-hover:scale-110 transition-transform duration-500"
                    style={{ transformOrigin: 'center' }}
                  />
                  <circle
                    cx="350"
                    cy="130"
                    r="18"
                    fill="var(--color-brand-secondary)"
                    className="group-hover:scale-115 transition-transform duration-700"
                    style={{ transformOrigin: 'center' }}
                  />
                  <circle
                    cx="60"
                    cy="180"
                    r="30"
                    fill="var(--color-brand-primary)"
                    opacity="0.6"
                    className="group-hover:scale-125 transition-transform duration-600"
                    style={{ transformOrigin: 'center' }}
                  />
                  <circle
                    cx="200"
                    cy="170"
                    r="22"
                    fill="var(--color-brand-accent)"
                    className="group-hover:scale-110 transition-transform duration-800"
                    style={{ transformOrigin: 'center' }}
                  />
                  <circle
                    cx="320"
                    cy="200"
                    r="16"
                    fill="var(--color-brand-secondary)"
                    opacity="0.8"
                    className="group-hover:scale-120 transition-transform duration-500"
                    style={{ transformOrigin: 'center' }}
                  />
                  <circle
                    cx="140"
                    cy="220"
                    r="14"
                    fill="var(--color-brand-primary)"
                    className="group-hover:scale-115 transition-transform duration-700"
                    style={{ transformOrigin: 'center' }}
                  />
                  <circle
                    cx="270"
                    cy="240"
                    r="26"
                    fill="var(--color-brand-secondary)"
                    opacity="0.9"
                    className="group-hover:scale-125 transition-transform duration-600"
                    style={{ transformOrigin: 'center' }}
                  />
                </svg>
              </div>
              {/* Text Section */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4 bg-gradient-to-r from-[var(--color-brand-primary)] to-[var(--color-brand-accent)] bg-clip-text text-transparent">
                  Creativity is Sacred, Aesthetics are God.
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  We create groundbreaking work that challenges conventions and
                  drives real business impact. Our communication, design, and
                  strategy help brands stand out through authentic
                  differentiation.
                </p>
              </div>
            </motion.div>

            {/* Card 4: Partnerships - Mixed Elements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-[var(--color-background)] border border-[var(--color-brand-primary)]/20 rounded-2xl overflow-hidden shadow-lg shadow-[var(--color-brand-primary)]/10 hover:shadow-xl hover:shadow-[var(--color-brand-accent)]/20 hover:border-[var(--color-brand-accent)]/40 transition-all duration-300 group"
            >
              {/* Visual Section - Mixed Elements */}
              <div className="relative h-64 bg-gradient-to-br from-[var(--color-background)] to-[var(--color-background-dark)] overflow-hidden">
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 400 300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Mixed geometric elements */}
                  <circle
                    cx="100"
                    cy="80"
                    r="30"
                    fill="var(--color-brand-accent)"
                    className="group-hover:scale-110 transition-transform duration-500"
                    style={{ transformOrigin: 'center' }}
                  />
                  <rect
                    x="160"
                    y="50"
                    width="60"
                    height="60"
                    fill="var(--color-brand-primary)"
                    opacity="0.8"
                    className="group-hover:scale-105 transition-transform duration-700"
                    style={{ transformOrigin: 'center' }}
                  />
                  <polygon
                    points="280,40 320,80 280,120 240,80"
                    fill="var(--color-brand-secondary)"
                    opacity="0.7"
                    className="group-hover:scale-110 transition-transform duration-600"
                    style={{ transformOrigin: '280,80' }}
                  />
                  <path
                    d="M50 150 Q100 130, 150 150 T250 170 Q280 180, 270 210 Q250 230, 200 220 Q150 200, 100 220 Q70 200, 50 180 Z"
                    fill="var(--color-brand-primary)"
                    opacity="0.6"
                    className="group-hover:scale-105 transition-transform duration-800"
                    style={{ transformOrigin: 'center' }}
                  />
                  <circle
                    cx="320"
                    cy="180"
                    r="25"
                    fill="var(--color-brand-accent)"
                    opacity="0.9"
                    className="group-hover:scale-115 transition-transform duration-500"
                    style={{ transformOrigin: 'center' }}
                  />
                  <rect
                    x="80"
                    y="200"
                    width="40"
                    height="40"
                    fill="var(--color-brand-secondary)"
                    className="group-hover:scale-110 transition-transform duration-700"
                    style={{ transformOrigin: 'center' }}
                  />
                  <polygon
                    points="200,200 230,230 200,260 170,230"
                    fill="var(--color-brand-primary)"
                    className="group-hover:scale-105 transition-transform duration-600"
                    style={{ transformOrigin: '200,230' }}
                  />
                </svg>
              </div>
              {/* Text Section */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4 bg-gradient-to-r from-[var(--color-brand-primary)] to-[var(--color-brand-accent)] bg-clip-text text-transparent">
                  Partnerships with Win-Win Attitude.
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  We view all stakeholders as valued partners, approaching every
                  relationship with a collaborative spirit. Our goal is mutual
                  success where both parties thrive and grow together.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutSection;
