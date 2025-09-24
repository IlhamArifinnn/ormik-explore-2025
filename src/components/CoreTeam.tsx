// CoreTeam.tsx
import { CORETEAM } from "../utils/constants/data";
import CoreTeamCard from "./CoreTeamCard";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const CoreTeam = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: true,
    slides: {
      perView: 3,
      spacing: 20,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1.2, spacing: 10 },
      },
      "(min-width: 769px) and (max-width: 1024px)": {
        slides: { perView: 2, spacing: 15 },
      },
    },
    created(s) {
      s.moveToIdx(5, true, { duration: 50000 }); // jalan otomatis super halus
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, { duration: 50000 });
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, { duration: 50000 });
    },
  });

  return (
    <section
      className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat p-6 lg:p-10"
      style={{ backgroundImage: "url('/assets/about/bg-about.png')" }}
    >
      <h1 className="uppercase text-4xl lg:text-5xl text-primary font-bold text-center mb-10">
        The Core Team In Here
      </h1>

      {/* Baris 1 */}
      <div ref={sliderRef} className="keen-slider mb-8">
        {CORETEAM.map((member, index) => (
          <div key={index} className="keen-slider__slide">
            <CoreTeamCard {...member} />
          </div>
        ))}
      </div>

      {/* Baris 2 → dibalik biar arah jalannya beda */}
      <div ref={sliderRef} className="keen-slider">
        {[...CORETEAM].reverse().map((member, index) => (
          <div key={index} className="keen-slider__slide">
            <CoreTeamCard {...member} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreTeam;
