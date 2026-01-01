/**
 * 🛠️ TECH STACK - EASY TO EDIT!
 */

import { TechStack } from '@/types/portfolio';

// TECH STACK 
export const TECH_STACK: TechStack[] = [
  // ===== FRONTEND TECHNOLOGIES =====
  { name: "React", icon: "React", category: 'frontend' },
  { name: "Next.js", icon: "NextJS", category: 'frontend' },
  { name: "JavaScript", icon: "JavaScript", category: 'frontend' },
  { name: "HTML5", icon: "HTML5", category: 'frontend' },
  { name: "CSS3", icon: "CSS3", category: 'frontend' },
 
  
  // ===== BACKEND TECHNOLOGIES =====
  { name: "Node.js", icon: "NodeJS", category: 'backend' },
 
  
  // ===== DATABASES =====
  { name: "PostgreSQL", icon: "PostgreSQL", category: 'database' },

  
  // ===== TOOLS & TESTING =====
  { name: "Jest", icon: "Jest", category: 'tools' },
  { name: "Git", icon: "Git", category: 'tools' },
  { name: "Render", icon: "Render", category: 'tools' },
  { name: "Netlify", icon: "Netlify", category: 'tools' },

  
  // ===== DESIGN TOOLS =====
  { name: "Figma", icon: "Figma", category: 'design' },
  
];

/**
 * Tech stack organized by categories for easier display and management
 */
export const TECH_STACK_BY_CATEGORY = {
  frontend: TECH_STACK.filter(tech => tech.category === 'frontend'),
  backend: TECH_STACK.filter(tech => tech.category === 'backend'),
  database: TECH_STACK.filter(tech => tech.category === 'database'),
  tools: TECH_STACK.filter(tech => tech.category === 'tools'),
  design: TECH_STACK.filter(tech => tech.category === 'design'),
};

/**
 * Get all technologies as a flat array (for grid display)
 */
export const getAllTechnologies = (): TechStack[] => TECH_STACK;
