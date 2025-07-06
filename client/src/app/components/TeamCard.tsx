// components/TeamCard.tsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TeamMember } from './types/index.tsx';
import React from 'react';

interface Props {
  member: TeamMember;
  index: number;
  activeCard: number | null;
  hoveredCard: number | null;
  position: { x: number; y: number; rotate: number };
  setActiveCard: (index: number | null) => void;
  setHoveredCard: (index: number | null) => void;
}

const TeamCard: React.FC<Props> = ({
  member,
  index,
  activeCard,
  hoveredCard,
  position,
  setActiveCard,
  setHoveredCard,
}) => {
  return (
    <motion.div
      className={`absolute w-72 h-80 p-4 rounded-3xl shadow-2xl bg-gradient-to-br ${member.color} text-white flex flex-col items-center justify-end cursor-grab active:cursor-grabbing overflow-visible`}
      initial={{
        opacity: 0,
        x: position.x,
        y: position.y,
        rotate: position.rotate,
      }}
      animate={{
        opacity: 1,
        x: position.x,
        y: position.y,
        rotate: position.rotate,
        scale: activeCard === index ? 1.1 : 1,
        zIndex:
          activeCard === index ? 100 : hoveredCard === index ? 50 : 10 + index,
      }}
      transition={{
        delay: index * 0.2,
        type: 'spring',
        stiffness: 80,
        damping: 12,
        mass: 0.8,
      }}
      drag
      dragConstraints={{ top: -300, bottom: 300, left: -300, right: 300 }}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
      whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
      whileHover={{
        scale: 1.05,
        boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
        transition: { duration: 0.2 },
      }}
      onDragStart={() => setActiveCard(index)}
      onDragEnd={() => setActiveCard(null)}
      onHoverStart={() => setHoveredCard(index)}
      onHoverEnd={() => setHoveredCard(null)}
    >
      <motion.div
        className="relative -mt-32 mb-2"
        whileHover={{ y: -15, transition: { type: 'spring', stiffness: 200 } }}
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
      <motion.p
        className="text-white font-bold text-xl text-center drop-shadow-md mt-auto mb-2"
        whileHover={{
          scale: 1.1,
          textShadow: '0 0 12px rgba(255,255,255,0.7)',
        }}
      >
        {member.name}
      </motion.p>
      <p className="text-white/80 text-sm">{member.role}</p>
    </motion.div>
  );
};

export default TeamCard;
