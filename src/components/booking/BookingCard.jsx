import React from 'react';
import { listingData } from '../../data/listing';
import DateRangePicker from './DateRangePicker';
import GuestSelector from './GuestSelector';
import ReserveButton from './ReserveButton';

const BookingCard = () => {
  const { discountedTotal, stayDuration } = listingData.pricing;

  const format = (amount) => `₹${amount.toLocaleString('en-IN')}`;

  return (
    <div className="sticky top-28 w-full">
      {/* Discount Banner */}
      <div className="flex items-center justify-between bg-white border border-gray-200 rounded-xl p-6 shadow-[0_6px_16px_rgba(0,0,0,0.12)] mb-6">
        <div className="flex items-start gap-4">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="block h-6 w-6 fill-[#008A05] mt-1">
            <path d="M26 2v10a14 14 0 1 1-18.4 0V2a2 2 0 0 1 2-2h12.8a2 2 0 0 1 1.6 2zM12 28a12 12 0 1 0 0-24v24z" />
          </svg>
          <div className="text-[16px] text-airbnb-dark font-medium leading-[20px]">
            Get 10% off your next stay.<br />
            <span className="underline cursor-pointer text-[14px]">Terms apply</span>
          </div>
        </div>
        <button className="px-4 py-2 border border-gray-800 rounded-lg text-[14px] font-semibold hover:bg-gray-50 transition">
          Claim
        </button>
      </div>

      {/* Main Card */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-[0_6px_16px_rgba(0,0,0,0.12)]">
        {/* Price Header */}
        <div className="flex items-baseline gap-1 mb-6">
          <span className="text-[22px] font-semibold text-airbnb-dark">
            {format(discountedTotal)}
          </span>
          <span className="text-[16px] text-airbnb-dark font-normal">
            for {stayDuration} nights
          </span>
        </div>

        {/* Input Group */}
        <div className="border border-gray-400 rounded-lg overflow-hidden mb-4">
          <DateRangePicker />
          <GuestSelector />
        </div>

        {/* Cancellation */}
        <div className="text-[15px] text-center text-airbnb-dark mb-4 bg-gray-100/60 rounded-lg py-3 mt-4 px-2 font-light">
          Free cancellation before <b className="font-semibold">17 October</b>
        </div>

        {/* Reserve Button */}
        <ReserveButton />

      </div>

      {/* Report Listing */}
      <div className="flex justify-center items-center gap-3 mt-6 cursor-pointer text-gray-500 hover:text-gray-800 transition">
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="block h-4 w-4 fill-current">
          <path d="m7.5011 1c.5272 0 .9591.40794.99725.92537l.00275.07463v1h5.5c.31265 0 .5435.281645.4935.581075l-.01275.056285-.96125 3.36264.96125 3.36265c.08055.2818-.0967.5625-.36775.62465l-.0554.00945-.0576.00325h-5.5c-.5272 0-.9591-.40795-.99725-.92535l-.00275-.07465v-1h-5v6h-1v-14zm1 3h-1v4h1z" />
        </svg>
        <span className="underline text-[14px] font-medium">Report this listing</span>
      </div>
    </div>
  );
};

export default BookingCard;
