/**
 * COOKIE POLICY PAGE FOR AUTOCARZ
 *
 * ===== PAGE OVERVIEW =====
 * Interactive cookie policy with comprehensive consent management system.
 * Provides transparency about cookie usage while maintaining elegant
 * AutoCar'z luxury branding throughout the user experience.
 *
 * ===== LAYOUT STRUCTURE =====
 * 1. Hero Section - Cookie-themed introduction with brand consistency
 * 2. Cookie Preference Center - Interactive consent management
 * 3. Cookie Categories - Detailed breakdown by type and purpose
 * 4. Information Sections - Educational content about cookies
 * 5. Contact Section - Support for cookie-related questions
 *
 * ===== COOKIE CATEGORIES =====
 * Four main categories with full transparency:
 * 1. Essential Cookies (Required) - Session, security, authentication
 * 2. Analytics Cookies (Optional) - Google Analytics, Hotjar tracking
 * 3. Marketing Cookies (Optional) - Facebook Pixel, Google Ads, LinkedIn
 * 4. Preference Cookies (Optional) - Theme, language, layout settings
 *
 * ===== INTERACTIVE FEATURES =====
 * - Dynamic cookie preference toggles
 * - Expandable category details with tables
 * - Real-time preference state management
 * - Save preferences functionality
 * - Individual cookie purpose explanations
 *
 * ===== LEGAL COMPLIANCE =====
 * - GDPR Article 7 (Consent) compliance
 * - ePrivacy Directive adherence
 * - Clear opt-in/opt-out mechanisms
 * - Granular consent controls
 * - Third-party service transparency
 * - Cookie duration and provider information
 *
 * ===== DESIGN SYSTEM =====
 * - Consistent AutoCar'z branding (#FFD700 gold, #0D1B2A navy)
 * - Card-based layout for easy scanning
 * - Color-coded category indicators
 * - Responsive grid layouts
 * - Smooth transitions and hover states
 * - Table-based cookie details for clarity
 *
 * ===== STATE MANAGEMENT =====
 * - activeCategory: Controls which cookie category is expanded
 * - cookiePreferences: Manages user consent choices
 * - toggleCookiePreference: Function to update preferences
 * - savePreferences: Persists user choices (placeholder for real implementation)
 *
 * ===== TECHNICAL IMPLEMENTATION =====
 * - React useState for preference management
 * - Conditional rendering for expanded content
 * - Browser-specific cookie management instructions
 * - Third-party service policy links
 * - Dynamic timestamp for last updated date
 */
"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { useState } from "react";

