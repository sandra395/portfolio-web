/**
 * Portfolio Homepage
 * 
 * This is the main page of the portfolio, now refactored into modular components.
 * Each section is now a separate, reusable component with its own responsibilities.
 * 
 * Benefits of this refactored approach:
 * - Easy to maintain and update individual sections
 * - Consistent styling and spacing across all sections
 * - Reusable components that can be used elsewhere
 * - Clear separation of concerns
 * - Type-safe data management
 * - Junior developer friendly structure
 */

"use client";

// Layout Components
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Section Components
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";

// Common Components
import { SectionDivider } from "@/components/common/SectionDivider";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Site Header with Navigation */}
      <Header />

      {/* Hero/Landing Section */}
      <HeroSection />

      {/* Section Divider */}
      <SectionDivider />

      {/* About Me Section */}
      <AboutSection />

      {/* Section Divider */}
      <SectionDivider />

      {/* Technology Stack Section */}
      <TechStackSection />

      {/* Section Divider */}
      <SectionDivider />

      {/* Work Experience Section */}
      <ExperienceSection />

      {/* Section Divider */}
      <SectionDivider />

      {/* Portfolio Projects Section */}
      <ProjectsSection />

      {/* Section Divider */}
      <SectionDivider />

      {/* Contact Information Section */}
      <ContactSection />

      {/* Site Footer */}
      <Footer />
    </main>
  );
}
