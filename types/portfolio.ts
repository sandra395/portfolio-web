/**
 * Portfolio TypeScript Interfaces
 * 
 * This file contains all the type definitions used throughout the portfolio.
 * These interfaces ensure type safety and make the code more maintainable.
 */

import { ComponentType } from 'react';

/**
 * Represents a technology in the tech stack
 */
export interface TechStack {
  name: string;
  icon: string;
  category?: 'frontend' | 'backend' | 'database' | 'tools' | 'design';
}

/**
 * Represents a work experience entry
 */
export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
  type: 'volunteer' | 'fulltime' | 'parttime' | 'freelance';
}

/**
 * Represents a project in the portfolio
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  link?: string; // Live demo URL
  githubLink?: string; // Single GitHub repo
  githubLinks?: {
    frontend?: string;
    backend?: string;
  };
  technologies: {
    [category: string]: string[];
  };
  featured?: boolean;
}

/**
 * Represents a contact/social link
 */
export interface ContactLink {
  id: string;
  label: string;
  url: string;
  icon: ComponentType<{ className?: string }>;
  type: 'email' | 'social' | 'portfolio';
}

/**
 * Personal information structure
 */
export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  email: string;
  location?: string;
}

/**
 * Navigation item structure
 */
export interface NavigationItem {
  label: string;
  href: string;
  id: string;
}
