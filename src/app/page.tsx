"use client";

import { useState } from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import SkillsSection from "@/components/sections/skills";
import ProjectsSection from "@/components/sections/projects";
import ExperienceSection from "@/components/sections/experience";
import EducationSection from "@/components/sections/education";
import CertificationsSection from "@/components/sections/certifications";
import ContactSection from "@/components/sections/contact";
import CustomCursor from "@/components/ui/custom-cursor";
import ScrollProgressBar from "@/components/ui/scroll-progress";
import LoadingScreen from "@/components/ui/loading-screen";
import BackToTop from "@/components/ui/back-to-top";
import CommandPalette from "@/components/ui/command-palette";

export default function Home() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  return (
    <>
      {/* Loading Screen */}
      <LoadingScreen />

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Top Scroll Indicator */}
      <ScrollProgressBar />

      {/* Navigation Header */}
      <Navbar onToggleCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Command Palette Modal */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />

      {/* Main Sections Content */}
      <main className="flex-1 relative">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      {/* Footer Content */}
      <Footer />

      {/* Scroll-to-Top Toggle Button */}
      <BackToTop />
    </>
  );
}
