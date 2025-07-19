'use client';

import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
  Variants,
  HTMLMotionProps,
} from 'framer-motion';

type FormData = {
  name: string;
  email: string;
  company: string;
  service: string;
  project: string;
};

type FieldErrors = {
  name?: string;
  email?: string;
  service?: string;
  project?: string;
  [key: string]: string | undefined;
};

type ServiceOption = {
  value: string;
  label: string;
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    service: '',
    project: '',
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | null>(null);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0.5,
    y: 0.5,
  });
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const formRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(formRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  // Mouse tracking with throttling
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (formRef.current) {
      const rect = formRef.current.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    }
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  useEffect(() => {
    const formElement = formRef.current;
    if (formElement) {
      let throttleTimer: NodeJS.Timeout | null = null;
      const throttledMouseMove = (e: MouseEvent) => {
        if (throttleTimer === null) {
          throttleTimer = setTimeout(() => {
            handleMouseMove(e);
            throttleTimer = null;
          }, 16); // ~60fps
        }
      };

      formElement.addEventListener('mousemove', throttledMouseMove);
      return () => {
        formElement.removeEventListener('mousemove', throttledMouseMove);
        if (throttleTimer) clearTimeout(throttleTimer);
      };
    }
  }, [handleMouseMove]);

  const handleChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));

      if (fieldErrors[name]) {
        setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    },
    [fieldErrors],
  );

  const validateForm = (): FieldErrors => {
    const errors: FieldErrors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = 'Email is invalid';
    if (!formData.service) errors.service = 'Please select a service';
    if (!formData.project.trim())
      errors.project = 'Project description is required';
    else if (formData.project.trim().length < 20)
      errors.project = 'Please provide more details (min 20 characters)';

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setFieldErrors({});

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitStatus('success');

    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        project: '',
      });
      setSubmitStatus(null);
    }, 3000);
  };

  // Memoized variants and configurations
  const containerVariants: Variants = useMemo(
    () => ({
      hidden: {
        opacity: 0,
        scale: 0.95,
        rotateX: 10,
        filter: 'blur(4px)',
      },
      visible: {
        opacity: 1,
        scale: 1,
        rotateX: 0,
        filter: 'blur(0px)',
        transition: {
          duration: 0.8,
          staggerChildren: 0.15,
          delayChildren: 0.2,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      },
    }),
    [],
  );

  const fieldVariants: Variants = useMemo(
    () => ({
      hidden: {
        opacity: 0,
        y: 40,
        rotateX: 15,
        scale: 0.9,
      },
      visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
        transition: {
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      },
    }),
    [],
  );

  const getFieldVariant = useCallback(
    (fieldName: keyof FormData): string => {
      if (fieldErrors[fieldName]) return 'error';
      if (focusedField === fieldName) return 'focused';
      if (formData[fieldName]) return 'filled';
      return 'default';
    },
    [focusedField, formData, fieldErrors],
  );

  const inputVariants: Record<string, HTMLMotionProps<'input'>['animate']> =
    useMemo(
      () => ({
        default: {
          scale: 1,
          boxShadow:
            '0 0 0 0px color-mix(in_srgb,var(--color-brand-primary)_0%,transparent)',
          borderColor:
            'color-mix(in_srgb,var(--color-text-primary)_15%,transparent)',
          backgroundColor:
            'color-mix(in_srgb,var(--color-background)_60%,transparent)',
          y: 0,
        },
        focused: {
          scale: 1.02,
          boxShadow:
            '0 0 0 2px color-mix(in_srgb,var(--color-brand-primary)_60%,transparent), 0 0 25px color-mix(in_srgb,var(--color-brand-primary)_30%,transparent), 0 10px 20px color-mix(in_srgb,black_20%,transparent)',
          borderColor:
            'color-mix(in_srgb,var(--color-brand-primary)_90%,transparent)',
          backgroundColor:
            'color-mix(in_srgb,var(--color-background)_90%,transparent)',
          y: -2,
          transition: { duration: 0.3, ease: 'easeOut' },
        },
        filled: {
          borderColor:
            'color-mix(in_srgb,var(--color-success)_70%,transparent)',
          boxShadow:
            '0 0 0 1px color-mix(in_srgb,var(--color-success)_40%,transparent), 0 0 15px color-mix(in_srgb,var(--color-success)_10%,transparent)',
          backgroundColor:
            'color-mix(in_srgb,var(--color-background)_80%,transparent)',
        },
        error: {
          borderColor: 'color-mix(in_srgb,var(--color-error)_80%,transparent)',
          boxShadow:
            '0 0 0 2px color-mix(in_srgb,var(--color-error)_40%,transparent), 0 0 15px color-mix(in_srgb,var(--color-error)_20%,transparent)',
          backgroundColor:
            'color-mix(in_srgb,var(--color-error)_80%,transparent)',
          x: [-2, 2, -2, 2, 0],
          transition: { duration: 0.4 },
        },
      }),
      [],
    );

  const labelVariants: Variants = useMemo(
    () => ({
      default: {
        scale: 1,
        color: 'color-mix(in_srgb,var(--color-text-primary)_70%,transparent)',
        textShadow: '0 0 0 transparent',
      },
      focused: {
        scale: 1.05,
        color: 'var(--color-brand-primary)',
        textShadow:
          '0 0 10px color-mix(in_srgb,var(--color-brand-primary)_50%,transparent)',
        transition: { duration: 0.3 },
      },
    }),
    [],
  );

  const funkyColors: string[] = useMemo(
    () => [
      'var(--color-purple-500)',
      'var(--color-pink-500)',
      'var(--color-blue-500)',
      'var(--color-green-500)',
      'var(--color-yellow-500)',
    ],
    [],
  );

  const services: ServiceOption[] = useMemo(
    () => [
      { value: 'branding', label: '🎨 Branding & Identity' },
      { value: 'web-design', label: '🌐 Web Design & Development' },
      { value: 'marketing', label: '📈 Digital Marketing' },
      { value: 'strategy', label: '🎯 Strategy & Consulting' },
      { value: 'ecommerce', label: '🛒 E-commerce Solutions' },
      { value: 'app-development', label: '📱 App Development' },
    ],
    [],
  );

  // Dynamic gradient based on mouse position
  const dynamicGradient = useMemo(() => {
    const x = mousePosition.x * 100;
    const y = mousePosition.y * 100;
    return `radial-gradient(circle at ${x}% ${y}%, 
      rgba(168, 85, 247, 0.15) 0%, 
      rgba(236, 72, 153, 0.1) 30%, 
      rgba(59, 130, 246, 0.05) 60%, 
      transparent 100%)`;
  }, [mousePosition.x, mousePosition.y]);

  return (
    <motion.div
      ref={formRef}
      className="relative w-full max-w-4xl mx-auto p-6 sm:p-8"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dynamic background */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-30 pointer-events-none"
        style={{ background: dynamicGradient }}
        animate={{
          scale: isHovered ? 1.02 : 1,
          opacity: isHovered ? 0.4 : 0.3,
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Animated grid background */}
      <motion.div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(168, 85, 247, 0.3) 1px, transparent 0)`,
          backgroundSize: '30px 30px',
        }}
        animate={{
          backgroundPosition: [`0px 0px`, `30px 30px`],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Floating particles */}
      <AnimatePresence>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full pointer-events-none"
            style={{
              background: `linear-gradient(45deg, 
                rgba(168, 85, 247, 0.6), 
                rgba(236, 72, 153, 0.6))`,
              left: `${15 + i * 12}%`,
              top: `${10 + (i % 3) * 25}%`,
              filter: 'blur(0.5px)',
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              opacity: [0.3, 0.9, 0.3],
              scale: [0.8, 1.2, 0.8],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.4,
            }}
          />
        ))}
      </AnimatePresence>

      {/* Header */}
      <motion.div className="text-center mb-8" variants={fieldVariants}>
        <motion.h2
          className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-2"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          Let's Build Something Epic! 🚀
        </motion.h2>
        <motion.p
          className="text-white/70 text-base sm:text-lg"
          animate={{
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          Ready to transform your ideas into reality?
        </motion.p>
      </motion.div>

      <form
        className="space-y-6 sm:space-y-8 relative z-10"
        onSubmit={handleSubmit}
      >
        {/* Name and Email Row */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
          variants={fieldVariants}
        >
          {/* Name Field */}
          <motion.div className="relative">
            <motion.label
              className="block text-sm mb-2 sm:mb-3 font-semibold"
              variants={labelVariants}
              animate={focusedField === 'name' ? 'focused' : 'default'}
            >
              Name *
            </motion.label>
            <motion.input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              className="w-full px-4 sm:px-5 py-3 sm:py-4 text-sm rounded-lg sm:rounded-xl border-2 text-white placeholder-white/50 transition-all duration-300 focus:outline-none backdrop-blur-sm"
              placeholder="Your awesome name"
              // @ts-ignore - Framer Motion variants typing issue
              variants={inputVariants}
              animate={getFieldVariant('name')}
              whileHover={{ scale: 1.01 }}
              required
            />
            <AnimatePresence>
              {formData.name && !fieldErrors.name && (
                <motion.div
                  className="absolute right-3 sm:right-4 top-11 sm:top-12 text-green-400 text-lg"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  ✨
                </motion.div>
              )}
              {fieldErrors.name && (
                <motion.div
                  className="absolute left-0 -bottom-5 sm:-bottom-6 text-red-400 text-xs"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {fieldErrors.name}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Email Field */}
          <motion.div className="relative">
            <motion.label
              className="block text-sm mb-2 sm:mb-3 font-semibold"
              variants={labelVariants}
              animate={focusedField === 'email' ? 'focused' : 'default'}
            >
              Email *
            </motion.label>
            <motion.input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              className="w-full px-4 sm:px-5 py-3 sm:py-4 text-sm rounded-lg sm:rounded-xl border-2 text-white placeholder-white/50 transition-all duration-300 focus:outline-none backdrop-blur-sm"
              placeholder="your@epic-email.com"
              // @ts-ignore - Framer Motion variants typing issue
              variants={inputVariants}
              animate={getFieldVariant('email')}
              whileHover={{ scale: 1.01 }}
              required
            />
            <AnimatePresence>
              {formData.email && !fieldErrors.email && (
                <motion.div
                  className="absolute right-3 sm:right-4 top-11 sm:top-12 text-green-400 text-lg"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  💌
                </motion.div>
              )}
              {fieldErrors.email && (
                <motion.div
                  className="absolute left-0 -bottom-5 sm:-bottom-6 text-red-400 text-xs"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {fieldErrors.email}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Company Field */}
        <motion.div variants={fieldVariants} className="relative">
          <motion.label
            className="block text-sm mb-2 sm:mb-3 font-semibold"
            variants={labelVariants}
            animate={focusedField === 'company' ? 'focused' : 'default'}
          >
            Company <span className="text-white/50">(optional)</span>
          </motion.label>
          <motion.input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            onFocus={() => setFocusedField('company')}
            onBlur={() => setFocusedField(null)}
            className="w-full px-4 sm:px-5 py-3 sm:py-4 text-sm rounded-lg sm:rounded-xl border-2 text-white placeholder-white/50 transition-all duration-300 focus:outline-none backdrop-blur-sm"
            placeholder="Your amazing company"
            // @ts-ignore - Framer Motion variants typing issue
            variants={inputVariants}
            animate={getFieldVariant('company')}
            whileHover={{ scale: 1.01 }}
          />
          <AnimatePresence>
            {formData.company && (
              <motion.div
                className="absolute right-3 sm:right-4 top-11 sm:top-12 text-green-400 text-lg"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                🏢
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Service Field */}
        <motion.div variants={fieldVariants} className="relative">
          <motion.label
            className="block text-sm mb-2 sm:mb-3 font-semibold"
            variants={labelVariants}
            animate={focusedField === 'service' ? 'focused' : 'default'}
          >
            Service Needed *
          </motion.label>
          <motion.select
            name="service"
            value={formData.service}
            onChange={handleChange}
            onFocus={() => setFocusedField('service')}
            onBlur={() => setFocusedField(null)}
            className="w-full px-4 sm:px-5 py-3 sm:py-4 text-sm rounded-lg sm:rounded-xl border-2 text-white focus:outline-none appearance-none transition-all duration-300 cursor-pointer backdrop-blur-sm"
            // @ts-ignore - Framer Motion variants typing issue
            variants={inputVariants}
            animate={getFieldVariant('service')}
            whileHover={{ scale: 1.01 }}
            required
          >
            <option value="" className="bg-gray-900 text-white">
              🎯 Choose your adventure...
            </option>
            {services.map((service) => (
              <option
                key={service.value}
                value={service.value}
                className="bg-gray-900 text-white py-2"
              >
                {service.label}
              </option>
            ))}
          </motion.select>

          {/* Dropdown arrow */}
          <motion.div
            className="absolute right-3 sm:right-4 top-11 sm:top-12 pointer-events-none"
            animate={{
              rotate: focusedField === 'service' ? 180 : 0,
              scale: focusedField === 'service' ? 1.2 : 1,
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="rgba(168, 85, 247, 0.8)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>

          <AnimatePresence>
            {formData.service && !fieldErrors.service && (
              <motion.div
                className="absolute right-10 sm:right-12 top-11 sm:top-12 text-green-400 text-lg"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                🎉
              </motion.div>
            )}
            {fieldErrors.service && (
              <motion.div
                className="absolute left-0 -bottom-5 sm:-bottom-6 text-red-400 text-xs"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {fieldErrors.service}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Project Description */}
        <motion.div variants={fieldVariants} className="relative">
          <motion.label
            className="block text-sm mb-2 sm:mb-3 font-semibold"
            variants={labelVariants}
            animate={focusedField === 'project' ? 'focused' : 'default'}
          >
            Project Description *
          </motion.label>
          <motion.textarea
            rows={5}
            name="project"
            value={formData.project}
            onChange={handleChange}
            onFocus={() => setFocusedField('project')}
            onBlur={() => setFocusedField(null)}
            className="w-full px-4 sm:px-5 py-3 sm:py-4 text-sm rounded-lg sm:rounded-xl border-2 text-white placeholder-white/50 transition-all duration-300 focus:outline-none resize-none backdrop-blur-sm"
            placeholder="Tell us about your vision! What's your dream project? What goals do you want to achieve? The more details, the better we can help you! ✨"
            // @ts-ignore - Framer Motion variants typing issue
            variants={inputVariants}
            animate={getFieldVariant('project')}
            whileHover={{ scale: 1.01 }}
            required
          />

          {/* Character counter */}
          <motion.div
            className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 text-xs font-medium px-2 py-1 rounded-full backdrop-blur-sm"
            animate={{
              color:
                formData.project.length > 20
                  ? 'rgba(34, 197, 94, 0.9)'
                  : 'rgba(255, 255, 255, 0.5)',
              backgroundColor:
                formData.project.length > 20
                  ? 'rgba(34, 197, 94, 0.1)'
                  : 'rgba(255, 255, 255, 0.05)',
            }}
            transition={{ duration: 0.3 }}
          >
            {formData.project.length}/1000
          </motion.div>

          <AnimatePresence>
            {formData.project && !fieldErrors.project && (
              <motion.div
                className="absolute right-3 sm:right-4 top-11 sm:top-12 text-green-400 text-lg"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                📝
              </motion.div>
            )}
            {fieldErrors.project && (
              <motion.div
                className="absolute left-0 -bottom-5 sm:-bottom-6 text-red-400 text-xs"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {fieldErrors.project}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Submit Button */}
        <motion.div className="pt-4 sm:pt-6" variants={fieldVariants}>
          <motion.button
            type="submit"
            disabled={isSubmitting || submitStatus === 'success'}
            className="w-full py-4 sm:py-5 px-6 sm:px-8 text-base sm:text-lg font-bold rounded-lg sm:rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{
              scale: 1.02,
              boxShadow: '0 0 40px rgba(168, 85, 247, 0.5)',
            }}
            whileTap={{ scale: 0.98 }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              backgroundPosition: {
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
            style={{
              backgroundSize: '200% 200%',
            }}
          >
            <AnimatePresence mode="wait">
              {isSubmitting ? (
                <motion.div
                  key="submitting"
                  className="flex items-center justify-center space-x-2 sm:space-x-3"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <motion.div
                    className="w-5 h-5 sm:w-6 sm:h-6 border-2 sm:border-3 border-white border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                  <span>Launching into space...</span>
                </motion.div>
              ) : submitStatus === 'success' ? (
                <motion.div
                  key="success"
                  className="flex items-center justify-center space-x-2 sm:space-x-3"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <motion.span
                    className="text-xl sm:text-2xl"
                    animate={{
                      scale: [1, 1.3, 1],
                      rotate: [0, 360, 0],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    🎉
                  </motion.span>
                  <span>Mission Accomplished!</span>
                </motion.div>
              ) : (
                <motion.div
                  key="default"
                  className="flex items-center justify-center space-x-2 sm:space-x-3"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <motion.span
                    className="text-lg sm:text-xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    🚀
                  </motion.span>
                  <span>Launch Your Dream Project</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      </form>

      {/* Decorative elements */}
      <motion.div
        className="absolute -bottom-6 -left-6 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-purple-600/50 to-pink-600/50 blur-xl"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.5, 0.8, 0.5],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute -top-6 -right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-600/50 to-purple-600/50 blur-xl"
        animate={{
          scale: [1, 2.5, 1],
          opacity: [0.4, 0.9, 0.4],
          x: [0, -25, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      {/* Success celebration */}
      <AnimatePresence>
        {submitStatus === 'success' && (
          <motion.div
            className="absolute inset-0 pointer-events-none overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Confetti */}
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  backgroundColor: funkyColors[i % funkyColors.length],
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                initial={{
                  opacity: 0,
                  scale: 0,
                  y: -10,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0.5],
                  y: [0, Math.random() * 200 + 100],
                  x: [0, (Math.random() - 0.5) * 100],
                }}
                transition={{
                  duration: 2 + Math.random(),
                  ease: 'easeOut',
                  delay: i * 0.02,
                }}
              />
            ))}

            {/* Emoji celebration */}
            {['🎉', '✨', '🚀', '👏', '💫', '🌟'].map((emoji, i) => (
              <motion.div
                key={emoji}
                className="absolute text-3xl sm:text-4xl"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + (i % 2) * 40}%`,
                }}
                initial={{
                  scale: 0,
                  opacity: 0,
                }}
                animate={{
                  scale: [0, 1.5, 1],
                  opacity: [0, 1, 0],
                  y: [0, -100],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 2,
                  ease: 'easeOut',
                  delay: i * 0.2,
                }}
              >
                {emoji}
              </motion.div>
            ))}

            {/* Pulse effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-radial from-purple-500/20 via-transparent to-transparent"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1.5, opacity: 1 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ContactForm;
