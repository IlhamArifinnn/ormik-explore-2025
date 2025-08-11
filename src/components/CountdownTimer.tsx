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
    <div className="flex flex-col items-center gap-6 bg-white/10 backdrop-blur-md px-10 py-6 rounded-2xl shadow-lg">
      {/* Timer Box */}
      <div className="flex gap-8">
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
            <div className="text-5xl font-bold text-primary">
              {item.value.toString().padStart(2, "0")}
            </div>
            <p className="text-sm italic">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Text di bawah timer */}
      <p className="text-white text-xl font-bold text-center">
        GO TO ORMIK EXPLORE DAY 1
      </p>
    </div>
  );
};

export default CountdownTimer;
