import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Banknote,
  Plane,
  Building2,
  Factory,
  HeartPulse,
  ShoppingBag,
  Truck,
  Globe,
  Rocket,
  Wallet,
  ArrowRight,
} from 'lucide-react';
import BackgroundBlobs from '@/components/BackgroundBlobs';
import AnimatedServiceCard from '@/components/AnimatedServiceCard';
import AnimatedSection from '@/components/AnimatedSection';
import GridPattern from '@/components/GridPattern';
import GradientDivider from '@/components/GradientDivider';

export const metadata: Metadata = {
  title: 'Industries We Serve | Code Flick Technologies',
  description:
    'Code Flick Technologies delivers enterprise-grade AI, automation, FinTech, and digital transformation solutions across banking, healthcare, aviation, government, manufacturing, and more.',
};

const industries = [
  {
    id: 'banking',
    icon: Banknote,
    title: 'Banking & Financial Services',
    tagline: 'Powering the next generation of digital banking',
    challenge:
      'Financial institutions face a dual mandate: modernize decades-old core infrastructure while delivering the seamless, mobile-first experiences customers now expect — all under intensifying regulatory scrutiny.',
    solution:
      'We engineer end-to-end banking platforms spanning core banking integration (Temenos T24), mobile and internet banking, real-time payment gateways, KYC/AML compliance engines, and AI-driven fraud detection — helping institutions move faster without compromising security.',
    focusAreas: 'Core banking modernization, digital payments, regulatory compliance, fraud detection',
    clients: ['Ajman Bank', 'National Bank of Iraq (NBI)', 'Invest Bank', 'Capital Bank of Jordan'],
  },
  {
    id: 'fintech',
    icon: Wallet,
    title: 'FinTech',
    tagline: 'From neobanking to embedded finance — built to scale',
    challenge:
      'FinTech disruptors operate in a market where speed-to-launch defines survival. They need production-grade payment rails, intelligent lending engines, and automated KYC pipelines that can handle millions of transactions from day one.',
    solution:
      'We architect and deliver payment processing platforms, AI-powered credit scoring and lending systems, digital wallet infrastructure, and end-to-end KYC automation — enabling FinTech companies to launch faster and scale without re-platforming.',
    focusAreas: 'Payment infrastructure, lending platforms, KYC automation, neobanking, embedded finance',
    clients: [],
  },
  {
    id: 'ecommerce',
    icon: ShoppingBag,
    title: 'E-commerce',
    tagline: 'Omnichannel commerce engineered for conversion',
    challenge:
      'Today\'s consumers expect frictionless shopping across every channel. Retailers must unify inventory, personalize experiences at scale, and manage complex fulfillment networks — all while keeping margins intact.',
    solution:
      'We build high-performance storefronts on Shopify, WooCommerce, and Magento, design custom marketplace platforms, implement headless commerce architectures, and integrate AI-powered recommendation engines that drive measurable revenue growth.',
    focusAreas: 'Headless commerce, marketplace development, AI personalization, inventory unification',
    clients: [],
  },
  {
    id: 'manufacturing',
    icon: Factory,
    title: 'Manufacturing',
    tagline: 'Industry 4.0 — from shop floor to boardroom',
    challenge:
      'Manufacturers contend with fragmented production data, unpredictable equipment failures, and supply chain volatility — all while racing to adopt Industry 4.0 frameworks that demand real-time visibility across operations.',
    solution:
      'We deploy MES platforms, IoT-enabled production monitoring, predictive maintenance models powered by machine learning, supply chain automation workflows, and digital twin simulations that turn raw operational data into actionable intelligence.',
    focusAreas: 'MES, IoT integration, predictive maintenance, supply chain automation, digital twins',
    clients: [],
  },
  {
    id: 'crm',
    icon: Globe,
    title: 'CRM & Enterprise Systems',
    tagline: 'Unified operations that drive growth',
    challenge:
      'Enterprises operate across siloed tools that fragment the customer journey. Sales, marketing, and service teams need a single source of truth to deliver consistent experiences and make data-driven decisions at every touchpoint.',
    solution:
      'We implement, customize, and integrate leading CRM platforms — Salesforce, Odoo, Microsoft Dynamics, Zoho, and HubSpot — with your existing ERP, marketing automation, and support systems to create a true 360-degree customer view.',
    focusAreas: 'CRM implementation, ERP integration, sales automation, customer analytics',
    clients: [],
  },
  {
    id: 'healthcare',
    icon: HeartPulse,
    title: 'Healthcare',
    tagline: 'Secure, interoperable systems that improve outcomes',
    challenge:
      'Healthcare organizations must navigate strict compliance mandates (HIPAA, HL7, FHIR), bridge interoperability gaps between clinical systems, and adopt telehealth and AI diagnostics — all while keeping patient data secure.',
    solution:
      'We build EMR/EHR platforms, HIPAA-compliant telemedicine solutions, patient engagement portals, clinical decision support tools, and HL7/FHIR integration layers that enable seamless data exchange across the care continuum.',
    focusAreas: 'EMR/EHR, telemedicine, HL7/FHIR interoperability, clinical AI, compliance',
    clients: [],
  },
  {
    id: 'government',
    icon: Building2,
    title: 'Government & Public Sector',
    tagline: 'Citizen-centric digital transformation at national scale',
    challenge:
      'Government agencies must digitize public services, ensure data sovereignty, maintain accessibility standards, and coordinate complex inter-departmental workflows — often across legacy systems with limited modernization budgets.',
    solution:
      'We deliver digital identity platforms, e-governance portals, citizen service automation, secure document management systems, and cross-agency integration frameworks that make public services faster, more transparent, and universally accessible.',
    focusAreas: 'Digital identity, e-governance, citizen services, inter-agency integration',
    clients: ['Government of Uganda', 'Government of India', 'MPSEDC'],
  },
  {
    id: 'aviation',
    icon: Plane,
    title: 'Aviation',
    tagline: 'Elevating passenger experience and operational efficiency',
    challenge:
      'Airlines and aviation enterprises operate in a high-stakes, real-time environment where system downtime means grounded flights, lost revenue, and damaged trust. They need technology that scales globally while delivering personalized passenger experiences.',
    solution:
      'We build reservation and booking system integrations, passenger experience platforms, loyalty and frequent flyer programs, crew management tools, and AI-powered operations optimization that keeps airlines running smoothly at scale.',
    focusAreas: 'Booking systems, passenger experience, loyalty programs, operations AI',
    clients: ['Qatar Airways'],
  },
  {
    id: 'logistics',
    icon: Truck,
    title: 'Logistics & Supply Chain',
    tagline: 'End-to-end visibility from warehouse to last mile',
    challenge:
      'Logistics providers must deliver real-time shipment visibility, optimize routes across complex networks, automate warehouse operations, and integrate with dozens of carriers — all while customer expectations for speed continue to rise.',
    solution:
      'We engineer real-time tracking platforms, intelligent route optimization systems, warehouse management and automation solutions, fleet management dashboards, and last-mile delivery applications that reduce cost and improve delivery reliability.',
    focusAreas: 'Real-time tracking, route optimization, warehouse automation, fleet management',
    clients: [],
  },
  {
    id: 'startups',
    icon: Rocket,
    title: 'Startups & Scale-ups',
    tagline: 'Ship fast, scale smart, stay lean',
    challenge:
      'Early-stage companies must validate product-market fit rapidly, build architecture that won\'t collapse at scale, and make every engineering dollar count — all without the luxury of large in-house teams.',
    solution:
      'We serve as your extended engineering team — delivering rapid MVP development, cloud-native architecture design, CI/CD pipeline setup, and ongoing technical partnership that grows with you from seed to Series B and beyond.',
    focusAreas: 'MVP development, cloud-native architecture, rapid prototyping, fractional CTO',
    clients: [],
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="relative bg-bg-base py-28 pt-40 overflow-hidden">
        <BackgroundBlobs page="industries" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-text-muted">
              <li>
                <Link href="/" className="hover:text-accent-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-text-primary font-medium">Industries</li>
            </ol>
          </nav>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-accent-primary-400 mb-3 rounded-chip bg-accent-primary-500/10 px-3 py-1 border border-accent-primary-500/15">
            Industry Expertise
          </span>
          <h1 className="font-sans font-bold text-hero text-text-primary max-w-2xl mb-4">
            Engineered for <span className="gradient-text">Your Industry</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-xl">
            We combine deep domain expertise with cutting-edge AI, automation, and enterprise engineering to deliver solutions purpose-built for your sector.
          </p>
        </div>
      </section>

      {/* INDUSTRY QUICK NAV */}
      <section className="bg-[var(--nav-bg-scrolled)] backdrop-blur-[40px] saturate-[180%] py-4 border-b border-glass-border sticky top-20 z-30 shadow-[0_4px_30px_rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Industry sections" className="overflow-x-auto scrollbar-hide">
            <ul className="flex items-center gap-2 min-w-max" role="list">
              {industries.map(({ id, title, icon: Icon }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="flex items-center gap-2 px-3 py-2 text-xs text-text-muted hover:text-accent-primary-400 rounded-btn hover:bg-accent-primary-500/10 transition-all whitespace-nowrap"
                  >
                    <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                    {title.split(' &')[0].split(' and')[0]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <GradientDivider />

      {/* INDUSTRY SECTIONS */}
      <section className="bg-bg-base py-20 relative overflow-hidden">
        <GridPattern />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative">
          {industries.map(({ id, icon: Icon, title, tagline, challenge, solution, focusAreas, clients }, i) => (
            <AnimatedServiceCard key={id} index={i} className="scroll-mt-36">
              <div
                id={id}
                className="glass-card p-8 group"
              >
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 neo-icon-box">
                    <Icon className="w-6 h-6 text-accent-primary-400" aria-hidden="true" />
                  </div>
                  <h2 className="font-sans font-bold text-h3 text-text-primary mb-1">{title}</h2>
                  <p className="text-xs font-medium uppercase tracking-[0.15em] mb-4 text-accent-primary-400">
                    {tagline}
                  </p>

                  <div className="mb-4">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-text-muted mb-2">
                      The Challenge
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{challenge}</p>
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-text-muted mb-2">
                      Our Solution
                    </h3>
                    <p className="text-text-primary text-sm leading-relaxed">{solution}</p>
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <div className="mb-6">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-text-muted mb-2">
                      Key Focus Areas
                    </h3>
                    <p className="text-text-secondary text-sm">{focusAreas}</p>
                  </div>
                  {clients.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-text-muted mb-3">
                        Notable Clients
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {clients.map((client) => (
                          <span
                            key={client}
                            className="px-3 py-1.5 rounded-chip neo-badge text-text-secondary text-xs font-medium"
                          >
                            {client}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="mt-auto p-6 rounded-card neo-card">
                    <p className="text-text-secondary text-sm mb-4">
                      Ready to modernize your {title.toLowerCase()} operations?
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold transition-colors text-accent-primary-400 hover:text-text-primary"
                    >
                      Discuss Your Project
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            </AnimatedServiceCard>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg-base py-20 relative overflow-hidden">
        <BackgroundBlobs page="contact" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
          <div className="glass-card p-10 sm:p-14">
            <div className="relative z-10">
              <h2 className="font-sans font-bold text-h2 text-text-primary mb-4">
                Don&apos;t See Your Industry?
              </h2>
              <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
                Our expertise spans every sector. Whether you need AI integration, process automation, or a full digital transformation — let&apos;s build it together.
              </p>
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2 text-base hover:scale-[1.02]"
              >
                Contact Our Team
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
