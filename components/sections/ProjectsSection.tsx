/**
 * ProjectsSection Component
 * 
 * Displays portfolio projects in a responsive grid layout.
 * Each project includes image, description, technologies, and links.
 * 
 * Features:
 * - Responsive grid layout (1 column on mobile, 2 on larger screens)
 * - Project cards with hover effects
 * - Technology badges for each project
 * - Multiple link types (live demo, GitHub repos)
 * - Optimized images with proper alt text
 * - Staggered animations for visual appeal
 */

import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { SectionContainer } from "@/components/common/SectionContainer";
import { SectionTitle } from "@/components/common/SectionTitle";
import { getAllProjects } from "@/data/projects";
import { Project } from "@/types/portfolio";

export function ProjectsSection() {
  const projects = getAllProjects();

  return (
    <SectionContainer id="projects" className="bg-gradient-to-br from-green-50/30 to-slate-50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          title="Projects" 
          subtitle="A selection of my recent work showcasing my skills in front-end and full-stack development"
          className="[&_p]:whitespace-nowrap"
        />
        
        {/* Enhanced container with background decoration */}
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-100/20 via-transparent to-blue-100/20 rounded-3xl -z-10"></div>
          
          <ProjectGrid projects={projects} />
        </div>
      </div>
    </SectionContainer>
  );
}

/**
 * Grid layout for displaying project cards
 */
function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <ProjectCard 
          key={project.id} 
          project={project} 
          animationDelay={index * 200}
        />
      ))}
    </div>
  );
}

/**
 * Individual project card component
 */
function ProjectCard({ project, animationDelay }: { project: Project; animationDelay: number }) {
  return (
    <div 
      className="relative group animate-in fade-in slide-in-from-bottom-4 duration-700"
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      {/* Glass morphism card with equal height */}
      <Card className="bg-white/70 backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-2xl hover:bg-white/80 transition-all duration-300 hover:scale-[1.02] overflow-hidden h-full flex flex-col">
        <CardContent className="p-0 flex flex-col h-full">
          {/* Project Image */}
          {project.image && (
            <ProjectImage 
              src={project.image} 
              alt={project.title}
            />
          )}

          {/* Card content - flex grow to fill remaining space */}
          <div className="p-6 flex-1 flex flex-col">
            {/* Project Header */}
            <ProjectHeader title={project.title} />

            {/* Project Description - fixed height container */}
            <div className="flex-1 min-h-[120px] mb-4">
              <ProjectDescription description={project.description} />
            </div>

            {/* Technology Badges - fixed position */}
            <div className="mb-4">
              <ProjectTechnologies technologies={project.technologies} />
            </div>

            {/* Project Links - always at bottom */}
            <div className="mt-auto">
              <ProjectLinks project={project} />
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
    </div>
  );
}

/**
 * Project image component
 */
function ProjectImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative overflow-hidden bg-slate-100">
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className="w-full h-48 object-contain object-center group-hover:scale-105 transition-transform duration-300 bg-white"
        onError={(e) => {
          console.log('Image failed to load:', src);
          e.currentTarget.style.display = 'none';
        }}
      />
      {/* Subtle overlay only on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
}

/**
 * Project header with title and external link icon
 */
function ProjectHeader({ title }: { title: string }) {
  return (
    <div className="mb-2">
      <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-800 transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
        {title}
      </h3>
    </div>
  );
}

/**
 * Project description component
 */
function ProjectDescription({ description }: { description: string }) {
  return (
    <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors">
      {description}
    </p>
  );
}

/**
 * Technology badges for the project
 */
function ProjectTechnologies({ technologies }: { technologies: Project['technologies'] }) {
  const allTechnologies = Object.values(technologies).flat();

  return (
    <div className="flex flex-wrap gap-2">
      {allTechnologies.map((tech, index) => (
        <span
          key={tech}
          className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-green-50 to-blue-50 text-slate-700 rounded-full border border-green-200/50 hover:from-green-100 hover:to-blue-100 hover:border-green-300/50 hover:shadow-sm transition-all duration-200 hover:scale-105"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

/**
 * Project links (live demo, GitHub repositories)
 */
function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-4 mt-4">
      {/* Live Demo Link */}
      {project.link && (
        <ProjectLink
          href={project.link}
          label="View Live"
          variant="primary"
        />
      )}

      {/* GitHub Links - Multiple repos */}
      {project.githubLinks?.frontend && (
        <ProjectLink
          href={project.githubLinks.frontend}
          label="GitHub Frontend"
          variant="secondary"
        />
      )}

      {project.githubLinks?.backend && (
        <ProjectLink
          href={project.githubLinks.backend}
          label="GitHub Backend"
          variant="secondary"
        />
      )}

      {/* GitHub Link - Single repo */}
      {!project.githubLinks && project.githubLink && (
        <ProjectLink
          href={project.githubLink}
          label="GitHub"
          variant="secondary"
        />
      )}
    </div>
  );
}

/**
 * Individual project link component
 */
function ProjectLink({ 
  href, 
  label, 
  variant 
}: { 
  href: string; 
  label: string; 
  variant: 'primary' | 'secondary' 
}) {
  const baseClasses = "px-5 py-2 font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg";
  const variantClasses = variant === 'primary' 
    ? "bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 shadow-green-200"
    : "bg-gradient-to-r from-slate-700 to-slate-800 text-white hover:from-slate-800 hover:to-slate-900 shadow-slate-200";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variantClasses}`}
    >
      {label}
    </a>
  );
}
