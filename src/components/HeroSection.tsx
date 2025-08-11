import { MoveUpRight } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import EventDate from "./EventDate";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden font-poppins">
      {/* Background Layers */}

      <img
        src="/assets/hero/bg-hero.png"
        alt="Background Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <img
        src="/assets/hero/bg-circle.png"
        alt="Background Circle"
        className="absolute inset-0 top-20 w-full h-full object-contain"
      />
      {/* Gedung Tengah */}
      <img
        src="/assets/hero/gedung-b.png"
        alt="Gedung Tengah"
        className="absolute left-1/2 top-31 -translate-x-1/2 z-10 w-[600px]"
      />

      {/* Gedung Kiri */}
      <img
        src="/assets/hero/gedung-a-kiri.png"
        alt="Gedung Kiri"
        className="absolute bottom-0 left-0 z-0 w-[400px]"
      />

      {/* Gedung Kanan */}
      <img
        src="/assets/hero/gedung-a-kanan.png"
        alt="Gedung Kanan"
        className="absolute bottom-0 right-0 z-0 w-[400px]"
      />

      <img
        src="/assets/hero/landasan.png"
        alt="Landasan"
        className="absolute bottom-0 w-full z-10 object-cover"
      />

      {/* Shadow Kuning Tengah */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-full h-[300px] bg-primary/30 rounded blur-3xl z-10" />

      {/* Awan Kiri */}
      <img
        src="/assets/hero/awan-kiri.png"
        alt="Awan Kiri"
        className="absolute top-4 left-0 w-[250px] opacity-80 animate-[cloudMove_30s_linear_infinite]"
      />

      {/* Awan Kanan */}
      <img
        src="/assets/hero/awan-kanan.png"
        alt="Awan Kanan"
        className="absolute top-4 right-6 w-[220px] opacity-80 animate-[cloudMove_40s_linear_infinite_reverse]"
      />

      {/* Logo */}
      <img
        src="/assets/hero/logo-ormik.png"
        alt="ORMIK Logo"
        className="w-30 relative z-10 mb-6"
      />

      {/* Title */}
      <img
        src="/assets/hero/hero-title.png"
        alt="Ready to Explore"
        className="w-[45%] relative z-10 mb-4"
      />

      {/* Button */}
      <div className="z-100 cursor-pointer select-none active:translate-y-1 active:shadow-none active:border-b-0 transition-all duration-200 bg-secondary [box-shadow:0_6px_0_0_#1b4ff8,0_10px_0_0_rgba(0, 14, 97,0.5)] border-b-[1px] border-secondary rounded-lg hover:scale-105 hover:shadow-[0_0_15px_rgba(0,174,255,0.7)]">
        <span className="flex items-center gap-3 h-full font-bold px-6 py-3 text-white">
          CAMPUS EXPLORE <MoveUpRight size={28} />
        </span>
      </div>

      {/* Countdown */}
      <div className="relative z-11 mt-8">
        <CountdownTimer />
      </div>

      {/* Event Dates */}
      <div className="relative z-10 flex gap-4 mt-6 text-white text-sm">
        <EventDate />
      </div>

      <img
        src="/assets/hero/asset-abstrak.png"
        alt="asset abstrak"
        className="absolute -bottom-20 left-10 w-[200px] z-10"
      />
      <img
        src="/assets/hero/asset-abstrak.png"
        alt="asset abstrak"
        className="absolute -bottom-20 right-10 w-[200px] z-10"
      />
    </section>
  );
};

export default HeroSection;
