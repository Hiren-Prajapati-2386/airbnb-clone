import React from 'react';
import OverlayShell from './OverlayShell';
import OverlayTopBar from './OverlayTopBar';
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

const AmenitiesModal = ({ isOpen, onClose }) => {
  const amenityGroups = listingData.amenityGroups || [];

  return (
    <OverlayShell isOpen={isOpen} onClose={onClose} variant="modal">
      <OverlayTopBar onClose={onClose} />
      
      <div className="flex-1 overflow-y-auto px-6 py-6 md:px-10 custom-scrollbar">
        <h2 className="text-[26px] font-bold text-airbnb-dark mb-8">
          What this place offers
        </h2>
        
        {amenityGroups.map((group, groupIndex) => {
          if (group.amenities.length === 0) return null;
          
          return (
            <div key={groupIndex} className="mb-10 border-b border-gray-200 pb-10 last:border-b-0 last:mb-6 last:pb-6">
              <h3 className="text-[18px] font-semibold text-airbnb-dark mb-6">{group.title}</h3>
              <div className="flex flex-col gap-6">
                {group.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-4 py-1">
                    {getIcon(amenity.name, amenity.available)}
                    <span className={`text-[16px] font-light ${amenity.available ? 'text-[#222222]' : 'text-[#222222] line-through decoration-1'}`}>
                      {amenity.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </OverlayShell>
  );
};

export default AmenitiesModal;
