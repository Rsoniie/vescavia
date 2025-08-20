'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaUser,
  FaEnvelope,
  FaRocket,
  FaServicestack,
  FaCommentDots,
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  serviceName: string;
  serviceType: string[];
  additionalInfo: string;
}

interface Step {
  id: number;
  title: string;
  subtitle?: string;
  field: keyof FormData;
  type: 'text' | 'email' | 'select' | 'textarea';
  placeholder: string;
  required: boolean;
  icon: React.ReactNode;
  options?: string[];
}

const steps: Step[] = [
  {
    id: 1,
    title: "What's your name?",
    field: 'name',
    type: 'text',
    placeholder: 'Enter your full name',
    required: true,
    icon: <FaUser className="text-2xl" />,
  },
  {
    id: 2,
    title: "What's your email address?",
    field: 'email',
    type: 'email',
    placeholder: 'your@email.com',
    required: true,
    icon: <FaEnvelope className="text-2xl" />,
  },
  {
    id: 3,
    title: 'What is your service/Startup name?',
    subtitle: "(You can write 'NA' if you haven't thought of a name)",
    field: 'serviceName',
    type: 'text',
    placeholder: 'Your startup/service name or NA',
    required: true,
    icon: <FaRocket className="text-2xl" />,
  },
  {
    id: 4,
    title: 'Which services are you interested in?',
    field: 'serviceType',
    type: 'select',
    placeholder: 'Select a service',
    required: true,
    icon: <FaServicestack className="text-2xl" />,
    options: [
      'Brand Strategy & Identity',
      'Web Development & Design',
      'Viral Marketing Campaigns',
      'Complete Brand Transformation',
    ],
  },
  {
    id: 5,
    title: "Anything else you'd like to share?",
    field: 'additionalInfo',
    type: 'textarea',
    placeholder:
      'Tell us more about your project, goals, or any specific requirements...',
    required: false,
    icon: <FaCommentDots className="text-2xl" />,
  },
];

