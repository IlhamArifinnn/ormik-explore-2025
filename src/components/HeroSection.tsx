import { MoveUpRight } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import EventDate from "./EventDate";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden font-poppins px-4 sm:px-6 lg:px-10 py-6 sm:py-10">
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
        className="absolute left-1/2 bottom-3 sm:bottom-6 md:bottom-8 lg:bottom-12 -translate-x-1/2 z-10 w-[200px] xs:w-[280px] sm:w-[350px] md:w-[460px] lg:w-[570px] xl:w-[680px]"
      />

      {/* Gedung Kiri */}
      <img
        src="/assets/hero/gedung-a-kiri.png"
        alt="Gedung Kiri"
        className="absolute bottom-0 left-0 z-0 w-[100px] xs:w-[150px] sm:w-[200px] md:w-[260px] lg:w-[330px] xl:w-[410px]"
      />

      {/* Gedung Kanan */}
      <img
        src="/assets/hero/gedung-a-kanan.png"
        alt="Gedung Kanan"
        className="absolute bottom-0 right-0 z-0 w-[100px] xs:w-[150px] sm:w-[200px] md:w-[260px] lg:w-[330px] xl:w-[410px]"
      />

      {/* Landasan */}
      <img
        src="/assets/hero/landasan.png"
        alt="Landasan"
        className="absolute bottom-0 w-full z-10 object-cover h-10 xs:h-14 sm:h-16 md:h-20 lg:h-24"
      />

      {/* Shadow Kuning Tengah */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[85%] sm:w-full h-[160px] xs:h-[200px] sm:h-[260px] md:h-[340px] lg:h-[420px] bg-primary/30 rounded blur-3xl z-10" />

      {/* Awan Kiri */}
      <img
        src="/assets/hero/awan-kiri.svg"
        alt="Awan Kiri"
        className="absolute top-2 xs:top-4 sm:top-6 md:top-8 left-0 w-[80px] xs:w-[130px] sm:w-[170px] md:w-[220px] lg:w-[260px] opacity-70 sm:opacity-80 animate-[cloudMove_30s_linear_infinite]"
      />

      {/* Awan Kanan */}
      <img
        src="/assets/hero/awan-kanan.svg"
        alt="Awan Kanan"
        className="absolute top-2 xs:top-4 sm:top-6 md:top-8 right-2 xs:right-4 sm:right-6 w-[60px] xs:w-[100px] sm:w-[140px] md:w-[200px] lg:w-[240px] opacity-70 sm:opacity-80 animate-[cloudMove_40s_linear_infinite_reverse]"
      />

      {/* Content Container */}
      <div className="relative z-20 flex flex-col items-center text-center space-y-3 xs:space-y-4 sm:space-y-6 md:space-y-8 max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto px-2">
        {/* Logo */}
        <img
          src="/assets/hero/logo-ormik.svg"
          alt="ORMIK Logo"
          className="w-14 xs:w-18 sm:w-20 md:w-24 lg:w-32"
        />
        {/* Title */}
        <img
          src="/assets/hero/hero-title.svg"
          alt="Ready to Explore"
          className="w-[80%] xs:w-[90%] sm:w-[80%] md:w-[65%] lg:w-[55%] max-w-[280px] xs:max-w-[320px] sm:max-w-md md:max-w-lg"
        />
        {/* Button */}
        <div className="cursor-pointer select-none active:translate-y-1 active:shadow-none active:border-b-0 transition-all duration-200 bg-secondary [box-shadow:0_3px_0_0_#1b4ff8,0_5px_0_0_rgba(0,14,97,0.5)] xs:[box-shadow:0_4px_0_0_#1b4ff8,0_6px_0_0_rgba(0,14,97,0.5)] sm:[box-shadow:0_5px_0_0_#1b4ff8,0_8px_0_0_rgba(0,14,97,0.5)] md:[box-shadow:0_6px_0_0_#1b4ff8,0_10px_0_0_rgba(0,14,97,0.5)] border-b-[1px] border-secondary rounded-md sm:rounded-lg hover:scale-105 hover:shadow-[0_0_15px_rgba(0,174,255,0.7)]">
          <span className="flex items-center justify-center gap-2 sm:gap-3 h-full font-bold px-3 xs:px-4 sm:px-5 md:px-6 py-2 xs:py-2.5 sm:py-3 text-white text-xs xs:text-sm sm:text-base">
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
        <div className="flex flex-wrap justify-center gap-1 xs:gap-1.5 sm:gap-2 text-white text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg px-1 xs:px-2">
          <EventDate />
        </div>
      </div>

      {/* Asset Abstrak */}
      <img
        src="/assets/hero/asset-abstrak.svg"
        alt="asset abstrak"
        className="absolute -bottom-8 sm:-bottom-12 md:-bottom-16 lg:-bottom-20 left-2 sm:left-6 md:left-10 w-[60px] xs:w-[100px] sm:w-[130px] md:w-[160px] lg:w-[200px] z-10 opacity-60 sm:opacity-80"
      />
      <img
        src="/assets/hero/asset-abstrak.svg"
        alt="asset abstrak"
        className="absolute -bottom-8 sm:-bottom-12 md:-bottom-16 lg:-bottom-20 right-2 sm:right-6 md:right-10 w-[60px] xs:w-[100px] sm:w-[130px] md:w-[160px] lg:w-[200px] z-10 opacity-60 sm:opacity-80"
      />

      {/* Extra styles */}
      <style>{`
        @media (max-width: 375px) {
          .font-poppins {
            font-size: 14px;
          }
        }
        @keyframes cloudMove {
          0% { transform: translateX(-20px); }
          50% { transform: translateX(20px); }
          100% { transform: translateX(-20px); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
