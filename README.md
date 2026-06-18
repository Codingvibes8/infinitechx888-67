# My Project

A modern, responsive portfolio and agency website built with Next.js 16, React 19, TypeScript, and Tailwind CSS. Features a comprehensive project showcase, pricing information, and contact capabilities.

## Features

- **Responsive Design** - Mobile-first approach with beautiful UI across all devices
- **Project Showcase** - Dynamic project detail pages with filterable project cards
- **Hero Section** - Eye-catching hero with background video support
- **Pricing Page** - Clear pricing options with feature comparisons
- **Contact Form** - Integrated contact form with email functionality via Resend
- **Theme Support** - Light/dark mode toggle with next-themes
- **Modern Components** - Built with shadcn/ui for consistent, accessible UI elements
- **Type-Safe** - Full TypeScript support for better code quality

## Tech Stack

### Frontend
- **Framework**: Next.js 16.1.6
- **UI Library**: React 19
- **Language**: TypeScript 5.7
- **Styling**: Tailwind CSS 3.4 with PostCSS
- **Components**: shadcn/ui (Radix UI primitives + Tailwind)
- **Icons**: Lucide React

### Form & State Management
- **Forms**: React Hook Form with Zod validation
- **State**: Zustand
- **Date Picker**: react-day-picker

### Additional Libraries
- **Email**: Resend
- **Carousel**: Embla Carousel React
- **Theme**: next-themes
- **Notifications**: Sonner (toast notifications)
- **Charts**: Recharts
- **Utilities**: clsx, tailwind-merge, class-variance-authority

## Project Structure

```
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout with theme provider
│   ├── page.tsx                 # Home page
│   ├── about/page.tsx           # About page
│   ├── contact/page.tsx         # Contact page
│   ├── pricing/page.tsx         # Pricing page
│   ├── projects/page.tsx        # Projects listing
│   ├── projects/[slug]/page.tsx # Project detail pages
│   ├── services/page.tsx        # Services page
│   └── api/contact/route.ts     # Contact form API endpoint
├── components/
│   ├── navbar.tsx               # Navigation bar
│   ├── footer.tsx               # Footer component
│   ├── project-card.tsx         # Project card component
│   ├── contact-form.tsx         # Contact form
│   ├── theme-provider.tsx       # Theme provider setup
│   ├── sections/                # Page sections
│   │   ├── hero.tsx            # Hero section
│   │   ├── features.tsx        # Features section
│   │   ├── process.tsx         # Process section
│   │   ├── results.tsx         # Results section
│   │   ├── cta.tsx             # Call-to-action section
│   │   ├── what-we-build.tsx   # What we build section
│   │   └── ...
│   └── ui/                      # shadcn/ui components
├── public/                      # Static assets
│   └── hero-section-image.png  # Hero background image
├── package.json                 # Dependencies and scripts
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── postcss.config.js           # PostCSS configuration
```

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn installed
- A code editor (VS Code recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd my-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (if needed)
   ```bash
   cp .env.local.example .env.local
   ```

### Running Locally

**Development mode:**
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

**Production build:**
```bash
npm run build
npm start
```

**Lint code:**
```bash
npm run lint
```

## Key Components

### Hero Section (`components/sections/hero.tsx`)
- Eye-catching landing section with video background support
- Optimized animations and responsive layout

### Project Card (`components/project-card.tsx`)
- Reusable component for displaying project information
- Used on projects listing and detail pages

### Contact Form (`components/contact-form.tsx`)
- React Hook Form with Zod validation
- Integrates with Resend for email delivery
- Toast notifications for user feedback

### Navigation (`components/navbar.tsx`)
- Responsive navbar with mobile menu
- Theme toggle (light/dark mode)

## Pages Overview

| Page | Path | Description |
|------|------|-------------|
| Home | `/` | Landing page with hero and key sections |
| About | `/about` | About the company/creator |
| Services | `/services` | Services offered |
| Projects | `/projects` | All projects showcase |
| Project Detail | `/projects/[slug]` | Individual project details |
| Pricing | `/pricing` | Pricing plans and features |
| Contact | `/contact` | Contact form page |

## Configuration

### Tailwind CSS
Configuration located in `tailwind.config.ts`. Customize colors, fonts, and other design tokens here.

### Theme
Light/dark mode is handled via `next-themes`. Theme provider is set up in the root layout.

### Validation
Form validation uses Zod schemas. Add or modify schemas as needed in form components.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub/GitLab
2. Connect your repository to [Vercel](https://vercel.com)
3. Configure environment variables if needed
4. Deploy with a single click

### Deploy to Other Platforms

The project is compatible with any Node.js hosting:
- Netlify
- Heroku
- AWS Amplify
- Digital Ocean
- Custom VPS

## Environment Variables

Add these to `.env.local` if needed:

```env
# Example email configuration for Resend
NEXT_PUBLIC_RESEND_API_KEY=your_key_here

# Add other environment variables as needed
```

## Performance Tips

- Images are optimized via Next.js Image component
- Tailwind CSS is minified in production
- Code splitting happens automatically
- Use React DevTools Profiler to identify bottlenecks

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

**Port 3000 already in use:**
```bash
npm run dev -- -p 3001
```

**Module not found errors:**
```bash
rm -rf node_modules .next
npm install
npm run dev
```

**Build failures:**
```bash
npm run lint
npm run build
```

## License

[Add your license information here]

## Support

For issues or questions, please [add contact method or issue link].

---

Built with ❤️ using Next.js and modern web technologies.
