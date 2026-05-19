import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect, useRef, useState } from "react";

/*
  PORTFOLIO — Clean uniform grid. All images same size, evenly spaced.
  3 columns on desktop, 2 on mobile. No wide/tall variations — just a clean gallery.
*/

// TODO: A few gallery entries still rely on stand-in images for missing CDN sources
//   - church-exterior (commercial) → /images/IMG_1291.jpeg
//   - church-interior (interior)   → /images/photo7.jpg
//   - ladder-work    (residential) → /images/photo2.jpg
//   - tall-window    (residential) → /images/IMG_1293.jpeg
// Replace these when better photos are available.
const galleryImages = [
  {
    src: "/images/home-stone-bay.jpg",
    alt: "Stone-faced home with bay window and clean second-story windows in Wadsworth area",
    label: "Residential",
  },
  {
    src: "/images/IMG_1291.jpeg",
    alt: "Large arched church windows cleaned by Warner's Window Cleaning",
    label: "Commercial",
  },
  {
    src: "/images/sunroom-interior.jpg",
    alt: "Crystal-clear sunroom skylight panels looking up at trees",
    label: "Specialty",
  },
  {
    src: "/images/photo2.jpg",
    alt: "Warner's team member on ladder cleaning high residential windows",
    label: "Residential",
  },
  {
    src: "/images/home-gray-side.jpg",
    alt: "Modern gray home exterior with clean sliding-door windows and landscaped lawn",
    label: "Residential",
  },
  {
    src: "/images/storefront1.jpg",
    alt: "BA Schrock Financial Group storefront with spotless arched windows",
    label: "Commercial",
  },
  {
    src: "/images/IMG_1293.jpeg",
    alt: "Tall arched window being cleaned with ladder reaching second story",
    label: "Residential",
  },
  {
    src: "/images/home-stone-arched.jpg",
    alt: "Stone home with arched windows and clean blue sky overhead",
    label: "Residential",
  },
  {
    src: "/images/home-stone-windows.jpg",
    alt: "Floor-to-ceiling stone-home windows overlooking a lush landscaped backyard",
    label: "Residential",
  },
  {
    src: "/images/photo8.jpg",
    alt: "Crystal-clear bay windows looking out at a Wadsworth neighborhood with American flag",
    label: "Interior",
  },
  {
    src: "/images/sunroom-interior-2.jpg",
    alt: "Clean glass conservatory roof panels on a residential home",
    label: "Specialty",
  },
  {
    src: "/images/window-pair-detail.jpg",
    alt: "Streak-free two-pane window from outside with woodland reflection",
    label: "Residential",
  },
  {
    src: "/images/photo7.jpg",
    alt: "Spotless commercial building windows reflecting greenery",
    label: "Commercial",
  },
  {
    src: "/images/storefront1.jpg",
    alt: "Orrville commercial storefront with freshly cleaned windows and signage",
    label: "Commercial",
  },
  {
    src: "/images/storefront2.jpg",
    alt: "Large storefront windows cleaned to a streak-free shine",
    label: "Commercial",
  },
  {
    src: "/images/storefront3.jpg",
    alt: "Restaurant entrance with sparkling clean glass door and windows",
    label: "Commercial",
  },
  {
    src: "/images/IMG_1293.jpeg",
    alt: "Technician cleaning second-story windows from a ladder on a residential home",
    label: "Residential",
  },
  {
    src: "/images/IMG_1292.jpeg",
    alt: "Commercial storefront windows cleaned to a crystal-clear finish",
    label: "Commercial",
  },
  {
    src: "/images/IMG_1291.jpeg",
    alt: "Equipment dealership storefront with freshly cleaned display windows",
    label: "Commercial",
  },
  {
    src: "/images/IMG_1285.jpeg",
    alt: "Clean sliding glass door and window with view of wooded backyard",
    label: "Residential",
  },
  {
    src: "/images/IMG_1286.jpeg",
    alt: "Freshly cleaned patio sliding door on a gray shingled home",
    label: "Residential",
  },
  {
    src: "/images/IMG_1287.jpeg",
    alt: "Clean glass door reflecting covered porch and deck area",
    label: "Residential",
  },
  {
    src: "/images/IMG_1290.jpeg",
    alt: "Large sliding glass doors cleaned on a stone and siding home with paver patio",
    label: "Residential",
  },
];

export default function WorkGallery() {
  const { ref: headerRef } = useScrollReveal();
  const gridRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 bg-[#E8F4FD] text-[#4A90D9] text-sm font-semibold rounded-full mb-4 tracking-wide uppercase">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2D4A]">
            Our Work
          </h2>
          <p className="mt-4 text-lg text-[#333333]/80">
            Real results from homes and businesses across Wadsworth and Northeast Ohio.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
        >
          {galleryImages.map((img, i) => {
            const delay = Math.min(i * 60, 500);
            return (
              <div
                key={img.src}
                className="relative rounded-xl overflow-hidden group cursor-pointer"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.5s ${delay}ms ease-out, transform 0.5s ${delay}ms ease-out`,
                }}
              >
                {/* Fixed aspect ratio container — all images identical size */}
                <div className="aspect-[4/3] w-full">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>
                {/* Hover overlay with label */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2D4A]/60 via-[#0F2D4A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-[#4A90D9] text-white text-xs font-semibold rounded-full">
                    {img.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
