import Navbar from '../../components/navbar';
import Button from '../../components/button';
import ContactForm from '../../components/contactForm';
import DynamicEmoji from '../../components/animations/dynamicComp';
import ServiceCard from '../../components/ServiceCard';
import SEO from '../../components/SEO';
import Image from 'next/image';

const brandServices = [
  {
    image: '/images/services/brand-strategy.jpg',
    title: 'Brand Strategy',
    description:
      'Crafting a unique brand identity and positioning for maximum impact.',
  },
  {
    image: '/images/services/brand-voice.jpg',
    title: 'Brand Voice & Messaging',
    description: 'Defining your voice and story to connect with your audience.',
  },
  {
    image: '/images/services/brand-design.jpg',
    title: 'Visual Identity Design',
    description:
      'Logos, color palettes, and assets that make your brand unforgettable.',
  },
  {
    image: '/images/services/brand-guidelines.jpg',
    title: 'Brand Guidelines',
    description: 'Ensuring consistency across every touchpoint and platform.',
  },
];

const heroImages = ['/img1.webp', '/img2.jpg', '/img3.webp', '/img4.avif'];

const processSteps = [
  {
    title: 'Discovery',
    description: 'We immerse ourselves in your brand, market, and goals.',
  },
  {
    title: 'Strategy',
    description: 'We develop a custom brand blueprint for your business.',
  },
  {
    title: 'Design',
    description:
      'We bring your brand to life with stunning visuals and messaging.',
  },
  {
    title: 'Launch',
    description:
      'We roll out your new brand identity and ensure a seamless transition.',
  },
];

const testimonials = [
  {
    name: 'Morgan Taylor',
    company: 'EcoWave',
    quote:
      'Vescavia transformed our brand. We finally stand out in a crowded market!',
  },
  {
    name: 'Samira Patel',
    company: 'Urban Roots',
    quote:
      'The new brand identity is bold, modern, and exactly what we needed.',
  },
  {
    name: 'Chris Evans',
    company: 'Peak Performance',
    quote: 'From strategy to design, the process was seamless and inspiring.',
  },
];

const faqs = [
  {
    question: 'What is brand management?',
    answer:
      'Brand management is the process of building, maintaining, and evolving your brand’s identity and reputation.',
  },
  {
    question: 'How long does a rebrand take?',
    answer:
      'A typical rebrand project takes 4-8 weeks, depending on scope and deliverables.',
  },
  {
    question: 'Can you help with ongoing brand support?',
    answer:
      'Yes! We offer ongoing brand management and creative support packages.',
  },
];

