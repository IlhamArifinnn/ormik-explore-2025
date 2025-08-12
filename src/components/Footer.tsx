import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="relative w-full bg-cover bg-center bg-no-repeat backdrop-opacity-25 p-4 sm:p-6 lg:p-8"
      style={{ backgroundImage: "url('/assets/about/bg-about.png')" }}
    >
      <div className="bg-primary rounded-xl text-center p-4 sm:p-6 lg:p-8">
        {/* Bagian Atas: Media Sosial */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <Instagram className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-secondary" />
          <a
            href="https://www.instagram.com/ormikxplore/"
            className="text-secondary font-medium text-base sm:text-lg lg:text-xl"
          >
            @ormikxplore
          </a>
        </div>

        {/* Divider */}
        <hr className="w-[8%] sm:w-[5%] mx-auto border-t border-black my-2 sm:my-3" />

        {/* Bagian Bawah: Hak Cipta */}
        <p className="text-xs sm:text-sm lg:text-lg font-medium text-secondary">
          © ORMIK EXPLORE 2025. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
