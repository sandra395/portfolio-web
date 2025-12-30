/**
 * HeroSection Component
 * 
 * The main hero/landing section of the portfolio.
 * Features a clean introduction with call-to-action button.
 * 
 * Features:
 * - Large, prominent heading with name and title
 * - Smooth animations with staggered timing
 * - Call-to-action button linking to contact section
 * - Responsive typography and spacing
 * - Clean, centered layout
 */

import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/common/SectionContainer";
import { PERSONAL_INFO } from "@/data/personal-info";
import Image from "next/image";

export function HeroSection() {
  return (
    <SectionContainer 
      className="relative flex flex-col items-center justify-start text-center pt-[20vh] space-y-8 overflow-hidden"
      padding="py-16"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 -z-10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl -z-10"></div>
      
      <HeroContent />
      <HeroActions />
    </SectionContainer>
  );
}

/**
 * Hero content with name and title
 */
function HeroContent() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      
      {/* Profile Picture */}
      <div className="flex justify-center mb-8">
        <div className="relative group">
          {/* Glow effect behind image */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
          
          {/* Profile image with ring */}
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48">
            <Image
              src="/images/Profile.jpg"
              alt={PERSONAL_INFO.name}
              fill
              className="rounded-full object-cover ring-4 ring-white shadow-xl group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
        </div>
      </div>
      
      {/* Main heading with gradient text */}
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
        <span className="text-slate-900">I'm </span>
        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
          {PERSONAL_INFO.name}
        </span>
      </h1>
      
      {/* Subtitle with enhanced styling */}
      <div className="space-y-2">
        <p className="text-xl sm:text-2xl font-medium text-slate-700 max-w-2xl mx-auto">
          {PERSONAL_INFO.title}
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
      </div>
    </div>
  );
}

/**
 * Hero call-to-action buttons
 */
function HeroActions() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
      <Button 
        variant="default" 
        size="lg" 
        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        asChild
      >
        <a href="#contact" className="flex items-center gap-2">
          <span>Let's Connect</span>
          <span className="text-lg">✨</span>
        </a>
      </Button>
      
      <Button 
        variant="outline" 
        size="lg" 
        className="border-slate-300 hover:border-slate-400 bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300"
        asChild
      >
        <a href="#about" className="flex items-center gap-2">
          <span>Learn More</span>
          <span className="text-lg">👇</span>
        </a>
      </Button>
    </div>
  );
}
