'use client';

import React, { Suspense } from 'react';
import BoutiqueLayout from '@/components/BoutiqueLayout';
import { useSearchParams } from 'next/navigation';
import useProducts from '@/hooks/use-products';
import { CriteriaType } from '@/types';

function BoutiqueContent() {
  const searchParams = useSearchParams();

  // Extract parameters from URL
  const brandSlugs = searchParams.get('brand')?.split(',') || [];
  const categoriesSlugs = searchParams.get('category')?.split(',') || [];
  const search = searchParams.get('search') || '';
  const criteria = (searchParams.get('sortBy') as CriteriaType) || undefined;

  // Use the custom hook
  const {
    products,
    productsAreLoading,
    setPage,
    page,
    pagesNumber,
  } = useProducts({
    limit: 12,
    criteria,
    categoriesSlugs,
    brandSlugs,
    search,
    queryKeys: [brandSlugs.join(','), categoriesSlugs.join(',')],
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
