import React from 'react';

const TrustBadges = () => {
  return (
    <section className="bg-white border-t border-b border-gray-200 py-6 select-none">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="flex items-center gap-5">
          <i className="fa-solid fa-truck text-4xl text-primary"></i>
          <div>
            <h4 className="text-sm font-bold uppercase mb-1 text-dark">FREE US DELIVERY</h4>
            <p className="text-xs text-gray-500">For all US orders over minimum $99</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <i className="fa-solid fa-shield-halved text-4xl text-primary"></i>
          <div>
            <h4 className="text-sm font-bold uppercase mb-1 text-dark">SECURE PAYMENT</h4>
            <p className="text-xs text-gray-500">We ensure secure payment with PEV</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <i className="fa-solid fa-headset text-4xl text-primary"></i>
          <div>
            <h4 className="text-sm font-bold uppercase mb-1 text-dark">SUPPORT 24/7</h4>
            <p className="text-xs text-gray-500">Contact us 24 hours a day, 7 days a week</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
