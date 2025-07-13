'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote, Sparkles } from 'lucide-react';
import Navbar from '../components/navbar';

type Testimonial = {
  id: number;
  quote: string;
  name: string;
  designation: string;
  company: string;
  avatar: string;
  rating: number;
  color: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: 'This product made our team dance with joy! The interface is so smooth, even our grandma could use it.',
    name: 'Sarah Chen',
    designation: 'Product Magician',
    company: 'TechFlow Inc.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b332e234?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    color: 'from-purple-400 to-pink-500'
  },
  {
    id: 2,
    quote: "Boom! 40% efficiency boost right out the gate. Our competitors are crying in their coffee.",
    name: 'Michael Rodriguez',
    designation: 'Chief Hype Officer',
    company: 'InnovateLabs',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    color: 'from-amber-400 to-orange-500'
  },
  {
    id: 3,
    quote: "So good it's almost suspicious. Like finding money in your old jeans, but every day.",
    name: 'Emily Johnson',
    designation: 'Operations Wizard',
    company: 'GrowthCorp',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    color: 'from-emerald-400 to-teal-500'
  },
  {
    id: 4,
    quote: "ROI? More like RO-YAY! We're making money moves thanks to this platform.",
    name: 'David Park',
    designation: 'CEO & DJ',
    company: 'StartupVision',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    color: 'from-blue-400 to-cyan-500'
  },
  {
    id: 5,
    quote: "Our analytics went from 'meh' to 'WOWZA!' Overnight. No cap.",
    name: 'Lisa Wang',
    designation: 'Marketing Guru',
    company: 'BrandForward',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    color: 'from-rose-400 to-fuchsia-500'
  },
];

