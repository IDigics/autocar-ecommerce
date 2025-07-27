'use client';

import React, { useState, useEffect } from 'react';
import { Range, getTrackBackground } from 'react-range';
import { useSearchParams, useRouter } from 'next/navigation';

const MIN = 0;
const MAX = 100000;

export default function PriceFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const minFromUrl = Number(searchParams.get('minPrice')) || 20000;
  const maxFromUrl = Number(searchParams.get('maxPrice')) || 80000;

  const [values, setValues] = useState([minFromUrl, maxFromUrl]);

  useEffect(() => {
    setValues([minFromUrl, maxFromUrl]);
  }, [minFromUrl, maxFromUrl]);

  // ✅ Cette fonction ne fait que mettre à jour localement les valeurs
  const onChange = (vals: number[]) => {
    setValues(vals);
  };

  // ✅ Et ici, on update l'URL uniquement quand l'utilisateur a fini
  const onFinalChange = (vals: number[]) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('minPrice', vals[0].toString());
    params.set('maxPrice', vals[1].toString());

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="w-full">
      <Range
        values={values}
        step={1000}
        min={MIN}
        max={MAX}
        onChange={onChange}
        onFinalChange={onFinalChange}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className="w-full h-2 rounded-full cursor-pointer"
            style={{
              background: getTrackBackground({
                values,
                colors: ['#d4af37', '#f8f8f6', '#d4af37'],
                min: MIN,
                max: MAX,
              }),
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => {
          const { key, ...rest } = props;
          return (
            <div
              key={key}
              {...rest}
              className="h-6 w-6 rounded-full bg-[#D4AF37] shadow-lg flex items-center justify-center cursor-pointer"
            >
              <div className="h-3 w-1 bg-white rounded-sm" />
            </div>
          );
        }}
      />
      <div className="flex justify-between mt-3 text-[#0A0A23] font-light tracking-wide text-sm select-none">
        <span>{values[0].toLocaleString()} DT</span>
        <span>{values[1].toLocaleString()} DT</span>
      </div>
    </div>
  );
}
