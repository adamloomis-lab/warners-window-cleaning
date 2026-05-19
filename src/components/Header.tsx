import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const LOGO_URL = "/images/warners-logo.webp";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Our Work", href: "#our-work" },
  { label: "Service Area", href: "#service-area" },
  { label: "Free Estimate", href: "#estimate" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setIsOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md ${
        scrolled ? "shadow-lg shadow-[#0F2D4A]/8" : "shadow-sm"
      }`}
    >
      <div className="container flex items-center justify-between py-3">
        {/* Logo */}
        <a href="#home" className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
          <img
            src={LOGO_URL}
            alt="Warner's Window Cleaning logo"
            className="h-12 sm:h-14 w-auto"
            width="180"
            height="56"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#333333] font-medium text-[15px] hover:text-[#4A90D9] transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#4A90D9] after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#estimate"
          className="hidden lg:inline-flex items-center px-5 py-2.5 bg-[#4A90D9] text-white font-semibold rounded-lg hover:bg-[#3a7bc8] transition-all text-sm shadow-md shadow-[#4A90D9]/20 hover:shadow-lg hover:shadow-[#4A90D9]/30 hover:-translate-y-0.5"
        >
          Free Estimate
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-[#0F2D4A] hover:bg-[#E8F4FD] rounded-lg transition-colors"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav — slide down */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-gray-100 bg-white">
          <nav className="container py-4 flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="py-3 px-4 text-[#333333] font-medium hover:bg-[#E8F4FD] hover:text-[#4A90D9] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#estimate"
              onClick={handleNavClick}
              className="mt-2 mx-4 text-center py-3 bg-[#4A90D9] text-white font-semibold rounded-lg hover:bg-[#3a7bc8] transition-colors shadow-md"
            >
              Get Free Estimate
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
