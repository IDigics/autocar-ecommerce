'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import BrandFilter from './BrandFilter';
import SubcategoryFilter from '../components/SubcategoryFilter';
import FuelTypeFilter from '../components/FuelTypeFilter';
import CategoryFilter from '../components/CategoryFilter';
import PriceFilter from '../components/PriceFilter';
import ProductGrid from './ProductGrid';
import { ProductType } from '../types/products';


const SortDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState('Trier par 🔽');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  const options = [
    { label: '-- Aucun --', value: '' },
    { label: 'ID croissant', value: 'id_asc' },
    { label: 'Prix croissant', value: 'price_asc' },
    { label: 'Prix décroissant', value: 'price_desc' },
    { label: 'Année croissante', value: 'year_asc' },
    { label: 'Année décroissante', value: 'year_desc' },
    { label: 'Avis croissant', value: 'review_asc' },
    { label: 'Avis décroissant', value: 'review_desc' },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (value: string, label: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === '') {
      params.delete('sort');
      setSelectedLabel('Trier par 🔽');
    } else {
      params.set('sort', value);
      setSelectedLabel(label + ' ⚡');
    }
    router.push(`?${params.toString()}`);
    setIsOpen(false);
  };

  useEffect(() => {
    const current = searchParams.get('sort');
    const match = options.find((opt) => opt.value === current);
    if (match) {
      setSelectedLabel(match.label + ' ⚡');
    } else {
      setSelectedLabel('Trier par 🔽');
    }
  }, [searchParams]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left mb-6" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-center items-center px-4 py-2 bg-[#0A0A23] text-white rounded-xl shadow-md hover:bg-[#1A1A40] focus:outline-none focus:ring-2 focus:ring-[#d4af37] transition"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {selectedLabel}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1">
            {options.map((opt) => (
              <button
                key={opt.value || 'none'}
                onClick={() => handleSelect(opt.value, opt.label)}
                className="w-full text-left px-4 py-2 text-sm text-[#0A0A23] hover:bg-[#d4af37] hover:text-white transition rounded-md"
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

interface BoutiqueLayoutProps {
  products?: ProductType[];
  productsAreLoading?: boolean;
  setPage?: (page: number) => void;
  page?: number;
  pagesNumber?: number;
}

const BoutiqueLayout = ({
  products,
  productsAreLoading,
  setPage,
  page,
  pagesNumber,
}: BoutiqueLayoutProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const searchParams = useSearchParams();
  const sortOption = searchParams.get('sort') || '';

  return (
    <div className="bg-[#f8f8f6] min-h-screen p-4 md:p-8">
      <div className="mb-6">
        <BrandFilter />
      </div>

      <div className="lg:hidden flex justify-end mb-6">
        <button
          onClick={() => setIsFilterOpen(true)}
          className="px-4 py-2 text-sm font-semibold text-white bg-[#0A0A23] rounded-xl shadow-md hover:bg-[#1A1A40]"
        >
          Filtres
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
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
              <h3 className="text-lg font-semibold mb-3 tracking-widest text-[#D4AF37]">Sous-catégories</h3>
              <SubcategoryFilter />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 tracking-widest text-[#D4AF37]">Type de carburant</h3>
              <FuelTypeFilter />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 tracking-widest text-[#D4AF37]">Catégories</h3>
              <CategoryFilter />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 tracking-widest text-[#D4AF37]">Prix</h3>
              <PriceFilter />
            </div>
            {/* Bouton Rechercher supprimé */}
          </div>
        </aside>

        <div className="hidden lg:block w-[1px] bg-gray-300" />

        <main className="w-full lg:w-3/4">
          <SortDropdown />
          <ProductGrid
            sortOption={sortOption}
            products={products}
            productsAreLoading={productsAreLoading}
            setPage={setPage}
            page={page}
            pagesNumber={pagesNumber}
          />
        </main>
      </div>

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
