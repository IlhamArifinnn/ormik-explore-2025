import { useEffect, useState } from "react";
import { ORMIK_DATES } from "../utils/constants/data";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = ORMIK_DATES.day1.getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 sm:gap-6 bg-white/10 backdrop-blur-md px-4 sm:px-6 md:px-10 py-4 sm:py-6 rounded-2xl shadow-lg max-w-full">
      {/* Timer Box */}
      <div className="flex gap-3 sm:gap-6 md:gap-8">
        {[
          { label: "Day", value: timeLeft.days },
          { label: "Hour", value: timeLeft.hours },
          { label: "Minute", value: timeLeft.minutes },
          { label: "Second", value: timeLeft.seconds },
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-white font-poppins"
          >
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary [text-shadow:_3px_2px_2px_#000e61] sm:[text-shadow:_6px_5px_3px_#000e61]">
              {item.value.toString().padStart(2, "0")}
            </div>
            <p className="text-xs sm:text-sm italic mt-1">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Text di bawah timer */}
      <p className="text-white text-sm sm:text-lg md:text-xl font-bold text-center px-2">
        GO TO ORMIK EXPLORE DAY 1
      </p>
    </div>
  );
};

export default CountdownTimer;
