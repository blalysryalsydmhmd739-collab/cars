import React from 'react';

const HeroBanner = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#F5F5F5] to-[#EAEAEA] border-b border-gray-200 select-none py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Typography */}
        <div className="flex flex-col justify-center items-start text-dark">
          <span className="bg-primary text-white text-[10px] font-extrabold px-3 py-1 rounded-[4px] inline-block mb-4 tracking-wider uppercase">
            New Arrivals
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-[50px] font-black leading-[1.1] mb-6 text-[#111111] uppercase tracking-tight">
            BRAKES SYSTEM <br />FACTORY FOR SUV
          </h1>
          <p className="text-[14px] text-gray-500 mb-8 max-w-[460px] leading-relaxed">
            Professional grade brake systems for maximum safety and performance under heavy load conditions. Precision engineered steel rotors with advanced caliper setups.
          </p>
          <a 
            href="#tires-wheels" 
            className="btn btn-dark text-white font-extrabold text-[12px] px-8 py-3.5 tracking-wider rounded-[4px] uppercase"
          >
            SHOP NOW
          </a>
        </div>

        {/* Right Side: High-Impact Isolated Brake Disc */}
        <div className="flex justify-center items-center relative">
          <div className="w-full max-w-[360px] sm:max-w-[420px] md:max-w-[460px] h-[360px] sm:h-[420px] md:h-[460px] flex items-center justify-center filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.1)] animate-float">
            <img 
              src="/images/hero_brake_disc.png" 
              alt="Brake disc with red caliper" 
              className="max-h-full max-w-full object-contain" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
