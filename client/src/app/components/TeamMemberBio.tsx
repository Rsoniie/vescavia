// components/TeamMemberBio.tsx
'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

interface TeamMemberBioProps {
  member: {
    name: string;
    role: string;
    bio: string;
  } | null;
}

const TeamMemberBio: React.FC<TeamMemberBioProps> = ({ member }) => {
  return (
    <AnimatePresence>
      {member && (
        <motion.div
          className="fixed right-8 top-1/2 transform -translate-y-1/2 w-80 bg-gradient-to-b from-[#1e003d] to-[#2a0052] p-6 rounded-xl shadow-2xl border border-white/10 z-50"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ type: 'spring', damping: 20 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
            <p className="text-purple-300 mb-3">{member.role}</p>
            <motion.div
              className="h-48 overflow-y-auto pr-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-white/80 text-sm leading-relaxed">{member.bio}</p>
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
  );
};

export default TeamMemberBio;