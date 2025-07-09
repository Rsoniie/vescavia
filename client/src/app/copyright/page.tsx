// pages/copyright.js
import Head from 'next/head';

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
          <h1 className="group relative text-white font-extrabold tracking-tight text-[19vw] leading-none">
            Vescavia
            <span className="absolute top-full left-1/2 -translate-x-1/2 mt-4 text-sm text-gray-300 italic opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              A door to connect with world
            </span>
          </h1>
        </section>

        {/* Divider */}
        <hr className="border-t border-gray-700 w-full mb-4" />

        {/* Footer section */}
        <footer className="w-full px-8 pb-10">
          {/* Footer Row */}
          <div className="flex justify-between items-center w-full flex-wrap md:flex-nowrap gap-6">
            {/* Left: Social Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:scale-110 transition"
              >
                <img src="/icons/linkedin.svg" alt="LinkedIn" className="h-6" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:scale-110 transition"
              >
                <img
                  src="/icons/instagram.svg"
                  alt="Instagram"
                  className="h-6"
                />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="hover:scale-110 transition"
              >
                <img src="/icons/youtube.svg" alt="YouTube" className="h-6" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="hover:scale-110 transition"
              >
                <img src="/icons/facebook.svg" alt="Facebook" className="h-6" />
              </a>
            </div>

            {/* Center: Logo */}
            <div className="flex justify-center flex-shrink-0">
              <img src="/logo.png" alt="Vescavia Logo" className="h-10" />
            </div>

            {/* Right: Navigation Links */}
            <nav className="text-sm space-x-4 flex flex-wrap justify-end">
              <a href="#" className="hover:underline">
                About
              </a>
              <a href="#" className="hover:underline">
                Contact
              </a>
              <a href="#" className="hover:underline">
                Case Studies
              </a>
              <a href="#" className="hover:underline">
                Blog
              </a>
              <a href="#" className="hover:underline">
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
