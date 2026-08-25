import React from 'react';
import { listingData } from '../../data/listing';
import laurelLeft from '../../assets/icone/laurel-left.png';
import laurelRight from '../../assets/icone/laurel-right.png';
import { AmenityIcons } from '../../data/AmenityIcons';

const ReviewCard = ({ review }) => (
  <div className="flex flex-col gap-3 p-4 border border-gray-200 rounded-xl h-full">
    <div className="flex items-center gap-3">
      <img src={review.avatar} alt={review.author} className="w-12 h-12 rounded-full object-cover" />
      <div>
        <div className="font-medium text-airbnb-dark">{review.author}</div>
        <div className="text-gray-500 text-[14px]">{review.date}</div>
      </div>
    </div>
    
    <div className="flex items-center gap-1 text-[12px] font-medium text-airbnb-dark">
      {/* 5 stars */}
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={`block h-[10px] w-[10px] ${i < review.rating ? 'fill-current' : 'fill-gray-300'}`}>
          <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.621 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" />
        </svg>
      ))}
      <span className="text-gray-400 ml-1">·</span>
      <span className="text-gray-500 ml-1">Stayed about a week</span>
    </div>

    <div className="text-airbnb-dark text-[15px] leading-[22px] line-clamp-3">
      {review.body}
    </div>
    
    <button className="text-airbnb-dark font-medium underline text-[15px] mt-auto text-left w-max">
      Show more
    </button>
  </div>
);

