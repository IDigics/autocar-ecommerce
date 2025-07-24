'use client';

import React from 'react';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type ProductGridProps = {
  sortOption: string;
};

const products: Product[] = [
  {
    id: 1,
    name: 'Ford Mustang',
    price: 65000,
    image: '/products/logo.png',
  },
  {
    id: 2,
    name: 'BMW X5',
    price: 75000,
    image: '/products/car.jpeg',
  },
  {
    id: 3,
    name: 'Audi A6',
    price: 68000,
    image: '/products/car1.jpeg',
  },
  {
    id: 4,
    name: 'Mercedes-Benz C-Class',
    price: 70000,
    image: '/products/filter.jpg',
  },
  {
    id: 5,
    name: 'Toyota Corolla',
    price: 32000,
    image: '/products/toyota-corolla.jpg',
  },
  {
    id: 6,
    name: 'Honda Civic',
    price: 30000,
    image: '/products/honda-civic.jpg',
  },
  // ajoute autant de produits que tu veux
];

const ProductGrid: React.FC<ProductGridProps> = ({ sortOption }) => {
  // Si aucun tri sélectionné (sortOption = ''), on garde l’ordre original
  const sortedProducts = sortOption
    ? [...products].sort((a, b) => {
        switch (sortOption) {
          case 'price-asc':
            return a.price - b.price;
          case 'price-desc':
            return b.price - a.price;
          case 'name-asc':
            return a.name.localeCompare(b.name);
          case 'name-desc':
            return b.name.localeCompare(a.name);
          case 'newest':
            // Si tu as une date, tu pourrais trier ici, sinon on laisse l’ordre par id décroissant (exemple)
            return b.id - a.id;
          default:
            return 0;
        }
      })
    : products;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {sortedProducts.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center transition hover:scale-105 duration-200"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-xl mb-4"
          />
          <h3 className="text-lg font-semibold text-[#0A0A23]">{product.name}</h3>
          <p className="text-[#D4AF37] font-bold text-md mt-2">{product.price.toLocaleString()} DT</p>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
