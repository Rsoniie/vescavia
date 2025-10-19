import Navbar from '../../components/navbar';
import Button from '../../components/button';
import DynamicEmoji from '../../components/animations/dynamicComp';
import ServiceCard from '../../components/ServiceCard';
import SEO from '../../components/SEO';
import Image from 'next/image';

const brandServices = [
  {
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    title: 'Brand Strategy',
    description:
      'Positioning that cuts through the noise and positions you to win.',
  },
  {
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop',
    title: 'Brand Voice & Messaging',
    description: 'Words that resonate and messaging that converts.',
  },
  {
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    title: 'Visual Identity Design',
    description:
      'Logos, colors, and visual systems that stop the scroll.',
  },
  {
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop',
    title: 'Brand Guidelines',
    description: 'Consistency that builds recognition and trust.',
  },
];

const heroImages = ['/img1.webp', '/img2.jpg', '/img3.webp', '/img4.avif'];

const processSteps = [
  {
    title: 'Discovery',
    description: 'Deep dive into your market, competitors, and what makes you different.',
  },
  {
    title: 'Strategy',
    description: 'Build a positioning that cuts through the noise and sticks.',
  },
  {
    title: 'Design',
    description:
      'Craft visuals that people remember and messaging that resonates.',
  },
  {
    title: 'Launch',
    description:
      'Roll out your brand identity with confidence and momentum.',
  },
];

const testimonials = [
  {
    name: 'Morgan Taylor',
    company: 'EcoWave',
    quote:
      'Finally, a brand that actually reflects who we are. Sales jumped 40% in 3 months.',
  },
  {
    name: 'Samira Patel',
    company: 'Urban Roots',
    quote:
      'They didn\'t just redesign our logo. They repositioned our entire business.',
  },
  {
    name: 'Chris Evans',
    company: 'Peak Performance',
    quote: 'Clear strategy, bold design. No fluff, just results.',
  },
];

const faqs = [
  {
    question: 'What is brand management?',
    answer:
      'It\'s building and maintaining your brand identity, positioning, and reputation. Think of it as making sure people know who you are and why they should care.',
  },
  {
    question: 'How long does a rebrand take?',
    answer:
      'Usually 4-8 weeks depending on scope. We move fast but don\'t cut corners.',
  },
  {
    question: 'Can you help with ongoing brand support?',
    answer:
      'Absolutely. We offer retainer packages for brands that need consistent creative firepower.',
  },
];