export default function BrandManagementPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text-primary)] w-full">
      <SEO
        title="Brand Management Services"
        description="Vescavia: Bold brand management for modern businesses."
      />
      <Navbar />
      {/* Hero Section */}
      <section className="relative flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto pt-32 pb-16 px-4 sm:px-8">
        <div className="flex-1 z-10 text-left">
          <h1 className="font-jaro text-5xl sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-[var(--color-brand-primary)] via-[var(--color-brand-accent)] to-[var(--color-brand-secondary)] bg-clip-text text-transparent font-bold mb-6 leading-tight">
            Brand Management
          </h1>
          <p className="text-lg md:text-2xl text-[var(--color-text-secondary)] max-w-xl mb-8">
            We build, elevate, and protect brands that{' '}
            <span className="text-fuchsia-300 font-bold">stand out</span> and{' '}
            <span className="text-blue-300 font-bold">endure</span>.
          </p>
          <Button textContent="Start Your Brand Journey" className="mt-2" />
        </div>
        <div className="flex-1 flex items-center justify-center relative mt-10 lg:mt-0">
          <DynamicEmoji images={heroImages} size={320} />
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 py-12">
        <div className="bg-gradient-to-br from-purple-900/60 via-fuchsia-900/60 to-blue-900/60 rounded-3xl p-8 md:p-12 shadow-2xl border border-fuchsia-400/20 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="font-jaro text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-300 via-fuchsia-300 to-blue-300 bg-clip-text text-transparent">
              Why Vescavia for Brand Management?
            </h2>
            <p className="text-gray-200 text-lg mb-4">
              We don’t just manage brands. We create{' '}
              <span className="text-fuchsia-300 font-semibold">icons</span> that
              inspire loyalty and drive growth.
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Comprehensive brand audits & strategy</li>
              <li>Visual identity & messaging</li>
              <li>Brand launch & ongoing support</li>
              <li>Reputation management</li>
            </ul>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl border-2 border-fuchsia-400/30">
              <Image
                src="/images/services/brand-hero.jpg"
                alt="Brand Management Visual"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-12">
        <h2 className="font-jaro text-4xl font-bold mb-8 bg-gradient-to-r from-purple-300 via-fuchsia-300 to-blue-300 bg-clip-text text-transparent text-center">
          How We Work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[var(--color-background-dark)] rounded-2xl shadow-xl border border-[color-mix(in_srgb,var(--color-border)_10%,transparent)] p-6 flex flex-col items-center text-center"
            >
              <div className="text-4xl mb-4">
                {['🔍', '🧭', '🎨', '🚀'][idx]}
              </div>
              <h3 className="font-jaro text-2xl font-bold mb-2 bg-gradient-to-r from-[color-mix(in_srgb,var(--color-brand-primary)_80%,white)] via-[color-mix(in_srgb,var(--color-brand-accent)_80%,white)] to-[color-mix(in_srgb,var(--color-brand-secondary)_80%,white)] bg-clip-text text-transparent">
                {step.title}
              </h3>
              <p className="text-[var(--color-text-muted)] text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <h2 className="font-jaro text-4xl font-bold mb-8 bg-gradient-to-r from-purple-300 via-fuchsia-300 to-blue-300 bg-clip-text text-transparent text-center">
          Our Brand Management Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {brandServices.map((service, idx) => (
            <div
              key={idx}
              className="bg-[var(--color-background-dark)] rounded-2xl shadow-xl border border-[color-mix(in_srgb,var(--color-border)_10%,transparent)] hover:border-[color-mix(in_srgb,var(--color-border)_40%,transparent)] transition-all duration-300 overflow-hidden"
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </section>

      {/* Client Results Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 py-12">
        <h2 className="font-jaro text-3xl font-bold mb-8 bg-gradient-to-r from-purple-300 via-fuchsia-300 to-blue-300 bg-clip-text text-transparent text-center">
          Client Results
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-purple-900/60 via-fuchsia-900/60 to-blue-900/60 rounded-2xl shadow-xl border border-fuchsia-400/10 p-6 flex flex-col items-center text-center"
            >
              <div className="text-4xl mb-4">🌟</div>
              <p className="text-lg text-gray-200 mb-4">“{t.quote}”</p>
              <div className="font-bold text-fuchsia-200">{t.name}</div>
              <div className="text-blue-200 text-sm">{t.company}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 py-12">
        <h2 className="font-jaro text-3xl font-bold mb-8 bg-gradient-to-r from-purple-300 via-fuchsia-300 to-blue-300 bg-clip-text text-transparent text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[#1D0B2E] rounded-xl border border-fuchsia-400/10 p-6 shadow-md"
            >
              <h3 className="font-jaro text-xl font-bold mb-2 text-fuchsia-200">
                {faq.question}
              </h3>
              <p className="text-gray-300 text-base">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Creative Showcase Section (Placeholder) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-12">
        <h2 className="font-jaro text-3xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-fuchsia-300 to-blue-300 bg-clip-text text-transparent text-center">
          See Our Brand Impact
        </h2>
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-[color-mix(in_srgb,var(--color-border)_10%,transparent)] bg-gradient-to-br from-[color-mix(in_srgb,var(--color-brand-primary)_40%,black)] via-[color-mix(in_srgb,var(--color-brand-accent)_40%,black)] to-[color-mix(in_srgb,var(--color-brand-secondary)_40%,black)]">
          {/* Placeholder for creative showcase */}
          <div className="flex flex-col items-center justify-center py-16">
            <span className="text-5xl mb-4">🏆✨</span>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-xl text-center">
              Your brand could be here! We turn ideas into iconic brands.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-8 py-12">
        <h2 className="font-jaro text-3xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-fuchsia-300 to-blue-300 bg-clip-text text-transparent text-center">
          Ready to Build Your Brand?
        </h2>
        <div className="bg-[var(--color-background-dark)] rounded-2xl shadow-2xl border border-[color-mix(in_srgb,var(--color-border)_10%,transparent)] p-8">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
