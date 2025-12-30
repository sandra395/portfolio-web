/**
 * Footer Component
 * 
 * Simple, clean footer for the portfolio.
 * Contains copyright information and maintains consistent styling.
 * 
 * Features:
 * - Responsive layout
 * - Copyright information
 * - Consistent spacing and typography
 * - Clean, minimal design
 */

import { PERSONAL_INFO } from "@/data/personal-info";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-white/20 bg-gradient-to-br from-slate-50 to-blue-50/30 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/10 via-transparent to-purple-100/10"></div>
      
      {/* Floating background elements */}
      <div className="absolute top-4 left-10 w-32 h-32 bg-blue-200/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-4 right-10 w-40 h-40 bg-purple-200/10 rounded-full blur-2xl"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          {/* Main footer content */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/30 max-w-md mx-auto">
            <div className="space-y-3">
              <p className="text-sm font-medium text-slate-700">
                © {currentYear} {PERSONAL_INFO.name.split(' ')[0]} B. All rights reserved.
              </p>
            </div>
          </div>
          
          {/* Decorative dots */}
          <div className="flex justify-center space-x-2">
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
