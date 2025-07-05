'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const teamMembersData = [
  {
    name: 'Batla',
    image: '/images/about/person3.png',
    color: 'from-purple-600 via-pink-500 to-yellow-400',
    bio: 'Frontend wizard with a passion for pixel-perfect designs. Loves React and smooth animations.',
    role: 'Lead UI Developer'
  },
  {
    name: 'Saifu',
    image: '/images/about/person3.png',
    color: 'from-green-400 via-blue-500 to-purple-600',
    bio: 'Backend architect who makes servers sing. Coffee enthusiast and database whisperer.',
    role: 'Backend Engineer'
  },
  {
    name: 'Pranjal',
    image: '/images/about/person3.png',
    color: 'from-yellow-400 via-red-500 to-pink-600',
    bio: 'Full-stack magician who bridges frontend and backend. Loves solving complex problems with elegant solutions.',
    role: 'Senior Full-Stack Developer'
  },
];

const generateRandomPositions = (count) => {
  const positions = [];
  const padding = 100;
  const width = 800;
  const height = 500;
  
  for (let i = 0; i < count; i++) {
    let x, y, attempts = 0;
    
    // Ensure cards don't overlap too much initially
    do {
      x = Math.random() * (width - 200) + padding;
      y = Math.random() * (height - 200) + padding;
      attempts++;
      
      if (attempts > 100) break; // Prevent infinite loop
    } while (positions.some(pos => Math.abs(pos.x - x) < 150 && Math.abs(pos.y - y) < 150));
    
    positions.push({
      x,
      y,
      rotate: Math.random() * 20 - 10
    });
  }
  
  return positions;
};

export default function About() {
  const [activeCard, setActiveCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    setPositions(generateRandomPositions(teamMembersData.length));
  }, []);

  const handleDragEnd = (index) => {
    setActiveCard(null);
    // Keep the dragged card on top
    const newPositions = [...positions];
    setPositions(newPositions);
  };

  return (
    <>
      <Navbar className="bg-gradient-to-b from-[#130018] to-[#1d003d]" />
      <div className="min-h-screen bg-gradient-to-br from-[#130018] via-[#1d003d] to-[#300042] flex flex-col items-center px-4 py-20 overflow-hidden">
        {/* Header content */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl text-center mb-16"
        >
          <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-4 tracking-wide">
            🎯 What We Do
          </h2>
          <p className="text-white text-lg md:text-xl font-light">
            We mix code and creativity to build mind-blowing digital experiences.
            Think animations, bold branding, juicy designs — that kind of awesome.
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-white text-5xl md:text-7xl font-black text-center bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 text-transparent bg-clip-text mb-6"
        >
          Meet Our Team
        </motion.h1>

        {/* Scattered Cards Container */}
        <div className="relative w-full max-w-6xl h-[600px] mx-auto">
          {teamMembersData.map((member, index) => (
            <motion.div
              key={member.name}
              className={`absolute w-72 h-80 p-4 rounded-3xl shadow-2xl bg-gradient-to-br ${member.color} text-white flex flex-col items-center justify-end cursor-grab active:cursor-grabbing overflow-visible`}
              initial={{ 
                opacity: 0,
                x: positions[index]?.x || 0,
                y: positions[index]?.y || 0,
                rotate: positions[index]?.rotate || 0
              }}
              animate={{ 
                opacity: 1,
                x: positions[index]?.x,
                y: positions[index]?.y,
                rotate: positions[index]?.rotate,
                scale: activeCard === index ? 1.1 : 1,
                zIndex: activeCard === index ? 100 : hoveredCard === index ? 50 : 10 + index
              }}
              transition={{ 
                delay: index * 0.2,
                type: "spring",
                stiffness: 80,
                damping: 12,
                mass: 0.8
              }}
              drag
              dragConstraints={{ 
                top: -300, 
                bottom: 300, 
                left: -300, 
                right: 300 
              }}
              dragElastic={0.2}
              dragTransition={{ 
                bounceStiffness: 300, 
                bounceDamping: 10 
              }}
              whileTap={{ 
                scale: 0.98,
                transition: { duration: 0.1 }
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.5)",
                transition: { duration: 0.2 }
              }}
              onDragStart={() => setActiveCard(index)}
              onDragEnd={() => handleDragEnd(index)}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              {/* Floating Avatar with Glow */}
              <motion.div
                className="relative -mt-32 mb-2"
                whileHover={{ 
                  y: -15,
                  transition: { type: "spring", stiffness: 200 }
                }}
              >
                <div className="absolute inset-0 rounded-full bg-white opacity-20 blur-md -z-10" />
                <Image
                  src={member.image}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="object-cover rounded-full border-4 border-white shadow-xl"
                />
              </motion.div>

              {/* Name with hover effect */}
              <motion.p 
                className="text-white font-bold text-xl text-center drop-shadow-md mt-auto mb-2"
                whileHover={{ 
                  scale: 1.1,
                  textShadow: "0 0 12px rgba(255,255,255,0.7)"
                }}
              >
                {member.name}
              </motion.p>
              <p className="text-white/80 text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>

        {/* Bio Panel */}
        <AnimatePresence>
          {hoveredCard !== null && (
            <motion.div
              className="fixed right-8 top-1/2 transform -translate-y-1/2 w-80 bg-gradient-to-b from-[#1e003d] to-[#2a0052] p-6 rounded-xl shadow-2xl border border-white/10 z-50"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ type: "spring", damping: 20 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-white mb-2">
                  {teamMembersData[hoveredCard]?.name}
                </h3>
                <p className="text-purple-300 mb-3">
                  {teamMembersData[hoveredCard]?.role}
                </p>
                <motion.div
                  className="h-48 overflow-y-auto pr-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <p className="text-white/80 text-sm leading-relaxed">
                    {teamMembersData[hoveredCard]?.bio}
                  </p>
                </motion.div>
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#1e003d] to-transparent pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}