'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const brands = [
  { name: 'Audi', logo: '/brands/audi.png' },
  { name: 'BMW', logo: '/brands/bmw.png' },
  { name: 'Chevrolet', logo: '/brands/chevrolet.png' },
  { name: 'Kia', logo: '/brands/kia.png' },
  { name: 'Toyota', logo: '/brands/toyota.png' },
  { name: 'Ford', logo: '/brands/ford.png' },
  { name: 'Honda', logo: '/brands/honda.png' },
  { name: 'Hyundai', logo: '/brands/hyundai.png' },
  { name: 'Mercedes-Benz', logo: '/brands/mercedes.png' },
  { name: 'Nissan', logo: '/brands/nissan.png' },
];

const BrandFilter = () => {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  const handleBrandClick = (brand: string) => {
    setSelectedBrand(brand === selectedBrand ? null : brand);
  };

  return (
    <div className="text-center">


      <div className="grid grid-cols-5 gap-6">
        {brands.map((brand) => (
          <button
            key={brand.name}
            onClick={() => handleBrandClick(brand.name)}
            className={`p-4 rounded-lg border transition duration-300
              ${selectedBrand === brand.name ? 'border-[#D4AF37]' : 'border-transparent'}`}
          >
            <Image
              src={brand.logo}
              alt={brand.name}
              width={70}
              height={70}
              className="mx-auto grayscale hover:grayscale-0 transition duration-300"
            />
          </button>
        ))}
      </div>

      {selectedBrand && (
        <p className="mt-4 text-[#D4AF37] font-semibold tracking-wide uppercase">Filtré : {selectedBrand}</p>
      )}
    </div>
  );
};

export default BrandFilter;
