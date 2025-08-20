'use client';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  FaRegLightbulb,
  FaVideo,
  FaBullhorn,
  FaLaptopCode,
  FaStar,
  FaUser,
  FaInfoCircle,
} from 'react-icons/fa';

const services = [
  {
    id: 1,
    name: 'Brand Management',
    icon: <FaRegLightbulb className="text-2xl" />,
    position: { x: 20, y: 20 },
    color: 'from-[rgb(254,100,39)] to-[rgb(254,80,20)]',
    bgColor: 'rgb(254,100,39)',
    description: 'Strategic brand identity & positioning',
  },
  {
    id: 2,
    name: 'Video Editing',
    icon: <FaVideo className="text-2xl" />,
    position: { x: 80, y: 20 },
    color: 'from-[rgb(134,56,196)] to-[rgb(154,76,216)]',
    bgColor: 'rgb(134,56,196)',
    description: 'Cinematic storytelling & visual magic',
  },
  {
    id: 3,
    name: 'Ad Creation',
    icon: <FaBullhorn className="text-2xl" />,
    position: { x: 80, y: 80 },
    color: 'from-[#fbff15] to-[#e6e600]',
    bgColor: '#fbff15',
    description: 'Viral campaigns that convert',
  },
  {
    id: 4,
    name: 'Web Development',
    icon: <FaLaptopCode className="text-2xl" />,
    position: { x: 20, y: 80 },
    color: 'from-[#b9f151] to-[#a0d944]',
    bgColor: '#b9f151',
    description: 'Modern, responsive digital experiences',
  },
];

const connections = [
  { from: 1, to: 2 },
  { from: 2, to: 3 },
  { from: 3, to: 4 },
  { from: 4, to: 1 },
  { from: 1, to: 3 },
  { from: 2, to: 4 },
];

