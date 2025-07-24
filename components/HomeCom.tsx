"use client";
import HeroCarousel from "./HeroCarousel";

export default function Home() {
  const heroImages = [
    "/Case_Solita_and_Fintraffic_Road_overview_hero.jpg",
    "/StockCake-Mountain Road Adventure_1753210374.jpg", // You can add more different images here
    "/544d511e969a2bb65475514c3025e957.jpeg", // You can add more different images here
  ];
  return (
    <>
      {/* ===== SITE NAVIGATION ===== */}
      {/* 
      Fixed header component with:
      - Logo and brand (left)
      - Search bar (center) 
      - Navigation menu (right)
      - Smooth scrolling to page sections
      */}

      {/* ===== HERO SECTION - CAROUSEL SLIDESHOW ===== */}
      <main id="hero" className="scroll-mt-20">
        <HeroCarousel images={heroImages} />
      </main>

      {/* ===== SERVICES SECTION - FEATURE SHOWCASE ===== */}
      {/* 
      SERVICES SECTION FEATURES:
      - Light cream background (#F8F8F5) provides visual separation
      - scroll-mt-20 accounts for fixed header when scrolling from navigation
      - id="services" enables smooth scroll navigation from header
      - Compact vertical padding for better proportions
      - Three-column responsive grid showcasing key features
      
      CONTENT STRUCTURE:
      1. Section header with title and description
      2. Feature grid with icons, titles, and descriptions
      3. Each feature card has hover effects for interactivity
      */}
      <section id="services" className="py-16 bg-[#F8F8F5] scroll-mt-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* === SECTION HEADER === */}
          {/* 
          HEADER FEATURES:
          - Center-aligned text for balance
          - Compact headline with navy blue for authority
          - Supporting description with medium gray
          - Max width constraint prevents description from becoming too wide
          */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-3 font-serif">
              Excellence Automobile
            </h2>
            <p className="text-lg text-[#71797E] max-w-2xl mx-auto">
              Découvrez nos services premium qui font la différence dans votre
              expérience automobile de luxe
            </p>
          </div>

          {/* === FEATURES GRID === */}
          {/* 
          GRID LAYOUT:
          - 1 column on mobile, 2 on tablet, 3 on desktop
          - Compact gap spacing between cards
          - Each card is a white container with hover effects
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* === FEATURE CARD 1: CERTIFIED VEHICLES === */}
            {/* 
            CARD STRUCTURE:
            - White background with rounded corners (rounded-xl)
            - Shadow effects: base shadow + hover shadow-xl
            - Compact gold gradient icon circle with checkmark SVG
            - Center-aligned content layout
            */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              {/* ICON CONTAINER
                  Compact gold gradient circle with checkmark icon */}
              <div className="w-12 h-12 bg-gradient-to-r from-[#FFD700] to-[#E6B800] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-[#0D1B2A]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              {/* FEATURE TITLE */}
              <h3 className="text-lg font-bold text-[#0D1B2A] mb-3">
                Véhicules Certifiés
              </h3>
              {/* FEATURE DESCRIPTION */}
              <p className="text-sm text-[#71797E] leading-relaxed">
                Chaque véhicule est rigoureusement inspecté et certifié par nos
                experts pour garantir la qualité et la fiabilité
                exceptionnelles.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-[#FFD700] to-[#E6B800] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-[#0D1B2A]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#0D1B2A] mb-3">
                Service Premium
              </h3>
              <p className="text-sm text-[#71797E] leading-relaxed">
                Un accompagnement personnalisé avec des conseillers dédiés pour
                vous offrir une expérience d'achat sur mesure et privilégiée.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-[#FFD700] to-[#E6B800] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-[#0D1B2A]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#0D1B2A] mb-3">
                Garantie Excellence
              </h3>
              <p className="text-sm text-[#71797E] leading-relaxed">
                Une garantie étendue et un service après-vente d'exception pour
                protéger votre investissement et votre tranquillité d'esprit.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-[#FFD700] to-[#E6B800] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-[#0D1B2A]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#0D1B2A] mb-3">
                Financement Flexible
              </h3>
              <p className="text-sm text-[#71797E] leading-relaxed">
                Solutions de financement sur mesure avec des partenaires
                bancaires premium pour faciliter l'acquisition de votre véhicule
                de rêve.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-[#FFD700] to-[#E6B800] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-[#0D1B2A]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#0D1B2A] mb-3">
                Expérience Personnalisée
              </h3>
              <p className="text-sm text-[#71797E] leading-relaxed">
                Des essais privés, livraison à domicile et services concierge
                pour une expérience automobile unique et mémorable.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-[#FFD700] to-[#E6B800] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-[#0D1B2A]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#0D1B2A] mb-3">
                Excellence Reconnue
              </h3>
              <p className="text-sm text-[#71797E] leading-relaxed">
                Plus de 15 ans d'expertise et une réputation établie dans le
                domaine automobile de luxe avec des clients satisfaits à travers
                le pays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Win-Win Benefits Section */}
      <section id="advantages" className="py-16 bg-white scroll-mt-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-3 font-serif">
              Gagnant-Gagnant pour AutoCar'z & Clients
            </h2>
            <p className="text-lg text-[#71797E] max-w-2xl mx-auto">
              Une relation de confiance mutuelle basée sur l'excellence et la
              satisfaction partagée
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* For AutoCar'z */}
            <div className="bg-gradient-to-br from-[#F8F8F5] to-[#E8E8E5] p-6 rounded-2xl border-2 border-[#FFD700]/20">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-[#FFD700] mb-2">
                  Pour AutoCar'z
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-[#FFD700] to-[#E6B800] mx-auto rounded-full"></div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FFD700] flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-[#0D1B2A]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-[#0D1B2A] leading-relaxed">
                    <span className="font-semibold">Élever la qualité</span>{" "}
                    basée sur le mérite, pas seulement sur le budget.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FFD700] flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-[#0D1B2A]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-[#0D1B2A] leading-relaxed">
                    <span className="font-semibold">
                      Construire un portefeuille
                    </span>{" "}
                    de réputation vérifiable et compréhensible.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FFD700] flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-[#0D1B2A]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-[#0D1B2A] leading-relaxed">
                    <span className="font-semibold">Attirer des clients</span>{" "}
                    de grande valeur recherchant la crédibilité.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FFD700] flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-[#0D1B2A]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-[#0D1B2A] leading-relaxed">
                    <span className="font-semibold">
                      Différenciation claire
                    </span>{" "}
                    avec des professionnels vérifiés.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FFD700] flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-[#0D1B2A]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-[#0D1B2A] leading-relaxed">
                    <span className="font-semibold">
                      Rationaliser le réseautage
                    </span>{" "}
                    avec des cartes professionnelles intelligentes intégrées.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FFD700] flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-[#0D1B2A]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-[#0D1B2A] leading-relaxed">
                    <span className="font-semibold">Obtenir des insights</span>{" "}
                    avec des analyses de performance avancées.
                  </p>
                </div>
              </div>
            </div>

            {/* For Clients */}
            <div className="bg-gradient-to-br from-[#F8F8F5] to-[#E8E8E5] p-6 rounded-2xl border-2 border-[#FFD700]/20">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-[#FFD700] mb-2">
                  Pour les Clients
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-[#FFD700] to-[#E6B800] mx-auto rounded-full"></div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FFD700] flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-[#0D1B2A]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-[#0D1B2A] leading-relaxed">
                    <span className="font-semibold">Accéder à un réseau</span>{" "}
                    de professionnels automobiles vérifiés et experts.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FFD700] flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-[#0D1B2A]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-[#0D1B2A] leading-relaxed">
                    <span className="font-semibold">
                      Embaucher en toute confiance
                    </span>{" "}
                    grâce à des données objectives de crédibilité.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FFD700] flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-[#0D1B2A]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-[#0D1B2A] leading-relaxed">
                    <span className="font-semibold">
                      Réduire significativement
                    </span>{" "}
                    les risques d'escroqueries et de mauvais service.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FFD700] flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-[#0D1B2A]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-[#0D1B2A] leading-relaxed">
                    <span className="font-semibold">
                      Économiser un temps précieux
                    </span>{" "}
                    en trouvant rapidement des professionnels de confiance.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FFD700] flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-[#0D1B2A]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-[#0D1B2A] leading-relaxed">
                    <span className="font-semibold">
                      Expérimenter la tranquillité d'esprit
                    </span>{" "}
                    avec des références vérifiées et transparentes.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FFD700] flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-[#0D1B2A]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-[#0D1B2A] leading-relaxed">
                    <span className="font-semibold">
                      Prendre des décisions éclairées
                    </span>{" "}
                    basées sur des données spécifiques et fiables.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
