'use client';

import React from 'react';
import BrandFilter from './BrandFilter';
import SubcategoryFilter from '../components/SubcategoryFilter';
import FuelTypeFilter from '../components/FuelTypeFilter';
import CategoryFilter from '../components/CategoryFilter';
import PriceFilter from '../components/PriceFilter';
import ProductGrid from '../components/ProductGrid';

const BoutiqueLayout = () => {
  return (
    <div className="bg-[#f8f8f6] min-h-screen p-4 md:p-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Partie filtres */}
        <aside
          className="w-full md:w-1/4 space-y-8 rounded-3xl p-6 relative text-[#0A0A23] font-light tracking-widest uppercase"
          style={{
            backgroundImage: "url('/filter.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow: '0 8px 24px rgb(212 175 55 / 0.3)',
            minHeight: '600px',
          }}
        >
          {/* Contenu filtres sans overlay */}
          <div className="relative z-10">
            <BrandFilter />
            <SubcategoryFilter />
            <FuelTypeFilter />
            <CategoryFilter />
            <PriceFilter />
          </div>
        </aside>

        {/* Ligne de séparation */}
        <div className="hidden md:block w-[1px] bg-gray-300" />

        {/* Partie produits */}
        <main className="w-full md:w-3/4">
          <ProductGrid />
        </main>
      </div>
    </div>
  );
};

export default BoutiqueLayout;
