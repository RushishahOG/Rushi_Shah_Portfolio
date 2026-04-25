import { cn } from "../../lib/utils";

const Card = ({ children, className, interactive = false, ...props }) => {
  return (
    <div
      className={cn(
        "border border-[#111111] bg-[#F9F9F7] p-6",
        interactive && "hard-shadow-hover cursor-pointer hover:bg-neutral-100",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className }) => (
  <div className={cn("mb-4 border-b border-[#111111] pb-2", className)}>
    {children}
  </div>
);

export const CardTitle = ({ children, className }) => (
  <h3 className={cn("text-2xl font-serif", className)}>{children}</h3>
);

export const CardContent = ({ children, className }) => (
  <div className={cn("text-sm leading-relaxed font-body", className)}>
    {children}
  </div>
);

export default Card;
