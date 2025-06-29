import React from 'react';
import { Inter, Jaro } from 'next/font/google';
import DynamicEmoji from '../components/dynamicComp';
import Button from '../components/button';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jaro = Jaro({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-jaro',
});

export default function Home() {
  return (
    <div
      className={`min-h-screen flex bg-[#11001D] text-white ${inter.variable} font-sans`}
    >
      <section className="w-1/2 flex flex-col justify-center p-12">
        <main className="text-left">
          <h1
            className={`mb-8 font-bold ${jaro.variable} font-sans text-white`}
            style={{ fontSize: '9rem' }}
          >
            Vescavia
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mb-12 text-white">
            We&apos;re the funky brand scaling agency that transforms your
            vision into viral reality. From mind-blowing videos to
            conversion-crushing ads.
          </p>
          <div>
            <Button textContent="Get Started" />
          </div>
        </main>
      </section>
      <section className="w-1/2 flex items-center justify-center">
        <DynamicEmoji />
      </section>
    </div>
  );
}
