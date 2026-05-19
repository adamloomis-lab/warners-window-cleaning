import { useEffect } from "react";
import { useParams, useLocation } from "wouter";
import { getCityBySlug, cities } from "@/data/cityData";
import { Phone, Mail, MapPin, CheckCircle, ArrowRight, ChevronLeft } from "lucide-react";

// TODO: Replace placeholder — original CDN ref was https://d2xsxph8kpxj0f.cloudfront.net/310519663307809653/aMdhJxAWUBqNrWQUiC9c7J/warners-logo_cc629939.webp
const LOGO_URL =
  "/images/warners-logo-placeholder.svg";
const BG_IMG =
  "/images/photo5.jpg";

const services = [
  "Residential Window Cleaning",
  "Commercial Window Cleaning",
  "Interior and Exterior Windows",
  "Screen Cleaning and Repair",
  "Hard Water Stain Removal",
  "Skylight Cleaning",
  "Storm Window Cleaning",
  "Construction Cleanup",
];

export default function CityPage() {
  const params = useParams<{ slug: string }>();
  const [, setLocation] = useLocation();
  const city = getCityBySlug(params.slug ?? "");

  useEffect(() => {
    if (!city) return;
    document.title = city.metaTitle;
    // Update meta description
    let meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", city.metaDescription);
    } else {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      meta.setAttribute("content", city.metaDescription);
      document.head.appendChild(meta);
    }
    // Scroll to top on mount
    window.scrollTo(0, 0);

    return () => {
      // Restore default title on unmount
      document.title =
        "Warner's Window Cleaning | Professional Window Cleaning in Wadsworth, OH Since 1975";
    };
  }, [city]);

  if (!city) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#E8F4FD]">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#0F2D4A] mb-4">
            Page Not Found
          </h1>
          <p className="text-[#333333]/70 mb-6">
            We couldn't find the city page you're looking for.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#4A90D9] text-white font-semibold rounded-lg hover:bg-[#3a7bc8] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="container flex items-center justify-between py-3">
          <a href="/" className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
            <img
              src={LOGO_URL}
              alt="Warner's Window Cleaning logo"
              className="h-12 sm:h-14 w-auto"
              width="180"
              height="56"
            />
          </a>
          <div className="flex items-center gap-4">
            <a
              href="tel:3302031654"
              className="hidden sm:inline-flex items-center gap-2 text-[#0F2D4A] font-semibold text-sm hover:text-[#4A90D9] transition-colors"
            >
              <Phone className="w-4 h-4" />
              (330) 203-1654
            </a>
            <a
              href="/#estimate"
              className="inline-flex items-center px-5 py-2.5 bg-[#4A90D9] text-white font-semibold rounded-lg hover:bg-[#3a7bc8] transition-all text-sm shadow-md shadow-[#4A90D9]/20"
            >
              Free Estimate
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={BG_IMG}
              alt={`Window cleaning service in ${city.name}, Ohio`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0F2D4A]/88" />
          </div>
          <div className="container relative z-10 text-center">
            <a
              href="/"
              className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm mb-6 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Home
            </a>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
              {city.heroHeadline}
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed mb-8">
              {city.heroSubtext}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#estimate"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#4A90D9] text-white font-bold rounded-xl hover:bg-[#3a7bc8] transition-all shadow-lg shadow-[#4A90D9]/30 hover:-translate-y-0.5 text-base"
              >
                Get Your Free Estimate
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:3302031654"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/25 text-white font-bold rounded-xl hover:bg-white/20 transition-all text-base"
              >
                <Phone className="w-4 h-4" />
                (330) 203-1654
              </a>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 md:py-20">
          <div className="container max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2D4A] mb-6">
              Window Cleaning in {city.name}, Ohio
            </h2>
            <p className="text-lg text-[#333333]/80 leading-relaxed mb-6">
              {city.intro}
            </p>
            <p className="text-lg text-[#333333]/80 leading-relaxed mb-6">
              {city.whyUs}
            </p>
            <p className="text-base text-[#333333]/70 leading-relaxed italic">
              {city.localNote}
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 md:py-20 bg-[#E8F4FD]">
          <div className="container max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2D4A] mb-3">
              Our Services in {city.name}
            </h2>
            <p className="text-lg text-[#333333]/70 mb-8">
              We offer a full range of window cleaning services for {city.name}{" "}
              homes and businesses.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {services.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm"
                >
                  <CheckCircle className="w-5 h-5 text-[#4A90D9] flex-shrink-0" />
                  <span className="text-[#333333] font-medium text-base">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-[#0F2D4A]">
          <div className="container text-center max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              Ready for Sparkling Clean Windows in {city.name}?
            </h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Get a free, no-obligation estimate for your home or business. We
              typically respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#estimate"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#4A90D9] text-white font-bold rounded-xl hover:bg-[#3a7bc8] transition-all shadow-lg shadow-[#4A90D9]/30 hover:-translate-y-0.5 text-base"
              >
                Request Free Estimate
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:3302031654"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/25 text-white font-bold rounded-xl hover:bg-white/20 transition-all text-base"
              >
                <Phone className="w-4 h-4" />
                Call (330) 203-1654
              </a>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-12 md:py-16">
          <div className="container max-w-4xl">
            <div className="grid md:grid-cols-3 gap-4">
              <a
                href="tel:3302031654"
                className="flex items-center gap-4 p-5 bg-[#E8F4FD] rounded-xl hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0F2D4A] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-[#333333]/60 font-medium">
                    Call or Text
                  </p>
                  <p className="font-bold text-[#0F2D4A]">(330) 203-1654</p>
                </div>
              </a>
              <a
                href="mailto:info@warnerswindowcleaning.com"
                className="flex items-center gap-4 p-5 bg-[#E8F4FD] rounded-xl hover:shadow-md transition-all overflow-hidden"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0F2D4A] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-[#333333]/60 font-medium">Email</p>
                  <p className="font-bold text-[#0F2D4A] text-[11px] lg:text-sm truncate" title="info@warnerswindowcleaning.com">
                    info@warnerswindowcleaning.com
                  </p>
                </div>
              </a>
              <div className="flex items-center gap-4 p-5 bg-[#E8F4FD] rounded-xl">
                <div className="w-12 h-12 rounded-xl bg-[#0F2D4A] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-[#333333]/60 font-medium">
                    Location
                  </p>
                  <p className="font-bold text-[#0F2D4A] text-sm">
                    Wadsworth, OH 44281
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Service Areas */}
        <section className="py-12 md:py-16 bg-gray-50 border-t border-gray-100">
          <div className="container max-w-4xl text-center">
            <h3 className="text-xl font-bold text-[#0F2D4A] mb-6">
              We Also Serve
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {cities
                .filter((c) => c.slug !== city.slug)
                .map((c) => (
                  <a
                    key={c.slug}
                    href={`/window-cleaning/${c.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setLocation(`/window-cleaning/${c.slug}`);
                    }}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-[#333333] hover:border-[#4A90D9] hover:text-[#4A90D9] transition-all"
                  >
                    {c.name}, OH
                  </a>
                ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0F2D4A] text-white">
        <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            &copy; 2026 Warner's Window Cleaning. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="/"
              className="text-white/50 hover:text-white text-sm transition-colors"
            >
              Home
            </a>
            <a
              href="/#services"
              className="text-white/50 hover:text-white text-sm transition-colors"
            >
              Services
            </a>
            <a
              href="/#estimate"
              className="text-white/50 hover:text-white text-sm transition-colors"
            >
              Free Estimate
            </a>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="container py-3 flex items-center justify-center gap-2">
            <span className="text-white/40 text-xs">Website by</span>
            <a
              href="https://adamloomis.online"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-white/50 hover:text-white transition-colors"
            >
              <img
                src="/images/adam-loomis-logo.png"
                alt="Adam Loomis Marketing"
                className="h-4 w-auto brightness-0 invert opacity-50 hover:opacity-100 transition-opacity"
              />
              <span className="text-xs font-medium">adamloomis.online</span>
            </a>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 safe-area-bottom">
        <div className="flex gap-3 p-3">
          <a
            href="/#estimate"
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#4A90D9] text-white font-bold rounded-lg text-sm shadow-md"
          >
            Get Free Estimate
          </a>
          <a
            href="tel:3302031654"
            className="flex items-center justify-center gap-2 px-5 py-3 bg-[#0F2D4A] text-white font-bold rounded-lg text-sm shadow-md"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>
      </div>
      <div className="h-20 lg:hidden" />
    </div>
  );
}
