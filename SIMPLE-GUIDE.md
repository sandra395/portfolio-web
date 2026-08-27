# 📖 Simple Portfolio Guide - For Beginners

This guide will help you edit your portfolio website **without needing to know TypeScript or Tailwind CSS**.

---

## 🎯 What You Need to Know

### Your website has 3 main parts:

1. **Data Files** - Where you change your information (name, projects, etc.)
2. **Component Files** - The building blocks of your website (don't worry, we'll simplify these!)
3. **Styling** - How things look (colors, sizes, spacing)

---

## 📝 How to Edit Your Information

### 1. **Change Your Personal Info**
**File:** `data/personal-info.ts`

```typescript
export const PERSONAL_INFO = {
  name: "Sandra Barbosa",           // ← Change your name here
  title: "Junior frontend developer", // ← Change your job title here
  bio: `Your bio text here...`,      // ← Change your about me text here
  email: "your@email.com",           // ← Change your email here
  location: "London, UK"             // ← Change your location here
};
```

---

### 2. **Add or Edit Projects**
**File:** `data/projects.ts`

Each project looks like this:

```typescript
{
  id: "unique-project-name",           // ← A unique name (no spaces)
  title: "My Awesome Project",         // ← Project title shown on website
  description: "What the project does", // ← Describe your project
  link: "https://myproject.com",       // ← Link to live project
  githubLink: "https://github.com/...", // ← Link to GitHub code
  image: "/images/project-one.png",    // ← Project screenshot (put in /public/images/)
  technologies: {
    frontend: ["React", "CSS"],        // ← Technologies you used
  },
  featured: true,                      // ← Show on homepage? (true/false)
}
```

**To add a new project:** Copy one project block and paste it below, then change the details.

---

### 3. **Change Contact Links**
**File:** `data/contact-links.ts`

Add your social media links:

```typescript
{
  id: "linkedin",
  label: "LinkedIn",
  url: "https://linkedin.com/in/yourname", // ← Change to your LinkedIn
  type: "social",
}
```

---

## 🎨 Understanding Tailwind CSS (The Basics)

Tailwind uses simple class names to style things. Here are the most common ones:

### Colors:
- `text-blue-600` = Blue text
- `bg-white` = White background
- `bg-blue-500` = Blue background

### Sizes:
- `text-sm` = Small text
- `text-lg` = Large text
- `text-4xl` = Extra large text
- `p-4` = Padding (space inside)
- `m-4` = Margin (space outside)

### Layout:
- `flex` = Make items sit side by side
- `flex-col` = Stack items vertically
- `gap-4` = Space between items
- `justify-center` = Center items horizontally
- `items-center` = Center items vertically

### Responsive (Mobile vs Desktop):
- `sm:text-lg` = Large text on small screens and up
- `md:p-8` = More padding on medium screens and up

---

## 🛠️ Common Tasks

### Change a Color
Find the color class (like `text-blue-600`) and change it:
- `blue` → `purple`, `green`, `red`, `pink`, etc.
- `600` → `400` (lighter) or `800` (darker)

### Change Text Size
Find `text-` classes:
- `text-sm` (small)
- `text-base` (normal)
- `text-lg` (large)
- `text-xl`, `text-2xl`, `text-3xl`, `text-4xl` (extra large)

### Change Spacing
- `p-4` = padding (space inside) - try `p-2`, `p-6`, `p-8`
- `m-4` = margin (space outside) - try `m-2`, `m-6`, `m-8`
- `gap-4` = space between items - try `gap-2`, `gap-6`, `gap-8`

---

## 🚀 Running Your Website

### To see your changes:
```bash
npm run dev
```
Then open: http://localhost:3000

### To build for deployment:
```bash
npm run build
npm run export
```
Your website will be in the `out` folder - upload this to your hosting.

---

## ❓ Need Help?

### If something breaks:
1. Check for typos in your data files
2. Make sure all quotes match: `"text"` or `'text'`
3. Make sure all commas are in place
4. Run `npm run dev` to see error messages

### Common Errors:
- **Missing comma** - Add `,` after each item in a list
- **Unmatched quotes** - Make sure `"` has a closing `"`
- **Wrong file path** - Check image paths start with `/images/`

---

## 📚 Files You'll Edit Most:

1. `data/personal-info.ts` - Your name, bio, email
2. `data/projects.ts` - Your projects
3. `data/contact-links.ts` - Your social media links
4. `data/experiences.ts` - Your work experience
5. `data/tech-stack.ts` - Technologies you know

**You rarely need to edit component files!** Just change the data files above.

---

## 💡 Pro Tips

1. **Make small changes** - Change one thing at a time and test
2. **Save often** - Save your files before refreshing the browser
3. **Use comments** - Add `//` before notes to yourself
4. **Copy existing code** - Duplicate what works and modify it
5. **Keep backups** - Copy files before making big changes

---

Good luck! You've got this! 🎉


