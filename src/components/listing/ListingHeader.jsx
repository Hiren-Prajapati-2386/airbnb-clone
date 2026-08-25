import React from 'react';
import { listingData } from '../../data/listing';

const ListingHeader = () => {
  const { title } = listingData;

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-4">
      <div>
        <h1 className="text-[25px] leading-[30px] font-semibold text-airbnb-dark">
          {title}
        </h1>
      </div>
      
      <div className="flex items-center gap-4 text-[14px] font-medium underline">
        <button className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition -ml-2 md:ml-0">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="block h-4 w-4 fill-none stroke-current stroke-[2px] overflow-visible">
            <g fill="none"><path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9M16 3v23V3zM6 13l9.3-9.3a1 1 0 0 1 1.4 0L26 13"></path></g>
          </svg>
          Share
        </button>
        <button className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="block h-4 w-4 fill-none stroke-current stroke-[2px] overflow-visible">
            <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-6.67c-1.8 0-3.38.7-4.65 1.87L16 8.58l-2.35-2.38A6.98 6.98 0 0 0 9 4.33C5.14 4.33 2 7.47 2 11c0 7 7 12.27 14 17z"></path>
          </svg>
          Save
        </button>
      </div>
    </div>
  );
};

export default ListingHeader;
