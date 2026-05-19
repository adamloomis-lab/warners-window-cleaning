import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FORM_NAME = "estimate-request";

const SERVICE_OPTIONS = [
  "Exterior window cleaning",
  "Interior window cleaning",
  "Exterior + interior window cleaning",
  "Screen cleaning",
  "Skylight cleaning",
  "Multiple services (describe below)",
  "Not sure yet — please advise",
] as const;

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name"),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number"),
  email: z.string().trim().min(1, "Email is required").email("Please enter a valid email address"),
  address: z.string().trim().min(1, "Street address is required"),
  service: z
    .string()
    .min(1, "Please pick a service so we know what you need"),
  message: z.string().trim().min(1, "Please tell us a bit about what you need"),
  "bot-field": z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#4A90D9] focus:ring-2 focus:ring-[#4A90D9]/20 outline-none transition-all text-[#333333] bg-gray-50/50 focus:bg-white text-base";
const inputErrorClass =
  "w-full px-4 py-3 rounded-xl border border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all text-[#333333] bg-red-50/40 focus:bg-white text-base";

export default function FreeEstimate() {
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const { ref: leftRef } = useScrollReveal();
  const { ref: rightRef } = useScrollReveal();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = async (data: FormValues) => {
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": FORM_NAME,
          name: data.name,
          phone: data.phone,
          email: data.email,
          address: data.address,
          service: data.service,
          message: data.message,
          "bot-field": data["bot-field"] ?? "",
        }),
      });
      if (!res.ok) throw new Error(`Submission failed (${res.status})`);
      setSubmittedName(data.name);
      setSubmitted(true);
      reset();
      toast.success("Your estimate request was sent. We'll be in touch within 24 hours.");
    } catch (err) {
      toast.error(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or call us directly.",
      );
    }
  };

  return (
    <section id="estimate" className="py-16 md:py-24 bg-[#E8F4FD] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#4A90D9]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#0F2D4A]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left — Info */}
          <div ref={leftRef} className="min-w-0">
            <span className="inline-block px-4 py-1.5 bg-white text-[#4A90D9] text-sm font-semibold rounded-full mb-4 tracking-wide uppercase shadow-sm">
              Contact Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2D4A] mb-4">
              Get Your Free Estimate
            </h2>
            <p className="text-lg text-[#333333]/80 mb-8 leading-relaxed">
              Ready for streak-free windows? Fill out the form and we'll get back to you within 24 hours. Or reach out directly — we'd love to hear from you.
            </p>

            <div className="space-y-4">
              <a
                href="tel:3302031654"
                className="flex items-center gap-4 group p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 min-w-0"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0F2D4A] flex items-center justify-center shrink-0 group-hover:bg-[#4A90D9] transition-colors duration-300">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-[#333333]/60 font-medium">Call or Text</p>
                  <p className="text-base sm:text-lg font-bold text-[#0F2D4A]">(330) 203-1654</p>
                </div>
              </a>

              <a
                href="mailto:info@warnerswindowcleaning.com"
                className="flex items-center gap-4 group p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 min-w-0"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0F2D4A] flex items-center justify-center shrink-0 group-hover:bg-[#4A90D9] transition-colors duration-300">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0 overflow-hidden">
                  <p className="text-sm text-[#333333]/60 font-medium">Email Us</p>
                  <p className="text-sm sm:text-base font-bold text-[#0F2D4A] break-all sm:break-normal">
                    info@warnerswindowcleaning.com
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right — Form or Thank You */}
          <div ref={rightRef} className="min-w-0">
            <div className="bg-white rounded-2xl shadow-lg shadow-[#0F2D4A]/8 p-5 sm:p-6 md:p-8 border border-gray-100/80">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#0F2D4A] mb-3">
                    Thank You, {submittedName}!
                  </h3>
                  <p className="text-lg text-[#333333]/70 leading-relaxed mb-6">
                    We received your estimate request and will get back to you within 24 hours. If you need immediate assistance, give us a call.
                  </p>
                  <a
                    href="tel:3302031654"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#0F2D4A] text-white font-semibold rounded-xl hover:bg-[#1a3d5c] transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    (330) 203-1654
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="block mx-auto mt-4 text-sm text-[#4A90D9] hover:underline"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form
                  name={FORM_NAME}
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-5"
                  noValidate
                >
                  {/* Netlify Forms identifier */}
                  <input type="hidden" name="form-name" value={FORM_NAME} />
                  {/* Honeypot — hidden from real users */}
                  <p className="hidden">
                    <label>
                      Don't fill this out: <input {...register("bot-field")} />
                    </label>
                  </p>

                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#0F2D4A] mb-1.5">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your full name"
                      aria-invalid={!!errors.name}
                      className={errors.name ? inputErrorClass : inputClass}
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-[#0F2D4A] mb-1.5">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="(330) 000-0000"
                        aria-invalid={!!errors.phone}
                        className={errors.phone ? inputErrorClass : inputClass}
                        {...register("phone")}
                      />
                      {errors.phone && (
                        <p className="mt-1.5 text-sm text-red-600">{errors.phone.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[#0F2D4A] mb-1.5">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@email.com"
                        aria-invalid={!!errors.email}
                        className={errors.email ? inputErrorClass : inputClass}
                        {...register("email")}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-semibold text-[#0F2D4A] mb-1.5">
                      Street Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="address"
                      type="text"
                      autoComplete="street-address"
                      placeholder="Your street address"
                      aria-invalid={!!errors.address}
                      className={errors.address ? inputErrorClass : inputClass}
                      {...register("address")}
                    />
                    {errors.address && (
                      <p className="mt-1.5 text-sm text-red-600">{errors.address.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-[#0F2D4A] mb-1.5">
                      What service are you interested in? <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      defaultValue=""
                      aria-invalid={!!errors.service}
                      className={`${errors.service ? inputErrorClass : inputClass} appearance-none bg-no-repeat bg-[right_1rem_center] pr-10`}
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='8' viewBox='0 0 14 8'%3E%3Cpath fill='none' stroke='%230F2D4A' stroke-width='2' d='M1 1l6 6 6-6'/%3E%3C/svg%3E\")",
                      }}
                      {...register("service")}
                    >
                      <option value="" disabled>
                        Select a service…
                      </option>
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="mt-1.5 text-sm text-red-600">{errors.service.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[#0F2D4A] mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about what services you are interested in exterior and/or interior window cleaning, screen cleaning, skylights, etc."
                      aria-invalid={!!errors.message}
                      className={`${errors.message ? inputErrorClass : inputClass} resize-none`}
                      {...register("message")}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-sm text-red-600">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#4A90D9] text-white font-bold rounded-xl hover:bg-[#3a7bc8] transition-all disabled:opacity-60 disabled:cursor-not-allowed text-base shadow-lg shadow-[#4A90D9]/25 hover:shadow-[#4A90D9]/40 hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4" />
                    {isSubmitting ? "Sending..." : "Request My Free Estimate"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
