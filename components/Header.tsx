// components/Header.tsx
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [search, setSearch] = useState('');

  return (
    <header className="bg-[#0D1B2A] text-white py-4 shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo + Titre */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="Logo AutoCar'z"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-2xl font-bold text-[#FFD700] font-playfair">AutoCar&apos;z</span>
        </Link>

        {/* Navigation - desktop only */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <Link href="/" className="hover:text-[#FFD700] transition">Accueil</Link>
          <Link href="/boutique" className="hover:text-[#FFD700] transition">Boutique</Link>
          <Link href="/contact" className="hover:text-[#FFD700] transition">Contact</Link>
        </nav>

        {/* Barre de recherche - desktop only */}
        <div className="hidden md:flex relative max-w-xs w-full">
          <input
            type="search"
            placeholder="Rechercher un produit..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-full py-2 px-4 pr-10 text-[#ecdf29] font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD700] shadow-sm transition"
          />
          <button
            type="submit"
            aria-label="Rechercher"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#FFD700] hover:text-yellow-400 transition text-xl"
          >
            🔍
          </button>
        </div>

      </div>
    </header>
  );
}
