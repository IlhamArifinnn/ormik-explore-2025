import { ArrowRight } from "lucide-react";

const DownloadSection = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat p-4 sm:p-6 lg:p-8"
      style={{ backgroundImage: "url('/assets/about/bg-about.png')" }}
    >
      {/* Kontainer utama */}
      <div className="max-w-screen-xl mx-auto">
        {/* Card transparan */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg overflow-hidden">
          {/* Layout: Mobile = Vertikal, Tablet+ = Horizontal */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            {/* Maskot */}
            <div className="flex-shrink-0 w-full sm:w-auto flex justify-center sm:justify-start">
              <img
                src="/assets/download/zero.svg"
                alt="Zero Mascot"
                className="w-36 sm:w-40 lg:w-48 h-auto max-w-xs"
              />
            </div>

            {/* Teks */}
            <div className="flex-1 text-center sm:text-left space-y-2">
              <h1 className="text-white text-xl sm:text-2xl lg:text-3xl font-extrabold">
                Hai, Explorers!!
              </h1>
              <p className="text-white text-sm sm:text-base lg:text-lg leading-relaxed max-w-md mx-auto sm:mx-0">
                Kamu bisa download{" "}
                <span className="font-semibold">Guide Book</span>,{" "}
                <span className="font-semibold">Twibbon Explorer</span> dll
                disini yaaa!!!
              </p>

              {/* Link Klik Download */}
              <div className="flex items-center justify-center sm:justify-start gap-2 text-white text-sm sm:text-base cursor-pointer hover:text-primary transition-colors duration-200 mt-2">
                <span>Klik download</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </div>

            {/* Tombol Download */}
            <div className="flex-shrink-0 w-full sm:w-auto flex justify-center sm:justify-end">
              <div
                className="cursor-pointer select-none active:translate-y-1 active:shadow-none active:border-b-0 
                transition-all duration-200 bg-primary rounded-lg 
                [box-shadow:0_4px_0_0_#000e61,0_6px_0_0_rgba(0,14,97,0.5)] 
                hover:scale-105 hover:shadow-[0_0_15px_rgba(226,220,0,0.7)] 
                border-b border-secondary"
              >
                <span className="flex items-center h-full font-bold px-5 py-2.5 sm:px-6 lg:px-8 sm:py-3 text-secondary text-sm sm:text-base">
                  <a href="#">Download Center</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
