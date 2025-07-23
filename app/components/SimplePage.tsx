import { Metadata } from "next";

interface SimplePageProps {
  title: string;
  description: string;
  icon?: string;
  children?: React.ReactNode;
}

export default function SimplePage({ title, description, icon, children }: SimplePageProps) {
  return (
    <main className="min-h-screen pt-16 bg-[#F8F8F5]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0D1B2A] to-[#1a2a3a] text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {icon && (
            <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6">
              {icon}
            </div>
          )}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6">
            {title}
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto">
            {description}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children || (
            <div className="text-center py-16">
              <div className="max-w-2xl mx-auto">
                <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-dashed border-[#FFD700] shadow-sm">
                  <div className="text-4xl sm:text-5xl mb-4">🚧</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#0D1B2A] mb-2">
                    Page en Construction
                  </h3>
                  <p className="text-sm sm:text-base text-[#71797E]">
                    Cette page sera bientôt disponible avec du contenu détaillé.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
