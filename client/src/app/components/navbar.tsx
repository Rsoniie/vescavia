'use client';
import { Inter, Jaro } from 'next/font/google';
import { useEffect, useState } from 'react';

const jaro = Jaro({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-jaro',
});

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY) < 50) return;

      if (currentScrollY > lastScrollY) {
        setVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setVisible(true);
      }
      if (currentScrollY <= 100) {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`
      fixed top-0 left-0 right-0 z-50 bg-white px-8 py-6 flex justify-between items-center
      transition-transform duration-300 ease-in-out
      ${visible ? 'translate-y-0' : '-translate-y-full'}
      border-b border-purple-900/30
    `}
    >
      <div
        className={`text-[#11001D]  text-2xl font-bold ${jaro.variable} font-sans`}
      >
        Vescavia
      </div>
      <div className="hidden md:flex space-x-8">
        <a
          href="#"
          className="font-medium text-[#11001D]  hover:text-gray-300 transition-colors"
        >
          About
        </a>
        <a
          href="#"
          className="font-medium text-[#11001D] hover:text-gray-300 transition-colors"
        >
          Work
        </a>
        <a
          href="services"
          className="font-medium text-[#11001D] hover:text-gray-300 transition-colors"
        >
          Services
        </a>
        <a
          href="#"
          className="font-medium text-[#11001D] hover:text-gray-300 transition-colors"
        >
          Contact
        </a>
      </div>
      <button className="md:hidden text-[#11001D]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
