/**
 * TechCard Component
 * 
 * A reusable card component for displaying individual technologies in the tech stack.
 * Features hover effects, animations, and consistent styling.
 * 
 * Features:
 * - Hover animations and scaling effects
 * - Staggered animation delays for grid displays
 * - Icon display with fallback
 * - Consistent card styling using shadcn/ui components
 */

import { Card, CardContent } from "@/components/ui/card";
import { TechIcons } from "@/components/tech-icons";
import { TechStack } from "@/types/portfolio";

interface TechCardProps {
  /** Technology data object */
  tech: TechStack;
  /** Animation delay in milliseconds for staggered animations */
  animationDelay?: number;
  /** Additional CSS classes */
  className?: string;
}

export function TechCard({ tech, animationDelay = 0, className = "" }: TechCardProps) {
  // Get the icon component from TechIcons, with fallback
  const IconComponent = TechIcons[tech.icon as keyof typeof TechIcons];

  return (
    <Card
      className={`
        group hover:shadow-lg transition-all duration-300 hover:scale-105 
        animate-in fade-in slide-in-from-bottom-4
        ${className}
      `}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <CardContent className="p-6 flex flex-col items-center justify-between h-full">
        {/* Technology Icon - Centered at top */}
        <div className="flex justify-center group-hover:scale-110 transition-transform duration-300 mb-3">
          {IconComponent ? (
            IconComponent()
          ) : (
            <div className="w-8 h-8 bg-slate-200 rounded flex items-center justify-center">
              <span className="text-xs text-slate-500">?</span>
            </div>
          )}
        </div>
        
        {/* Technology Name */}
        <span className="text-xs font-medium text-center text-slate-700">
          {tech.name}
        </span>
      </CardContent>
    </Card>
  );
}
