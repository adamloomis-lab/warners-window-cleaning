import { Phone } from "lucide-react";

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_20px_rgba(15,45,74,0.1)] px-4 py-3 safe-area-bottom">
      <div className="flex gap-3">
        <a
          href="#estimate"
          className="flex-1 flex items-center justify-center px-4 py-3 bg-[#4A90D9] text-white font-medium rounded-full hover:bg-[#3a7bc8] transition-all text-sm shadow-md shadow-[#4A90D9]/25"
        >
          Get Free Estimate
        </a>
        <a
          href="tel:3302031654"
          className="flex items-center justify-center px-4 py-3 bg-[#1A1A1A] text-white font-medium rounded-full hover:bg-[#1A1A1A] transition-all text-sm shadow-md gap-2"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">Call Now</span>
        </a>
      </div>
    </div>
  );
}