export default function BrandManagementPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text-primary)] w-full">
      <SEO
        title="Brand Management Services"
        description="vescavia: Bold brand management for modern businesses."
      />
      <Navbar />
      {/* Hero Section */}
      <section className="relative flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto pt-32 pb-16 px-4 sm:px-8">
        <div className="flex-1 z-10 text-left">
          <h1 className="font-jaro text-5xl sm:text-6xl md:text-7xl lg:text-8xl lowercase bg-gradient-to-r from-[#FE6427] via-[#8638C4] to-[#b9f151] bg-clip-text text-transparent font-bold mb-6 leading-tight">
            brand management
          </h1>
          <p className="text-lg md:text-2xl text-[var(--color-text-secondary)] max-w-xl mb-8">
            We build brands that{' '}
            <span className="text-[#FE6427] font-bold">command attention</span> and{' '}
            <span className="text-[#b9f151] font-bold">drive growth</span>.
          </p>
          <Button textContent="let's talk" className="mt-2" />
        </div>
        <div className="flex-1 flex items-center justify-center relative mt-10 lg:mt-0">
          <DynamicEmoji images={heroImages} size={320} />
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 py-12">
        <div className="bg-[var(--color-background-dark)] rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-[#8638C4]/20 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="font-jaro text-3xl sm:text-4xl lowercase font-bold mb-4 text-[#FE6427]">
              why vescavia?
            </h2>
            <p className="text-[var(--color-text-secondary)] text-lg mb-6 leading-relaxed">
              We don't do cookie-cutter branding. Your business is unique, your brand should be too.
            </p>
            <ul className="space-y-3 text-[var(--color-text-secondary)]">
              <li className="flex items-start gap-3">
                <span className="text-[#b9f151] font-bold">→</span>
                <span>Strategic positioning that actually differentiates you</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#fbff15] font-bold">→</span>
                <span>Visual identity that stops the scroll</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FE6427] font-bold">→</span>
                <span>Messaging that connects, not confuses</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#8638C4] font-bold">→</span>
                <span>Brand systems built for growth</span>
              </li>
            </ul>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl border-2 border-[#FE6427]/30">
              <Image
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=800&fit=crop"
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
        <h2 className="font-jaro text-4xl lowercase font-bold mb-12 text-center bg-gradient-to-r from-[#FE6427] via-[#8638C4] to-[#b9f151] bg-clip-text text-transparent">
          our process
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[var(--color-background-dark)] rounded-2xl shadow-xl border-2 border-[var(--color-border)] p-6 hover:border-[#FE6427] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center text-xl font-bold" style={{
                backgroundColor: ['#FE6427', '#8638C4', '#fbff15', '#b9f151'][idx],
                color: idx === 2 ? '#000' : '#fff'
              }}>
                {idx + 1}
              </div>
              <h3 className="font-jaro text-2xl lowercase font-bold mb-2 text-[var(--color-text-primary)]">
                {step.title}
              </h3>
              <p className="text-[var(--color-text-muted)] text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section - Split Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <h2 className="font-jaro text-4xl lowercase font-bold mb-12 text-center bg-gradient-to-r from-[#8638C4] via-[#FE6427] to-[#b9f151] bg-clip-text text-transparent">
          what we deliver
        </h2>
        
        {/* Two Column Layout with alternating sides */}
        <div className="space-y-16">
          {/* Service 1 - Image Left */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 relative h-[300px] rounded-2xl overflow-hidden border-2 border-[#FE6427]/30">
              <Image
                src={brandServices[0].image}
                alt={brandServices[0].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-jaro text-3xl lowercase font-bold mb-4 text-[#FE6427]">
                {brandServices[0].title}
              </h3>
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                {brandServices[0].description}
              </p>
            </div>
          </div>

          {/* Service 2 - Image Right */}
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="flex-1 relative h-[300px] rounded-2xl overflow-hidden border-2 border-[#8638C4]/30">
              <Image
                src={brandServices[1].image}
                alt={brandServices[1].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-jaro text-3xl lowercase font-bold mb-4 text-[#8638C4]">
                {brandServices[1].title}
              </h3>
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                {brandServices[1].description}
              </p>
            </div>
          </div>

          {/* Service 3 - Image Left */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 relative h-[300px] rounded-2xl overflow-hidden border-2 border-[#fbff15]/30">
              <Image
                src={brandServices[2].image}
                alt={brandServices[2].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-jaro text-3xl lowercase font-bold mb-4 text-[#fbff15]">
                {brandServices[2].title}
              </h3>
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                {brandServices[2].description}
              </p>
            </div>
          </div>

          {/* Service 4 - Image Right */}
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="flex-1 relative h-[300px] rounded-2xl overflow-hidden border-2 border-[#b9f151]/30">
              <Image
                src={brandServices[3].image}
                alt={brandServices[3].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-jaro text-3xl lowercase font-bold mb-4 text-[#b9f151]">
                {brandServices[3].title}
              </h3>
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                {brandServices[3].description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Results Section - Simple List */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 py-16">
        <h2 className="font-jaro text-3xl lowercase font-bold mb-12 text-center text-[#FE6427]">
          results that matter
        </h2>
        <div className="space-y-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="border-l-4 pl-6 py-4 transition-all duration-300" 
              style={{ borderColor: ['#FE6427', '#8638C4', '#b9f151'][idx] }}
            >
              <p className="text-xl text-[var(--color-text-primary)] mb-4 leading-relaxed italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="font-bold text-[var(--color-text-primary)]">{t.name}</div>
                <span className="text-[var(--color-text-muted)]">•</span>
                <div className="text-[var(--color-text-muted)] text-sm">{t.company}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section - Accordion Style */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 py-12">
        <h2 className="font-jaro text-3xl lowercase font-bold mb-12 text-center bg-gradient-to-r from-[#fbff15] via-[#FE6427] to-[#8638C4] bg-clip-text text-transparent">
          questions?
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[var(--color-background-dark)] rounded-xl border-l-4 p-6 shadow-md transition-all duration-300 hover:pl-8"
              style={{ borderColor: ['#FE6427', '#8638C4', '#b9f151'][idx] }}
            >
              <h3 className="font-jaro text-xl lowercase font-bold mb-3 text-[var(--color-text-primary)]">
                {faq.question}
              </h3>
              <p className="text-[var(--color-text-secondary)] text-base leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Creative Showcase Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-12 mb-16">
        <h2 className="font-jaro text-3xl lowercase font-bold mb-8 text-center text-[#b9f151]">
          ready to level up?
        </h2>
        <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-[#FE6427] bg-[var(--color-background-dark)]">
          <div className="flex flex-col items-center justify-center py-16 px-8">
            <p className="text-2xl text-[var(--color-text-primary)] max-w-2xl text-center mb-8 font-bold">
              Your brand deserves better than blend-in marketing.
            </p>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-xl text-center mb-8">
              Let's build something that gets noticed, remembered, and drives real business results.
            </p>
            <Button textContent="start your project" className="mt-2" />
          </div>
        </div>
      </section>
    </div>
  );
}
