import { useScrollReveal } from "@/hooks/useScrollReveal";

const WADSWORTH_IMG = "/images/photo11.webp";
// TODO: ACTION_IMG would ideally be the "tech squeegeeing tall picture window" inline shot — owner to supply file
const ACTION_IMG = "/images/home-stone-windows.jpg";

export default function OurStory() {
  const { ref: imgRef } = useScrollReveal();
  const { ref: textRef } = useScrollReveal();

  return (
    <section id="about" className="py-16 md:py-24 bg-[#E8F4FD] overflow-hidden">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — Photos showcasing Wadsworth community */}
          <div ref={imgRef} className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full bg-[#4A90D9]/10 rounded-2xl -z-10 hidden md:block" />
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={WADSWORTH_IMG}
                alt="Downtown Wadsworth, Ohio — the community Warner's Window Cleaning has served since 1975"
                className="w-full h-auto object-cover aspect-[16/10]"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 w-40 h-40 sm:w-52 sm:h-52 rounded-2xl overflow-hidden shadow-2xl border-4 border-white hidden md:block">
              <img
                src={ACTION_IMG}
                alt="Warner's Window Cleaning team cleaning large vaulted windows with a beautiful landscape view"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute top-4 left-4 bg-[#0F2D4A] text-white px-4 py-2 rounded-xl shadow-lg hidden md:flex flex-col items-center">
              <span className="text-2xl font-extrabold text-[#4A90D9]">50+</span>
              <span className="text-xs font-medium tracking-wide uppercase">Years</span>
            </div>
          </div>

          {/* Right — Text */}
          <div ref={textRef}>
            <span className="inline-block px-4 py-1.5 bg-white text-[#4A90D9] text-sm font-semibold rounded-full mb-4 tracking-wide uppercase shadow-sm">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2D4A] mb-6">
              Brightening Wadsworth{" "}
              <span className="text-gradient">Since 1975</span>
            </h2>
            <div className="space-y-4 text-[#333333] text-lg leading-relaxed">
              <p>
                Warner's Window Cleaning has been brightening homes in Wadsworth since 1975 when Dennis Warner founded the company on one belief — do exceptional work and treat every customer like family.
              </p>
              <p>
                In 2024, Jeff and Justin Maurer, a father and son team, took over with deep respect for that legacy. They bring the same dedication to quality and customer care that has defined Warner's for nearly five decades.
              </p>
              <p className="font-semibold text-[#0F2D4A]">
                When you call Warner's, you're calling your neighbors.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-[2px] bg-[#4A90D9]" />
              <span className="text-[#4A90D9] font-semibold text-sm tracking-wide uppercase">
                Family Owned & Operated
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
