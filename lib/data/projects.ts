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
      title: "SolarPanel Connect",
      industry: "Renewable Energy",
      description:
        "A digital platform connecting property owners with certified solar panel installation experts. The website features instant quote generation, installer comparisons, and detailed energy savings projections.",
      image: "/images/solar-panel-project.jpg",
      liveUrl: "https://v0-solar-panel-website-omega.vercel.app",
      services: [
        { icon: <Sun className="h-3.5 w-3.5 text-slate-700 mr-1.5" />, name: "Instant Solar Quotes" },
        { icon: <Calculator className="h-3.5 w-3.5 text-slate-700 mr-1.5" />, name: "Energy Savings Calculator" },
        { icon: <ShieldCheck className="h-3.5 w-3.5 text-slate-700 mr-1.5" />, name: "Certified Installer Network" },
      ],
      results: [
        "72% increase in installation inquiries",
        "Average $1,200 annual savings projected per household",
        "48% faster installation scheduling process",
      ],
    },
    {
      title: "Plumbing Hub",
      industry: "Construction",
      description:
        "Plumbing Hub required a digital solution to streamline emergency plumbing services and preventive maintenance scheduling. We developed a responsive platform with video consultation, part ordering, and priority dispatch system for urgent plumbing needs.",
      image: "/images/plumbing-project.jpg",
      liveUrl: "https://v0-plumbers.vercel.app/",
      services: [
        { icon: <Users className="h-3.5 w-3.5 text-slate-700 mr-1.5" />, name: "Plumber Dispatch System" },
        { icon: <Video className="h-3.5 w-3.5 text-slate-700 mr-1.5" />, name: "Video Consultation" },
        { icon: <ShoppingCart className="h-3.5 w-3.5 text-slate-700 mr-1.5" />, name: "Parts Ordering" },
      ],
      results: [
        "92% customer satisfaction rate for emergency calls",
        "34% reduction in call-to-dispatch time",
        "28% increase in preventive maintenance contracts",
      ],
    },
    {
      title: "Roofing Hub",
      industry: "Construction",
      description:
        "Roofing Hub needed a platform to connect homeowners with certified roofing contractors for installations, repairs, and inspections. We built a comprehensive system with 3D roof visualization, material estimation, and warranty tracking features.",
      image: "/roofing-contractor-working-on-modern-roof.jpg",
      liveUrl: "https://example.com/roofing-hub",
      services: [
        { icon: <Home className="h-3.5 w-3.5 text-slate-700 mr-1.5" />, name: "Roof Visualization Tool" },
        { icon: <Calculator className="h-3.5 w-3.5 text-slate-700 mr-1.5" />, name: "Material Estimator" },
        { icon: <Shield className="h-3.5 w-3.5 text-slate-700 mr-1.5" />, name: "Warranty Management" },
      ],
      results: [
        "65% more accurate roof repair estimates",
        "43% increase in roof installation bookings",
        "Average 4.8/5 star rating from 2,400+ customers",
      ],
    },
    {
      title: "Subscription Management App",
      industry: "Tech",
      description:
        "A comprehensive subscription management platform that helps businesses track, analyze, and optimize their recurring revenue streams. We built an AI-powered dashboard with churn prediction, billing automation, and customer lifecycle analytics.",
      image: "/images/subsflow-project.png",
      liveUrl: "https://example.com/subscription-app",
      services: [
        { icon: <PieChart className="h-3.5 w-3.5 text-slate-700 mr-1.5" />, name: "Revenue Analytics" },
        { icon: <RefreshCw className="h-3.5 w-3.5 text-slate-700 mr-1.5" />, name: "Billing Automation" },
        { icon: <TrendingUp className="h-3.5 w-3.5 text-slate-700 mr-1.5" />, name: "Churn Prediction" },
      ],
      results: [
        "31% reduction in involuntary churn",
        "Automated 15,000+ monthly subscription renewals",
        "Saved 20+ hours weekly on billing management",
      ],
    },
    {
      title: "AI Meeting Summarizer",
      industry: "Tech",
      description:
        "An AI-powered tool that automatically transcribes, summarizes, and extracts action items from meetings. We developed a platform that integrates with popular conferencing tools and provides searchable meeting archives with smart tagging.",
      image: "/ai-meeting-transcription-technology.jpg",
      liveUrl: "https://example.com/ai-meeting",
      services: [
        { icon: <FileText className="h-3.5 w-3.5 text-slate-700 mr-1.5" />, name: "Auto Transcription" },
        { icon: <Zap className="h-3.5 w-3.5 text-slate-700 mr-1.5" />, name: "AI Summarization" },
        { icon: <ListTodo className="h-3.5 w-3.5 text-slate-700 mr-1.5" />, name: "Action Item Extraction" },
      ],
      results: [
        "Saved 12+ hours monthly per team on meeting notes",
        "95% accuracy in action item identification",
        "Integrated with 8+ video conferencing platforms",
      ],
    },
    {
      title: "EV Charger Finder App",
      industry: "Tech",
      description:
        "A mobile application that helps electric vehicle owners locate, navigate to, and pay for EV charging stations. We created a real-time platform with availability tracking, pricing comparison, and route optimization for long trips.",
      image: "/electric-vehicle-charging-station-map.jpg",
      liveUrl: "https://example.com/ev-charger",
      services: [
        { icon: <MapPin className="h-3.5 w-3.5 text-slate-700 mr-1.5" />, name: "Real-time Charger Locator" },
        { icon: <CreditCard className="h-3.5 w-3.5 text-slate-700 mr-1.5" />, name: "Integrated Payment" },
      ],
      results: [
        "Mapped 45,000+ charging stations nationwide",
        "Reduced average charging station search time by 73%",
        "Processed 8,500+ monthly charging sessions",
      ],
    },
    {
      title: "Accounting Software App",
      industry: "Tech",
      description:
        "A modern accounting platform that automates invoicing, expense tracking, and financial reconciliation for growing businesses. We built a solution that integrates with banking APIs and provides real-time cash flow visibility.",
      image: "/accounting-software-dashboard-financial.jpg",
      liveUrl: "https://example.com/accounting-app",
      services: [
        { icon: <Receipt className="h-3.5 w-3.5 text-slate-700 mr-1.5" />, name: "Smart Invoicing" },
        { icon: <CreditCard className="h-3.5 w-3.5 text-slate-700 mr-1.5" />, name: "Expense Tracking" },
        { icon: <RefreshCw className="h-3.5 w-3.5 text-slate-700 mr-1.5" />, name: "Auto-reconciliation" },
      ],
      results: [
        "Reduced invoice processing time by 78%",
        "Cut late payments by 42% with automated reminders",
        "Eliminated 15+ hours monthly on bank reconciliation",
      ],
    },
];
