"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ProductType } from "../types/products";

type ProductGridProps = {
  sortOption: string;
  products?: ProductType[];
  productsAreLoading?: boolean;
  setPage?: (page: number) => void;
  page?: number;
  pagesNumber?: number;
};

const ProductGrid: React.FC<ProductGridProps> = ({
  products = [],
  productsAreLoading = false,
}) => {
  const router = useRouter();

  if (productsAreLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D4AF37] mx-auto mb-4"></div>
          <p className="text-[#0A0A23] font-semibold">
            Chargement des produits...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.length === 0 ? (
          <p className="col-span-full text-center text-[#0A0A23] font-semibold">
            Aucun produit ne correspond aux filtres.
          </p>
        ) : (
          products.map((product) => {
            
            const getImageUrl = (product: ProductType) => {
              const imagePath = product.mainImage?.url || product.image;
              
              if (!imagePath) return "/products/car.jpeg";
              
              // Handle external URLs
              if (imagePath.startsWith("http")) return imagePath;

              // Handle local products folder (fixes the 404 on products/car.jpeg)
              if (imagePath.startsWith("products/") || imagePath.startsWith("/products/")) {
                return imagePath.startsWith("/") ? imagePath : `/${imagePath}`;
              }

              // Handle backend images
              // Remove leading slash to avoid double slashes
              const cleanPath = imagePath.startsWith("/") ? imagePath.slice(1) : imagePath;
              const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://192.168.0.113:3000";
              
              return `${apiUrl}/image/${cleanPath}`;
            };

            return (
              <div
                key={product.id}
                onClick={() => router.push(`/details/${product.id}`)}
                className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center transition hover:scale-105 duration-200 cursor-pointer"
              >
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={getImageUrl(product)}
                    alt={`${product.brand || ""} ${
                      product.model || product.name || "Car"
                    }`}
                    fill
                    className="object-cover rounded-xl"
                    onError={(e) => {
                      e.currentTarget.src = "/products/car.jpeg";
                    }}
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#0A0A23]">
                  {product.brand && product.model
                    ? `${product.brand} ${product.model}`
                    : product.name || "Car"}
                </h3>
                <p className="text-[#D4AF37] font-bold text-md mt-2">
                  {product.price.toLocaleString()} {product.currency || "DT"}
                </p>
                {(product.year || product.fuelType) && (
                  <p className="text-sm text-gray-600 mt-1">
                    {product.year && `${product.year} • `}
                    {product.gear && `${product.gear} • `}
                    {typeof product.fuelType === "number"
                      ? "Fuel"
                      : product.fuelType}
                  </p>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