export default function ConstellationMap() {
  const [loaded, setLoaded] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [clickedServices, setClickedServices] = useState<number[]>([]);
  const [showCenterPopup, setShowCenterPopup] = useState(true);
  const [backgroundStars, setBackgroundStars] = useState<Array<{
    left: number;
    top: number;
    duration: number;
    delay: number;
  }>>([]);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const containerRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  useEffect(() => {
    if (inView) setLoaded(true);
  }, [inView]);

  useEffect(() => {
    // Generate background stars only on client side to avoid hydration mismatch
    const stars = Array.from({ length: 50 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 2 + Math.random() * 3,
      delay: Math.random() * 2,
    }));
    setBackgroundStars(stars);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = (containerRef.current as HTMLElement).getBoundingClientRect();
      mouseX.set((e.clientX - rect.left - rect.width / 2) * 0.1);
      mouseY.set((e.clientY - rect.top - rect.height / 2) * 0.1);
    }
  };

  const getServicePosition = (service: number) => {
    return services.find((s) => s.id === service);
  };

  const handleServiceClick = (serviceId: number) => {
    setClickedServices((prev) => {
      if (prev.includes(serviceId)) {
        // Remove service if already clicked
        return prev.filter((id) => id !== serviceId);
      } else {
        // Add service to the list
        return [...prev, serviceId];
      }
    });
  };

  const handleCenterClick = () => {
    setShowCenterPopup((prev) => !prev);
  };

  return (
    <motion.div
      ref={ref}
      className="min-h-screen bg-[var(--color-background)] p-8 md:p-12 flex items-center justify-center overflow-hidden relative"
      initial={{ opacity: 0 }}
      animate={loaded ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
      onMouseMove={handleMouseMove}
    >
      {/* Background stars */}
      <div className="absolute inset-0 overflow-hidden">
        {backgroundStars.map((star, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          animate={loaded ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h2 className="font-jaro text-4xl md:text-6xl lg:text-7xl lowercase mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-primary)] via-[var(--color-brand-accent)] to-[var(--color-brand-primary)]">
            What Defines Us?
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed">
            You are at the center of our creative universe. Each service orbits
            around your vision, lighting up as you engage to illuminate the path
            to your brand's success.
          </p>
        </motion.div>

        {/* Constellation Container */}
        <motion.div
          ref={containerRef}
          className="relative w-full h-[600px] md:h-[700px]"
          style={{ x: springX, y: springY }}
        >
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {/* Service to Service connections */}
            {connections.map((connection, index) => {
              const fromService = getServicePosition(connection.from);
              const toService = getServicePosition(connection.to);

              if (!fromService || !toService) return null;

              return (
                <motion.line
                  key={index}
                  x1={`${fromService.position.x}%`}
                  y1={`${fromService.position.y}%`}
                  x2={`${toService.position.x}%`}
                  y2={`${toService.position.y}%`}
                  stroke="url(#connectionGradient)"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={loaded ? { pathLength: 1, opacity: 0.6 } : {}}
                  transition={{
                    delay: 1 + index * 0.2,
                    duration: 1.5,
                    ease: 'easeInOut',
                  }}
                  className={
                    hoveredService &&
                    (hoveredService === connection.from ||
                      hoveredService === connection.to)
                      ? 'opacity-100'
                      : ''
                  }
                />
              );
            })}

            {/* Center to Service connections - Current Flow Lines */}
            {services.map((service, index) => (
              <motion.line
                key={`center-${service.id}`}
                x1="50%"
                y1="50%"
                x2={`${service.position.x}%`}
                y2={`${service.position.y}%`}
                stroke={
                  clickedServices.includes(service.id)
                    ? service.bgColor
                    : 'url(#centerGradient)'
                }
                strokeWidth={clickedServices.includes(service.id) ? '4' : '2'}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={
                  loaded
                    ? {
                        pathLength: 1,
                        opacity: clickedServices.includes(service.id) ? 1 : 0.3,
                      }
                    : {}
                }
                transition={{
                  delay: 1.5 + index * 0.1,
                  duration: 1,
                  ease: 'easeInOut',
                }}
              />
            ))}

            {/* Current Flow Animation */}
            {clickedServices.map((serviceId) => {
              const service = services.find((s) => s.id === serviceId);
              if (!service) return null;
              return (
                <motion.circle
                  key={`current-${service.id}`}
                  r="3"
                  fill={service.bgColor}
                  initial={{
                    cx: '50%',
                    cy: '50%',
                    opacity: 0,
                  }}
                  animate={{
                    cx: `${service.position.x}%`,
                    cy: `${service.position.y}%`,
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              );
            })}

            <defs>
              <linearGradient
                id="connectionGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="var(--color-brand-primary)"
                  stopOpacity="0.8"
                />
                <stop
                  offset="50%"
                  stopColor="var(--color-brand-accent)"
                  stopOpacity="0.6"
                />
                <stop
                  offset="100%"
                  stopColor="var(--color-brand-primary)"
                  stopOpacity="0.8"
                />
              </linearGradient>
              <linearGradient
                id="centerGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="var(--color-brand-primary)"
                  stopOpacity="0.4"
                />
                <stop
                  offset="100%"
                  stopColor="var(--color-brand-accent)"
                  stopOpacity="0.4"
                />
              </linearGradient>
            </defs>
          </svg>

          {/* Service Stars */}
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{
                left: `${service.position.x}%`,
                top: `${service.position.y}%`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={loaded ? { scale: 1, opacity: 1 } : {}}
              transition={{
                delay: 0.5 + index * 0.2,
                duration: 0.8,
                type: 'spring',
                stiffness: 100,
              }}
              whileHover={{ scale: 1.2 }}
              onHoverStart={() => setHoveredService(service.id)}
              onHoverEnd={() => setHoveredService(null)}
              onClick={() => handleServiceClick(service.id)}
            >
              {/* Outer Glow */}
              <motion.div
                className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.color} opacity-30 blur-xl scale-150`}
                animate={{
                  scale: hoveredService === service.id ? [1.5, 2.5, 1.5] : 1.5,
                  opacity:
                    hoveredService === service.id ? [0.3, 0.8, 0.3] : 0.3,
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Engagement Ring - appears on hover */}
              {hoveredService === service.id && (
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-white/50"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{
                    scale: [0.8, 3, 0.8],
                    opacity: [0, 0.6, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeOut',
                  }}
                />
              )}

              {/* Main Star */}
              <motion.div
                className={`relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center shadow-2xl border border-white/20`}
                animate={{
                  boxShadow: clickedServices.includes(service.id)
                    ? `0 0 50px ${service.bgColor}, 0 0 100px ${service.bgColor}60, 0 0 150px ${service.bgColor}30`
                    : hoveredService === service.id
                      ? `0 0 40px ${service.bgColor}, 0 0 80px ${service.bgColor}40, 0 0 120px ${service.bgColor}20`
                      : `0 0 15px ${service.bgColor}80`,
                  scale: clickedServices.includes(service.id)
                    ? 1.15
                    : hoveredService === service.id
                      ? 1.1
                      : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="text-white"
                  animate={{ rotate: hoveredService === service.id ? 360 : 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {service.icon}
                </motion.div>

                {/* Sparkle effects */}
                {hoveredService === service.id && (
                  <>
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                          left: `${50 + 40 * Math.cos((i * 60 * Math.PI) / 180)}%`,
                          top: `${50 + 40 * Math.sin((i * 60 * Math.PI) / 180)}%`,
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </>
                )}
              </motion.div>

              {/* Service Info Card */}
              <motion.div
                className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 bg-[var(--color-background-dark)] border border-[var(--color-border)]/30 rounded-lg p-4 min-w-[250px] pointer-events-none"
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={
                  hoveredService === service.id
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 10, scale: 0.8 }
                }
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-[var(--color-text-primary)] font-semibold text-lg mb-2">
                  {service.name}
                </h3>
                <p className="text-[var(--color-text-secondary)] text-sm">
                  {service.description}
                </p>
                {clickedServices.includes(service.id) && (
                  <div className="mt-2 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-green-500 animate-pulse" />
                    <span className="text-green-400 text-xs font-semibold">
                      CONNECTED
                    </span>
                  </div>
                )}

                {/* Arrow pointing to star */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[var(--color-background-dark)]" />
              </motion.div>
            </motion.div>
          ))}

          {/* Central Core - The User */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
            initial={{ scale: 0, opacity: 0 }}
            animate={loaded ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 2, duration: 1 }}
            whileHover={{ scale: 1.1 }}
            onClick={handleCenterClick}
          >
            {/* User Core */}
            <motion.div
              className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-[var(--color-brand-primary)] to-[var(--color-brand-accent)] flex flex-col items-center justify-center relative border-2 border-white/30"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(139, 92, 246, 0.5)',
                  '0 0 40px rgba(236, 72, 153, 0.5)',
                  '0 0 20px rgba(139, 92, 246, 0.5)',
                ],
                borderColor: showCenterPopup ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.6)',
              }}
              transition={{
                boxShadow: { duration: 3, repeat: Infinity },
                borderColor: { duration: 0.3 },
              }}
            >
              <FaUser className="text-white text-xl mb-1" />
              <span className="text-white text-xs font-semibold">YOU</span>
              
              {/* Info Icon when popup is hidden */}
              {!showCenterPopup && (
                <motion.div
                  className="absolute -top-1 -right-1 bg-blue-500 rounded-full p-1"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <FaInfoCircle className="text-white text-xs" />
                </motion.div>
              )}

              {/* Pulse Effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--color-brand-primary)] to-[var(--color-brand-accent)]"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 0, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>

            {/* User Info Card */}
            <motion.div
              className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 bg-[var(--color-background-dark)] border border-[var(--color-border)]/30 rounded-lg p-4 min-w-[280px] pointer-events-none"
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={
                showCenterPopup
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 10, scale: 0.8 }
              }
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-[var(--color-text-primary)] font-semibold text-lg mb-2 text-center">
                Your Vision Center
              </h3>
              <p className="text-[var(--color-text-secondary)] text-sm text-center">
                You're at the heart of everything we create. Click multiple
                services to establish connections and see all currents flow
                simultaneously.
              </p>
              <p className="text-[var(--color-text-secondary)] text-xs text-center mt-2 italic">
                Click me to toggle this popup
              </p>
              {/* Arrow pointing to center */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[var(--color-background-dark)]" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Description */}
        <motion.div
          className="text-center mt-16"
          initial={{ y: 50, opacity: 0 }}
          animate={loaded ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          <p className="text-base md:text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed">
            Click any service to establish a direct connection. Build your
            constellation by connecting multiple services and watch as currents
            flow from your vision, creating a network of possibilities.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
