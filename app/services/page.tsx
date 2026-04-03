import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Brain,
  Banknote,
  Zap,
  ShoppingCart,
  Cpu,
  Cloud,
  Factory,
  Globe,
  Database,
  HeartPulse,
  ArrowRight,
} from 'lucide-react';
import BackgroundBlobs from '@/components/BackgroundBlobs';
import AnimatedServiceCard from '@/components/AnimatedServiceCard';
import AnimatedSection from '@/components/AnimatedSection';
import GridPattern from '@/components/GridPattern';
import GradientDivider from '@/components/GradientDivider';

export const metadata: Metadata = {
  title: 'IT Services',
  description:
    'Comprehensive IT services from Code Flick Technologies: AI & Machine Learning, Automation, Software Development, FinTech, E-commerce, Manufacturing, CRM, Healthcare, Cloud & Infrastructure, and Data & Analytics.',
  alternates: {
    canonical: 'https://codeftech.com/services',
  },
  openGraph: {
    title: 'IT Services | Code Flick Technologies',
    description:
      'AI & Machine Learning, Automation, Software Development, FinTech, E-commerce, Manufacturing, CRM, Healthcare, Cloud, and Data & Analytics services.',
    url: 'https://codeftech.com/services',
    type: 'website',
  },
};

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'IT Services by Code Flick Technologies',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Artificial Intelligence & Machine Learning', url: 'https://codeftech.com/services#ai' },
    { '@type': 'ListItem', position: 2, name: 'Automation Services', url: 'https://codeftech.com/services#automation' },
    { '@type': 'ListItem', position: 3, name: 'Software & Application Development', url: 'https://codeftech.com/services#software' },
    { '@type': 'ListItem', position: 4, name: 'FinTech Solutions', url: 'https://codeftech.com/services#fintech' },
    { '@type': 'ListItem', position: 5, name: 'E-commerce Solutions', url: 'https://codeftech.com/services#ecommerce' },
    { '@type': 'ListItem', position: 6, name: 'Manufacturing Solutions', url: 'https://codeftech.com/services#manufacturing' },
    { '@type': 'ListItem', position: 7, name: 'CRM Solutions', url: 'https://codeftech.com/services#crm' },
    { '@type': 'ListItem', position: 8, name: 'Healthcare Solutions', url: 'https://codeftech.com/services#healthcare' },
    { '@type': 'ListItem', position: 9, name: 'Cloud & Infrastructure', url: 'https://codeftech.com/services#cloud' },
    { '@type': 'ListItem', position: 10, name: 'Data & Analytics', url: 'https://codeftech.com/services#data' },
  ],
};

