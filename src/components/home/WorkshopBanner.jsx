import React from 'react';

const WorkshopBanner = () => {
  return (
    <section className="max-w-7xl py-16 mx-auto px-8 select-none">
      <div className="bg-[#111111] border border-gray-800 h-[300px] flex items-center relative overflow-hidden rounded-[4px]">
        {/* Left Service Text Block */}
        <div className="max-w-[550px] px-10 md:px-16 z-10 text-white relative">
          <span className="text-[11px] text-primary font-bold tracking-[1.5px] uppercase mb-2.5 block">
            AUTOPRIME SERVICES
          </span>
          <h2 className="text-2xl sm:text-3xl font-black leading-tight mb-3 uppercase tracking-tight">
            AUTO BODY PAINT REPAIR SERVICES
          </h2>
          <p className="text-sm text-gray-400 mb-6">
            Professional detailing, paint correction, ceramic coating, and precision spot paint repairs to make your car look brand new.
          </p>
          <a href="#services" className="btn btn-primary text-xs font-bold px-6 py-3 rounded-[4px]">
            LEARN MORE
          </a>
        </div>

        {/* Right Detailing Technician Visual (Full Bleed) */}
        <div 
          className="absolute right-0 top-0 w-1/2 h-full bg-cover bg-center [clip-path:polygon(15%_0,100%_0,100%_100%,0%_100%)] z-0" 
          style={{ backgroundImage: `url('/images/workshop_tech.png')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/40 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopBanner;
