import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Phone,
  Mail,
  Send,
  PanelsTopLeft,
  Building2,
  Grid2x2,
  Sun,
  MoreHorizontal,
} from "lucide-react";
import { toast } from "sonner";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FloatField, IconCard, SuccessCheck } from "@/components/FluidField";

const FORM_NAME = "estimate-request";

// Single-select icon cards. The `value` is what gets submitted to Netlify —
// kept human-readable and descriptive. Literal icons only (no decorative cliches).
const SERVICE_CARDS = [
  { value: "Exterior window cleaning", label: "Exterior Windows", icon: <PanelsTopLeft className="h-5 w-5" /> },
  { value: "Interior window cleaning", label: "Interior Windows", icon: <Building2 className="h-5 w-5" /> },
  { value: "Screen cleaning", label: "Screen Cleaning", icon: <Grid2x2 className="h-5 w-5" /> },
  { value: "Skylight cleaning", label: "Skylight Cleaning", icon: <Sun className="h-5 w-5" /> },
  { value: "Not sure yet, please advise", label: "Other / Not Sure", icon: <MoreHorizontal className="h-5 w-5" /> },
] as const;

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name"),
  phone: z.string().trim().min(7, "Please enter a valid phone number"),
  email: z.string().trim().min(1, "Email is required").email("Please enter a valid email address"),
  address: z.string().trim().min(1, "Street address is required"),
  city: z.string().trim().min(1, "City is required"),
  service: z.string().min(1, "Please pick a service so we know what you need"),
  message: z.string().trim().min(1, "Please tell us a bit about what you need"),
  "bot-field": z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");

export default function FreeEstimate() {
  const [submitted, setSubmitted] = useState(false);
  const [submittedFirstName, setSubmittedFirstName] = useState("");
  const [service, setService] = useState("");
  const { ref: leftRef } = useScrollReveal();
  const { ref: rightRef } = useScrollReveal();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const pickService = (value: string) => {
    setService(value);
    setValue("service", value, { shouldValidate: false });
    clearErrors("service");
  };

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
          city: data.city,
          service: data.service,
          message: data.message,
          "bot-field": data["bot-field"] ?? "",
        }),
      });
      if (!res.ok) throw new Error(`Submission failed (${res.status})`);
      setSubmittedFirstName((data.name.trim().split(/\s+/)[0]) || data.name.trim());
      setSubmitted(true);
      reset();
      setService("");
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
    <section id="estimate" className="py-16 md:py-24 bg-[#FFF5E6] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1A5EA8]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#1A1A1A]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left — Info */}
          <div ref={leftRef} className="min-w-0">
            <span className="inline-block px-4 py-1.5 bg-white text-[#1A5EA8] text-sm font-semibold rounded-full mb-4 tracking-wide uppercase shadow-sm">
              Contact Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A] mb-4">
              Get Your Free Estimate
            </h2>
            <p className="text-lg text-[#1A1A1A]/80 mb-8 leading-relaxed">
              Ready for streak-free windows? Fill out the form and we'll get back to you within 24 hours. Or reach out directly. We'd love to hear from you.
            </p>

            <div className="space-y-4">
              <a
                href="tel:3302031654"
                className="flex items-center gap-4 group p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 min-w-0"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] flex items-center justify-center shrink-0 group-hover:bg-[#1A5EA8] transition-colors duration-300">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-[#1A1A1A]/60 font-medium">Call or Text</p>
                  <p className="text-base sm:text-lg font-bold text-[#1A1A1A]">(330) 203-1654</p>
                </div>
              </a>

              <a
                href="mailto:info@warnerswindowcleaning.com"
                className="flex items-center gap-4 group p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 min-w-0"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] flex items-center justify-center shrink-0 group-hover:bg-[#1A5EA8] transition-colors duration-300">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0 overflow-hidden">
                  <p className="text-sm text-[#1A1A1A]/60 font-medium">Email Us</p>
                  <p className="text-sm sm:text-base font-bold text-[#1A1A1A] break-all sm:break-normal">
                    info@warnerswindowcleaning.com
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right — Form or Thank You */}
          <div ref={rightRef} className="min-w-0">
            <div className="bg-white rounded-2xl shadow-lg shadow-[#1A1A1A]/8 p-5 sm:p-6 md:p-8 border border-gray-100/80">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="mx-auto mb-5 flex justify-center">
                    <SuccessCheck />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#1A1A1A] mb-3">
                    Thank You, {submittedFirstName}!
                  </h3>
                  <p className="text-lg text-[#1A1A1A]/70 leading-relaxed mb-6">
                    We received your estimate request and will get back to you within 24 hours. If you need windows shining sooner, give us a call.
                  </p>
                  <a
                    href="tel:3302031654"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A1A1A] text-white font-semibold rounded-full hover:bg-[#164e90] transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    (330) 203-1654
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="block mx-auto mt-4 text-sm text-[#1A5EA8] hover:underline"
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

                  <FloatField
                    name="name"
                    label="Name"
                    required
                    autoComplete="name"
                    error={errors.name?.message}
                    registration={register("name")}
                  />

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    <FloatField
                      name="phone"
                      label="Phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      error={errors.phone?.message}
                      registration={register("phone")}
                    />
                    <FloatField
                      name="email"
                      label="Email"
                      type="email"
                      required
                      autoComplete="email"
                      error={errors.email?.message}
                      registration={register("email")}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    <FloatField
                      name="address"
                      label="Street Address"
                      required
                      autoComplete="street-address"
                      error={errors.address?.message}
                      registration={register("address")}
                    />
                    <FloatField
                      name="city"
                      label="City"
                      required
                      autoComplete="address-level2"
                      error={errors.city?.message}
                      registration={register("city")}
                    />
                  </div>

                  {/* Service — single-select icon cards */}
                  <div>
                    <p className="block text-sm font-semibold text-[#1A1A1A] mb-2.5">
                      What service are you interested in? <span className="text-red-500">*</span>
                    </p>
                    {/* Hidden input carries the exact value to Netlify */}
                    <input type="hidden" {...register("service")} value={service} readOnly />
                    <div
                      role="group"
                      aria-label="Select a service"
                      className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3"
                    >
                      {SERVICE_CARDS.map((card) => (
                        <IconCard
                          key={card.value}
                          label={card.label}
                          icon={card.icon}
                          active={service === card.value}
                          onSelect={() => pickService(card.value)}
                        />
                      ))}
                    </div>
                    {errors.service && (
                      <p className="mt-2 text-sm text-red-600">{errors.service.message}</p>
                    )}
                  </div>

                  <FloatField
                    name="message"
                    label="What can we help with?"
                    textarea
                    rows={4}
                    required
                    error={errors.message?.message}
                    registration={register("message")}
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#1A5EA8] text-white font-semibold rounded-full overflow-hidden hover:bg-[#164e90] transition-all disabled:opacity-60 disabled:cursor-not-allowed text-base shadow-lg shadow-[#1A5EA8]/25 hover:shadow-[#1A5EA8]/40 hover:-translate-y-0.5"
                  >
                    <span
                      aria-hidden="true"
                      className="sheen-on-hover pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/25 blur-md group-hover:[animation:sheen_0.9s_ease]"
                    />
                    <Send className="w-4 h-4 relative z-10" />
                    <span className="relative z-10">
                      {isSubmitting ? "Sending..." : "Request My Free Estimate"}
                    </span>
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
