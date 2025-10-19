'use client';

import React, { ReactNode } from 'react';

interface GradientBorderProps {
  children: ReactNode;
  className?: string;
  variant?: 'animate' | 'spin';
  borderRadius?: string;
}

/**
 * Reusable Animated Gradient Border Component
 * Uses the 4 marquee brand colors: Orange, Purple, Yellow, Green
 * 
 * @param variant - 'animate': sliding gradient, 'spin': rotating gradient (default: 'spin')
 * @param borderRadius - Custom border radius (default: '1rem')
 * @param className - Additional CSS classes
 * 
 * @example
 * <GradientBorder variant="spin">
 *   <button>Click Me</button>
 * </GradientBorder>
 */
export default function GradientBorder({
  children,
  className = '',
  variant = 'spin',
  borderRadius = '1rem',
}: GradientBorderProps) {
  const borderClass = variant === 'spin' ? 'gradient-border-spin' : 'gradient-border';
  
  return (
    <div 
      className={`${borderClass} ${className}`}
      style={{ borderRadius }}
    >
      <div className="gradient-border-content">
        {children}
      </div>
    </div>
  );
}

// Individual export for inline use
export function useGradientBorderClasses(variant: 'animate' | 'spin' = 'spin') {
  return {
    container: variant === 'spin' ? 'gradient-border-spin' : 'gradient-border',
    content: 'gradient-border-content',
  };
}
