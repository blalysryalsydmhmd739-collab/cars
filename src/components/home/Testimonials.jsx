import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-16 bg-[#FFFFFF] border-t border-b border-gray-150 select-none">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-xl font-extrabold uppercase border-b-2 border-primary pb-2 inline-block tracking-tight text-dark">
            TESTIMONIALS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Card 1 */}
          <div className="bg-white border border-gray-200 rounded-[4px] p-8 flex flex-col justify-between h-full hover:border-gray-300 transition-colors duration-300">
            <div>
              <div className="text-[#FFB800] text-[10px] mb-3">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <h4 className="text-[15px] font-bold text-[#111111] mb-2 uppercase tracking-tight">Great Price & Services</h4>
              <p className="text-[13px] text-gray-500 leading-relaxed mb-6">
                "I was very impressed by the speed of the delivery and how well packaged the alloy rims were. Customer support was incredibly helpful in verifying model compatibility before shipment!"
              </p>
            </div>
            <div className="flex items-center gap-4">
              <img 
                src="https://i.pravatar.cc/60?img=11" 
                alt="User avatar" 
                className="w-11 h-11 rounded-full object-cover" 
              />
              <div>
                <h5 className="text-[13px] font-bold text-dark">Paul Eden</h5>
                <p className="text-[11px] text-gray-400 font-medium">Verified Buyer</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-200 rounded-[4px] p-8 flex flex-col justify-between h-full hover:border-gray-300 transition-colors duration-300">
            <div>
              <div className="text-[#FFB800] text-[10px] mb-3">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <h4 className="text-[15px] font-bold text-[#111111] mb-2 uppercase tracking-tight">Exceptional Quality</h4>
              <p className="text-[13px] text-gray-500 leading-relaxed mb-6">
                "The German steel brake rotors have made a noticeable difference in stopping power. Very high professional grade products, definitely buying my replacement filters here next time."
              </p>
            </div>
            <div className="flex items-center gap-4">
              <img 
                src="https://i.pravatar.cc/60?img=15" 
                alt="User avatar" 
                className="w-11 h-11 rounded-full object-cover" 
              />
              <div>
                <h5 className="text-[13px] font-bold text-dark">Marcus Vane</h5>
                <p className="text-[11px] text-gray-400 font-medium">Verified Buyer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2">
          <span className="w-6 h-1.5 rounded-full bg-primary transition-all duration-300"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-300 hover:bg-primary transition-all duration-300 cursor-pointer"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-300 hover:bg-primary transition-all duration-300 cursor-pointer"></span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
