import Navbar from '../../components/navbar';
import Button from '../../components/button';
import ContactForm from '../../components/contactForm';
import DynamicEmoji from '../../components/animations/dynamicComp';
import ServiceCard from '../../components/ServiceCard';
import SEO from '../../components/SEO';
import Image from 'next/image';

const adServices = [
  {
    image: '/images/services/ad-creative-1.jpg',
    title: 'Video Ad Production',
    description:
      'Scroll-stopping video ads crafted for every platform. From concept to viral delivery.',
  },
  {
    image: '/images/services/ad-creative-2.jpg',
    title: 'Social Media Campaigns',
    description:
      'Creative, thumb-stopping ads for Instagram, TikTok, Facebook, and more.',
  },
  {
    image: '/images/services/ad-creative-3.jpg',
    title: 'Copywriting & Scripting',
    description:
      'Words that sell. Scripts and copy that turn browsers into buyers.',
  },
  {
    image: '/images/services/ad-creative-4.jpg',
    title: 'Motion Graphics',
    description: 'Dynamic animations and graphics to make your message pop.',
  },
];

const heroImages = ['/img1.webp', '/img2.jpg', '/img3.webp', '/img4.avif'];

const processSteps = [
  {
    title: 'Discovery',
    description:
      'We dive deep into your brand, audience, and goals to spark the big idea.',
  },
  {
    title: 'Creative Concept',
    description:
      'Our team brainstorms, storyboards, and pitches bold ad concepts tailored for your brand.',
  },
  {
    title: 'Production',
    description:
      'From script to screen, we bring your ad to life with top-tier visuals and sound.',
  },
  {
    title: 'Launch & Optimize',
    description: 'We launch, analyze, and iterate for maximum impact and ROI.',
  },
];

const testimonials = [
  {
    name: 'Alex Rivera',
    company: 'GlowUp Cosmetics',
    quote:
      'Vescavia took our ad game to the next level. Our campaign went viral and sales skyrocketed!',
  },
  {
    name: 'Priya Singh',
    company: 'FitFuel',
    quote:
      'The creative team at Vescavia just gets it. Our brand has never looked better online.',
  },
  {
    name: 'Jordan Lee',
    company: 'TechNest',
    quote:
      'From concept to launch, the process was seamless and the results were outstanding.',
  },
];

const faqs = [
  {
    question: 'What platforms do you create ads for?',
    answer:
      'We create ads for all major platforms including Instagram, TikTok, Facebook, YouTube, and more.',
  },
  {
    question: 'How long does the ad creation process take?',
    answer:
      'Most projects take 2-4 weeks from kickoff to delivery, depending on complexity.',
  },
  {
    question: 'Can you help with ad strategy and placement?',
    answer:
      'Absolutely! We offer full-funnel creative strategy and can advise on media buying and placement.',
  },
];

export default function AddCreationPage() {
  return (
    <div className="min-h-screen bg-[#11001D] text-white w-full">
      <SEO
        title="Ad Creation Services"
        description="Vescavia: Ad Creation that Converts. Viral, bold, and unforgettable."
      />
      <Navbar />
      {/* Hero Section */}
      <section className="relative flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto pt-32 pb-16 px-4 sm:px-8">
        <div className="flex-1 z-10 text-left">
          <h1 className="font-jaro text-5xl sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent font-bold mb-6 leading-tight">
            Ad Creation
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 max-w-xl mb-8">
            From concept to viral campaign, we craft ads that{' '}
            <span className="text-fuchsia-300 font-bold">convert</span> and{' '}
            <span className="text-blue-300 font-bold">captivate</span>.
          </p>
          <Button textContent="Start Your Campaign" className="mt-2" />
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
              Why Vescavia for Ad Creation?
            </h2>
            <p className="text-gray-200 text-lg mb-4">
              We don’t just make ads. We create{' '}
              <span className="text-fuchsia-300 font-semibold">
                experiences
              </span>{' '}
              that stick, stories that spread, and campaigns that{' '}
              <span className="text-blue-300 font-semibold">convert</span>.
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Full-funnel creative strategy</li>
              <li>Platform-native content (TikTok, IG, YT, Meta, and more)</li>
              <li>Performance-driven design & copy</li>
              <li>Rapid iteration & A/B testing</li>
            </ul>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl border-2 border-fuchsia-400/30">
              <Image
                src="/images/services/ad-hero.jpg"
                alt="Ad Creation Visual"
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
              className="bg-[#1D0B2E] rounded-2xl shadow-xl border border-fuchsia-400/10 p-6 flex flex-col items-center text-center"
            >
              <div className="text-4xl mb-4">
                {['💡', '🎨', '🎬', '🚀'][idx]}
              </div>
              <h3 className="font-jaro text-2xl font-bold mb-2 bg-gradient-to-r from-purple-200 via-fuchsia-200 to-blue-200 bg-clip-text text-transparent">
                {step.title}
              </h3>
              <p className="text-gray-300 text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <h2 className="font-jaro text-4xl font-bold mb-8 bg-gradient-to-r from-purple-300 via-fuchsia-300 to-blue-300 bg-clip-text text-transparent text-center">
          Our Ad Creation Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {adServices.map((service, idx) => (
            <div
              key={idx}
              className="bg-[#1D0B2E] rounded-2xl shadow-xl border border-fuchsia-400/10 hover:border-fuchsia-400/40 transition-all duration-300 overflow-hidden"
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

      {/* Animated Video Grid Section (Creative Placeholder) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-12">
        <h2 className="font-jaro text-3xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-fuchsia-300 to-blue-300 bg-clip-text text-transparent text-center">
          See Our Creative Energy
        </h2>
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-fuchsia-400/10 bg-gradient-to-br from-purple-900/40 via-fuchsia-900/40 to-blue-900/40">
          {/* Placeholder for animated video grid or creative showcase */}
          <div className="flex flex-col items-center justify-center py-16">
            <span className="text-5xl mb-4">🎬✨</span>
            <p className="text-lg text-gray-200 max-w-xl text-center">
              Your ad could be here! We turn ideas into scroll-stopping visuals
              and viral moments.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-8 py-12">
        <h2 className="font-jaro text-3xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-fuchsia-300 to-blue-300 bg-clip-text text-transparent text-center">
          Ready to Create Something Viral?
        </h2>
        <div className="bg-[#1D0B2E] rounded-2xl shadow-2xl border border-fuchsia-400/10 p-8">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
