import { useEffect } from "react";
import { useParams, useLocation } from "wouter";
import { Helmet } from "react-helmet-async";
import { getCityBySlug, cities } from "@/data/cityData";
import { Phone, Mail, MapPin, CheckCircle, ArrowRight, ChevronLeft } from "lucide-react";

const SITE_URL = "https://www.warnerswindowcleaning.com";

const LOGO_URL = "/images/warners-logo.webp";
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
      <div className="min-h-screen flex items-center justify-center bg-[#FFF5E6]">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#1A1A1A] mb-4">
            Page Not Found
          </h1>
          <p className="text-[#1A1A1A]/70 mb-6">
            We couldn't find the city page you're looking for.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A5EA8] text-white font-semibold rounded-full hover:bg-[#164e90] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Warner's Window Cleaning",
    description: city.metaDescription,
    image: `${SITE_URL}/images/warners-logo.webp`,
    telephone: "+1-330-203-1654",
    email: "info@warnerswindowcleaning.com",
    url: `${SITE_URL}/window-cleaning/${city.slug}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "350 State Street Bldg 2B",
      addressLocality: "Wadsworth",
      addressRegion: "OH",
      postalCode: "44281",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: city.name,
      address: {
        "@type": "PostalAddress",
        addressLocality: city.name,
        addressRegion: "OH",
        postalCode: city.zip,
        addressCountry: "US",
      },
    },
    priceRange: "$$",
    foundingDate: "1975",
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Helmet>
        <title>{city.metaTitle}</title>
        <meta name="description" content={city.metaDescription} />
        <link rel="canonical" href={`${SITE_URL}/window-cleaning/${city.slug}`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
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
              className="hidden sm:inline-flex items-center gap-2 text-[#1A1A1A] font-semibold text-sm hover:text-[#1A5EA8] transition-colors"
            >
              <Phone className="w-4 h-4" />
              (330) 203-1654
            </a>
            <a
              href="/#estimate"
              className="inline-flex items-center px-5 py-2.5 bg-[#1A5EA8] text-white font-semibold rounded-full hover:bg-[#164e90] transition-all text-sm shadow-md shadow-[#1A5EA8]/20"
            >
              Free Estimate
            </a>
          </div>
        </div>
      </header>

      <main id="main-content">
        {/* Hero */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={BG_IMG}
              alt={`Window cleaning service in ${city.name}, Ohio`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#1A1A1A]/88" />
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
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1A5EA8] text-white font-medium rounded-full hover:bg-[#164e90] transition-all shadow-lg shadow-[#1A5EA8]/30 hover:-translate-y-0.5 text-base"
              >
                Get Your Free Estimate
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:3302031654"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/25 text-white font-medium rounded-full hover:bg-white/20 transition-all text-base"
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A] mb-6">
              Window Cleaning in {city.name}, Ohio
            </h2>
            <p className="text-lg text-[#1A1A1A]/80 leading-relaxed mb-6">
              {city.intro}
            </p>
            <p className="text-lg text-[#1A1A1A]/80 leading-relaxed mb-6">
              {city.whyUs}
            </p>
            <p className="text-base text-[#1A1A1A]/70 leading-relaxed italic">
              {city.localNote}
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 md:py-20 bg-[#FFF5E6]">
          <div className="container max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A] mb-3">
              Our Services in {city.name}
            </h2>
            <p className="text-lg text-[#1A1A1A]/70 mb-8">
              We offer a full range of window cleaning services for {city.name}{" "}
              homes and businesses.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {services.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm"
                >
                  <CheckCircle className="w-5 h-5 text-[#1A5EA8] flex-shrink-0" />
                  <span className="text-[#1A1A1A] font-medium text-base">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-[#1A1A1A]">
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
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1A5EA8] text-white font-medium rounded-full hover:bg-[#164e90] transition-all shadow-lg shadow-[#1A5EA8]/30 hover:-translate-y-0.5 text-base"
              >
                Request Free Estimate
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:3302031654"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/25 text-white font-medium rounded-full hover:bg-white/20 transition-all text-base"
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
                className="flex items-center gap-4 p-5 bg-[#FFF5E6] rounded-xl hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-[#1A1A1A]/60 font-medium">
                    Call or Text
                  </p>
                  <p className="font-bold text-[#1A1A1A]">(330) 203-1654</p>
                </div>
              </a>
              <a
                href="mailto:info@warnerswindowcleaning.com"
                className="flex items-center gap-4 p-5 bg-[#FFF5E6] rounded-xl hover:shadow-md transition-all overflow-hidden"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-[#1A1A1A]/60 font-medium">Email</p>
                  <p className="font-bold text-[#1A1A1A] text-[11px] lg:text-sm truncate" title="info@warnerswindowcleaning.com">
                    info@warnerswindowcleaning.com
                  </p>
                </div>
              </a>
              <div className="flex items-center gap-4 p-5 bg-[#FFF5E6] rounded-xl">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-[#1A1A1A]/60 font-medium">
                    Location
                  </p>
                  <p className="font-bold text-[#1A1A1A] text-sm">
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
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-6">
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
                    className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-[#1A1A1A] hover:border-[#1A5EA8] hover:text-[#1A5EA8] transition-all"
                  >
                    {c.name}, OH
                  </a>
                ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white">
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
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#1A5EA8] text-white font-bold rounded-lg text-sm shadow-md"
          >
            Get Free Estimate
          </a>
          <a
            href="tel:3302031654"
            className="flex items-center justify-center gap-2 px-5 py-3 bg-[#1A1A1A] text-white font-medium rounded-full text-sm shadow-md"
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
