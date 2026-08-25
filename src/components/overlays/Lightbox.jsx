import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Share, Heart } from 'lucide-react';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';
import { useKeyboardNav } from '../../hooks/useKeyboardNav';
import { listingData } from '../../data/listing';

const Lightbox = ({ isOpen, onClose, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  
  const photos = useMemo(() => {
    return listingData.photoTour ? listingData.photoTour.flatMap(cat => cat.photos) : listingData.photos;
  }, []);

  // Reset index when opened
  useEffect(() => {
    if (isOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  const handleNext = () => {
    if (currentIndex < photos.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  useBodyScrollLock(isOpen);
  useKeyboardNav(isOpen, onClose, handleNext, handlePrev);

  if (!photos) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex flex-col bg-black pointer-events-auto">
          
          {/* Top Navigation Bar */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex items-center justify-between px-6 py-4 text-white min-h-[64px]"
          >
            <div className="flex-1 flex justify-start">
              <button 
                onClick={onClose}
                className="p-2 -ml-2 rounded-full hover:bg-gray-800 transition flex items-center justify-center text-gray-300 hover:text-white"
                aria-label="Close lightbox"
              >
                <X size={24} />
                <span className="ml-2 text-[14px] font-medium hidden sm:block">Close</span>
              </button>
            </div>
            
            <div className="flex-1 flex justify-center text-[15px] font-medium tracking-wide">
              {currentIndex + 1} / {photos.length}
            </div>
            
            <div className="flex-1 flex justify-end gap-2">
              <button className="flex items-center justify-center p-2 rounded-full hover:bg-gray-800 transition text-gray-300 hover:text-white">
                <Share size={18} strokeWidth={2} />
              </button>
              <button className="flex items-center justify-center p-2 rounded-full hover:bg-gray-800 transition text-gray-300 hover:text-white">
                <Heart size={18} strokeWidth={2} />
              </button>
            </div>
          </motion.div>

          {/* Main Image Container */}
          <div className="flex-1 relative flex items-center justify-center overflow-hidden">
            
            {/* Prev Button */}
            <button 
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`absolute left-4 md:left-8 z-10 p-4 rounded-full bg-transparent md:bg-white/10 hover:bg-white/20 transition text-white
                ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}
              `}
            >
              <ChevronLeft size={32} strokeWidth={1.5} />
            </button>

            {/* Image display with shared layoutId */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="w-full h-full flex items-center justify-center px-4"
              >
                <motion.img 
                  layoutId={`photo-${photos[currentIndex].id}`}
                  src={photos[currentIndex].url} 
                  alt={photos[currentIndex].caption || "Listing photo"}
                  className="max-w-full max-h-[85vh] object-contain select-none"
                  draggable={false}
                />
              </motion.div>
            </AnimatePresence>

            {/* Next Button */}
            <button 
              onClick={handleNext}
              disabled={currentIndex === photos.length - 1}
              className={`absolute right-4 md:right-8 z-10 p-4 rounded-full bg-transparent md:bg-white/10 hover:bg-white/20 transition text-white
                ${currentIndex === photos.length - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}
              `}
            >
              <ChevronRight size={32} strokeWidth={1.5} />
            </button>

          </div>

          {/* Caption */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-[80px] flex items-center justify-center text-white text-[15px]"
          >
            {photos[currentIndex].caption || ""}
          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
