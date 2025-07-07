// components/TeamMemberCard.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

interface TeamMemberCardProps {
  member: {
    name: string;
    image: string;
    color: string;
    bio: string;
    role: string;
  };
  position: {
    x: number;
    y: number;
    rotate: number;
  };
  isActive: boolean;
  isHovered: boolean;
  onDragStart: () => void;
  onDragEnd: () => void;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  zIndex: number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  member,
  position,
  isActive,
  isHovered,
  onDragStart,
  onDragEnd,
  onHoverStart,
  onHoverEnd,
  zIndex,
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
        scale: isActive ? 1.1 : 1,
        zIndex: zIndex,
      }}
      transition={{
        type: 'spring',
        stiffness: 80,
        damping: 12,
        mass: 0.8,
      }}
      drag
      dragConstraints={{
        top: -300,
        bottom: 300,
        left: -300,
        right: 300,
      }}
      dragElastic={0.2}
      dragTransition={{
        bounceStiffness: 300,
        bounceDamping: 10,
      }}
      whileTap={{
        scale: 0.98,
        transition: { duration: 0.1 },
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
        transition: { duration: 0.2 },
      }}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
    >
      {/* Floating Avatar with Glow */}
      <motion.div
        className="relative -mt-32 mb-2"
        whileHover={{
          y: -15,
          transition: { type: 'spring', stiffness: 200 },
        }}
      >
        <div className="absolute inset-0 rounded-full bg-white opacity-20 blur-md -z-10" />
        <Image
          src={member.image}
          alt={`Profile picture of ${member.name}`}
          width={150}
          height={150}
          className="object-cover rounded-full border-4 border-white shadow-xl"
          priority={isActive || isHovered}
        />
      </motion.div>

      {/* Name with hover effect */}
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

export default TeamMemberCard;