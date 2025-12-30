/**
 * SectionTitle Component
 * 
 * A standardized title component for all portfolio sections.
 * Ensures consistent typography, spacing, and styling across the site.
 * 
 * Features:
 * - Consistent heading hierarchy (h2 for section titles)
 * - Optional subtitle support
 * - Responsive text sizing
 * - Centered alignment with proper spacing
 * - Customizable styling through className prop
 */

interface SectionTitleProps {
  /** The main section title */
  title: string;
  /** Optional subtitle/description text */
  subtitle?: string;
  /** Additional CSS classes to apply */
  className?: string;
  /** Whether to center align the text (default: true) */
  centered?: boolean;
}

export function SectionTitle({ 
  title, 
  subtitle, 
  className = "",
  centered = true
}: SectionTitleProps) {
  const alignmentClass = centered ? "text-center" : "";
  const subtitleMaxWidth = centered ? "max-w-3xl mx-auto" : "max-w-3xl";

  return (
    <div className={`mb-12 ${alignmentClass} ${className}`}>
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg text-slate-600 ${subtitleMaxWidth}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
