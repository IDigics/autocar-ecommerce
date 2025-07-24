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
      className={`bg-white rounded-2xl shadow-lg border border-gray-100 p-6 ${className}`}
    >
      <div className="flex items-center gap-3 mb-4">
        {icon && <span className="text-2xl">{icon}</span>}
        <h3 className="text-xl font-bold text-[#0D1B2A]">{title}</h3>
      </div>
      <div className="text-[#71797E] space-y-4">{children}</div>
    </div>
  );
}
