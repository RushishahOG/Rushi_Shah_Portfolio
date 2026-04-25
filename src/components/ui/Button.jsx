import { cn } from "../../lib/utils";

const Button = ({ 
  children, 
  variant = "primary", 
  className, 
  ...props 
}) => {
  const variants = {
    primary: "bg-[#111111] text-[#F9F9F7] border border-transparent hover:bg-white hover:text-[#111111] hover:border-[#111111]",
    secondary: "border border-[#111111] bg-transparent text-[#111111] hover:bg-[#111111] hover:text-[#F9F9F7]",
    ghost: "text-[#111111] hover:bg-[#E5E5E0]",
    link: "text-[#111111] underline-offset-4 decoration-2 decoration-[#CC0000] hover:underline"
  };

  return (
    <button
      className={cn(
        "min-h-[44px] min-w-[44px] px-6 py-2 uppercase tracking-widest text-xs font-mono transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
