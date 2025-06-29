import { Inter, Jaro } from 'next/font/google';

const jaro = Jaro({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-jaro',
});

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#11001D] px-8 py-6 flex justify-between items-center">
      <div
        className={`text-white text-2xl font-bold ${jaro.variable} font-sans`}
      >
        Vescavia
      </div>
      <div className="hidden md:flex space-x-8">
        <a href="#" className="font-medium text-white hover:text-gray-300">
          About
        </a>
        <a href="#" className="font-medium text-white hover:text-gray-300">
          Work
        </a>
        <a href="#" className="font-medium text-white hover:text-gray-300">
          Services
        </a>
        <a href="#" className="font-medium text-white hover:text-gray-300">
          Contact
        </a>
      </div>
      <button className="md:hidden text-white">
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
