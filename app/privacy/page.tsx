/**
 * PRIVACY POLICY PAGE FOR AUTOCARZ
 *
 * ===== PAGE OVERVIEW =====
 * Comprehensive GDPR-compliant privacy policy specifically designed for
 * the automotive industry. Provides transparent information about data
 * collection, processing, and user rights.
 *
 * ===== LAYOUT STRUCTURE =====
 * 1. Hero Section - Page introduction with privacy themes
 * 2. Interactive Tabs - Different policy sections
 * 3. Data Categories - Visual representation of data types
 * 4. Privacy Rights - User rights under GDPR
 * 5. Contact Information - Privacy officer details
 *
 * ===== LEGAL COMPLIANCE =====
 * - GDPR Article 13 & 14 compliance (Transparency)
 * - Clear data processing purposes
 * - User rights clearly explained
 * - Contact information for privacy queries
 * - Regular review and update procedures
 *
 * ===== DESIGN FEATURES =====
 * - Tab-based navigation for easy content discovery
 * - Icon-based data categories for visual clarity
 * - Interactive elements with hover states
 * - Mobile-responsive layout
 * - Consistent AutoCar'z branding
 *
 * ===== FUNCTIONALITY =====
 * - State management for active tab selection
 * - Smooth transitions between content sections
 * - Expandable content areas
 * - Contact forms integration ready
 * - Print-friendly styling considerations
 */
"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { useState } from "react";

