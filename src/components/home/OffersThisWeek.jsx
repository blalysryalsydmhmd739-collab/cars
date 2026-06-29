import React from 'react';
import ProductCard from '../ui/ProductCard';
import CountdownTimer from '../ui/CountdownTimer';
import { topOffersProducts } from '../../data/productsData';
import { useCart } from '../../context/CartContext';

const OffersThisWeek = () => {
  const { addToCart } = useCart();
  const { left, featured, right } = topOffersProducts;

  return (
    <section className="py-16 max-w-7xl mx-auto px-8" id="top-offers">
      <div className="text-center mb-12 select-none">
        <h2 className="text-xl font-extrabold uppercase border-b-2 border-primary pb-2 inline-block tracking-tight text-dark">
          TOP OFFERS THIS WEEK
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Left Side: 2 Columns of 2 rows (4 products total) */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {left.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Center: Featured Offer Card */}
        <div className="lg:col-span-1 border border-[#FFD700] rounded-[4px] p-6 bg-white flex flex-col justify-between hover:shadow-md transition-all duration-300 relative h-full select-none">
          <div>
            <div className="text-[10px] font-extrabold text-gray-400 mb-3 text-center uppercase tracking-wider">
              Hurry up! take advantage of the offer!
            </div>
            
            <div className="mb-5 flex justify-center">
              <CountdownTimer targetDays={3} size="small" />
            </div>

            <div className="h-[200px] flex items-center justify-center mb-5 overflow-hidden">
              <img 
                src={featured.image} 
                alt={featured.name} 
                className="max-h-full object-contain hover:scale-105 transition-transform duration-300" 
              />
            </div>

            <div className="flex justify-center items-center gap-0.5 mb-2 text-[10px]">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="fa-solid fa-star text-[#FFB800]"></i>
              ))}
              <span className="text-gray-400 ml-1.5 text-[11px]">({featured.reviews})</span>
            </div>

            <h3 className="text-[13px] font-semibold text-dark text-center mb-3 line-clamp-2 leading-tight h-[36px] overflow-hidden">
              {featured.name}
            </h3>

            <div className="flex justify-center items-center gap-2 mb-4">
              <span className="text-base font-bold text-primary">${featured.currentPrice.toFixed(2)}</span>
              <span className="line-through text-gray-400 text-xs">${featured.oldPrice.toFixed(2)}</span>
            </div>
          </div>

          <div>
            <div className="mb-4">
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-1.5">
                <div 
                  className="h-full bg-primary rounded-full" 
                  style={{ width: `${featured.soldPercent}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-[10px] font-extrabold text-gray-500 uppercase tracking-wider">
                <span>{featured.soldPercent}% Sold</span>
                <span>Available: {featured.available}</span>
              </div>
            </div>

            <button 
              onClick={addToCart} 
              className="w-full bg-primary hover:bg-primary-hover text-white py-2.5 rounded-[4px] font-bold text-xs uppercase transition-colors duration-300 tracking-wider"
            >
              ADD TO CART
            </button>
          </div>
        </div>

        {/* Right Side: 2 Columns of 2 rows (4 products total) */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {right.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersThisWeek;
