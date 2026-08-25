import React, { useRef, useState } from 'react';

const stays = [
  {
    id: 1,
    title: 'Beautiful Studio with a view to die for',
    price: '₹23,600',
    rating: '4.91',
    image: '/Home_images/2367476f-11c4-4a14-a7c6-267be62c1d59.jpeg'
  },
  {
    id: 2,
    title: 'NAQAB - 1bhk with private pool',
    price: '₹42,218',
    rating: '4.95',
    image: '/Home_images/s3.jpeg'
  },
  {
    id: 3,
    title: 'Greentique Luxury Flat with plunge pool, Calangute',
    price: '₹44,506',
    rating: '4.94',
    image: '/Home_images/s2.jpeg'
  },
  {
    id: 4,
    title: 'The Tropical Studio | 5 mins to Beach',
    price: '₹22,824',
    rating: '4.96',
    image: '/Home_images/s1.jpeg'
  },
  {
    id: 5,
    title: 'Luxury Casa Bella 1BHK with plunge pool',
    price: '₹39,942',
    rating: '4.95',
    image: '/Home_images/fe37b80e-da8a-4225-b27b-dfbb5d763c01.jpeg'
  },
  {
    id: 6,
    title: 'Kanso by Earthen Window | Jacuzzi | Terrace | Pool',
    price: '₹45,648',
    rating: '5.0',
    image: '/Home_images/fc02f48f-a937-42c5-895d-f9cc3113d6ca.jpeg'
  },
  {
    id: 7,
    title: 'Luxury Apt | Private Pool | 6 Mins from Beach',
    price: '₹48,786',
    rating: '4.93',
    image: '/Home_images/f6de1663-4e9c-4414-b63b-29a154a92ee1.jpeg'
  },
  {
    id: 8,
    title: 'Serendipity Cottage - Calm Stay in Calangute',
    price: '₹22,824',
    rating: '4.92',
    image: '/Home_images/f1da1c3d-0d10-481e-9b63-c71f9073f30b.jpeg'
  }
];

const MoreStaysNearby = () => {
  const scrollContainerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -800, behavior: 'smooth' });
      setCurrentPage(1);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 800, behavior: 'smooth' });
      setCurrentPage(2);
    }
  };

  return (
    <div className="py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[22px] font-semibold text-airbnb-dark">
          More stays nearby
        </h2>
        <div className="flex items-center gap-4">
          <span className="text-[14px] text-airbnb-dark font-medium">
            {currentPage} / {totalPages}
          </span>
          <div className="flex gap-2">
            <button 
              onClick={scrollLeft}
              disabled={currentPage === 1}
              className={`p-2 rounded-full border ${currentPage === 1 ? 'border-gray-200 text-gray-300' : 'border-gray-300 text-airbnb-dark hover:shadow-md transition'}`}
            >
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 fill-current">
                <path d="M20 28L8 16l12-12" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button 
              onClick={scrollRight}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-full border ${currentPage === totalPages ? 'border-gray-200 text-gray-300' : 'border-gray-300 text-airbnb-dark hover:shadow-md transition'}`}
            >
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 fill-current">
                <path d="M12 28l12-12L12 4" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div 
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {stays.map((stay) => (
          <div key={stay.id} className="min-w-[180px] w-[180px] md:min-w-[210px] md:w-[210px] flex-shrink-0 snap-start flex flex-col cursor-pointer group">
            <div className="w-full aspect-[4/3.5] rounded-xl overflow-hidden mb-3">
              <img 
                src={stay.image} 
                alt={stay.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="flex flex-col flex-grow">
              <div className="flex justify-between items-start gap-2 mb-1">
                <h3 className="font-semibold text-airbnb-dark text-[15px] leading-tight line-clamp-2 flex-grow">
                  {stay.title}
                </h3>
              </div>
              <div className="text-[15px] text-airbnb-dark mt-auto">
                <span className="font-semibold">{stay.price}</span>
                <span className="mx-1">·</span>
                <span>★ {stay.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreStaysNearby;
