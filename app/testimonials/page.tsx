import SimplePage from "../../components/SimplePage";
import StatsGrid from "../../components/StatsGrid";
import TestimonialCard from "../../components/TestimonialCard";
import CTASection from "../../components/CTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Témoignages - AutoCar'z",
  description: "Découvrez les avis et témoignages de nos clients satisfaits",
};

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: "Jean-Pierre Martineau",
      role: "Entrepreneur",
      vehicle: "Ferrari 488 GTB",
      rating: 5,
      text: "Un service exceptionnel ! L'équipe d'AutoCar'z a su comprendre mes attentes et m'a accompagné tout au long de l'acquisition de ma Ferrari. La qualité du suivi après-vente est remarquable.",
      date: "Décembre 2024",
      verified: true,
    },
    {
      id: 2,
      name: "Sophie Dubois",
      role: "Directrice Marketing",
      vehicle: "Lamborghini Huracán",
      rating: 5,
      text: "AutoCar'z dépasse toutes mes attentes. Non seulement ils proposent des véhicules d'exception, mais leur service client est irréprochable. Je recommande vivement !",
      date: "Novembre 2024",
      verified: true,
    },
    {
      id: 3,
      name: "Michel Rodriguez",
      role: "Médecin",
      vehicle: "Porsche 911 Turbo S",
      rating: 5,
      text: "Professionnalisme, expertise et passion : voilà ce qui caractérise AutoCar'z. Ils ont su me conseiller parfaitement pour choisir ma Porsche. Un grand merci !",
      date: "Octobre 2024",
      verified: true,
    },
    {
      id: 4,
      name: "Caroline Lefevre",
      role: "Avocate",
      vehicle: "Maserati Quattroporte",
      rating: 5,
      text: "Le financement sur mesure proposé par AutoCar'z m'a permis de réaliser mon rêve. L'équipe est à l'écoute et trouve toujours une solution adaptée.",
      date: "Septembre 2024",
      verified: true,
    },
    {
      id: 5,
      name: "Thomas Bernard",
      role: "Chef d'entreprise",
      vehicle: "Aston Martin DB11",
      rating: 5,
      text: "Service maintenance exceptionnel ! Mon Aston Martin est entre de bonnes mains. L'atelier AutoCar'z garantit des prestations de très haute qualité.",
      date: "Août 2024",
      verified: true,
    },
    {
      id: 6,
      name: "Isabelle Moreau",
      role: "Architecte",
      vehicle: "McLaren 570S",
      rating: 5,
      text: "AutoCar'z a transformé l'achat de ma McLaren en une expérience mémorable. Leur showroom est magnifique et le personnel extremely compétent.",
      date: "Juillet 2024",
      verified: true,
    },
  ];

  const stats = [
    { number: "500+", label: "Clients Satisfaits" },
    { number: "4.9/5", label: "Note Moyenne" },
    { number: "98%", label: "Recommandations" },
    { number: "15+", label: "Années d'Excellence" },
  ];

  return (
    <SimplePage
      title="Témoignages Clients"
      description="Découvrez pourquoi nos clients nous font confiance pour leurs véhicules d'exception"
      icon="⭐"
    >
      <div className="space-y-12">
        {/* Statistics */}
        <StatsGrid title="La Confiance de nos Clients" stats={stats} />

        {/* Featured Testimonial */}
        <section>
          <div className="bg-[#F8F8F5] p-8 rounded-2xl text-center max-w-4xl mx-auto">
            <div className="text-4xl mb-4">💎</div>
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#FFD700] text-xl">
                  ★
                </span>
              ))}
            </div>
            <blockquote className="text-lg sm:text-xl text-[#0D1B2A] mb-6 italic">
              "AutoCar'z ne vend pas seulement des voitures de luxe, ils offrent
              une expérience complète. Depuis l'achat jusqu'à l'entretien, tout
              est parfait. C'est bien plus qu'un concessionnaire, c'est un
              partenaire de confiance."
            </blockquote>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div>
                <div className="font-semibold text-[#0D1B2A]">
                  Philippe Rousseau
                </div>
                <div className="text-[#71797E]">PDG • Ferrari F8 Tributo</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                  ✓ Vérifié
                </span>
                <span className="text-[#71797E] text-sm">Janvier 2025</span>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0D1B2A] text-center mb-8">
            Ce Que Disent Nos Clients
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </section>

        {/* Review Platforms */}
        <section>
          <h2 className="text-2xl font-bold text-[#0D1B2A] text-center mb-8">
            Retrouvez-nous sur
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { platform: "Google", rating: "4.9/5", reviews: "127 avis" },
              { platform: "Trustpilot", rating: "4.8/5", reviews: "89 avis" },
              { platform: "Facebook", rating: "4.9/5", reviews: "203 avis" },
              { platform: "AutoExpert", rating: "5.0/5", reviews: "45 avis" },
            ].map((platform, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg border border-gray-200 text-center"
              >
                <div className="font-semibold text-[#0D1B2A] mb-2">
                  {platform.platform}
                </div>
                <div className="text-lg font-bold text-[#FFD700] mb-1">
                  {platform.rating}
                </div>
                <div className="text-[#71797E] text-sm">{platform.reviews}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Rejoignez nos Clients Satisfaits"
          description="Découvrez pourquoi AutoCar'z est le choix privilégié des amateurs de véhicules d'exception. Laissez-nous vous accompagner dans votre projet automobile."
          buttons={[
            { text: "Découvrir nos véhicules", type: "primary" },
            { text: "Laisser un avis", type: "secondary" },
          ]}
        />
      </div>
    </SimplePage>
  );
}
