"use client";

import { useParams, useRouter } from "next/navigation";

export default function CarDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const carId = params.id;

  return (
    <main className="min-h-screen bg-[#F8F8F5] pt-20 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-[#0D1B2A] mb-2">
          Détails du Véhicule #{carId}
        </h1>
        <p className="text-[#71797E] mb-4">
          Cette page affichera bientôt les détails du véhicule sélectionné.
        </p>
        <button
          onClick={() => router.push("/boutique")}
          className="bg-[#FFD700] hover:bg-[#e6c200] text-[#0D1B2A] px-6 py-2 rounded-lg font-semibold transition-colors"
        >
          Retour à la boutique
        </button>
      </div>
    </main>
  );
}
