import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Brain,
  Banknote,
  Zap,
  ShoppingCart,
  Cpu,
  Cloud,
  Shield,
  Globe,
  Database,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'IT Services',
  description:
    'Comprehensive IT services from CodeFlick Technologies: AI & Machine Learning, FinTech, Automation, E-commerce, Cloud & DevOps, Cyber Security, CRM/ERP, and Custom Software Development.',
};

const serviceCategories = [
  {
    id: 'ai',
    icon: Brain,
    title: 'AI & Machine Learning',
    tagline: 'Intelligent Solutions for Modern Enterprises',
    description:
      'We build intelligent systems that learn, adapt, and automate — from conversational AI to predictive analytics platforms used by global enterprises.',
    services: [
      'AI Chatbots & Virtual Assistants',
      'Predictive Analytics & ML Models',
      'Computer Vision Systems',
      'Natural Language Processing (NLP)',
      'LLM Integration (GPT, Claude, Gemini)',
      'AI Agents & Multi-Agent Systems',
      'Generative AI Applications',
      'AI-Powered Document Processing',
    ],
    accent: 'cyan',
  },
  {
    id: 'fintech',
    icon: Banknote,
    title: 'FinTech Solutions',
    tagline: 'Banking-Grade Technology at Scale',
    description:
      'Trusted by Ajman Bank, NBI, Invest Bank, and Capital Bank of Jordan — we deliver compliant, secure FinTech systems from core banking to digital wallets.',
    services: [
      'Digital Banking Platforms',
      'Payment Gateway Integration',
      'KYC & AML Systems',
      'Core Banking Integration (Temenos T24)',
      'Banking API Development',
      'Loan Management Systems',
      'Asset & Wealth Management',
      'Treasury & Risk Systems',
    ],
    accent: 'violet',
  },
  {
    id: 'automation',
    icon: Zap,
    title: 'Automation',
    tagline: 'Eliminate Repetition, Amplify Output',
    description:
      'From low-code Power Platform solutions to enterprise RPA — we automate workflows, processes, and entire departments for maximum efficiency.',
    services: [
      'Power Automate & Power Apps',
      'n8n & Make (Integromat) Workflows',
      'Business Process Automation (BPA)',
      'Robotic Process Automation (RPA)',
      'Intelligent Document Processing',
      'CRM & ERP Automation',
      'API & System Integration',
      'AI-Driven Workflow Optimization',
    ],
    accent: 'cyan',
  },
  {
    id: 'software',
    icon: Cpu,
    title: 'Software Development',
    tagline: 'Custom Software, Built to Scale',
    description:
      'Full-cycle software development from architecture to delivery — web apps, mobile apps, SaaS platforms, enterprise systems, SDKs, and middleware.',
    services: [
      'Web Application Development',
      'Mobile App Development (iOS/Android)',
      'SaaS Platform Development',
      'Enterprise Application Development',
      'SDK & Library Development',
      'Middleware & Integration Layer',
      'API Design & Development',
      'Microservices Architecture',
    ],
    accent: 'violet',
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: 'E-commerce Solutions',
    tagline: 'Commerce Platforms That Convert',
    description:
      'End-to-end e-commerce solutions from storefront to fulfillment — headless commerce, marketplace integrations, and omnichannel platforms.',
    services: [
      'Custom E-commerce Platforms',
      'Headless Commerce Architecture',
      'Marketplace Integration (Amazon, eBay)',
      'Payment Processing & Gateways',
      'Inventory & Order Management',
      'Product Catalog Management',
      'B2B Commerce Solutions',
      'Mobile Commerce Apps',
    ],
    accent: 'cyan',
  },
  {
    id: 'cloud',
    icon: Cloud,
    title: 'Cloud & DevOps',
    tagline: 'Infrastructure That Never Sleeps',
    description:
      'Cloud-native architecture, CI/CD pipelines, and DevOps culture — we modernize your infrastructure for scale, resilience, and speed.',
    services: [
      'AWS, Azure, GCP Architecture',
      'Cloud Migration Strategy',
      'CI/CD Pipeline Implementation',
      'Docker & Kubernetes',
      'Infrastructure as Code (Terraform)',
      'Monitoring & Observability',
      'Cost Optimization',
      'Disaster Recovery Planning',
    ],
    accent: 'violet',
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Cyber Security',
    tagline: 'Protect What Matters Most',
    description:
      'Comprehensive security services for enterprises handling sensitive financial, government, and healthcare data.',
    services: [
      'Security Architecture Design',
      'Penetration Testing & Red Team',
      'Vulnerability Assessment',
      'ISO 27001 / SOC 2 Compliance',
      'SIEM & Threat Intelligence',
      'Identity & Access Management (IAM)',
      'Data Encryption & DLP',
      'Security Training & Awareness',
    ],
    accent: 'cyan',
  },
  {
    id: 'crm',
    icon: Globe,
    title: 'CRM & ERP',
    tagline: 'Unified Business Operations',
    description:
      'Salesforce, Odoo, Microsoft Dynamics — we implement, customize, and integrate enterprise platforms that connect your entire business.',
    services: [
      'Salesforce Implementation & Customization',
      'Odoo ERP Implementation',
      'Microsoft Dynamics 365',
      'CRM Data Migration',
      'ERP Integration & API Layer',
      'Business Intelligence & Reporting',
      'Field Service Management',
      'Customer 360 Platform',
    ],
    accent: 'violet',
  },
  {
    id: 'data',
    icon: Database,
    title: 'Data & Analytics',
    tagline: 'Turn Data Into Decisions',
    description:
      'From data engineering to executive dashboards — we build data infrastructure that enables real-time insight and strategic decision-making.',
    services: [
      'Data Warehouse Architecture',
      'ETL Pipeline Development',
      'Business Intelligence (Power BI, Tableau)',
      'Real-Time Analytics Dashboards',
      'Big Data Processing (Spark, Kafka)',
      'Data Governance & Quality',
      'Predictive Modeling',
      'Data Lake Implementation',
    ],
    accent: 'cyan',
  },
  {
    id: 'consulting',
    icon: MessageSquare,
    title: 'IT Consulting',
    tagline: 'Strategic Technology Guidance',
    description:
      'CTO-as-a-Service, technology roadmaps, architecture reviews, and digital transformation consulting for enterprises.',
    services: [
      'Technology Strategy & Roadmap',
      'Architecture Review & Design',
      'CTO-as-a-Service',
      'Digital Transformation Consulting',
      'Legacy Modernization Planning',
      'Vendor Evaluation & Selection',
      'IT Audit & Assessment',
      'Project Recovery & Turnaround',
    ],
    accent: 'violet',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="relative bg-bg-base py-28 pt-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-bg-mesh pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 dot-grid opacity-30" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-text-muted">
              <li>
                <Link href="/" className="hover:text-text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-text-primary font-medium">IT Services</li>
            </ol>
          </nav>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent-primary-400 mb-3 rounded-chip bg-accent-primary-500/10 px-3 py-1">
            What We Build
          </span>
          <h1 className="font-sans font-bold text-hero text-text-primary max-w-2xl mb-4">
            Comprehensive IT Services
          </h1>
          <p className="text-text-secondary text-lg max-w-xl">
            Every technology capability your enterprise needs — from AI and automation to security
            and cloud infrastructure.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-bg-base py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {serviceCategories.map(({ id, icon: Icon, title, tagline, description, services, accent }) => (
              <div
                key={id}
                id={id}
                className={`group p-8 rounded-card bg-bg-surface border transition-all duration-300 hover:shadow-card-hover ${
                  accent === 'cyan'
                    ? 'border-white/8 hover:border-accent-primary-500/30'
                    : 'border-white/8 hover:border-accent-secondary-500/30'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left: Title + description */}
                  <div className="lg:col-span-1">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                        accent === 'cyan' ? 'bg-accent-primary-500/10' : 'bg-accent-secondary-500/10'
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 ${
                          accent === 'cyan' ? 'text-accent-primary-400' : 'text-accent-secondary-400'
                        }`}
                        aria-hidden="true"
                      />
                    </div>
                    <h2 className="font-sans font-bold text-h3 text-text-primary mb-1">{title}</h2>
                    <p
                      className={`text-xs font-medium uppercase tracking-widest mb-3 ${
                        accent === 'cyan' ? 'text-accent-primary-400' : 'text-accent-secondary-400'
                      }`}
                    >
                      {tagline}
                    </p>
                    <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
                    <Link
                      href="/contact"
                      className={`inline-flex items-center gap-2 mt-4 text-sm font-medium transition-colors ${
                        accent === 'cyan'
                          ? 'text-accent-primary-400 hover:text-accent-primary-300'
                          : 'text-accent-secondary-400 hover:text-accent-secondary-400/80'
                      }`}
                    >
                      Get a Quote
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>

                  {/* Right: Service list */}
                  <div className="lg:col-span-2">
                    <ul
                      className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                      role="list"
                      aria-label={`${title} services`}
                    >
                      {services.map((service) => (
                        <li
                          key={service}
                          className="flex items-start gap-2.5 text-text-secondary text-sm"
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                              accent === 'cyan' ? 'bg-accent-primary-500' : 'bg-accent-secondary-500'
                            }`}
                            aria-hidden="true"
                          />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-bg-surface py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-bg-mesh opacity-70 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-sans font-bold text-h2 text-text-primary mb-4">
            Looking for a Specific Solution?
          </h2>
          <p className="text-text-secondary text-lg mb-10 max-w-2xl mx-auto">
            Our experts will design a tailored technology solution for your exact business
            requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-cta text-white font-semibold text-base rounded-btn shadow-glow-cyan hover:brightness-110 hover:shadow-glow-violet transition-all duration-200 hover:scale-[1.02]"
          >
            Talk to an Expert
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
