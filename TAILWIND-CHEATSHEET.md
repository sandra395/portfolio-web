# 🎨 Tailwind CSS Cheat Sheet - Simple Guide

This is a beginner-friendly guide to the Tailwind CSS classes used in your portfolio.

---

## 🌈 Colors

### Text Colors
```
text-blue-500    = Blue text
text-purple-600  = Purple text
text-slate-700   = Dark gray text
text-white       = White text
text-black       = Black text
```

**Color Options:** blue, purple, red, green, yellow, pink, indigo, slate, gray

**Darkness Levels:** 
- 100-300 = Light
- 400-600 = Medium
- 700-900 = Dark

**Example:** `text-pink-400` = Medium pink text

### Background Colors
```
bg-white       = White background
bg-blue-500    = Blue background
bg-slate-100   = Light gray background
```

**Opacity (transparency):**
```
bg-white/50    = White background at 50% opacity
bg-blue-500/30 = Blue background at 30% opacity
```

---

## 📏 Spacing

### Padding (space INSIDE an element)
```
p-4      = Padding on all sides
pt-4     = Padding top
pb-4     = Padding bottom
pl-4     = Padding left
pr-4     = Padding right
px-4     = Padding left and right
py-4     = Padding top and bottom
```

**Sizes:** 0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24
- Smaller number = less space
- Larger number = more space

### Margin (space OUTSIDE an element)
```
m-4      = Margin on all sides
mt-4     = Margin top
mb-4     = Margin bottom
ml-4     = Margin left
mr-4     = Margin right
mx-4     = Margin left and right
my-4     = Margin top and bottom
mx-auto  = Center horizontally
```

### Gap (space BETWEEN items)
```
gap-4     = Space between items
gap-x-4   = Horizontal space between items
gap-y-4   = Vertical space between items
space-x-4 = Horizontal space between children
space-y-4 = Vertical space between children
```

---

## 📝 Text Styling

### Text Size
```
text-xs    = Extra small
text-sm    = Small
text-base  = Normal (default)
text-lg    = Large
text-xl    = Extra large
text-2xl   = 2x extra large
text-3xl   = 3x extra large
text-4xl   = 4x extra large
text-5xl   = 5x extra large
```

### Font Weight
```
font-light      = Light text
font-normal     = Normal text
font-medium     = Medium text
font-semibold   = Semi-bold text
font-bold       = Bold text
```

### Text Alignment
```
text-left    = Align left
text-center  = Align center
text-right   = Align right
```

---

## 📦 Layout

### Flexbox (arrange items in a row or column)
```
flex              = Enable flexbox
flex-row          = Items in a row (horizontal)
flex-col          = Items in a column (vertical)
flex-wrap         = Wrap items to next line
justify-center    = Center items horizontally
justify-between   = Space items evenly with space between
items-center      = Center items vertically
```

### Width & Height
```
w-full     = Full width
w-1/2      = Half width
w-1/3      = One third width
w-20       = Fixed width (20 units)
h-full     = Full height
h-screen   = Full screen height
max-w-4xl  = Maximum width (4xl size)
```

---

## 🎭 Visual Effects

### Borders
```
border           = Add border
border-2         = Thicker border
border-blue-500  = Blue border
rounded          = Rounded corners
rounded-lg       = Large rounded corners
rounded-full     = Fully rounded (circle/pill)
```

### Shadows
```
shadow-sm   = Small shadow
shadow      = Normal shadow
shadow-lg   = Large shadow
shadow-xl   = Extra large shadow
```

### Opacity
```
opacity-50   = 50% opacity
opacity-75   = 75% opacity
opacity-100  = 100% opacity (fully visible)
```

---

## 📱 Responsive Design

Tailwind lets you change styles based on screen size:

```
text-sm          = Small text on mobile
md:text-lg       = Large text on medium screens and up
lg:text-xl       = Extra large text on large screens and up
```

**Breakpoints:**
- `sm:` = Small screens (640px and up) - tablets
- `md:` = Medium screens (768px and up) - small laptops
- `lg:` = Large screens (1024px and up) - desktops
- `xl:` = Extra large screens (1280px and up) - large desktops

**Examples:**
```
p-4 md:p-8           = 4 units padding on mobile, 8 on medium screens+
text-2xl lg:text-4xl = 2xl text on mobile, 4xl on large screens+
hidden md:block      = Hidden on mobile, visible on medium screens+
```

---

## 🎨 Gradients

### Background Gradients
```
bg-gradient-to-r      = Gradient left to right
bg-gradient-to-l      = Gradient right to left
bg-gradient-to-t      = Gradient bottom to top
bg-gradient-to-b      = Gradient top to bottom
bg-gradient-to-br     = Gradient top-left to bottom-right

from-blue-500         = Start color
via-purple-500        = Middle color (optional)
to-pink-500           = End color
```

**Example:**
```html
<div class="bg-gradient-to-r from-blue-500 to-purple-600">
  Gradient background!
</div>
```

### Text Gradients
```
bg-gradient-to-r from-blue-600 to-purple-600  = Create gradient
bg-clip-text                                  = Clip to text
text-transparent                              = Make text transparent
```

**Example:**
```html
<span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
  Gradient text!
</span>
```

---

## ✨ Hover Effects

Add `hover:` before any class to apply it on hover:

```
hover:bg-blue-600      = Blue background on hover
hover:text-white       = White text on hover
hover:scale-105        = Slightly larger on hover
hover:shadow-lg        = Larger shadow on hover
```

**Example:**
```html
<button class="bg-blue-500 hover:bg-blue-700 text-white">
  Hover me!
</button>
```

---

## 🎬 Animations

```
animate-pulse       = Pulsing animation
animate-bounce      = Bouncing animation
animate-spin        = Spinning animation
transition-all      = Smooth transition for all properties
duration-300        = Animation duration (300ms)
```

---

## 🔧 Common Combinations

### Center a Container
```html
<div class="max-w-4xl mx-auto text-center">
  Centered content
</div>
```

### Card with Shadow
```html
<div class="bg-white rounded-lg shadow-lg p-6">
  Card content
</div>
```

### Button
```html
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click me
</button>
```

### Gradient Button
```html
<button class="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded">
  Gradient Button
</button>
```

### Flex Container (items in a row)
```html
<div class="flex gap-4 justify-center items-center">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

---

## 💡 Quick Tips

1. **Start simple:** Use basic classes first, add fancy effects later
2. **Mobile first:** Design for mobile, then add `md:` and `lg:` for larger screens
3. **Use consistent spacing:** Stick to multiples of 4 (4, 8, 12, 16, 20, 24)
4. **Test colors:** Try different color numbers (400, 500, 600) to find what looks best
5. **Copy and modify:** Find something you like and change one class at a time

---

## 🆘 Troubleshooting

**Text too small?** 
- Change `text-sm` → `text-base` or `text-lg`

**Too much space?**
- Change `p-8` → `p-4` or `p-2`

**Not enough space?**
- Change `p-4` → `p-6` or `p-8`

**Color too dark?**
- Change `blue-700` → `blue-500` or `blue-400`

**Color too light?**
- Change `blue-400` → `blue-600` or `blue-700`

**Not centered?**
- Add `mx-auto` for horizontal centering
- Add `text-center` for text centering

---

## 📚 Learn More

Official Tailwind Docs: https://tailwindcss.com/docs

**Most useful sections:**
- Colors: https://tailwindcss.com/docs/customizing-colors
- Spacing: https://tailwindcss.com/docs/padding
- Typography: https://tailwindcss.com/docs/font-size

---

Happy styling! 🎨


