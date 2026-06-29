import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';

const MainHeader = () => {
  const { cartCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 bg-white border-b border-gray-200 z-[999] transition-all duration-300 flex items-center ${isScrolled ? 'h-[60px] shadow-lg' : 'h-[70px]'}`}>
      <div className="max-w-7xl w-full mx-auto px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex flex-col select-none">
          <span className="text-2xl font-black text-primary tracking-tight leading-none">AUTOMIZE</span>
          <span className="text-[10px] font-bold text-dark tracking-[4px] uppercase ml-0.5 leading-none mt-1">Parts</span>
        </a>

        {/* Search Combo */}
        <div className="hidden lg:flex flex-1 max-w-[600px] mx-10 border border-primary rounded-[4px] h-[42px] overflow-hidden">
          <select className="bg-lightbg text-[13px] font-semibold text-dark px-3.5 border-r border-gray-200 cursor-pointer outline-none">
            <option>Browse All Collections</option>
            <option>Tires & Wheels</option>
            <option>Headlights</option>
            <option>Suspension</option>
            <option>Engine Oil</option>
          </select>
          <input type="text" placeholder="Search for products..." className="flex-1 px-3.5 text-sm text-dark outline-none" />
          <button className="bg-primary hover:bg-primary-hover text-white font-bold text-[13px] px-6 transition-colors duration-300 uppercase">
            SEARCH
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 cursor-pointer">
            <i className="fa-regular fa-user text-xl text-dark hover:text-primary transition-colors"></i>
            <div className="flex flex-col text-[11px] leading-tight select-none">
              <span className="font-bold">Login</span>
              <span className="text-gray-400 text-[9px]">My Account</span>
            </div>
          </div>
          <div className="relative cursor-pointer group">
            <i className="fa-regular fa-heart text-xl text-dark group-hover:text-primary transition-colors"></i>
            <span className="absolute -top-1.5 -right-2 bg-primary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </div>
          <div className="relative cursor-pointer group">
            <i className="fa-solid fa-cart-shopping text-xl text-dark group-hover:text-primary transition-colors"></i>
            <span className="absolute -top-1.5 -right-2 bg-primary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">{cartCount}</span>
          </div>
        </div>

        {/* Mobile menu trigger */}
        <div className="lg:hidden flex items-center gap-4 cursor-pointer text-xl text-dark">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
