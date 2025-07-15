import React from 'react';
import { Inter, Jaro } from 'next/font/google';
import DynamicEmoji from '../components/animations/dynamicComp';
import Button from '../components/button';
import MarqueeBanner from '../components/animations/bottomBanner';
import ScrollUpAnimation from '../components/animations/scrollAnimation1';
import DefinesUsPage from './definesUs';
import { FaRegLightbulb, FaVideo, FaBullhorn, FaLaptopCode } from 'react-icons/fa';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jaro = Jaro({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-jaro',
});

// const emojis = ['/img1.webp', '/img2.jpg', '/img3.webp', '/img4.avif'];
const emojis = ['/px1.jpg', '/px2.jpg', '/px3.jpg', '/px4.jpg'];


const services = [
  {
    name: 'Brand Management',
    icon: <FaRegLightbulb className="inline-block align-middle mr-2" />,
    bg: '[background-color:rgb(254,100,39)]',
  },
  {
    name: 'Video Editing',
    icon: <FaVideo className="inline-block align-middle mr-2" />,
    bg: '[background-color:rgb(134,56,196)]',
  },
  {
    name: 'Ad Creation',
    icon: <FaBullhorn className="inline-block align-middle mr-2" />,
    bg: '[background-color:#fbff15]',
  },
  {
    name: 'Web Development',
    icon: <FaLaptopCode className="inline-block align-middle mr-2" />,
    bg: '[background-color:#b9f151]',
  },
];

export default function Home() {
  return (
    <>
      <div
        className={`min-h-[60vh] flex flex-col bg-[#11001D] text-white ${inter.variable} font-sans`}
      >
        <div className="flex flex-col lg:flex-row flex-1">
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
          <section className="hidden lg:flex w-full lg:w-1/2 items-center justify-center p-4 mr-15">
            <DynamicEmoji images={emojis} />
          </section>
          <div className="block lg:hidden mb-6 flex justify-center">
            <Button textContent="Get Started" />
          </div>
        </div>
      </div>

        <div className="w-full z-50">
        <MarqueeBanner
          messages={services.map(service => service.name)}
          icons={services.map(service => service.icon)}
          bgColors={services.map(service => service.bg)}
          speed={15}
          direction="right"
          textColor="text-white"
          thickness="medium"
          pauseOnHover={true}
        />
      </div>

      <ScrollUpAnimation />
      <div className="h-5 bg-white"></div>
  

      <DefinesUsPage />
      <div className="w-full bg-white h-5"></div>
  
    </>
  );
}
