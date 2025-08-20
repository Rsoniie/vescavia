'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import {
  FaPlay,
  FaGlobe,
  FaBullhorn,
  FaPalette,
  FaRocket,
  FaEye,
  FaHeart,
  FaShareAlt,
  FaExternalLinkAlt,
} from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  video?: string;
  liveUrl?: string;
  stats?: {
    views?: string;
    engagement?: string;
    growth?: string;
  };
  client: string;
  year: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'TechFlow Brand Revolution',
    category: 'Brand Strategy & Identity',
    description:
      'Complete brand transformation for a tech startup, resulting in 300% increase in user engagement and successful Series A funding.',
    technologies: ['Brand Strategy', 'Logo Design', 'UI/UX', 'Marketing'],
    image: '/images/work/project1.jpg',
    liveUrl: '#',
    stats: {
      growth: '300%',
      engagement: '85%',
      views: '2.5M',
    },
    client: 'TechFlow Inc.',
    year: '2024',
  },
  {
    id: 2,
    title: 'E-commerce Platform Launch',
    category: 'Web Development & Design',
    description:
      'Built a high-converting e-commerce platform with custom animations and seamless UX, generating $1M+ in first quarter sales.',
    technologies: ['Next.js', 'TypeScript', 'Framer Motion', 'Stripe'],
    image: '/images/work/project2.jpg',
    video: '/videos/project2-demo.mp4',
    liveUrl: '#',
    stats: {
      views: '500K',
      engagement: '92%',
      growth: '450%',
    },
    client: 'RetailCorp',
    year: '2024',
  },
  {
    id: 3,
    title: 'Viral Marketing Campaign',
    category: 'Viral Marketing Campaigns',
    description:
      'Created a multi-platform viral campaign that reached 10M+ users organically and increased brand awareness by 400%.',
    technologies: ['Social Media', 'Content Creation', 'Analytics', 'SEO'],
    image: '/images/work/project3.jpg',
    video: '/videos/viral-campaign.mp4',
    stats: {
      views: '10M+',
      engagement: '78%',
      growth: '400%',
    },
    client: 'StartupVision',
    year: '2024',
  },
  {
    id: 4,
    title: 'FinTech App Redesign',
    category: 'Complete Brand Transformation',
    description:
      'End-to-end transformation including brand identity, mobile app redesign, and market positioning strategy.',
    technologies: ['React Native', 'Brand Strategy', 'UI/UX', 'Motion Design'],
    image: '/images/work/project4.jpg',
    liveUrl: '#',
    stats: {
      growth: '250%',
      engagement: '88%',
      views: '1.2M',
    },
    client: 'FinanceFlow',
    year: '2023',
  },
];

