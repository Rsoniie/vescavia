'use client';

import { useState, useEffect, useRef } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  Variants,
} from 'framer-motion';

type NavLink = {
  name: string;
  href: string;
};

const navLinks: NavLink[] = [
  { name: 'About', href: 'about' },
  { name: 'Work', href: 'work' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: 'contact' },
];

const logoVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 12,
    },
  },
  hover: {
    scale: 1.05,
    rotate: [-1, 1, -1, 0],
    transition: { duration: 0.4 },
  },
};

const navVariants: Variants = {
  hidden: { y: -100 },
  visible: {
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 25,
    },
  },
};

const linkVariants: Variants = {
  hidden: (i: number) => ({ opacity: 0, x: i % 2 === 0 ? -30 : 30 }),
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      type: 'spring',
      stiffness: 120,
    },
  }),
  hover: {
    scale: 1.1,
    y: -2,
    color: '#E879F9',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 10,
    },
  },
};

const menuVariants: Variants = {
  closed: { opacity: 0, y: -20 },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const menuItemVariants: Variants = {
  closed: { opacity: 0, x: -30 },
  open: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 200 },
  },
};

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('about');
  const navRef = useRef<HTMLElement | null>(null);

  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(8, 0, 15, 0.1)', 'rgba(8, 0, 15, 0.98)'],
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(16px)'],
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY) < 30) return;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setVisible(true);
      }

      if (currentScrollY <= 100) {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    const scrollHandler = () => window.requestAnimationFrame(handleScroll);
    window.addEventListener('scroll', scrollHandler, { passive: true });

    return () => window.removeEventListener('scroll', scrollHandler);
  }, [lastScrollY]);

  return (
    <>
      <motion.nav
        ref={navRef}
        variants={navVariants}
        initial="hidden"
        animate={visible ? 'visible' : 'hidden'}
        style={{ backgroundColor, backdropFilter: backdropBlur }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-3 flex justify-between items-center border-b border-purple-500/30 shadow-xl"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-fuchsia-900/30 to-blue-900/30 opacity-80" />

        {/* Logo */}
        <motion.div
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className="relative z-10"
        >
          <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
            Vescavia
          </div>
          <motion.div
            className="absolute -inset-2 bg-gradient-to-r from-purple-600/30 via-fuchsia-600/30 to-blue-600/30 rounded-lg blur-md"
            animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-8 relative z-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={`${link.href}`}
              custom={i}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              onClick={() => setActiveLink(link.href)}
              className="relative font-medium text-gray-200 hover:text-fuchsia-300 transition-colors duration-300 cursor-pointer px-2 py-1"
            >
              {link.name}
              {activeLink === link.href && (
                <motion.div
                  layoutId="activeLink"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-fuchsia-400 rounded-full"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-fuchsia-600/20 rounded-lg opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
          ))}
        </div>

        {/* Hamburger Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden relative z-10 p-2 text-gray-200 hover:text-fuchsia-400 transition-colors"
          aria-label="Toggle menu"
        >
          <motion.div
            animate={isMenuOpen ? 'open' : 'closed'}
            className="w-6 h-6 flex flex-col justify-center items-center"
          >
            <motion.span
              className="block w-6 h-0.5 bg-current mb-1.5"
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 7 },
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-current mb-1.5"
              variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-current"
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -7 },
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden pt-20"
          >
            <motion.div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="absolute top-20 left-4 right-4 bg-gray-900/95 backdrop-blur-lg rounded-xl shadow-2xl border border-fuchsia-500/30 p-4 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-fuchsia-900/30 to-blue-900/30" />
              <div className="relative z-10 space-y-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={`#${link.href}`}
                    custom={i}
                    variants={menuItemVariants}
                    whileHover={{
                      scale: 1.05,
                      x: 10,
                      color: '#E879F9',
                      transition: { type: 'spring', stiffness: 400 },
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setActiveLink(link.href);
                      setIsMenuOpen(false);
                    }}
                    className="block text-lg font-medium text-gray-200 hover:text-fuchsia-300 transition-colors py-3 px-4 rounded-lg hover:bg-fuchsia-900/30"
                  >
                    {link.name}
                    {activeLink === link.href && (
                      <motion.div
                        layoutId="mobileActiveLink"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 to-fuchsia-400 rounded-r-full"
                        transition={{ type: 'spring', stiffness: 400 }}
                      />
                    )}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
