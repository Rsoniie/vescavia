import Navbar from '../../components/navbar';
import Button from '../../components/button';
import ContactForm from '../../components/contactForm';
import DynamicEmoji from '../../components/animations/dynamicComp';
import ServiceCard from '../../components/ServiceCard';
import SEO from '../../components/SEO';
import Image from 'next/image';

const videoServices = [
  {
    image: '/images/services/video-editing-1.jpg',
    title: 'Social Video Editing',
    description: 'Short-form, viral-ready edits for TikTok, Reels, and YouTube Shorts.'
  },
  {
    image: '/images/services/video-editing-2.jpg',
    title: 'Commercial Editing',
    description: 'Polished, high-impact edits for ads, promos, and launches.'
  },
  {
    image: '/images/services/video-editing-3.jpg',
    title: 'Motion Graphics',
    description: 'Dynamic animations and graphics to make your videos pop.'
  },
  {
    image: '/images/services/video-editing-4.jpg',
    title: 'Storytelling Cuts',
    description: 'Narrative-driven edits that keep viewers engaged from start to finish.'
  },
];

const heroImages = ['/img1.webp', '/img2.jpg', '/img3.webp', '/img4.avif'];

const processSteps = [
  {
    title: 'Brief & Vision',
    description: 'We learn your goals, style, and audience for a perfect creative fit.'
  },
  {
    title: 'Raw to Rough',
    description: 'We cut, arrange, and build the story from your footage.'
  },
  {
    title: 'Polish & Effects',
    description: 'We add color, sound, motion, and magic.'
  },
  {
    title: 'Delivery',
    description: 'You get ready-to-publish, platform-optimized videos.'
  },
];

const testimonials = [
  {
    name: 'Jamie Lin',
    company: 'SnapFit',
    quote: 'Our videos finally get the attention they deserve. Vescavia’s edits are next-level!'
  },
  {
    name: 'Ravi Kumar',
    company: 'ByteWorks',
    quote: 'The motion graphics and storytelling made our campaign unforgettable.'
  },
  {
    name: 'Taylor Brooks',
    company: 'Peak Media',
    quote: 'Fast, creative, and always on-brand. Highly recommend for any video project.'
  },
];

const faqs = [
  {
    question: 'What types of videos do you edit?',
    answer: 'We edit everything from social clips to commercials, explainers, and more.'
  },
  {
    question: 'How do I send you my footage?',
    answer: 'We provide a secure upload link and clear instructions for every project.'
  },
  {
    question: 'Can you add subtitles and captions?',
    answer: 'Absolutely! We offer full captioning and accessibility options.'
  },
];

export default function VideoEditingPage() {
  return (
    <div className="min-h-screen bg-[#11001D] text-white w-full">
      <SEO title="Video Editing Services" description="Vescavia: Video editing that captivates and converts." />
      <Navbar />
      {/* Hero Section */}
      <section className="relative flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto pt-32 pb-16 px-4 sm:px-8">
        <div className="flex-1 z-10 text-left">
          <h1 className="font-jaro text-5xl sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent font-bold mb-6 leading-tight">
            Video Editing
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 max-w-xl mb-8">
            We turn raw footage into <span className="text-fuchsia-300 font-bold">scroll-stopping</span> and <span className="text-blue-300 font-bold">story-driven</span> videos.
          </p>
          <Button textContent="Start Your Edit" className="mt-2" />
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
              Why Vescavia for Video Editing?
            </h2>
            <p className="text-gray-200 text-lg mb-4">
              We don’t just edit videos. We create <span className="text-fuchsia-300 font-semibold">stories</span> that move, inspire, and convert.
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Short-form & long-form expertise</li>
              <li>Motion graphics & effects</li>
              <li>Fast turnaround & unlimited revisions</li>
              <li>Platform-optimized delivery</li>
            </ul>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl border-2 border-fuchsia-400/30">
              <Image src="/images/services/video-hero.jpg" alt="Video Editing Visual" fill className="object-cover" />
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
            <div key={idx} className="bg-[#1D0B2E] rounded-2xl shadow-xl border border-fuchsia-400/10 p-6 flex flex-col items-center text-center">
              <div className="text-4xl mb-4">{['📝','✂️','✨','📦'][idx]}</div>
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
          Our Video Editing Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {videoServices.map((service, idx) => (
            <div key={idx} className="bg-[#1D0B2E] rounded-2xl shadow-xl border border-fuchsia-400/10 hover:border-fuchsia-400/40 transition-all duration-300 overflow-hidden">
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
            <div key={idx} className="bg-gradient-to-br from-purple-900/60 via-fuchsia-900/60 to-blue-900/60 rounded-2xl shadow-xl border border-fuchsia-400/10 p-6 flex flex-col items-center text-center">
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
            <div key={idx} className="bg-[#1D0B2E] rounded-xl border border-fuchsia-400/10 p-6 shadow-md">
              <h3 className="font-jaro text-xl font-bold mb-2 text-fuchsia-200">{faq.question}</h3>
              <p className="text-gray-300 text-base">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Creative Showcase Section (Placeholder) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-12">
        <h2 className="font-jaro text-3xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-fuchsia-300 to-blue-300 bg-clip-text text-transparent text-center">
          See Our Editing Magic
        </h2>
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-fuchsia-400/10 bg-gradient-to-br from-purple-900/40 via-fuchsia-900/40 to-blue-900/40">
          {/* Placeholder for creative showcase */}
          <div className="flex flex-col items-center justify-center py-16">
            <span className="text-5xl mb-4">🎬✨</span>
            <p className="text-lg text-gray-200 max-w-xl text-center">
              Your video could be here! We turn footage into viral stories.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-8 py-12">
        <h2 className="font-jaro text-3xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-fuchsia-300 to-blue-300 bg-clip-text text-transparent text-center">
          Ready to Edit Like a Pro?
        </h2>
        <div className="bg-[#1D0B2E] rounded-2xl shadow-2xl border border-fuchsia-400/10 p-8">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
