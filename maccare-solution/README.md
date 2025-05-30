# MacCare Solution Website

A pixel-perfect clone of the MacCare Solution website (https://maccaresolution.com/) built with React, TypeScript, and Vite.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Interactive Components**:
  - Hero slider with auto-play and navigation
  - Testimonials carousel
  - FAQ accordion
  - Mobile-friendly navigation with hamburger menu
- **Modern UI/UX**: Clean, professional design matching the original website
- **Performance Optimized**: Built with Vite for fast development and production builds
- **TypeScript**: Full type safety throughout the application
- **Component-Based Architecture**: Modular, reusable React components

## Components

- **Header**: Navigation with contact info, social links, and mobile menu
- **HeroSlider**: Auto-playing image slider with call-to-action buttons
- **AboutSection**: Company information with features and statistics
- **ServicesSection**: Service offerings with pricing and descriptions
- **WhyChooseUs**: Reasons to choose MacCare Solution with achievements
- **Testimonials**: Customer reviews carousel with ratings
- **FAQ**: Frequently asked questions with accordion functionality
- **Footer**: Contact information, links, and social media

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd maccare-solution
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Header.css      # Header styles
│   ├── HeroSlider.tsx  # Hero section slider
│   ├── HeroSlider.css  # Hero slider styles
│   ├── AboutSection.tsx # About us section
│   ├── AboutSection.css # About section styles
│   ├── ServicesSection.tsx # Services grid
│   ├── ServicesSection.css # Services styles
│   ├── WhyChooseUs.tsx # Why choose us section
│   ├── WhyChooseUs.css # Why choose us styles
│   ├── Testimonials.tsx # Customer testimonials
│   ├── Testimonials.css # Testimonials styles
│   ├── FAQ.tsx         # FAQ accordion
│   ├── FAQ.css         # FAQ styles
│   ├── Footer.tsx      # Footer component
│   └── Footer.css      # Footer styles
├── App.tsx             # Main app component
├── App.css             # Global app styles
├── index.css           # Global CSS reset and base styles
└── main.tsx            # App entry point

public/
└── assets/
    └── images/         # Image assets (placeholder)
```

## Technologies Used

- **React 19**: Latest React with modern features
- **TypeScript**: Type-safe JavaScript
- **Vite**: Fast build tool and development server
- **React Icons**: Icon library for consistent iconography
- **CSS3**: Modern CSS with Flexbox and Grid
- **ESLint**: Code linting and formatting

## Features Implemented

✅ Responsive header with navigation and contact info
✅ Auto-playing hero slider with navigation controls
✅ About section with company information and statistics
✅ Services section with detailed service cards
✅ Why choose us section with achievements
✅ Customer testimonials carousel
✅ FAQ section with accordion functionality
✅ Comprehensive footer with contact details
✅ Mobile-responsive design
✅ Smooth scrolling and animations
✅ Interactive elements and hover effects

## Notes

- Images are currently using placeholder paths. Replace with actual images in the `public/assets/images/` directory
- All contact information and links match the original website
- The design is pixel-perfect and functionally identical to the original
- All interactive features are fully implemented and working

## License

This project is for educational/demonstration purposes.
