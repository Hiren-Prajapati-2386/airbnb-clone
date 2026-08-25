import React from 'react';
import { listingData } from '../../data/listing';

const CoHost = ({ name, avatar, color }) => (
  <div className="flex items-center gap-3">
    {avatar ? (
      <img src={avatar} alt={name} className="w-9 h-9 rounded-full object-cover" />
    ) : (
      <div className={`w-9 h-9 rounded-full flex items-center justify-center font-semibold text-[14px] ${color}`}>
        {name.charAt(0)}
      </div>
    )}
    <span className="text-[14px] text-airbnb-dark">{name}</span>
  </div>
);

const HostProfileCard = () => {
  const { host } = listingData;

  if (!host) return null;

  return (
    <div className="py-12 border-b border-gray-200">
      <h2 className="text-[26px] font-semibold text-airbnb-dark mb-8">
        Meet your host
      </h2>
      
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
        
        {/* Left Column: Host Card & Personal Details */}
        <div className="w-full lg:w-[340px] flex-shrink-0">
          
          {/* Shadow Card */}
          <div className="bg-white rounded-[24px] p-6 shadow-[0_6px_20px_rgba(0,0,0,0.1)] flex justify-between items-center mb-8">
            
            {/* Left Side of Card: Avatar and Name */}
            <div className="flex flex-col items-center">
              <div className="relative mb-3">
                <div className="w-[104px] h-[104px] rounded-full bg-[#1A382D] text-white flex flex-col items-center justify-center text-center p-2 leading-tight">
                  <span className="text-[11px] tracking-widest font-semibold">MIRASHYA</span>
                  <span className="text-[9px] tracking-widest">HOMES</span>
                </div>
                <div className="absolute bottom-0 -right-1 bg-[#E61E4D] text-white rounded-full p-1 shadow-sm border-[3px] border-white">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="block h-4 w-4 fill-current">
                    <path d="M12.984 25.125l-8.62-8.621 2.122-2.122 6.498 6.498L27.608 6.257l2.122 2.122-16.746 16.746z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-[22px] font-bold text-airbnb-dark leading-none mb-1">Mirashya</h3>
              <h3 className="text-[22px] font-bold text-airbnb-dark leading-none mb-2">Homes</h3>
              <div className="text-[14px] font-medium text-airbnb-dark">Host</div>
            </div>

            {/* Right Side of Card: Stats */}
            <div className="flex flex-col w-[110px]">
              <div className="py-2 border-b border-gray-200">
                <div className="text-[20px] font-bold text-airbnb-dark leading-tight">1,463</div>
                <div className="text-[11px] font-semibold text-gray-500 mt-0.5">Reviews</div>
              </div>
              <div className="py-2 border-b border-gray-200">
                <div className="text-[20px] font-bold text-airbnb-dark flex items-center gap-1 leading-tight">
                  4.68<span className="text-[12px]">★</span>
                </div>
                <div className="text-[11px] font-semibold text-gray-500 mt-0.5">Rating</div>
              </div>
              <div className="py-2">
                <div className="text-[20px] font-bold text-airbnb-dark leading-tight">2</div>
                <div className="text-[11px] font-semibold text-gray-500 leading-tight mt-0.5">Years hosting</div>
              </div>
            </div>

          </div>

          {/* Personal Details */}
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-4">
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="block h-6 w-6 fill-none stroke-current stroke-2 mt-0.5">
                <circle cx="16" cy="11" r="9" />
                <path d="M14 20h4l-2 3z" />
                <path d="M16 23c-1.5 2.5 1.5 5.5 0 8" />
              </svg>
              <span className="text-[15px] text-airbnb-dark">Born in the 80s</span>
            </div>
            <div className="flex items-start gap-4">
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="block h-6 w-6 fill-none stroke-current stroke-2 mt-0.5">
                <path d="M16 4l14 7-14 7-14-7 14-7z" />
                <path d="M6 11v10l10 5 10-5V11" />
                <path d="M26 18v8" />
              </svg>
              <span className="text-[15px] text-airbnb-dark">Where I went to school: NICMAR GOA</span>
            </div>
          </div>

        </div>

        {/* Right Column: Co-Hosts & Host Details */}
        <div className="flex-1 w-full pt-2">
          
          <h3 className="text-[20px] font-semibold text-airbnb-dark mb-6">Co-Hosts</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4 mb-12">
            <CoHost name="Sharath" avatar="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop" />
            <CoHost name="Aman Dev Pahwa" avatar="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop" />
            <CoHost name="Maria Karen Priyanka" avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" />
            <CoHost name="Simran" avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" />
            <CoHost name="Pallavi" avatar="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop" />
            <CoHost name="Sanyukta" avatar="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" />
            <CoHost name="Shruti" color="bg-[#FEEBF3] text-[#D81B60]" />
            <CoHost name="Amisha" color="bg-[#EBF2FF] text-[#1E3A8A]" />
          </div>

          <h3 className="text-[20px] font-semibold text-airbnb-dark mb-4">Host details</h3>
          <div className="text-[15px] text-airbnb-dark mb-1">Response rate: 100%</div>
          <div className="text-[15px] text-airbnb-dark mb-8">Responds within an hour</div>
          
          <button className="bg-[#f7f7f7] hover:bg-[#e3e3e3] border border-[#222222] text-[#222222] px-6 py-[10px] rounded-lg font-semibold text-[15px] transition">
            Message host
          </button>
          
        </div>

      </div>

      {/* Payment Protection */}
      <div className="flex items-center gap-3 mt-10 text-[12px] text-gray-500 max-w-[800px] mx-auto lg:ml-[420px]">
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="block h-5 w-5 fill-none stroke-current stroke-[2] flex-shrink-0">
          <path d="M16 2.5L2.5 8v9.5c0 8.5 13.5 12 13.5 12s13.5-3.5 13.5-12V8L16 2.5z" />
          <path d="M16 2.5v27" />
        </svg>
        To help protect your payment, always use Airbnb to send money and communicate with hosts.
      </div>

    </div>
  );
};

export default HostProfileCard;
