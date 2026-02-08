import {
  Globe,
  Calendar,
  MessageSquare,
  ShoppingCart,
  Search,
  Users,
  Star,
  Dumbbell,
  ShieldCheck,
  CreditCard,
  MapPin,
  Code,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ProjectService {
  icon: LucideIcon;
  name: string;
}

export interface Project {
  slug: string;
  title: string;
  industry: string;
  description: string;
  image: string;
  services: ProjectService[];
  results: string[];
  liveURL: string;
}

export const projects: Project[] = [
  {
    slug: "barberpro",
    title: "BarberPro",
    industry: "Barber",
    description:
      "BarberPro needed a complete digital transformation to compete in the busy London restaurant scene. We created a hyperlocal website with an integrated booking system and AI chatbot to streamline operations.",
    image: "/images/projects/barbers.jpg",
    services: [
      { icon: Globe, name: "HyperLocal Website" },
      { icon: Calendar, name: "Booking System" },
      { icon: MessageSquare, name: "AI Chatbot" },
    ],
    results: [
      "45% increase in online reservations",
      "68% reduction in phone call volume",
      'Top 3 Google ranking for "best Italian restaurant in Chelsea"',
    ],
    liveURL: "https://v0.app/chat/barber-pro",
  },
  {
    slug: "terrasculpt",
    title: "TerraSculpt",
    industry: "Landscaping",
    description:
      "TerraSculpt wanted to expand beyond their physical location. We built a local e-commerce platform that maintained their brand identity while enabling online sales.",
    image: "/images/projects/landscaping.jpg",
    services: [
      { icon: ShoppingCart, name: "Local E-commerce" },
      { icon: Search, name: "AI Local SEO" },
    ],
    results: [
      "\u00A312,500 in online sales within first month",
      "32% of sales now coming from outside local area",
      "156% increase in Instagram followers",
    ],
    liveURL: "https://v0.app/chat/barber-pro",
  },
  {
    slug: "elite-electric",
    title: "Elite Electric",
    industry: "Electrical Services",
    description:
      "Electrician website needed a digital solution to manage their growing base and schedule. We developed a comprehensive integrated booking and payment processing system.",
    image: "/images/projects/electric.jpg",
    services: [
      { icon: Users, name: "Electrician Website" },
      { icon: Calendar, name: "Booking System" },
      { icon: Globe, name: "HyperLocal Website" },
    ],
    results: [
      "\u00A314,580 in online sales within first month",
      "32% of sales now coming from outside local area",
      "156% increase in Instagram followers",
    ],
    liveURL: "https://sparkview.vercel.app",
  },
  {
    slug: "summit-roofing",
    title: "Summit Roofing Solutions",
    industry: "Roofing",
    description:
      "Summit Roofing Solutions was struggling to attract new clients in a competitive market. We implemented a comprehensive digital strategy including a new website, local SEO, and automated review management.",
    image: "/images/projects/roofing.jpg",
    services: [
      { icon: Globe, name: "HyperLocal Website" },
      { icon: Search, name: "AI Local SEO" },
      { icon: Star, name: "Review Management" },
    ],
    results: [
      "23 new client inquiries per month (up from 8)",
      "Google rating improved from 3.8 to 4.7 stars",
      "First page Google ranking for 15 key local search terms",
    ],
    liveURL: "https://v0.app/chat/summit-roofing",
  },
  {
    slug: "ai-fitness-app",
    title: "FitPulse AI",
    industry: "Health & Fitness",
    description:
      "A next-generation AI fitness application that generates personalised workout plans, tracks progress in real-time, and adapts routines based on user performance data.",
    image: "/images/projects/fitness.jpg",
    services: [
      { icon: Dumbbell, name: "AI Workout Engine" },
      { icon: Globe, name: "Progressive Web App" },
      { icon: Users, name: "User Dashboard" },
    ],
    results: [
      "10,000+ active users within 3 months",
      "87% user retention after 30 days",
      "4.8 star average rating on app stores",
    ],
    liveURL: "#",
  },
  {
    slug: "secure-vault",
    title: "SecureVault",
    industry: "Cybersecurity",
    description:
      "An enterprise-grade encrypted vault for managing sensitive documents, passwords, and credentials with zero-knowledge architecture and multi-factor authentication.",
    image: "/images/projects/securevault.jpg",
    services: [
      { icon: ShieldCheck, name: "Zero-Knowledge Encryption" },
      { icon: Globe, name: "Web Application" },
      { icon: Users, name: "Team Management" },
    ],
    results: [
      "SOC 2 Type II compliance achieved",
      "99.99% uptime since launch",
      "500+ enterprise accounts onboarded",
    ],
    liveURL: "#",
  },
  {
    slug: "subscription-app",
    title: "SubSync",
    industry: "SaaS / FinTech",
    description:
      "A smart subscription management platform that helps users track, manage, and optimise all their recurring payments in one beautiful dashboard with spending insights.",
    image: "/images/projects/subscription.jpg",
    services: [
      { icon: CreditCard, name: "Payment Tracking" },
      { icon: Search, name: "Smart Insights" },
      { icon: Globe, name: "Web Application" },
    ],
    results: [
      "Users save an average of \u00A3240/year on subscriptions",
      "50,000 subscriptions tracked in first quarter",
      "Featured in TechCrunch and Product Hunt top 5",
    ],
    liveURL: "#",
  },
  {
    slug: "ev-charge-finder",
    title: "ChargeMap",
    industry: "Automotive / Green Energy",
    description:
      "A real-time EV charge station finder app with route planning, availability status, pricing comparison, and community reviews to help electric vehicle owners charge smarter.",
    image: "/images/projects/evcharger.jpg",
    services: [
      { icon: MapPin, name: "Location Mapping" },
      { icon: Search, name: "Smart Search" },
      { icon: Globe, name: "Cross-Platform App" },
    ],
    results: [
      "25,000+ charging stations indexed across the UK",
      "98% accuracy on real-time availability",
      "Partnership with 3 major charging networks",
    ],
    liveURL: "#",
  },
  {
    slug: "code-snippet-storage",
    title: "SnipVault",
    industry: "Developer Tools",
    description:
      "A beautifully designed code snippet storage and sharing platform for developers. Supports 50+ languages with syntax highlighting, tagging, full-text search, and team collaboration.",
    image: "/images/projects/codesnippet.jpg",
    services: [
      { icon: Code, name: "Code Editor" },
      { icon: Search, name: "Full-Text Search" },
      { icon: Users, name: "Team Collaboration" },
    ],
    results: [
      "200,000+ snippets saved by developers worldwide",
      "Integrations with VS Code and JetBrains IDEs",
      "4.9 star rating on the Chrome Web Store",
    ],
    liveURL: "#",
  },
];
