import React, { useMemo, useRef, useState, useEffect } from 'react';
import OverlayShell from './OverlayShell';
import OverlayTopBar from './OverlayTopBar';
import { listingData } from '../../data/listing';
import { motion } from 'framer-motion';

const PhotoTour = ({ isOpen, onClose, onPhotoClick, initialPhotoUrl }) => {
  const photoTour = listingData.photoTour;
  const categoriesRef = useRef([]);
  const [activeCategory, setActiveCategory] = useState(photoTour?.[0]?.category || '');

  // Flatten photos so Lightbox can continue to use a simple index
  const flatPhotos = useMemo(() => {
    return photoTour ? photoTour.flatMap(cat => cat.photos) : [];
  }, [photoTour]);

  // Set up intersection observer to highlight active category in the header
  useEffect(() => {
    if (!isOpen) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.dataset.category);
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
      }
    );

    categoriesRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isOpen, photoTour]);

  // Scroll to exact photo when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        if (initialPhotoUrl) {
          const targetIndex = flatPhotos.findIndex(p => p.url === initialPhotoUrl);
          if (targetIndex !== -1) {
            const el = document.getElementById(`tour-photo-${targetIndex}`);
            if (el) {
              el.scrollIntoView({ behavior: 'auto', block: 'center' });
              return;
            }
          }
        }
        // Fallback or if no initial photo: scroll to top
        const container = document.getElementById('photo-tour-scroll-container');
        if (container) container.scrollTop = 0;
      }, 50);
    }
  }, [isOpen, initialPhotoUrl, flatPhotos]);

  if (!photoTour) return null;

  let globalPhotoIndex = 0;

  const scrollToCategory = (category) => {
    const el = categoriesRef.current.find(c => c && c.dataset.category === category);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <OverlayShell isOpen={isOpen} onClose={onClose} variant="fullscreen">
      <div className="flex flex-col h-full bg-white relative z-[1000]">
        <OverlayTopBar 
          onClose={onClose} 
          leftAction="back" 
          showActions={true} 
          title="Photo tour"
        />
        
        {/* 
          FIX 1: THE SCROLL WRAPPER
          Everything below the TopBar is now inside this single scrolling div.
          This ensures the Thumbnail Nav scrolls away as you move down the page.
        */}
        <div id="photo-tour-scroll-container" className="flex-1 overflow-y-auto no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          
          {/* 
            FIX 2 & 3: GRID LAYOUT & SIZING
            Changed from flexbox to an 8-column grid. 
            Images now use aspect-[106/100] to match Airbnb perfectly.
          */}
          <div className="max-w-[1024px] mx-auto px-4 md:px-6 pt-6 pb-12 hidden md:block">
            <div className="grid grid-cols-4 lg:grid-cols-8 gap-3">
              {photoTour.map((cat) => (
                <button 
                  key={cat.category}
                  onClick={() => scrollToCategory(cat.category)}
                  className="flex flex-col items-start gap-2 text-left group"
                >
                  <div className="w-full relative rounded-lg overflow-hidden">
                    <img 
                      src={cat.photos[0]?.url} 
                      alt="" 
                      className={`w-full aspect-[106/100] object-cover transition-transform duration-300 group-hover:scale-105 ${activeCategory === cat.category ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'}`} 
                    />
                  </div>
                  <span className={`text-[14px] leading-tight ${activeCategory === cat.category ? 'text-[#222222] font-semibold' : 'text-[#717171] font-normal'}`}>
                    {cat.category}
                  </span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Main Photo Content Area */}
          <div className="max-w-[1120px] mx-auto px-4 md:px-24 flex flex-col gap-12 lg:gap-16 pb-20">
            {photoTour.map((cat, catIndex) => {
              return (
                <div 
                  key={cat.category} 
                  data-category={cat.category}
                  ref={el => categoriesRef.current[catIndex] = el}
                  className="flex flex-col md:flex-row gap-8 lg:gap-16"
                >
                  {/* Left Column: Sticky Room Name */}
                  <div className="md:w-[35%] flex-shrink-0 relative">
                    <div className="sticky top-[32px] mt-2">
                      <h2 className="text-[32px] leading-tight font-semibold text-[#222222] mb-3 tracking-tight">{cat.category}</h2>
                      {cat.amenities && (
                        <p className="text-[16px] text-[#717171] leading-relaxed">{cat.amenities}</p>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Photos Grid */}
                  <div className="md:w-[65%]">
                    <div className="grid grid-cols-2 gap-4">
                      {cat.photos.map((photo, pIndex) => {
                        const currentIndex = globalPhotoIndex++;
                        
                        // 1st full width, next 2 side-by-side
                        const isFullWidth = (pIndex % 3 === 0);

                        return (
                          <div 
                            key={currentIndex} 
                            className={`w-full ${isFullWidth ? 'col-span-2' : 'col-span-1'}`}
                          >
                            <motion.img 
                              id={`tour-photo-${currentIndex}`}
                              layoutId={`photo-${photo.id || currentIndex}`}
                              src={photo.url} 
                              alt={cat.category}
                              className="w-full h-auto object-cover rounded-xl cursor-pointer hover:opacity-90 transition-opacity"
                              style={{ aspectRatio: isFullWidth ? '16/10' : '4/3' }}
                              onClick={() => onPhotoClick(currentIndex)}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </OverlayShell>
  );
};

export default PhotoTour;