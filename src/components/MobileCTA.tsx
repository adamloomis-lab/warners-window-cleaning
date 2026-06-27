import { Phone, MapPin, FileText } from "lucide-react";

const MAPS_DIR =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent("350 State Street Bldg 2B, Wadsworth, OH 44281");

// Elevated floating action bar: a blurred dark capsule that stands off the edge
// with a big shadow. Glassy Call + Directions, plus a glowing brand-blue primary
// "Free Estimate" with sheen sweep on hover and active press scale.
export default function MobileCTA() {
  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-50 px-3 lg:hidden"
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      <div className="flex gap-2 rounded-2xl border border-white/10 bg-[#1A1A1A]/90 p-2 shadow-[0_14px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl">
        <a
          href="tel:3302031654"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white/10 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-all active:scale-95"
        >
          <Phone size={18} className="text-[#8fb8e0]" /> Call
        </a>
        <a
          href={MAPS_DIR}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white/10 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-all active:scale-95"
        >
          <MapPin size={18} className="text-[#8fb8e0]" /> Directions
        </a>
        <a
          href="/#estimate"
          className="group relative flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#1A5EA8] py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-[0_8px_24px_-6px_rgba(26,94,168,0.7)] animate-glow-pulse transition-all active:scale-95"
        >
          <span
            aria-hidden="true"
            className="sheen-on-hover pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/30 blur-md group-hover:[animation:sheen_0.9s_ease]"
          />
          <FileText size={17} className="relative z-10" />
          <span className="relative z-10">Estimate</span>
        </a>
      </div>
    </nav>
  );
}
