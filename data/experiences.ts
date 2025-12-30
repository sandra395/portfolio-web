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

    title: "Junior Frontend Developer (Volunteer)", // ← YOUR JOB TITLE

    company: "Women Coding Community (WCC), London", // ← COMPANY NAME & LOCATION

    period: "Oct 2025 - Present", // ← WHEN YOU WORKED THERE

    // ← WHAT YOU DID (each line becomes a bullet point)
    description: [
      "Contributing to WCC's public website as part of an active open-source community",
      "Using the following tech stack: React, Git, MUI, TypeScript",
      "Collaborating with other volunteers to improve the website and make it easier to use",
      "Collaborating in weekly team sessions to set project priorities, tackle technical challenges, and schedule development tasks",
    ],

    skills: ["React", "Git", "TypeScript", "MUI"], // ← TECHNOLOGIES YOU USED

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
