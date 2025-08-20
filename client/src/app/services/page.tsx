'use client';

import Image from 'next/image';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import brandManagement from '../../../public/images/services/brand-management.png';
import videoEditing from '../../../public/images/services/video_editing.png';
import adCreation from '../../../public/images/services/ad_creation.png';
import webdev from '../../../public/images/services/webdev.png';

export default function ServicesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };
  const services = [
    {
      image: brandManagement,
      title: 'Brand Management',
      description:
        'Comprehensive strategies to build and maintain your brand identity',
      href: '/services/brandManagement',
    },
    {
      image: videoEditing,
      title: 'Video Editing',
      description: 'Professional editing to bring your visual stories to life',
      href: '/services/videoEditing',
    },
    {
      image: adCreation,
      title: 'Ad Creation',
      description:
        'Eye-catching advertisements that convert viewers to customers',
      href: '/services/addCreation',
    },
    {
      image: webdev,
      title: 'Web Development',
      description:
        'Modern, responsive websites that deliver exceptional user experiences',
      href: '/services/webDevelopment',
    },
  ];

  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text-primary)] min-h-screen w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Navbar />
        <motion.main
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="font-jaro text-6xl sm:text-7xl md:text-8xl lg:text-[122px] lowercase mb-8 leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-purple-200/70"
            variants={itemVariants}
          >
            services
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-12 sm:mb-16 text-gray-300 leading-relaxed"
            variants={itemVariants}
          >
            We don't just provide services, we craft experiences that make your
            brand unforgettable.
          </motion.p>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            variants={containerVariants}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: 'easeOut' },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={service.href || '#'}
                  className="group bg-[var(--color-background-dark)] rounded-xl transition-all duration-300 hover:shadow-2xl overflow-hidden relative min-h-[320px] sm:min-h-[360px] md:min-h-[400px] block"
                >
                  <div className="absolute inset-0 z-0 transform group-hover:scale-105 transition-transform duration-500">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      priority={index < 2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background-dark)] via-[color-mix(in_srgb,var(--color-background-dark)_50%,transparent)] to-transparent"></div>
                  </div>
                  <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-8">
                    <h2
                      className="
                      text-xl sm:text-2xl font-bold mb-2 
                      block lg:opacity-0 lg:group-hover:opacity-100 
                      transition-opacity duration-300
                    "
                    >
                      {service.title}
                    </h2>
                    <p
                      className="
                      text-gray-300 text-sm sm:text-base 
                      hidden lg:block lg:opacity-0 lg:group-hover:opacity-100 
                      transition-opacity duration-300
                    "
                    >
                      {service.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.main>

        {/* Call-to-Action Section */}
        <motion.section
          className="text-center py-16 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="font-jaro text-4xl sm:text-5xl md:text-6xl lowercase mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-primary)] to-[var(--color-brand-accent)]">
              ready to scale?
            </h2>
            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how we can transform your brand and accelerate your
              growth. Our team is ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-[var(--color-brand-primary)] to-[var(--color-brand-accent)] text-[var(--color-text-primary)] rounded-full font-medium text-lg hover:shadow-lg transition-all duration-300"
                >
                  Start Your Project
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/work"
                  className="inline-block px-8 py-4 border-2 border-[var(--color-brand-primary)] text-[var(--color-brand-primary)] rounded-full font-medium text-lg hover:bg-[var(--color-brand-primary)] hover:text-[var(--color-text-primary)] transition-all duration-300"
                >
                  View Our Work
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
      <Footer />
    </div>
  );
}
