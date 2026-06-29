import React from 'react';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { name, image, rating, reviews, oldPrice, currentPrice, badge } = product;

  return (
    <div className="bg-white border border-gray-200 rounded-[4px] p-4 relative flex flex-col justify-between hover:shadow-md transition-all duration-300 group h-full select-none">
      <div>
        {/* Badges placed perfectly in the top-left corner */}
        {badge === 'sale' && (
          <span className="bg-[#FFD700] text-dark font-extrabold text-[9px] px-2.5 py-1 rounded-br-[4px] absolute top-0 left-0 z-10 uppercase tracking-wider">
            Sale
          </span>
        )}
        {badge === 'new' && (
          <span className="bg-primary text-white font-extrabold text-[9px] px-2.5 py-1 rounded-br-[4px] absolute top-0 left-0 z-10 uppercase tracking-wider">
            New
          </span>
        )}
        
        {/* Centered Image on White BG */}
        <div className="aspect-square w-full bg-white flex items-center justify-center mb-4 overflow-hidden relative">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
          />
        </div>

        {/* Star Ratings below Image */}
        {rating !== undefined && (
          <div className="flex items-center gap-0.5 mb-2 text-[10px]">
            {[...Array(5)].map((_, i) => (
              <i 
                key={i} 
                className={`fa-solid fa-star ${i < rating ? 'text-[#FFB800]' : 'text-gray-200'}`}
              ></i>
            ))}
            {reviews !== undefined && <span className="text-gray-400 ml-1.5 text-[11px]">({reviews})</span>}
          </div>
        )}

        {/* Product Title capped at 2 lines max */}
        <h3 className="text-[13px] font-semibold text-dark mb-3 line-clamp-2 leading-tight h-[36px] overflow-hidden">
          {name}
        </h3>
      </div>

      {/* Pricing and Button */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-base font-bold text-primary">${currentPrice.toFixed(2)}</span>
          {oldPrice && <span className="line-through text-gray-400 text-xs">${oldPrice.toFixed(2)}</span>}
        </div>

        <button 
          onClick={addToCart} 
          className="w-full bg-primary hover:bg-primary-hover text-white py-2.5 rounded-[4px] font-bold text-xs uppercase transition-colors duration-300 tracking-wider"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
