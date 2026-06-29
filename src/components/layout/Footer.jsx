import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-10 pb-8 mt-12">
      {/* Newsletter Section */}
      <div className="bg-primary py-10 mb-14 text-white">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="max-w-[500px]">
            <span className="text-[11px] font-bold tracking-[1.5px] uppercase opacity-90">NEWSLETTER</span>
            <h2 className="text-2xl font-extrabold mt-1">Subscribe & Get 15% Discount</h2>
          </div>
          <div className="flex w-full md:max-w-[500px] rounded-[4px] overflow-hidden shadow-md">
            <input 
              type="email" 
              placeholder="Your Email Address..." 
              className="flex-1 px-5 py-4 bg-white text-dark outline-none text-sm" 
            />
            <button className="bg-dark hover:bg-gray-850 text-white font-bold px-8 uppercase text-xs transition-colors duration-300">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8">
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1 */}
          <div className="flex flex-col">
            <a href="#" className="flex flex-col select-none mb-6">
              <span className="text-2xl font-extrabold text-white leading-none">AUTO<span className="text-primary">MIZE</span></span>
              <span className="text-[9px] font-bold text-gray-400 tracking-[3px] uppercase ml-0.5 mt-1 leading-none">Parts</span>
            </a>
            <ul className="flex flex-col gap-3 text-xs text-gray-400">
              <li className="flex items-center gap-2.5"><i className="fa-solid fa-location-dot text-primary w-3.5"></i> 15 West 27th Street, Miami FL, USA</li>
              <li className="flex items-center gap-2.5"><i className="fa-solid fa-phone text-primary w-3.5"></i> +1 (800) 123-456</li>
              <li className="flex items-center gap-2.5"><i className="fa-solid fa-envelope text-primary w-3.5"></i> support@automize.com</li>
              <li className="flex items-center gap-2.5"><i className="fa-solid fa-clock text-primary w-3.5"></i> Monday - Friday: 9 AM - 6 PM</li>
            </ul>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-sm font-bold uppercase mb-6 tracking-wide relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-7 after:h-0.5 after:bg-primary">HELP & SUPPORT</h4>
            <ul className="flex flex-col gap-3 text-xs text-gray-400">
              <li><a href="#" className="hover:text-white hover:pl-1">Shipping Details</a></li>
              <li><a href="#" className="hover:text-white hover:pl-1">Return Policy</a></li>
              <li><a href="#" className="hover:text-white hover:pl-1">Order Tracking</a></li>
              <li><a href="#" className="hover:text-white hover:pl-1">Product Recalls</a></li>
              <li><a href="#" className="hover:text-white hover:pl-1">Technical Support</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-sm font-bold uppercase mb-6 tracking-wide relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-7 after:h-0.5 after:bg-primary">COMPANY INFO</h4>
            <ul className="flex flex-col gap-3 text-xs text-gray-400">
              <li><a href="#" className="hover:text-white hover:pl-1">About Us</a></li>
              <li><a href="#" className="hover:text-white hover:pl-1">Our Careers</a></li>
              <li><a href="#" className="hover:text-white hover:pl-1">Store Locator</a></li>
              <li><a href="#" className="hover:text-white hover:pl-1">Investor Relations</a></li>
              <li><a href="#" className="hover:text-white hover:pl-1">Affiliate Program</a></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="text-sm font-bold uppercase mb-6 tracking-wide relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-7 after:h-0.5 after:bg-primary">CUSTOMER SERVICE</h4>
            <ul className="flex flex-col gap-3 text-xs text-gray-400">
              <li><a href="#" className="hover:text-white hover:pl-1">FAQs</a></li>
              <li><a href="#" className="hover:text-white hover:pl-1">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white hover:pl-1">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white hover:pl-1">Contact Us</a></li>
              <li><a href="#" className="hover:text-white hover:pl-1">Gift Cards</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-400">
          <div>
            © 2024 AUTOMIZE Parts. All Rights Reserved.
          </div>

          <div className="flex gap-3">
            <a href="#" className="w-8 h-8 rounded-full bg-gray-900 hover:bg-primary hover:text-white flex items-center justify-center text-gray-400 transition-all duration-300"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="w-8 h-8 rounded-full bg-gray-900 hover:bg-primary hover:text-white flex items-center justify-center text-gray-400 transition-all duration-300"><i className="fa-brands fa-twitter"></i></a>
            <a href="#" className="w-8 h-8 rounded-full bg-gray-900 hover:bg-primary hover:text-white flex items-center justify-center text-gray-400 transition-all duration-300"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className="w-8 h-8 rounded-full bg-gray-900 hover:bg-primary hover:text-white flex items-center justify-center text-gray-400 transition-all duration-300"><i className="fa-brands fa-youtube"></i></a>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-semibold text-white">Download Our App:</span>
            <div className="flex gap-2.5">
              <div className="bg-gray-900 border border-gray-800 rounded-[4px] px-3 py-1.5 flex items-center gap-2 hover:bg-primary hover:border-primary transition-all duration-300 cursor-pointer select-none">
                <i className="fa-brands fa-apple text-lg text-white"></i>
                <div className="flex flex-col items-start leading-none text-white">
                  <span className="text-[8px] uppercase opacity-70">Download on the</span>
                  <span className="text-[11px] font-semibold mt-0.5">App Store</span>
                </div>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-[4px] px-3 py-1.5 flex items-center gap-2 hover:bg-primary hover:border-primary transition-all duration-300 cursor-pointer select-none">
                <i className="fa-brands fa-google-play text-lg text-white"></i>
                <div className="flex flex-col items-start leading-none text-white">
                  <span className="text-[8px] uppercase opacity-70">Get it on</span>
                  <span className="text-[11px] font-semibold mt-0.5">Google Play</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
