import { useEffect, useState } from "react";

const STORAGE_KEY = "cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return;
    const timer = setTimeout(() => setVisible(true), 700);
    return () => clearTimeout(timer);
  }, []);

  function handleAccept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  function handleDecline() {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed bottom-3 left-3 right-3 sm:left-auto sm:right-4 sm:bottom-4 sm:max-w-sm z-50"
    >
      <div className="bg-[#1A1A1A] border border-white/10 rounded-xl shadow-2xl px-5 py-4 text-white">
        <p className="text-sm text-white/80 leading-relaxed mb-4">
          This site uses cookies to keep things running smoothly. We never sell
          your data.{" "}
          <a
            href="/privacy"
            className="text-[#1A5EA8] hover:text-white underline underline-offset-2 transition-colors whitespace-nowrap"
          >
            Privacy Policy
          </a>
        </p>
        <div className="flex gap-3">
          <button
            onClick={handleAccept}
            className="flex-1 bg-[#1A5EA8] hover:bg-[#1550a0] text-white text-sm font-semibold py-2 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#1A5EA8] focus:ring-offset-2 focus:ring-offset-[#1A1A1A]"
          >
            Sounds Good
          </button>
          <button
            onClick={handleDecline}
            className="flex-1 bg-white/10 hover:bg-white/20 text-white/80 hover:text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-[#1A1A1A]"
          >
            No Thanks
          </button>
        </div>
      </div>
    </div>
  );
}
