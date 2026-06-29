import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import IntroOverlay from './components/layout/IntroOverlay';
import TopBar from './components/layout/TopBar';
import MainHeader from './components/layout/MainHeader';
import NavBar from './components/layout/NavBar';
import HeroBanner from './components/home/HeroBanner';
import TrustBadges from './components/home/TrustBadges';
import FlashSale from './components/home/FlashSale';
import CategoryGrid from './components/home/CategoryGrid';
import ServiceBanners from './components/home/ServiceBanners';
import WorkshopBanner from './components/home/WorkshopBanner';
import OffersThisWeek from './components/home/OffersThisWeek';
import ServicesHub from './components/home/ServicesHub';
import Testimonials from './components/home/Testimonials';
import LatestNews from './components/home/LatestNews';
import BrandLogos from './components/home/BrandLogos';
import Footer from './components/layout/Footer';

import { tiresAndWheelsProducts, headlightProducts } from './data/productsData';

const App = () => {
  const [showIntro, setShowIntro] = useState(true);
  const tiresCategories = [
    'Passenger Tires',
    'Performance Tires',
    'Truck & SUV Tires',
    'Motorcycle Tires',
    'Alloy Wheels',
    'Steel Wheels',
    'Steering Wheels',
    'Hub Caps',
    'Tire Accessories',
  ];

  const headlightsCategories = [
    'LED Headlights',
    'HID Bulbs',
    'Tail Lights',
    'Fog Lights',
    'Turn Signals',
    'Interior LED kits',
    'Headlight Cleaners',
    'Wiring Harnesses',
  ];

  return (
    <CartProvider>
      {showIntro && <IntroOverlay onDismissComplete={() => setShowIntro(false)} />}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col min-h-screen text-gray-800">
        {/* Layout Top Components */}
        <TopBar />
        <MainHeader />
        <NavBar />

        {/* Home Sections */}
        <main className="flex-1">
          <HeroBanner />
          <TrustBadges />
          <FlashSale />
          
          <CategoryGrid 
            id="tires-wheels"
            title="TIRES & WHEELS" 
            categoriesList={tiresCategories} 
            products={tiresAndWheelsProducts} 
          />

          <ServiceBanners />

          <CategoryGrid 
            id="headlights"
            title="HEADLIGHTS" 
            categoriesList={headlightsCategories} 
            products={headlightProducts} 
            isRedPill={true}
          />

          <WorkshopBanner />
          <OffersThisWeek />
          <ServicesHub />
          <Testimonials />
          <LatestNews />
          <BrandLogos />
        </main>

        {/* Layout Bottom Component */}
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;
