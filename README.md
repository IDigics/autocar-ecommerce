# 🚗 AutoCar'z - Luxury Automotive Website

A sophisticated luxury car dealership website built with Next.js 15, featuring elegant design, modern UI components, and comprehensive automotive business functionality.

## ✨ Features

### 🎨 **Design & UI**

- **Luxury Brand Identity** with gold (#FFD700) and navy (#0D1B2A) color scheme
- **Responsive Design** optimized for all devices
- **Modern Interface** with smooth animations and transitions
- **Professional Typography** with carefully selected fonts
- **Glass-morphism Effects** for premium visual appeal

### 🚙 **Automotive Services**

- **Vehicle Catalog** (New & Used luxury vehicles)
- **Financing Solutions** with partner integration
- **Trade-in Services** for vehicle exchange
- **Maintenance & After-sales** support
- **Showroom Information** and appointments

### 🔒 **Legal & Compliance**

- **GDPR Compliant** privacy policy
- **Interactive Cookie Policy** with preference management
- **Comprehensive Terms of Service** for automotive business
- **Professional Legal Framework** for luxury car sales

### 🔍 **User Experience**

- **Advanced Search Bar** with ⌘K shortcut
- **Smooth Scroll Navigation** between sections
- **Interactive Components** with hover effects
- **Accessibility Features** with proper ARIA labels
- **French Localization** for target market

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons (Font Awesome)
- **Deployment**: Vercel Ready

## 📁 Project Structure

```
autocar-ecommerce/
├── app/
│   ├── components/
│   │   ├── Header.tsx          # Navigation with search
│   │   └── Footer.tsx          # Automotive-focused footer
│   ├── terms/
│   │   └── page.tsx           # Terms of service
│   ├── privacy/
│   │   └── page.tsx           # Privacy policy (GDPR)
│   ├── cookies/
│   │   └── page.tsx           # Cookie policy
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Home page
│   └── globals.css            # Global styles
├── public/                    # Static assets
└── README.md                  # Project documentation
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

- TypeScript for type safety
- Consistent component structure
- Descriptive variable names
- Comprehensive comments

### **Component Organization**

- Reusable UI components in `/components`
- Page-specific components in respective directories
- Shared utilities and hooks

### **Styling Conventions**

- Tailwind CSS classes
- Consistent spacing (4, 6, 8, 12, 16)
- Mobile-first responsive design
- Hover and focus states for accessibility

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

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

**Built with ❤️ for luxury automotive excellence**
