import React from 'react';
import { listingData } from '../../data/listing';

const PriceBreakdown = () => {
  const { basePrice, stayDuration, cleaningFee, serviceFee } = listingData.pricing;

  const baseTotal = basePrice * stayDuration;
  const total = baseTotal + cleaningFee + serviceFee;

  // Format currency
  const format = (amount) => `₹${amount.toLocaleString('en-IN')}`;

  return (
    <div className="mt-6 flex flex-col gap-4 text-[16px] text-airbnb-dark">
      <div className="flex justify-between items-center">
        <span className="underline">{format(basePrice)} x {stayDuration} nights</span>
        <span>{format(baseTotal)}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="underline">Cleaning fee</span>
        <span>{format(cleaningFee)}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="underline">Airbnb service fee</span>
        <span>{format(serviceFee)}</span>
      </div>
      
      <div className="border-t border-gray-300 pt-6 mt-2 flex justify-between items-center font-semibold text-[16px]">
        <span>Total before taxes</span>
        <span>{format(total)}</span>
      </div>
    </div>
  );
};

export default PriceBreakdown;
