import { Award, Users, Building2, ShieldCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/*
  TRUST BAR — "Clearing Glass" Animation
  Each card is a frosted glass pane. When scrolled into view, the frost
  clears away to reveal the crisp content — like watching a window get
  cleaned right in front of you. Simple, elegant, on-brand.
*/

const trustItems = [
  {
    icon: Award,
    label: "50+",
    title: "Years in Business",
    description: "Serving since 1975",
  },
  {
    icon: Users,
    label: null,
    title: "Family Owned",
    description: "Father & son team",
  },
  {
    icon: Building2,
    label: null,
    title: "Residential & Commercial",
    description: "Homes & businesses",
  },
  {
    icon: ShieldCheck,
    label: "100%",
    title: "Satisfaction Guaranteed",
    description: "Streak-free promise",
  },
];

function useCountUp(end: number, duration: number, trigger: boolean) {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);
  useEffect(() => {
    if (!trigger || hasRun.current || end === 0) return;
    hasRun.current = true;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * end));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [end, duration, trigger]);
  return count;
}

export default function TrustBar() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const yearsCount = useCountUp(50, 2000, isVisible);
  const satisfactionCount = useCountUp(100, 2000, isVisible);

  return (
    <section className="bg-[#FFF5E6] py-14 md:py-16">
      <div className="container" ref={sectionRef}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {trustItems.map((item, i) => {
            const delay = i * 180;
            const countValue = i === 0 ? yearsCount : i === 3 ? satisfactionCount : null;

            return (
              <div
                key={item.title}
                className="relative group"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "none" : "translateY(20px)",
                  transition: `opacity 0.6s ${delay}ms ease-out, transform 0.6s ${delay}ms ease-out`,
                }}
              >
                {/* Glass card */}
                <div className="relative rounded-xl bg-white/70 backdrop-blur-sm border border-white/80 shadow-sm p-6 text-center overflow-hidden transition-shadow duration-300 hover:shadow-lg hover:shadow-[#4A90D9]/10">

                  {/* Frost overlay that fades away */}
                  <div
                    className="absolute inset-0 rounded-xl pointer-events-none z-10"
                    style={{
                      background: "linear-gradient(135deg, rgba(232,244,253,0.95) 0%, rgba(255,255,255,0.9) 50%, rgba(232,244,253,0.95) 100%)",
                      backdropFilter: "blur(8px)",
                      opacity: isVisible ? 0 : 1,
                      transition: `opacity 0.8s ${delay + 300}ms ease-out`,
                    }}
                  />

                  {/* Water streak that wipes down as frost clears */}
                  <div
                    className="absolute left-1/2 -translate-x-1/2 w-[2px] rounded-full pointer-events-none z-20"
                    style={{
                      background: "linear-gradient(to bottom, transparent, rgba(74,144,217,0.4), rgba(74,144,217,0.15), transparent)",
                      height: "120%",
                      top: isVisible ? "110%" : "-20%",
                      opacity: isVisible ? 0 : 0.8,
                      transition: `top 0.9s ${delay + 100}ms cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ${delay + 700}ms ease`,
                    }}
                  />

                  {/* Tiny water droplet that slides down after the streak */}
                  <div
                    className="absolute left-[calc(50%+6px)] w-1.5 h-1.5 rounded-full bg-[#4A90D9]/30 pointer-events-none z-20"
                    style={{
                      top: isVisible ? "105%" : "10%",
                      opacity: isVisible ? 0 : 0.6,
                      transition: `top 1.2s ${delay + 200}ms cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ${delay + 900}ms ease`,
                    }}
                  />

                  {/* Icon */}
                  <div className="relative z-[5] flex justify-center mb-3">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1A1A1A] to-[#1A1A1A] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                      <item.icon className="w-6 h-6 text-[#4A90D9]" strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Count number */}
                  {countValue !== null && (
                    <div className="relative z-[5] font-extrabold text-[#1A1A1A] text-3xl tabular-nums leading-none mb-1"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {countValue}{i === 0 ? "+" : "%"}
                    </div>
                  )}

                  {/* Title */}
                  <h3
                    className="relative z-[5] font-bold text-[#1A1A1A] text-sm sm:text-[0.9rem] leading-snug"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="relative z-[5] text-[#1A1A1A]/60 text-xs sm:text-sm mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
