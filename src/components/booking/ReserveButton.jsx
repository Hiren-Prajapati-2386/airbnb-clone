import React from 'react';

const ReserveButton = () => {
  return (
    <div className="w-full mt-4">
      <button 
        className="w-full py-3.5 rounded-lg text-white font-semibold text-[16px] transition-transform active:scale-[0.98]"
        style={{
          background: 'linear-gradient(to right, #E61E4D 0%, #E31C5F 50%, #D70466 100%)'
        }}
      >
        Reserve
      </button>
      <div className="text-center text-[14px] text-gray-500 mt-4">
        You won't be charged yet
      </div>
    </div>
  );
};

export default ReserveButton;