export default function PrivacyPolicy() {
  const [activeTab, setActiveTab] = useState("overview");

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
      desc: "Obtenir une copie de toutes vos données personnelles",
      action: "Demander l'accès",
    },
    {
      icon: "✏️",
      title: "Droit de Rectification",
      desc: "Corriger ou mettre à jour vos informations",
      action: "Modifier mes données",
    },
    {
      icon: "🗑️",
      title: "Droit à l'Effacement",
      desc: "Supprimer vos données dans certaines conditions",
      action: "Demander la suppression",
    },
    {
      icon: "📦",
      title: "Droit à la Portabilité",
      desc: "Récupérer vos données dans un format structuré",
      action: "Exporter mes données",
    },
    {
      icon: "⛔",
      title: "Droit d'Opposition",
      desc: "S'opposer au traitement pour des raisons légitimes",
      action: "Faire opposition",
    },
    {
      icon: "⏸️",
      title: "Droit à la Limitation",
      desc: "Limiter le traitement dans certaines situations",
      action: "Limiter le traitement",
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-[#0D1B2A] via-[#1a2a3a] to-[#0D1B2A] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 bg-[#FFD700]/10 backdrop-blur-sm border border-[#FFD700]/20 rounded-full px-6 py-2 mb-6">
            <span className="text-[#FFD700]">🔒</span>
            <span className="text-[#FFD700] text-sm font-medium">
              Protection des Données
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#FFD700] bg-clip-text text-transparent">
            Politique de Confidentialité
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Votre vie privée est notre priorité. Découvrez comment nous
            protégeons et utilisons vos données personnelles en toute
            transparence.
          </p>
          <div className="flex items-center justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              Conforme RGPD
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              Certifié CNIL
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              ISO 27001
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="bg-[#F8F8F5] py-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Tab Navigation */}
          <div className="bg-white rounded-2xl shadow-lg p-2 mb-8 border border-gray-100">
            <div className="flex flex-wrap gap-2">
              {[
                { id: "overview", label: "Vue d'ensemble", icon: "📋" },
                { id: "collection", label: "Collecte de Données", icon: "📥" },
                { id: "usage", label: "Utilisation", icon: "⚙️" },
                { id: "rights", label: "Vos Droits", icon: "⚖️" },
                { id: "security", label: "Sécurité", icon: "🛡️" },
                { id: "contact", label: "Contact", icon: "📞" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-sm transition-all ${
                    activeTab === tab.id
                      ? "bg-[#FFD700] text-[#0D1B2A] shadow-md"
                      : "text-[#71797E] hover:bg-[#F8F8F5]"
                  }`}
                >
                  <span>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-[#0D1B2A] mb-4">
                    Introduction à Notre Politique
                  </h2>
                  <p className="text-[#71797E] text-lg leading-relaxed">
                    AutoCar'z s'engage à protéger votre vie privée avec le plus
                    haut niveau de sécurité. Cette politique explique de manière
                    transparente comment nous collectons, utilisons et
                    protégeons vos informations personnelles.
                  </p>
                </div>

                {/* Key Principles */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {[
                    {
                      icon: "🔒",
                      title: "Sécurité",
                      desc: "Chiffrement avancé de toutes vos données",
                    },
                    {
                      icon: "🎯",
                      title: "Transparence",
                      desc: "Information claire sur l'usage de vos données",
                    },
                    {
                      icon: "✋",
                      title: "Contrôle",
                      desc: "Vous gardez le contrôle total sur vos informations",
                    },
                    {
                      icon: "⚖️",
                      title: "Légalité",
                      desc: "Respect strict du RGPD et de la réglementation",
                    },
                  ].map((principle, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-[#F8F8F5] to-white border border-gray-200 rounded-xl p-6 text-center"
                    >
                      <div className="text-3xl mb-3">{principle.icon}</div>
                      <h4 className="font-bold text-[#0D1B2A] mb-2">
                        {principle.title}
                      </h4>
                      <p className="text-sm text-[#71797E]">{principle.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Quick Stats */}
                <div className="bg-gradient-to-r from-[#FFD700]/10 to-[#E6B800]/10 border border-[#FFD700]/20 rounded-xl p-6">
                  <h4 className="font-bold text-[#0D1B2A] mb-4 text-center">
                    Notre Engagement en Chiffres
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#FFD700]">
                        24h
                      </div>
                      <div className="text-sm text-[#71797E]">
                        Réponse aux demandes
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#FFD700]">
                        256-bit
                      </div>
                      <div className="text-sm text-[#71797E]">
                        Chiffrement SSL
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#FFD700]">
                        100%
                      </div>
                      <div className="text-sm text-[#71797E]">
                        Conformité RGPD
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#FFD700]">0</div>
                      <div className="text-sm text-[#71797E]">
                        Vente de données
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Data Collection Tab */}
            {activeTab === "collection" && (
              <div className="p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-[#0D1B2A] mb-4">
                    Données que Nous Collectons
                  </h2>
                  <p className="text-[#71797E] text-lg">
                    Nous collectons uniquement les données nécessaires pour vous
                    offrir le meilleur service et personnaliser votre expérience
                    AutoCar'z.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {dataCategories.map((category, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-[#F8F8F5] to-white border border-gray-200 rounded-xl p-6"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="text-2xl">{category.icon}</div>
                        <h4 className="font-bold text-[#0D1B2A]">
                          {category.title}
                        </h4>
                      </div>
                      <ul className="space-y-2">
                        {category.items.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-sm text-[#71797E]"
                          >
                            <span className="w-1 h-1 bg-[#FFD700] rounded-full"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Collection Methods */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
                  <h4 className="font-bold text-[#0D1B2A] mb-4 flex items-center gap-2">
                    <span className="text-blue-500">📊</span>
                    Méthodes de Collecte
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-[#0D1B2A] mb-2">
                        Directement
                      </h5>
                      <p className="text-xs text-[#71797E]">
                        Formulaires, comptes clients, communications
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-[#0D1B2A] mb-2">
                        Automatiquement
                      </h5>
                      <p className="text-xs text-[#71797E]">
                        Cookies, logs serveur, analytics
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-[#0D1B2A] mb-2">
                        Partenaires
                      </h5>
                      <p className="text-xs text-[#71797E]">
                        Organismes de financement, assureurs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Usage Tab */}
            {activeTab === "usage" && (
              <div className="p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-[#0D1B2A] mb-4">
                    Utilisation de Vos Données
                  </h2>
                  <p className="text-[#71797E] text-lg">
                    Nous utilisons vos données de manière responsable et
                    transparente pour améliorer continuellement votre expérience
                    client.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      title: "Services Principaux",
                      icon: "🎯",
                      color: "green",
                      items: [
                        "Traitement des commandes et ventes",
                        "Services de financement personnalisés",
                        "Support client et assistance technique",
                        "Livraison et services concierge",
                      ],
                    },
                    {
                      title: "Communication Marketing",
                      icon: "📢",
                      color: "blue",
                      items: [
                        "Offres personnalisées selon vos préférences",
                        "Newsletters et actualités automobiles",
                        "Invitations à des événements exclusifs",
                        "Rappels de maintenance et services",
                      ],
                    },
                    {
                      title: "Amélioration Continue",
                      icon: "📈",
                      color: "purple",
                      items: [
                        "Analyse de l'expérience utilisateur",
                        "Développement de nouveaux services",
                        "Personnalisation de l'interface",
                        "Optimisation des processus",
                      ],
                    },
                  ].map((usage, index) => (
                    <div
                      key={index}
                      className={`bg-gradient-to-br from-${usage.color}-50 to-${usage.color}-100 border border-${usage.color}-200 rounded-xl p-6`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="text-2xl">{usage.icon}</div>
                        <h4 className="font-bold text-[#0D1B2A]">
                          {usage.title}
                        </h4>
                      </div>
                      <div className="grid md:grid-cols-2 gap-2">
                        {usage.items.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-sm text-[#71797E]"
                          >
                            <span className="w-1 h-1 bg-[#FFD700] rounded-full"></span>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Rights Tab */}
            {activeTab === "rights" && (
              <div className="p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-[#0D1B2A] mb-4">
                    Vos Droits RGPD
                  </h2>
                  <p className="text-[#71797E] text-lg">
                    Conformément au RGPD, vous disposez de droits étendus sur
                    vos données personnelles. Nous facilitons l'exercice de ces
                    droits.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {userRights.map((right, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-[#F8F8F5] to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                    >
                      <div className="text-3xl mb-3">{right.icon}</div>
                      <h4 className="font-bold text-[#0D1B2A] mb-2">
                        {right.title}
                      </h4>
                      <p className="text-sm text-[#71797E] mb-4">
                        {right.desc}
                      </p>
                      <button className="w-full bg-[#FFD700] hover:bg-[#E6B800] text-[#0D1B2A] font-medium py-2 px-4 rounded-lg text-sm transition-colors">
                        {right.action}
                      </button>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-gradient-to-r from-[#FFD700]/10 to-[#E6B800]/10 border border-[#FFD700]/20 rounded-xl p-6">
                  <h4 className="font-bold text-[#0D1B2A] mb-4 flex items-center gap-2">
                    <span className="text-[#FFD700]">⏱️</span>
                    Délais de Traitement
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-xl font-bold text-[#FFD700]">
                        24h
                      </div>
                      <div className="text-sm text-[#71797E]">
                        Accusé de réception
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-[#FFD700]">
                        30 jours
                      </div>
                      <div className="text-sm text-[#71797E]">
                        Traitement maximum
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-[#FFD700]">
                        Gratuit
                      </div>
                      <div className="text-sm text-[#71797E]">
                        Première demande
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === "security" && (
              <div className="p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-[#0D1B2A] mb-4">
                    Sécurité et Protection
                  </h2>
                  <p className="text-[#71797E] text-lg">
                    Nous mettons en œuvre les mesures de sécurité les plus
                    avancées pour protéger vos données contre tout accès non
                    autorisé.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-bold text-[#0D1B2A] mb-4 flex items-center gap-2">
                      <span className="text-blue-500">🔧</span>
                      Mesures Techniques
                    </h4>
                    <div className="space-y-3">
                      {[
                        "Chiffrement SSL/TLS 256-bit pour toutes les transmissions",
                        "Serveurs sécurisés avec pare-feu avancé",
                        "Sauvegardes automatiques et redondantes",
                        "Surveillance 24h/7j des systèmes",
                        "Tests de pénétration réguliers",
                        "Authentification multi-facteurs",
                      ].map((measure, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-sm text-[#71797E]"
                        >
                          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                          {measure}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#0D1B2A] mb-4 flex items-center gap-2">
                      <span className="text-purple-500">👥</span>
                      Mesures Organisationnelles
                    </h4>
                    <div className="space-y-3">
                      {[
                        "Formation continue du personnel",
                        "Accès limité selon le principe du moindre privilège",
                        "Audits de sécurité trimestriels",
                        "Procédures d'incident documentées",
                        "Clauses de confidentialité strictes",
                        "Certification ISO 27001",
                      ].map((measure, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-sm text-[#71797E]"
                        >
                          <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                          {measure}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Certifications */}
                <div className="bg-gradient-to-br from-gray-50 to-slate-50 border border-gray-200 rounded-xl p-6">
                  <h4 className="font-bold text-[#0D1B2A] mb-4 text-center">
                    Certifications et Conformité
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { name: "RGPD", desc: "Règlement Européen" },
                      { name: "ISO 27001", desc: "Sécurité Information" },
                      { name: "CNIL", desc: "Autorité Française" },
                      { name: "SOC 2", desc: "Contrôles Sécurité" },
                    ].map((cert, index) => (
                      <div
                        key={index}
                        className="text-center bg-white p-3 rounded-lg"
                      >
                        <div className="font-semibold text-[#0D1B2A] text-sm">
                          {cert.name}
                        </div>
                        <div className="text-xs text-[#71797E]">
                          {cert.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Contact Tab */}
            {activeTab === "contact" && (
              <div className="p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-[#0D1B2A] mb-4">
                    Contact DPO
                  </h2>
                  <p className="text-[#71797E] text-lg">
                    Notre Délégué à la Protection des Données est à votre
                    disposition pour toutes vos questions relatives à la
                    confidentialité.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-[#F8F8F5] to-white border border-gray-200 rounded-xl p-6">
                    <h4 className="font-bold text-[#0D1B2A] mb-4 flex items-center gap-2">
                      <span className="text-[#FFD700]">👨‍💼</span>
                      Délégué à la Protection des Données
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-blue-500">📧</span>
                        <div>
                          <div className="font-medium text-[#0D1B2A]">
                            Email
                          </div>
                          <div className="text-sm text-[#71797E]">
                            dpo@autocarz.com
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-green-500">📞</span>
                        <div>
                          <div className="font-medium text-[#0D1B2A]">
                            Téléphone
                          </div>
                          <div className="text-sm text-[#71797E]">
                            +33 1 XX XX XX XX
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-purple-500">📍</span>
                        <div>
                          <div className="font-medium text-[#0D1B2A]">
                            Adresse
                          </div>
                          <div className="text-sm text-[#71797E]">
                            123 Avenue des Champs-Élysées
                            <br />
                            75008 Paris, France
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-6">
                    <h4 className="font-bold text-[#0D1B2A] mb-4 flex items-center gap-2">
                      <span className="text-amber-500">⚖️</span>
                      Recours et Plaintes
                    </h4>
                    <p className="text-sm text-[#71797E] mb-4">
                      Si vous n'êtes pas satisfait de notre réponse, vous pouvez
                      saisir l'autorité de contrôle compétente :
                    </p>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="font-medium text-[#0D1B2A]">CNIL</div>
                      <div className="text-sm text-[#71797E]">
                        Commission Nationale de l'Informatique et des Libertés
                      </div>
                      <div className="text-sm text-[#71797E]">
                        3 Place de Fontenoy, 75007 Paris
                      </div>
                      <div className="text-sm text-[#71797E]">www.cnil.fr</div>
                    </div>
                  </div>
                </div>

                {/* Quick Contact Form */}
                <div className="mt-8 bg-gradient-to-r from-[#0D1B2A] to-[#1a2a3a] text-white rounded-xl p-6">
                  <h4 className="font-bold mb-4 text-center">Contact Rapide</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <button className="bg-[#FFD700] text-[#0D1B2A] py-2 px-4 rounded-lg font-medium hover:bg-[#E6B800] transition-colors">
                      Exercer mes droits
                    </button>
                    <button className="bg-white/10 backdrop-blur-sm py-2 px-4 rounded-lg font-medium hover:bg-white/20 transition-colors">
                      Poser une question
                    </button>
                    <button className="bg-white/10 backdrop-blur-sm py-2 px-4 rounded-lg font-medium hover:bg-white/20 transition-colors">
                      Signaler un problème
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
