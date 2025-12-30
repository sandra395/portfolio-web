/**
 * ExperienceSection Component
 * 
 * Displays work experience entries in a clean, readable format.
 * Each experience includes role details, responsibilities, and skills used.
 * 
 * Features:
 * - Clean card-based layout for each experience
 * - Responsive design with proper spacing
 * - Skills displayed as badges
 * - Professional presentation of work history
 * - Easy to extend with additional experiences
 */

import { SectionContainer } from "@/components/common/SectionContainer";
import { SectionTitle } from "@/components/common/SectionTitle";
import { getAllExperiences } from "@/data/experiences";
import { Experience } from "@/types/portfolio";

export function ExperienceSection() {
  const experiences = getAllExperiences();

  return (
    <SectionContainer id="experience" className="bg-gradient-to-br from-purple-50/30 to-slate-50">
      <div className="max-w-5xl mx-auto">
        <SectionTitle 
          title="Experience" 
          subtitle="Building skills and contributing to the tech community"
        />
        
        {/* Enhanced container with background decoration */}
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 via-transparent to-blue-100/20 rounded-3xl -z-10"></div>
          
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <ExperienceCard 
                key={experience.id} 
                experience={experience} 
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

/**
 * Individual experience card component
 */
function ExperienceCard({ experience, index }: { experience: Experience; index: number }) {
  return (
    <div 
      className="relative group animate-in fade-in slide-in-from-bottom-4 duration-700"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {/* Card background with glass morphism */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-sm border border-white/30 hover:shadow-lg hover:bg-white/80 transition-all duration-300 group-hover:scale-[1.02]">
        {/* Experience header with title, company, and period */}
        <ExperienceHeader experience={experience} />
        
        {/* Experience description/responsibilities */}
        <ExperienceDescription description={experience.description} />
        
        {/* Skills used in this role */}
        <ExperienceSkills skills={experience.skills} />
        
        {/* Decorative gradient line */}
        <div className="mt-6 w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-60"></div>
      </div>
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
    </div>
  );
}

/**
 * Experience header with title, company, and time period
 */
function ExperienceHeader({ experience }: { experience: Experience }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-4">
      <div className="flex-1">
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 group-hover:text-slate-800 transition-colors">
          {experience.title}
        </h3>
        <p className="text-lg font-medium text-slate-700 group-hover:text-slate-600 transition-colors">
          {experience.company}
        </p>
      </div>
      <div className="bg-gradient-to-r from-purple-100 to-blue-100 px-4 py-2 rounded-full border border-purple-200/50">
        <span className="text-sm font-medium text-slate-700 whitespace-nowrap">
          {experience.period}
        </span>
      </div>
    </div>
  );
}

/**
 * Experience description with bullet points
 */
function ExperienceDescription({ description }: { description: string[] }) {
  return (
    <div className="mb-8">
      <ul className="space-y-3">
        {description.map((point, i) => (
          <li key={i} className="flex items-start gap-3 text-slate-700 text-base sm:text-lg leading-relaxed">
            <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2.5 flex-shrink-0"></div>
            <span className="group-hover:text-slate-600 transition-colors">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Skills badges for technologies used in the role
 */
function ExperienceSkills({ skills }: { skills: string[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <span
          key={skill}
          className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-purple-50 to-blue-50 text-slate-700 rounded-full border border-purple-200/50 hover:from-purple-100 hover:to-blue-100 hover:border-purple-300/50 hover:shadow-sm transition-all duration-200 hover:scale-105"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {skill}
        </span>
      ))}
    </div>
  );
}
