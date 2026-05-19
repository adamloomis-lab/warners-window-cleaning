import { Phone, Facebook } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="bg-[#0F2D4A] text-white py-2.5 text-center text-sm relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F2D4A] via-[#163a5e] to-[#0F2D4A]" />
      <div className="container flex items-center justify-center gap-3 flex-wrap relative z-10">
        <span className="text-white/90">Serving Wadsworth and Northeast Ohio Since 1975</span>
        <span className="hidden sm:inline text-white/40">—</span>
        <a
          href="tel:3302031654"
          className="inline-flex items-center gap-1.5 font-semibold hover:text-[#4A90D9] transition-colors"
        >
          <Phone className="w-3.5 h-3.5" />
          Call or Text (330) 203-1654
        </a>
        <span className="hidden md:inline text-white/40">|</span>
        <a
          href="https://www.facebook.com/yourcleanwindows/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-1.5 font-medium hover:text-[#4A90D9] transition-colors text-white/80"
        >
          <Facebook className="w-3.5 h-3.5" />
          Facebook
        </a>
      </div>
    </div>
  );
}
