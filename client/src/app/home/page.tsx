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
      className={`min-h-screen flex flex-col lg:flex-row bg-[#11001D] text-white ${inter.variable} font-sans`}
    >
      <section className="w-full flex flex-col justify-center p-6 sm:p-8 md:p-12">
        <main className="text-left">
          <h1
            className={`mb-6 sm:mb-8 font-bold ${jaro.variable} font-sans text-white leading-none`}
            style={{ fontSize: '4rem' }}
          >
            <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
              Vescavia
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mb-6 sm:mb-8 text-white">
            We&apos;re the funky brand scaling agency that transforms your
            vision into viral reality. From mind-blowing videos to
            conversion-crushing ads.
          </p>
          <div className="hidden lg:block">
            <Button textContent="Get Started" />
          </div>
        </main>
      </section>
      <section className="hidden lg:flex w-full lg:w-1/2 items-center justify-center p-4">
        <DynamicEmoji />
      </section>
      <div className="block lg:hidden mb-6 flex justify-center">
        <Button textContent="Get Started" />
      </div>
    </div>
  );
}
