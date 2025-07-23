'use client';

import React, { useState } from 'react';
import BrandFilter from './BrandFilter';
import SubcategoryFilter from '../components/SubcategoryFilter';
import FuelTypeFilter from '../components/FuelTypeFilter';
import CategoryFilter from '../components/CategoryFilter';
import PriceFilter from '../components/PriceFilter';
import ProductGrid from '../components/ProductGrid';

const BoutiqueLayout = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="bg-[#f8f8f6] min-h-screen p-4 md:p-8">
      {/* Filtre par marque toujours en haut */}
      <div className="mb-6">
        <BrandFilter />
      </div>

      {/* Bouton filtre visible uniquement en mobile/tablette (<1024px) */}
      <div className="lg:hidden flex justify-end mb-6">
        <button
          onClick={() => setIsFilterOpen(true)}
          className="px-4 py-2 text-sm font-semibold text-white bg-[#0A0A23] rounded-xl shadow-md hover:bg-[#1A1A40]"
        >
          Filtres
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Partie filtres pour desktop (≥1024px) */}
        <aside
          className="hidden lg:block w-full lg:w-1/4 space-y-8 rounded-3xl p-6 relative text-[#0A0A23] font-light tracking-widest uppercase"
          style={{
            boxShadow: '0 8px 24px rgb(10 25 47 / 0.75)',
            backgroundColor: '#f8f8f6',
            minHeight: '600px',
          }}
        >
          <div className="relative z-10 p-4 space-y-6 rounded-lg h-full flex flex-col">
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

        {/* Ligne de séparation */}
        <div className="hidden lg:block w-[1px] bg-gray-300" />

        {/* Partie produits */}
        <main className="w-full lg:w-3/4">
          <ProductGrid />
        </main>
      </div>

      {/* Modal filtres pour mobile et tablette */}
      {isFilterOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-3xl p-6 w-11/12 max-h-[90vh] overflow-y-auto relative">
            <button
              className="absolute top-2 right-4 text-xl font-bold text-gray-600"
              onClick={() => setIsFilterOpen(false)}
            >
              ×
            </button>
            <div className="space-y-6 text-[#0A0A23] font-light tracking-widest uppercase">
              <SubcategoryFilter />
              <FuelTypeFilter />
              <CategoryFilter />
              <PriceFilter />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BoutiqueLayout;
