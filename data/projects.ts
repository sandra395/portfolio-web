/**
 * 🚀 PROJECTS
 */

import { Project } from '@/types/portfolio';

// YOUR PROJECTS 
export const PROJECTS: Project[] = [
  // ========== PROJECT 1 ==========
  {
    id: "airbnc-platform",
    title: "AirbNC Property Booking Platform (UK Stays)",
    description: "I built a full-stack property booking platform called UK Stays, similar to Airbnb. The frontend is built with React and connects to a custom RESTful API backend I created with Node.js, Express, and PostgreSQL. Users can browse properties, filter by type and price, book stays, leave reviews, save favourites, and manage their profile. The backend is deployed on Render, the database is hosted on Supabase, and the frontend is deployed on Netlify.",
    link: "https://ukstays.netlify.app/",
    githubLinks: {
      frontend: "https://github.com/sandra395/AirbNC-frontend",
      backend: "https://github.com/sandra395/AirbNC-backend",
    },
    image: "/images/project-one.png",
    technologies: {
      frontend: ["React", "React Router", "CSS", "Netlify"],
      backend: ["Node.js", "Express.js", "PostgreSQL", "Supabase", "RESTful API"],
      testing: ["Jest"],
    },
    featured: true,
  },
  
  // ========== PROJECT 2 ==========
  {
    id: "frontend-challenges",
    title: "Frontend Challenges Showcase",
    description: "A collection of interactive web applications that showcase my frontend development journey and problem-solving skills. Features include a strategic Tic Tac Toe game with AI logic, a dictionary app with real-time API integration, and a productivity-focused to-do list with local storage. Each project demonstrates different aspects of modern web development, from component architecture to API handling, while maintaining clean, accessible user interfaces.",
    link: "https://frontend-challenges-web.netlify.app/",
    githubLink: "https://github.com/sandra395/Frontend-challenges-showcase",
    image: "/images/project-two.png",
    technologies: {
      frontend: ["React", "HTML", "CSS", "JavaScript", "Tailwind CSS", "Next.js", "Netlify"],
      apiStateManagement: ["Axios", "Dictionary API", "React Hooks (useState, useEffect)"],
    },
    featured: true,
  }
];

/**
 * Get featured projects for homepage display
 */
export const getFeaturedProjects = (): Project[] => {
  return PROJECTS.filter(project => project.featured);
};

/**
 * Get all projects sorted by featured first
 */
export const getAllProjects = (): Project[] => {
  return [...PROJECTS].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });
};

/**
 * Get project by ID
 */
export const getProjectById = (id: string): Project | undefined => {
  return PROJECTS.find(project => project.id === id);
};