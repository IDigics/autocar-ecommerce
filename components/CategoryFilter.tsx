"use client";

import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

const categories = [
  { id: 1, name: "suv" },
  { id: 2, name: "convertible" },
  { id: 3, name: "sedan" },
  { id: 4, name: "pickup" },
  { id: 5, name: "coupe" },
];

const CategoryFilter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialSelected = searchParams.get('category')?.split(',').map(Number) || [];
  const [selected, setSelected] = useState<number[]>(initialSelected);

  // Met à jour l'URL dès qu'on sélectionne/désélectionne une catégorie
  const updateURL = (newSelected: number[]) => {
    const params = new URLSearchParams(searchParams.toString());

    if (newSelected.length > 0) {
      params.set('category', newSelected.join(','));
    } else {
      params.delete('category');
    }

    params.set('page', '1'); // reset page à 1 si filtre change
    router.push(`?${params.toString()}`);
  };

  const toggle = (id: number) => {
    const newSelected = selected.includes(id)
      ? selected.filter((item) => item !== id)
      : [...selected, id];

    setSelected(newSelected);
    updateURL(newSelected);
  };

  // Sync si l'URL change manuellement
  useEffect(() => {
    const urlSelected = searchParams.get('category')?.split(',').map(Number) || [];
    setSelected(urlSelected);
  }, [searchParams]);

  return (
    <div className="flex flex-col gap-3">
      {categories.map((item) => (
        <label
          key={item.id}
          className="flex items-center gap-2 cursor-pointer hover:text-[#D4AF37] transition duration-300"
        >
          <input
            type="checkbox"
            checked={selected.includes(item.id)}
            onChange={() => toggle(item.id)}
            className="accent-[#D4AF37]"
          />
          <span className="font-light uppercase tracking-widest">
            {item.name}
          </span>
        </label>
      ))}
    </div>
  );
};

export default CategoryFilter;
