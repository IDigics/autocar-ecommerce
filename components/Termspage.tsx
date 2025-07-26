"use client";

import PageLayout from "./PageLayout";
import ContentSection from "./ContentSection";
import CardList from "./CardList";
import { useState } from "react";
export default function Termspage() {
  const [activeSection, setActiveSection] = useState("acceptance");

  const heroData = {
    title: "Conditions d'Utilisation",
    description:
      "Découvrez les conditions qui régissent l'utilisation des services AutoCar'z et nos engagements mutuels.",
    icon: "📋",
    features: [
      { text: "Transparence", color: "bg-green-400" },
      { text: "Protection Juridique", color: "bg-blue-400" },
      { text: "Engagements Clairs", color: "bg-purple-400" },
    ],
  };

  const services = [
    {
      icon: "🚗",
      title: "Vente de Véhicules",
      description: "Véhicules neufs et d'occasion de marques premium",
    },
    {
      icon: "💳",
      title: "Solutions de Financement",
      description: "Partenariats bancaires pour tous profils",
    },
    {
      icon: "🛡️",
      title: "Services Après-Vente",
      description: "Maintenance et support client premium",
    },
  ];

  const obligations = [
    {
      icon: "✅",
      title: "Informations Exactes",
      description: "Fournir des informations véridiques et à jour",
    },
    {
      icon: "💰",
      title: "Paiement en Temps",
      description: "Respecter les échéances de paiement",
    },
    {
      icon: "📋",
      title: "Documents Requis",
      description: "Fournir tous les documents nécessaires",
    },
    {
      icon: "🤝",
      title: "Respect des Conditions",
      description: "Se conformer aux présentes conditions",
    },
  ];

  const warranties = [
    {
      icon: "🛡️",
      title: "Garantie Constructeur",
      description: "Garantie fabricant selon les conditions du constructeur",
    },
    {
      icon: "🔧",
      title: "Garantie AutoCar'z",
      description: "Garantie commerciale complémentaire sur nos véhicules",
    },
    {
      icon: "📞",
      title: "Support Technique",
      description: "Assistance technique et conseil personnalisé",
    },
  ];

  const sections = [
    { id: "acceptance", title: "Acceptation", icon: "📋" },
    { id: "services", title: "Services", icon: "🚗" },
    { id: "obligations", title: "Obligations", icon: "📝" },
    { id: "warranties", title: "Garanties", icon: "🛡️" },
    { id: "liability", title: "Responsabilité", icon: "⚖️" },
  ];

  return (
    <PageLayout hero={heroData}>
      {/* Navigation Sections */}
      <div className="mb-8">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <div className="flex flex-wrap gap-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  activeSection === section.id
                    ? "bg-[#FFD700] text-[#0D1B2A] font-semibold"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <span>{section.icon}</span>
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Section Content */}
      {activeSection === "acceptance" && (
        <div className="grid lg:grid-cols-2 gap-8">
          <ContentSection title="Acceptation des Conditions" icon="📋">
            <p>
              En utilisant les services d'AutoCar'z, vous acceptez d'être lié
              par les présentes conditions d'utilisation. Si vous n'acceptez pas
              ces conditions, veuillez ne pas utiliser nos services.
            </p>
            <p>
              Ces conditions constituent un contrat juridiquement contraignant
              entre vous et AutoCar'z. Elles peuvent être mises à jour
              périodiquement, et nous vous encourageons à les consulter
              régulièrement.
            </p>
          </ContentSection>

          <ContentSection title="Champ d'Application" icon="🎯">
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#FFD700] rounded-full"></span>
                Site web AutoCar'z
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#FFD700] rounded-full"></span>
                Applications mobiles
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#FFD700] rounded-full"></span>
                Services de vente
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#FFD700] rounded-full"></span>
                Services de financement
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#FFD700] rounded-full"></span>
                Services après-vente
              </li>
            </ul>
          </ContentSection>
        </div>
      )}

      {activeSection === "services" && (
        <div>
          <ContentSection
            title="Description des Services"
            icon="🚗"
            className="mb-8"
          >
            <p>
              AutoCar'z propose une gamme complète de services automobiles
              premium, de la vente de véhicules neufs et d'occasion aux
              solutions de financement et services après-vente.
            </p>
          </ContentSection>
          <CardList items={services} columns={3} />
        </div>
      )}

      {activeSection === "obligations" && (
        <div>
          <ContentSection
            title="Obligations du Client"
            icon="📝"
            className="mb-8"
          >
            <p>
              En tant que client d'AutoCar'z, vous vous engagez à respecter
              certaines obligations pour garantir le bon déroulement de nos
              services et maintenir une relation de confiance mutuelle.
            </p>
          </ContentSection>
          <CardList items={obligations} />
        </div>
      )}

      {activeSection === "warranties" && (
        <div>
          <ContentSection
            title="Garanties et Services"
            icon="🛡️"
            className="mb-8"
          >
            <p>
              AutoCar'z s'engage à vous fournir des véhicules de qualité
              accompagnés de garanties complètes et de services après-vente
              exceptionnels.
            </p>
          </ContentSection>
          <CardList items={warranties} columns={3} />

          <div className="mt-8 bg-gradient-to-r from-[#FFD700]/10 to-[#E6B800]/10 border border-[#FFD700]/20 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#FFD700] text-2xl">⭐</span>
              <h4 className="font-bold text-[#0D1B2A] text-lg">
                Engagement Qualité
              </h4>
            </div>
            <p className="text-[#71797E]">
              Tous nos véhicules sont soigneusement sélectionnés et contrôlés
              par nos experts. Nous garantissons la transparence totale sur
              l'état et l'historique de chaque véhicule.
            </p>
          </div>
        </div>
      )}

      {activeSection === "liability" && (
        <div className="grid lg:grid-cols-2 gap-8">
          <ContentSection title="Limitation de Responsabilité" icon="⚖️">
            <p>
              AutoCar'z s'efforce de fournir des services de qualité, mais
              certaines limitations de responsabilité s'appliquent dans le cadre
              légal en vigueur.
            </p>
            <ul className="space-y-2 mt-4">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#FFD700] rounded-full"></span>
                Dommages directs uniquement
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#FFD700] rounded-full"></span>
                Exclusion des dommages indirects
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#FFD700] rounded-full"></span>
                Respect des garanties légales
              </li>
            </ul>
          </ContentSection>

          <ContentSection title="Résolution des Litiges" icon="🤝">
            <p>
              En cas de litige, nous privilégions la résolution amiable. Si
              nécessaire, les tribunaux français sont compétents selon les
              conditions prévues par la loi.
            </p>
            <div className="mt-4 p-4 bg-[#F8F8F5] rounded-lg">
              <h5 className="font-semibold text-[#0D1B2A] mb-2">Médiation</h5>
              <p className="text-sm text-[#71797E]">
                Vous pouvez recourir à une médiation avant toute action
                judiciaire. Contactez notre service client pour plus
                d'informations.
              </p>
            </div>
          </ContentSection>
        </div>
      )}
    </PageLayout>
  );
}
