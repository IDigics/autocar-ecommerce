"use client";
import PageLayout from "../components/PageLayout";
import ContentSection from "../components/ContentSection";
import CardList from "./CardList";
export default function Cookie() {
  const heroData = {
    title: "Politique des Cookies",
    description:
      "Informations sur l'utilisation des cookies sur le site AutoCar'z et comment les gérer dans votre navigateur.",
    icon: "🍪",
    features: [
      { text: "Information Transparente", color: "bg-green-400" },
      { text: "Contrôle Browser", color: "bg-blue-400" },
      { text: "Conformité RGPD", color: "bg-purple-400" },
    ],
  };

  const cookieTypes = [
    {
      icon: "🔒",
      title: "Cookies Essentiels",
      description: "Nécessaires au fonctionnement du site",
      items: [
        "Session de navigation",
        "Sécurité CSRF",
        "Authentification",
        "Préférences langue",
      ],
    },
    {
      icon: "📊",
      title: "Cookies Analytiques",
      description: "Pour comprendre l'utilisation du site",
      items: [
        "Google Analytics",
        "Statistiques de visite",
        "Analyse comportementale",
        "Optimisation UX",
      ],
    },
    {
      icon: "🎯",
      title: "Cookies Marketing",
      description: "Pour la publicité personnalisée",
      items: [
        "Facebook Pixel",
        "Google Ads",
        "Remarketing",
        "Publicité ciblée",
      ],
    },
  ];

  const browserSettings = [
    {
      icon: "🌐",
      title: "Chrome",
      description:
        "Paramètres > Confidentialité et sécurité > Cookies et autres données de sites",
    },
    {
      icon: "🦊",
      title: "Firefox",
      description:
        "Paramètres > Vie privée et sécurité > Cookies et données de sites",
    },
    {
      icon: "🧭",
      title: "Safari",
      description:
        "Préférences > Confidentialité > Gérer les données de sites web",
    },
    {
      icon: "🔷",
      title: "Edge",
      description: "Paramètres > Cookies et autorisations de site",
    },
  ];

  const thirdPartyInfo = [
    {
      icon: "📈",
      title: "Google Analytics",
      description:
        "Analyse du trafic et du comportement des utilisateurs - policies.google.com",
    },
    {
      icon: "📘",
      title: "Facebook Pixel",
      description: "Suivi des conversions publicitaires - facebook.com/privacy",
    },
    {
      icon: "🔥",
      title: "Hotjar",
      description:
        "Enregistrements de session et cartes de chaleur - hotjar.com/privacy",
    },
  ];

  return (
    <PageLayout hero={heroData}>
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        <ContentSection title="Qu'est-ce qu'un Cookie ?" icon="🍪">
          <p>
            Les cookies sont de petits fichiers texte stockés sur votre appareil
            lorsque vous visitez notre site web. Ils permettent au site de se
            souvenir de vos actions et préférences.
          </p>
          <p>
            AutoCar'z utilise les cookies pour améliorer votre expérience de
            navigation, analyser l'utilisation du site et vous proposer du
            contenu pertinent.
          </p>
          <div className="mt-6 p-4 bg-[#FFD700]/10 border border-[#FFD700]/20 rounded-lg">
            <h5 className="font-semibold text-[#0D1B2A] mb-2">
              📝 Note Importante
            </h5>
            <p className="text-sm text-[#71797E]">
              Vous pouvez contrôler et supprimer les cookies via les paramètres
              de votre navigateur à tout moment.
            </p>
          </div>
        </ContentSection>

        <ContentSection title="Pourquoi Utilisons-nous des Cookies ?" icon="🎯">
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-[#FFD700] rounded-full mt-2"></span>
              <div>
                <strong>Fonctionnement du site :</strong> Pour maintenir votre
                session et assurer la sécurité
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-[#FFD700] rounded-full mt-2"></span>
              <div>
                <strong>Amélioration de l'expérience :</strong> Pour mémoriser
                vos préférences
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-[#FFD700] rounded-full mt-2"></span>
              <div>
                <strong>Analyse du trafic :</strong> Pour comprendre comment
                vous utilisez le site
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-[#FFD700] rounded-full mt-2"></span>
              <div>
                <strong>Publicité pertinente :</strong> Pour vous proposer des
                offres adaptées
              </div>
            </li>
          </ul>
        </ContentSection>
      </div>

      <ContentSection
        title="Types de Cookies Utilisés"
        icon="📋"
        className="mb-8"
      >
        <p className="mb-6">
          Voici les différents types de cookies que nous utilisons sur notre
          site :
        </p>
      </ContentSection>

      <CardList items={cookieTypes} columns={3} />

      <div className="mt-8 grid lg:grid-cols-2 gap-8">
        <ContentSection title="Comment Gérer les Cookies ?" icon="⚙️">
          <p className="mb-4">
            Vous avez le contrôle total sur les cookies. Voici comment les gérer
            dans les principaux navigateurs :
          </p>
          <div className="space-y-3">
            {browserSettings.map((browser, index) => (
              <div key={index} className="bg-[#F8F8F5] p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">{browser.icon}</span>
                  <span className="font-semibold text-[#0D1B2A]">
                    {browser.title}
                  </span>
                </div>
                <p className="text-sm text-[#71797E]">{browser.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-800">
              ⚠️ <strong>Attention :</strong> Désactiver certains cookies peut
              affecter le fonctionnement du site.
            </p>
          </div>
        </ContentSection>

        <ContentSection title="Services Tiers" icon="🔗">
          <p className="mb-4">
            Nous utilisons des services tiers qui peuvent également placer des
            cookies :
          </p>
          <div className="space-y-3">
            {thirdPartyInfo.map((service, index) => (
              <div key={index} className="bg-[#F8F8F5] p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">{service.icon}</span>
                  <span className="font-semibold text-[#0D1B2A]">
                    {service.title}
                  </span>
                </div>
                <p className="text-sm text-[#71797E]">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              💡 <strong>Conseil :</strong> Consultez les politiques de
              confidentialité de ces services pour plus d'informations.
            </p>
          </div>
        </ContentSection>
      </div>

      <div className="mt-8">
        <ContentSection title="Durée de Conservation" icon="⏱️">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-[#F8F8F5] p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">🔄</div>
              <h5 className="font-semibold text-[#0D1B2A] mb-1">Session</h5>
              <p className="text-sm text-[#71797E]">
                Supprimés à la fermeture du navigateur
              </p>
            </div>
            <div className="bg-[#F8F8F5] p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">📅</div>
              <h5 className="font-semibold text-[#0D1B2A] mb-1">Temporaires</h5>
              <p className="text-sm text-[#71797E]">
                De quelques minutes à quelques jours
              </p>
            </div>
            <div className="bg-[#F8F8F5] p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">💾</div>
              <h5 className="font-semibold text-[#0D1B2A] mb-1">Persistants</h5>
              <p className="text-sm text-[#71797E]">Jusqu'à 2 ans maximum</p>
            </div>
          </div>
        </ContentSection>
      </div>

      <div className="mt-8 bg-gradient-to-r from-[#FFD700]/10 to-[#E6B800]/10 border border-[#FFD700]/20 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[#FFD700] text-2xl">📅</span>
          <h4 className="font-bold text-[#0D1B2A] text-lg">
            Mise à Jour de cette Politique
          </h4>
        </div>
        <p className="text-[#71797E] mb-3">
          Cette politique des cookies peut être mise à jour périodiquement. Nous
          vous informerons de tout changement significatif.
        </p>
        <p className="text-sm text-[#71797E]">
          <strong>Dernière mise à jour :</strong>{" "}
          {new Date().toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
    </PageLayout>
  );
}
