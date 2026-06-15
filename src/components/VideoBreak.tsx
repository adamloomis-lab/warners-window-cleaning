/*
  DESIGN: Cinematic Video Break
  Full-width immersive video section between Services and Before/After.
  Shows the actual window cleaning process — squeegee action close-up.
  Dark overlay with a short tagline for visual impact.
  NO reveal animation — always visible for maximum impact.
*/

// TODO: This section originally used an MP4 cleaning B-roll video. Drop a video file at
// /public/images/cleaning.mp4 and swap the <img> for a <video> element to restore.
const CLEANING_IMAGE = "/images/vid1-frame.jpg";

export default function VideoBreak() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ height: "clamp(280px, 40vw, 480px)" }}
    >
      {/* Background image (was a video on the original site) */}
      <img
        src={CLEANING_IMAGE}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />

      {/* Fallback background color */}
      <div className="absolute inset-0 bg-[#1A1A1A]" style={{ zIndex: -1 }} />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/80 via-[#1A1A1A]/60 to-[#1A1A1A]/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div>
          <p className="text-white/70 text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Precision in Every Stroke
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            We Don't Cut Corners.{" "}
            <span className="text-gradient">We Clean Them.</span>
          </h2>
          <div className="mt-6 flex justify-center">
            <a
              href="#estimate"
              className="inline-flex items-center px-8 py-3.5 bg-[#4A90D9] text-white font-medium rounded-full hover:bg-[#3a7bc8] transition-all text-base shadow-xl shadow-[#4A90D9]/30 hover:shadow-[#4A90D9]/50 hover:-translate-y-0.5"
            >
              Get Your Free Estimate
            </a>
          </div>
        </div>
      </div>

      {/* Top and bottom fades for seamless blending */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white to-transparent z-[5]" />
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent z-[5]" />
    </section>
  );
}
