"use client";

import Header from "./components/Header";
import Image from "next/image";
import { FaCarSide, FaAward, FaSmile } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Header />

      <main className="bg-[#F8F8F5] min-h-screen flex items-center justify-center px-4 py-12">
        <div className="flex flex-col md:flex-row items-center gap-10 max-w-7xl mx-auto w-full">
          {/* 🖼️ Image hero au centre */}
          <div className="w-full md:w-[55%] -ml-2">
            <Image
              src="/hero.jpeg"
              alt="Voiture de luxe"
              width={600}
              height={400}
              className="rounded-2xl shadow-xl object-cover w-full h-auto"
              priority
            />
          </div>

          {/* ⬅️ Statistiques à gauche */}
          <div className="w-full md:w-1/4 flex flex-col gap-8 items-start">
            <div className="flex items-center gap-3">
              <FaCarSide className="text-[#FFD700] text-2xl md:text-3xl" />
              <div className="text-[#0D1B2A] text-lg md:text-xl font-semibold leading-tight">
                <span className="text-[#FFD700] font-bold text-xl md:text-2xl">
                  100+
                </span>
                <br />
                véhicules premium
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FaAward className="text-[#FFD700] text-2xl md:text-3xl" />
              <div className="text-[#0D1B2A] text-lg md:text-xl font-semibold leading-tight">
                <span className="text-[#FFD700] font-bold text-xl md:text-2xl">
                  15+
                </span>
                <br />
                années d’expérience
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FaSmile className="text-[#FFD700] text-2xl md:text-3xl" />
              <div className="text-[#0D1B2A] text-lg md:text-xl font-semibold leading-tight">
                <span className="text-[#FFD700] font-bold text-xl md:text-2xl">
                  500+
                </span>
                <br />
                clients satisfaits
              </div>
            </div>
          </div>

          {/* 📝 Texte à droite */}
          <div className="w-full md:w-[35%] text-center md:text-left space-y-6">
            <h1 className="text-3xl md:text-3xl font-bold text-[#0D1B2A]">
              Conduisez l'exception , Ressentez la passion...
            </h1>
            <p className="text-5xl font-semibold text-[#E6B800] text-center md:text-left">
              Vivez AutoCar'z
            </p>
            <button className="mt-2 px-6 py-3 bg-[#0D1B2A] text-white rounded-xl shadow hover:bg-[#102438] transition">
              Découvrir nos modèles
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
