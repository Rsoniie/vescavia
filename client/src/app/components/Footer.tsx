'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const socialLinks = [
    {
      icon: <FaLinkedin className="h-6 w-6" />,
      href: '#',
      label: 'LinkedIn',
      hoverColor: 'hover:text-blue-400',
    },
    {
      icon: <FaInstagram className="h-6 w-6" />,
      href: '#',
      label: 'Instagram',
      hoverColor: 'hover:text-pink-400',
    },
    {
      icon: <FaYoutube className="h-6 w-6" />,
      href: '#',
      label: 'YouTube',
      hoverColor: 'hover:text-red-500',
    },
    {
      icon: <FaFacebook className="h-6 w-6" />,
      href: '#',
      label: 'Facebook',
      hoverColor: 'hover:text-blue-600',
    },
  ];

  const navigationLinks = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Work', href: '/work' },
    { name: 'Contact', href: '/contact' },
    { name: 'Copyright', href: '/copyright' },
  ];

  return (
    <motion.footer
      className="bg-[var(--color-background-dark)] border-t border-[var(--color-border)]/20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={footerVariants}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            variants={itemVariants}
            className="text-center md:text-left"
          >
            <Link href="/" className="group inline-block">
              <h2 className="font-jaro text-4xl lg:text-5xl lowercase text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-primary)] to-[var(--color-brand-accent)] group-hover:scale-105 transition-transform duration-300">
                vescavia
              </h2>
            </Link>
          </motion.div>

          {/* Navigation Links */}
          <motion.div variants={itemVariants} className="text-center">
            <nav className="space-y-2">
              {navigationLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="block text-[var(--color-text-secondary)] hover:text-[var(--color-brand-accent)] transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            variants={itemVariants}
            className="text-center md:text-right"
          >
            <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">
              Connect With Us
            </h3>
            <div className="flex justify-center md:justify-end space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`text-[var(--color-text-secondary)] ${social.hoverColor} transition-all duration-300 transform hover:scale-110`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-[var(--color-text-secondary)] text-sm">
              Ready to scale your brand?
            </p>
            <Link
              href="/contact"
              className="inline-block mt-2 px-6 py-2 bg-gradient-to-r from-[var(--color-brand-primary)] to-[var(--color-brand-accent)] text-[var(--color-text-primary)] rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.hr
          variants={itemVariants}
          className="border-t border-[var(--color-border)]/20 mb-6"
        />

        {/* Bottom Footer */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-center text-center md:text-left"
        >
          <div className="flex items-center mb-4 md:mb-0">
            <Image
              src="/logo.png"
              alt="Vescavia Logo"
              width={32}
              height={32}
              className="mr-3"
            />
            <span className="text-[var(--color-text-secondary)] text-sm">
              © 2025 Vescavia. All rights reserved.
            </span>
          </div>
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute bottom-0 left-1/4 w-32 h-32 bg-[var(--color-brand-primary)]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/3 w-24 h-24 bg-[var(--color-brand-accent)]/5 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>
    </motion.footer>
  );
};

export default Footer;
