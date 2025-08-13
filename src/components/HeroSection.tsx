import { MoveUpRight } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import EventDate from "./EventDate";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden font-poppins px-2 sm:px-4 py-4 sm:py-8">
      {/* Background Layers */}
      <img
        src="/assets/hero/bg-hero.svg"
        alt="Background Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <img
        src="/assets/hero/bg-circle.svg"
        alt="Background Circle"
        className="absolute inset-0 top-4 sm:top-8 md:top-12 lg:top-16 xl:top-20 w-full h-full object-contain"
      />

      {/* Gedung Tengah */}
      <img
        src="/assets/hero/gedung-b.png"
        alt="Gedung Tengah"
        className="absolute left-1/2 bottom-2 xs:bottom-4 sm:bottom-8 md:top-12 lg:top-32 xl:top-40 -translate-x-1/2 z-10 w-[250px] xs:w-[280px] sm:w-[350px] md:w-[450px] lg:w-[550px] xl:w-[650px]"
      />

      {/* Gedung Kiri */}
      <img
        src="/assets/hero/gedung-a-kiri.png"
        alt="Gedung Kiri"
        className="absolute bottom-0 left-0 z-0 w-[120px] xs:w-[150px] sm:w-[200px] md:w-[250px] lg:w-[320px] xl:w-[400px]"
      />

      {/* Gedung Kanan */}
      <img
        src="/assets/hero/gedung-a-kanan.png"
        alt="Gedung Kanan"
        className="absolute bottom-0 right-0 z-0 w-[120px] xs:w-[150px] sm:w-[200px] md:w-[250px] lg:w-[320px] xl:w-[400px]"
      />

      {/* Landasan */}
      <img
        src="/assets/hero/landasan.png"
        alt="Landasan"
        className="absolute bottom-0 w-full z-10 object-cover h-12 xs:h-14 sm:h-16 md:h-20 lg:h-24"
      />

      {/* Shadow Kuning Tengah */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[80%] sm:w-full h-[180px] xs:h-[200px] sm:h-[250px] md:h-[320px] lg:h-[400px] bg-primary/30 rounded blur-3xl z-10" />

      {/* Awan Kiri */}
      <img
        src="/assets/hero/awan-kiri.svg"
        alt="Awan Kiri"
        className="absolute top-2 xs:top-4 sm:top-6 md:top-8 left-0 w-[100px] xs:w-[130px] sm:w-[170px] md:w-[210px] lg:w-[250px] opacity-70 sm:opacity-80 animate-[cloudMove_30s_linear_infinite]"
      />

      {/* Awan Kanan */}
      <img
        src="/assets/hero/awan-kanan.svg"
        alt="Awan Kanan"
        className="absolute top-2 xs:top-4 sm:top-6 md:top-8 right-2 xs:right-4 sm:right-6 w-[80px] xs:w-[100px] sm:w-[140px] md:w-[180px] lg:w-[220px] opacity-70 sm:opacity-80 animate-[cloudMove_40s_linear_infinite_reverse]"
      />

      {/* Content Container */}
      <div className="relative z-20 flex flex-col items-center text-center space-y-3 xs:space-y-4 sm:space-y-6 md:space-y-8 max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto px-2">
        {/* Logo */}
        <img
          src="/assets/hero/logo-ormik.svg"
          alt="ORMIK Logo"
          className="w-16 xs:w-18 sm:w-20 md:w-24 lg:w-28 xl:w-32"
        />

        {/* Title */}
        <img
          src="/assets/hero/hero-title.svg"
          alt="Ready to Explore"
          className="w-[85%] xs:w-[90%] sm:w-[85%] md:w-[75%] lg:w-[65%] max-w-[280px] xs:max-w-[320px] sm:max-w-md md:max-w-lg"
        />

        {/* Button */}
        <div
          className="cursor-pointer select-none active:translate-y-1 active:shadow-none active:border-b-0 transition-all duration-200 bg-secondary 
          [box-shadow:0_3px_0_0_#1b4ff8,0_5px_0_0_rgba(0,14,97,0.5)] 
          xs:[box-shadow:0_4px_0_0_#1b4ff8,0_6px_0_0_rgba(0,14,97,0.5)] 
          sm:[box-shadow:0_5px_0_0_#1b4ff8,0_8px_0_0_rgba(0,14,97,0.5)] 
          md:[box-shadow:0_6px_0_0_#1b4ff8,0_10px_0_0_rgba(0,14,97,0.5)] 
          border-b-[1px] border-secondary rounded-md sm:rounded-lg hover:scale-105 hover:shadow-[0_0_15px_rgba(0,174,255,0.7)]"
        >
          <span
            className="flex items-center justify-center gap-2 sm:gap-3 h-full font-bold 
            px-3 xs:px-4 sm:px-5 md:px-6 
            py-2 xs:py-2.5 sm:py-3 
            text-white text-xs xs:text-sm sm:text-base"
          >
            CAMPUS EXPLORE
            <MoveUpRight
              size={16}
              className="xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            />
          </span>
        </div>

        {/* Countdown */}
        <div className="my-2 xs:my-3 sm:my-4 md:my-6 lg:my-8">
          <CountdownTimer />
        </div>

        {/* Event Dates */}
        <div className="flex flex-wrap justify-center gap-1 xs:gap-1.5 sm:gap-2 text-white text-[10px] xs:text-xs sm:text-sm md:text-base px-1 xs:px-2">
          <EventDate />
        </div>
      </div>

      {/* Asset Abstrak - Now visible on all screens with appropriate sizing */}
      <img
        src="/assets/hero/asset-abstrak.svg"
        alt="asset abstrak"
        className="absolute -bottom-8 xs:-bottom-12 sm:-bottom-16 md:-bottom-20 
          left-1 xs:left-2 sm:left-4 md:left-8 lg:left-10 
          w-[80px] xs:w-[100px] sm:w-[130px] md:w-[160px] lg:w-[200px] z-10 
          opacity-60 xs:opacity-70 sm:opacity-80 md:opacity-90"
      />
      <img
        src="/assets/hero/asset-abstrak.svg"
        alt="asset abstrak"
        className="absolute -bottom-8 xs:-bottom-12 sm:-bottom-16 md:-bottom-20 
          right-1 xs:right-2 sm:right-4 md:right-8 lg:right-10 
          w-[80px] xs:w-[100px] sm:w-[130px] md:w-[160px] lg:w-[200px] z-10 
          opacity-60 xs:opacity-70 sm:opacity-80 md:opacity-90"
      />

      {/* Additional responsive styles for very small screens */}
      <style>{`
        @media (max-width: 375px) {
          .font-poppins {
            font-size: 14px;
          }
        }

        @keyframes cloudMove {
          0% {
            transform: translateX(-20px);
          }
          50% {
            transform: translateX(20px);
          }
          100% {
            transform: translateX(-20px);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
