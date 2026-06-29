import React from 'react';
import CountdownTimer from '../ui/CountdownTimer';
import ProductCard from '../ui/ProductCard';
import { flashSaleProducts } from '../../data/productsData';

const FlashSale = () => {
  return (
    <section className="py-16 max-w-7xl mx-auto px-8" id="flash-sale">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-gray-100 pb-4 mb-8">
        <h2 className="text-xl font-extrabold uppercase border-l-4 border-primary pl-3 text-dark tracking-tight">
          Flash Sale
        </h2>
        <div className="flex items-center gap-3 text-sm font-semibold text-gray-500">
          <span>Ends in:</span>
          <CountdownTimer targetDays={3} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {flashSaleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FlashSale;
