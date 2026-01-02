import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection";
import CampusSection from "./components/CampusSection";
import CoreTeam from "./components/CoreTeam";
import DownloadSection from "./components/DownloadSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import { CORETEAM } from "./utils/constants/data";

function App() {
  const [loadingAssets, setLoadingAssets] = useState(true);

  useEffect(() => {
    const assets = [
      "/assets/landasan.png",
      ...CORETEAM.map((c) => c.image),
    ].filter(Boolean);

    Promise.all(
      assets.map(
        (src) =>
          new Promise<void>((res) => {
            const img = new Image();
            img.src = src;
            img.onload = () => res();
            img.onerror = () => res(); // resolve on error to avoid blocking
          })
      )
    ).then(() => setLoadingAssets(false));
  }, []);

  if (loadingAssets) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
        <div className="flex flex-col items-center gap-3">
          <svg
            className="animate-spin h-12 w-12 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
          <span className="text-white">Memuat halaman...</span>
        </div>
      </div>
    );
  }

  return (
    <section className="overflow-x-hidden">
      <HeroSection />
      {/* Container dengan background landasan untuk semua section setelah hero */}
      <div
        className="relative bg-cover bg-center bg-fixed bg-no-repeat min-h-screen"
        style={{ backgroundImage: "url('/assets/landasan.png')" }}
      >
        {/* Overlay untuk mengurangi kontras background jika diperlukan */}
        <div className="absolute inset-0 bg-black/10 z-0" />

        {/* Content sections */}
        <div className="relative z-10">
          <AboutSection />
          <CoreTeam />
          <CampusSection />
          <DownloadSection />
          <Footer />
        </div>
      </div>
    </section>
  );
}

export default App;
