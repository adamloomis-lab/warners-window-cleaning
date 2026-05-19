import { useState, type FormEvent } from "react";
import { Phone, Mail, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { useScrollReveal } from "@/hooks/useScrollReveal";
// TODO Phase 5: replace this stubbed mutation with Netlify Forms submission
const submitMutationStub = {
  isPending: false,
  mutate: (_data: Record<string, string>) => {},
};

/*
  FREE ESTIMATE — Contact form + info cards.
  Submits via tRPC to notifyOwner for email forwarding.
  Shows personalized thank-you message on success.
*/

export default function FreeEstimate() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const { ref: leftRef } = useScrollReveal();
  const { ref: rightRef } = useScrollReveal();

  const submitMutation = submitMutationStub;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.message("Form submission is being rewired in Phase 5.");
    setSubmittedName(formData.name);
    setSubmitted(true);
    setFormData({ name: "", phone: "", email: "", address: "", message: "" });
    submitMutation.mutate(formData);
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
              {/* Phone card */}
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

              {/* Email card */}
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
                /* Personalized Thank You */
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
                /* Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#0F2D4A] mb-1.5">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#4A90D9] focus:ring-2 focus:ring-[#4A90D9]/20 outline-none transition-all text-[#333333] bg-gray-50/50 focus:bg-white text-base"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-[#0F2D4A] mb-1.5">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#4A90D9] focus:ring-2 focus:ring-[#4A90D9]/20 outline-none transition-all text-[#333333] bg-gray-50/50 focus:bg-white text-base"
                        placeholder="(330) 000-0000"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[#0F2D4A] mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#4A90D9] focus:ring-2 focus:ring-[#4A90D9]/20 outline-none transition-all text-[#333333] bg-gray-50/50 focus:bg-white text-base"
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-semibold text-[#0F2D4A] mb-1.5">
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#4A90D9] focus:ring-2 focus:ring-[#4A90D9]/20 outline-none transition-all text-[#333333] bg-gray-50/50 focus:bg-white text-base"
                      placeholder="Your street address"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[#0F2D4A] mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#4A90D9] focus:ring-2 focus:ring-[#4A90D9]/20 outline-none transition-all text-[#333333] resize-none bg-gray-50/50 focus:bg-white text-base"
                      placeholder="Tell us about your windows — how many, type of building, etc."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitMutation.isPending}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#4A90D9] text-white font-bold rounded-xl hover:bg-[#3a7bc8] transition-all disabled:opacity-60 disabled:cursor-not-allowed text-base shadow-lg shadow-[#4A90D9]/25 hover:shadow-[#4A90D9]/40 hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4" />
                    {submitMutation.isPending ? "Sending..." : "Request My Free Estimate"}
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
