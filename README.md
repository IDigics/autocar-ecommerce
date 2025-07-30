


#### 1. Build the Image
```bash
docker build -t nextjs-app .
```
- `-t nextjs-app` names your image
- `.` looks for Dockerfile in current directory

#### 2. Run the Container
```bash
docker run -d -p 3000:3000 --name my-next-app nextjs-app
```
- `-d` runs in background (detached)
- `-p 4000:3000` maps host port 4000 → container port 3000 (change first number)
- `--name` gives your container a name

#### 3. Check Running Containers
```bash
docker ps
```

#### 4. Stop Container
```bash
docker stop my-next-app
```

#### 5. Restart Container
```bash
docker start my-next-app
```

#### 6. View Logs
```bash
docker logs -f my-next-app
```
- `-f` streams live logs

---

### Cleanup Commands

#### Remove Container
```bash
docker rm my-next-app
```

#### Remove Image
```bash
docker rmi nextjs-app
```

#### Full Cleanup (Stopped Containers + Dangling Images)
```bash
docker system prune
```
Add `-f` to skip confirmation

---

### Port Customization Examples
| Command | Host Port | Container Port |
|---------|-----------|----------------|
| `-p 3000:3000` | 3000 | 3000 |
| `-p 4000:3000` | 4000 | 3000 |
| `-p 8080:3000` | 8080 | 3000 |

---



# 🚗 AutoCar'z - Luxury Automotive Website

A sophisticated luxury car dealership website built with Next.js 15, featuring elegant design and modular components for the luxury automotive market.

## ✨ Features

### 🎨 **Design & UI**

- **Luxury Brand Identity** with gold (#FFD700) and navy (#0D1B2A) color scheme
- **Responsive Design** optimized for all devices with mobile-first approach
- **Professional Typography** with optimized font loading
- **Consistent Layout System** with global Header/Footer
- **Auto-play Carousel** with hero sections for vehicle showcases

### 🚙 **Automotive Business**

- **Home Page** with interactive vehicle showcase and hero carousel
- **Legal Pages** with comprehensive terms, privacy, and cookie policies
- **Content Pages** using simplified "under construction" layouts
- **Professional Contact** forms and service information

### 🛠️ **Technical Features**

- **Modern React Patterns** with TypeScript and App Router
- **Performance Optimizations** with image optimization
- **SEO Optimization** with proper metadata
- **French Localization** for target market

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router) with React 19
- **Language**: TypeScript with strict type checking
- **Styling**: Tailwind CSS with custom AutoCar'z design tokens
- **Architecture**: Modular component system
- **Deployment**: Vercel Ready with performance optimizations

## 📁 Project Structure

```
autocar-ecommerce/
├── app/
│   ├── about/page.tsx          # About page (SimplePage)
│   ├── contact/page.tsx        # Contact page (SimplePage)
│   ├── financing/page.tsx      # Financing page (SimplePage)
│   ├── news/page.tsx           # News page (SimplePage)
│   ├── trade-in/page.tsx       # Trade-in page (SimplePage)
│   ├── vehicles/page.tsx       # Vehicles page (SimplePage)
│   ├── terms/page.tsx          # Terms of service (PageLayout)
│   ├── privacy/page.tsx        # Privacy policy (PageLayout)
│   ├── cookies/page.tsx        # Cookie policy (PageLayout)
│   ├── layout.tsx              # Root layout with Header/Footer
│   ├── page.tsx                # Home page with hero carousel
│   └── globals.css             # Global styles
├── components/                 # Reusable components
│   ├── Header.tsx              # Global navigation
│   ├── Footer.tsx              # Global footer
│   ├── HomeCom.tsx             # Home page component
│   ├── HeroCarousel.tsx        # Hero carousel component
│   ├── SimplePage.tsx          # Under construction layout
│   ├── PageLayout.tsx          # Complex page layout
│   ├── PageHero.tsx            # Hero section component
│   ├── ContactSection.tsx      # Contact information
│   ├── ContentSection.tsx      # Content wrapper
│   ├── CardList.tsx            # Card grid component
│   ├── Termspage.tsx           # Terms page component
│   ├── PrivacyPage.tsx         # Privacy page component
│   └── Cookie.tsx              # Cookie page component
├── public/                     # Static assets and images
└── README.md                   # Project documentation
```

