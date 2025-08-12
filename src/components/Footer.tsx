import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="relative w-full bg-cover bg-center bg-no-repeat backdrop-opacity-25 p-4 sm:p-6 lg:p-8"
      style={{ backgroundImage: "url('/assets/about/bg-about.png')" }}
    >
      <div className="bg-primary rounded-xl text-center p-6">
        {/* Bagian Atas: Media Sosial */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <Instagram className="w-6 h-6 text-secondary" />
          <a
            href="https://www.instagram.com/ormikxplore/"
            className="text-secondary font-medium"
          >
            @ormikxplore
          </a>
        </div>

        {/* Divider */}
        <hr className="w-[5%] mx-auto border-t border-black my-2" />

        {/* Bagian Bawah: Hak Cipta */}
        <p className="text-sm font-medium text-secondary">
          © ORMIK EXPLORE 2025. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
