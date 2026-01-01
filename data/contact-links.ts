/**
 * 📧 CONTACT LINKS 
 */

// Import icons 
import { ContactLink, NavigationItem } from '@/types/portfolio';
import { Github, Linkedin, Mail } from "lucide-react";

// YOUR CONTACT LINKS 
export const CONTACT_LINKS: ContactLink[] = [
  {
    id: "email",              // unique name (no spaces)
    label: "Email",           // ← Text shown on button
    url: "mailto:sandra90barbosa@hotmail.com",  
    icon: Mail,               // icon (don't change)
    type: "email"             // type (don't change)
  },
  {
    id: "github",             // unique name (no spaces)
    label: "GitHub",          // ← Text shown on button
    url: "https://github.com/sandra395", 
    icon: Github,             // icon (don't change)
    type: "social"            // type (don't change)
  },
  {
    id: "linkedin",           // unique name (no spaces)
    label: "LinkedIn",        // ← Text shown on button
    url: "https://www.linkedin.com/in/sandra-b-bb217b120",  
    icon: Linkedin,           // icon (don't change)
    type: "social"            // type (don't change)
  },
  
];

/**
 * 🧭 NAVIGATION MENU
 * 
 * These are the links in your website's navigation menu.
 */
export const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: "About", href: "#about", id: "about" },                    
  { label: "Tech Stack", href: "#tech-stack", id: "tech-stack" },     
  { label: "Experience", href: "#experience", id: "experience" },     
  { label: "Projects", href: "#projects", id: "projects" },           
  { label: "Let's Connect", href: "#contact", id: "contact" },       
];

/**
 * Get contact links by type
 */
export const getContactLinksByType = (type: ContactLink['type']): ContactLink[] => {
  return CONTACT_LINKS.filter(link => link.type === type);
};
