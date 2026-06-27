import type { ChangeEvent } from "react";

// Shared "fluid" form controls for Warner's Window Cleaning, tuned for the white
// form surface on the cream estimate section: floating-label fields (sky-blue
// underline that grows center-out + focus glow) and the animated drawn-checkmark
// for the personalized thank-you state.

const ACCENT = "#1A5EA8";

interface FloatFieldProps {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  rows?: number;
  autoComplete?: string;
  idPrefix?: string;
  error?: string;
  // react-hook-form register() spread
  registration?: Record<string, unknown>;
}

export function FloatField({
  name,
  label,
  type = "text",
  required,
  textarea,
  rows = 4,
  autoComplete,
  idPrefix = "f",
  error,
  registration = {},
}: FloatFieldProps) {
  const id = `${idPrefix}-${name}`;
  const inputBase =
    "peer w-full bg-transparent px-4 pt-6 pb-2 font-body text-[#1A1A1A] text-base placeholder-transparent outline-none";
  const labelCls =
    "pointer-events-none absolute left-4 top-4 origin-left font-body text-base text-[#6B6B6B] transition-all duration-200 " +
    "peer-focus:top-2 peer-focus:text-[10px] peer-focus:font-semibold peer-focus:uppercase peer-focus:tracking-[0.14em] peer-focus:text-[#1A5EA8] " +
    "peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.14em] peer-[:not(:placeholder-shown)]:text-[#1A5EA8]";

  const wrapCls = error
    ? "group relative rounded-2xl border border-red-400 bg-red-50/40 transition-all duration-300 focus-within:border-red-500 focus-within:bg-white"
    : "group relative rounded-2xl border border-[#E5E0D6] bg-gray-50/60 transition-all duration-300 focus-within:border-[#1A5EA8]/60 focus-within:bg-white focus-within:shadow-[0_12px_34px_-16px_rgba(26,94,168,0.6)]";

  return (
    <div>
      <div className={wrapCls}>
        {textarea ? (
          <textarea
            id={id}
            rows={rows}
            placeholder=" "
            aria-invalid={!!error}
            autoComplete={autoComplete}
            className={`${inputBase} resize-none`}
            {...registration}
          />
        ) : (
          <input
            id={id}
            type={type}
            placeholder=" "
            aria-invalid={!!error}
            autoComplete={autoComplete}
            className={inputBase}
            {...registration}
          />
        )}
        <label htmlFor={id} className={labelCls}>
          {label}
          {required && <span className="ml-1 text-[#1A5EA8]">*</span>}
        </label>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-1/2 h-0.5 w-[calc(100%-2rem)] -translate-x-1/2 scale-x-0 bg-[#1A5EA8] transition-transform duration-300 peer-focus:scale-x-100"
        />
      </div>
      {error && <p className="mt-1.5 px-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}

// Single-select icon card. Active state = brand fill; identical value carried via
// the hidden input written by the parent. Keyboard-friendly button.
interface IconCardProps {
  label: string;
  active: boolean;
  onSelect: () => void;
  icon: React.ReactNode;
}

export function IconCard({ label, active, onSelect, icon }: IconCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={active}
      className={
        "group flex flex-col items-center justify-center gap-2 rounded-2xl border px-3 py-4 text-center transition-all duration-200 " +
        (active
          ? "border-[#1A5EA8] bg-[#1A5EA8] text-white shadow-[0_10px_28px_-12px_rgba(26,94,168,0.7)] -translate-y-0.5"
          : "border-[#E5E0D6] bg-white text-[#1A1A1A] hover:border-[#1A5EA8]/50 hover:-translate-y-0.5 hover:shadow-md")
      }
    >
      <span
        className={
          "flex h-10 w-10 items-center justify-center rounded-xl transition-colors " +
          (active ? "bg-white/15 text-white" : "bg-[#FFF5E6] text-[#1A5EA8] group-hover:bg-[#1A5EA8]/10")
        }
      >
        {icon}
      </span>
      <span className="text-sm font-semibold leading-tight">{label}</span>
    </button>
  );
}

// Animated drawn checkmark for the personalized thank-you state.
export function SuccessCheck() {
  return (
    <svg viewBox="0 0 52 52" className="h-16 w-16" aria-hidden="true">
      <circle
        cx="26"
        cy="26"
        r="24"
        fill="none"
        stroke={ACCENT}
        strokeWidth="3"
        strokeDasharray="151"
        strokeDashoffset="151"
        style={{ animation: "draw-check 0.6s ease forwards" }}
      />
      <path
        d="M15 27 l7 7 l15 -16"
        fill="none"
        stroke={ACCENT}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="40"
        strokeDashoffset="40"
        style={{ animation: "draw-check 0.4s 0.5s ease forwards" }}
      />
    </svg>
  );
}
