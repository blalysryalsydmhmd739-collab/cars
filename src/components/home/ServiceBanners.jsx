import React from 'react';

const ServiceBanners = () => {
  return (
    <section className="py-16 max-w-7xl mx-auto px-8 select-none">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Banner 1: Tire Service */}
        <div className="bg-[#F5F5F5] border border-gray-200 h-[220px] rounded-[4px] overflow-hidden flex justify-between p-6 relative group hover:shadow-sm transition-all duration-300">
          <div className="flex flex-col justify-center items-start max-w-[55%] z-10 text-dark">
            <span className="text-[10px] font-extrabold text-primary tracking-wider uppercase mb-2">Tire Service</span>
            <h3 className="text-[17px] font-black mb-5 leading-tight uppercase tracking-tight">Tire Repair & Care</h3>
            <a 
              href="#tires-wheels" 
              className="btn btn-dark text-white py-2 px-5 text-[10px] rounded-[4px] font-bold tracking-wider"
            >
              SHOP NOW
            </a>
          </div>
          <div className="absolute right-2 bottom-2 top-2 w-[40%] flex items-center justify-center z-0">
            <img 
              src="/images/isolated_mechanic.png" 
              alt="Tire repair service" 
              className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300" 
            />
          </div>
        </div>

        {/* Banner 2: LED Highlight */}
        <div className="bg-[#F5F5F5] border border-gray-200 h-[220px] rounded-[4px] overflow-hidden flex justify-between p-6 relative group hover:shadow-sm transition-all duration-300">
          <div className="flex flex-col justify-center items-start max-w-[55%] z-10 text-dark">
            <span className="text-[10px] font-extrabold text-primary tracking-wider uppercase mb-2">Auto Lighting</span>
            <h3 className="text-[17px] font-black mb-5 leading-tight uppercase tracking-tight">LED Headlight Bulb</h3>
            <a 
              href="#headlights" 
              className="btn btn-dark text-white py-2 px-5 text-[10px] rounded-[4px] font-bold tracking-wider"
            >
              SHOP NOW
            </a>
          </div>
          <div className="absolute right-2 bottom-2 top-2 w-[40%] flex items-center justify-center z-0">
            <img 
              src="/images/isolated_led_headlight.png" 
              alt="LED Headlight bulb" 
              className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300" 
            />
          </div>
        </div>

        {/* Banner 3: Accessories */}
        <div className="bg-[#F5F5F5] border border-gray-200 h-[220px] rounded-[4px] overflow-hidden flex justify-between p-6 relative group hover:shadow-sm transition-all duration-300">
          <div className="flex flex-col justify-center items-start max-w-[55%] z-10 text-dark">
            <span className="text-[10px] font-extrabold text-primary tracking-wider uppercase mb-2">Key Accessories</span>
            <h3 className="text-[17px] font-black mb-5 leading-tight uppercase tracking-tight">Luxury Smart Key Fob</h3>
            <a 
              href="#top-offers" 
              className="btn btn-dark text-white py-2 px-5 text-[10px] rounded-[4px] font-bold tracking-wider"
            >
              SHOP NOW
            </a>
          </div>
          <div className="absolute right-2 bottom-2 top-2 w-[40%] flex items-center justify-center z-0">
            <img 
              src="/images/isolated_key_fob.png" 
              alt="Smart key fob accessory" 
              className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBanners;
