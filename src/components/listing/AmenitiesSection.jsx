import React from 'react';
import { listingData } from '../../data/listing';
import { AmenityIcons } from '../../data/AmenityIcons';

const getIcon = (iconName, available) => {
  const colorClass = available ? 'text-[#222222]' : 'text-gray-400';
  
  const IconComponent = AmenityIcons[iconName] || (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="block h-[24px] w-[24px] fill-current">
      <path d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2zm0 26a12 12 0 1 1 12-12 12 12 0 0 1-12 12z" />
    </svg>
  );
  
  return (
    <div className={colorClass}>
      {IconComponent}
    </div>
  );
};

const AmenitiesSection = ({ onOpenModal }) => {
  const amenityGroups = listingData.amenityGroups;

  if (!amenityGroups || amenityGroups.length === 0) return null;

  // Flatten and extract isTop amenities for the preview grid
  const previewAmenities = amenityGroups
    .flatMap(group => group.amenities)
    .filter(amenity => amenity.isTop)
    .slice(0, 10);
    
  const totalAmenities = amenityGroups.reduce((acc, group) => acc + group.amenities.length, 0);

  return (
    <div className="py-8 border-b border-gray-200">
      <h2 className="text-[22px] font-semibold text-airbnb-dark mb-6">
        What this place offers
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-2 mb-8">
        {previewAmenities.map((amenity, index) => (
          <div key={index} className="flex items-center gap-4">
            {getIcon(amenity.name, amenity.available)}
            <span className={`text-[16px] ${!amenity.available ? 'text-gray-400 line-through' : 'text-airbnb-dark'}`}>
              {amenity.name}
            </span>
          </div>
        ))}
      </div>
      
      {totalAmenities > 5 && (
        <button 
          onClick={onOpenModal}
          className="border border-black text-airbnb-dark font-medium text-[16px] px-6 py-3 rounded-lg hover:bg-gray-50 transition"
        >
          Show all {totalAmenities} amenities
        </button>
      )}
    </div>
  );
};

export default AmenitiesSection;
