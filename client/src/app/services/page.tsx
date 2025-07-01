import Image from 'next/image';
import Navbar from '../components/navbar';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      image: '/images/services/brand-management.png',
      title: 'Brand Management',
      description:
        'Comprehensive strategies to build and maintain your brand identity',
    },
    {
      image: '/images/services/video_editing.png',
      title: 'Video Editing',
      description: 'Professional editing to bring your visual stories to life',
    },
    {
      image: '/images/services/ad_creation.png',
      title: 'Ad Creation',
      description:
        'Eye-catching advertisements that convert viewers to customers',
    },
    {
      image: '/images/services/webdev.png',
      title: 'Web Development',
      description:
        'Modern, responsive websites that deliver exceptional user experiences',
    },
  ];

  return (
    <div className="bg-[#11001D] text-white min-h-screen w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Navigation */}

        <Navbar />

        <main className="text-center">
          {/* Main heading */}
          <h1 className="font-jaro text-6xl sm:text-7xl md:text-8xl lg:text-[122px] lowercase mb-8 leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-purple-200/70">
            services
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 sm:mb-16 text-gray-300 leading-relaxed">
            We don't just provide services, we craft experiences that make your
            brand unforgettable.
          </p>

          {/* Enhanced Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-[#1D0B2E] rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden relative min-h-[320px] sm:min-h-[360px] md:min-h-[400px]"
              >
                {/* Image Layer */}
                <div className="absolute inset-0 z-0 transform group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    priority={index < 2}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1D0B2E] via-[#1D0B2E]/50 to-transparent"></div>
                </div>

                {/* Service Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-8">
                  {/* Title - visible on small screens, hidden on large screens until hover */}
                  <h2
                    className="
                    text-xl sm:text-2xl font-bold mb-2 
                    block lg:opacity-0 lg:group-hover:opacity-100 
                    transition-opacity duration-300
                  "
                  >
                    {service.title}
                  </h2>

                  {/* Description - hidden on small screens, visible on large screens on hover */}
                  <p
                    className="
                    text-gray-300 text-sm sm:text-base 
                    hidden lg:block lg:opacity-0 lg:group-hover:opacity-100 
                    transition-opacity duration-300
                  "
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
