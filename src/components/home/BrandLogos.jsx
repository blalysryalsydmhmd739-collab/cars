import React from 'react';

const BrandLogos = () => {
  const brands = ['HONDA', 'BMW', 'JAGUAR', 'MINI', 'BENTLEY', 'AUDI', 'TOYOTA', 'FORD'];

  return (
    <section className="bg-white border-t border-b border-gray-250 py-8 select-none">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-wrap justify-between items-center gap-4 md:gap-6">
          {brands.map((brand, idx) => (
            <React.Fragment key={brand}>
              <div className="text-[15px] font-black text-gray-400 hover:text-dark cursor-pointer tracking-[2px] transition-colors py-2 px-4">
                {brand}
              </div>
              {idx < brands.length - 1 && (
                <div className="hidden lg:block w-px h-5 bg-gray-200 opacity-60"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
