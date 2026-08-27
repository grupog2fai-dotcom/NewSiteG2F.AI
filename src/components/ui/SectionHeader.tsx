import { ReactNode } from "react";

interface SectionHeaderProps {
  label?: string;
  title: ReactNode;
  description?: string;
  className?: string;
}

export function SectionHeader({ label, title, description, className = "" }: SectionHeaderProps) {
  return (
    <div className={`flex flex-col mb-16 md:mb-24 ${className}`}>
      {label && (
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-[#c8a84b]" />
          <span className="text-xs font-semibold text-zinc-500 tracking-widest uppercase font-satoshi">
            {label}
          </span>
        </div>
      )}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold text-white leading-[1.05] font-clash max-w-3xl">
          {title}
        </h2>
        {description && (
          <p className="text-zinc-400 max-w-sm leading-relaxed text-base font-satoshi">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