export default function CookiePolicy() {
  const [activeCategory, setActiveCategory] = useState("essential");
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });

  const cookieCategories = [
    {
      id: "essential",
      name: "Cookies Essentiels",
      icon: "🔒",
      description: "Indispensables au fonctionnement du site",
      required: true,
      color: "red",
      cookies: [
        {
          name: "session_id",
          purpose: "Maintenir votre session de navigation active",
          duration: "Session",
          provider: "AutoCar'z",
        },
        {
          name: "csrf_token",
          purpose: "Protection contre les attaques de sécurité CSRF",
          duration: "Session",
          provider: "AutoCar'z",
        },
        {
          name: "cookie_consent",
          purpose: "Mémoriser vos préférences de cookies",
          duration: "1 an",
          provider: "AutoCar'z",
        },
        {
          name: "auth_token",
          purpose: "Authentification sécurisée de votre compte",
          duration: "30 jours",
          provider: "AutoCar'z",
        },
      ],
    },
    {
      id: "analytics",
      name: "Cookies Analytiques",
      icon: "📊",
      description: "Nous aident à comprendre l'utilisation du site",
      required: false,
      color: "blue",
      cookies: [
        {
          name: "_ga",
          purpose: "Google Analytics - Identifier les visiteurs uniques",
          duration: "2 ans",
          provider: "Google",
        },
        {
          name: "_gid",
          purpose: "Google Analytics - Identifier les sessions quotidiennes",
          duration: "24 heures",
          provider: "Google",
        },
        {
          name: "_gat_gtag",
          purpose: "Google Analytics - Contrôler le taux de requête",
          duration: "1 minute",
          provider: "Google",
        },
        {
          name: "hotjar_session",
          purpose: "Hotjar - Analyse comportementale des utilisateurs",
          duration: "Session",
          provider: "Hotjar",
        },
      ],
    },
    {
      id: "marketing",
      name: "Cookies Marketing",
      icon: "🎯",
      description: "Personnalisation publicitaire et remarketing",
      required: false,
      color: "green",
      cookies: [
        {
          name: "fb_pixel",
          purpose: "Facebook Pixel - Suivi des conversions publicitaires",
          duration: "90 jours",
          provider: "Meta",
        },
        {
          name: "google_ads",
          purpose: "Google Ads - Remarketing et mesure de performance",
          duration: "90 jours",
          provider: "Google",
        },
        {
          name: "linkedin_insights",
          purpose: "LinkedIn - Publicité ciblée professionnelle",
          duration: "180 jours",
          provider: "LinkedIn",
        },
      ],
    },
    {
      id: "preferences",
      name: "Cookies de Préférences",
      icon: "⚙️",
      description: "Personnalisation de votre expérience",
      required: false,
      color: "purple",
      cookies: [
        {
          name: "theme_preference",
          purpose: "Mémoriser votre thème d'affichage préféré",
          duration: "1 an",
          provider: "AutoCar'z",
        },
        {
          name: "language_preference",
          purpose: "Mémoriser votre langue de navigation",
          duration: "1 an",
          provider: "AutoCar'z",
        },
        {
          name: "currency_preference",
          purpose: "Mémoriser votre devise préférée",
          duration: "6 mois",
          provider: "AutoCar'z",
        },
        {
          name: "layout_preference",
          purpose: "Mémoriser vos préférences d'interface",
          duration: "1 an",
          provider: "AutoCar'z",
        },
      ],
    },
  ];

  const toggleCookiePreference = (category: string) => {
    if (category !== "essential") {
      setCookiePreferences((prev) => ({
        ...prev,
        [category]: !prev[category as keyof typeof prev],
      }));
    }
  };

  const savePreferences = () => {
    // In a real app, this would save to localStorage or send to server
    alert("Préférences sauvegardées avec succès !");
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-[#0D1B2A] via-[#1a2a3a] to-[#0D1B2A] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 bg-[#FFD700]/10 backdrop-blur-sm border border-[#FFD700]/20 rounded-full px-6 py-2 mb-6">
            <span className="text-[#FFD700]">🍪</span>
            <span className="text-[#FFD700] text-sm font-medium">
              Gestion des Cookies
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#FFD700] bg-clip-text text-transparent">
            Politique des Cookies
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Gérez vos préférences de cookies en toute transparence. Découvrez
            comment nous utilisons les cookies pour améliorer votre expérience
            AutoCar'z.
          </p>
          <div className="flex items-center justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              Contrôle Total
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              Transparence
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              Conformité RGPD
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="bg-[#F8F8F5] py-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Cookie Preference Center */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-[#0D1B2A] to-[#1a2a3a] text-white p-6">
              <h2 className="text-2xl font-bold mb-2">
                Centre de Préférences des Cookies
              </h2>
              <p className="text-gray-300">
                Personnalisez votre expérience de navigation selon vos
                préférences
              </p>
            </div>

            <div className="p-6">
              <div className="grid gap-4">
                {cookieCategories.map((category) => (
                  <div
                    key={category.id}
                    className={`border-2 rounded-xl overflow-hidden transition-all ${
                      activeCategory === category.id
                        ? `border-${category.color}-400 shadow-lg`
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div
                      className={`p-4 cursor-pointer ${
                        activeCategory === category.id
                          ? `bg-${category.color}-50`
                          : "bg-gray-50 hover:bg-gray-100"
                      } transition-colors`}
                      onClick={() => setActiveCategory(category.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{category.icon}</span>
                          <div>
                            <h4 className="font-bold text-[#0D1B2A]">
                              {category.name}
                            </h4>
                            <p className="text-sm text-[#71797E]">
                              {category.description}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          {category.required ? (
                            <span className="bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded-full">
                              Obligatoire
                            </span>
                          ) : (
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={
                                  cookiePreferences[
                                    category.id as keyof typeof cookiePreferences
                                  ]
                                }
                                onChange={() =>
                                  toggleCookiePreference(category.id)
                                }
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#FFD700]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FFD700]"></div>
                            </label>
                          )}
                          <span
                            className={`transform transition-transform ${
                              activeCategory === category.id ? "rotate-180" : ""
                            }`}
                          >
                            ⌄
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Expanded Content */}
                    {activeCategory === category.id && (
                      <div className="p-6 border-t border-gray-200">
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left py-3 text-[#0D1B2A] font-semibold">
                                  Cookie
                                </th>
                                <th className="text-left py-3 text-[#0D1B2A] font-semibold">
                                  Finalité
                                </th>
                                <th className="text-left py-3 text-[#0D1B2A] font-semibold">
                                  Durée
                                </th>
                                <th className="text-left py-3 text-[#0D1B2A] font-semibold">
                                  Fournisseur
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {category.cookies.map((cookie, index) => (
                                <tr
                                  key={index}
                                  className="border-b last:border-b-0 hover:bg-gray-50"
                                >
                                  <td className="py-3 text-[#0D1B2A] font-medium">
                                    {cookie.name}
                                  </td>
                                  <td className="py-3 text-[#71797E]">
                                    {cookie.purpose}
                                  </td>
                                  <td className="py-3 text-[#71797E]">
                                    <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                                      {cookie.duration}
                                    </span>
                                  </td>
                                  <td className="py-3 text-[#71797E]">
                                    {cookie.provider}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Save Preferences Button */}
              <div className="mt-6 flex justify-center">
                <button
                  onClick={savePreferences}
                  className="bg-[#FFD700] hover:bg-[#E6B800] text-[#0D1B2A] font-bold py-3 px-8 rounded-xl transition-colors shadow-lg"
                >
                  Sauvegarder mes Préférences
                </button>
              </div>
            </div>
          </div>

          {/* Information Sections */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* What are Cookies */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-[#0D1B2A] mb-6 flex items-center gap-2">
                <span className="text-[#FFD700]">🍪</span>
                Qu'est-ce qu'un Cookie ?
              </h3>
              <div className="space-y-4 text-[#71797E] leading-relaxed">
                <p>
                  Les cookies sont de petits fichiers texte stockés sur votre
                  appareil lors de votre visite sur notre site web. Ils
                  permettent au site de reconnaître votre navigateur et de
                  mémoriser certaines informations.
                </p>
                <p>
                  AutoCar'z utilise des cookies pour améliorer votre expérience
                  de navigation, analyser l'utilisation du site et vous proposer
                  du contenu personnalisé.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-[#F8F8F5] p-4 rounded-xl">
                  <h5 className="font-semibold text-[#0D1B2A] mb-2">
                    🔄 Session
                  </h5>
                  <p className="text-sm text-[#71797E]">
                    Supprimés à la fermeture du navigateur
                  </p>
                </div>
                <div className="bg-[#F8F8F5] p-4 rounded-xl">
                  <h5 className="font-semibold text-[#0D1B2A] mb-2">
                    💾 Persistants
                  </h5>
                  <p className="text-sm text-[#71797E]">
                    Restent jusqu'à leur expiration
                  </p>
                </div>
              </div>
            </div>

            {/* Cookie Management */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-[#0D1B2A] mb-6 flex items-center gap-2">
                <span className="text-[#FFD700]">⚙️</span>
                Gestion des Cookies
              </h3>
              <div className="space-y-4 text-[#71797E] leading-relaxed">
                <p>
                  Vous pouvez contrôler et gérer les cookies de plusieurs
                  façons. Veuillez noter que la suppression ou le blocage de
                  cookies peut affecter votre expérience utilisateur.
                </p>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  {
                    browser: "Chrome",
                    path: "Paramètres > Confidentialité et sécurité > Cookies",
                  },
                  {
                    browser: "Firefox",
                    path: "Paramètres > Vie privée et sécurité > Cookies",
                  },
                  {
                    browser: "Safari",
                    path: "Préférences > Confidentialité > Cookies",
                  },
                  {
                    browser: "Edge",
                    path: "Paramètres > Cookies et autorisations de site",
                  },
                ].map((browser, index) => (
                  <div key={index} className="bg-[#F8F8F5] p-3 rounded-lg">
                    <div className="font-semibold text-[#0D1B2A] text-sm">
                      {browser.browser}
                    </div>
                    <div className="text-xs text-[#71797E]">{browser.path}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Third Party Cookies */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-[#0D1B2A] mb-6 flex items-center gap-2">
                <span className="text-[#FFD700]">🔗</span>
                Cookies Tiers
              </h3>
              <div className="space-y-4 text-[#71797E] leading-relaxed">
                <p>
                  Certains cookies sont installés par des services tiers que
                  nous utilisons pour améliorer nos services. Voici les
                  principaux partenaires :
                </p>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  {
                    name: "Google Analytics",
                    purpose: "Analyse d'audience",
                    policy: "policies.google.com",
                  },
                  {
                    name: "Facebook Pixel",
                    purpose: "Publicité ciblée",
                    policy: "facebook.com/privacy",
                  },
                  {
                    name: "Hotjar",
                    purpose: "Analyse comportementale",
                    policy: "hotjar.com/privacy",
                  },
                ].map((service, index) => (
                  <div key={index} className="bg-[#F8F8F5] p-3 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-semibold text-[#0D1B2A] text-sm">
                          {service.name}
                        </div>
                        <div className="text-xs text-[#71797E]">
                          {service.purpose}
                        </div>
                      </div>
                      <a
                        href={`https://${service.policy}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FFD700] hover:text-[#E6B800] text-xs underline"
                      >
                        Politique
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Updates and Changes */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-[#0D1B2A] mb-6 flex items-center gap-2">
                <span className="text-[#FFD700]">🔄</span>
                Mises à Jour
              </h3>
              <div className="space-y-4 text-[#71797E] leading-relaxed">
                <p>
                  Cette politique des cookies peut être mise à jour
                  périodiquement pour refléter les changements dans nos
                  pratiques ou pour d'autres raisons opérationnelles, légales ou
                  réglementaires.
                </p>
              </div>

              <div className="mt-6 bg-gradient-to-r from-[#FFD700]/10 to-[#E6B800]/10 border border-[#FFD700]/20 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#FFD700]">📅</span>
                  <span className="font-semibold text-[#0D1B2A]">
                    Dernière mise à jour
                  </span>
                </div>
                <p className="text-sm text-[#71797E]">
                  {new Date().toLocaleDateString("fr-FR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-8 bg-gradient-to-r from-[#0D1B2A] to-[#1a2a3a] text-white rounded-2xl p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">
                Questions sur les Cookies ?
              </h3>
              <p className="text-gray-300">
                Notre équipe est là pour vous aider
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#FFD700] rounded-xl flex items-center justify-center mx-auto mb-3">
                  📧
                </div>
                <h5 className="font-semibold mb-1">Email</h5>
                <p className="text-sm text-gray-300">cookies@autocarz.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#FFD700] rounded-xl flex items-center justify-center mx-auto mb-3">
                  🔒
                </div>
                <h5 className="font-semibold mb-1">DPO</h5>
                <p className="text-sm text-gray-300">dpo@autocarz.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#FFD700] rounded-xl flex items-center justify-center mx-auto mb-3">
                  📞
                </div>
                <h5 className="font-semibold mb-1">Support</h5>
                <p className="text-sm text-gray-300">+33 1 XX XX XX XX</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-600 flex flex-wrap justify-center gap-4">
              <Link
                href="/privacy"
                className="text-[#FFD700] hover:text-white transition-colors text-sm"
              >
                Politique de Confidentialité
              </Link>
              <Link
                href="/terms"
                className="text-[#FFD700] hover:text-white transition-colors text-sm"
              >
                Conditions d'Utilisation
              </Link>
              <Link
                href="/contact"
                className="text-[#FFD700] hover:text-white transition-colors text-sm"
              >
                Nous Contacter
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
