/**
 * SectionContainer Component
 * 
 * A reusable container component that ensures uniform width and spacing across all sections.
 * This component is the foundation for maintaining consistent layout throughout the portfolio.
 * 
 * Features:
 * - Consistent max-width and padding across all screen sizes
 * - Optional full-width mode for sections that need to break out
 * - Built-in scroll margin for smooth navigation
 * - Customizable styling through className prop
 */

import { ReactNode } from 'react';

interface SectionContainerProps {
  /** The content to be wrapped in the container */
  children: ReactNode;
  /** Additional CSS classes to apply */
  className?: string;
  /** HTML id for navigation anchors */
  id?: string;
  /** Whether the section should take full width (breaks out of container) */
  fullWidth?: boolean;
  /** Custom padding override (defaults to py-20) */
  padding?: string;
}

export function SectionContainer({ 
  children, 
  className = "", 
  id, 
  fullWidth = false,
  padding = "py-12"
}: SectionContainerProps) {
  const baseClasses = `scroll-mt-16 ${padding}`;
  const containerClasses = fullWidth 
    ? "w-full" 
    : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

  return (
    <section 
      id={id} 
      className={`${baseClasses} ${containerClasses} ${className}`}
    >
      {children}
    </section>
  );
}
