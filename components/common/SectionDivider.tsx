/**
 * SectionDivider Component
 * 
 * A beautiful divider component to separate sections in the portfolio.
 * Features gradient lines and decorative elements for visual appeal.
 * 
 * Features:
 * - Gradient line dividers
 * - Decorative dots with animations
 * - Consistent spacing and styling
 * - Responsive design
 */

export function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="flex items-center space-x-4 max-w-md w-full">
        {/* Left gradient line */}
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 to-slate-400"></div>
        
        {/* Center decorative dots */}
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        {/* Right gradient line */}
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-slate-300 to-slate-400"></div>
      </div>
    </div>
  );
}
