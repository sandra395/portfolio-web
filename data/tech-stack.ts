/**
 * 🛠️ TECH STACK - EASY TO EDIT!
 * 
 * This is where you list all the technologies and tools you know.
 * They're organized by category (frontend, backend, etc.)
 * 
 * ✏️ HOW TO EDIT:
 * 1. Change "name" - The technology name (shown on website)
 * 2. Keep "icon" the same as "name" (this finds the matching icon)
 * 3. Change "category" - Where it appears: 'frontend', 'backend', 'database', 'tools', or 'design'
 * 
 * 🆕 HOW TO ADD A NEW TECHNOLOGY:
 * Copy one of the lines below, paste it in the right category, and change the name.
 * Don't forget the comma at the end!
 * 
 * 📋 CATEGORIES:
 * - frontend: React, HTML, CSS, JavaScript, etc.
 * - backend: Node.js, Express, Python, etc.
 * - database: PostgreSQL, MongoDB, MySQL, etc.
 * - tools: Git, Jest, Docker, etc.
 * - design: Figma, Photoshop, etc.
 */

import { TechStack } from '@/types/portfolio';

// YOUR TECH STACK - Add or edit technologies below
export const TECH_STACK: TechStack[] = [
  // ===== FRONTEND TECHNOLOGIES =====
  { name: "React", icon: "React", category: 'frontend' },
  { name: "Next.js", icon: "NextJS", category: 'frontend' },
  { name: "JavaScript", icon: "JavaScript", category: 'frontend' },
  { name: "HTML5", icon: "HTML5", category: 'frontend' },
  { name: "CSS3", icon: "CSS3", category: 'frontend' },
  // 🆕 Add more frontend tech here
  
  // ===== BACKEND TECHNOLOGIES =====
  { name: "Node.js", icon: "NodeJS", category: 'backend' },
  { name: "Express", icon: "Express", category: 'backend' },
  // 🆕 Add more backend tech here
  
  // ===== DATABASES =====
  { name: "PostgreSQL", icon: "PostgreSQL", category: 'database' },
  // 🆕 Add more databases here
  
  // ===== TOOLS & TESTING =====
  { name: "Jest", icon: "Jest", category: 'tools' },
  { name: "Git", icon: "Git", category: 'tools' },
  { name: "Render", icon: "Render", category: 'tools' },
  { name: "Netlify", icon: "Netlify", category: 'tools' },
  // 🆕 Add more tools here
  
  // ===== DESIGN TOOLS =====
  { name: "Figma", icon: "Figma", category: 'design' },
  // 🆕 Add more design tools here
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
