'use client';

import React from 'react';
import Header from './components/Header';
import BrandFilter from './components/BrandFilter';
import SubcategoryFilter from './components/SubcategoryFilter';
import FuelTypeFilter from './components/FuelTypeFilter';
import CategoryFilter from './components/CategoryFilter';
import PriceFilter from './components/PriceFilter';
import ProductGrid from './components/ProductGrid';

export default function BoutiquePage() {
  return (
    <main className="min-h-screen bg-[#f8f8f6] text-[#0A0A23] flex flex-col">

      {/* Header */}
      <Header />

      {/* BrandFilter indépendant */}
      <section className="py-6 px-4 sm:px-10 md:px-20 border-b border-gray-300 flex-shrink-0">
        <BrandFilter />
      </section>

      {/* Section principale : filtres + produits */}
      <section className="flex flex-1 px-4 sm:px-10 md:px-20 py-10 gap-8">

        {/* Filtres à gauche sans photo, fond clair */}
        <aside
          className="w-full max-w-[280px] space-y-8 rounded-3xl p-6 relative shadow-lg flex-shrink-0 h-full"
          style={{
            minHeight: '600px',
            boxShadow: '0 8px 24px rgb(10 25 47 / 0.75)',
            backgroundColor: '#f8f8f6'
        
          }}
          >
        
          <div className="relative z-10 text-[#0A0A23] font-light tracking-widest uppercase p-4 space-y-6 rounded-lg h-full flex flex-col">
            
            <div>
              <h3 className="text-lg font-semibold mb-3 tracking-widest text-[#D4AF37]">
                Sous-catégories
              </h3>
              <SubcategoryFilter />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 tracking-widest text-[#D4AF37]">
                  Type de carburant
              </h3>

              <FuelTypeFilter />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 tracking-widest text-[#D4AF37]">
                  Catégories
              </h3>

              <CategoryFilter />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 tracking-widest text-[#D4AF37]">
                Prix
              </h3>
              <PriceFilter />
            </div>

            <button
              type="button"
              className="w-full bg-[#D4AF37] hover:bg-yellow-400 transition rounded-full py-3 mt-auto font-semibold tracking-widest text-[#0A0A23] shadow-lg"
            >
              Rechercher
            </button>
          </div>
        </aside>

        {/* Ligne verticale */}
        <div className="w-px bg-gray-300" />

        {/* Produits */}
        <div className="flex-1">
          <ProductGrid />
        </div>
      </section>
    </main>
  );
}
