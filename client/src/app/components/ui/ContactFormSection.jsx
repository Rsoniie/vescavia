'use client';

import { motion } from 'framer-motion';
import ContactForm from '../contactForm';

export default function ContactFormSection({
  className = '',
  fontClasses = {},
  variants = {},
  title = "Let's Start the Conversation",
  subtitle = "Tell us about your project and we'll get back to you within 24 hours.",
  formY,
}) {
  const { itemVariants } = variants;

  return (
    <motion.div
      className={`w-full lg:w-2/3 bg-gradient-to-br from-[#1a012a] to-[#240133] rounded-xl p-6 sm:p-8 border border-white/10 shadow-2xl relative group ${className}`}
      style={{ y: formY }}
      whileHover={{
        scale: 1.01,
        boxShadow: '0 20px 40px rgba(168, 85, 247, 0.15)',
      }}
      transition={{ type: 'spring', stiffness: 200 }}
    >
      <motion.div className="mb-6" variants={itemVariants}>
        <h2
          className={`text-2xl font-semibold text-white mb-2 ${fontClasses.title || ''}`}
        >
          {title}
        </h2>
        <p className={`text-white/60 text-sm ${fontClasses.body || ''}`}>
          {subtitle}
        </p>
      </motion.div>

      <ContactForm />
    </motion.div>
  );
}
