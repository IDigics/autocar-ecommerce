'use client';

import React, { Suspense } from 'react';
import BoutiqueLayout from '@/components/BoutiqueLayout';

export default function BoutiquePage() {
  return (
    <main className="min-h-screen bg-[#f8f8f6] text-[#0A0A23] flex flex-col">
      <Suspense fallback={<div className="text-center py-10">Chargement...</div>}>
        <BoutiqueLayout />
      </Suspense>
    </main>
  );
}
