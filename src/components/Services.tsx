import { useEffect, useRef, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/*
  SERVICES — Three clean cards that slide in from the sides on scroll.
  Card 1 slides from left, Card 2 rises from below, Card 3 slides from right.
*/

const RESIDENTIAL_IMG = "/images/home-stone-windows.jpg";
const COMMERCIAL_IMG = "/images/photo3.jpg";
const SCREEN_IMG = "/images/screen-cleaning-detail.jpg";

const services = [
  {
    title: "Residential Window Cleaning",
    description:
      "Crystal-clear windows for your home. Interior and exterior cleaning up to 40 feet. We treat your home like our own.",
    image: RESIDENTIAL_IMG,
    imageAlt: "Sunroom with sparkling clean glass doors looking out at a lush green backyard",
    direction: "left" as const,
  },
  {
    title: "Commercial Window Cleaning",
    description:
      "Keep your business looking its best. Professional cleaning for storefronts, offices, and commercial buildings.",
    image: COMMERCIAL_IMG,
    imageAlt: "Clean arched windows on a downtown Wadsworth commercial building reflecting blue sky",
    direction: "bottom" as const,
  },
  {
    title: "Screen Cleaning",
    description:
      "Available as an add-on to any window cleaning service. We carefully remove, clean, and reinstall your screens.",
    image: SCREEN_IMG,
    imageAlt: "Clean residential windows on a brick home showing crystal-clear glass",
    direction: "right" as const,
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const getInitialTransform = () => {
    switch (service.direction) {
      case "left":
        return "translateX(-60px)";
      case "right":
        return "translateX(60px)";
      case "bottom":
        return "translateY(40px)";
    }
  };

  const delay = index * 150;

  return (
    <div
      ref={cardRef}
      className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#1A5EA8]/10 transition-shadow duration-500"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0, 0)" : getInitialTransform(),
        transition: `opacity 0.7s ${delay}ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.7s ${delay}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
      }}
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          src={service.image}
          alt={service.imageAlt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="p-7">
        <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
          {service.title}
        </h3>
        <p className="text-[#1A1A1A]/80 mb-6 leading-relaxed text-base">
          {service.description}
        </p>
        <a
          href="#estimate"
          className="inline-flex items-center px-6 py-2.5 bg-[#1A5EA8] text-white font-semibold rounded-full hover:bg-[#164e90] transition-all text-sm hover:-translate-y-0.5 shadow-md shadow-[#1A5EA8]/20"
        >
          Get a Quote
        </a>
      </div>
    </div>
  );
}

export default function Services() {
  const { ref: headerRef } = useScrollReveal();

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 bg-[#FFF5E6] text-[#1A5EA8] text-sm font-semibold rounded-full mb-4 tracking-wide uppercase">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A]">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-[#1A1A1A]/80">
            Professional window cleaning for homes and businesses across Northeast Ohio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
