import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDays = 3, size = 'normal' }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    let countdownTarget = localStorage.getItem('countdownTarget');
    if (!countdownTarget) {
      countdownTarget = new Date().getTime() + (targetDays * 24 * 60 * 60 * 1000);
      localStorage.setItem('countdownTarget', countdownTarget);
    } else {
      countdownTarget = parseInt(countdownTarget);
    }

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = countdownTarget - now;

      if (difference <= 0) {
        clearInterval(interval);
        localStorage.removeItem('countdownTarget');
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [targetDays]);

  const padZero = (num) => String(num).padStart(2, '0');

  if (size === 'small') {
    return (
      <div className="flex gap-2 justify-center">
        <div className="bg-yellowbadge text-dark w-10 h-10 flex flex-col items-center justify-center rounded-custom font-bold">
          <span className="text-[13px] leading-tight">{padZero(timeLeft.days)}</span>
          <label className="text-[7px] uppercase font-bold cursor-pointer">Days</label>
        </div>
        <div className="bg-yellowbadge text-dark w-10 h-10 flex flex-col items-center justify-center rounded-custom font-bold">
          <span className="text-[13px] leading-tight">{padZero(timeLeft.hours)}</span>
          <label className="text-[7px] uppercase font-bold cursor-pointer">Hours</label>
        </div>
        <div className="bg-yellowbadge text-dark w-10 h-10 flex flex-col items-center justify-center rounded-custom font-bold">
          <span className="text-[13px] leading-tight">{padZero(timeLeft.minutes)}</span>
          <label className="text-[7px] uppercase font-bold cursor-pointer">Mins</label>
        </div>
        <div className="bg-yellowbadge text-dark w-10 h-10 flex flex-col items-center justify-center rounded-custom font-bold">
          <span className="text-[13px] leading-tight">{padZero(timeLeft.seconds)}</span>
          <label className="text-[7px] uppercase font-bold cursor-pointer">Secs</label>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-1.5">
      <div className="bg-primary text-white w-11 h-11 flex flex-col items-center justify-center rounded-custom font-bold shadow-sm">
        <span className="text-[15px] leading-none">{padZero(timeLeft.days)}</span>
        <span className="text-[8px] uppercase opacity-80">days</span>
      </div>
      <div className="bg-primary text-white w-11 h-11 flex flex-col items-center justify-center rounded-custom font-bold shadow-sm">
        <span className="text-[15px] leading-none">{padZero(timeLeft.hours)}</span>
        <span className="text-[8px] uppercase opacity-80">hrs</span>
      </div>
      <div className="bg-primary text-white w-11 h-11 flex flex-col items-center justify-center rounded-custom font-bold shadow-sm">
        <span className="text-[15px] leading-none">{padZero(timeLeft.minutes)}</span>
        <span className="text-[8px] uppercase opacity-80">min</span>
      </div>
      <div className="bg-primary text-white w-11 h-11 flex flex-col items-center justify-center rounded-custom font-bold shadow-sm">
        <span className="text-[15px] leading-none">{padZero(timeLeft.seconds)}</span>
        <span className="text-[8px] uppercase opacity-80">sec</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