const serviceCategories = [
  {
    id: 'ai',
    icon: Brain,
    title: 'Artificial Intelligence & Machine Learning',
    tagline: 'Intelligent Solutions for Modern Enterprises',
    description:
      'We build intelligent systems that learn, adapt, and automate — from conversational AI to predictive analytics platforms used by global enterprises.',
    services: [
      'AI-Powered Automation',
      'Chatbot & Virtual Assistant',
      'LLM Integration (OpenAI, Gemini, Claude, Llama)',
      'Generative AI (Content, Code, Image)',
      'Predictive Analytics',
      'Computer Vision',
      'Natural Language Processing (NLP)',
      'AI Agents — Self-Learning Autonomous Systems',
    ],
  },
  {
    id: 'automation',
    icon: Zap,
    title: 'Automation Services',
    tagline: 'Eliminate Repetition, Amplify Output',
    description:
      'From low-code Power Platform solutions to enterprise RPA — we automate workflows, processes, and entire departments for maximum efficiency.',
    services: [
      'Microsoft Power Platform (Power Automate, Power Apps, Power BI)',
      'Low-Code/No-Code (n8n, Make)',
      'Enterprise Automation (BPA, Workflow Automation, RPA)',
      'Intelligent Document Processing',
    ],
  },
  {
    id: 'software',
    icon: Cpu,
    title: 'Software & Application Development',
    tagline: 'Custom Software, Built to Scale',
    description:
      'Full-cycle software development from architecture to delivery — web apps, mobile apps, SaaS platforms, enterprise systems, SDKs, and middleware.',
    services: [
      'Custom Software — Tailored Business Solutions',
      'Web Applications (React, Angular, Vue, Next.js)',
      'Mobile Applications (React Native, Flutter, Kotlin, Swift)',
      'SaaS Platforms',
      'SDK & Middleware Development',
      'API Development (RESTful, GraphQL, SOAP)',
    ],
  },
  {
    id: 'fintech',
    icon: Banknote,
    title: 'FinTech Solutions',
    tagline: 'Banking-Grade Technology at Scale',
    description:
      'Trusted by Ajman Bank, NBI, Invest Bank, and Capital Bank of Jordan — we deliver compliant, secure FinTech systems from core banking to digital wallets.',
    services: [
      'Digital Banking Systems',
      'Core Banking Integration (Temenos T24, Finacle, Oracle FLEXCUBE)',
      'Payment Gateway Integration (Stripe, PayPal, Adyen)',
      'Loan Management Systems',
      'KYC & AML Systems (IDWise, Onfido)',
      'Asset Management & Investment Tracking',
    ],
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: 'E-commerce Solutions',
    tagline: 'Commerce Platforms That Convert',
    description:
      'End-to-end e-commerce solutions from storefront to fulfillment — Shopify, WooCommerce, Magento, and custom headless platforms.',
    services: [
      'Shopify Development (Custom Themes, App Integration, Shopify Plus)',
      'WordPress/WooCommerce (Custom Plugins, Payment Integration)',
      'Magento Development (Custom Extensions, Optimization)',
      'Custom Marketplace Solutions',
      'Headless Commerce — API-First Architecture',
    ],
  },
  {
    id: 'manufacturing',
    icon: Factory,
    title: 'Manufacturing Solutions',
    tagline: 'Smart Factories Powered by Data',
    description:
      'We implement Industry 4.0 solutions including MES, IoT integration, supply chain automation, and digital twin technology for modern manufacturing.',
    services: [
      'MES — Real-Time Production Monitoring',
      'Supply Chain Automation & Forecasting',
      'IoT Integration & Predictive Maintenance',
      'Industry 4.0 — Smart Factory & Digital Twin',
    ],
  },
  {
    id: 'crm',
    icon: Globe,
    title: 'CRM Solutions',
    tagline: 'Unified Business Operations',
    description:
      'Salesforce, Odoo, Microsoft Dynamics — we implement, customize, and integrate enterprise CRM platforms that connect your entire business.',
    services: [
      'Odoo CRM (Customization, Implementation, Integration)',
      'Salesforce (Sales Cloud, Service Cloud, Customization)',
      'Microsoft Dynamics (Implementation, Migration)',
      'Zoho & HubSpot (Setup, Workflow Automation)',
    ],
  },
  {
    id: 'healthcare',
    icon: HeartPulse,
    title: 'Healthcare Solutions',
    tagline: 'Technology That Improves Patient Outcomes',
    description:
      'We build healthcare technology systems including EMR/EHR, telemedicine platforms, and interoperability layers for modern healthcare providers.',
    services: [
      'EMR/EHR — Digital Patient Records',
      'EHS — Compliance & Incident Management',
      'Telemedicine — Virtual Consultations & Remote Monitoring',
      'HL7 & FHIR — Healthcare Data Interoperability',
    ],
  },
  {
    id: 'cloud',
    icon: Cloud,
    title: 'Cloud & Infrastructure',
    tagline: 'Infrastructure That Never Sleeps',
    description:
      'Cloud-native architecture, CI/CD pipelines, and DevOps culture — we modernize your infrastructure for scale, resilience, and speed.',
    services: [
      'Cloud Deployment (AWS, Azure, GCP)',
      'DevOps & CI/CD — Automated Deployment Pipelines',
      'Containerization (Docker, Kubernetes)',
      'Security & Compliance — Enterprise-Grade Security',
    ],
  },
  {
    id: 'data',
    icon: Database,
    title: 'Data & Analytics',
    tagline: 'Turn Data Into Decisions',
    description:
      'From data engineering to executive dashboards — we build data infrastructure that enables real-time insight and strategic decision-making.',
    services: [
      'BI Dashboards — Interactive Data Visualization',
      'Data Warehousing — Centralized Data Storage',
      'Real-Time Reporting — Live Data Insights',
      'Big Data Solutions — Large-Scale Data Processing',
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />

      {/* PAGE HERO */}
      <section className="relative bg-bg-base py-28 pt-40 overflow-hidden">
        <BackgroundBlobs page="services" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-text-muted">
              <li>
                <Link href="/" className="hover:text-accent-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-text-primary font-medium">IT Services</li>
            </ol>
          </nav>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-accent-primary-400 mb-3 rounded-chip bg-accent-primary-500/10 px-3 py-1 border border-accent-primary-500/15">
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

      <GradientDivider />

      {/* SERVICES GRID */}
      <section className="bg-bg-base py-20 relative overflow-hidden">
        <GridPattern />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="space-y-6">
            {serviceCategories.map(({ id, icon: Icon, title, tagline, description, services }, i) => (
              <AnimatedServiceCard key={id} index={i} className="scroll-mt-24">
                <div
                  id={id}
                  className="glass-card p-8 group"
                >
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 neo-icon-box">
                      <Icon className="w-6 h-6 text-accent-primary-400" aria-hidden="true" />
                    </div>
                    <h2 className="font-sans font-bold text-h3 text-text-primary mb-1">{title}</h2>
                    <p className="text-xs font-medium uppercase tracking-[0.15em] mb-3 text-accent-primary-400">
                      {tagline}
                    </p>
                    <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 mt-4 text-sm font-medium transition-colors text-accent-primary-400 hover:text-text-primary"
                    >
                      Get a Quote
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>

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
                            className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-accent-primary-500"
                            aria-hidden="true"
                          />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              </AnimatedServiceCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-bg-base py-20 relative overflow-hidden">
        <BackgroundBlobs page="contact" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
          <div className="glass-card p-10 sm:p-14">
            <div className="relative z-10">
              <h2 className="font-sans font-bold text-h2 text-text-primary mb-4">
                Looking for a Specific Solution?
              </h2>
              <p className="text-text-secondary text-lg mb-10 max-w-2xl mx-auto">
                Our experts will design a tailored technology solution for your exact business
                requirements.
              </p>
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2 text-base hover:scale-[1.02]"
              >
                Talk to an Expert
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
