const CampusSection = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat p-6 lg:p-10"
      style={{ backgroundImage: "url('/assets/about/bg-about.png')" }}
    >
      {/* Gambar tambahan di sudut kiri atas */}
      <img
        src="/assets/about/explore-kiri.png"
        alt="Explore Left"
        className="absolute top-20 left-0 -z-1"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {/* Campus A */}
        <div className="text-center">
          <h1 className="text-primary text-3xl font-extrabold uppercase mb-4">
            Campus A
          </h1>
          <p className="text-white text-sm leading-relaxed max-w-md mx-auto mb-6">
            Jl. Setu Indah No.116, Tugu, Kec. Cimanggis, Kota Depok, Jawa Barat
            16451
          </p>
          <img
            src="/assets/kampus/kampus-b.svg"
            alt="Peta Kampus A"
            className="mx-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Campus B */}
        <div className="text-center">
          <h1 className="text-primary text-3xl font-extrabold uppercase mb-4">
            Campus B
          </h1>
          <p className="text-white text-sm leading-relaxed max-w-md mx-auto mb-6">
            Jl. Lenteng Agung Raya No.20 RT.5/RW.1 Lenteng Agung, Srengseng
            Sawah, Kec. Jagakarsa, Kota Jakarta Selatan, 12640
          </p>
          <img
            src="/assets/kampus/kampus-b.svg"
            alt="Peta Kampus B"
            className="mx-auto rounded-lg shadow-lg"
          />
        </div>
        {/* Awan kanan bawah - Hidden on small screens */}
        <img
          src="/assets/hero/awan-kiri.svg"
          alt="Awan kanan"
          className="absolute bottom-0 right-0 w-[150px] sm:w-[200px] md:w-[250px] opacity-80 animate-[cloudMove_30s_linear_infinite] hidden sm:block"
        />
      </div>
    </section>
  );
};

export default CampusSection;
