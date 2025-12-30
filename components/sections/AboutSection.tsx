/**
 * AboutSection Component
 * 
 * Displays personal information and background story.
 * Features a clean, readable layout with consistent spacing.
 * 
 * Features:
 * - Responsive grid layout
 * - Clear typography for readability
 * - Consistent spacing and alignment
 * - Professional presentation of personal story
 */

import { SectionContainer } from "@/components/common/SectionContainer";
import { SectionTitle } from "@/components/common/SectionTitle";
import { PERSONAL_INFO } from "@/data/personal-info";

export function AboutSection() {
  return (
    <SectionContainer id="about" className="bg-slate-50/50" padding="py-8">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          title="About Me" 
          subtitle="Get to know me better"
          className="mb-2 [&_h2]:mb-1"
        />
        
        {/* Enhanced content with better styling */}
        <div className="max-w-6xl mx-auto">
          <AboutContent />
        </div>
      </div>
    </SectionContainer>
  );
}

/**
 * About content with personal story and background
 */
function AboutContent() {
  return (
    <div className="relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 rounded-2xl -z-10"></div>
      
      {/* Content card */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-sm border border-white/20">
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-slate-700 leading-relaxed text-lg md:text-xl font-light tracking-wide [&]:whitespace-pre-line">
            {PERSONAL_INFO.bio.replace('part-time', 'part‑time')}
          </p>
        </div>
        
        {/* Decorative element */}
        <div className="mt-4 flex justify-center">
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