const categories = [
  'All',
  'Brand Strategy & Identity',
  'Web Development & Design',
  'Viral Marketing Campaigns',
  'Complete Brand Transformation',
];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Brand Strategy & Identity':
        return <FaPalette />;
      case 'Web Development & Design':
        return <FaGlobe />;
      case 'Viral Marketing Campaigns':
        return <FaBullhorn />;
      case 'Complete Brand Transformation':
        return <FaRocket />;
      default:
        return <FaEye />;
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <Navbar />

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
            >
              our work
            </motion.h1>
            <motion.p
              className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              From bold ideas to bold brands. Discover how we've helped
              businesses transform their digital presence and achieve
              extraordinary growth.
            </motion.p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-[var(--color-brand-primary)] to-[var(--color-brand-accent)] text-white border-transparent'
                    : 'border-[var(--color-border)]/30 text-[var(--color-text-secondary)] hover:border-[var(--color-brand-primary)]/50 hover:text-[var(--color-text-primary)]'
                }`}
              >
                {getCategoryIcon(category)}
                <span className="font-medium">{category}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" layout>
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative bg-[var(--color-background-dark)] rounded-2xl overflow-hidden border border-[var(--color-border)]/20 hover:border-[var(--color-brand-primary)]/50 transition-all duration-300">
                    {/* Project Image */}
                    <div className="relative h-64 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-[var(--color-brand-primary)]/20 to-[var(--color-brand-accent)]/20 flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="text-6xl text-[var(--color-brand-primary)]/30"
                        >
                          {getCategoryIcon(project.category)}
                        </motion.div>
                      </div>

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          className="bg-white/20 backdrop-blur-sm rounded-full p-4"
                        >
                          <FaEye className="text-2xl text-white" />
                        </motion.div>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-[var(--color-brand-primary)]/20 backdrop-blur-sm text-[var(--color-text-primary)] text-sm rounded-full border border-[var(--color-brand-primary)]/30">
                          {project.category}
                        </span>
                      </div>

                      {/* Year */}
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-sm rounded-full">
                          {project.year}
                        </span>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-brand-primary)] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[var(--color-text-secondary)] mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Stats */}
                      {project.stats && (
                        <div className="flex gap-4 mb-4">
                          {project.stats.growth && (
                            <div className="flex items-center gap-1 text-green-400">
                              <FaRocket className="text-xs" />
                              <span className="text-sm">
                                {project.stats.growth}
                              </span>
                            </div>
                          )}
                          {project.stats.views && (
                            <div className="flex items-center gap-1 text-blue-400">
                              <FaEye className="text-xs" />
                              <span className="text-sm">
                                {project.stats.views}
                              </span>
                            </div>
                          )}
                          {project.stats.engagement && (
                            <div className="flex items-center gap-1 text-pink-400">
                              <FaHeart className="text-xs" />
                              <span className="text-sm">
                                {project.stats.engagement}
                              </span>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-[var(--color-background)] text-[var(--color-text-secondary)] text-xs rounded border border-[var(--color-border)]/20"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 text-[var(--color-text-secondary)] text-xs">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Client */}
                      <p className="text-sm text-[var(--color-text-secondary)]">
                        Client:{' '}
                        <span className="text-[var(--color-text-primary)]">
                          {project.client}
                        </span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
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
              The Results Speak for Themselves
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Numbers that matter, impact that lasts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: '50+',
                label: 'Projects Completed',
                icon: <FaRocket />,
              },
              {
                number: '98%',
                label: 'Client Satisfaction',
                icon: <FaHeart />,
              },
              { number: '300%', label: 'Average Growth', icon: <FaShareAlt /> },
              { number: '24/7', label: 'Support Available', icon: <FaEye /> },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-xl bg-[var(--color-background)] border border-[var(--color-border)]/20 hover:border-[var(--color-brand-primary)]/50 transition-all duration-300"
              >
                <div className="text-3xl text-[var(--color-brand-primary)] mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-[var(--color-text-primary)] mb-2">
                  {stat.number}
                </div>
                <div className="text-[var(--color-text-secondary)]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-6">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)] mb-8">
              Let's discuss your project and turn your vision into reality
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[var(--color-brand-primary)] to-[var(--color-brand-accent)] text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-lg hover:shadow-[var(--color-brand-primary)]/25 transition-all duration-300"
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-[var(--color-background-dark)] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[var(--color-border)]/30"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-[var(--color-text-primary)] mb-2">
                      {selectedProject.title}
                    </h3>
                    <p className="text-[var(--color-brand-primary)]">
                      {selectedProject.category}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] text-2xl"
                  >
                    ✕
                  </button>
                </div>

                <div className="h-64 bg-gradient-to-br from-[var(--color-brand-primary)]/20 to-[var(--color-brand-accent)]/20 rounded-xl mb-6 flex items-center justify-center">
                  <div className="text-6xl text-[var(--color-brand-primary)]/30">
                    {getCategoryIcon(selectedProject.category)}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
                      Project Description
                    </h4>
                    <p className="text-[var(--color-text-secondary)] mb-6">
                      {selectedProject.description}
                    </p>

                    <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-[var(--color-brand-primary)]/20 text-[var(--color-brand-primary)] text-sm rounded-full border border-[var(--color-brand-primary)]/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
                      Project Details
                    </h4>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between">
                        <span className="text-[var(--color-text-secondary)]">
                          Client:
                        </span>
                        <span className="text-[var(--color-text-primary)]">
                          {selectedProject.client}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[var(--color-text-secondary)]">
                          Year:
                        </span>
                        <span className="text-[var(--color-text-primary)]">
                          {selectedProject.year}
                        </span>
                      </div>
                    </div>

                    {selectedProject.stats && (
                      <>
                        <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
                          Results
                        </h4>
                        <div className="space-y-3">
                          {selectedProject.stats.growth && (
                            <div className="flex justify-between">
                              <span className="text-[var(--color-text-secondary)]">
                                Growth:
                              </span>
                              <span className="text-green-400">
                                {selectedProject.stats.growth}
                              </span>
                            </div>
                          )}
                          {selectedProject.stats.views && (
                            <div className="flex justify-between">
                              <span className="text-[var(--color-text-secondary)]">
                                Views:
                              </span>
                              <span className="text-blue-400">
                                {selectedProject.stats.views}
                              </span>
                            </div>
                          )}
                          {selectedProject.stats.engagement && (
                            <div className="flex justify-between">
                              <span className="text-[var(--color-text-secondary)]">
                                Engagement:
                              </span>
                              <span className="text-pink-400">
                                {selectedProject.stats.engagement}
                              </span>
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {selectedProject.liveUrl && (
                  <div className="mt-8 pt-6 border-t border-[var(--color-border)]/20">
                    <button className="flex items-center gap-2 bg-gradient-to-r from-[var(--color-brand-primary)] to-[var(--color-brand-accent)] text-white px-6 py-3 rounded-lg hover:scale-105 transition-transform">
                      <FaExternalLinkAlt />
                      View Live Project
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
