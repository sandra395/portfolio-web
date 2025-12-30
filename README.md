# 🌟 Sandra Barbosa - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. 

**✨ NEW: Beginner-Friendly Version!** This portfolio has been simplified with extensive comments and guides to make it easy to edit, even if you're new to TypeScript and Tailwind CSS.

---

## 📖 **NEW TO CODING? START HERE!**

This portfolio now includes **beginner-friendly guides** to help you edit your website without needing to know TypeScript or Tailwind CSS:

### 🚀 Quick Guides (Read These First!)

1. **[QUICK-START.md](QUICK-START.md)** - Make your first changes in 5 minutes
2. **[SIMPLE-GUIDE.md](SIMPLE-GUIDE.md)** - Complete beginner's guide to editing your portfolio
3. **[TAILWIND-CHEATSHEET.md](TAILWIND-CHEATSHEET.md)** - Simple Tailwind CSS reference

### 📝 What You Can Easily Edit

All your content is in easy-to-edit files with **lots of helpful comments**:

| File | What You Can Change |
|------|---------------------|
| `data/personal-info.ts` | Your name, job title, bio, email, location |
| `data/contact-links.ts` | Your email and social media links |
| `data/projects.ts` | Your portfolio projects |
| `data/experiences.ts` | Your work experience |
| `data/tech-stack.ts` | Technologies you know |

**All files have comments like this:** `// ← CHANGE THIS`

---

## 🏗️ Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main homepage (now modular!)
├── components/
│   ├── layout/              # Layout components
│   │   ├── Header.tsx       # Site header with navigation
│   │   ├── Footer.tsx       # Site footer
│   │   └── Navigation.tsx   # Navigation menu
│   ├── sections/            # Page section components
│   │   ├── HeroSection.tsx      # Landing/hero section
│   │   ├── AboutSection.tsx     # About me section
│   │   ├── TechStackSection.tsx # Technologies grid
│   │   ├── ExperienceSection.tsx # Work experience
│   │   ├── ProjectsSection.tsx   # Portfolio projects
│   │   └── ContactSection.tsx    # Contact information
│   ├── common/              # Reusable components
│   │   ├── SectionContainer.tsx # Consistent section wrapper
│   │   ├── SectionTitle.tsx     # Standardized titles
│   │   └── TechCard.tsx         # Technology display cards
│   ├── ui/                  # shadcn/ui components
│   └── tech-icons.tsx       # Technology icons
├── data/                    # Data layer (separated from components)
│   ├── personal-info.ts     # Personal information
│   ├── tech-stack.ts        # Technologies and tools
│   ├── experiences.ts       # Work experience data
│   ├── projects.ts          # Portfolio projects
│   └── contact-links.ts     # Contact and social links
├── types/
│   └── portfolio.ts         # TypeScript interfaces
└── public/
    └── images/              # Project images and assets
```

## 🎯 Key Features

### For Junior Developers
- **Clear Structure**: Each component has a single responsibility
- **Comprehensive Comments**: Every component explains its purpose and features
- **Consistent Patterns**: Same naming conventions and structure throughout
- **Type Safety**: TypeScript interfaces prevent common errors
- **Modular Design**: Easy to understand and modify individual sections

### For Maintainability
- **Separated Data**: Content changes don't require touching component code
- **Reusable Components**: Common patterns extracted into reusable components
- **Consistent Styling**: Uniform spacing and responsive behavior
- **Scalable Architecture**: Easy to add new sections or modify existing ones

### Technical Features
- **Responsive Design**: Mobile-first approach with consistent breakpoints
- **Performance Optimized**: Lazy loading, optimized images, and efficient animations
- **Accessibility**: Proper ARIA labels, focus management, and keyboard navigation
- **SEO Friendly**: Proper metadata and semantic HTML structure

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone [your-repo-url]

# Navigate to project directory
cd portfolio-web

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
npm run typecheck  # Run TypeScript type checking
```

## 📝 How to Update Content (Beginner-Friendly!)

### ✏️ Change Your Name and Info
1. Open `data/personal-info.ts`
2. Look for the comments that say `// ← CHANGE THIS`
3. Edit your name, title, bio, email, and location
4. Save the file - Done! ✅

### 🔗 Update Your Social Links
1. Open `data/contact-links.ts`
2. Find the `url:` lines
3. Change them to your own GitHub, LinkedIn, and email
4. Save the file - Done! ✅

### 🚀 Add a New Project
1. Open `data/projects.ts`
2. Copy one of the existing project blocks
3. Paste it at the bottom (before the `];`)
4. Change all the details to match your project
5. Add your project screenshot to `public/images/`
6. Save the file - Done! ✅

### 💼 Add Work Experience
1. Open `data/experiences.ts`
2. Copy the existing experience block
3. Paste it at the bottom (before the `];`)
4. Change the job title, company, dates, and description
5. Save the file - Done! ✅

### 🛠️ Add Technologies You Know
1. Open `data/tech-stack.ts`
2. Find the right category (frontend, backend, tools, etc.)
3. Copy one line and paste it below
4. Change the technology name
5. Save the file - Done! ✅

**💡 Tip:** All these files have helpful comments explaining what to do!

## 🎨 Design System

### Container Widths
- **Max Width**: `max-w-6xl` (1152px) for consistent layout
- **Padding**: `px-4 sm:px-6 lg:px-8` for responsive spacing
- **Section Spacing**: `py-20` for consistent vertical rhythm

### Typography Scale
- **Hero Title**: `text-5xl sm:text-6xl lg:text-7xl`
- **Section Titles**: `text-3xl sm:text-4xl`
- **Subsection Titles**: `text-xl`
- **Body Text**: `text-base sm:text-lg`

### Color Palette
- **Primary Text**: `text-slate-900`
- **Secondary Text**: `text-slate-600`
- **Muted Text**: `text-slate-400`
- **Borders**: `border-slate-200`

## 🔧 Component Architecture

### SectionContainer
Provides consistent width and spacing for all sections:
```tsx
<SectionContainer id="section-id" className="additional-classes">
  {/* Section content */}
</SectionContainer>
```

### SectionTitle
Standardized titles with optional subtitles:
```tsx
<SectionTitle 
  title="Section Title" 
  subtitle="Optional description" 
/>
```

### Data Flow
1. **Data Layer**: All content stored in `data/` files
2. **Type Safety**: Interfaces in `types/portfolio.ts`
3. **Components**: Import and use typed data
4. **Rendering**: Clean, predictable component structure

## 🚀 Deployment

This project is configured for deployment on platforms like:
- **Netlify**: Automatic deployments from Git
- **Vercel**: Optimized for Next.js applications
- **GitHub Pages**: Static export support

### Build for Production
```bash
npm run build
```

## 🤝 Contributing

This codebase is designed to be junior-developer friendly. When contributing:

1. **Follow the established patterns**: Use the same structure and naming conventions
2. **Add comprehensive comments**: Explain what your code does and why
3. **Update data files**: Keep content separate from components
4. **Test responsively**: Ensure your changes work on all screen sizes
5. **Run type checking**: Use `npm run typecheck` before committing

## 📚 Learning Resources

If you're new to the technologies used in this project:

- **Next.js**: [Official Documentation](https://nextjs.org/docs)
- **TypeScript**: [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- **Tailwind CSS**: [Tailwind Documentation](https://tailwindcss.com/docs)
- **shadcn/ui**: [Component Library](https://ui.shadcn.com/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Sandra Barbosa
