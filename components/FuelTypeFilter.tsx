'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const fuelTypes = [
  { id: 1, name: 'hybrid' },
  { id: 2, name: 'diesel' },
  { id: 3, name: 'gasoline' },
  { id: 4, name: 'electric' },
];

const FuelTypeFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentFuels = searchParams.get('fuel')?.split(',').map(Number) || [];

  const toggle = (id: number) => {
    const params = new URLSearchParams(searchParams.toString());
    let updated = [...currentFuels];

    if (updated.includes(id)) {
      updated = updated.filter((item) => item !== id);
    } else {
      updated.push(id);
    }

    if (updated.length > 0) {
      params.set('fuel', updated.join(','));
    } else {
      params.delete('fuel');
    }

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex flex-col gap-3">
      {fuelTypes.map((item) => (
        <label
          key={item.id}
          className="flex items-center gap-2 cursor-pointer hover:text-[#D4AF37] transition duration-300"
        >
          <input
            type="checkbox"
            checked={currentFuels.includes(item.id)}
            onChange={() => toggle(item.id)}
            className="accent-[#D4AF37]"
          />
          <span className="font-light uppercase tracking-widest">{item.name}</span>
        </label>
      ))}
    </div>
  );
};

export default FuelTypeFilter;
