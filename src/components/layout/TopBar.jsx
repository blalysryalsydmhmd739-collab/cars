import React from 'react';

const TopBar = () => {
  return (
    <div className="hidden md:flex bg-white text-[12px] text-gray-500 h-9 items-center border-b border-gray-200 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex gap-6">
          <div className="flex items-center gap-1.5">
            <i className="fa-solid fa-truck text-primary"></i>
            <span>Free US Delivery — For all US orders over $99</span>
          </div>
          <div className="flex items-center gap-1.5">
            <i className="fa-solid fa-shield-halved text-primary"></i>
            <span>Secure Payment — 100% secure transactions</span>
          </div>
          <div className="flex items-center gap-1.5">
            <i className="fa-solid fa-headset text-primary"></i>
            <span>Support 24/7 — Call us: +1 (800) 123-456</span>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <a href="#services" className="hover:text-primary"><i className="fa-solid fa-location-dot"></i> Store Locator</a>
          <span className="text-gray-300">|</span>
          <a href="tel:+1800123456" className="hover:text-primary"><i className="fa-solid fa-phone"></i> +1 (800) 123-456</a>
          <span className="text-gray-300">|</span>
          <div className="flex items-center gap-1 cursor-pointer hover:text-primary">
            <span>EN</span>
            <i className="fa-solid fa-chevron-down text-[8px]"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
