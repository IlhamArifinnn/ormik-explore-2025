import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <>
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
          {/* Tambahkan section lain di sini jika ada */}
          {/* <NextSection /> */}
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
}

export default App;