export default function MultiStepContactForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    serviceName: '',
    serviceType: [],
    additionalInfo: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [direction, setDirection] = useState(0);
  const inputRef = useRef<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >(null);

  const currentStepData = steps[currentStep - 1];
  const progress = (currentStep / steps.length) * 100;

  useEffect(() => {
    if (inputRef.current && !isSubmitted) {
      inputRef.current.focus();
    }
  }, [currentStep, isSubmitted]);

  const validateField = (
    field: keyof FormData,
    value: string | string[],
  ): string => {
    if (currentStepData.required) {
      if (Array.isArray(value)) {
        if (value.length === 0) {
          return 'Please select at least one option';
        }
      } else if (!value.trim()) {
        return 'This field is required';
      }
    }

    if (field === 'email' && value && typeof value === 'string') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return 'Please enter a valid email address';
      }
    }

    return '';
  };

  const handleInputChange = (value: string | string[]) => {
    const field = currentStepData.field;
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const handleServiceSelection = (service: string) => {
    const currentServices = formData.serviceType;
    let newServices;

    if (currentServices.includes(service)) {
      // Remove if already selected
      newServices = currentServices.filter((s) => s !== service);
    } else {
      // Add if not selected
      newServices = [...currentServices, service];
    }

    handleInputChange(newServices);
  };

  const canProceed = () => {
    const value = formData[currentStepData.field];
    const error = validateField(currentStepData.field, value);
    return !error;
  };

  const handleNext = () => {
    const field = currentStepData.field;
    const value = formData[field];
    const error = validateField(field, value);

    if (error) {
      setErrors((prev) => ({ ...prev, [field]: error }));
      return;
    }

    if (currentStep < steps.length) {
      setDirection(1);
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setDirection(-1);
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    if (!canProceed()) return;

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && canProceed()) {
      if (currentStep === steps.length) {
        handleSubmit();
      } else {
        handleNext();
      }
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-[var(--color-background)] relative overflow-hidden">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-6"
            >
              <FaCheckCircle className="text-3xl text-white" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
              Thank you {formData.name}!
            </h2>

            <p className="text-lg text-[var(--color-text-secondary)] mb-8">
              We've received your inquiry and will get back to you within 24
              hours.
            </p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="p-6 bg-[var(--color-background-dark)] rounded-xl border border-[var(--color-border)]/30"
            >
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                Next Steps:
              </h3>
              <ul className="text-[var(--color-text-secondary)] text-left space-y-1">
                <li>• We'll review your project details</li>
                <li>• Schedule a discovery call within 24 hours</li>
                <li>• Provide a custom proposal for your needs</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-[var(--color-background)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-2xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
            Let's Start Your Journey
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg">
            Tell us about your project and we'll help bring your vision to life
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-[var(--color-text-secondary)]">
              Step {currentStep} of {steps.length}
            </span>
            <span className="text-sm text-[var(--color-text-secondary)]">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <div className="w-full bg-[var(--color-background-dark)] rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-[var(--color-brand-primary)] to-[var(--color-brand-accent)] h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-[var(--color-background-dark)] rounded-2xl p-8 border border-[var(--color-border)]/30 min-h-[400px] relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentStep}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="space-y-6"
            >
              {/* Step Icon and Title */}
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[var(--color-brand-primary)] to-[var(--color-brand-accent)] rounded-full mb-4"
                >
                  {currentStepData.icon}
                </motion.div>

                <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-2">
                  {currentStepData.title}
                </h3>

                {currentStepData.subtitle && (
                  <p className="text-[var(--color-text-secondary)] text-sm">
                    {currentStepData.subtitle}
                  </p>
                )}
              </div>

              {/* Input Field */}
              <div className="space-y-2">
                {currentStepData.type === 'select' ? (
                  <div className="space-y-3">
                    <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                      Select all services that interest you:
                    </p>
                    <div className="grid gap-3">
                      {currentStepData.options?.map((option) => (
                        <motion.button
                          key={option}
                          type="button"
                          onClick={() => handleServiceSelection(option)}
                          className={`p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                            formData.serviceType.includes(option)
                              ? 'border-[var(--color-brand-primary)] bg-[var(--color-brand-primary)]/10 text-[var(--color-text-primary)]'
                              : 'border-[var(--color-border)]/30 bg-[var(--color-background)] text-[var(--color-text-secondary)] hover:border-[var(--color-brand-primary)]/50'
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{option}</span>
                            <motion.div
                              className={`w-5 h-5 rounded-full border-2 transition-all duration-300 ${
                                formData.serviceType.includes(option)
                                  ? 'border-[var(--color-brand-primary)] bg-[var(--color-brand-primary)]'
                                  : 'border-[var(--color-border)]'
                              }`}
                              initial={false}
                              animate={{
                                scale: formData.serviceType.includes(option)
                                  ? 1
                                  : 0.8,
                              }}
                            >
                              {formData.serviceType.includes(option) && (
                                <motion.div
                                  className="w-full h-full rounded-full bg-white flex items-center justify-center"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{
                                    type: 'spring',
                                    stiffness: 300,
                                  }}
                                >
                                  <FaCheckCircle className="text-[var(--color-brand-primary)] text-xs" />
                                </motion.div>
                              )}
                            </motion.div>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                    {formData.serviceType.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-3 p-3 bg-[var(--color-background-dark)] rounded-lg"
                      >
                        <p className="text-sm text-[var(--color-text-secondary)] mb-2">
                          Selected services ({formData.serviceType.length}):
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {formData.serviceType.map((service) => (
                            <span
                              key={service}
                              className="px-3 py-1 bg-[var(--color-brand-primary)]/20 text-[var(--color-brand-primary)] rounded-full text-sm"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                ) : currentStepData.type === 'textarea' ? (
                  <textarea
                    ref={inputRef as React.RefObject<HTMLTextAreaElement>}
                    value={formData[currentStepData.field] as string}
                    onChange={(e) => handleInputChange(e.target.value)}
                    placeholder={currentStepData.placeholder}
                    rows={4}
                    className="w-full px-4 py-4 bg-[var(--color-background)] border border-[var(--color-border)]/30 rounded-xl text-[var(--color-text-primary)] focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:border-transparent transition-all duration-300 text-lg resize-none"
                  />
                ) : (
                  <input
                    ref={inputRef as React.RefObject<HTMLInputElement>}
                    type={currentStepData.type}
                    value={formData[currentStepData.field] as string}
                    onChange={(e) => handleInputChange(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={currentStepData.placeholder}
                    className="w-full px-4 py-4 bg-[var(--color-background)] border border-[var(--color-border)]/30 rounded-xl text-[var(--color-text-primary)] focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:border-transparent transition-all duration-300 text-lg"
                  />
                )}

                {errors[currentStepData.field] && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm"
                  >
                    {errors[currentStepData.field]}
                  </motion.p>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={handleBack}
              disabled={currentStep === 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                currentStep === 1
                  ? 'opacity-50 cursor-not-allowed text-[var(--color-text-secondary)]'
                  : 'text-[var(--color-text-primary)] hover:bg-[var(--color-background)] border border-[var(--color-border)]/30'
              }`}
            >
              <FaChevronLeft className="text-sm" />
              Back
            </button>

            <button
              onClick={currentStep === steps.length ? handleSubmit : handleNext}
              disabled={!canProceed() || isSubmitting}
              className={`flex items-center gap-2 px-8 py-3 rounded-xl font-medium transition-all duration-300 ${
                canProceed() && !isSubmitting
                  ? 'bg-gradient-to-r from-[var(--color-brand-primary)] to-[var(--color-brand-accent)] text-white hover:scale-105 shadow-lg'
                  : 'opacity-50 cursor-not-allowed bg-gray-600 text-gray-300'
              }`}
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                  />
                  Submitting...
                </>
              ) : currentStep === steps.length ? (
                <>
                  Submit
                  <FaCheckCircle className="text-sm" />
                </>
              ) : (
                <>
                  Next
                  <FaChevronRight className="text-sm" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Step Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index + 1 <= currentStep
                  ? 'bg-gradient-to-r from-[var(--color-brand-primary)] to-[var(--color-brand-accent)]'
                  : 'bg-[var(--color-background-dark)] border border-[var(--color-border)]/30'
              }`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
