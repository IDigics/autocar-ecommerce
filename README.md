# 🚗 AutoCar'z - Luxury Automotive E-Commerce

**AutoCar'z** is a premium luxury car dealership website built with modern web technologies. Experience elegance, performance, and exceptional service in the world of luxury automobiles.

## ✨ Features

- **🎨 Luxury Design**: Premium UI/UX with gold and navy color scheme
- **📱 Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **🚀 Smooth Scrolling**: Seamless navigation between sections
- **⚡ Fast Performance**: Built with Next.js for optimal speed
- **🎯 Modern Architecture**: Clean, maintainable code structure
- **🌟 Interactive Elements**: Hover effects and smooth animations

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Image Optimization**: Next.js Image Component
- **Icons**: Custom SVG icons
- **Fonts**: Optimized web fonts

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (version 18.17 or higher)
- **npm**, **yarn**, **pnpm**, or **bun** package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/IDigics/autocar-ecommerce.git
   cd autocar-ecommerce
   ```

2. **Install dependencies**

   ```bash
   # Using npm
   npm install

   # Using yarn
   yarn install

   # Using pnpm
   pnpm install

   # Using bun
   bun install
   ```

3. **Run the development server**

   ```bash
   # Using npm
   npm run dev

   # Using yarn
   yarn dev

   # Using pnpm
   pnpm dev

   # Using bun
   bun dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the website in action.

### Build for Production

```bash
# Build the application
npm run build

# Start the production server
npm start
```

## 📁 Project Structure

```
autocar-ecommerce/
├── app/
│   ├── components/
│   │   ├── Header.tsx          # Navigation header with smooth scroll
│   │   └── Footer.tsx          # Site footer with links
│   ├── globals.css             # Global styles and Tailwind imports
│   ├── layout.tsx              # Root layout component
│   └── page.tsx                # Homepage with hero, features, and benefits
├── public/
│   ├── logo.png                # AutoCar'z brand logo
│   ├── hero.jpeg               # Hero section background
│   └── ...                     # Other static assets
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
└── package.json                # Dependencies and scripts
```

## 🎨 Design System

### Color Palette

```css
/* Primary Colors */
--navy-dark: #0D1B2A      /* Main backgrounds and text */
--cream-light: #F8F8F5     /* Section backgrounds */
--gold-primary: #FFD700    /* Accent and highlights */
--gold-secondary: #E6B800  /* Gradient variations */
--gray-medium: #71797E     /* Secondary text */
--gray-accent: #718396     /* Muted elements */
```

### Typography

- **Headings**: Bold, large sizes with premium spacing
- **Body Text**: Clean, readable fonts with proper contrast
- **Accent Text**: Gold highlights for brand elements

## 🔧 Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint for code quality

# Type Checking
npx tsc --noEmit     # Check TypeScript types
```

### Key Components

#### Header Navigation

- Fixed header with smooth scroll functionality
- Responsive design with mobile menu
- Gold accent hover effects

#### Hero Section

- Full-screen background with overlay
- Responsive text scaling
- Call-to-action button with animations

#### Features Section

- Six service cards in responsive grid
- Hover effects and shadows
- Icon integration with descriptions

#### Win-Win Benefits

- Two-column layout showcasing mutual value
- Checkmark icons with bullet points
- Gradient background cards

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👨‍💻 Author

**IDigics**

- GitHub: [@IDigics](https://github.com/IDigics)
- Project: [AutoCar'z E-Commerce](https://github.com/IDigics/autocar-ecommerce)

---

**AutoCar'z** - _Conduisez l'exception, Ressentez la passion, Vivez AutoCar'z_ 🚗✨