## 🎯 Component Architecture

### **Core Components**

- **SimplePage**: Standardized "under construction" layout for content pages
- **PageLayout**: Advanced layout with hero sections and contact integration
- **HomeCom**: Main homepage component with vehicle showcase
- **HeroCarousel**: Auto-playing carousel for vehicle displays

### **Layout Components**

- **Header**: Global navigation with brand identity
- **Footer**: Company information and legal links
- **PageHero**: Hero sections with customizable icons and features
- **ContactSection**: Contact information display

### **Content Components**

- **ContentSection**: Flexible content wrapper with icons
- **CardList**: Grid-based card display system

### **Legal Pages**

- **Termspage**: Interactive terms of service with tabbed navigation
- **PrivacyPage**: GDPR-compliant privacy policy
- **Cookie**: Cookie policy with browser management guides

## 🚀 Getting Started

### **Installation**

```bash
# Clone the repository
git clone [repository-url]
cd autocar-ecommerce

# Install dependencies
npm install

# Run development server
npm run dev
```

### **Development**

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Type checking
npm run type-check
```

## 🔧 Configuration

### **Environment Variables**

Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### **Tailwind Configuration**

Custom design tokens are configured in `tailwind.config.ts`:

- **Gold Brand Color**: #FFD700
- **Navy Blue**: #0D1B2A
- **Light Background**: #F8F8F5

## 📱 Pages Overview

### **Active Pages**

- **Home** (`/`) - Full-featured luxury car showcase
- **About** (`/about`) - Company information (SimplePage)
- **Contact** (`/contact`) - Contact information (SimplePage)
- **Financing** (`/financing`) - Financial services (SimplePage)
- **News** (`/news`) - Automotive news (SimplePage)
- **Trade-in** (`/trade-in`) - Vehicle trade-in services (SimplePage)
- **Vehicles** (`/vehicles`) - Vehicle inventory (SimplePage)

### **Legal Pages**

- **Terms** (`/terms`) - Interactive terms of service
- **Privacy** (`/privacy`) - GDPR-compliant privacy policy
- **Cookies** (`/cookies`) - Cookie management guide

## 🎨 Design System

### **Color Palette**

- **Primary Gold**: `#FFD700` - Brand accent and highlights
- **Navy Blue**: `#0D1B2A` - Primary text and headers
- **Light Background**: `#F8F8F5` - Page backgrounds
- **White**: `#FFFFFF` - Card backgrounds
- **Gray**: `#71797E` - Secondary text

### **Typography**

- **Headings**: Bold weights with gradient text effects
- **Body Text**: Readable font sizes with proper line heights
- **Professional**: Clean, modern typography hierarchy

## 📦 Deployment

### **Vercel (Recommended)**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### **Manual Deployment**

```bash
# Build production version
npm run build

# Export static files (if needed)
npm run export
```

## 🔄 Project Status

- ✅ **Core Architecture**: Stable component system
- ✅ **Home Page**: Full-featured luxury car showcase
- ✅ **Legal Pages**: Complete terms, privacy, and cookie policies
- ✅ **Navigation**: Global header and footer system
- ⏳ **Content Pages**: Currently using SimplePage for development
- ⏳ **Features**: Ready for content expansion

## 📝 License

This project is proprietary software for AutoCar'z luxury automotive business.

---

**AutoCar'z** - Luxury Automotive Excellence

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
- **Generic UI components** in `/components` directory for reusability
- **Page-specific imports** of generic components as needed
- **PageLayout wrapper** for standardized content pages
- **Modular architecture** enabling easy maintenance and scaling

### **Styling Conventions**

- **Tailwind CSS classes** with consistent patterns
- **Brand color variables** (`#FFD700`, `#0D1B2A`, `#F8F8F5`, `#71797E`)
- **Mobile-first responsive design** with `md:` and `lg:` breakpoints
- **Consistent spacing scale** (2, 4, 6, 8, 12, 16)

### **Architecture Principles**

