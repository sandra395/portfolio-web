/**
 * Navigation Component
 * 
 * The main navigation menu for the portfolio.
 * Provides smooth scrolling to different sections and responsive design.
 * 
 * Features:
 * - Smooth scroll navigation to sections
 * - Hover effects and transitions
 * - Responsive design (can be extended for mobile menu)
 * - Accessible navigation with proper ARIA labels
 * - Clean, minimal styling
 */

import { NAVIGATION_ITEMS } from "@/data/contact-links";

export function Navigation() {
  return (
    <nav aria-label="Main navigation">
      <div className="flex items-center gap-2">
        {NAVIGATION_ITEMS.map((item, index) => (
          <a
            key={item.id}
            href={item.href}
            className="
              relative px-4 py-2 text-sm font-medium text-slate-600 
              hover:text-slate-900 transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:rounded-lg
              hover:bg-white/60 hover:backdrop-blur-sm hover:shadow-sm
              rounded-lg border border-transparent hover:border-blue-200/50
              hover:scale-105 group
            "
            style={{ animationDelay: `${index * 100}ms` }}
            aria-label={`Navigate to ${item.label} section`}
          >
            {item.label}
            {/* Hover underline effect */}
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-4/5 transition-all duration-300 rounded-full"></div>
          </a>
        ))}
      </div>
    </nav>
  );
}
