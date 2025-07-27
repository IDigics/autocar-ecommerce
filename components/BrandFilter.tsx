'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

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
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  useEffect(() => {
    const current = searchParams.get('brand');
    setSelectedBrand(current);
  }, [searchParams]);

  const handleBrandClick = (brand: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    if (brand === selectedBrand) {
      newParams.delete('brand');
      setSelectedBrand(null);
    } else {
      newParams.set('brand', brand);
      setSelectedBrand(brand);
    }
    newParams.set('page', '1'); // Reset page to 1 when filter changes
    router.push(`${pathname}?${newParams.toString()}`);
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
