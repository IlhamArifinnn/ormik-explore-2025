import { ORMIK_DATES } from "../utils/constants/data";

const EventDate = () => {
  const events = [
    { label: "PRA ORMIK", date: ORMIK_DATES.pra },
    { label: "DAY 1", date: ORMIK_DATES.day1 },
    { label: "DAY 2", date: ORMIK_DATES.day2 },
    { label: "DAY 3", date: ORMIK_DATES.day3 },
  ];

  return (
    <>
      {events.map((event, index) => (
        <div
          key={index}
          className="bg-white/20 px-2 sm:px-3 md:px-4 py-2 sm:py-3 rounded-lg text-center min-w-[120px] sm:min-w-[140px] mx-auto"
        >
          <span className="text-primary font-bold text-xs sm:text-sm block">
            {event.label}
          </span>
          <span className="text-xs sm:text-sm block mt-1">
            {event.date.toLocaleDateString("en-US", {
              weekday: "short",
              month: "short",
              day: "numeric",
            })}
          </span>
          {/* Show year on larger screens */}
          <span className="text-xs hidden sm:block">
            {event.date.getFullYear()}
          </span>
        </div>
      ))}
    </>
  );
};

export default EventDate;
