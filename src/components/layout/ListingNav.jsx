import React, { useEffect, useState } from 'react';
import { listingData } from '../../data/listing';

const ListingNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { discountedTotal, stayDuration } = listingData.pricing ? listingData.pricing : {};
  const { rating, reviewCount } = listingData;
  
  const format = (amount) => `₹${amount?.toLocaleString('en-IN')}`;

  const [activeSection, setActiveSection] = useState('photos');

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past the photo grid roughly
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Determine active section
      const sections = ['photos', 'amenities', 'reviews', 'location'];
      let current = 'photos';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the top of the section is near or above the middle of the viewport
          if (rect.top <= window.innerHeight / 3) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = (section) => {
    const isActive = activeSection === section;
    return `h-full flex items-center pt-1 border-b-[4px] transition ${
      isActive 
        ? 'border-[#222222] text-[#222222] font-semibold' 
        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-[#222222]'
    }`;
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm transition-transform duration-300 transform ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      
      <div className="flex h-[80px] items-center justify-between px-4 sm:px-12 xl:px-20 max-w-[2520px] mx-auto w-full">
        
        {/* 
          FIX: Added ml margins (md:ml-[80px] lg:ml-[140px] xl:ml-[180px]) 
          This slides the links inwards towards the center of the screen!
        */}
        <nav className="hidden md:flex gap-8 h-full font-medium text-[14px] md:ml-[80px] lg:ml-[140px] xl:ml-[120px]">
          
          <a href="#photos" className={navLinkClass('photos')}>
            Photos
          </a>
          <a href="#amenities" className={navLinkClass('amenities')}>
            Amenities
          </a>
          <a href="#reviews" className={navLinkClass('reviews')}>
            Reviews
          </a>
          <a href="#location" className={navLinkClass('location')}>
            Location
          </a>
        </nav>

        {/* Right Info & Reserve */}
        <div className="flex items-center gap-6 ml-auto">
          <div className="hidden lg:flex flex-col items-end">
            <div className="flex items-baseline gap-1 text-[#222222]">
              <span className="text-[16px] font-bold">
                {format(discountedTotal)}
              </span>
              <span className="text-[14px] font-normal">
                for {stayDuration} nights
              </span>
            </div>
            <div className="flex items-center gap-1 text-[12px] font-semibold mt-[-2px] text-[#222222]">
              <span>★ {rating}</span>
              <span className="text-gray-500 font-normal">·</span>
              <span className="text-gray-500 hover:underline cursor-pointer">{reviewCount} reviews</span>
            </div>
          </div>
          
          <button className="bg-[#E61E4D] hover:bg-[#D70466] text-white px-8 py-[12px] rounded-full font-semibold text-[15px] transition">
            Reserve
          </button>
        </div>

      </div>
    </div>
  );
};

export default ListingNav;