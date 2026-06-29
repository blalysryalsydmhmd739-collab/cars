import React, { useState } from 'react';

const NavBar = () => { const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-primary h-14 flex items-center select-none text-white fixed top-0 left-0 w-full z-50 relative">
      <div className="max-w-7xl w-full mx-auto px-8 flex justify-between items-center h-full">
        <div className="bg-primary-hover h-full flex items-center px-5 font-bold text-sm cursor-pointer gap-2.5">
          <i className="fa-solid fa-bars mr-2 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}></i>
          <span className="hidden sm:inline">Browse All Collections</span>
        </div>
        <ul className="hidden md:flex items-center h-full">
          <li className="h-full">
            <a href="#" className="flex items-center px-5 text-sm font-semibold h-full hover:bg-primary-hover">Home</a>
          </li>
          <li className="h-full">
            <a href="#tires-wheels" className="flex items-center px-5 text-sm font-semibold h-full hover:bg-primary-hover">Collections</a>
          </li>
          <li className="h-full">
            <a href="#top-offers" className="flex items-center px-5 text-sm font-semibold h-full hover:bg-primary-hover">Products</a>
          </li>
          <li className="h-full">
            <a href="#services" className="flex items-center px-5 text-sm font-semibold h-full hover:bg-primary-hover">Other Pages</a>
          </li>
          <li className="h-full">
            <a href="#blog" className="flex items-center px-5 text-sm font-semibold h-full hover:bg-primary-hover">Blog</a>
          </li>
        </ul>
        <div className="flex items-center text-sm font-semibold gap-1">
          <i className="fa-solid fa-percent mr-2"></i>
          <span>Clearances Up to 70% Off</span>
        </div>
      </div>
{menuOpen && (
  <div className="md:hidden absolute top-full left-0 w-full bg-primary text-white shadow-lg z-50">
    <ul className="flex flex-col">
      <li className="border-b border-primary-hover"><a href="#" className="block px-4 py-2 hover:bg-primary-hover">Home</a></li>
      <li className="border-b border-primary-hover"><a href="#tires-wheels" className="block px-4 py-2 hover:bg-primary-hover">Collections</a></li>
      <li className="border-b border-primary-hover"><a href="#top-offers" className="block px-4 py-2 hover:bg-primary-hover">Products</a></li>
      <li className="border-b border-primary-hover"><a href="#services" className="block px-4 py-2 hover:bg-primary-hover">Other Pages</a></li>
      <li className="border-b border-primary-hover"><a href="#blog" className="block px-4 py-2 hover:bg-primary-hover">Blog</a></li>
    </ul>
  </div>
)}
    </nav>
  );
};

export default NavBar;
