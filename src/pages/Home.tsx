/*
  DESIGN: "Clear Sky" — Modern Service Brand
  Bright, airy, optimistic. Plus Jakarta Sans headings + DM Sans body.
  Colors: Navy #1A1A1A, Sky Blue #1A5EA8, Light Blue #FFF5E6, White, Charcoal #1A1A1A
*/

import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import VideoBreak from "@/components/VideoBreak";
import BeforeAfter from "@/components/BeforeAfter";
import OurStory from "@/components/OurStory";
import WorkGallery from "@/components/WorkGallery";
import ServiceArea from "@/components/ServiceArea";
import FreeEstimate from "@/components/FreeEstimate";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import StickyEstimate from "@/components/StickyEstimate";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <Header />
      <main id="main-content">
        <Hero />
        <TrustBar />
        <Services />
        <VideoBreak />
        <BeforeAfter />
        <OurStory />
        <div id="our-work">
          <WorkGallery />
        </div>
        <ServiceArea />
        <FreeEstimate />
      </main>
      <Footer />
      {/* Bottom padding on mobile so footer content isn't hidden behind sticky CTA */}
      <div className="h-20 lg:hidden" />
      <MobileCTA />
      <StickyEstimate />
    </div>
  );
}
