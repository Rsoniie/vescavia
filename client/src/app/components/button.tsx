interface ButtonProps {
  textContent: string;
  className?: string;
}

const Button = ({ textContent, className = '' }: ButtonProps) => {
  return (
    <button
      className={`bg-[var(--color-background)] text-[var(--color-text-primary)] px-8 py-4 rounded-full font-medium border border-[var(--color-text-primary)] hover:bg-[var(--color-background-dark)] focus:bg-[var(--color-background-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] active:bg-[var(--color-black)] transition-colors duration-200 ${className}`}
      aria-label={textContent}
    >
      {textContent}
    </button>
  );
};

export default Button;
