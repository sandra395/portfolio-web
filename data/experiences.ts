/**
 * 💼 WORK EXPERIENCE
 *
 * This is where you add your work experience or volunteer work.
 */


import { Experience } from "@/types/portfolio";

// YOUR WORK EXPERIENCE 
export const EXPERIENCES: Experience[] = [
  {
    id: "wcc-volunteer-2025", // Unique name (no spaces)

    title: "Junior Frontend Developer (Volunteer)", 

    company: "Women Coding Community (WCC), London", 

    period: "Oct 2025 - Present",

    // ← WHAT YOU DID (each line becomes a bullet point)
    description: [
      "Contributing to WCC's public website as part of an active open-source community",
      "Using the following tech stack: React, Git, MUI, TypeScript",
      "Collaborating with other volunteers to improve the website and make it easier to use",
      "Collaborating in weekly team sessions to set project priorities, tackle technical challenges, and schedule development tasks",
    ],

    skills: ["React", "Git", "TypeScript", "MUI"], // TECHNOLOGIES YOU USED

    type: "volunteer", // "work", "volunteer"
  }
];

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
