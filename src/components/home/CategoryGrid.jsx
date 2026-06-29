import React from 'react';
import ProductCard from '../ui/ProductCard';

const CategoryGrid = ({ title, categoriesList, products, isRedPill = false, id }) => {
  // Determine grid columns dynamically based on product count:
  // Headlights has 5 products -> grid-cols-5 on desktop
  // Tires & Wheels has 4 products -> grid-cols-4 on desktop
  const gridColsClass = products.length >= 5 
    ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5' 
    : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4';

  return (
    <section className="py-16 max-w-7xl mx-auto px-8" id={id}>
      {/* Section Header */}
      <div className="flex justify-between items-center pb-4 mb-8 border-b border-gray-100">
        {isRedPill ? (
          <div className="bg-primary text-white font-bold text-xs px-4 py-1.5 rounded-[4px] uppercase tracking-wider select-none">
            {title}
          </div>
        ) : (
          <h2 className="text-xl font-extrabold uppercase border-l-4 border-primary pl-3 text-dark select-none tracking-tight">
            {title}
          </h2>
        )}
        <a 
          href="#" 
          className="text-primary hover:text-primary-hover font-bold text-xs flex items-center gap-1.5 transition-colors uppercase tracking-wider"
        >
          View All <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>

      {/* 20% / 80% Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[20%_80%] gap-8">
        {/* Left Sidebar Panel (20% width) */}
        <div className="select-none py-1">
          <h3 className="text-xs font-extrabold uppercase mb-4 text-[#111111] tracking-wider border-b border-gray-100 pb-2">
            Categories
          </h3>
          <ul className="flex flex-col gap-2.5">
            {categoriesList.map((item, idx) => (
              <li key={idx}>
                <a 
                  href="#" 
                  className="text-xs font-semibold text-gray-500 hover:text-primary transition-colors block py-0.5"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Grid Panel (80% width) */}
        <div className={`grid ${gridColsClass} gap-6`}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
