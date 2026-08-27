/**
 * 💼 WORK EXPERIENCE - EASY TO EDIT!
 *
 * This is where you add your work experience, volunteer work, or internships.
 *
 * ✏️ HOW TO EDIT AN EXPERIENCE:
 * 1. Change "title" - Your job title
 * 2. Change "company" - Company name and location
 * 3. Change "period" - When you worked there (e.g., "Jan 2024 - Present")
 * 4. Change "description" - List of what you did (each line is a bullet point)
 * 5. Change "skills" - Technologies/skills you used
 * 6. Change "type" - "work", "volunteer", or "internship"
 *
 * 🆕 HOW TO ADD A NEW EXPERIENCE:
 * Copy the block below (from { to },)
 * Paste it at the end, and change all the details.
 * Don't forget the comma after the }!
 */

import { Experience } from "@/types/portfolio";

// YOUR WORK EXPERIENCE - Add or edit experiences below
export const EXPERIENCES: Experience[] = [
  {
    id: "wcc-volunteer-2025", // ← Unique name (no spaces)

    title: "UI Designer & Frontend Developer (Volunteer)", // ← YOUR JOB TITLE

    company: "Women Coding Community (WCC), London", // ← COMPANY NAME & LOCATION

    period: "Oct 2025 - Present", // ← WHEN YOU WORKED THERE

    // ← WHAT YOU DID (each line becomes a bullet point)
    description: [
      "Contribute to the development and design of the Women Coding Community website, combining frontend development and UI/UX design to create responsive and user-focused web experiences.",
      "Design and implement responsive website pages and components based on Figma designs.",
      "Developed the Mentorship page, including the hero section, page description and footer.",
      "Collaborate with team members during weekly sessions to plan features, discuss technical challenges and improve the website.",
      "Contribute to improvements in usability, accessibility, visual consistency and responsive design",
      "Use Git and GitHub as part of the development workflow and team collaboration",
    ],

    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Material UI",
      "Figma",
      "Git",
      "GitHub",
    ], // ← TECHNOLOGIES YOU USED

    type: "volunteer", // ← "work", "volunteer", or "internship"
  },

  // 🆕 TO ADD ANOTHER EXPERIENCE:
  // Copy the block above (from { to },)
  // Paste it here, and change all the details
  // Example:
  // {
  //   id: "my-job-2024",
  //   title: "Frontend Developer",
  //   company: "Tech Company, London",
  //   period: "Jan 2024 - Dec 2024",
  //   description: [
  //     "Built responsive web applications",
  //     "Worked with React and TypeScript",
  //     "Collaborated with design team",
  //   ],
  //   skills: ["React", "TypeScript", "CSS"],
  //   type: "work"
  // },
];

/**
 * Get experiences by type for filtered display
 */
export const getExperiencesByType = (
  type: Experience["type"]
): Experience[] => {
  return EXPERIENCES.filter((exp) => exp.type === type);
};

/**
 * Get all experiences sorted by most recent first
 */
export const getAllExperiences = (): Experience[] => {
  return [...EXPERIENCES].sort((a, b) => {
    // Simple sorting by period - in a real app, you'd use proper date parsing
    return b.period.localeCompare(a.period);
  });
};
