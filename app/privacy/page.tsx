"use client";

import PageLayout from "../components/PageLayout";
import ContentSection from "../components/ContentSection";
import CardList from "../components/CardList";
import { useState } from "react";

export default function PrivacyPolicy() {
  const [activeTab, setActiveTab] = useState("overview");

  const heroData = {
    title: "Politique de Confidentialité",
    description:
      "Découvrez comment AutoCar'z protège vos données personnelles et respecte votre vie privée avec la plus grande transparence.",
    icon: "🔒",
    features: [
      { text: "Conformité RGPD", color: "bg-green-400" },
      { text: "Données Sécurisées", color: "bg-blue-400" },
      { text: "Transparence Totale", color: "bg-purple-400" },
    ],
  };

  const dataCategories = [
    {
      icon: "👤",
      title: "Données Personnelles",
      items: [
        "Identité",
        "Coordonnées",
        "Documents d'identité",
        "Données financières",
      ],
    },
    {
      icon: "🚗",
      title: "Données Véhicules",
      items: [
        "Préférences",
        "Historique d'achat",
        "Données d'assurance",
        "Informations de financement",
      ],
    },
    {
      icon: "💻",
      title: "Données Techniques",
      items: ["Adresse IP", "Cookies", "Navigation", "Données d'appareil"],
    },
    {
      icon: "📊",
      title: "Données Comportementales",
      items: [
        "Interactions site",
        "Préférences produits",
        "Historique de navigation",
        "Engagement marketing",
      ],
    },
  ];

  const userRights = [
    {
      icon: "👁️",
      title: "Droit d'Accès",
      description: "Consulter vos données personnelles",
    },
    {
      icon: "✏️",
      title: "Droit de Rectification",
      description: "Corriger vos informations",
    },
    {
      icon: "🗑️",
      title: "Droit à l'Effacement",
      description: "Supprimer vos données",
    },
    {
      icon: "📱",
      title: "Droit à la Portabilité",
      description: "Récupérer vos données",
    },
    {
      icon: "⛔",
      title: "Droit d'Opposition",
      description: "Refuser le traitement",
    },
    {
      icon: "⏸️",
      title: "Droit de Limitation",
      description: "Limiter l'utilisation",
    },
  ];

  const securityMeasures = [
    {
      icon: "🔐",
      title: "Chiffrement SSL/TLS",
      description: "Toutes les communications sont chiffrées",
    },
    {
      icon: "🛡️",
      title: "Authentification Multi-facteurs",
      description: "Protection renforcée des comptes",
    },
    {
      icon: "🔄",
      title: "Sauvegardes Régulières",
      description: "Vos données sont sauvegardées quotidiennement",
    },
    {
      icon: "👥",
      title: "Accès Restreint",
      description: "Seul le personnel autorisé accède aux données",
    },
  ];

  const contactData = {
    title: "Questions sur vos Données ?",
    description:
      "Notre équipe de protection des données est là pour vous aider",
    contacts: [
      { icon: "📧", title: "DPO Email", value: "dpo@autocarz.com" },
      { icon: "📋", title: "Demande RGPD", value: "privacy@autocarz.com" },
      { icon: "📞", title: "Support", value: "+33 1 XX XX XX XX" },
    ],
  };

  const tabs = [
    { id: "overview", title: "Vue d'ensemble", icon: "📋" },
    { id: "data", title: "Données Collectées", icon: "📊" },
    { id: "rights", title: "Vos Droits", icon: "⚖️" },
    { id: "security", title: "Sécurité", icon: "🔒" },
  ];

  return (
    <PageLayout hero={heroData} contactProps={contactData}>
      {/* Tab Navigation */}
      <div className="mb-8">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? "bg-[#FFD700] text-[#0D1B2A] font-semibold"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <span>{tab.icon}</span>
                {tab.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === "overview" && (
        <div className="grid lg:grid-cols-2 gap-8">
          <ContentSection title="Notre Engagement" icon="🤝">
            <p>
              AutoCar'z s'engage à protéger votre vie privée et à traiter vos
              données personnelles avec le plus grand soin. Cette politique
              explique comment nous collectons, utilisons et protégeons vos
              informations.
            </p>
            <p>
              Nous respectons scrupuleusement le Règlement Général sur la
              Protection des Données (RGPD) et toutes les réglementations
              applicables en matière de protection des données.
            </p>
          </ContentSection>

          <ContentSection title="Finalités du Traitement" icon="🎯">
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#FFD700] rounded-full"></span>
                Gestion de votre compte client
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#FFD700] rounded-full"></span>
                Traitement de vos commandes
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#FFD700] rounded-full"></span>
                Amélioration de nos services
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#FFD700] rounded-full"></span>
                Communication marketing (avec consentement)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#FFD700] rounded-full"></span>
                Respect des obligations légales
              </li>
            </ul>
          </ContentSection>
        </div>
      )}

      {activeTab === "data" && (
        <div>
          <ContentSection
            title="Types de Données Collectées"
            icon="📊"
            className="mb-8"
          >
            <p>
              Nous collectons différents types de données selon vos interactions
              avec nos services. Voici un aperçu détaillé des catégories de
              données que nous pouvons collecter :
            </p>
          </ContentSection>
          <CardList items={dataCategories} />
        </div>
      )}

      {activeTab === "rights" && (
        <div>
          <ContentSection title="Vos Droits RGPD" icon="⚖️" className="mb-8">
            <p>
              Conformément au RGPD, vous disposez de plusieurs droits concernant
              vos données personnelles. Vous pouvez exercer ces droits à tout
              moment en nous contactant.
            </p>
          </ContentSection>
          <CardList items={userRights} columns={3} />
        </div>
      )}

      {activeTab === "security" && (
        <div>
          <ContentSection
            title="Mesures de Sécurité"
            icon="🔒"
            className="mb-8"
          >
            <p>
              La sécurité de vos données est notre priorité absolue. Nous
              mettons en place des mesures techniques et organisationnelles
              appropriées pour protéger vos informations personnelles.
            </p>
          </ContentSection>
          <CardList items={securityMeasures} />

          <div className="mt-8 bg-gradient-to-r from-[#FFD700]/10 to-[#E6B800]/10 border border-[#FFD700]/20 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#FFD700] text-2xl">🛡️</span>
              <h4 className="font-bold text-[#0D1B2A] text-lg">
                Certification ISO 27001
              </h4>
            </div>
            <p className="text-[#71797E]">
              AutoCar'z est certifié ISO 27001 pour la gestion de la sécurité de
              l'information, garantissant les plus hauts standards de protection
              de vos données.
            </p>
          </div>
        </div>
      )}
    </PageLayout>
  );
}
