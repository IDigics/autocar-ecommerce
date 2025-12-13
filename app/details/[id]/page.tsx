"use client";

import React, { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import useProduct from "@/hooks/use-product";
import Image from "next/image";
import ReviewSection from "@/components/ReviewSection";

export default function CarDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const carId = params.id as string;

  console.log("🚗 CarDetailsPage - ID from params:", carId);

  const { product, productIsLoading, productError } = useProduct({
    id: carId,
  });

  // Temporary test - direct API call
  React.useEffect(() => {
    const testDirectApiCall = async () => {
      if (carId) {
        try {
          console.log("🧪 Testing direct API call for ID:", carId);
          const response = await fetch(`http://localhost:3000/cars/${carId}`);
          const data = await response.json();
          console.log("🧪 Direct API call result:", data);
        } catch (error) {
          console.error("🧪 Direct API call failed:", error);
        }
      }
    };
    testDirectApiCall();
  }, [carId]);

  if (productIsLoading) {
    return (
      <main className="min-h-screen bg-[#F8F8F5] pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FFD700] mx-auto mb-4"></div>
          <p className="text-[#0D1B2A] font-semibold">
            Chargement des détails...
          </p>
        </div>
      </main>
    );
  }

  if (productError || !product) {
    return (
      <main className="min-h-screen bg-[#F8F8F5] pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#0D1B2A] mb-2">
            Véhicule non trouvé
          </h1>
          <p className="text-[#71797E] mb-4">
            Le véhicule demandé n'existe pas ou n'est plus disponible.
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

  return (
    <main className="min-h-screen bg-[#F8F8F5] pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <button
                onClick={() => router.push("/")}
                className="text-[#71797E] hover:text-[#0D1B2A] transition-colors"
              >
                Accueil
              </button>
            </li>
            <li className="text-[#71797E]">/</li>
            <li>
              <button
                onClick={() => router.push("/boutique")}
                className="text-[#71797E] hover:text-[#0D1B2A] transition-colors"
              >
                Boutique
              </button>
            </li>
            <li className="text-[#71797E]">/</li>
            <li className="text-[#0D1B2A] font-semibold">
              {product.brand.name} {product.model}
            </li>
          </ol>
        </nav>

        {/* Product Details */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="lg:flex">
            {/* Image Section */}
            <div className="lg:w-1/2">
              <div className="relative h-96 lg:h-full">
                <Image
                  src={
                    product.mainImage
                      ? `http://192.168.0.113:3000/image/${product.mainImage.url}`
                      : "/products/car.jpeg"
                  }
                  alt={`${product.brand.name} ${product.model}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Details Section */}
            <div className="lg:w-1/2 p-8">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="mb-6">
                  <h1 className="text-3xl font-bold text-[#0D1B2A] mb-2">
                    {product.brand.name} {product.model}
                  </h1>
                  <p className="text-[#71797E] text-lg">
                    Marque: {product.brand.name} • Année: {product.year}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <p className="text-4xl font-bold text-[#FFD700]">
                    {product.price.toLocaleString()} DT
                  </p>
                </div>

                {/* Car Details */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-[#0D1B2A] mb-2">
                    Caractéristiques
                  </h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#71797E]">Kilométrage:</span>
                      <span className="text-[#0D1B2A] font-medium">
                        {product.mileage.toLocaleString()} km
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#71797E]">Carburant:</span>
                      <span className="text-[#0D1B2A] font-medium">
                        {product.fuelType.type}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#71797E]">Transmission:</span>
                      <span className="text-[#0D1B2A] font-medium">
                        {product.gear}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#71797E]">Puissance:</span>
                      <span className="text-[#0D1B2A] font-medium">
                        {product.horsePower} CV
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#71797E]">Portes:</span>
                      <span className="text-[#0D1B2A] font-medium">
                        {product.doors}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#71797E]">Places:</span>
                      <span className="text-[#0D1B2A] font-medium">
                        {product.seats}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#71797E]">Couleur:</span>
                      <span className="text-[#0D1B2A] font-medium">
                        {product.color}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#71797E]">Propriétaires:</span>
                      <span className="text-[#0D1B2A] font-medium">
                        {product.previousOwner}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Availability */}
                <div className="mb-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    Disponible
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="mt-auto space-y-3">
                  <button className="w-full bg-[#FFD700] hover:bg-[#e6c200] text-[#0D1B2A] py-3 px-6 rounded-lg font-semibold transition-colors">
                    Contacter le vendeur
                  </button>
                  <button
                    onClick={() => router.push("/boutique")}
                    className="w-full bg-transparent border-2 border-[#0D1B2A] text-[#0D1B2A] hover:bg-[#0D1B2A] hover:text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                  >
                    Retour à la boutique
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-8 bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-[#0D1B2A] mb-6">
            Informations complémentaires
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-[#0D1B2A] mb-2">Marque</h3>
              <p className="text-[#71797E]">{product.brand.name}</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#0D1B2A] mb-2">Prix</h3>
              <p className="text-[#71797E]">
                {product.price.toLocaleString()} DT
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#0D1B2A] mb-2">
                Type d'offre
              </h3>
              <p className="text-[#71797E]">
                {product.offerType === "new" ? "Neuf" : "Occasion"}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#0D1B2A] mb-2">Catégorie</h3>
              <p className="text-[#71797E]">{product.category.name}</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#0D1B2A] mb-2">
                Sous-catégorie
              </h3>
              <p className="text-[#71797E]">{product.subCategory.name}</p>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <ReviewSection carId={carId} />
      </div>
    </main>
  );
}
