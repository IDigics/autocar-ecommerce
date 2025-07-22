# 🚗 AutoCar'z - Luxury Automotive Website

A sophisticated luxury car dealership website built with Next.js 15, featuring elegant design, simplified components, and comprehensive automotive business functionality.

## ✨ Features

### 🎨 **Design & UI**

- **Luxury Brand Identity** with gold (#FFD700) and navy (#0D1B2A) color scheme
- **Responsive Design** optimized for all devices
- **Clean & Simple Components** with streamlined code architecture
- **Professional Typography** with carefully selected fonts
- **Consistent Layout System** with global Header/Footer

### 🚙 **Automotive Services**

- **Vehicle Showcase** with elegant presentation
- **Service Information** clearly structured
- **Professional Contact** forms and information
- **Business Information** and company details

### 🔒 **Legal & Compliance**

- **GDPR Compliant** privacy policy
- **Interactive Cookie Policy** with browser management guides
- **Comprehensive Terms of Service** with tabbed navigation
- **Professional Legal Framework** for automotive business

### 🔍 **User Experience**

- **Global Navigation** with Header/Footer on all pages
- **Smooth Scroll Navigation** between sections
- **Interactive Components** with clean hover effects
- **Accessibility Features** with proper semantic markup
- **French Localization** for target market

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons (Font Awesome)
- **Architecture**: Simplified component structure
- **Deployment**: Vercel Ready

## 📁 Project Structure

```
autocar-ecommerce/
├── app/
│   ├── components/              # Simplified reusable components
│   │   ├── Header.tsx          # Global navigation (in layout)
│   │   ├── Footer.tsx          # Global footer (in layout)
│   │   ├── PageLayout.tsx      # Content page wrapper
│   │   ├── PageHero.tsx        # Hero section component
│   │   ├── ContactSection.tsx  # Contact information
│   │   ├── ContentSection.tsx  # Content wrapper
│   │   └── CardList.tsx        # Card grid component
│   ├── terms/
│   │   └── page.tsx           # Terms of service (uses PageLayout)
│   ├── privacy/
│   │   └── page.tsx           # Privacy policy (uses PageLayout)
│   ├── cookies/
│   │   └── page.tsx           # Cookie policy (uses PageLayout)
│   ├── layout.tsx             # Root layout with global Header/Footer
│   ├── page.tsx               # Home page (custom layout)
│   └── globals.css            # Global styles
├── public/                    # Static assets
└── README.md                  # Project documentation
```

## 🎯 Architecture Improvements

### **Global Layout System**

- **Header & Footer** included in root layout for consistency
- **PageLayout** component for standardized content pages
- **Clean separation** between homepage and content pages

### **Simplified Components**

- **Removed excessive comments** for cleaner code
- **Eliminated redundant code** patterns
- **Streamlined prop handling** with better defaults
- **Consistent component structure** across the project

### **Component Hierarchy**

```
Root Layout (layout.tsx)
├── Header (global)
├── Page Content:
│   ├── Homepage (custom layout)
│   └── Content Pages (PageLayout wrapper)
│       ├── Hero Section
│       ├── Main Content
│       └── Contact Section (optional)
└── Footer (global)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/IDigics/autocar-ecommerce.git
cd autocar-ecommerce
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Design System

### **Colors**

- **Primary Gold**: `#FFD700` - Luxury accent color
- **Secondary Gold**: `#E6B800` - Hover states
- **Navy Blue**: `#0D1B2A` - Primary text and headers
- **Light Gray**: `#71797E` - Secondary text
- **Background**: `#F8F8F5` - Main background

### **Typography**

- **Headings**: Bold, luxury-focused hierarchy
- **Body Text**: Clean, readable fonts
- **Interactive Elements**: Proper hover states

### **Components**

- **Responsive Grid Layouts**
- **Card-based Information Display**
- **Interactive Forms**
- **Modern Button Styles**

## 📝 Development Guidelines

### **Code Style**

- **Clean TypeScript** with simplified components
- **Consistent component structure** across the project
- **Meaningful variable names** without excessive verbosity
- **Minimal but effective comments** focusing on business logic

### **Component Organization**

- **Global components** in root layout (Header, Footer)
- **Reusable UI components** in `/components` directory
- **PageLayout wrapper** for standardized content pages
- **Page-specific logic** in respective route directories

### **Styling Conventions**

- **Tailwind CSS classes** with consistent patterns
- **Brand color variables** (`#FFD700`, `#0D1B2A`, `#F8F8F5`, `#71797E`)
- **Mobile-first responsive design** with `md:` and `lg:` breakpoints
- **Consistent spacing scale** (2, 4, 6, 8, 12, 16)

### **Architecture Principles**

- **DRY (Don't Repeat Yourself)** - Header/Footer in layout, reusable components
- **Single Responsibility** - Each component has a clear purpose
- **Composition over Inheritance** - PageLayout wraps content components
- **Simplified prop patterns** with sensible defaults

## 🚀 Deployment

### **Vercel (Recommended)**

1. Connect your GitHub repository to Vercel
2. Configure build settings (auto-detected)
3. Deploy with automatic SSL and CDN

### **Manual Deployment**

```bash
npm run build
npm start
```

## 🔧 Configuration

### **Environment Variables**

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
# Add other environment variables as needed
```

### **Tailwind Configuration**

Custom configurations in `tailwind.config.ts` for AutoCar'z brand colors and fonts.

## 📦 Component Documentation

### **Global Components**

- **Header**: Fixed navigation with logo, search, and menu (in layout.tsx)
- **Footer**: Company information and links (in layout.tsx)

### **Layout Components**

- **PageLayout**: Wrapper for content pages with hero, main, and contact sections
- **PageHero**: Standardized hero banners for content pages

### **Content Components**

- **ContentSection**: Wrapper for content blocks with titles and icons
- **CardList**: Flexible grid layout for card-based information
- **ContactSection**: Contact information with customizable content

## 🚀 Recent Improvements

### **Component Simplification**

- ✅ Removed excessive comments and documentation
- ✅ Simplified prop handling with better defaults
- ✅ Streamlined component logic and structure
- ✅ Eliminated redundant code patterns

### **Architecture Optimization**

- ✅ Moved Header/Footer to global layout
- ✅ Cleaned up duplicate imports across pages
- ✅ Improved component reusability
- ✅ Removed unnecessary `"use client"` directives

### **Code Quality**

- ✅ Consistent coding patterns
- ✅ Better TypeScript usage
- ✅ Cleaner file structure
- ✅ More maintainable codebase

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

**Built with ❤️ for luxury automotive excellence | Simplified & Optimized Architecture**
