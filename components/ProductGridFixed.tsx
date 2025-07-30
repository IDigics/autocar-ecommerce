"use client";

import React from "react";
import { useRouter } from "next/navigation";
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
          products.map((product) => (
            <div
              key={product.id}
              onClick={() => router.push(`/details/${product.id}`)}
              className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center transition hover:scale-105 duration-200 cursor-pointer"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-lg font-semibold text-[#0A0A23]">
                {product.name}
              </h3>
              <p className="text-[#D4AF37] font-bold text-md mt-2">
                {product.price.toLocaleString()} {product.currency || "DT"}
              </p>
              {product.brand && (
                <p className="text-sm text-gray-600 mt-1">{product.brand}</p>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
