// components/Header.tsx
"use client";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[#0D1B2A] text-white py-4 shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo + Titre */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Logo AutoCar'z"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-2xl font-bold text-[#FFD700] font-playfair">
            {" "}
            AutoCar'z
          </span>
        </Link>

        {/* Navigation */}
        <nav className="space-x-6 hidden md:block text-sm font-medium">
          <Link href="/" className="hover:text-[#FFD700] transition">
            Accueil
          </Link>
          <Link href="/boutique" className="hover:text-[#FFD700] transition">
            Boutique
          </Link>
          <Link href="/contact" className="hover:text-[#FFD700] transition">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
