'use client';

import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: '',
    services: [] as string[],
  });

  const services = [
    'Brand Management',
    'Video Editing',
    'Ad Creation',
    'Web Development',
    'Social Media Marketing',
    'Content Strategy',
  ];

  const budgetRanges = [
    'Under $5K',
    '$5K - $10K',
    '$10K - $25K',
    '$25K - $50K',
    '$50K+',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text-primary)]">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-jaro text-6xl sm:text-7xl md:text-8xl lg:text-9xl lowercase mb-6 bg-gradient-to-r from-[#FE6427] via-[#8638C4] to-[#b9f151] bg-clip-text text-transparent">
            let's talk
          </h1>
          <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            Have a project in mind? Want to scale your brand? Let's make it happen.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-12"
          >
            {/* Quick Contact Cards */}
            <div className="space-y-6">
              <h2 className="font-jaro text-3xl lowercase text-[#FE6427] mb-6">
                reach out
              </h2>

              <a
                href="mailto:hello@vescavia.com"
                className="block p-6 bg-[var(--color-background-dark)] border-2 border-[var(--color-border)] rounded-2xl hover:border-[#FE6427] transition-all duration-300 group"
              >
                <div className="text-sm text-[var(--color-text-muted)] mb-2">
                  Email
                </div>
                <div className="text-xl font-medium text-[var(--color-text-primary)] group-hover:text-[#FE6427] transition-colors">
                  hello@vescavia.com
                </div>
              </a>

              <div className="p-6 bg-[var(--color-background-dark)] border-2 border-[var(--color-border)] rounded-2xl">
                <div className="text-sm text-[var(--color-text-muted)] mb-2">
                  Response Time
                </div>
                <div className="text-xl font-medium text-[var(--color-text-primary)]">
                  Within 24 hours
                </div>
              </div>

              <div className="p-6 bg-[var(--color-background-dark)] border-2 border-[var(--color-border)] rounded-2xl">
                <div className="text-sm text-[var(--color-text-muted)] mb-2">
                  Location
                </div>
                <div className="text-xl font-medium text-[var(--color-text-primary)]">
                  Remote • Global
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-jaro text-2xl lowercase text-[#8638C4] mb-4">
                follow us
              </h3>
              <div className="flex gap-4">
                {[
                  { name: 'Instagram', handle: '@vescavia' },
                  { name: 'Twitter', handle: '@vescavia' },
                  { name: 'LinkedIn', handle: 'vescavia' },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="px-6 py-3 bg-[var(--color-background-dark)] border-2 border-[var(--color-border)] rounded-full hover:border-[#8638C4] transition-all duration-300"
                  >
                    <span className="text-sm font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Image/Graphic */}
            <div className="hidden lg:block relative h-64 rounded-2xl overflow-hidden border-2 border-[#b9f151]/30">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                alt="Creative workspace"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[var(--color-background-dark)] border-2 border-[var(--color-border)] rounded-lg text-[var(--color-text-primary)] focus:border-[#FE6427] focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[var(--color-background-dark)] border-2 border-[var(--color-border)] rounded-lg text-[var(--color-text-primary)] focus:border-[#FE6427] focus:outline-none transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                  Company
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[var(--color-background-dark)] border-2 border-[var(--color-border)] rounded-lg text-[var(--color-text-primary)] focus:border-[#FE6427] focus:outline-none transition-colors"
                  placeholder="Your Company Inc."
                />
              </div>

              {/* Services */}
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-3">
                  What do you need? *
                </label>
                <div className="flex flex-wrap gap-2">
                  {services.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => handleServiceToggle(service)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        formData.services.includes(service)
                          ? 'bg-[#FE6427] text-white border-2 border-[#FE6427]'
                          : 'bg-[var(--color-background-dark)] text-[var(--color-text-secondary)] border-2 border-[var(--color-border)] hover:border-[#FE6427]'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                  Budget Range
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) =>
                    setFormData({ ...formData, budget: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[var(--color-background-dark)] border-2 border-[var(--color-border)] rounded-lg text-[var(--color-text-primary)] focus:border-[#FE6427] focus:outline-none transition-colors"
                >
                  <option value="">Select a range</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                  Tell us about your project *
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={6}
                  className="w-full px-4 py-3 bg-[var(--color-background-dark)] border-2 border-[var(--color-border)] rounded-lg text-[var(--color-text-primary)] focus:border-[#FE6427] focus:outline-none transition-colors resize-none"
                  placeholder="I need help with..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#FE6427] to-[#8638C4] text-white font-bold text-lg rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Stats/Trust Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Response Time', value: '< 24h' },
            { label: 'Projects Delivered', value: '100+' },
            { label: 'Client Satisfaction', value: '98%' },
            { label: 'Countries Served', value: '15+' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-6 bg-[var(--color-background-dark)] rounded-2xl border-2 border-[var(--color-border)]"
            >
              <div
                className="text-4xl font-bold mb-2"
                style={{
                  color: ['#FE6427', '#8638C4', '#fbff15', '#b9f151'][idx],
                }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-[var(--color-text-muted)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
