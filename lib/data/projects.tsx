import {
  Globe,
  Calendar,
  MessageSquare,
  ShoppingCart,
  Users,
 
  ShieldCheck,
  CreditCard,
  MapPin,
  Code,
  Sun,
  Calculator,
  Video,
  Home,
  Shield,
  PieChart,
  RefreshCw,
  TrendingUp,
  FileText,
  Zap,
  ListTodo,
  Receipt,
} from "lucide-react";


export interface ProjectService {
  icon: any;
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
      title: "SolarPanel Connect",
      slug: "solar-panel-connect",
      industry: "Renewable Energy",
      description:
        "A digital platform connecting property owners with certified solar panel installation experts. The website features instant quote generation, installer comparisons, and detailed energy savings projections.",
      image: "/images/solar-panel-project.jpg",
      liveURL: "https://v0-solar-panel-website-omega.vercel.app",
      services: [
        { icon: Sun, name: "Instant Solar Quotes" },
        { icon: Calculator, name: "Energy Savings Calculator" },
        { icon: ShieldCheck, name: "Certified Installer Network" },
      ],
      results: [
        "72% increase in installation inquiries",
        "Average $1,200 annual savings projected per household",
        "48% faster installation scheduling process",
      ],
    },
    {
      title: "Plumbing Hub",
      slug: "plumbing-hub",
      industry: "Construction",
      description:
        "Plumbing Hub required a digital solution to streamline emergency plumbing services and preventive maintenance scheduling. We developed a responsive platform with video consultation, part ordering, and priority dispatch system for urgent plumbing needs.",
      image: "/images/plumbing-project.jpg",
      liveURL: "https://v0-plumbers.vercel.app/",
      services: [
        { icon: Users, name: "Plumber Dispatch System" },
        { icon: Video, name: "Video Consultation" },
        { icon: ShoppingCart, name: "Parts Ordering" },
      ],
      results: [
        "92% customer satisfaction rate for emergency calls",
        "34% reduction in call-to-dispatch time",
        "28% increase in preventive maintenance contracts",
      ],
    },
    {
      title: "Roofing Hub",
      slug: "roofing-hub",
      industry: "Construction",
      description:
        "Roofing Hub needed a platform to connect homeowners with certified roofing contractors for installations, repairs, and inspections. We built a comprehensive system with 3D roof visualization, material estimation, and warranty tracking features.",
      image: "/roofing-contractor-working-on-modern-roof.jpg",
      liveURL: "https://example.com/roofing-hub",
      services: [
        { icon: Home, name: "Roof Visualization Tool" },
        { icon: Calculator, name: "Material Estimator" },
        { icon: Shield, name: "Warranty Management" },
      ],
      results: [
        "65% more accurate roof repair estimates",
        "43% increase in roof installation bookings",
        "Average 4.8/5 star rating from 2,400+ customers",
      ],
    },
    {
      title: "Subscription Management App",
      slug: "subscription-management-app",
      industry: "Tech",
      description:
        "A comprehensive subscription management platform that helps businesses track, analyze, and optimize their recurring revenue streams. We built an AI-powered dashboard with churn prediction, billing automation, and customer lifecycle analytics.",
      image: "/subscription.jpg",
      liveURL: "https://example.com/subscription-app",
      services: [
        { icon: PieChart, name: "Revenue Analytics" },
        { icon: RefreshCw, name: "Billing Automation" },
        { icon: TrendingUp, name: "Churn Prediction" },
      ],
      results: [
        "31% reduction in involuntary churn",
        "Automated 15,000+ monthly subscription renewals",
        "Saved 20+ hours weekly on billing management",
      ],
    },
    {
      title: "AI Meeting Summarizer",
      slug: "ai-meeting-summarizer",
      industry: "Tech",
      description:
        "An AI-powered tool that automatically transcribes, summarizes, and extracts action items from meetings. We developed a platform that integrates with popular conferencing tools and provides searchable meeting archives with smart tagging.",
      image: "/ai-meeting-transcription-technology.jpg",
      liveURL: "https://example.com/ai-meeting",
      services: [
        { icon: FileText, name: "Auto Transcription" },
        { icon: Zap, name: "AI Summarization" },
        { icon: ListTodo, name: "Action Item Extraction" },
      ],
      results: [
        "Saved 12+ hours monthly per team on meeting notes",
        "95% accuracy in action item identification",
        "Integrated with 8+ video conferencing platforms",
      ],
    },

    {
      title: "Accounting Software App",
      slug: "accounting-software-app",
      industry: "Tech",
      description:
        "A modern accounting platform that automates invoicing, expense tracking, and financial reconciliation for growing businesses. We built a solution that integrates with banking APIs and provides real-time cash flow visibility.",
      image: "/accounting-software-dashboard-financial.jpg",
      liveURL: "https://example.com/accounting-app",
      services: [
        { icon: Receipt, name: "Smart Invoicing" },
        { icon: CreditCard, name: "Expense Tracking" },
        { icon: RefreshCw, name: "Auto-reconciliation" },
      ],
      results: [
        "Reduced invoice processing time by 78%",
        "Cut late payments by 42% with automated reminders",
        "Eliminated 15+ hours monthly on bank reconciliation",
      ],
    },
];
