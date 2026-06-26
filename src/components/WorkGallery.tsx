import { useScrollReveal } from "@/hooks/useScrollReveal";
import SocialCards, { type CardItem } from "@/components/ui/card-fan-carousel";

/*
  PORTFOLIO — Fan-card carousel of hero shots.
  Order matters: with centerIndex=3, the 4th entry (action-squeegee-2)
  sits at the center slot of the initial fan.
*/
const galleryImages = [
  {
    src: "/images/home-craftsman-gray.jpg",
    alt: "Premium craftsman gray home with manicured landscaping and clean windows",
    label: "Residential",
  },
  {
    src: "/images/home-tan-arched-window.jpg",
    alt: "Large arched picture window on a tan two-story home, freshly cleaned",
    label: "Residential",
  },
  {
    src: "/images/warners-truck-on-site.jpg",
    alt: "Warner's Window Cleaning truck in a customer's driveway, ready to work",
    label: "On the Job",
  },
  {
    src: "/images/action-squeegee-2.jpg",
    alt: "Warner's technician squeegeeing a large window from outside",
    label: "On the Job",
  },
  {
    src: "/images/home-stone-arched.jpg",
    alt: "Stone home with arched windows and clean blue sky overhead",
    label: "Residential",
  },
  {
    src: "/images/commercial-anchor-heating.jpg",
    alt: "Anchor Heating storefront windows cleaned by Warner's Window Cleaning",
    label: "Commercial",
  },
  {
    src: "/images/home-foyer-glass.jpg",
    alt: "Two-story floor-to-ceiling entry glass looking out to landscaped grounds",
    label: "Specialty",
  },
  {
    src: "/images/home-victorian-porch.jpg",
    alt: "Victorian-style home with wraparound porch and clean windows in Wadsworth area",
    label: "Residential",
  },
  {
    src: "/images/action-squeegee-1.jpg",
    alt: "Close-up of Warner's technician cleaning a large picture window",
    label: "On the Job",
  },
  {
    src: "/images/home-blue-twostory.jpg",
    alt: "Blue and gray two-story home with bay window, freshly cleaned",
    label: "Residential",
  },
  {
    src: "/images/home-modern-twostory.jpg",
    alt: "Modern two-story home with porch and gazebo, freshly cleaned windows",
    label: "Residential",
  },
  {
    src: "/images/home-ranch-porch.jpg",
    alt: "Dark gray ranch home with wraparound porch and hanging flower baskets",
    label: "Residential",
  },
  {
    src: "/images/home-stone-windows.jpg",
    alt: "Floor-to-ceiling stone-home windows overlooking a lush landscaped backyard",
    label: "Residential",
  },
  {
    src: "/images/residential-on-site-ladder.jpg",
    alt: "Stone-faced home window with Warner's ladder visible inside, ready to work",
    label: "On the Job",
  },
];


export default function WorkGallery() {
  const { ref: headerRef } = useScrollReveal();
  const fanCards: CardItem[] = galleryImages.map((img) => ({
    imgUrl: img.src,
    alt: img.alt,
  }));

  return (
    <section id="our-work" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container">
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block px-4 py-1.5 bg-[#FFF5E6] text-[#1A5EA8] text-sm font-semibold rounded-full mb-4 tracking-wide uppercase">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A]">
            Our Work
          </h2>
          <p className="mt-4 text-lg text-[#1A1A1A]/80">
            Real results from homes and businesses across Wadsworth and Northeast Ohio.
          </p>
        </div>

        <SocialCards cards={fanCards} />
      </div>
    </section>
  );
}