- **DRY (Don't Repeat Yourself)** - Generic components eliminate code duplication
- **Single Responsibility** - Each component has a clear, focused purpose
- **Composition over Inheritance** - Components compose together naturally
- **Type Safety** - TypeScript interfaces ensure reliable component contracts
- **Performance Optimization** - Lazy loading and efficient rendering patterns

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

### **Complete Component Library**

AutoCar'z features a comprehensive, well-documented component library with 7 core generic components plus layout and utility components. Each component includes detailed documentation explaining its purpose, features, and usage.

**📋 [View Complete Component Documentation](./COMPONENT_DOCUMENTATION.md)**

### **Component Categories**

#### **🏗️ Layout Components**

- **Header**: Global navigation with search and responsive menu
- **Footer**: Company information, links, and contact details
- **SimplePage**: Standardized page layout template
- **PageLayout**: Advanced layout with configurable hero and contact

#### **🎯 Content Components**

- **StatsGrid**: Statistical information display with responsive grid
- **VehicleCard**: Luxury vehicle showcases for new/used inventory
- **NewsCard**: Article previews with category badges and excerpts
- **ServiceCard**: Professional service offerings with feature lists
- **FeatureGrid**: Flexible feature presentation (2/3/4 columns)

#### **⚡ Interactive Components**

- **CTASection**: Call-to-action sections with primary/secondary buttons
- **FeaturedSection**: Hero-style featured content with prominent CTA

### **Component Features**

- **📱 Fully Responsive**: Mobile-first design with professional breakpoints
- **🎨 Brand Consistent**: AutoCar'z gold (#FFD700) and navy (#0D1B2A) theme
- **⚡ TypeScript**: Comprehensive interfaces for type safety
- **📝 Well Documented**: Each component includes purpose, features, and usage
- **🔧 Highly Configurable**: Flexible props for different use cases
- **♿ Accessible**: Proper semantic markup and ARIA support

### **Quick Component Reference**

For detailed component documentation including props, usage examples, and implementation details, see the [Complete Component Documentation](./COMPONENT_DOCUMENTATION.md).

## 🚀 Recent Improvements

### **Comprehensive Documentation**

- ✅ Added detailed component documentation with purpose and usage guidelines
- ✅ Created comprehensive component library reference
- ✅ Documented all interfaces, props, and implementation patterns
- ✅ Established clear component categorization and relationships

### **Generic Component Architecture**

- ✅ Created 7 reusable generic components with TypeScript interfaces
- ✅ Implemented modular design patterns for maximum code reusability
- ✅ Added shadcn/ui integration with custom AutoCar'z branding
- ✅ Established consistent component props and styling patterns

### **Content Development**

- ✅ Replaced "under construction" placeholders with professional content
- ✅ Developed complete financing, news, maintenance, testimonials, and vehicle pages
- ✅ Added interactive elements including forms, calculators, and booking systems
- ✅ Implemented newsletter signup and customer testimonial systems

### **Performance & Optimization**

- ✅ Windows development environment optimization with webpack cache
- ✅ Image optimization and lazy loading implementation
- ✅ Mobile-first responsive design with optimized breakpoints
- ✅ SEO optimization with proper metadata and Open Graph tags

### **Code Quality & Maintainability**

- ✅ TypeScript interfaces for all generic components
- ✅ Consistent coding patterns and component structure
- ✅ Improved component reusability across pages
- ✅ Enhanced documentation and code organization

## 🎯 Usage Examples

### **Using Generic Components**

````tsx
import { StatsGrid } from "@/components/StatsGrid";
### **Documentation Structure**

- **Main README**: Project overview, setup, and architecture
- **Component Documentation**: Detailed component reference with examples
- **Code Comments**: Inline documentation explaining component purpose and features
- **TypeScript Interfaces**: Self-documenting props and data structures

### **Usage Examples**

For complete usage examples with props and implementation details, see the [Component Documentation](./COMPONENT_DOCUMENTATION.md).

**Quick Example**:
```tsx
import { StatsGrid, VehicleCard, CTASection } from '@/components'

export default function ExamplePage() {
  return (
    <SimplePage title="Example" description="Component showcase">
      <StatsGrid title="Our Success" stats={statsData} />
      <VehicleCard vehicle={vehicleData} type="new" />
      <CTASection
        title="Get Started Today"
        description="Discover your perfect vehicle"
        buttons={[
          { text: "Browse Inventory", type: "primary" },
          { text: "Contact Us", type: "secondary" }
        ]}
      />
    </SimplePage>
  )
}
````

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

**Built with ❤️ for luxury automotive excellence | Comprehensive Component Documentation | Professional Development Standards**
