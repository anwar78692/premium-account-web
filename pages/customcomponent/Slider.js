import React, { useEffect, useState } from 'react';

const PriceSlider = ({ min, max, onPriceChange, defaultValue }) => {
  const [price, setPrice] = useState(defaultValue);

  useEffect(() => {
    setPrice(defaultValue);
  }, [defaultValue]);

  const handleSliderChange = (e) => {
    setPrice(e.target.value);
    onPriceChange(e.target.value);
  };

  return (
    <div className="flex flex-col items-center pb-[8px] mr-[10px] pt-[12px]">
      <input
        type="range"
        min={min}
        max={max}
        value={price}
        onChange={handleSliderChange}
        className="w-full mt-2"
      />
      <div className="flex justify-between w-full text-sm">
        <span>₹{min}</span>
        <span>₹{max}</span>
      </div>
    </div>
  );
};

export default PriceSlider;