const ReviewsSection = () => {
  const { rating, reviewCount, reviews, isGuestFavorite } = listingData;

  if (!reviews || reviews.length === 0) return null;

  return (
    <div className="py-12 border-b border-gray-200">
      
      {/* 1. Giant Rating Header */}
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <div className="flex items-center justify-center gap-4">
          <img src={laurelLeft} className="h-[110px] w-auto" alt="Guest favorite left" />
          <div className="text-[100px] leading-[100px] font-bold text-airbnb-dark tracking-tighter">
            {rating}
          </div>
          <img src={laurelRight} className="h-[110px] w-auto" alt="Guest favorite right" />
        </div>
        <div className="mt-4 font-semibold text-[22px] tracking-tight">Guest favourite</div>
        <div className="text-gray-500 mt-2 max-w-[360px] mx-auto text-[15px]">
          This home is a guest favourite based on ratings, reviews and reliability
        </div>
        <button className="underline font-medium text-[15px] mt-2">
          How reviews work
        </button>
      </div>

      {/* 2. Rating Categories Grid */}
      <div className="flex flex-wrap md:flex-nowrap justify-between items-start gap-4 mb-10 overflow-hidden">
        
        {/* Overall Rating Graph */}
        <div className="flex flex-col flex-1 pl-0 min-w-[140px] pr-4 md:border-r border-gray-200">
          <div className="text-[14px] font-medium mb-4">Overall rating</div>
          <div className="flex flex-col gap-1 w-full">
            {[
              { val: 5, fill: 'w-[95%]' },
              { val: 4, fill: 'w-[4%]' },
              { val: 3, fill: 'w-[0%]' },
              { val: 2, fill: 'w-[0%]' },
              { val: 1, fill: 'w-[0%]' },
            ].map((bar) => (
              <div key={bar.val} className="flex items-center gap-2">
                <span className="text-[12px] font-semibold w-2 text-right">{bar.val}</span>
                <div className="h-1 bg-gray-200 flex-1 rounded-full overflow-hidden">
                  <div className={`h-full bg-airbnb-dark ${bar.fill} rounded-full`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cleanliness */}
        <div className="flex flex-col flex-1 px-4 min-w-[110px] md:border-r border-gray-200">
          <div className="text-[14px] font-medium mb-2">Cleanliness</div>
          <div className="text-[18px] font-semibold mb-2">5.0</div>
          <div className="mt-auto h-8 w-8 flex items-end">
            <div className="scale-[1.33] origin-bottom-left">
              {AmenityIcons['Cleaning available during stay']}
            </div>
          </div>
        </div>

        {/* Accuracy */}
        <div className="flex flex-col flex-1 px-4 min-w-[110px] md:border-r border-gray-200">
          <div className="text-[14px] font-medium mb-2">Accuracy</div>
          <div className="text-[18px] font-semibold mb-2">5.0</div>
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-none stroke-current stroke-2 mt-auto">
            <circle cx="16" cy="16" r="12" />
            <path d="M11 16l3 3 7-7" />
          </svg>
        </div>

        {/* Check-in */}
        <div className="flex flex-col flex-1 px-4 min-w-[110px] md:border-r border-gray-200">
          <div className="text-[14px] font-medium mb-2">Check-in</div>
          <div className="text-[18px] font-semibold mb-2">5.0</div>
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-none stroke-current stroke-2 mt-auto">
            <path d="M10 22L20 12" />
            <circle cx="22" cy="10" r="3" />
            <path d="M10 22l-2 2-2-2-2 2" />
          </svg>
        </div>

        {/* Communication */}
        <div className="flex flex-col flex-1 px-4 min-w-[110px] md:border-r border-gray-200">
          <div className="text-[14px] font-medium mb-2">Communication</div>
          <div className="text-[18px] font-semibold mb-2">5.0</div>
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-none stroke-current stroke-2 mt-auto">
            <path d="M25 21H7c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h18c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2z" />
            <path d="M11 27l4-6 4 6z" />
          </svg>
        </div>

        {/* Location */}
        <div className="flex flex-col flex-1 px-4 min-w-[110px] md:border-r border-gray-200">
          <div className="text-[14px] font-medium mb-2">Location</div>
          <div className="text-[18px] font-semibold mb-2">4.8</div>
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-none stroke-current stroke-2 mt-auto">
            <path d="M3 6l9-4 8 4 9-4v22l-9 4-8-4-9 4V6z" />
            <path d="M12 2v22" />
            <path d="M20 6v22" />
          </svg>
        </div>

        {/* Value */}
        <div className="flex flex-col flex-1 px-4 min-w-[110px]">
          <div className="text-[14px] font-medium mb-2">Value</div>
          <div className="text-[18px] font-semibold mb-2">4.8</div>
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-none stroke-current stroke-[1.5] mt-auto">
            <path d="M2 14L14 2l16 16-12 12L2 14z" />
            <circle cx="9" cy="9" r="2" />
          </svg>
        </div>

      </div>

      {/* Category Pills (Horizontal Scroll) */}
      <div className="flex items-center gap-3 overflow-x-auto pb-6 mb-2 no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {[
          { name: 'Comfort', score: 6, icon: new URL('../../assets/icone/review_catogory/comfort.png', import.meta.url).href },
          { name: 'Accuracy', score: 5, icon: new URL('../../assets/icone/review_catogory/accuracy.png', import.meta.url).href },
          { name: 'Hot tub', score: 5, icon: new URL('../../assets/icone/review_catogory/hot-tub.png', import.meta.url).href },
          { name: 'Condition', score: 4, icon: new URL('../../assets/icone/review_catogory/condition.png', import.meta.url).href },
          { name: 'Hospitality', score: 8, icon: new URL('../../assets/icone/review_catogory/hospitality.png', import.meta.url).href },
          { name: 'Cleanliness', score: 4, icon: new URL('../../assets/icone/review_catogory/cleanliness.png', import.meta.url).href },
          { name: 'Amenities', score: 2, icon: new URL('../../assets/icone/review_catogory/amenities.png', import.meta.url).href },
          { name: 'Decor', score: 2, icon: new URL('../../assets/icone/review_catogory/decor.png', import.meta.url).href },
          { name: 'Indoor spaces', score: 2, icon: new URL('../../assets/icone/review_catogory/indoor-spaces.png', import.meta.url).href },
          { name: 'Location', score: 2, icon: new URL('../../assets/icone/review_catogory/location.png', import.meta.url).href },
        ].map((pill) => (
          <div key={pill.name} className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 whitespace-nowrap shrink-0 cursor-pointer hover:border-black transition">
            <img src={pill.icon} alt={pill.name} className="h-5 w-5 object-contain" />
            <span className="font-semibold text-[14px]">{pill.name}</span>
            <span className="text-gray-500 text-[14px]">{pill.score}</span>
          </div>
        ))}
      </div>

      {/* 3. Reviews Grid (Full Width, 2 Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-8">
        {reviews.slice(0, 6).map((review) => (
          <div key={review.id}>
            <ReviewCard review={review} />
          </div>
        ))}
      </div>
      
      {reviewCount > 6 && (
        <button className="border border-black text-airbnb-dark font-medium text-[16px] px-6 py-3 rounded-lg hover:bg-gray-50 transition">
          Show all {reviewCount} reviews
        </button>
      )}
    </div>
  );
};

export default ReviewsSection;
