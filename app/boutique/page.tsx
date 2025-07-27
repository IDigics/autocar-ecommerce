'use client';

import React, { Suspense } from 'react';
import BoutiqueLayout from '@/components/BoutiqueLayout';
import { useSearchParams } from 'next/navigation';
import useProducts from '@/hooks/use-products';
import { CriteriaType } from '@/types';

function BoutiqueContent() {
  const searchParams = useSearchParams();

  // Extract parameters from URL
  const brand = searchParams.get('brand')?.split(',') || [];
  const category = searchParams.get('category')?.split(',') || [];
  const subCategory = searchParams.get('subCategory')?.split(',') || [];
  const minPrice = searchParams.get('minPrice') ? Number(searchParams.get('minPrice')) : undefined;
  const maxPrice = searchParams.get('maxPrice') ? Number(searchParams.get('maxPrice')) : undefined;
  const search = searchParams.get('search') || '';
  const sort = (searchParams.get('sort') as CriteriaType) || undefined;

  // Use the custom hook
  const {
    products,
    productsAreLoading,
    setPage,
    page,
    pagesNumber,
  } = useProducts({
    pageSize: 12,
    sort,
    category,
    subCategory,
    brand,
    minPrice,
    maxPrice,
    search,
    queryKeys: [brand.join(','), category.join(','), subCategory.join(',')],
  });


  return (
    <BoutiqueLayout
      products={products}
      productsAreLoading={productsAreLoading}
      setPage={setPage}
      page={page}
      pagesNumber={pagesNumber}
    />
  );
}

export default function BoutiquePage() {
  return (
    <main className="min-h-screen bg-[#f8f8f6] text-[#0A0A23] flex flex-col">
      <Suspense fallback={<div className="text-center py-10">Chargement...</div>}>
        <BoutiqueContent />
      </Suspense>
    </main>
  );
}
