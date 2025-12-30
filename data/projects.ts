/**
 * 🚀 PROJECTS - EASY TO EDIT!
 * 
 * This is where you add and edit your portfolio projects.
 * 
 * ✏️ HOW TO EDIT A PROJECT:
 * 1. Change "title" - Your project name
 * 2. Change "description" - What the project does
 * 3. Change "link" - Link to live project
 * 4. Change "githubLink" or "githubLinks" - Link(s) to your code
 * 5. Change "image" - Path to project screenshot (put images in /public/images/)
 * 6. Change "technologies" - List of technologies you used
 * 7. Change "featured" - true = show on homepage, false = hide
 * 
 * 🆕 HOW TO ADD A NEW PROJECT:
 * Copy one of the project blocks below (from { to },)
 * Paste it at the end, and change all the details.
 * Don't forget the comma after the }!
 * 
 * 🖼️ ADDING PROJECT IMAGES:
 * 1. Put your image in: /public/images/
 * 2. Name it something like: my-project.png
 * 3. Reference it as: "/images/my-project.png"
 */

import { Project } from '@/types/portfolio';

// YOUR PROJECTS - Add or edit projects below
export const PROJECTS: Project[] = [
  // ========== PROJECT 1 ==========
  {
    id: "airbnc-platform",  // ← Unique name (no spaces)
    
    title: "AirbNC Property Booking Platform (UK Stays)",  // ← PROJECT TITLE
    
    description: "I built a full-stack property booking platform called UK Stays, similar to Airbnb. The frontend is built with React and connects to a custom RESTful API backend I created with Node.js, Express, and PostgreSQL. Users can browse properties, filter by type and price, book stays, leave reviews, save favourites, and manage their profile. The backend is deployed on Render, the database is hosted on Supabase, and the frontend is deployed on Netlify.",  // ← DESCRIBE YOUR PROJECT
    
    link: "https://ukstays.netlify.app/",  // ← LINK TO LIVE PROJECT
    
    // If your project has separate frontend and backend repos:
    githubLinks: {
      frontend: "https://github.com/sandra395/AirbNC-frontend",  // ← FRONTEND CODE LINK
      backend: "https://github.com/sandra395/AirbNC-backend",    // ← BACKEND CODE LINK
    },
    
    image: "/images/project-one.png",  // ← PROJECT SCREENSHOT (put in /public/images/)
    
    // Technologies you used (add or remove as needed)
    technologies: {
      frontend: ["React", "React Router", "CSS", "Netlify"],
      backend: ["Node.js", "Express.js", "PostgreSQL", "Supabase", "RESTful API"],
      testing: ["Jest"],
    },
    
    featured: true,  // ← true = show on homepage, false = hide
  },
  
  // ========== PROJECT 2 ==========
  {
    id: "frontend-challenges",  // ← Unique name (no spaces)
    
    title: "Frontend Challenges Showcase",  // ← PROJECT TITLE
    
    description: "A collection of interactive web applications that showcase my frontend development journey and problem-solving skills. Features include a strategic Tic Tac Toe game with AI logic, a dictionary app with real-time API integration, and a productivity-focused to-do list with local storage. Each project demonstrates different aspects of modern web development, from component architecture to API handling, while maintaining clean, accessible user interfaces.",  // ← DESCRIBE YOUR PROJECT
    
    link: "https://frontend-challenges-web.netlify.app/",  // ← LINK TO LIVE PROJECT
    
    // If your project has ONE repo (not separate frontend/backend):
    githubLink: "https://github.com/sandra395/Frontend-challenges-showcase",  // ← CODE LINK
    
    image: "/images/project-two.png",  // ← PROJECT SCREENSHOT (put in /public/images/)
    
    // Technologies you used (add or remove as needed)
    technologies: {
      frontend: ["React", "HTML", "CSS", "JavaScript", "Tailwind CSS", "Next.js", "Netlify"],
      apiStateManagement: ["Axios", "Dictionary API", "React Hooks (useState, useEffect)"],
    },
    
    featured: true,  // ← true = show on homepage, false = hide
  },
  
  // 🆕 TO ADD A NEW PROJECT:
  // Copy one of the blocks above (from { to },)
  // Paste it here, and change all the details
  // Example:
  // {
  //   id: "my-new-project",
  //   title: "My Awesome Project",
  //   description: "What my project does...",
  //   link: "https://myproject.com",
  //   githubLink: "https://github.com/yourname/your-project",
  //   image: "/images/my-project.png",
  //   technologies: {
  //     frontend: ["React", "CSS"],
  //   },
  //   featured: true,
  // },
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
