import { Phone } from "lucide-react";

// TODO: Hero originally used an MP4 background video. Drop a video file at
// /public/images/hero.mp4 and swap the <img> below for a <video> element to restore.
const HERO_IMAGE = "/images/home-stone-arched.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[540px] md:min-h-[640px] lg:min-h-[700px] flex items-center overflow-hidden"
    >
      {/* Background image (was a video on the original site) */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/90 via-[#1A1A1A]/75 to-[#1A1A1A]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/40 to-transparent" />
      </div>

      {/* Decorative floating elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-[#FA7864]/10 rounded-full blur-3xl animate-float hidden lg:block" />
      <div className="absolute bottom-16 right-40 w-20 h-20 bg-white/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }} />

      {/* Content with staggered entrance */}
      <div className="container relative z-10 py-16 md:py-24">
        <div className="max-w-2xl hero-animate">
          <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[4rem] font-extrabold text-white leading-[1.1] tracking-tight">
            Streak-Free Windows.{" "}
            <span className="text-gradient">Guaranteed.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-lg leading-relaxed">
            Professional residential and commercial window cleaning. Family owned. Detail obsessed.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <a
              href="#estimate"
              className="btn-shimmer inline-flex items-center justify-center px-8 py-4 bg-[#FA7864] text-white font-bold rounded-lg hover:bg-[#E8634F] transition-all text-base shadow-xl shadow-[#FA7864]/30 hover:shadow-[#FA7864]/50 hover:-translate-y-0.5"
            >
              Get Your Free Estimate
            </a>
            <a
              href="tel:3302031654"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/25 text-white font-bold rounded-lg hover:bg-white/20 hover:border-white/40 transition-all text-base hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" />
              Call (330) 203-1654
            </a>
          </div>
        </div>
      </div>

      {/* Bottom edge fade for seamless transition */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FFF5E6] to-transparent" />
    </section>
  );
}
