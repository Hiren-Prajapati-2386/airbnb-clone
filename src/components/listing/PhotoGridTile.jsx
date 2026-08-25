import React from 'react';

const PhotoGridTile = ({ photo, className = '', onClick }) => {
  if (!photo) return null;
  
  return (
    <div 
      className={`relative overflow-hidden group cursor-pointer w-full h-full ${className}`}
      onClick={onClick}
    >
      {/* Subtle darkening overlay on hover */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-10 pointer-events-none"></div>
      
      <img 
        src={photo.url} 
        alt={photo.caption || "Property photo"}
        className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        // Fallback for missing images
        onError={(e) => {
          e.target.src = "https://a0.muscache.com/im/pictures/miso/Hosting-53538058/original/6c650e8a-e5e3-4bdf-83d8-55a901abfb6f.jpeg";
        }}
      />
    </div>
  );
};

export default PhotoGridTile;
