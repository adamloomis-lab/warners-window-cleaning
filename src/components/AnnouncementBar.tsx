import { Phone, Facebook } from "lucide-react";
import content from "../site-content.json";

// The message text is client-editable from their Adam Loomis Marketing
// dashboard (writes src/site-content.json, redeploys). Phone + Facebook are fixed.
export default function AnnouncementBar() {
  const banner = content.banner ?? { enabled: true, message: "", link: "" };
  if (banner.enabled === false) return null;
  const message = banner.message || "Serving Wadsworth and Northeast Ohio Since 1975";

  return (
    <div className="bg-[#1A1A1A] text-white py-2.5 text-center text-sm relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#163a5e] to-[#1A1A1A]" />
      <div className="container flex items-center justify-center gap-3 flex-wrap relative z-10">
        {banner.link ? (
          <a href={banner.link} className="text-white/90 hover:text-[#1A5EA8] transition-colors">{message}</a>
        ) : (
          <span className="text-white/90">{message}</span>
        )}
        <span className="hidden sm:inline text-white/40">•</span>
        <a
          href="tel:3302031654"
          className="inline-flex items-center gap-1.5 font-semibold hover:text-[#1A5EA8] transition-colors"
        >
          <Phone className="w-3.5 h-3.5" />
          Call or Text (330) 203-1654
        </a>
        <span className="hidden md:inline text-white/40">|</span>
        <a
          href="https://www.facebook.com/yourcleanwindows/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-1.5 font-medium hover:text-[#1A5EA8] transition-colors text-white/80"
        >
          <Facebook className="w-3.5 h-3.5" />
          Facebook
        </a>
      </div>
    </div>
  );
}
