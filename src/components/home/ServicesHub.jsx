import React from 'react';

const ServicesHub = () => {
  return (
    <section className="py-16 bg-[#F5F5F5] select-none" id="services">
      <div className="max-w-7xl mx-auto px-8">
        {/* Location Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-10 bg-white border border-gray-200 rounded-[4px] overflow-hidden mb-14">
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <span className="text-[11px] text-primary font-bold tracking-wider uppercase mb-2 block">
              OUR LOCATIONS
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-dark mb-8 border-l-4 border-primary pl-3.5 uppercase tracking-tight">
              Car Washing and Care Points
            </h2>
            
            <div className="flex flex-col gap-6">
              {/* Location 1 */}
              <div className="flex gap-4 pb-5 border-b border-gray-150">
                <i className="fa-solid fa-location-dot text-primary text-xl mt-0.5"></i>
                <div>
                  <h4 className="font-bold text-dark text-[15px] mb-1">Brand Garage</h4>
                  <p className="text-gray-500 text-xs">15 West 27th Street, Miami FL, USA</p>
                </div>
              </div>
              {/* Location 2 */}
              <div className="flex gap-4 pb-5 border-b border-gray-150 last:border-b-0 last:pb-0">
                <i className="fa-solid fa-location-dot text-primary text-xl mt-0.5"></i>
                <div>
                  <h4 className="font-bold text-dark text-[15px] mb-1">Chicago Garage</h4>
                  <p className="text-gray-500 text-xs">5400 N. Lakewood Ave, Chicago, IL 60640</p>
                </div>
              </div>
              {/* Location 3 */}
              <div className="flex gap-4 pb-5 border-b border-gray-150 last:border-b-0 last:pb-0">
                <i className="fa-solid fa-location-dot text-primary text-xl mt-0.5"></i>
                <div>
                  <h4 className="font-bold text-dark text-[15px] mb-1">Dawkins Garage</h4>
                  <p className="text-gray-500 text-xs">312 S Washington St Seattle WA 98104-2616</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative h-[250px] lg:h-auto">
            <img 
              src="https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=800&h=500&fit=crop" 
              alt="Professional auto garage" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>

        {/* 5 Service Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Card 1 */}
          <div className="bg-white border border-gray-200 rounded-[4px] p-6 text-center hover:shadow-sm transition-all duration-300 flex flex-col justify-between h-full">
            <div>
              <i className="fa-solid fa-screwdriver-wrench text-[40px] text-primary mb-4 block"></i>
              <h4 className="font-bold text-dark text-[14px] mb-2 uppercase tracking-tight">Detailing Service</h4>
              <p className="text-gray-500 text-[12px] leading-relaxed mb-4">
                Complete interior extraction, paint enhancement polish, and multi-layer hydrophobic protection.
              </p>
            </div>
            <a 
              href="#" 
              className="text-primary hover:text-primary-hover font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 mt-2 transition-colors"
            >
              LEARN MORE <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-200 rounded-[4px] p-6 text-center hover:shadow-sm transition-all duration-300 flex flex-col justify-between h-full">
            <div>
              <i className="fa-solid fa-gears text-[40px] text-primary mb-4 block"></i>
              <h4 className="font-bold text-dark text-[14px] mb-2 uppercase tracking-tight">Maintenance</h4>
              <p className="text-gray-500 text-[12px] leading-relaxed mb-4">
                Routine fluid checks, scheduled diagnostics, tire rotations, filter replacements, and oil changes.
              </p>
            </div>
            <a 
              href="#" 
              className="text-primary hover:text-primary-hover font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 mt-2 transition-colors"
            >
              LEARN MORE <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-200 rounded-[4px] p-6 text-center hover:shadow-sm transition-all duration-300 flex flex-col justify-between h-full">
            <div>
              <i className="fa-solid fa-car-battery text-[40px] text-primary mb-4 block"></i>
              <h4 className="font-bold text-dark text-[14px] mb-2 uppercase tracking-tight">Replace Battery</h4>
              <p className="text-gray-500 text-[12px] leading-relaxed mb-4">
                Fast diagnostic testing, premium battery replacement, recycling, and starter testing.
              </p>
            </div>
            <a 
              href="#" 
              className="text-primary hover:text-primary-hover font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 mt-2 transition-colors"
            >
              LEARN MORE <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-gray-200 rounded-[4px] p-6 text-center hover:shadow-sm transition-all duration-300 flex flex-col justify-between h-full">
            <div>
              <i className="fa-solid fa-shower text-[40px] text-primary mb-4 block"></i>
              <h4 className="font-bold text-dark text-[14px] mb-2 uppercase tracking-tight">Washing & Clean</h4>
              <p className="text-gray-500 text-[12px] leading-relaxed mb-4">
                Ph-neutral hand foam washing, high pressure undercarriage rinse, wheel well cleaning, and air-dry.
              </p>
            </div>
            <a 
              href="#" 
              className="text-primary hover:text-primary-hover font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 mt-2 transition-colors"
            >
              LEARN MORE <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          {/* Card 5 */}
          <div className="bg-white border border-gray-200 rounded-[4px] p-6 text-center hover:shadow-sm transition-all duration-300 flex flex-col justify-between h-full">
            <div>
              <i className="fa-solid fa-video text-[40px] text-primary mb-4 block"></i>
              <h4 className="font-bold text-dark text-[14px] mb-2 uppercase tracking-tight">Inspection Film</h4>
              <p className="text-gray-500 text-[12px] leading-relaxed mb-4">
                Comprehensive multipoint visual digital vehicle health checks sent straight to your phone.
              </p>
            </div>
            <a 
              href="#" 
              className="text-primary hover:text-primary-hover font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 mt-2 transition-colors"
            >
              LEARN MORE <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHub;
