"use client";

import React from "react";
import { useRouter } from "next/navigation";

const products = [
  {
    id: 1,
    name: "Ford Mustang",
    price: "65,000 DT",
    image: "/products/logo.png",
  },
  {
    id: 2,
    name: "BMW X5",
    price: "75,000 DT",
    image: "/products/car.jpeg",
  },
  {
    id: 3,
    name: "Audi A6",
    price: "68,000 DT",
    image: "/products/car1.jpeg",
  },
  {
    id: 4,
    name: "Mercedes-Benz C-Class",
    price: "70,000 DT",
    image: "/products/filter.jpg",
  },
  {
    id: 5,
    name: "Toyota Corolla",
    price: "32,000 DT",
    image: "/products/toyota-corolla.jpg",
  },
  {
    id: 6,
    name: "Honda Civic",
    price: "30,000 DT",
    image: "/products/honda-civic.jpg",
  },
];

const ProductGrid = () => {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <div
          key={product.id}
          onClick={() => router.push(`/details/${product.id}`)}
          className="bg-white rounded-3xl shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300 overflow-hidden cursor-pointer"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-52 object-cover rounded-t-3xl"
          />
          <div className="p-6">
            <h3 className="text-lg font-semibold text-[#0A0A23] mb-2 uppercase tracking-widest">
              {product.name}
            </h3>
            <p className="text-[#D4AF37] font-bold text-xl">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
