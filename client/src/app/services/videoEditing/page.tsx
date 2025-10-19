import Navbar from '../../components/navbar';
import Button from '../../components/button';
import DynamicEmoji from '../../components/animations/dynamicComp';
import SEO from '../../components/SEO';
import Image from 'next/image';

const videoServices = [
  {
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop',
    title: 'Social Video Editing',
    description:
      'Short-form content that actually gets watched. TikTok, Reels, Shorts - we know what works.',
  },
  {
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop',
    title: 'Commercial Editing',
    description: 'Ads and promos that convert. Clean cuts, strong hooks, clear CTAs.',
  },
  {
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop',
    title: 'Motion Graphics',
    description:
      'Animations and graphics that elevate your story without overwhelming it.',
  },
  {
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    title: 'Long-Form Content',
    description:
      'YouTube videos, documentaries, courses. Engaging cuts that keep viewers watching.',
  },
];

const heroImages = ['/img1.webp', '/img2.jpg', '/img3.webp', '/img4.avif'];

const processSteps = [
  {
    title: 'Send Footage',
    description:
      'Upload your raw files. We handle the rest.',
  },
  {
    title: 'We Edit',
    description: 'Cut, color, sound design, effects - the full treatment.',
  },
  {
    title: 'You Review',
    description:
      'Watch, give feedback, request changes.',
  },
  {
    title: 'Launch',
    description:
      'Get final files optimized for your platform.',
  },
];

const testimonials = [
  {
    name: 'Jamie Lin',
    company: 'SnapFit',
    quote:
      'Our engagement rate tripled after Vescavia started editing our content. They just get it.',
  },
  {
    name: 'Ravi Kumar',
    company: 'ByteWorks',
    quote:
      'Best video editing partner we\'ve worked with. Fast, creative, and they nail our brand every time.',
  },
  {
    name: 'Taylor Brooks',
    company: 'Peak Media',
    quote:
      'From rough cuts to polished ads - these guys do it all. Highly recommend.',
  },
];

const faqs = [
  {
    question: 'What types of videos do you edit?',
    answer:
      'Everything from 15-second social clips to hour-long documentaries. If it moves, we can edit it.',
  },
  {
    question: 'How long does editing take?',
    answer:
      'Social clips: 1-3 days. Longer content: 1-2 weeks. Rush projects available.',
  },
  {
    question: 'Do you provide revisions?',
    answer:
      'Yes. We include 2 rounds of revisions with every project. Additional revisions available if needed.',
  },
];

export default function VideoEditingPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text-primary)] w-full">
      <SEO
        title="Video Editing Services"
        description="vescavia: Video editing that stops the scroll and drives results."
      />
      <Navbar />
      {/* Hero Section */}
      <section className="relative flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto pt-32 pb-16 px-4 sm:px-8">
        <div className="flex-1 z-10 text-left">
          <h1 className="font-jaro text-5xl sm:text-6xl md:text-7xl lg:text-8xl lowercase bg-gradient-to-r from-[#FE6427] via-[#8638C4] to-[#b9f151] bg-clip-text text-transparent font-bold mb-6 leading-tight">
            video editing
          </h1>
          <p className="text-lg md:text-2xl text-[var(--color-text-secondary)] max-w-xl mb-8">
            We turn raw footage into{' '}
            <span className="text-[#FE6427] font-bold">scroll-stopping</span>{' '}
            content that{' '}
            <span className="text-[#b9f151] font-bold">actually converts</span>.
          </p>
          <Button textContent="get started" className="mt-2" />
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
              We're not just editors. We're storytellers who understand platforms, algorithms, and what makes people watch till the end.
            </p>
            <ul className="space-y-3 text-[var(--color-text-secondary)]">
              <li className="flex items-start gap-3">
                <span className="text-[#b9f151] font-bold">→</span>
                <span>Platform-specific editing (TikTok, Reels, YouTube)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#fbff15] font-bold">→</span>
                <span>Motion graphics & sound design included</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FE6427] font-bold">→</span>
                <span>Fast turnaround without sacrificing quality</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#8638C4] font-bold">→</span>
                <span>Unlimited revisions until you're happy</span>
              </li>
            </ul>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl border-2 border-[#FE6427]/30">
              <Image
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=800&fit=crop"
                alt="Video Editing Visual"
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
          what we edit
        </h2>
        
        {/* Two Column Layout with alternating sides */}
        <div className="space-y-16">
          {/* Service 1 - Image Left */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 relative h-[300px] rounded-2xl overflow-hidden border-2 border-[#FE6427]/30">
              <Image
                src={videoServices[0].image}
                alt={videoServices[0].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-jaro text-3xl lowercase font-bold mb-4 text-[#FE6427]">
                {videoServices[0].title}
              </h3>
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                {videoServices[0].description}
              </p>
            </div>
          </div>

          {/* Service 2 - Image Right */}
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="flex-1 relative h-[300px] rounded-2xl overflow-hidden border-2 border-[#8638C4]/30">
              <Image
                src={videoServices[1].image}
                alt={videoServices[1].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-jaro text-3xl lowercase font-bold mb-4 text-[#8638C4]">
                {videoServices[1].title}
              </h3>
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                {videoServices[1].description}
              </p>
            </div>
          </div>

          {/* Service 3 - Image Left */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 relative h-[300px] rounded-2xl overflow-hidden border-2 border-[#fbff15]/30">
              <Image
                src={videoServices[2].image}
                alt={videoServices[2].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-jaro text-3xl lowercase font-bold mb-4 text-[#fbff15]">
                {videoServices[2].title}
              </h3>
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                {videoServices[2].description}
              </p>
            </div>
          </div>

          {/* Service 4 - Image Right */}
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="flex-1 relative h-[300px] rounded-2xl overflow-hidden border-2 border-[#b9f151]/30">
              <Image
                src={videoServices[3].image}
                alt={videoServices[3].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-jaro text-3xl lowercase font-bold mb-4 text-[#b9f151]">
                {videoServices[3].title}
              </h3>
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                {videoServices[3].description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Results Section - Simple List */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 py-16">
        <h2 className="font-jaro text-3xl lowercase font-bold mb-12 text-center text-[#FE6427]">
          what clients say
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
          ready to create?
        </h2>
        <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-[#FE6427] bg-[var(--color-background-dark)]">
          <div className="flex flex-col items-center justify-center py-16 px-8">
            <p className="text-2xl text-[var(--color-text-primary)] max-w-2xl text-center mb-8 font-bold">
              Great content starts with great editing.
            </p>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-xl text-center mb-8">
              Send us your raw footage and let's create something people actually want to watch.
            </p>
            <Button textContent="start your project" className="mt-2" />
          </div>
        </div>
      </section>
    </div>
  );
}
