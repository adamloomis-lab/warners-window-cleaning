import { MapPin } from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";
import { useLocation } from "wouter";

const BG_IMG = "/images/photo5.jpg";

const areas = [
  "Wadsworth",
  "Akron",
  "Medina",
  "Fairlawn",
  "Barberton",
  "Norton",
  "Strongsville",
  "Brunswick",
  "Orrville",
];

const slugMap: Record<string, string> = {
  Wadsworth: "wadsworth-oh",
  Akron: "akron-oh",
  Medina: "medina-oh",
  Fairlawn: "fairlawn-oh",
  Barberton: "barberton-oh",
  Norton: "norton-oh",
  Strongsville: "strongsville-oh",
  Brunswick: "brunswick-oh",
  Orrville: "orrville-oh",
};

export default function ServiceArea() {
  const { ref } = useScrollReveal();
  const { ref: tagsRef } = useStaggerReveal();
  const [, setLocation] = useLocation();

  return (
    <section id="service-area" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={BG_IMG}
          alt="Wadsworth, Ohio building with clean windows"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#0F2D4A]/92" />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      </div>

      <div
        ref={ref}
        className="container text-center relative z-10"
      >
        <div className="w-16 h-16 rounded-2xl bg-[#4A90D9]/20 flex items-center justify-center mx-auto mb-6">
          <MapPin className="w-8 h-8 text-[#4A90D9]" strokeWidth={1.5} />
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
          Our Service Area
        </h2>
        <p className="text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
          Proudly serving{" "}
          <span className="font-semibold text-[#4A90D9]">
            {areas.join(", ")}
          </span>
          , and surrounding communities throughout Northeast Ohio.
        </p>
        <div ref={tagsRef} className="mt-10 flex flex-wrap justify-center gap-3">
          {areas.map((area) => (
            <a
              key={area}
              href={`/window-cleaning/${slugMap[area]}`}
              onClick={(e) => {
                e.preventDefault();
                setLocation(`/window-cleaning/${slugMap[area]}`);
              }}
              className="px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium hover:bg-[#4A90D9]/30 hover:border-[#4A90D9]/50 transition-all duration-300 cursor-pointer"
            >
              {area}, OH
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
