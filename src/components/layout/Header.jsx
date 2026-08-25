import React from 'react';
import logo from '../../assets/logo/logo.svg';
import searchIcon from '../../assets/icone/searchbar-house.png';

const Header = () => {
  return (
    <header className="relative z-50 w-full bg-white border-b border-gray-200">
      <div className="flex h-[97px] items-center justify-between px-4 sm:px-12 xl:px-10 max-w-[2520px] mx-auto">
        
        {/* Left: Logo */}
        <div className="flex-1 flex items-center cursor-pointer pl-1">
          <img 
            src={logo} 
            alt="Airbnb Logo"
            className="h-13 object-contain hidden md:block"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <svg
            width="32"
            height="32"
            fill="#FF385C"
            className="block md:hidden"
            viewBox="0 0 1000 1000"
          >
             <path d="M499.5 73.1c-14.8-15.4-33.1-23.7-54-23.7-21.2 0-39.2 8.3-54.1 23.7-17.4 16.7-23.5 37.9-23.5 62.4 0 24.2 6.1 45.4 22.4 62.1 14.8 15.4 33.1 23.7 54 23.7 21.2 0 39.2-8.3 54.1-23.7 16.3-16.7 22.4-37.9 22.4-62.1 0-24.5-6.1-45.7-22.4-62.4zm-54 84.7c-15.6 0-27.1-12.7-27.1-34s11.5-34 27.1-34 27.1 12.7 27.1 34-11.5 34-27.1 34z" transform="scale(3.2) translate(-90, 0)"/>
          </svg>
          {/* Fallback placeholder just in case */}
          <div className="hidden text-airbnb-rausch font-bold text-xl tracking-tight ml-2">airbnb</div>
        </div>

        {/* Center: Search Pill */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex h-[48px] items-center border border-gray-300 rounded-full shadow-sm hover:shadow-md transition duration-200 ease-in-out cursor-pointer pl-2 pr-2">
            <button className="flex items-center gap-2 text-[14px] text-airbnb-dark hover:bg-transparent pl-1 pr-4">
              <img src={searchIcon} alt="House" className="h-10 w-10 object-contain scale-[1.4]" />
              Anywhere
            </button>
            <span className="h-[24px] w-[1px] bg-gray-300 mx-1"></span>
            <button className="text-[14px] text-airbnb-dark hover:bg-transparent px-4">
              Anytime
            </button>
            <span className="h-[24px] w-[1px] bg-gray-300 mx-1"></span>
            <div className="flex items-center gap-3 pl-4 pr-1">
              <button className="text-[14px] text-airbnb-dark hover:bg-transparent px-4">
                Add guests
              </button>
              <div className="bg-airbnb-rausch p-[10px] rounded-full text-white flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="block h-[12px] w-[12px] fill-none stroke-current stroke-[5px] overflow-visible"
                >
                  <path d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Right: User menu */}
        <div className="flex-1 flex justify-end items-center gap-1">
          <button className="hidden md:block text-[13px] font-semibold hover:bg-gray-100 px-4 py-2 rounded-full cursor-pointer transition text-airbnb-dark bg-transparent">
            Become a host
          </button>
          
          <button className="h-10 w-10 flex items-center justify-center hover:bg-gray-100 rounded-full cursor-pointer transition hidden sm:flex bg-transparent">
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="block h-[16px] w-[16px] fill-current text-airbnb-dark">
              <path d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 5.5H8c.68 0 1.72-2.37 1.93-5.23zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 8.75zm-9.67 0H1.8a6.26 6.26 0 0 0 3.94 5.08 12.57 12.57 0 0 1-1.16-4.7l-.03-.38zm1.2-6.58-.12.05a6.26 6.26 0 0 0-3.83 5.03h2.75c.09-1.83.48-3.54 1.06-4.81zm2.25-.42c-.7 0-1.78 2.51-1.94 5.5h3.9c-.15-2.9-1.18-5.34-1.89-5.5h-.07zm2.28.43.03.05a12.95 12.95 0 0 1 1.15 5.02h2.75a6.28 6.28 0 0 0-3.93-5.07z"></path>
            </svg>
          </button>
          
          <button className="h-10 w-10 flex items-center justify-center hover:bg-gray-100 border border-gray-300 rounded-full cursor-pointer transition bg-white ml-1">
             <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="block fill-none h-[14px] w-[14px] stroke-current stroke-[3px] text-airbnb-dark overflow-visible">
               <g fill="none"><path d="M2 16h28M2 24h28M2 8h28"></path></g>
             </svg>
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
