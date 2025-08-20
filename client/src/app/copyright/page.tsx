// pages/copyright.js
import Head from 'next/head';
import { FaLinkedin, FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';

export default function CopyrightPage() {
  return (
    <>
      <Head>
        <title>Copyright | Vescavia</title>
        <meta name="description" content="Copyright page of Vescavia" />
      </Head>

      <main className="bg-[#11001D] text-white min-h-screen flex flex-col items-center justify-center">
        {/* Logo section with hover text */}

        <section className="w-full bg-[#11001D] py-16 flex justify-center items-center overflow-hidden">
          <div className="group relative flex flex-col items-center">
            <h1 className="text-white font-extrabold tracking-tight text-[10vw] sm:text-[12vw] md:text-[15vw] lg:text-[19vw] leading-none">
              Vescavia
            </h1>
            <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-300 italic opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center">
              A door to connect with the world
            </p>
          </div>
        </section>

        {/* Divider */}
        <hr className="border-t border-gray-700 w-full mb-4" />

        {/* Footer section */}
        <footer className="w-full px-8 pb-10">
          {/* Footer Row */}
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4 md:gap-6">
            {/* Top/Left: Social Icons */}
            <div className="flex space-x-4 flex-1 justify-center md:justify-start order-2 md:order-1">
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:scale-110 transition text-white hover:text-blue-400"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:scale-110 transition text-white hover:text-pink-400"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="hover:scale-110 transition text-white hover:text-red-500"
              >
                <FaYoutube className="h-6 w-6" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="hover:scale-110 transition text-white hover:text-blue-600"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
            </div>

            {/* Top/Center: Logo */}
            <div className="flex justify-center flex-1 order-1 md:order-2">
              <img src="/logo.png" alt="Vescavia Logo" className="h-10" />
            </div>

            {/* Bottom/Right: Navigation Links */}
            <nav className="text-sm flex flex-wrap justify-center md:justify-end flex-1 gap-2 sm:gap-3 md:gap-4 order-3">
              <a href="#" className="hover:underline whitespace-nowrap">
                About
              </a>
              <a href="#" className="hover:underline whitespace-nowrap">
                Contact
              </a>
              <a href="#" className="hover:underline whitespace-nowrap">
                Case Studies
              </a>
              <a href="#" className="hover:underline whitespace-nowrap">
                Blog
              </a>
              <a href="#" className="hover:underline whitespace-nowrap">
                Privacy
              </a>
            </nav>
          </div>

          {/* Footer Text */}
          <div className="text-center text-xs text-gray-400 mt-6">
            <p>Proudly created in India.</p>
            <p>All Right Reserved, All Wrong Reversed.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
