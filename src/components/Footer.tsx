import { MapPin, Phone, Mail, Clock, Facebook } from "lucide-react";

const LOGO_URL = "/images/warners-logo.webp";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white relative overflow-hidden">
      {/* Subtle decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FA7864]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container py-12 md:py-16 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src={LOGO_URL}
              alt="Warner's Window Cleaning logo"
              className="h-12 w-auto brightness-0 invert mb-4"
              width="160"
              height="48"
            />
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Professional window cleaning serving Wadsworth and Northeast Ohio since 1975.
            </p>
            {/* Social */}
            <a
              href="https://www.facebook.com/yourcleanwindows/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full hover:bg-[#FA7864]/30 transition-all duration-300 text-white/80 hover:text-white text-sm"
            >
              <Facebook className="w-4 h-4" />
              Follow Us on Facebook
            </a>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:3302031654" className="flex items-start gap-3 text-white/80 hover:text-[#FA7864] transition-colors text-sm">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  (330) 203-1654
                </a>
              </li>
              <li>
                <a href="mailto:info@warnerswindowcleaning.com" className="flex items-start gap-3 text-white/80 hover:text-[#FA7864] transition-colors text-sm">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  info@warnerswindowcleaning.com
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-bold text-lg mb-4">Location</h3>
            <div className="flex items-start gap-3 text-white/80 text-sm">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <address className="not-italic leading-relaxed">
                350 State Street Bldg 2B<br />
                Wadsworth, OH 44281
              </address>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-bold text-lg mb-4">Hours</h3>
            <div className="flex items-start gap-3 text-white/80 text-sm">
              <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <div className="leading-relaxed">
                <p>Monday – Friday</p>
                <p className="font-semibold text-white">8:00 AM – 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3 relative z-10">
          <p className="text-white/50 text-sm">
            &copy; 2026 Warner's Window Cleaning. All rights reserved.
          </p>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Footer navigation">
            <a href="/#home" className="text-white/50 hover:text-white text-sm transition-colors">Home</a>
            <a href="/#services" className="text-white/50 hover:text-white text-sm transition-colors">Services</a>
            <a href="/#estimate" className="text-white/50 hover:text-white text-sm transition-colors">Free Estimate</a>
            <a href="/privacy" className="text-white/50 hover:text-white text-sm transition-colors">Privacy</a>
            <a href="/terms" className="text-white/50 hover:text-white text-sm transition-colors">Terms</a>
            <a href="/accessibility" className="text-white/50 hover:text-white text-sm transition-colors">Accessibility</a>
          </nav>
        </div>
      </div>

      {/* Agency Credit */}
      <div className="border-t border-white/10">
        <div className="container py-3 flex items-center justify-center gap-2 relative z-10">
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
  );
}
