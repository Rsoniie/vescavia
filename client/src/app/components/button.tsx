interface ButtonProps {
  textContent: string;
  className?: string;
}

const Button = ({ textContent, className = '' }: ButtonProps) => {
  return (
    <button
      className={`bg-[#11001D] text-white px-8 py-4 rounded-full font-medium border border-white hover:bg-[#1a012a] focus:bg-[#1a012a] focus:outline-none focus:ring-2 focus:ring-purple-300 active:bg-[#0f0019] transition-colors duration-200 ${className}`}
      aria-label={textContent}
    >
      {textContent}
    </button>
  );
};

export default Button;
