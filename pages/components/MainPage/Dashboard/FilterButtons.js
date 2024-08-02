
import React from 'react';
const FilterButtons = ({ onReset, onApply }) => {
    return (
      <div className="flex space-x-4 mt-4">
        <button
          onClick={onReset}
          className="w-[100px] h-[40px] bg-gray-200 text-black font-bold rounded-lg shadow-md hover:bg-gray-500 focus:outline-none transition transform hover:scale-105 hover:shadow-lg active:animate-buttonClick"
        >
          Reset
        </button>
        <button
          onClick={onApply}
          className="w-[100px] h-[40px] bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none transition transform hover:scale-105 hover:shadow-lg active:animate-buttonClick"
        >
          Apply
        </button>
      </div>
    );
  };
  
  export default FilterButtons;
