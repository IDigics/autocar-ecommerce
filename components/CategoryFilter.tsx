"use client";

import { useState } from "react";

const categories = [
  { id: 1, name: "suv" },
  { id: 2, name: "convertible" },
  { id: 3, name: "sedan" },
  { id: 4, name: "pickup" },
  { id: 5, name: "coupe" },
];

const CategoryFilter = () => {
  const [selected, setSelected] = useState<number[]>([]);

  const toggle = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

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
