import { Phone } from "lucide-react";

/*
  HERO SECTION — Video background
  Video 1: Cinematic sunlight through clean window with sheer curtains
  Light/bright video → dark overlay for text contrast
*/

// TODO: Replace placeholder — original CDN ref was https://d2xsxph8kpxj0f.cloudfront.net/310519663307809653/aMdhJxAWUBqNrWQUiC9c7J/hero-video_019c29c1.mp4 (was an MP4 — fell back to static image)
const HERO_VIDEO = "/images/hero-bg.jpg";
const HERO_POSTER = "/images/home-stone-arched.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[540px] md:min-h-[640px] lg:min-h-[700px] flex items-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={HERO_POSTER}
          className="w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        {/* Multi-layer overlay for text readability over bright video */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2D4A]/90 via-[#0F2D4A]/75 to-[#0F2D4A]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2D4A]/40 to-transparent" />
      </div>

      {/* Decorative floating elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-[#4A90D9]/10 rounded-full blur-3xl animate-float hidden lg:block" />
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
              className="btn-shimmer inline-flex items-center justify-center px-8 py-4 bg-[#4A90D9] text-white font-bold rounded-lg hover:bg-[#3a7bc8] transition-all text-base shadow-xl shadow-[#4A90D9]/30 hover:shadow-[#4A90D9]/50 hover:-translate-y-0.5"
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
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#E8F4FD] to-transparent" />
    </section>
  );
}
