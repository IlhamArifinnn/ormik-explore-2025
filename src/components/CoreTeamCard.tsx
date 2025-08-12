import type { CoreTeamMember } from "../utils/constants/data";

// components/CoreTeamCard.jsx
const CoreTeamCard = ({ image, division, description }: CoreTeamMember) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg">
      <img
        src={image}
        alt={division}
        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-lg font-bold text-primary">{division}</h3>
        <p className="text-sm text-white mt-2">{description}</p>
      </div>
    </div>
  );
};

export default CoreTeamCard;