const AnimatedTestimonials = () => {
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => index === active;

  useEffect(() => {
    if (autoplay && !isHovering) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, isHovering]);

  const getRandomTransform = () => {
    return {
      x: Math.floor(Math.random() * 41) - 20,
      y: Math.floor(Math.random() * 41) - 20,
      rotate: Math.floor(Math.random() * 21) - 10,
      scale: 0.8 + Math.random() * 0.4
    };
  };

  return (
   
    <div 
      className="relative mx-auto max-w-7xl px-4 py-12 md:px-8 lg:px-12"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
        <Navbar></Navbar>
        
      <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Image Section - Now with floating avatars! */}
        <div className="relative">
          <div className="relative h-96 w-full lg:h-[500px]">
            <AnimatePresence mode="popLayout">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{
                    opacity: 0,
                    ...getRandomTransform(),
                    zIndex: 0
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    x: isActive(index) ? 0 : getRandomTransform().x,
                    y: isActive(index) ? [0, -15, 0] : getRandomTransform().y,
                    rotate: isActive(index) ? 0 : getRandomTransform().rotate,
                    scale: isActive(index) ? 1 : 0.9,
                    zIndex: isActive(index) ? 40 : testimonials.length - index,
                  }}
                  exit={{
                    opacity: 0,
                    ...getRandomTransform()
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                    y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
                  }}
                  className="absolute inset-0 origin-center"
                >
                  <div className={`relative h-full w-full overflow-hidden rounded-3xl bg-gradient-to-br ${testimonial.color} p-8 shadow-2xl`}>
                    <Sparkles className="absolute top-4 right-4 h-6 w-6 text-yellow-300" />
                    <div className="flex h-full flex-col items-center justify-center text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ 
                          delay: 0.2, 
                          duration: 0.5,
                          type: "spring",
                          bounce: 0.5
                        }}
                        className="mb-6"
                      >
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="h-24 w-24 rounded-full object-cover shadow-lg ring-4 ring-white/80"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="flex items-center gap-1 mb-4"
                      >
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            animate={{ scale: [0, 1.2, 1] }}
                            transition={{ delay: 0.4 + i * 0.1 }}
                          >
                            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          </motion.div>
                        ))}
                      </motion.div>
                      <motion.h3
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="text-2xl font-bold text-white"
                      >
                        {testimonial.name}
                      </motion.h3>
                      <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="text-sm text-white/90"
                      >
                        {testimonial.designation}
                      </motion.p>
                      <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        className="text-sm font-medium text-white/80"
                      >
                        {testimonial.company}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center py-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ y: 20, opacity: 0 }}
              animate={{ 
                y: 0, 
                opacity: 1,
                transition: { type: "spring", bounce: 0.4 }
              }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="space-y-6"
            >
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <Quote className="h-8 w-8 text-indigo-500" />
                </motion.div>
                <motion.span 
                  className="text-sm font-medium text-indigo-600"
                  animate={{ 
                    x: [0, 5, 0],
                    transition: { repeat: Infinity, duration: 3 }
                  }}
                >
                  REAL TALK FROM REAL PEOPLE
                </motion.span>
              </div>

              <motion.blockquote className="text-xl font-medium leading-relaxed text-gray-900 lg:text-2xl">
                {testimonials[active].quote.split(' ').map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: 'backOut',
                      delay: index * 0.03,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.blockquote>

              <motion.div 
                className="flex items-center gap-4 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-1">
                  {[...Array(testimonials[active].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 15, -15, 0]
                      }}
                      transition={{ 
                        delay: i * 0.1,
                        repeat: Infinity,
                        repeatDelay: 5
                      }}
                    >
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-500">
                  {testimonials[active].rating}/5 BANGER RATING
                </span>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation - More playful buttons */}
          <div className="flex items-center justify-between pt-12">
            <div className="flex gap-3">
              <motion.button
                onClick={handlePrev}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="group flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 transition-all hover:bg-indigo-200"
              >
                <ChevronLeft className="h-5 w-5 text-indigo-600 transition-transform duration-300 group-hover:-translate-x-1" />
              </motion.button>
              <motion.button
                onClick={handleNext}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="group flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 transition-all hover:bg-indigo-200"
              >
                <ChevronRight className="h-5 w-5 text-indigo-600 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            </div>

            {/* Autoplay Toggle - More fun */}
            <motion.button
              onClick={() => setAutoplay(!autoplay)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all flex items-center gap-2 ${
                autoplay
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {autoplay ? (
                <>
                  <motion.span
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ⏸️ Pause the Party
                  </motion.span>
                </>
              ) : (
                <>
                  <motion.span
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ▶️ Let's Groove
                  </motion.span>
                </>
              )}
            </motion.button>
          </div>

          {/* Indicators - Now with bounce! */}
          <div className="flex justify-center gap-2 pt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActive(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                animate={{ 
                  scale: isActive(index) ? [1, 1.2, 1] : 1,
                  transition: { repeat: isActive(index) ? Infinity : 0, duration: 2 }
                }}
                className={`h-3 w-3 rounded-full transition-all ${
                  isActive(index)
                    ? 'bg-indigo-600 shadow-md shadow-indigo-300'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with more personality */}
      <div className="mx-auto max-w-7xl px-4 py-16 text-center md:px-8 lg:px-12">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl"
            animate={{ 
              textShadow: [
                "0 0 0px #6366f1",
                "0 0 10px #6366f1",
                "0 0 0px #6366f1"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Don't Just Take <span className="text-indigo-600">Our Word</span> For It
          </motion.h1>
          <motion.p 
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-600"
            animate={{
              scale: [1, 1.02, 1],
              transition: { duration: 5, repeat: Infinity }
            }}
          >
            Here's what the cool kids are saying about us. Spoiler: They love it! 🎉
          </motion.p>
        </motion.div>
      </div>

      {/* Testimonials */}
      <AnimatedTestimonials />

      {/* Stats Section - More dynamic */}
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            { number: '10K+', label: 'Happy Customers Dancing' },
            { number: '4.9/5', label: 'Average Happy Rating' },
            { number: '99.9%', label: 'Uptime (We Never Sleep)' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ 
                y: 0, 
                opacity: 1,
                transition: { delay: index * 0.2, duration: 0.6 }
              }}
              whileHover={{ y: -5 }}
              className="text-center rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 p-6 shadow-sm"
            >
              <div className="text-4xl font-bold text-indigo-600 md:text-5xl">
                <motion.span
                  animate={{ 
                    scale: [1, 1.1, 1],
                    transition: { duration: 3, repeat: Infinity }
                  }}
                >
                  {stat.number}
                </motion.span>
              </div>
              <div className="mt-2 text-sm text-gray-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}