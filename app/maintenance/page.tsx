import SimplePage from "../../components/SimplePage";
import ServiceCard from "../../components/ServiceCard";
import FeatureGrid from "../../components/FeatureGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maintenance et Réparation - AutoCar'z",
  description:
    "Services d'entretien et de réparation par nos experts certifiés",
};

export default function MaintenancePage() {
  const services = [
    {
      icon: "🔧",
      title: "Entretien Régulier",
      description: "Révisions complètes selon les recommandations constructeur",
      features: [
        "Vidange et filtres",
        "Contrôle des freins",
        "Diagnostic électronique",
        "Mise à jour logiciels",
      ],
    },
    {
      icon: "⚙️",
      title: "Réparations Spécialisées",
      description: "Interventions techniques par des experts certifiés",
      features: [
        "Moteur et transmission",
        "Système électrique",
        "Climatisation",
        "Carrosserie et peinture",
      ],
    },
    {
      icon: "🛡️",
      title: "Garantie Premium",
      description: "Protection complète pour votre véhicule de luxe",
      features: [
        "Pièces d'origine",
        "Main d'œuvre certifiée",
        "Garantie 2 ans",
        "Assistance 24h/24",
      ],
    },
  ];

  return (
    <SimplePage
      title="Service Maintenance Premium"
      description="Un service d'excellence pour préserver les performances et la valeur de votre véhicule de luxe"
      icon="🔧"
    >
      <div className="space-y-12">
        {/* Services Overview */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0D1B2A] text-center mb-8">
            Nos Services d'Excellence
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
              >
                <div className="text-4xl text-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[#0D1B2A] mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-[#71797E] mb-4 text-center">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-[#FFD700] rounded-full mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Appointment Booking */}
        <section className="bg-gradient-to-r from-[#0D1B2A] to-[#1a2a3a] text-white p-8 rounded-2xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
              Réservez Votre Rendez-vous
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Planification Rapide
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Type de service
                    </label>
                    <select className="w-full px-4 py-3 bg-white text-black rounded-lg">
                      <option>Entretien régulier</option>
                      <option>Diagnostic</option>
                      <option>Réparation</option>
                      <option>Contrôle technique</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Date souhaitée
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 bg-white text-black rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Marque du véhicule
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Ferrari, Lamborghini..."
                      className="w-full px-4 py-3 bg-white text-black rounded-lg"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Informations Contact
                </h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Nom complet"
                    className="w-full px-4 py-3 bg-white text-black rounded-lg"
                  />
                  <input
                    type="email"
                    placeholder="Adresse email"
                    className="w-full px-4 py-3 bg-white text-black rounded-lg"
                  />
                  <input
                    type="tel"
                    placeholder="Téléphone"
                    className="w-full px-4 py-3 bg-white text-black rounded-lg"
                  />
                  <textarea
                    placeholder="Description du problème ou demande spéciale"
                    rows={4}
                    className="w-full px-4 py-3 bg-white text-black rounded-lg resize-none"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <button className="px-8 py-4 bg-[#FFD700] text-black rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                Confirmer le Rendez-vous
              </button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0D1B2A] text-center mb-8">
            Pourquoi Choisir AutoCar'z ?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "👨‍🔧",
                title: "Experts Certifiés",
                description:
                  "Techniciens spécialisés dans les véhicules de luxe",
              },
              {
                icon: "🏭",
                title: "Atelier Moderne",
                description:
                  "Équipements de pointe et diagnostic dernière génération",
              },
              {
                icon: "📦",
                title: "Pièces d'Origine",
                description: "Uniquement des pièces constructeur authentiques",
              },
              {
                icon: "⏰",
                title: "Service Rapide",
                description: "Intervention dans les meilleurs délais",
              },
            ].map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{advantage.icon}</div>
                <h3 className="text-lg font-semibold text-[#0D1B2A] mb-2">
                  {advantage.title}
                </h3>
                <p className="text-[#71797E] text-sm">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-[#F8F8F5] p-8 rounded-2xl">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#0D1B2A] mb-4">
              Besoin d'une Intervention d'Urgence ?
            </h2>
            <p className="text-[#71797E] mb-6">
              Notre service d'assistance est disponible 24h/24 pour tous vos
              besoins urgents
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="text-2xl mb-2">📞</div>
                <div className="font-semibold text-[#0D1B2A]">
                  Urgence 24h/24
                </div>
                <div className="text-[#71797E]">+33 1 23 45 67 89</div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="text-2xl mb-2">📧</div>
                <div className="font-semibold text-[#0D1B2A]">
                  Email Support
                </div>
                <div className="text-[#71797E]">service@autocar-z.fr</div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="text-2xl mb-2">�</div>
                <div className="font-semibold text-[#0D1B2A]">Atelier</div>
                <div className="text-[#71797E]">123 Rue de Luxe, Paris</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SimplePage>
  );
}
