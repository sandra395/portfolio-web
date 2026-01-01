/**
 * 📧 CONTACT SECTION - SIMPLIFIED VERSION
 *
 * Shows your contact information and social media buttons.
 */


// Import the button component (pre-made button style)
import { Button } from "@/components/ui/button";
// Import container that wraps sections
import { SectionContainer } from "@/components/common/SectionContainer";
// Import your contact links from data file
import { CONTACT_LINKS } from "@/data/contact-links";
import { ContactLink } from "@/types/portfolio";

// Main Contact Section
export function ContactSection() {
  return (
    // Section container with light blue/purple background
    // bg-gradient-to-br = background gradient from top-left to bottom-right
    // from-blue-50/30 = start with light blue (30% opacity)
    // to-purple-50/30 = end with light purple (30% opacity)
    <SectionContainer id="contact" className="bg-gradient-to-br from-blue-50/30 to-purple-50/30">
      
      {/* Center everything and limit width */}
      {/* max-w-4xl = maximum width, mx-auto = center horizontally, text-center = center text */}
      <div className="max-w-4xl mx-auto text-center">
        
        {/* White box with rounded corners */}
        {/* bg-white/60 = white background (60% opacity) */}
        {/* rounded-3xl = very rounded corners */}
        {/* p-8 = padding (space inside) on mobile */}
        {/* md:p-12 = more padding on medium screens and larger */}
        {/* shadow-sm = small shadow */}
        {/* space-y-8 = vertical space between children */}
        <div className="bg-white/60 rounded-3xl p-8 md:p-12 shadow-sm space-y-8">
          
          {/* TITLE AND DESCRIPTION */}
          <ContactHeader />
          
          {/* CONTACT BUTTONS */}
          <ContactButtons />
          
        </div>
      </div>
    </SectionContainer>
  );
}

/**
 * 📝 CONTACT HEADER
 * Shows the "Let's Connect!" title and description
 */
function ContactHeader() {
  return (
    // space-y-6 = vertical space between items
    <div className="space-y-6">
      
      {/* MAIN TITLE */}
      {/* text-4xl = extra large text on mobile */}
      {/* sm:text-5xl = even larger on small screens and up */}
      {/* font-bold = bold text */}
      <h2 className="text-4xl sm:text-5xl font-bold">
        
        {/* Gradient colored text (blue to purple) */}
        {/* bg-gradient-to-r = gradient left to right */}
        {/* from-blue-600 = start with blue */}
        {/* via-purple-600 = middle purple */}
        {/* to-blue-800 = end with dark blue */}
        {/* bg-clip-text = clip background to text */}
        {/* text-transparent = make text transparent to show gradient */}
        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
          Let's Connect!
        </span>
      </h2>
      
      {/* DESCRIPTION TEXT */}
      <div className="space-y-3">
        {/* text-lg = large text on mobile */}
        {/* sm:text-xl = extra large on small screens and up */}
        {/* text-slate-700 = dark gray text */}
        {/* font-medium = medium font weight */}
        {/* max-w-2xl = maximum width */}
        {/* mx-auto = center horizontally */}
        <p className="text-lg sm:text-xl text-slate-700 font-medium max-w-2xl mx-auto">
          Open to job opportunities, learning and connecting with others!
        </p>
        
        {/* Decorative line under text */}
        {/* w-20 = width, h-1 = height */}
        {/* bg-gradient-to-r = gradient left to right */}
        {/* rounded-full = fully rounded ends */}
        {/* mx-auto = center horizontally */}
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
      </div>
    </div>
  );
}

/**
 * 🔘 CONTACT BUTTONS
 * Shows email and social media buttons
 */
function ContactButtons() {
  // Find the email link from your data
  const emailLink = CONTACT_LINKS.find(link => link.type === 'email');
  // Find all social media links from your data
  const socialLinks = CONTACT_LINKS.filter(link => link.type === 'social');

  return (
    <div>
      {/* Container for buttons */}
      {/* flex = arrange items in a row */}
      {/* flex-wrap = wrap to next line if needed */}
      {/* justify-center = center horizontally */}
      {/* gap-4 = space between buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        
        {/* EMAIL BUTTON (if you have one) */}
        {emailLink && (
          <ContactButton 
            link={emailLink} 
            variant="primary"  // primary = blue/purple gradient
          />
        )}
        
        {/* SOCIAL MEDIA BUTTONS */}
        {/* .map() loops through each social link and creates a button */}
        {socialLinks.map((link) => (
          <ContactButton 
            key={link.id}  // unique identifier for React
            link={link} 
            variant="secondary"  // secondary = white with border
          />
        ))}
      </div>
      
      {/* DECORATIVE DOTS */}
      <div className="flex justify-center pt-6">
        <div className="flex space-x-2">
          {/* Three animated dots */}
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

/**
 * 🔘 INDIVIDUAL BUTTON
 * Creates one contact button (email or social media)
 */
function ContactButton({ 
  link, 
  variant,
}: { 
  link: ContactLink; 
  variant: 'primary' | 'secondary';  // primary = colorful, secondary = white
}) {
  // Get the icon for this button (like LinkedIn icon, GitHub icon, etc.)
  const IconComponent = link.icon;
  
  // Choose button style based on variant
  // Primary (email) = blue/purple gradient with white text
  // Secondary (social) = white background with border
  const buttonClasses = variant === 'primary' 
    ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl border-0"
    : "bg-white/80 border-2 border-blue-200/50 hover:border-blue-300/50 hover:bg-white/90 text-slate-700 hover:text-slate-900 shadow-sm hover:shadow-md";

  return (
    <Button 
      size="lg"  // large button
      variant="ghost"  // ghost variant (we override with our own classes)
      className={`gap-2 transition-all duration-300 hover:scale-105 ${buttonClasses}`}
      asChild  // makes Button render as the child element (the <a> tag)
    >
      {/* Actual link */}
      <a
        href={link.url}  // where the link goes
        target={link.type === 'email' ? '_self' : '_blank'}  // email opens in same tab, social in new tab
        rel={link.type === 'email' ? undefined : 'noopener noreferrer'}  // security for external links
      >
        {/* Icon (like LinkedIn logo) */}
        <IconComponent className="w-5 h-5" />
        {/* Button text (like "LinkedIn") */}
        {link.label}
      </a>
    </Button>
  );
}
