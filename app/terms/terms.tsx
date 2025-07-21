/**
 * Terms of Use Page for AutoCar'z
 *
 * Comprehensive terms of service for luxury automotive dealership
 * Professional design with automotive industry focus
 */
"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { useState } from "react";

export default function TermsOfUse() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = [
    { id: "acceptance", title: "Acceptation des Conditions", icon: "📋" },
    { id: "services", title: "Description des Services", icon: "🚗" },
    { id: "vehicle-sales", title: "Vente de Véhicules", icon: "💰" },
    { id: "financing", title: "Services de Financement", icon: "🏦" },
    { id: "warranties", title: "Garanties et SAV", icon: "🛡️" },
    { id: "obligations", title: "Obligations Client", icon: "📝" },
    { id: "liability", title: "Responsabilité", icon: "⚖️" },
    { id: "modifications", title: "Modifications", icon: "🔄" },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-[#0D1B2A] via-[#1a2a3a] to-[#0D1B2A] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 bg-[#FFD700]/10 backdrop-blur-sm border border-[#FFD700]/20 rounded-full px-6 py-2 mb-6">
            <span className="text-[#FFD700]">⚖️</span>
            <span className="text-[#FFD700] text-sm font-medium">
              Document Juridique
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#FFD700] bg-clip-text text-transparent">
            Conditions d'Utilisation
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Cadre juridique complet pour vos achats de véhicules de luxe chez
            AutoCar'z. Transparent, équitable et conforme aux réglementations
            françaises.
          </p>
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              Dernière mise à jour: {new Date().toLocaleDateString("fr-FR")}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              Conforme RGPD
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="bg-[#F8F8F5] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar Navigation */}
            <div className="lg:w-80 lg:sticky lg:top-24 lg:h-fit">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-bold text-[#0D1B2A] mb-6 flex items-center gap-2">
                  <span className="text-[#FFD700]">📑</span>
                  Table des Matières
                </h3>
                <nav className="space-y-2">
                  {sections.map((section, index) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#F8F8F5] transition-colors group"
                      onClick={() => setActiveSection(section.id)}
                    >
                      <span className="text-lg">{section.icon}</span>
                      <div>
                        <div className="text-sm font-medium text-[#0D1B2A] group-hover:text-[#FFD700] transition-colors">
                          {index + 1}. {section.title}
                        </div>
                      </div>
                    </a>
                  ))}
                </nav>

                {/* Quick Actions */}
                <div className="mt-8 p-4 bg-gradient-to-br from-[#FFD700]/10 to-[#E6B800]/10 rounded-xl border border-[#FFD700]/20">
                  <h4 className="font-semibold text-[#0D1B2A] mb-3">
                    Actions Rapides
                  </h4>
                  <div className="space-y-2">
                    <Link
                      href="/contact"
                      className="block text-sm text-[#71797E] hover:text-[#FFD700] transition-colors"
                    >
                      💬 Contacter notre équipe juridique
                    </Link>
                    <Link
                      href="/privacy"
                      className="block text-sm text-[#71797E] hover:text-[#FFD700] transition-colors"
                    >
                      🔒 Politique de confidentialité
                    </Link>
                    <Link
                      href="/cookies"
                      className="block text-sm text-[#71797E] hover:text-[#FFD700] transition-colors"
                    >
                      🍪 Politique des cookies
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                {/* Document Header */}
                <div className="bg-gradient-to-r from-[#0D1B2A] to-[#1a2a3a] text-white p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">
                        AutoCar'z - Conditions Générales
                      </h2>
                      <p className="text-gray-300">
                        Société de vente automobile de luxe
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-[#FFD700] font-semibold">
                        Version 3.2
                      </div>
                      <div className="text-sm text-gray-300">
                        Effective: {new Date().toLocaleDateString("fr-FR")}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  {/* Section 1: Acceptance */}
                  <section id="acceptance" className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#E6B800] rounded-xl flex items-center justify-center text-white font-bold text-lg">
                        1
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-[#0D1B2A]">
                          Acceptation des Conditions
                        </h2>
                        <p className="text-[#71797E]">
                          Cadre d'application et acceptation
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-6">
                      <h4 className="font-semibold text-[#0D1B2A] mb-3 flex items-center gap-2">
                        <span className="text-blue-500">ℹ️</span>
                        Information Importante
                      </h4>
                      <p className="text-[#71797E] text-sm leading-relaxed">
                        En utilisant les services d'AutoCar'z, vous acceptez
                        d'être légalement lié par ces conditions. Veuillez les
                        lire attentivement avant de procéder à tout achat ou
                        utilisation de nos services.
                      </p>
                    </div>

                    <div className="space-y-4 text-[#71797E] leading-relaxed">
                      <p>
                        <strong>AutoCar'z</strong>, société spécialisée dans la
                        vente de véhicules de luxe, met à votre disposition ces
                        conditions d'utilisation qui régissent l'ensemble de nos
                        relations commerciales et services.
                      </p>

                      <div className="grid md:grid-cols-2 gap-6 my-6">
                        <div className="bg-[#F8F8F5] p-4 rounded-xl border-l-4 border-green-400">
                          <h5 className="font-semibold text-[#0D1B2A] mb-2">
                            ✅ Acceptation Implicite
                          </h5>
                          <p className="text-sm">
                            Toute commande ou utilisation de nos services
                            implique votre acceptation complète.
                          </p>
                        </div>
                        <div className="bg-[#F8F8F5] p-4 rounded-xl border-l-4 border-amber-400">
                          <h5 className="font-semibold text-[#0D1B2A] mb-2">
                            ⚠️ Mise à Jour
                          </h5>
                          <p className="text-sm">
                            Ces conditions peuvent être modifiées. La version en
                            vigueur prévaut.
                          </p>
                        </div>
                      </div>

                      <p>
                        Ces conditions s'appliquent à tous nos clients,
                        prospects et visiteurs, qu'ils soient particuliers ou
                        professionnels, sans exception.
                      </p>
                    </div>
                  </section>

                  {/* Section 2: Services */}
                  <section id="services" className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#E6B800] rounded-xl flex items-center justify-center text-white font-bold text-lg">
                        2
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-[#0D1B2A]">
                          Description des Services
                        </h2>
                        <p className="text-[#71797E]">
                          Gamme complète de services automobiles de luxe
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                      {[
                        {
                          icon: "🚗",
                          title: "Vente de Véhicules",
                          desc: "Véhicules neufs et d'occasion de marques premium",
                          features: [
                            "Inspection certifiée",
                            "Historique vérifié",
                            "Garantie incluse",
                          ],
                        },
                        {
                          icon: "💳",
                          title: "Solutions de Financement",
                          desc: "Partenariats bancaires pour tous profils",
                          features: ["Crédit auto", "Leasing", "LOA/LLD"],
                        },
                        {
                          icon: "🛡️",
                          title: "Services Après-Vente",
                          desc: "Maintenance et support client premium",
                          features: [
                            "Maintenance préventive",
                            "Réparations",
                            "Pièces détachées",
                          ],
                        },
                      ].map((service, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-br from-[#F8F8F5] to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                        >
                          <div className="text-3xl mb-3">{service.icon}</div>
                          <h4 className="font-bold text-[#0D1B2A] mb-2">
                            {service.title}
                          </h4>
                          <p className="text-[#71797E] text-sm mb-4">
                            {service.desc}
                          </p>
                          <ul className="space-y-1">
                            {service.features.map((feature, idx) => (
                              <li
                                key={idx}
                                className="text-xs text-[#71797E] flex items-center gap-2"
                              >
                                <span className="w-1 h-1 bg-[#FFD700] rounded-full"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Section 3: Vehicle Sales */}
                  <section id="vehicle-sales" className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#E6B800] rounded-xl flex items-center justify-center text-white font-bold text-lg">
                        3
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-[#0D1B2A]">
                          Conditions de Vente
                        </h2>
                        <p className="text-[#71797E]">
                          Processus d'achat et modalités commerciales
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-gradient-to-r from-[#FFD700]/10 to-[#E6B800]/10 border border-[#FFD700]/20 rounded-xl p-6">
                        <h4 className="font-bold text-[#0D1B2A] mb-4 flex items-center gap-2">
                          <span className="text-[#FFD700]">💰</span>
                          Prix et Modalités de Paiement
                        </h4>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-semibold text-[#0D1B2A] mb-2">
                              Tarification
                            </h5>
                            <ul className="text-sm text-[#71797E] space-y-1">
                              <li>• Prix exprimés en euros TTC</li>
                              <li>• Tarifs valables le jour de la commande</li>
                              <li>• Possibilité de remises selon véhicule</li>
                              <li>• Frais de livraison selon distance</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-[#0D1B2A] mb-2">
                              Paiement
                            </h5>
                            <ul className="text-sm text-[#71797E] space-y-1">
                              <li>• Acompte requis à la commande</li>
                              <li>• Solde à la livraison</li>
                              <li>• Virement bancaire privilégié</li>
                              <li>• Financement disponible</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-6">
                        <h4 className="font-bold text-[#0D1B2A] mb-4">
                          🚚 Processus de Livraison
                        </h4>
                        <div className="grid md:grid-cols-4 gap-4">
                          {[
                            {
                              step: "1",
                              title: "Commande",
                              desc: "Signature du contrat et acompte",
                            },
                            {
                              step: "2",
                              title: "Préparation",
                              desc: "Inspection et mise en conformité",
                            },
                            {
                              step: "3",
                              title: "Livraison",
                              desc: "Transport ou enlèvement",
                            },
                            {
                              step: "4",
                              title: "Remise",
                              desc: "Clés et documents officiels",
                            },
                          ].map((phase, index) => (
                            <div key={index} className="text-center">
                              <div className="w-8 h-8 bg-[#FFD700] text-white rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-2">
                                {phase.step}
                              </div>
                              <h6 className="font-semibold text-[#0D1B2A] text-sm">
                                {phase.title}
                              </h6>
                              <p className="text-xs text-[#71797E]">
                                {phase.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 4: Financing */}
                  <section id="financing" className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#E6B800] rounded-xl flex items-center justify-center text-white font-bold text-lg">
                        4
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-[#0D1B2A]">
                          Services de Financement
                        </h2>
                        <p className="text-[#71797E]">
                          Solutions adaptées à tous les profils
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6 mb-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white">
                          🏦
                        </div>
                        <div>
                          <h4 className="font-bold text-[#0D1B2A] mb-2">
                            Partenaires Financiers Agréés
                          </h4>
                          <p className="text-[#71797E] text-sm mb-3">
                            AutoCar'z travaille exclusivement avec des
                            établissements financiers reconnus pour vous
                            proposer les meilleures conditions de financement.
                          </p>
                          <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-white p-3 rounded-lg">
                              <div className="font-semibold text-[#0D1B2A] text-sm">
                                Crédit Classique
                              </div>
                              <div className="text-xs text-[#71797E]">
                                TAEG à partir de 3,9%
                              </div>
                            </div>
                            <div className="bg-white p-3 rounded-lg">
                              <div className="font-semibold text-[#0D1B2A] text-sm">
                                Leasing
                              </div>
                              <div className="text-xs text-[#71797E]">
                                Location avec option d'achat
                              </div>
                            </div>
                            <div className="bg-white p-3 rounded-lg">
                              <div className="font-semibold text-[#0D1B2A] text-sm">
                                Location Longue Durée
                              </div>
                              <div className="text-xs text-[#71797E]">
                                Service tout inclus
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 5: Warranties */}
                  <section id="warranties" className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#E6B800] rounded-xl flex items-center justify-center text-white font-bold text-lg">
                        5
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-[#0D1B2A]">
                          Garanties et Services
                        </h2>
                        <p className="text-[#71797E]">
                          Protection complète de votre investissement
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
                        <h4 className="font-bold text-[#0D1B2A] mb-4 flex items-center gap-2">
                          <span className="text-green-500">🆕</span>
                          Véhicules Neufs
                        </h4>
                        <ul className="space-y-2 text-sm text-[#71797E]">
                          <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                            Garantie constructeur complète (2-7 ans selon
                            marque)
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                            Garantie légale de conformité (2 ans)
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                            Extension de garantie disponible
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                            Assistance 24h/7j incluse
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-6">
                        <h4 className="font-bold text-[#0D1B2A] mb-4 flex items-center gap-2">
                          <span className="text-amber-500">🔄</span>
                          Véhicules d'Occasion
                        </h4>
                        <ul className="space-y-2 text-sm text-[#71797E]">
                          <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                            Garantie légale minimum 6 mois
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                            Contrôle technique récent
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                            Historique vérifié et certifié
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                            Possibilité d'extension de garantie
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Contact Section */}
                  <section className="mt-16 bg-gradient-to-br from-[#0D1B2A] to-[#1a2a3a] text-white rounded-2xl p-8">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold mb-2">
                        Questions Juridiques ?
                      </h3>
                      <p className="text-gray-300">
                        Notre équipe juridique est à votre disposition
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-[#FFD700] rounded-xl flex items-center justify-center mx-auto mb-3">
                          📧
                        </div>
                        <h5 className="font-semibold mb-1">Email</h5>
                        <p className="text-sm text-gray-300">
                          legal@autocarz.com
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-[#FFD700] rounded-xl flex items-center justify-center mx-auto mb-3">
                          📞
                        </div>
                        <h5 className="font-semibold mb-1">Téléphone</h5>
                        <p className="text-sm text-gray-300">
                          +33 1 XX XX XX XX
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-[#FFD700] rounded-xl flex items-center justify-center mx-auto mb-3">
                          📍
                        </div>
                        <h5 className="font-semibold mb-1">Adresse</h5>
                        <p className="text-sm text-gray-300">
                          123 Av. Champs-Élysées, Paris
                        </p>
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
                        href="/cookies"
                        className="text-[#FFD700] hover:text-white transition-colors text-sm"
                      >
                        Politique des Cookies
                      </Link>
                      <Link
                        href="/contact"
                        className="text-[#FFD700] hover:text-white transition-colors text-sm"
                      >
                        Nous Contacter
                      </Link>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
