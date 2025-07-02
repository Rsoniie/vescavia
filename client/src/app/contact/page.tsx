import React from 'react';
import { Inter, Jaro } from 'next/font/google';
import ContactForm from '../components/contactForm';
import Image from 'next/image';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jaro = Jaro({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-jaro',
});

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#11001D] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h1
            className={`mb-4 sm:mb-6 font-bold ${jaro.variable} text-white leading-tight`}
            style={{ fontSize: '2.5rem', lineHeight: '1.2' }}
          >
            Ready to Scale Your Brand?
          </h1>
          <p
            className={`text-white/80 ${inter.variable} font-sans mb-8 sm:mb-12`}
            style={{ fontSize: '1rem' }}
          >
            Create something funky together. Drop us a message and let's start
            your brand transformation today.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-stretch">
          <div className="hidden md:block w-full md:w-1/3 relative">
            <Image
              src="/img_form.png"
              alt="Brand illustration"
              width={500}
              height={700}
              className="object-cover h-full rounded-xl"
              quality={100}
            />
          </div>

          <div className="w-full md:w-2/3 bg-[#1a012a] rounded-xl p-6 sm:p-8 border border-white/10">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
