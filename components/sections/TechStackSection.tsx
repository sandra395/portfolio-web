/**
 * TechStackSection Component
 * 
 * Displays all technologies and tools in an organized grid layout.
 * Features hover effects, animations, and responsive design.
 * 
 * Features:
 * - Responsive grid layout that adapts to screen size
 * - Staggered animations for visual appeal
 * - Hover effects on individual tech cards
 * - Clean, organized presentation
 * - Reusable TechCard components
 */

import { SectionContainer } from "@/components/common/SectionContainer";
import { SectionTitle } from "@/components/common/SectionTitle";
import { TechCard } from "@/components/common/TechCard";
import { getAllTechnologies } from "@/data/tech-stack";

export function TechStackSection() {
  const technologies = getAllTechnologies();

  return (
    <SectionContainer id="tech-stack" className="bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          title="Tech Stack" 
        />
        
        {/* Enhanced grid with better container */}
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-transparent to-purple-100/20 rounded-3xl -z-10"></div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-sm border border-white/20">
            <TechGrid technologies={technologies} />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

/**
 * Grid layout for displaying technology cards
 */
function TechGrid({ technologies }: { technologies: ReturnType<typeof getAllTechnologies> }) {
  return (
    <div className="space-y-8">
      {/* Main tech grid */}
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-6">
        {technologies.map((tech, index) => (
          <div
            key={tech.name}
            className="group relative"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Enhanced tech card with better styling */}
            <TechCard 
              tech={tech} 
              animationDelay={index * 100}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/40 hover:shadow-lg hover:scale-105 transition-all duration-300 group-hover:bg-white/90"
            />
          </div>
        ))}
      </div>
      
      {/* Decorative elements */}
      <div className="flex justify-center pt-4">
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </div>
  );
}
