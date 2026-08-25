import React from 'react';

const ThingsToKnow = () => {
  return (
    <div className="py-12 border-b border-gray-200">
      <h2 className="text-[22px] font-semibold text-airbnb-dark mb-6">
        Things to know
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Cancellation Policy */}
        <div>
          <div className="mb-4">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="block h-6 w-6 fill-none stroke-current stroke-2">
              <path d="M26 4H6a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
              <path d="M9 2v4" />
              <path d="M23 2v4" />
              <path d="M4 10h24" />
              <path d="M11 16l10 10" />
              <path d="M21 16L11 26" />
            </svg>
          </div>
          <h3 className="font-semibold text-airbnb-dark mb-3 text-[16px]">Cancellation policy</h3>
          <div className="text-[15px] text-airbnb-dark flex flex-col gap-2">
            <p>Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.</p>
            <p>Review this host's full policy for details.</p>
          </div>
          <button className="underline font-semibold text-[15px] mt-3 text-airbnb-dark">
            Learn more
          </button>
        </div>

        {/* House rules */}
        <div>
          <div className="mb-4">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="block h-6 w-6 fill-none stroke-current stroke-2">
              <circle cx="9" cy="9" r="7" />
              <path d="M14 14l11 11" />
              <path d="M20 20l4-4" />
              <path d="M23 23l4-4" />
            </svg>
          </div>
          <h3 className="font-semibold text-airbnb-dark mb-3 text-[16px]">House rules</h3>
          <div className="text-[15px] text-airbnb-dark flex flex-col gap-2">
            <p>Check-in after 2:00 pm</p>
            <p>Checkout before 11:00 am</p>
            <p>3 guests maximum</p>
          </div>
          <button className="underline font-semibold text-[15px] mt-3 text-airbnb-dark">
            Learn more
          </button>
        </div>

        {/* Safety & property */}
        <div>
          <div className="mb-4">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="block h-6 w-6 fill-none stroke-current stroke-2">
              <path d="M16 2.5L2.5 8v9.5c0 8.5 13.5 12 13.5 12s13.5-3.5 13.5-12V8L16 2.5z" />
              <path d="M16 2.5v27" />
            </svg>
          </div>
          <h3 className="font-semibold text-airbnb-dark mb-3 text-[16px]">Safety & property</h3>
          <div className="text-[15px] text-airbnb-dark flex flex-col gap-2">
            <p>Carbon monoxide alarm not reported</p>
            <p>Smoke alarm not reported</p>
            <p>Exterior security cameras on property</p>
          </div>
          <button className="underline font-semibold text-[15px] mt-3 text-airbnb-dark">
            Learn more
          </button>
        </div>

      </div>
    </div>
  );
};

export default ThingsToKnow;
