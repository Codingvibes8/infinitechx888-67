import {
  Globe,
  Calendar,Code2,Image,Music,Lock,Shield,
  MessageSquare,
  ShoppingCart,
  Search,Sparkles,
  Users,
  Star,
  Dumbbell,
  ShieldCheck,
  CreditCard,
  Share2,
  MapPin,
  Code,
  Sun,
  Calculator,
  Video,
  Home,
  PieChart,
  RefreshCw,
  TrendingUp,
  FileText,
  Zap,
  ListTodo

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
      title: "Stride&Style E-commerce Platform",
      industry: "E-commerce",
      description:
        "An e-commerce platform for trendy footwear and clothing brands featuring AI personalised shopping experiences, dynamic product recommendations, and seamless checkout process.",
      image: "/style&stride.png",
      liveUrl: "https://stride-styles-tje3.vercel.app/",
      services: [
        { icon: <Sparkles className="h-3.5 w-3.5 text-slate-700 mr-1.5" />, name: "AI Product Recommendations" },
        { icon: <ShoppingCart className="h-3.5 w-3.5 text-slate-700 mr-1.5" />, name: "Smart Cart & Checkout" },
        { icon: <CreditCard className="h-3.5 w-3.5 text-slate-700 mr-1.5" />, name: "Secure Payment Gateway" },
      ],
      featured: true,
      results: [
        "45% increase in conversion rate",
        "32% higher average order value with AI recommendations",
        "28% reduction in cart abandonment",
      ],
    },
      {
      title: "SolarPanel Connect",
      industry: "Renewable Energy",
      description:
        "A digital platform connecting property owners with certified solar panel installation experts. The website features instant quote generation, installer comparisons, and detailed energy savings projections.",
      image: "/solar-panel-project.jpg",
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
      title: "OmniAI Studio",
      industry: "Software-as-a-Service",
      description:
        "OmniAI Studio is an all‑in‑one AI platform built with Next.js 15, offering advanced tools for conversation, code generation, image creation, music composition, and video generation. Designed with a freemium subscription model, it empowers creators, developers, and businesses to produce high‑quality content effortlessly.",
     image: "/multi-tools.png", 
     liveUrl: "https://your-saas-demo-url.com/",
      services: [ { icon: <MessageSquare className="h-3.5 w-3.5 text-slate-700 mr-1.5" />,
         name: "AI Conversation Assistant" },
          { icon: <Code2 className="h-3.5 w-3.5 text-slate-700 mr-1.5" />,
             name: "Code Generation" }, { icon: <Image className="h-3.5 w-3.5 text-slate-700 mr-1.5" />,
               name: "Image Generation" }, { icon: <Music className="h-3.5 w-3.5 text-slate-700 mr-1.5" />, name: "Music Generation" }, { icon: <Video className="h-3.5 w-3.5 text-slate-700 mr-1.5" />, name: "Video Generation" }, ], results: [ "4.8/5 average user satisfaction across all AI tools", "62% faster content creation for early adopters", "40% conversion rate from free tier to paid plans", ],
    },
    
    {
      title: "Plumbing Hub",
      industry: "Construction",
      description:
        "Plumbing Hub required a digital solution to streamline emergency plumbing services and preventive maintenance scheduling. We developed a responsive platform with video consultation, part ordering, and priority dispatch system for urgent plumbing needs.",
      image: "/plumber-service3.jpg",
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
      liveUrl: "https://summit-roofs.vercel.app",
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
      image: "/sub-manager.png",
      liveUrl: "https://subscription-management-platform26.vercel.app/",
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
      liveUrl: "https://meting-ai2r-46jh.vercel.app/",
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
      title: "ScriptAI – Content Script Generator",
      industry: "Content Creation",
      description:
        "ScriptAI is an AI-powered web application designed for content creators to generate, edit, and optimize video scripts. Built with creativity and efficiency as first-class citizens.",
      image: "/script-ai-hero.png",
      liveUrl: "https://script-ai-cbav.vercel.app/",
      services: [
        { icon: <Sparkles className="h-3.5 w-3.5 text-slate-700 mr-1.5" />, name: "AI Script Generation" },
        { icon: <FileText className="h-3.5 w-3.5 text-slate-700 mr-1.5" />, name: "Template Library" },
      ],
      featured:true,
      results: [
        "Reduced script writing time by 70%",
        "Increased content output for creators by 3x",
        "Improved engagement rates with optimized hooks",
      ],
    },
    {
      title: "EnvVault – Secure Env Storage",
      industry: "Tech",
      description:
        "EnvVault is an enterprise-grade web application tailored for developers to securely store, manage, and sync environment variables across teams. Built with security and user experience as first-class citizens.",
      image: "/envVault.png",
      liveUrl: "https://env-vault-beryl.vercel.app",
      services: [
        { icon: <Lock className="h-3.5 w-3.5 text-slate-700 mr-1.5" />, name: "Encrypted Env Storage" },
        { icon: <Share2 className="h-3.5 w-3.5 text-slate-700 mr-1.5" />, name: "Team Syncing" },
      ],
      featured:false,
      results: [
        "Improved developer workflow efficiency by 52%",
        "Eliminated manual env file sharing",
        "Enhanced security compliance for dev teams",
      ],
    },
    
  ]