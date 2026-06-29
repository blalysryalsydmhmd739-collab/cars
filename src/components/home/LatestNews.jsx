import React from 'react';

const LatestNews = () => {
  return (
    <section className="py-16 max-w-7xl mx-auto px-8" id="blog">
      <div className="flex justify-between items-center border-b border-gray-100 pb-4 mb-8 select-none">
        <h2 className="text-xl font-extrabold uppercase border-l-4 border-primary pl-3 text-dark tracking-tight">
          LATEST NEWS FROM BLOG
        </h2>
        <a 
          href="#" 
          className="text-primary hover:text-primary-hover font-bold text-xs flex items-center gap-1.5 transition-colors uppercase tracking-wider"
        >
          View All <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8">
        {/* Large Blog Card */}
        <div className="bg-white border border-gray-200 rounded-[4px] overflow-hidden hover:border-gray-300 transition-colors duration-300 group flex flex-col justify-between">
          <div>
            <div className="h-[280px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&h=450&fit=crop" 
                alt="Blog post" 
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300" 
              />
            </div>
            <div className="p-6">
              <span className="text-[10px] text-primary font-extrabold tracking-wider uppercase mb-2 block select-none">
                Maintenance & Knowledge
              </span>
              <h3 className="text-lg font-bold text-[#111111] mb-3 leading-tight uppercase tracking-tight">
                Growing in a Recession: Maximize Sales in the Parts Department
              </h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                Discover the core strategies to maintain profitability, improve logistics, and fulfill customer order demand during shifts in market conditions.
              </p>
            </div>
          </div>
          <div className="px-6 pb-6 pt-2 select-none">
            <span className="text-[11px] text-gray-400 font-medium">July 28, 2024 — by Admin</span>
          </div>
        </div>

        {/* Stacked Small Blog Cards */}
        <div className="flex flex-col gap-4">
          {/* Small Card 1 */}
          <div className="flex gap-4 bg-white border border-gray-200 rounded-[4px] p-3 hover:border-gray-300 transition-colors duration-300 group">
            <div className="w-[120px] h-[90px] overflow-hidden rounded-[4px] flex-shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=200&h=150&fit=crop" 
                alt="Blog post" 
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300" 
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[9px] text-primary font-extrabold tracking-wider uppercase mb-1 select-none">
                Car Tuning
              </span>
              <h4 className="text-[13px] font-bold text-[#111111] leading-snug mb-2 line-clamp-2 uppercase tracking-tight">
                Choosing the Right Suspension Upgrades for Highway Cruising
              </h4>
              <span className="text-[10px] text-gray-400 font-medium select-none">July 24, 2024</span>
            </div>
          </div>

          {/* Small Card 2 */}
          <div className="flex gap-4 bg-white border border-gray-200 rounded-[4px] p-3 hover:border-gray-300 transition-colors duration-300 group">
            <div className="w-[120px] h-[90px] overflow-hidden rounded-[4px] flex-shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1541443131876-44b03de101c5?w=200&h=150&fit=crop" 
                alt="Blog post" 
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300" 
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[9px] text-primary font-extrabold tracking-wider uppercase mb-1 select-none">
                Car Audio
              </span>
              <h4 className="text-[13px] font-bold text-[#111111] leading-snug mb-2 line-clamp-2 uppercase tracking-tight">
                Subwoofers & Amplifiers: Designing Your Sound System
              </h4>
              <span className="text-[10px] text-gray-400 font-medium select-none">July 20, 2024</span>
            </div>
          </div>

          {/* Small Card 3 */}
          <div className="flex gap-4 bg-white border border-gray-200 rounded-[4px] p-3 hover:border-gray-300 transition-colors duration-300 group">
            <div className="w-[120px] h-[90px] overflow-hidden rounded-[4px] flex-shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=200&h=150&fit=crop" 
                alt="Blog post" 
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300" 
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[9px] text-primary font-extrabold tracking-wider uppercase mb-1 select-none">
                Headlights
              </span>
              <h4 className="text-[13px] font-bold text-[#111111] leading-snug mb-2 line-clamp-2 uppercase tracking-tight">
                Understanding LED vs HID Bulbs: Brightness & Lifespan
              </h4>
              <span className="text-[10px] text-gray-400 font-medium select-none">July 15, 2024</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
