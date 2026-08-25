import React from 'react';

const DateRangePicker = () => {
  return (
    <div className="flex w-full border-b border-gray-400">
      <div className="flex-1 p-3 border-r border-gray-400 cursor-pointer">
        <div className="text-[10px] font-bold uppercase text-airbnb-dark">Check-in</div>
        <div className="text-[14px] text-airbnb-dark mt-0.5">8/24/2026</div>
      </div>
      <div className="flex-1 p-3 cursor-pointer">
        <div className="text-[10px] font-bold uppercase text-airbnb-dark">Checkout</div>
        <div className="text-[14px] text-airbnb-dark mt-0.5">8/29/2026</div>
      </div>
    </div>
  );
};

export default DateRangePicker;
