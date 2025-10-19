import Navbar from '../../components/navbar';
import Button from '../../components/button';
import DynamicEmoji from '../../components/animations/dynamicComp';
import SEO from '../../components/SEO';
import Image from 'next/image';

const adServices = [
  {
    image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&h=600&fit=crop',
    title: 'Video Ad Production',
    description:
      'Ads that stop the scroll. From concept to final cut, we create video ads that convert.',
  },
  {
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop',
    title: 'Social Media Campaigns',
    description:
      'Platform-native ads for Instagram, TikTok, Facebook. Built for the algorithm, designed for humans.',
  },
  {
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&h=600&fit=crop',
    title: 'Copywriting & Strategy',
    description:
      'Words that sell. Copy and strategy that turns scrollers into buyers.',
  },
  {
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop',
    title: 'Performance Creative',
    description: 'Data-driven ads optimized for ROI. We test, iterate, and scale what works.',
  },
];

const heroImages = ['/img1.webp', '/img2.jpg', '/img3.webp', '/img4.avif'];

const processSteps = [
  {
    title: 'Strategy',
    description:
      'Understand your audience, goals, and what makes you different.',
  },
  {
    title: 'Create',
    description:
      'Concept, script, design, and produce ads that get attention.',
  },
  {
    title: 'Test',
    description:
      'Launch, measure, learn. We optimize based on real performance data.',
  },
  {
    title: 'Scale',
    description: 'Double down on winners. Kill what doesn\'t work. Grow revenue.',
  },
];

const testimonials = [
  {
    name: 'Alex Rivera',
    company: 'GlowUp Cosmetics',
    quote:
      'Our ROAS went from 2.3x to 5.8x in 6 weeks. These ads just work.',
  },
  {
    name: 'Priya Singh',
    company: 'FitFuel',
    quote:
      'Finally, ads that don\'t look like ads. Our engagement rate tripled.',
  },
  {
    name: 'Jordan Lee',
    company: 'TechNest',
    quote:
      'From storyboard to final delivery - flawless execution every time.',
  },
];

const faqs = [
  {
    question: 'What platforms do you create ads for?',
    answer:
      'All of them. Instagram, TikTok, Facebook, YouTube, LinkedIn. We optimize creative for each platform\'s specs and audience behavior.',
  },
  {
    question: 'How long does it take to create an ad?',
    answer:
      'Simple static ads: 3-5 days. Video ads: 1-2 weeks. Full campaigns with multiple variations: 2-3 weeks.',
  },
  {
    question: 'Do you help with ad buying and strategy?',
    answer:
      'We focus on creative, but we work closely with media buyers and can recommend partners. We also provide creative strategy and testing frameworks.',
  },
];

export default function AddCreationPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text-primary)] w-full">
      <SEO
        title="Ad Creation Services"
        description="vescavia: Ads that stop the scroll and drive revenue."
      />
      <Navbar />
      {/* Hero Section */}
      <section className="relative flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto pt-32 pb-16 px-4 sm:px-8">
        <div className="flex-1 z-10 text-left">
          <h1 className="font-jaro text-5xl sm:text-6xl md:text-7xl lg:text-8xl lowercase bg-gradient-to-r from-[#FE6427] via-[#8638C4] to-[#b9f151] bg-clip-text text-transparent font-bold mb-6 leading-tight">
            ad creation
          </h1>
          <p className="text-lg md:text-2xl text-[var(--color-text-secondary)] max-w-xl mb-8">
            We create ads that{' '}
            <span className="text-[#FE6427] font-bold">stop the scroll</span> and{' '}
            <span className="text-[#b9f151] font-bold">drive revenue</span>.
          </p>
          <Button textContent="let's create" className="mt-2" />
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
              performance-driven creative
            </h2>
            <p className="text-[var(--color-text-secondary)] text-lg mb-6 leading-relaxed">
              We don't make "pretty" ads. We make ads that convert. Every frame, word, and transition is designed to drive action.
            </p>
            <ul className="space-y-3 text-[var(--color-text-secondary)]">
              <li className="flex items-start gap-3">
                <span className="text-[#b9f151] font-bold">→</span>
                <span>Thumb-stopping hooks in the first 3 seconds</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#fbff15] font-bold">→</span>
                <span>Platform-native creative (not one-size-fits-all)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FE6427] font-bold">→</span>
                <span>Copy and visuals optimized for conversion</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#8638C4] font-bold">→</span>
                <span>Built-in A/B testing and iteration</span>
              </li>
            </ul>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl border-2 border-[#FE6427]/30">
              <Image
                src="https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&h=800&fit=crop"
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
        <h2 className="font-jaro text-4xl lowercase font-bold mb-12 text-center bg-gradient-to-r from-[#FE6427] via-[#8638C4] to-[#b9f151] bg-clip-text text-transparent">
          our approach
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
          what we create
        </h2>
        
        {/* Two Column Layout with alternating sides */}
        <div className="space-y-16">
          {/* Service 1 - Image Left */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 relative h-[300px] rounded-2xl overflow-hidden border-2 border-[#FE6427]/30">
              <Image
                src={adServices[0].image}
                alt={adServices[0].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-jaro text-3xl lowercase font-bold mb-4 text-[#FE6427]">
                {adServices[0].title}
              </h3>
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                {adServices[0].description}
              </p>
            </div>
          </div>

          {/* Service 2 - Image Right */}
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="flex-1 relative h-[300px] rounded-2xl overflow-hidden border-2 border-[#8638C4]/30">
              <Image
                src={adServices[1].image}
                alt={adServices[1].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-jaro text-3xl lowercase font-bold mb-4 text-[#8638C4]">
                {adServices[1].title}
              </h3>
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                {adServices[1].description}
              </p>
            </div>
          </div>

          {/* Service 3 - Image Left */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 relative h-[300px] rounded-2xl overflow-hidden border-2 border-[#fbff15]/30">
              <Image
                src={adServices[2].image}
                alt={adServices[2].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-jaro text-3xl lowercase font-bold mb-4 text-[#fbff15]">
                {adServices[2].title}
              </h3>
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                {adServices[2].description}
              </p>
            </div>
          </div>

          {/* Service 4 - Image Right */}
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="flex-1 relative h-[300px] rounded-2xl overflow-hidden border-2 border-[#b9f151]/30">
              <Image
                src={adServices[3].image}
                alt={adServices[3].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-jaro text-3xl lowercase font-bold mb-4 text-[#b9f151]">
                {adServices[3].title}
              </h3>
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                {adServices[3].description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Results Section - Simple List */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 py-16">
        <h2 className="font-jaro text-3xl lowercase font-bold mb-12 text-center text-[#FE6427]">
          client wins
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
          ready to scale?
        </h2>
        <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-[#FE6427] bg-[var(--color-background-dark)]">
          <div className="flex flex-col items-center justify-center py-16 px-8">
            <p className="text-2xl text-[var(--color-text-primary)] max-w-2xl text-center mb-8 font-bold">
              Stop throwing money at ads that don't work.
            </p>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-xl text-center mb-8">
              Let's create campaigns that actually drive revenue. Performance creative that scales.
            </p>
            <Button textContent="start your campaign" className="mt-2" />
          </div>
        </div>
      </section>
    </div>
  );
}
