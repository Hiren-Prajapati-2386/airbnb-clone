import React, { useState } from 'react';
import { listingData } from '../../data/listing';

const DescriptionSection = () => {
  const [expanded, setExpanded] = useState(false);
  const description = listingData.description;

  if (!description) return null;

  return (
    <div className="py-8 border-b border-gray-200">
      <div className={`relative ${expanded ? '' : 'max-h-[140px] overflow-hidden'}`}>
        <div className="whitespace-pre-wrap text-[16px] text-airbnb-dark leading-[24px]">
          {description}
        </div>
        
        {/* Gradient fade when collapsed */}
        {!expanded && (
          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent"></div>
        )}
      </div>
      
      {!expanded && (
        <button 
          onClick={() => setExpanded(true)}
          className="flex items-center gap-1 font-semibold underline text-[16px] text-airbnb-dark mt-2 hover:text-black"
        >
          Show more
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="block h-[12px] w-[12px] fill-none stroke-current stroke-[4px] overflow-visible ml-1">
            <path d="M12 4l12 12-12 12"></path>
          </svg>
        </button>
      )}
    </div>
  );
};

export default DescriptionSection;
