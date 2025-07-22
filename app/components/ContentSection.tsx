import { ReactNode } from "react";

interface ContentSectionProps {
  title: string;
  icon?: string;
  children: ReactNode;
  className?: string;
}

export default function ContentSection({
  title,
  icon,
  children,
  className = "",
}: ContentSectionProps) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg border border-gray-100 p-8 ${className}`}
    >
      <h3 className="text-2xl font-bold text-[#0D1B2A] mb-6 flex items-center gap-2">
        {icon && <span className="text-[#FFD700]">{icon}</span>}
        {title}
      </h3>
      <div className="space-y-4 text-[#71797E] leading-relaxed">{children}</div>
    </div>
  );
}
