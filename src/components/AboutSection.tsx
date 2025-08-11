const AboutSection = () => {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat backdrop-opacity-25 p-4 sm:p-6 lg:p-10"
      style={{ backgroundImage: "url('/assets/about/bg-about.png')" }}
    >
      {/* Gambar tambahan di sudut kiri atas */}
      <img
        src="/assets/about/explore-kiri.png"
        alt="Explore Left"
        className="absolute top-8 left-8 z-10"
        style={{
          width: "80px", // Ukuran lebih kecil untuk mobile
          height: "auto",
        }}
      />

      {/* Top Section - Yellow Card */}
      <div
        className="w-full max-w-7xl flex flex-col lg:flex-row justify-between items-center mx-auto rounded-3xl p-6 sm:p-8 lg:p-16 mb-6 lg:mb-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/about/bg-yellow.png')" }}
      >
        {/* Left Side - Explore Our Logo */}
        <div className="w-full lg:w-[30%] mb-6 lg:mb-0">
          <div className="mb-4">
            <img
              src="/assets/about/explore-our-logo.svg"
              alt="Explore Our Logo"
              className="w-48 sm:w-56 lg:w-64 mx-auto lg:mx-0"
            />
          </div>
          <p className="text-sm sm:text-base text-gray-800 leading-relaxed text-center lg:text-justify">
            Bentuk <span className="font-bold">"X"</span> dan{" "}
            <span className="font-bold text-blue-600">dua kaki</span>{" "}
            melambangkan manusia sebagai{" "}
            <span className="font-bold text-blue-600">pusat eksplorasi</span>{" "}
            yang{" "}
            <span className="font-bold text-blue-600">aktif bergerak maju</span>
            , menjelajahi dunia{" "}
            <span className="font-bold text-blue-600">akademik</span> dan{" "}
            <span className="font-bold text-blue-600">teknologi</span>.
          </p>
        </div>

        {/* Center Section - Logo Showcase */}
        <div className="w-full lg:w-[30%] relative flex flex-col items-center mb-6 lg:mb-0">
          {/* Background People */}
          <div className="relative">
            <img
              className="w-64 sm:w-72 lg:w-86 mx-auto "
              src="/assets/about/bg-people.svg"
              alt="background image people"
            />

            {/* Output Tray - Positioned over the people background */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
              <img
                className="w-48 sm:w-56 lg:w-64"
                src="/assets/about/output-tray.svg"
                alt="paper tray"
              />
            </div>

            {/* Paper ORMIK Explore - Positioned over the tray */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
              <img
                className="w-44 sm:w-52 lg:w-60"
                src="/assets/about/paper-ormik-explore.png"
                alt="paper ormik explore"
              />
            </div>
            <img
              className="absolute top-0"
              src="/assets/about/border-paper.svg"
              alt="border image"
            />
            {/* Slogan Tags */}
            <img
              className="absolute bottom-6 -left-18 md:-left-32 lg:-left-14 w-40 sm:w-48 lg:w-38 mx-auto"
              src="/assets/about/slogan.svg"
              alt="Exploration, Innovative, Dynamic"
            />
          </div>
        </div>

        {/* Right Side - Description */}
        <div className="w-full lg:w-[30%]">
          <p className="text-sm sm:text-base text-gray-800 leading-relaxed mb-6 text-center lg:text-left">
            Logo ini merepresentasikan{" "}
            <span className="font-bold text-blue-600">
              semangat eksplorasi akademik
            </span>{" "}
            dan <span className="font-bold text-blue-600">teknologi</span>,
            serta mengajak{" "}
            <span className="font-bold text-blue-600">explorers</span> untuk{" "}
            <span className="font-bold text-blue-600">berani mengexplore</span>,{" "}
            <span className="font-bold text-blue-600">terhubung</span> dengan
            masa depan, dan{" "}
            <span className="font-bold text-blue-600">aktif berinovasi</span>.
          </p>
          <div className="flex justify-center lg:justify-start">
            <img
              src="/assets/about/logo-ormik-explore.svg"
              alt="Logo ORMIK Explore"
              className="w-48 sm:w-56 lg:w-64"
            />
          </div>
        </div>
      </div>

      {/* Gambar tambahan di sudut kanan bawah */}
      <img
        src="/assets/about/explore-kanan.png"
        alt="Explore Right"
        className="absolute bottom-2 md:bottom-8 right-0 md:right-8 z-10"
        style={{
          width: "80px", // Ukuran lebih kecil untuk mobile
          height: "auto",
        }}
      />

      {/* Bottom Section - Blue Card */}
      <div
        className="w-full max-w-7xl flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-8 mx-auto rounded-3xl p-6 sm:p-8 lg:p-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/about/bg-blue.png')" }}
      >
        {/* Left Side - ORMIK Info */}
        <div className="w-full lg:w-1/2">
          {/* ORMIK Header */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mb-4 justify-center lg:justify-start">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary [text-shadow:_3px_2px_2px_#000e61] sm:[text-shadow:_6px_5px_3px_#000e61]">
              ORMIK
            </p>
            <img
              src="/assets/about/line.png"
              alt="separator"
              className="h-6 sm:h-8 lg:h-10 hidden sm:block"
            />
            <p className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-primary [text-shadow:_3px_2px_2px_#000e61] sm:[text-shadow:_6px_5px_3px_#000e61]">
              Orientasi Akademik
            </p>
          </div>

          <p className="mb-4 lg:mb-6 text-white text-center lg:text-left text-sm sm:text-base font-medium">
            Sekolah Tinggi Teknologi Terpadu Nurul Fikri
          </p>

          <p className="text-white text-center lg:text-left text-sm sm:text-base leading-relaxed">
            Kegiatan yang bertujuan untuk{" "}
            <span className="font-semibold">memperkenalkan mahasiswa baru</span>
            dengan sistem <span className="font-semibold">
              perkuliahan
            </span> dan <span className="font-semibold">lingkungan kampus</span>
            .
          </p>
        </div>

        {/* Right Side - ORMIK Explore */}
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start mb-4 lg:mb-6">
            <p className="text-5xl sm:text-3xl text-center md:text-4xl lg:text-5xl font-bold text-primary [text-shadow:_3px_2px_2px_#000e61] sm:[text-shadow:_6px_5px_3px_#000e61]">
              ORMIK EXPLORE
            </p>
          </div>

          <p className="text-white text-center lg:text-left text-sm sm:text-base leading-relaxed">
            <span className="font-semibold">ORMIK EXPLORE 2025</span> memiliki
            visi menjadi titik mulai eksplorasi mahasiswa baru STT-NF dalam
            membangun semangat akademik, budaya positif, dan kesiapan diri di
            era modern.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
