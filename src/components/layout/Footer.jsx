import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-gray-50 py-6 mt-12">
      <div className="max-w-[2520px] mx-auto px-4 sm:px-10 xl:px-20 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-4">
        <div className="flex flex-col md:flex-row items-center gap-2">
          <span>© 2026 Airbnb, Inc.</span>
          <span className="hidden md:inline">·</span>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Privacy</a>
            <span className="hidden md:inline">·</span>
            <a href="#" className="hover:underline">Terms</a>
            <span className="hidden md:inline">·</span>
            <a href="#" className="hover:underline">Sitemap</a>
            <span className="hidden md:inline">·</span>
            <a href="#" className="hover:underline">Company details</a>
          </div>
        </div>
        
        <div className="flex items-center gap-4 font-medium text-airbnb-dark">
          <div className="flex items-center gap-1 cursor-pointer hover:underline">
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="block h-[16px] w-[16px] fill-current">
              <path d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 5.5H8c.68 0 1.72-2.37 1.93-5.23zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 8.75zm-9.67 0H1.8a6.26 6.26 0 0 0 3.94 5.08 12.57 12.57 0 0 1-1.16-4.7l-.03-.38zm1.2-6.58-.12.05a6.26 6.26 0 0 0-3.83 5.03h2.75c.09-1.83.48-3.54 1.06-4.81zm2.25-.42c-.7 0-1.78 2.51-1.94 5.5h3.9c-.15-2.9-1.18-5.34-1.89-5.5h-.07zm2.28.43.03.05a12.95 12.95 0 0 1 1.15 5.02h2.75a6.28 6.28 0 0 0-3.93-5.07z"></path>
            </svg>
            <span>English (IN)</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:underline">
            <span>₹</span>
            <span>INR</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer ml-2">
             <span className="font-semibold hover:underline">Support & resources</span>
             <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="block fill-none h-[12px] w-[12px] stroke-current stroke-[4px] overflow-visible">
               <path d="M4 10l12 12 12-12"></path>
             </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
