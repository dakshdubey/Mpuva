import React from "react";
import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import ImpactSection from "@/components/ImpactSection";
import StatsSection from "@/components/StatsSection";
import QuoteSection from "@/components/QuoteSection";
import ConstitutionSection from "@/components/ConstitutionSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      {/* 1. Cinematic Entry Banner */}
      <Hero />

      {/* 2. Visual Story Origin Teaser */}
      <StorySection view="about" />

      {/* 3. Visual Saffron Impact Campaigns */}
      <ImpactSection />

      {/* 4. On-Ground Verified Impact Stats */}
      <StatsSection />

      {/* 5. Immersive Mantra Quote Block */}
      <QuoteSection />

      {/* 6. Official Constitution & Regulatory Bylaws */}
      <ConstitutionSection />

      {/* 7. Photo Collage Masonry Memoirs */}
      <GallerySection />

      {/* 8. Contact Coordinates & Form */}
      <ContactSection />
    </>
  );
}
