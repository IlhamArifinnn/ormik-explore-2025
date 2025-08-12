import { CORETEAM } from "../utils/constants/data";
import CoreTeamCard from "./CoreTeamCard";

const CoreTeam = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat p-6 lg:p-10"
      style={{ backgroundImage: "url('/assets/about/bg-about.png')" }}
    >
      <h1 className="uppercase text-4xl lg:text-5xl text-primary font-bold text-center mb-10">
        The Core Team In Here
      </h1>

      {/* Awan Kiri - Hidden on small screens */}
      <img
        src="/assets/hero/awan-kiri.svg"
        alt="Awan Kiri"
        className="absolute -top-10 -left-18 w-[150px] sm:w-[200px] md:w-[250px] opacity-80 animate-[cloudMove_30s_linear_infinite] hidden sm:block"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto cursor-pointer">
        {CORETEAM.map((member, index) => (
          <CoreTeamCard key={index} {...member} />
        ))}
      </div>
      {/* kanan atas */}
      <img
        src="/assets/hero/asset-abstrak.svg"
        alt="asset abstrak"
        className="absolute top-6 sm:top-6 md:top-10 right-0 sm:right-2 md:right-2 w-[120px] sm:w-[150px] md:w-[200px] -z-1 hidden sm:block"
      />

      {/* kiri bawah */}
      <img
        src="/assets/hero/asset-abstrak.svg"
        alt="asset abstrak"
        className="absolute -bottom-10 sm:-bottom-10 md:-bottom-16 -left-10 sm:-left-12 md:-left-12 w-[120px] sm:w-[150px] md:w-[200px] z-1 hidden sm:block"
      />
    </section>
  );
};

export default CoreTeam;
