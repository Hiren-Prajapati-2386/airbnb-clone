import React from 'react';
import { listingData } from '../../data/listing';

const LocationMap = () => {
  const { location } = listingData;

  if (!location) return null;

  return (
    <div className="py-12 border-b border-gray-200">
      <h2 className="text-[22px] font-semibold text-airbnb-dark mb-4">
        Where you'll be
      </h2>
      
      <div className="text-[16px] text-airbnb-dark mb-6">
        {location}
      </div>
      
      {/* Map Container */}
      <div className="w-full h-[480px] rounded-xl overflow-hidden relative" style={{ backgroundColor: '#EDF1E5' }}>
        
        {/* Grid Background */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'linear-gradient(#e1e7d8 1px, transparent 1px), linear-gradient(90deg, #e1e7d8 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>

        {/* Water Area (Blue Wedge) */}
        <div className="absolute top-0 left-0 bottom-0 w-[40%] bg-[#A8D3E6] clip-path-water" style={{ clipPath: 'polygon(0 0, 100% 0, 45% 100%, 0 100%)' }}></div>

        {/* Green Circles (Parks/Vegetation) */}
        <div className="absolute top-[40%] left-[25%] w-[80px] h-[80px] rounded-full bg-[#C7E0C0] opacity-90"></div>
        <div className="absolute top-[55%] right-[25%] w-[110px] h-[110px] rounded-full bg-[#C7E0C0] opacity-90"></div>

        {/* Search Button */}
        <button className="absolute top-4 left-4 bg-white p-2.5 rounded-full shadow-md hover:scale-105 transition">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-none stroke-current stroke-[3]">
            <path d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3l9 9" />
          </svg>
        </button>

        {/* Zoom Controls */}
        <div className="absolute top-4 right-4 flex flex-col shadow-md rounded-lg overflow-hidden bg-white">
          <button className="p-3 hover:bg-gray-50 border-b border-gray-200 active:bg-gray-100 transition">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current">
              <path d="M28 14H18V4h-4v10H4v4h10v10h4V18h10z" />
            </svg>
          </button>
          <button className="p-3 hover:bg-gray-50 active:bg-gray-100 transition">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current">
              <path d="M28 14H4v4h24z" />
            </svg>
          </button>
        </div>

        {/* House Pin */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* Halo effect */}
          <div className="absolute inset-0 bg-black/10 rounded-full scale-150 animate-pulse"></div>
          
          <div className="relative bg-[#222222] text-white p-4 rounded-full shadow-lg">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 fill-current">
              <path d="M16 2.5l-13 13v15h26v-15l-13-13z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11 30.5V17h10v13.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M4 30.5h24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

      </div>

      <div className="mt-4 font-medium text-[15px] text-airbnb-dark">
        Exact location will be provided after booking.
      </div>

      <div className="mt-12 pt-12 border-t border-gray-200">
        <h2 className="text-[22px] font-semibold text-airbnb-dark mb-4">
          Neighbourhood highlights
        </h2>
        <p className="text-[16px] text-airbnb-dark mb-4">
          Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.
        </p>
        <button className="flex items-center font-medium underline text-[16px] text-airbnb-dark">
          Show more
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="block h-3 w-3 ml-1 fill-none stroke-current stroke-[4]">
            <path d="M12 4l11 11.293a1 1 0 0 1 0 1.414L12 28" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default LocationMap;
