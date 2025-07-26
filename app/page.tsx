/**
 * AUTOCARZ HOMEPAGE - MAIN LANDING PAGE
 *
 * ===== PAGE OVERVIEW =====
 * This is the primary landing page for AutoCar'z luxury car dealership.
 * Designed to showcase premium automotive excellence with elegant French copy.
 *
 * ===== LAYOUT STRUCTURE =====
 * 1. Header Navigation (imported component)
 * 2. Hero Section - Full-screen with background image
 * 3. Services/Features Section - 3-column grid layout
 * 4. Advantages Section - Key selling points
 * 5. Footer (imported component)
 *
 * ===== DESIGN SYSTEM =====
 * Colors:
 * - Primary: #0D1B2A (Dark Navy) - Used for headings and primary text
 * - Accent: #FFD700 (Gold) - Used for highlights, CTAs, and brand elements
 * - Background: #F8F8F5 (Light Cream) - Section backgrounds
 * - Text: #71797E (Medium Gray) - Secondary text and descriptions
 *
 * Typography:
 * - Headlines: Bold, large sizes (text-4xl to text-7xl)
 * - Body: Regular weight, comfortable reading sizes
 * - French localization throughout
 *
 * ===== RESPONSIVE DESIGN =====
 * - Mobile-first approach with md: and lg: breakpoints
 * - Grid layouts adapt from 1 column (mobile) to 3 columns (desktop)
 * - Text sizes scale appropriately across devices
 * - Full-screen hero adjusts for different viewport sizes
 *
 * ===== NAVIGATION FEATURES =====
 * - Smooth scrolling to sections via Header component
 * - Section IDs: "hero", "services", "advantages"
 * - scroll-mt-20 accounts for fixed header height
 *
 * ===== PERFORMANCE OPTIMIZATIONS =====
 * - Next.js Image component with priority loading for hero image
 * - Optimized image with brightness overlay for text readability
 * - CSS-only animations and transitions for smooth UX
 */
import HomeCom from "@/components/HomeCom";

export default function Home() {
  return <HomeCom />;
}
