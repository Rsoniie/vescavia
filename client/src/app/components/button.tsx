// interface ButtonProps {
//   textContent: string;
//   className?: string;
//   variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
//   size?: 'sm' | 'md' | 'lg';
// }

// const Button = ({
//   textContent,
//   className = '',
//   variant = 'primary',
//   size = 'md'
// }: ButtonProps) => {
//   // Size variants using your design tokens
//   const sizeClasses = {
//     sm: 'px-6 py-2 text-[var(--font-size-base)]',
//     md: 'px-8 py-4 text-[var(--font-size-lg)]',
//     lg: 'px-10 py-5 text-[var(--font-size-xl)]'
//   };

//   // Variant styles using your semantic color tokens
//   const variantClasses = {
//     primary: `
//       bg-[var(--color-brand-primary)]
//       text-[var(--color-text-primary)]
//       border-[var(--color-brand-primary)]
//       hover:bg-[var(--color-purple-500)]
//       focus:bg-[var(--color-purple-500)]
//       active:bg-[var(--color-fuchsia-900)]
//       focus:ring-[var(--color-brand-accent)]
//     `,
//     secondary: `
//       bg-[var(--color-brand-secondary)]
//       text-[var(--color-text-primary)]
//       border-[var(--color-brand-secondary)]
//       hover:bg-[var(--color-blue-500)]
//       focus:bg-[var(--color-blue-500)]
//       active:bg-[var(--color-gray-800)]
//       focus:ring-[var(--color-brand-primary)]
//     `,
//     outline: `
//       bg-transparent
//       text-[var(--color-brand-primary)]
//       border-[var(--color-brand-primary)]
//       hover:bg-[var(--color-brand-primary)]
//       hover:text-[var(--color-text-primary)]
//       focus:bg-[var(--color-brand-primary)]
//       focus:text-[var(--color-text-primary)]
//       active:bg-[var(--color-fuchsia-900)]
//       focus:ring-[var(--color-brand-accent)]
//     `,
//     ghost: `
//       bg-transparent
//       text-[var(--color-text-primary)]
//       border-transparent
//       hover:bg-[var(--color-background-dark)]
//       focus:bg-[var(--color-background-dark)]
//       active:bg-[var(--color-gray-800)]
//       focus:ring-[var(--color-border)]
//     `
//   };

//   return (
//     <button
//       className={`
//         ${sizeClasses[size]}
//         ${variantClasses[variant]}
//         rounded-full
//         font-medium
//         border-2
//         focus:outline-none
//         focus:ring-2
//         focus:ring-offset-2
//         focus:ring-offset-[var(--color-background)]
//         transition-all
//         duration-200
//         font-[var(--font-inter)]
//         disabled:opacity-50
//         disabled:cursor-not-allowed
//         ${className}
//       `}
//       aria-label={textContent}
//     >
//       {textContent}
//     </button>
//   );
// };

// export default Button;

interface ButtonProps {
  textContent: string;
  className?: string;
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'ghost'
    | 'gradient'
    | 'accent';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

const Button = ({
  textContent,
  className = '',
  variant = 'primary',
  size = 'md',
  onClick,
}: ButtonProps) => {
  // Size variants using your design tokens
  const sizeClasses = {
    sm: 'px-6 py-2 text-[var(--font-size-base)]',
    md: 'px-8 py-4 text-[var(--font-size-lg)]',
    lg: 'px-10 py-5 text-[var(--font-size-xl)]',
  };

  // Variant styles using your complete color palette
  const variantClasses = {
    primary: `
      bg-[var(--color-brand-primary)] 
      text-[var(--color-text-primary)] 
      border-[var(--color-brand-primary)]
      hover:bg-[var(--color-purple-500)] 
      focus:bg-[var(--color-purple-500)]
      active:bg-[var(--color-fuchsia-900)]
      focus:ring-[var(--color-brand-accent)]
    `,
    secondary: `
      bg-[var(--color-brand-secondary)] 
      text-[var(--color-text-primary)] 
      border-[var(--color-brand-secondary)]
      hover:bg-[var(--color-blue-500)] 
      focus:bg-[var(--color-blue-500)]
      active:bg-[var(--color-gray-800)]
      focus:ring-[var(--color-brand-primary)]
    `,
    outline: `
      bg-transparent 
      text-[var(--color-brand-primary)] 
      border-[var(--color-brand-primary)]
      hover:bg-[var(--color-brand-primary)] 
      hover:text-[var(--color-text-primary)]
      focus:bg-[var(--color-brand-primary)]
      focus:text-[var(--color-text-primary)]
      active:bg-[var(--color-fuchsia-900)]
      focus:ring-[var(--color-brand-accent)]
    `,
    ghost: `
      bg-transparent 
      text-[var(--color-text-primary)] 
      border-transparent
      hover:bg-[var(--color-background-dark)] 
      focus:bg-[var(--color-background-dark)]
      active:bg-[var(--color-gray-800)]
      focus:ring-[var(--color-border)]
    `,
    gradient: `
      bg-gradient-to-r 
      from-[var(--color-brand-primary)] 
      via-[var(--color-brand-accent)] 
      to-[var(--color-fuchsia-400)]
      text-[var(--color-text-primary)] 
      border-transparent
      hover:from-[var(--color-purple-500)] 
      hover:via-[var(--color-pink-500)] 
      hover:to-[var(--color-fuchsia-300)]
      focus:from-[var(--color-fuchsia-900)] 
      focus:via-[var(--color-brand-accent)] 
      focus:to-[var(--color-brand-primary)]
      focus:ring-[var(--color-fuchsia-400)]
      shadow-lg
      hover:shadow-xl
    `,
    accent: `
      bg-[var(--color-brand-accent)] 
      text-[var(--color-text-primary)] 
      border-[var(--color-brand-accent)]
      hover:bg-[var(--color-pink-500)] 
      focus:bg-[var(--color-pink-500)]
      active:bg-[var(--color-fuchsia-900)]
      focus:ring-[var(--color-brand-primary)]
      shadow-md
      hover:shadow-lg
    `,
  };

  return (
    <button
      className={`
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        rounded-full 
        font-medium 
        border-2
        focus:outline-none 
        focus:ring-2 
        focus:ring-offset-2
        focus:ring-offset-[var(--color-background)]
        transition-all 
        duration-200 
        font-[var(--font-inter)]
        disabled:opacity-50 
        disabled:cursor-not-allowed
        transform
        hover:scale-105
        active:scale-95
        ${className}
      `}
      onClick={onClick}
      aria-label={textContent}
    >
      {textContent}
    </button>
  );
};

export default Button;
