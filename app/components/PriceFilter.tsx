'use client';

import React, { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';

const MIN = 0;
const MAX = 100000;

export default function PriceFilter() {
  const [values, setValues] = useState([20000, 80000]);

  return (
    <div className="w-full">

      <Range
        values={values}
        step={1000}
        min={MIN}
        max={MAX}
        onChange={(vals) => setValues(vals)}
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
        renderThumb={({ props, index }) => (
          <div
            {...props}
            className="h-6 w-6 rounded-full bg-[#D4AF37] shadow-lg flex items-center justify-center cursor-pointer"
          >
            <div className="h-3 w-1 bg-white rounded-sm" />
          </div>
        )}
      />

      <div className="flex justify-between mt-3 text-[#0A0A23] font-light tracking-wide text-sm select-none">
        <span>{values[0].toLocaleString()} DT</span>
        <span>{values[1].toLocaleString()} DT</span>
      </div>
    </div>
  );
}
