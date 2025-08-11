import { MoveUpRight } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import EventDate from "./EventDate";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden font-poppins px-4 py-8">
      {/* Background Layers */}
      <img
        src="/assets/hero/bg-hero.png"
        alt="Background Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <img
        src="/assets/hero/bg-circle.svg"
        alt="Background Circle"
        className="absolute inset-0 top-8 sm:top-16 md:top-20 w-full h-full object-contain"
      />

      {/* Gedung Tengah */}
      <img
        src="/assets/hero/gedung-b.png"
        alt="Gedung Tengah"
        className="absolute left-1/2 bottom-4 sm:top-16 md:top-58 lg:top-43 -translate-x-1/2 z-10 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px]"
      />

      {/* Gedung Kiri */}
      <img
        src="/assets/hero/gedung-a-kiri.png"
        alt="Gedung Kiri"
        className="absolute bottom-0 left-0 z-0 w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px]"
      />

      {/* Gedung Kanan */}
      <img
        src="/assets/hero/gedung-a-kanan.png"
        alt="Gedung Kanan"
        className="absolute bottom-0 right-0 z-0 w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px]"
      />

      <img
        src="/assets/hero/landasan.png"
        alt="Landasan"
        className="absolute bottom-0 w-full z-10 object-cover h-16 sm:h-20 md:h-24"
      />

      {/* Shadow Kuning Tengah */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-full h-[250px] sm:h-[300px] md:h-[400px] bg-primary/30 rounded blur-3xl z-10" />

      {/* Awan Kiri - Hidden on small screens */}
      <img
        src="/assets/hero/awan-kiri.svg"
        alt="Awan Kiri"
        className="absolute top-4 left-0 w-[150px] sm:w-[200px] md:w-[250px] opacity-80 animate-[cloudMove_30s_linear_infinite] hidden sm:block"
      />

      {/* Awan Kanan - Hidden on small screens */}
      <img
        src="/assets/hero/awan-kanan.svg"
        alt="Awan Kanan"
        className="absolute top-4 right-6 w-[120px] sm:w-[170px] md:w-[220px] opacity-80 animate-[cloudMove_40s_linear_infinite_reverse] hidden sm:block"
      />

      {/* Content Container */}
      <div className="relative z-20 flex flex-col items-center text-center space-y-4 sm:space-y-6 max-w-4xl mx-auto">
        {/* Logo */}
        <img
          src="/assets/hero/logo-ormik.svg"
          alt="ORMIK Logo"
          className="w-20 sm:w-24 md:w-28 lg:w-30"
        />

        {/* Title */}
        <img
          src="/assets/hero/hero-title.png"
          alt="Ready to Explore"
          className="w-[90%] sm:w-[90%] md:w-[70%] lg:w-[65%] max-w-md"
        />

        {/* Button */}
        <div className="cursor-pointer select-none active:translate-y-1 active:shadow-none active:border-b-0 transition-all duration-200 bg-secondary [box-shadow:0_4px_0_0_#1b4ff8,0_6px_0_0_rgba(0,14,97,0.5)] sm:[box-shadow:0_6px_0_0_#1b4ff8,0_10px_0_0_rgba(0,14,97,0.5)] border-b-[1px] border-secondary rounded-lg hover:scale-105 hover:shadow-[0_0_15px_rgba(0,174,255,0.7)]">
          <span className="flex items-center gap-2 sm:gap-3 h-full font-bold px-4 sm:px-6 py-2 sm:py-3 text-white text-sm sm:text-base">
            CAMPUS EXPLORE <MoveUpRight size={20} className="sm:w-7 sm:h-7" />
          </span>
        </div>

        {/* Countdown */}
        <div className="my-4 sm:my-6 md:my-8">
          <CountdownTimer />
        </div>

        {/* Event Dates */}
        <div className="flex flex-wrap justify-center gap-2 text-white text-xs sm:text-sm px-2">
          <EventDate />
        </div>
      </div>

      {/* Asset Abstrak - Hidden on mobile, positioned better on larger screens */}
      <img
        src="/assets/hero/asset-abstrak.svg"
        alt="asset abstrak"
        className="absolute -bottom-16 sm:-bottom-16 md:-bottom-20 left-4 sm:left-8 md:left-10 w-[120px] sm:w-[150px] md:w-[200px] z-10 hidden sm:block"
      />
      <img
        src="/assets/hero/asset-abstrak.svg"
        alt="asset abstrak"
        className="absolute -bottom-16 sm:-bottom-16 md:-bottom-20 right-4 sm:right-8 md:right-10 w-[120px] sm:w-[150px] md:w-[200px] z-10 hidden sm:block"
      />
    </section>
  );
};

export default HeroSection;
