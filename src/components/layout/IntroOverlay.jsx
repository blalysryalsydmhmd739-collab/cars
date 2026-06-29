import React, { useState, useEffect, useRef } from 'react';

const IntroOverlay = ({ onDismissComplete }) => {
  const [isFading, setIsFading] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const videoRef = useRef(null);
  const hasTriggeredDismiss = useRef(false);

  // Lock scroll on mount, unlock on unmount
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    // Safety auto-dismiss after 5 seconds in case video stalls
    const safetyTimeout = setTimeout(() => {
      handleDismiss();
    }, 5000);

    return () => {
      document.body.classList.remove('overflow-hidden');
      clearTimeout(safetyTimeout);
    };
  }, []);

  const handleDismiss = () => {
    if (hasTriggeredDismiss.current) return;
    hasTriggeredDismiss.current = true;

    setIsFading(true);
    setTimeout(() => {
      setIsVisible(false);
      if (onDismissComplete) {
        onDismissComplete();
      }
    }, 1000);
  };

  // Dismiss after exactly 1 second of video playback
  const handleTimeUpdate = (e) => {
    if (e.target.currentTime >= 1.0) {
      handleDismiss();
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 w-screen h-screen bg-[#111111] z-[9999] overflow-hidden flex items-center justify-center select-none transition-all duration-1000 ease-in-out ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Full-bleed video - porsche-intro.mp4 must be in /public folder */}
      <video
        ref={videoRef}
        src="/porsche-intro.mp4"
        autoPlay
        muted
        playsInline
        onEnded={handleDismiss}
        onTimeUpdate={handleTimeUpdate}
        className="w-full h-full object-contain"
      />

      {/* Subtle dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      {/* Brand Watermark */}
      <div className="absolute top-6 left-8 md:top-8 md:left-10 flex flex-col text-white pointer-events-none z-10">
        <span className="text-lg font-black tracking-tight leading-none text-primary">AUTOMIZE</span>
        <span className="text-[8px] font-bold tracking-[3px] uppercase mt-0.5 leading-none opacity-60">Parts</span>
      </div>

      {/* Skip Button */}
      <button
          onClick={handleDismiss}
          className="absolute bottom-4 right-4 md:bottom-10 md:right-10 px-3 py-1 md:px-5 md:py-2 text-xs md:text-sm font-bold tracking-widest text-white border border-white/20 bg-black/40 backdrop-blur-sm transition-all duration-300 hover:bg-primary hover:border-transparent rounded-[4px] uppercase active:scale-95 cursor-pointer z-50"
        >
        SKIP INTRO →
      </button>
    </div>
  );
};

export default IntroOverlay;
