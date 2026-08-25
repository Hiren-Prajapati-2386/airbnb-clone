import React from 'react';
import { X, ChevronLeft, Share, Heart } from 'lucide-react';

const OverlayTopBar = ({ 
  onClose, 
  title = '', 
  leftAction = 'close', // 'close' or 'back'
  showActions = false // true for PhotoTour (Share/Save buttons)
}) => {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white min-h-[64px]">
      
      {/* Left Area (Close or Back) */}
      <div className="flex-1 flex justify-start">
        <button 
          onClick={onClose}
          className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition flex items-center justify-center"
          aria-label="Close modal"
        >
          {leftAction === 'close' ? <X size={20} /> : <ChevronLeft size={24} strokeWidth={2.5} />}
        </button>
      </div>
      
      {/* Center Area (Title) */}
      <div className="flex-1 flex justify-center">
        <h2 className="text-[16px] font-semibold text-airbnb-dark">{title}</h2>
      </div>
      
      {/* Right Area (Actions or empty) */}
      <div className="flex-1 flex justify-end gap-2">
        {showActions && (
          <>
            <button className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition">
              <Share size={18} strokeWidth={2} />
            </button>
            <button className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition">
              <Heart size={18} strokeWidth={2} />
            </button>
          </>
        )}
      </div>

    </div>
  );
};

export default OverlayTopBar;
