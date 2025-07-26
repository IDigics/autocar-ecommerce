/**
 * PageLayout Component
 *
 * PURPOSE:
 * Advanced page layout template with hero section and optional contact section.
 * More flexible than SimplePage, supporting custom hero configurations and contact display.
 *
 * FEATURES:
 * - Optional configurable hero section
 * - Automatic contact section inclusion (toggleable)
 * - Flexible contact section customization
 * - Professional content spacing and layout
 * - Responsive design with consistent styling
 *
 * USAGE:
 * - Complex content pages requiring custom heroes
 * - Pages needing integrated contact sections
 * - Landing pages with specific hero requirements
 * - Service pages with contact integration
 *
 * DESIGN:
 * - Light background (#F8F8F5) for content
 * - Consistent spacing and maximum width
 * - Integrated hero and contact components
 * - Professional layout structure
 * - Responsive padding and margins
 */

import { ReactNode } from "react";
import PageHero from "./PageHero";
import ContactSection from "./ContactSection";

interface PageLayoutProps {
  hero?: {
    title: string;
    description: string;
    icon?: string;
    features?: Array<{ text: string; color?: string }>;
  };
  children: ReactNode;
  showContact?: boolean;
  contactProps?: {
    title?: string;
    description?: string;
    contacts?: Array<{ icon: string; title: string; value: string }>;
    links?: Array<{ href: string; text: string }>;
  };
}

export default function PageLayout({
  hero,
  children,
  showContact = true,
  contactProps = {},
}: PageLayoutProps) {
  return (
    <>
      {hero && <PageHero {...hero} />}

      <main className="bg-[#F8F8F5] py-16">
        <div className="max-w-6xl mx-auto px-6">
          {children}

          {showContact && (
            <div className="mt-8">
              <ContactSection {...contactProps} />
            </div>
          )}
        </div>
      </main>
    </>
  );
}
