'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  brand?: string;        // ajouter brand etc selon besoin
  category?: number;
  subCategory?: number;
  fuelType?: number;
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
    brand: 'Ford',
    category: 3,
    subCategory: 2,
    fuelType: 3,
  },
  {
    id: 2,
    name: 'BMW X5',
    price: 75000,
    image: '/products/car.jpeg',
    brand: 'BMW',
    category: 1,
    subCategory: 1,
    fuelType: 2,
  },
  {
    id: 3,
    name: 'Audi A6',
    price: 68000,
    image: '/products/car1.jpeg',
    brand: 'Audi',
    category: 3,
    subCategory: 3,
    fuelType: 3,
  },
  {
    id: 4,
    name: 'Mercedes-Benz C-Class',
    price: 70000,
    image: '/products/filter.jpg',
    brand: 'Mercedes-Benz',
    category: 3,
    subCategory: 4,
    fuelType: 1,
  },
  {
    id: 5,
    name: 'Toyota Corolla',
    price: 32000,
    image: '/products/toyota-corolla.jpg',
    brand: 'Toyota',
    category: 3,
    subCategory: 5,
    fuelType: 3,
  },
  {
    id: 6,
    name: 'Honda Civic',
    price: 30000,
    image: '/products/honda-civic.jpg',
    brand: 'Honda',
    category: 3,
    subCategory: 5,
    fuelType: 4,
  },
];

const ProductGrid: React.FC<ProductGridProps> = ({ sortOption }) => {
  const searchParams = useSearchParams();

  // Récupérer les filtres depuis l’URL
  const brandFilter = searchParams.get('brand'); // exemple: 'Ford'
  const categoryFilter = searchParams.get('category')?.split(',').map(Number) || [];
  const subCategoryFilter = searchParams.get('subCategory')?.split(',').map(Number) || [];
  const fuelTypeFilter = searchParams.get('fuelType')?.split(',').map(Number) || [];
  const minPrice = parseInt(searchParams.get('priceMin') || '0', 10);
  const maxPrice = parseInt(searchParams.get('priceMax') || '1000000', 10);
  const searchQuery = (searchParams.get('search') || '').toLowerCase();

  // Filtrer les produits
  const filteredProducts = products.filter((p) => {
    if (brandFilter && p.brand !== brandFilter) return false;
    if (categoryFilter.length > 0 && !categoryFilter.includes(p.category || -1)) return false;
    if (subCategoryFilter.length > 0 && !subCategoryFilter.includes(p.subCategory || -1)) return false;
    if (fuelTypeFilter.length > 0 && !fuelTypeFilter.includes(p.fuelType || -1)) return false;
    if (p.price < minPrice || p.price > maxPrice) return false;
    if (searchQuery && !p.name.toLowerCase().includes(searchQuery)) return false;
    return true;
  });

  // Trier
  const sortedProducts = sortOption
    ? [...filteredProducts].sort((a, b) => {
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
            return b.id - a.id; // exemple
          default:
            return 0;
        }
      })
    : filteredProducts;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {sortedProducts.length === 0 ? (
        <p className="col-span-full text-center text-[#0A0A23] font-semibold">
          Aucun produit ne correspond aux filtres.
        </p>
      ) : (
        sortedProducts.map((product) => (
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
        ))
      )}
    </div>
  );
};

export default ProductGrid;
