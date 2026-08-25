import React from 'react';

// Using generic fallback images if the exact names aren't right, but will try to point to Home_images
const WhereYouSleepSection = () => {
  return (
    <div className="py-12 border-t border-gray-200">
      <h2 className="text-[22px] font-semibold text-airbnb-dark mb-6">Where you'll sleep</h2>
      
      <div className="flex overflow-x-auto gap-4 snap-x hide-scrollbar pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
        
        {/* Bedroom 1 */}
        <div className="min-w-[280px] sm:min-w-[320px] max-w-[320px] flex-shrink-0 snap-start">
          <div className="rounded-xl overflow-hidden mb-4 aspect-[4/3] bg-gray-100 relative">
            <img 
              src="/Home_images/a74e3c0b-3188-4442-9146-1cd4d6ea45df.jpeg"
              alt="Bedroom" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80';
              }}
            />
          </div>
          <h3 className="font-semibold text-[16px] text-airbnb-dark">Bedroom</h3>
          <p className="text-[14px] text-gray-500 font-light">1 double bed</p>
        </div>

        {/* Living room */}
        <div className="min-w-[280px] sm:min-w-[320px] max-w-[320px] flex-shrink-0 snap-start">
          <div className="rounded-xl overflow-hidden mb-4 aspect-[4/3] bg-gray-100 relative">
            <img 
              src="/Home_images/a9831aeb-f441-44f5-a38f-4cf54e3f0fcf.jpeg" 
              alt="Living room" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80';
              }}
            />
          </div>
          <h3 className="font-semibold text-[16px] text-airbnb-dark">Living room</h3>
          <p className="text-[14px] text-gray-500 font-light">1 sofa</p>
        </div>

      </div>
    </div>
  );
};

export default WhereYouSleepSection;
