# 🚀 Quick Start Guide - Edit Your Portfolio in 5 Minutes!

This guide will help you make your first changes to your portfolio website **right now**.

---

## ✅ Step 1: Change Your Name and Title (2 minutes)

1. Open the file: `data/personal-info.ts`
2. Find these lines:
   ```typescript
   name: "Sandra Barbosa",
   title: "Junior frontend developer",
   ```
3. Change them to your name and title
4. Save the file (Cmd+S or Ctrl+S)

**Done!** Your name is now updated everywhere on your website.

---

## ✅ Step 2: Update Your Email and Social Links (2 minutes)

1. Open the file: `data/contact-links.ts`
2. Find the lines with `url:`
3. Change them to your own links:
   ```typescript
   url: "mailto:YOUR-EMAIL@example.com",     // ← Your email
   url: "https://github.com/YOUR-USERNAME",  // ← Your GitHub
   url: "https://linkedin.com/in/YOUR-NAME", // ← Your LinkedIn
   ```
4. Save the file

**Done!** Your contact buttons now link to your accounts.

---

## ✅ Step 3: Edit Your About Me Text (1 minute)

1. Open the file: `data/personal-info.ts`
2. Find the `bio:` section (it's the long paragraph)
3. Replace it with your own story
4. Save the file

**Done!** Your About section now tells your story.

---

## 🎉 See Your Changes

1. Open Terminal (or Command Prompt)
2. Navigate to your project folder:
   ```bash
   cd "/Users/sandrabarbosa/Desktop/Portfolio web"
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and go to: http://localhost:3000

**You should see your changes!** 🎊

---

## 🎨 Want to Change Colors?

### Make the website GREEN instead of BLUE/PURPLE:

1. Open: `components/sections/ContactSection.tsx`
2. Find all instances of `blue` and change to `green`
3. Find all instances of `purple` and change to `green`
4. Save and refresh your browser

**Try these colors:**
- `green` - Green theme
- `red` - Red theme
- `pink` - Pink theme
- `indigo` - Indigo/dark blue theme
- `orange` - Orange theme

---

## 📝 Add a New Project

1. Open: `data/projects.ts`
2. Scroll to the bottom (before the `];`)
3. Copy this template and paste it:

```typescript
{
  id: "my-new-project",
  title: "My Awesome Project",
  description: "What my project does and why it's cool...",
  link: "https://myproject.com",
  githubLink: "https://github.com/yourname/your-project",
  image: "/images/my-project.png",
  technologies: {
    frontend: ["React", "CSS", "JavaScript"],
  },
  featured: true,
},
```

4. Change all the details to match your project
5. Add your project screenshot to `/public/images/`
6. Save and refresh

**Done!** Your new project is now on your portfolio.

---

## 🛠️ Add a New Work Experience

1. Open: `data/experiences.ts`
2. Copy the existing experience block
3. Paste it at the end (before the `];`)
4. Change all the details:
   - Job title
   - Company name
   - Dates
   - What you did (bullet points)
   - Technologies used
5. Save and refresh

**Done!** Your new experience is now listed.

---

## 📚 More Help

- **Full guide:** Read `SIMPLE-GUIDE.md`
- **Tailwind CSS:** Read `TAILWIND-CHEATSHEET.md`
- **Stuck?** Check for:
  - Missing commas `,`
  - Unmatched quotes `"`
  - Typos in file paths

---

## 🎯 Common Files You'll Edit

| File | What It Does |
|------|-------------|
| `data/personal-info.ts` | Your name, title, bio, email, location |
| `data/contact-links.ts` | Your email and social media links |
| `data/projects.ts` | Your portfolio projects |
| `data/experiences.ts` | Your work experience |
| `data/tech-stack.ts` | Technologies you know |
| `components/sections/ContactSection.tsx` | Contact section (with helpful comments) |

---

## 💡 Pro Tips

1. **Make one change at a time** - Easier to fix if something breaks
2. **Save often** - Cmd+S (Mac) or Ctrl+S (Windows)
3. **Refresh browser** - See your changes immediately
4. **Read the comments** - Files have helpful notes explaining everything
5. **Copy and modify** - Duplicate what works and change it

---

## 🚨 If Something Breaks

1. **Check the Terminal** - It shows error messages
2. **Look for typos** - Missing commas, quotes, or brackets
3. **Undo your last change** - Cmd+Z (Mac) or Ctrl+Z (Windows)
4. **Ask for help** - Share the error message

---

## 📦 Deploy Your Website

Once you're happy with your changes:

1. Build your website:
   ```bash
   npm run build
   npm run export
   ```

2. Your website files will be in the `out` folder

3. Upload the `out` folder to:
   - **Netlify** (easiest - drag and drop)
   - **Vercel** (great for Next.js)
   - **GitHub Pages** (free hosting)

---

## 🎓 Learning Resources

**New to coding?**
- [HTML & CSS Basics](https://www.w3schools.com/html/)
- [JavaScript Basics](https://javascript.info/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

**Want to learn more?**
- [React Tutorial](https://react.dev/learn)
- [Next.js Tutorial](https://nextjs.org/learn)
- [TypeScript Basics](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

---

You've got this! Start small, experiment, and have fun! 🎉

**Next Steps:**
1. ✅ Change your name and info
2. ✅ Update your social links
3. ✅ Add your projects
4. ✅ Customize colors
5. ✅ Deploy your website

Happy coding! 💻✨


