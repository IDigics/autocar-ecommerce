'use client';

import React from 'react';
import Header from '@/components/Header';
import BoutiqueLayout from '@/components/BoutiqueLayout';

export default function BoutiquePage() {
  return (
    <main className="min-h-screen bg-[#f8f8f6] text-[#0A0A23] flex flex-col">
      {/* Header */}
      <Header />

      {/* Partie boutique */}
      <BoutiqueLayout />
    </main>
  );
}
