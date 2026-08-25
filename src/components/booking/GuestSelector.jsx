import React from 'react';

const GuestSelector = () => {
  return (
    <div className="w-full p-3 cursor-pointer flex justify-between items-center">
      <div>
        <div className="text-[10px] font-bold uppercase text-airbnb-dark">Guests</div>
        <div className="text-[14px] text-airbnb-dark mt-0.5">3 guests</div>
      </div>
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="block h-4 w-4 fill-current stroke-current stroke-[4px] overflow-visible">
        <path d="M28 9.25l-12 12-12-12"></path>
      </svg>
    </div>
  );
};

export default GuestSelector;
