import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Phone, MapPin, Clock, ArrowRight, Facebook } from "lucide-react";

const LOGO_URL = "/images/warners-logo.webp";
const FACEBOOK_URL = "https://www.facebook.com/yourcleanwindows/";

export interface MobileMenuProps {
  readonly open: boolean;
  readonly shown: boolean;
  readonly onClose: () => void;
  readonly navLinks: ReadonlyArray<{ label: string; href: string }>;
}

// Full-screen, high-trust mobile navigation. Blurred dark backdrop + right
// slide-in panel with a brand glow, staggered uppercase links, prominent
// contact CTAs, and a contact footer.
export default function MobileMenu({ open, shown, onClose, navLinks }: MobileMenuProps) {
  // Esc to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="lg:hidden fixed inset-0 z-[60]"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className={`absolute inset-0 bg-black/55 backdrop-blur-sm transition-opacity duration-300 ${
          shown ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Panel */}
      <div
        className={`relative ml-auto h-full w-full max-w-sm bg-[#141414] text-white overflow-y-auto shadow-[0_0_80px_rgba(26,94,168,0.35)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          shown ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative flex flex-col min-h-full px-7 pt-6 pb-10">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5">
              <img src={LOGO_URL} alt="Warner's Window Cleaning" className="h-9 w-auto" />
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <span className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-[#1A5EA8] px-3 py-1.5 text-xs uppercase tracking-[0.14em] font-bold text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse-soft" />
            Streak-Free Guarantee
          </span>

          <nav className="mt-6 flex flex-col" aria-label="Mobile navigation">
            {navLinks.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={onClose}
                className={`group flex items-center justify-between border-b border-white/10 py-4 font-display text-2xl uppercase text-white/90 transition-transform duration-500 motion-reduce:transition-none hover:text-[#8fb8e0] ${
                  shown ? "translate-x-0" : "translate-x-6"
                }`}
                style={{ transitionDelay: `${120 + i * 70}ms` }}
              >
                {l.label}
                <ArrowRight
                  size={20}
                  className="text-white/30 group-hover:text-[#8fb8e0] group-hover:translate-x-1 transition-all"
                />
              </a>
            ))}
          </nav>

          <div
            className={`mt-8 flex flex-col gap-3 transition-transform duration-500 motion-reduce:transition-none ${
              shown ? "translate-y-0" : "translate-y-4"
            }`}
            style={{ transitionDelay: `${120 + navLinks.length * 70 + 60}ms` }}
          >
            <a
              href="tel:3302031654"
              className="flex items-center justify-center gap-2 rounded-lg bg-[#1A5EA8] px-6 py-4 text-sm uppercase tracking-widest font-bold text-white shadow-[0_8px_24px_-6px_rgba(26,94,168,0.7)]"
            >
              <Phone size={18} /> Call (330) 203-1654
            </a>
            <a
              href="/#estimate"
              onClick={onClose}
              className="flex items-center justify-center gap-2 rounded-lg border-2 border-white/80 px-6 py-4 text-sm uppercase tracking-widest font-semibold text-white hover:bg-white hover:text-[#1A1A1A] transition-colors"
            >
              Free Estimate
            </a>
          </div>

          <div className="mt-auto pt-10 space-y-3 text-white/70 text-sm">
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-[#8fb8e0] shrink-0" /> Serving Wadsworth & NE Ohio
            </div>
            <p className="flex items-center gap-3">
              <Clock size={18} className="text-[#8fb8e0] shrink-0" /> Mon to Fri, 8:00 AM - 5:00 PM
            </p>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-white"
            >
              <Facebook size={18} className="text-[#8fb8e0] shrink-0" /> Warner's on Facebook
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
