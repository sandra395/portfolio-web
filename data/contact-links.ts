/**
 * 📧 CONTACT LINKS - EASY TO EDIT!
 * 
 * ✏️ HOW TO EDIT:
 * 1. Change the "url" to your own links
 * 2. Change the "label" to change button text
 * 3. Keep the "icon" as is (these are pre-made icons)
 * 
 * 🆕 HOW TO ADD A NEW SOCIAL LINK:
 * Copy one of the blocks below, paste it at the end (before the ],)
 * and change the details. Don't forget the comma!
 */

// Import icons (don't change these lines)
import { ContactLink, NavigationItem } from '@/types/portfolio';
import { Github, Linkedin, Mail } from "lucide-react";

// YOUR CONTACT LINKS - Edit the "url" and "label" below
export const CONTACT_LINKS: ContactLink[] = [
  {
    id: "email",              // unique name (no spaces)
    label: "Email",           // ← Text shown on button
    url: "mailto:sandra90barbosa@hotmail.com",  // ← YOUR EMAIL HERE
    icon: Mail,               // icon (don't change)
    type: "email"             // type (don't change)
  },
  {
    id: "github",             // unique name (no spaces)
    label: "GitHub",          // ← Text shown on button
    url: "https://github.com/sandra395",  // ← YOUR GITHUB LINK HERE
    icon: Github,             // icon (don't change)
    type: "social"            // type (don't change)
  },
  {
    id: "linkedin",           // unique name (no spaces)
    label: "LinkedIn",        // ← Text shown on button
    url: "https://www.linkedin.com/in/sandra-b-bb217b120",  // ← YOUR LINKEDIN LINK HERE
    icon: Linkedin,           // icon (don't change)
    type: "social"            // type (don't change)
  },
  // 🆕 TO ADD MORE: Copy a block above, paste here, and change the details
];

/**
 * 🧭 NAVIGATION MENU
 * 
 * These are the links in your website's navigation menu.
 * 
 * ✏️ TO EDIT:
 * - Change "label" to change the menu text
 * - Keep "href" and "id" matching (they link to sections on your page)
 */
export const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: "About", href: "#about", id: "about" },                    // ← Change "About" to rename menu item
  { label: "Tech Stack", href: "#tech-stack", id: "tech-stack" },     // ← Change "Tech Stack" to rename
  { label: "Experience", href: "#experience", id: "experience" },     // ← Change "Experience" to rename
  { label: "Projects", href: "#projects", id: "projects" },           // ← Change "Projects" to rename
  { label: "Let's Connect", href: "#contact", id: "contact" },        // ← Change "Let's Connect" to rename
];

/**
 * Get contact links by type
 */
export const getContactLinksByType = (type: ContactLink['type']): ContactLink[] => {
  return CONTACT_LINKS.filter(link => link.type === type);
};
