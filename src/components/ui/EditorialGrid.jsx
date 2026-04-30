import { cn } from "../../lib/utils";

export const EditorialGrid = ({ children, className }) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-12 gap-0 border-l border-t border-[#111111]", className)}>
      {children}
    </div>
  );
};

export const EditorialColumn = ({ 
  children, 
  span = 1, 
  className, 
  label, 
  icon: Icon,
  noPadding = false 
}) => {
  const spans = {
    1: "md:col-span-1",
    2: "md:col-span-2",
    3: "md:col-span-3",
    4: "md:col-span-4",
    5: "md:col-span-5",
    6: "md:col-span-6",
    7: "md:col-span-7",
    8: "md:col-span-8",
    9: "md:col-span-9",
    10: "md:col-span-10",
    11: "md:col-span-11",
    12: "md:col-span-12",
  };

  return (
    <div className={cn(
      "border-r border-b border-[#111111] flex flex-col",
      spans[span],
      className
    )}>
      {(label || Icon) && (
        <div className="border-b border-[#111111] px-4 py-2 flex justify-between items-center bg-[#F9F9F7]">
          <div className="flex items-center gap-3">
            {Icon && (
              <div className="border border-[#111111] p-1.5 bg-[#111111] text-[#F9F9F7]">
                <Icon size={12} strokeWidth={3} />
              </div>
            )}
            {label && <span className="font-googlesans text-[10px] uppercase tracking-[0.2em] font-bold">{label}</span>}
          </div>
          <div className="text-[10px] font-mono opacity-30">001</div>
        </div>
      )}
      <div className={cn(noPadding ? "" : "p-6", "flex-grow")}>
        {children}
      </div>
    </div>
  );
};
