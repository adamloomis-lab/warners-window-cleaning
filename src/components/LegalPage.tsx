import type { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Shared layout for Privacy / Terms / Accessibility pages.
// Matches Warner's brand palette (navy + sky blue + light blue).
export default function LegalPage({
  eyebrow,
  title,
  metaTitle,
  metaDescription,
  children,
}: {
  eyebrow: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>
      <Header />
      <main className="flex-1">
        {/* Page hero */}
        <section className="relative bg-[#1A1A1A] text-white pt-20 pb-12 md:pt-28 md:pb-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FA7864]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="container relative z-10">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-[#FA7864] text-sm font-semibold rounded-full mb-4 tracking-wide uppercase">
              {eyebrow}
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">{title}</h1>
          </div>
        </section>

        {/* Body */}
        <section className="bg-white">
          <div className="container py-14 md:py-20">
            <article className="legal-prose max-w-3xl text-[#1A1A1A]">{children}</article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
