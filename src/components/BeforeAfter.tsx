/*
  DESIGN: Before & After interactive slider
  Draggable divider reveals before/after images side by side.
  Uses clip-path for reliable image rendering.
  Smooth, fluid, touch-friendly.
*/

import { useRef, useState, useCallback, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface SliderPair {
  before: string;
  after: string;
  label: string;
}

function BeforeAfterSlider({ before, after, label }: SliderPair) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(2, Math.min(98, (x / rect.width) * 100));
    setPosition(percent);
    if (!hasInteracted) setHasInteracted(true);
  }, [hasInteracted]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    updatePosition(e.touches[0].clientX);
  }, [updatePosition]);

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      updatePosition(e.clientX);
    };
    const handleTouchMove = (e: TouchEvent) => {
      updatePosition(e.touches[0].clientX);
    };
    const handleEnd = () => setIsDragging(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleEnd);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging, updatePosition]);

  return (
    <div className="flex flex-col items-center gap-3">
      <div
        ref={containerRef}
        className="relative w-full rounded-2xl overflow-hidden cursor-col-resize select-none shadow-lg shadow-[#0F2D4A]/10 group"
        style={{ aspectRatio: "4/5" }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        role="slider"
        aria-valuenow={Math.round(position)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Before and after comparison: ${label}`}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") { setPosition((p) => Math.max(2, p - 2)); setHasInteracted(true); }
          if (e.key === "ArrowRight") { setPosition((p) => Math.min(98, p + 2)); setHasInteracted(true); }
        }}
      >
        {/* After image (full background) */}
        <img
          src={after}
          alt={`${label} - After cleaning`}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* Before image (clipped) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <img
            src={before}
            alt={`${label} - Before cleaning`}
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 z-10 pointer-events-none"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        >
          <div className="w-[3px] h-full bg-white/90" style={{ boxShadow: "0 0 12px rgba(0,0,0,0.4)" }} />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center pointer-events-auto transition-transform duration-150 hover:scale-110 active:scale-95"
            style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.25)" }}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M8 5L3 11L8 17" stroke="#0F2D4A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14 5L19 11L14 17" stroke="#0F2D4A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 z-20 px-3 py-1.5 bg-[#0F2D4A]/80 backdrop-blur-sm text-white text-xs font-bold rounded-full tracking-wider uppercase pointer-events-none">
          Before
        </div>
        <div className="absolute top-4 right-4 z-20 px-3 py-1.5 bg-[#4A90D9]/80 backdrop-blur-sm text-white text-xs font-bold rounded-full tracking-wider uppercase pointer-events-none">
          After
        </div>

        {/* Drag hint */}
        {!hasInteracted && (
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 px-5 py-2.5 bg-white/95 backdrop-blur-sm rounded-full text-[#0F2D4A] text-sm font-semibold shadow-lg animate-pulse pointer-events-none">
            Drag to compare
          </div>
        )}
      </div>
      <p className="text-sm font-semibold text-[#333333]/60 text-center tracking-wide">{label}</p>
    </div>
  );
}

export default function BeforeAfter() {
  const { ref: sectionRef } = useScrollReveal();

  const pairs: SliderPair[] = [
    {
      before: "/images/before-window.jpg",
      after: "/images/after-window.jpg",
      label: "Exterior Window Cleaning",
    },
    {
      before: "/images/sunroom-exterior.jpg",
      after: "/images/sunroom-interior.jpg",
      label: "Skylight Cleaning",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-[#E8F4FD]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-[#4A90D9]/10 text-[#4A90D9] text-xs font-bold uppercase tracking-[0.15em] rounded-full mb-4">
            The Difference
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0F2D4A] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Before <span className="text-gradient">&</span> After
          </h2>
          <p className="text-lg text-[#333333]/70 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            See the Warner's difference for yourself. Drag the slider to compare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {pairs.map((pair, i) => (
            <div key={i}>
              <BeforeAfterSlider {...pair} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
