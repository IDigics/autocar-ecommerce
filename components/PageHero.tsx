interface Feature {
  text: string;
  color?: string;
}

interface PageHeroProps {
  title: string;
  description: string;
  icon?: string;
  features?: Feature[];
}

export default function PageHero({
  title,
  description,
  icon = "📄",
  features = [],
}: PageHeroProps) {
  return (
    <section className="pt-20 bg-gradient-to-br from-[#0D1B2A] via-[#1a2a3a] to-[#0D1B2A] text-white py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-3 bg-[#FFD700]/10 backdrop-blur-sm border border-[#FFD700]/20 rounded-full px-6 py-2 mb-6">
          <span className="text-[#FFD700]">{icon}</span>
          <span className="text-[#FFD700] text-sm font-medium">AutoCar'z</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#FFD700] bg-clip-text text-transparent">
          {title}
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
        {features.length > 0 && (
          <div className="flex items-center justify-center gap-6 mt-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-gray-400"
              >
                <span
                  className={`w-2 h-2 ${
                    feature.color || "bg-green-400"
                  } rounded-full`}
                ></span>
                {feature.text}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
