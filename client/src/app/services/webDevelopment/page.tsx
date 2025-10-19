import Navbar from '../../components/navbar';
import Button from '../../components/button';
import DynamicEmoji from '../../components/animations/dynamicComp';
import SEO from '../../components/SEO';
import Image from 'next/image';

const webServices = [
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    title: 'Custom Web Development',
    description:
      'Tailored websites built with modern tech. Fast, scalable, and built to convert.',
  },
  {
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    title: 'E-Commerce Platforms',
    description: 'Online stores that sell. Optimized checkout, seamless UX, built for growth.',
  },
  {
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
    title: 'Web Applications',
    description: 'Complex web apps made simple. SaaS platforms, dashboards, and tools.',
  },
  {
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
    title: 'Performance & SEO',
    description: 'Lightning-fast sites that rank. Technical SEO and optimization built-in.',
  },
];

const heroImages = ['/img1.webp', '/img2.jpg', '/img3.webp', '/img4.avif'];

const techStack = [
  'Next.js', 'React', 'TypeScript', 'Node.js', 
  'Tailwind CSS', 'PostgreSQL', 'MongoDB', 'AWS'
];

const processSteps = [
  {
    title: 'Plan',
    description: 'Define scope, features, tech stack. Map out user flows and architecture.',
  },
  {
    title: 'Design',
    description: 'Wireframes, mockups, prototypes. Every screen designed for conversion.',
  },
  {
    title: 'Build',
    description: 'Clean code, best practices, responsive design. Built to scale.',
  },
  {
    title: 'Launch',
    description: 'Deploy, test, monitor. Ongoing support and optimization.',
  },
];

const testimonials = [
  {
    name: 'Ava Chen',
    company: 'FreshMart',
    quote:
      'Site speed went from 4s to under 1s. Conversion rate up 34%. Worth every penny.',
  },
  {
    name: 'Liam O\'Connor',
    company: 'Peak Fitness',
    quote:
      'Clean code, fast delivery, zero bugs. Best dev team we\'ve worked with.',
  },
  {
    name: 'Sara Kim',
    company: 'TechBridge',
    quote:
      'Built a complex SaaS platform in 8 weeks. Scalable, secure, and users love it.',
  },
];

const faqs = [
  {
    question: 'What tech stack do you use?',
    answer:
      'We use modern frameworks like Next.js, React, Node.js, and TypeScript. We choose the best tools for your specific needs - not a one-size-fits-all approach.',
  },
  {
    question: 'How long does development take?',
    answer:
      'Simple sites: 2-4 weeks. E-commerce: 4-8 weeks. Complex web apps: 8-16 weeks. We move fast without cutting corners.',
  },
  {
    question: 'Do you provide hosting and maintenance?',
    answer:
      'Yes. We handle deployment, hosting, monitoring, updates, and ongoing support. You get a maintenance dashboard to track everything.',
  },
];

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text-primary)] w-full">
      <SEO
        title="Web Development Services"
        description="vescavia: Fast, modern web development that drives results."
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto pt-32 pb-16 px-4 sm:px-8">
        <div className="flex-1 z-10 text-left">
          <h1 className="font-jaro text-5xl sm:text-6xl md:text-7xl lg:text-8xl lowercase bg-gradient-to-r from-[#FE6427] via-[#8638C4] to-[#b9f151] bg-clip-text text-transparent font-bold mb-6 leading-tight">
            web development
          </h1>
          <p className="text-lg md:text-2xl text-[var(--color-text-secondary)] max-w-xl mb-8">
            We build{' '}
            <span className="text-[#FE6427] font-bold">fast</span>,{' '}
            <span className="text-[#b9f151] font-bold">scalable</span> websites that drive real business results.
          </p>
          <Button textContent="start your project" className="mt-2" />
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
              modern tech, real results
            </h2>
            <p className="text-[var(--color-text-secondary)] text-lg mb-6 leading-relaxed">
              We don't build websites for the sake of it. We build digital products that solve problems and drive revenue.
            </p>
            <ul className="space-y-3 text-[var(--color-text-secondary)]">
              <li className="flex items-start gap-3">
                <span className="text-[#b9f151] font-bold">→</span>
                <span>Lightning-fast performance (Core Web Vitals optimized)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#fbff15] font-bold">→</span>
                <span>Mobile-first responsive design</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FE6427] font-bold">→</span>
                <span>SEO and conversion optimization built-in</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#8638C4] font-bold">→</span>
                <span>Scalable architecture that grows with you</span>
              </li>
            </ul>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl border-2 border-[#FE6427]/30">
              <Image
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=800&fit=crop"
                alt="Web Development Visual"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-12">
        <h2 className="font-jaro text-3xl lowercase font-bold mb-8 text-center text-[#8638C4]">
          our tech stack
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className="px-6 py-3 bg-[var(--color-background-dark)] border-2 border-[var(--color-border)] rounded-full text-[var(--color-text-primary)] font-medium hover:border-[#FE6427] transition-all duration-300"
            >
              {tech}
            </div>
          ))}
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
          what we build
        </h2>
        
        {/* Two Column Layout with alternating sides */}
        <div className="space-y-16">
          {/* Service 1 - Image Left */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 relative h-[300px] rounded-2xl overflow-hidden border-2 border-[#FE6427]/30">
              <Image
                src={webServices[0].image}
                alt={webServices[0].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-jaro text-3xl lowercase font-bold mb-4 text-[#FE6427]">
                {webServices[0].title}
              </h3>
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                {webServices[0].description}
              </p>
            </div>
          </div>

          {/* Service 2 - Image Right */}
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="flex-1 relative h-[300px] rounded-2xl overflow-hidden border-2 border-[#8638C4]/30">
              <Image
                src={webServices[1].image}
                alt={webServices[1].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-jaro text-3xl lowercase font-bold mb-4 text-[#8638C4]">
                {webServices[1].title}
              </h3>
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                {webServices[1].description}
              </p>
            </div>
          </div>

          {/* Service 3 - Image Left */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 relative h-[300px] rounded-2xl overflow-hidden border-2 border-[#fbff15]/30">
              <Image
                src={webServices[2].image}
                alt={webServices[2].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-jaro text-3xl lowercase font-bold mb-4 text-[#fbff15]">
                {webServices[2].title}
              </h3>
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                {webServices[2].description}
              </p>
            </div>
          </div>

          {/* Service 4 - Image Right */}
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="flex-1 relative h-[300px] rounded-2xl overflow-hidden border-2 border-[#b9f151]/30">
              <Image
                src={webServices[3].image}
                alt={webServices[3].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-jaro text-3xl lowercase font-bold mb-4 text-[#b9f151]">
                {webServices[3].title}
              </h3>
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                {webServices[3].description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Results Section - Simple List */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 py-16">
        <h2 className="font-jaro text-3xl lowercase font-bold mb-12 text-center text-[#FE6427]">
          client results
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

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-12 mb-16">
        <h2 className="font-jaro text-3xl lowercase font-bold mb-8 text-center text-[#b9f151]">
          let's build something
        </h2>
        <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-[#FE6427] bg-[var(--color-background-dark)]">
          <div className="flex flex-col items-center justify-center py-16 px-8">
            <p className="text-2xl text-[var(--color-text-primary)] max-w-2xl text-center mb-8 font-bold">
              Your website should be your best salesperson.
            </p>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-xl text-center mb-8">
              Let's build something fast, beautiful, and profitable. Modern web development that actually works.
            </p>
            <Button textContent="start your project" className="mt-2" />
          </div>
        </div>
      </section>
    </div>
  );
}
