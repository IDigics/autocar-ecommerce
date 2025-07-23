'use client';

import React, { useState } from 'react';

const fuelTypes = [
  { id: 1, name: 'hybrid' },
  { id: 2, name: 'diesel' },
  { id: 3, name: 'gasoline' },
  { id: 4, name: 'electric' },
];

const FuelTypeFilter = () => {
  const [selected, setSelected] = useState<number[]>([]);

  const toggle = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
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

export default FuelTypeFilter;
