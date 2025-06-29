
import React from 'react';
import { Inter, Jaro } from 'next/font/google';
import DynamicEmoji from '../components/dynamicComp';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const jaro = Jaro({ 
  subsets: ['latin'],
  weight: '400', 
  variable: '--font-jaro'
});

export default function Home() {
  return (
    <div className={`min-h-screen flex ${inter.variable} font-sans text-white`}>
      <section className="w-2/3 flex flex-col justify-center p-12">
        <main className="text-left">
          <h1 
  className={`mb-8 font-bold ${jaro.variable} font-sans`}
  style={{ fontSize: '9rem' }}
>
  Vescavia
</h1>
<p className="text-base sm:text-lg md:text-xl max-w-2xl mb-12">
  We&apos;re the funky brand scaling agency that transforms your vision into viral reality. From mind-blowing videos to conversion-crushing ads.
</p>
     <button
  className="bg-[#11001D] text-white px-8 py-4 rounded-full font-medium border border-white hover:bg-[#1a012a] focus:bg-[#1a012a] focus:outline-none focus:ring-2 focus:ring-purple-300 active:bg-[#0f0019] transition-colors duration-200"
  aria-label="Get started with Vescavia"
>
  Get Started
</button>

        </main>
      </section>
      <section className="w-1/2 bg-[#11001D]  flex items-center justify-center">
        <DynamicEmoji />
      </section>
    </div>
  );
}