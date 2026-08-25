import React from 'react';
import PhotoGridTile from './PhotoGridTile';
import { listingData } from '../../data/listing';

const PhotoGrid = ({ onOpenTour }) => {
  const photos = listingData.photos;

  if (!photos || photos.length < 5) {
    return <div className="h-[60vh] bg-gray-200 rounded-xl flex items-center justify-center">Not enough photos</div>;
  }

  return (
    <div className="relative w-full h-[68vh] min-h-[300px] max-h-[600px] rounded-xl overflow-hidden flex gap-2">
      
      {/* Main Left Image (50% width) */}
      <div className="w-1/2 h-full">
        <PhotoGridTile photo={photos[0]} onClick={() => onOpenTour(photos[0])} />
      </div>
      
      {/* Right Grid (50% width, 2x2 grid) */}
      <div className="w-1/2 h-full flex flex-col gap-2">
        
        {/* Top row of right side */}
        <div className="w-full h-[calc(50%-4px)] flex gap-2">
          <div className="w-1/2 h-full">
            <PhotoGridTile photo={photos[1]} onClick={() => onOpenTour(photos[1])} />
          </div>
          <div className="w-1/2 h-full">
            <PhotoGridTile photo={photos[2]} onClick={() => onOpenTour(photos[2])} />
          </div>
        </div>

        {/* Bottom row of right side */}
        <div className="w-full h-[calc(50%-4px)] flex gap-2">
          <div className="w-1/2 h-full">
            <PhotoGridTile photo={photos[3]} onClick={() => onOpenTour(photos[3])} />
          </div>
          <div className="w-1/2 h-full relative">
            <PhotoGridTile photo={photos[4]} onClick={() => onOpenTour(photos[4])} />
            
            {/* Show All Photos Button */}
            <button 
              onClick={() => onOpenTour()}
              className="absolute bottom-6 right-6 bg-white border border-black text-black px-4 py-1.5 rounded-lg font-medium text-[14px] flex items-center gap-2 hover:bg-gray-100 transition shadow-sm z-20"
            >
              <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="block h-4 w-4 fill-current">
                <path d="M2 3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3zm2.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm3.5-3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm5.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
              </svg>
              Show all photos
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default PhotoGrid;
