import SimplePage from "../../components/SimplePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financement - AutoCar'z",
  description: "Solutions de financement flexibles pour votre véhicule",
};

export default function FinancingPage() {
  return (
    <SimplePage
      title="Solutions de Financement"
      description="Des options de financement flexibles adaptées à vos besoins pour acquérir le véhicule de vos rêves"
      icon="💳"
    >
      <div className="space-y-12">
        {/* Financing Options */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0D1B2A] text-center mb-8">
            Nos Options de Financement
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="text-3xl mb-4 text-center">🏦</div>
              <h3 className="text-xl font-semibold text-[#0D1B2A] mb-3">
                Crédit Classique
              </h3>
              <ul className="space-y-2 text-[#71797E]">
                <li>• Taux compétitifs à partir de 2,9%</li>
                <li>• Durée flexible de 12 à 84 mois</li>
                <li>• Apport personnalisable</li>
                <li>• Remboursement anticipé possible</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="text-3xl mb-4 text-center">🚗</div>
              <h3 className="text-xl font-semibold text-[#0D1B2A] mb-3">
                Leasing
              </h3>
              <ul className="space-y-2 text-[#71797E]">
                <li>• Mensualités réduites</li>
                <li>• Option d'achat en fin de contrat</li>
                <li>• Entretien et assurance inclus</li>
                <li>• Renouvellement régulier du véhicule</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="text-3xl mb-4 text-center">⚡</div>
              <h3 className="text-xl font-semibold text-[#0D1B2A] mb-3">
                Financement Express
              </h3>
              <ul className="space-y-2 text-[#71797E]">
                <li>• Réponse en 24h</li>
                <li>• Dossier simplifié</li>
                <li>• Taux préférentiel</li>
                <li>• Livraison rapide</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="bg-gradient-to-r from-[#F8F8F5] to-white p-8 rounded-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0D1B2A] text-center mb-8">
            Simulateur de Financement
          </h2>
          <div className="max-w-md mx-auto space-y-6">
            <div>
              <label className="block text-sm font-medium text-[#0D1B2A] mb-2">
                Prix du véhicule
              </label>
              <input
                type="text"
                placeholder="50 000 €"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0D1B2A] mb-2">
                Apport initial
              </label>
              <input
                type="text"
                placeholder="10 000 €"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0D1B2A] mb-2">
                Durée (mois)
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent">
                <option>36 mois</option>
                <option>48 mois</option>
                <option>60 mois</option>
                <option>72 mois</option>
              </select>
            </div>
            <button className="w-full px-6 py-3 bg-[#FFD700] text-black rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
              Calculer ma mensualité
            </button>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <div className="bg-[#0D1B2A] text-white p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">
              Besoin d'aide pour votre financement ?
            </h2>
            <p className="text-gray-300 mb-6">
              Nos conseillers financiers sont là pour vous accompagner dans
              votre projet
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-[#FFD700] text-black rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                Prendre rendez-vous
              </button>
              <button className="px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#0D1B2A] transition-colors">
                Appeler maintenant
              </button>
            </div>
          </div>
        </section>
      </div>
    </SimplePage>
  );
}
