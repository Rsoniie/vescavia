import Navbar from '../../components/navbar';
import Button from '../../components/button';
import ContactForm from '../../components/contactForm';
import DynamicEmoji from '../../components/animations/dynamicComp';
import ServiceCard from '../../components/ServiceCard';
import SEO from '../../components/SEO';
import Image from 'next/image';

const webServices = [
  {
    image: '/images/services/webdev-1.jpg',
    title: 'Custom Website Design',
    description:
      'Unique, responsive designs that reflect your brand and engage users.',
  },
  {
    image: '/images/services/webdev-2.jpg',
    title: 'E-Commerce Solutions',
    description: 'Seamless online stores built for conversion and growth.',
  },
  {
    image: '/images/services/webdev-3.jpg',
    title: 'Web App Development',
    description: 'Powerful, scalable web applications for any business need.',
  },
  {
    image: '/images/services/webdev-4.jpg',
    title: 'Performance Optimization',
    description: 'Lightning-fast load times and smooth user experiences.',
  },
];

const heroImages = ['/img1.webp', '/img2.jpg', '/img3.webp', '/img4.avif'];

const processSteps = [
  {
    title: 'Discovery',
    description: 'We learn your goals, users, and vision for the perfect site.',
  },
  {
    title: 'Design',
    description: 'We craft wireframes and stunning visuals for every screen.',
  },
  {
    title: 'Development',
    description: 'We build, test, and optimize your site for all devices.',
  },
  {
    title: 'Launch',
    description:
      'We deploy, monitor, and support your site for long-term success.',
  },
];

const testimonials = [
  {
    name: 'Ava Chen',
    company: 'FreshMart',
    quote:
      'Our new website is fast, beautiful, and converts like crazy. Thank you, Vescavia!',
  },
  {
    name: 'Liam O’Connor',
    company: 'Peak Fitness',
    quote:
      'The e-commerce solution was seamless and boosted our sales instantly.',
  },
  {
    name: 'Sara Kim',
    company: 'TechBridge',
    quote:
      'The web app is robust, scalable, and a joy to use. Highly recommend Vescavia.',
  },
];

const faqs = [
  {
    question: 'What platforms do you build on?',
    answer:
      'We build on all major platforms including custom stacks, Shopify, WordPress, and more.',
  },
  {
    question: 'How long does a website project take?',
    answer:
      'Most sites launch in 4-8 weeks, depending on complexity and features.',
  },
  {
    question: 'Do you offer ongoing support?',
    answer: 'Yes! We provide maintenance, updates, and performance monitoring.',
  },
];

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text-primary)] w-full">
      <SEO
        title="Web Development Services"
        description="Vescavia: Modern web development for brands that want to win online."
      />
      <Navbar />
      <section className="relative flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto pt-32 pb-16 px-4 sm:px-8">
        <div className="flex-1 z-10 text-left">
          <h1 className="font-jaro text-5xl sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-[var(--color-brand-primary)] via-[var(--color-brand-accent)] to-[var(--color-brand-secondary)] bg-clip-text text-transparent font-bold mb-6 leading-tight">
            Web Development
          </h1>
          <p className="text-lg md:text-2xl text-[var(--color-text-secondary)] max-w-xl mb-8">
            We build <span className="text-fuchsia-300 font-bold">modern</span>,{' '}
            <span className="text-blue-300 font-bold">high-converting</span>{' '}
            websites and apps for ambitious brands.
          </p>
          <Button textContent="Start Your Project" className="mt-2" />
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
              Why Vescavia for Web Development?
            </h2>
            <p className="text-gray-200 text-lg mb-4">
              We don’t just build websites. We create{' '}
              <span className="text-fuchsia-300 font-semibold">
                experiences
              </span>{' '}
              that engage, convert, and grow your business.
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Custom design & development</li>
              <li>Performance & SEO optimization</li>
              <li>E-commerce & web apps</li>
              <li>Ongoing support & analytics</li>
            </ul>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl border-2 border-fuchsia-400/30">
              <Image
                src="/images/services/web-hero.jpg"
                alt="Web Development Visual"
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
                {['🔍', '🎨', '💻', '🚀'][idx]}
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
          Our Web Development Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {webServices.map((service, idx) => (
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
          See Our Web Creations
        </h2>
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-[color-mix(in_srgb,var(--color-border)_10%,transparent)] bg-gradient-to-br from-[color-mix(in_srgb,var(--color-brand-primary)_40%,black)] via-[color-mix(in_srgb,var(--color-brand-accent)_40%,black)] to-[color-mix(in_srgb,var(--color-brand-secondary)_40%,black)]">
          {/* Placeholder for creative showcase */}
          <div className="flex flex-col items-center justify-center py-16">
            <span className="text-5xl mb-4">💻✨</span>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-xl text-center">
              Your site could be here! We turn ideas into high-performing web
              experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-8 py-12">
        <h2 className="font-jaro text-3xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-fuchsia-300 to-blue-300 bg-clip-text text-transparent text-center">
          Ready to Build Your Website?
        </h2>
        <div className="bg-[var(--color-background-dark)] rounded-2xl shadow-2xl border border-[color-mix(in_srgb,var(--color-border)_10%,transparent)] p-8">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
