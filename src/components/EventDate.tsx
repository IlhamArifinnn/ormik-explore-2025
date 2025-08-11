import { ORMIK_DATES } from "../utils/constants/data";

const EventDate = () => {
  return (
    <>
      {" "}
      <div className="bg-white/20 px-4 py-3 rounded-lg">
        <span className="text-primary font-bold">PRA ORMIK</span>
        <br />
        {ORMIK_DATES.pra.toLocaleDateString("en-US", {
          weekday: "long",
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
      </div>
      <div className="bg-white/20 px-4 py-3 rounded-lg">
        <span className="text-primary font-bold">DAY 1</span>
        <br />
        {ORMIK_DATES.day1.toLocaleDateString("en-US", {
          weekday: "long",
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
      </div>
      <div className="bg-white/20 px-4 py-3 rounded-lg">
        <span className="text-primary font-bold">DAY 2</span>
        <br />
        {ORMIK_DATES.day2.toLocaleDateString("en-US", {
          weekday: "long",
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
      </div>
      <div className="bg-white/20 px-4 py-3 rounded-lg">
        <span className="text-primary font-bold">DAY 3</span>
        <br />
        {ORMIK_DATES.day3.toLocaleDateString("en-US", {
          weekday: "long",
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
      </div>
    </>
  );
};

export default EventDate;
