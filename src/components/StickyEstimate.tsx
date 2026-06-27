import { useEffect, useState } from "react";
import { ArrowRight, CalendarCheck } from "lucide-react";

// Desktop-only floating "Free Estimate" pill, revealed once the visitor scrolls
// past the hero. A glowing, sheened brand-blue capsule that reads as premium.
export default function StickyEstimate() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("home");
      const threshold =
        hero && hero.offsetHeight > 0
          ? hero.offsetTop + hero.offsetHeight - 80
          : window.innerHeight * 0.6;
      setShow(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="/#estimate"
      className={`group fixed bottom-8 right-8 z-40 hidden items-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-br from-[#1A5EA8] to-[#164e90] px-7 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-[0_16px_44px_-8px_rgba(26,94,168,0.6)] ring-1 ring-white/15 transition-all duration-300 hover:scale-[1.04] lg:flex ${
        show
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-5 opacity-0"
      }`}
    >
      <span
        aria-hidden="true"
        className="sheen-on-hover pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/30 blur-md group-hover:[animation:sheen_1s_ease]"
      />
      <CalendarCheck size={18} className="relative z-10" />
      <span className="relative z-10">Free Estimate</span>
      <ArrowRight
        size={18}
        className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
      />
    </a>
  );
}
