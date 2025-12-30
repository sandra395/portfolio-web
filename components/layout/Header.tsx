/**
 * Header Component
 * 
 * The main site header containing navigation and branding.
 * Features a sticky position, responsive design, and smooth hover effects.
 * 
 * Features:
 * - Sticky positioning for persistent navigation
 * - Responsive navigation menu
 * - Avatar with fallback
 * - Smooth hover transitions
 * - Clean, professional styling
 */

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";
import { Navigation } from "./Navigation";
import { PERSONAL_INFO } from "@/data/personal-info";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-lg">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-white/80 to-purple-50/50 -z-10"></div>
      
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Branding Section */}
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="relative">
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-110 -z-10"></div>
              
              {/* Profile Avatar with enhanced styling */}
              <Avatar className="h-12 w-12 ring-3 ring-white shadow-lg group-hover:ring-blue-300/60 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                <AvatarImage 
                  src="/images/Profile.jpg" 
                  alt={PERSONAL_INFO.name}
                  className="object-cover object-center"
                />
                <AvatarFallback className="bg-gradient-to-br from-blue-600 to-purple-600 text-white text-lg font-semibold">
                  <User className="h-6 w-6" />
                </AvatarFallback>
              </Avatar>
              
              {/* Animated border ring */}
              <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse -z-10" 
                   style={{ padding: '2px', background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #3b82f6) border-box' }}>
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="font-bold text-lg bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent group-hover:from-blue-900 group-hover:to-purple-900 transition-all duration-300">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs text-slate-500 group-hover:text-slate-600 transition-colors duration-300 font-medium">
                Portfolio
              </span>
            </div>
          </div>

          {/* Navigation Menu */}
          <Navigation />
        </div>
      </nav>
    </header>
  );
}
