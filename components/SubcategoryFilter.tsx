'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

const subcategories = [
  { id: 1, name: 'luxary' },
  { id: 2, name: 'sport' },
  { id: 3, name: 'classic' },
  { id: 4, name: 'economy' },
  { id: 5, name: 'family' },
];

const SubcategoryFilter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Récupérer les subCategories sélectionnées depuis l'URL, ou tableau vide
  const initialSelected = searchParams
    .get('subCategory')
    ?.split(',')
    .map((id) => parseInt(id))
    .filter((id) => !isNaN(id)) || [];

  const [selected, setSelected] = useState<number[]>(initialSelected);

  // Met à jour URL quand selected change
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (selected.length > 0) {
      params.set('subCategory', selected.join(','));
    } else {
      params.delete('subCategory');
    }

    router.push(`?${params.toString()}`);
  }, [selected, router, searchParams]);

  const toggle = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex flex-col gap-3">
      {subcategories.map((item) => (
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
          <span className="font-light uppercase tracking-widest">{item.name}</span>
        </label>
      ))}
    </div>
  );
};

export default SubcategoryFilter;
