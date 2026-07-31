'use client';

import React, { useState, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialBar from "@/components/SocialBar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import FloatingContactButton from "@/components/FloatingContactButton";
import { siteConfig } from "@/data/mock";

import Projects from "@/components/Projects";
import OpenSource from "@/components/OpenSource";
import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Testimonials from "@/components/Testimonials";

const LoadingFallback = () => (
  <div className="py-20 flex justify-center items-center" role="status" aria-label={siteConfig.ui.common.loading}>
    <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
  </div>
);

export default function Page() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const sections = siteConfig.sections || {};

  return (
    <div className="min-h-screen">
      <Header />
      {sections.showHero && <Hero onContactClick={() => setIsContactModalOpen(true)} />}
      <SocialBar />
      
      <Suspense fallback={<LoadingFallback />}>
        {sections.showProjects && <Projects />}
        {sections.showOpenSource && <OpenSource />}
        {sections.showAbout && <About />}
        {sections.showCertifications && <Certifications />}
        {sections.showTestimonials && <Testimonials />}
      </Suspense>

      {sections.showFooter && <Footer />}
      <FloatingContactButton onClick={() => setIsContactModalOpen(true)} />
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
