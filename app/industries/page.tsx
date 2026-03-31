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

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description:
    'CodeFlick Technologies serves Banking, FinTech, E-commerce, Manufacturing, CRM, Healthcare, Government, Aviation, Logistics, and Startups — delivering specialized IT solutions for every sector.',
};

const industries = [
  {
    id: 'banking',
    icon: Banknote,
    title: 'Banking & Financial Services',
    tagline: 'Secure, compliant, and scalable FinTech',
    challenge:
      'Banks face mounting pressure to modernize core systems, meet compliance requirements, and deliver digital-first customer experiences while managing legacy infrastructure.',
    solution:
      'We deliver end-to-end banking solutions — from core banking integration (Temenos T24) to mobile banking apps, KYC/AML systems, payment gateways, and AI-driven fraud detection.',
    focusAreas: 'Digital banking, core integration, compliance, fraud detection',
    clients: ['Ajman Bank', 'National Bank of Iraq (NBI)', 'Invest Bank', 'Capital Bank of Jordan'],
    accent: 'cyan',
  },
  {
    id: 'fintech',
    icon: Wallet,
    title: 'FinTech',
    tagline: 'Payments, lending, and neobanking platforms',
    challenge:
      'FinTech companies need rapid-to-market payment solutions, robust lending platforms, and seamless KYC automation to stay competitive in a fast-moving market.',
    solution:
      'We build payment solutions, lending platforms, KYC automation systems, and neobanking infrastructure that scales with your growth.',
    focusAreas: 'Payment solutions, lending, KYC automation, neobanking',
    clients: [],
    accent: 'violet',
  },
  {
    id: 'ecommerce',
    icon: ShoppingBag,
    title: 'E-commerce',
    tagline: 'Commerce that converts everywhere',
    challenge:
      'E-commerce businesses must deliver seamless omnichannel experiences, manage complex inventory across channels, and personalize customer journeys at scale.',
    solution:
      'We build Shopify, WooCommerce, and Magento stores, custom marketplace platforms, headless commerce architecture, and unified inventory management systems.',
    focusAreas: 'Shopify, WooCommerce, Magento, marketplaces',
    clients: [],
    accent: 'cyan',
  },
  {
    id: 'manufacturing',
    icon: Factory,
    title: 'Manufacturing',
    tagline: 'Smart factories powered by data',
    challenge:
      'Manufacturers struggle with production visibility, predictive maintenance, supply chain disruptions, and the shift from legacy MES to modern Industry 4.0 frameworks.',
    solution:
      'We implement MES systems, supply chain automation, IoT sensor integration, predictive maintenance ML models, and Industry 4.0 digital twin technology.',
    focusAreas: 'MES, supply chain automation, IoT, Industry 4.0',
    clients: [],
    accent: 'violet',
  },
  {
    id: 'crm',
    icon: Globe,
    title: 'CRM & Sales',
    tagline: 'Unified business operations at scale',
    challenge:
      'Sales teams need unified CRM platforms that connect marketing, sales, and service across the organization for a 360-degree customer view.',
    solution:
      'We implement and customize Salesforce, Odoo, Microsoft Dynamics, Zoho, and HubSpot with full integration across your business systems.',
    focusAreas: 'Salesforce, Odoo, Microsoft Dynamics',
    clients: [],
    accent: 'cyan',
  },
  {
    id: 'healthcare',
    icon: HeartPulse,
    title: 'Healthcare',
    tagline: 'Technology that improves patient outcomes',
    challenge:
      'Healthcare providers need interoperable systems, compliant data management, telemedicine infrastructure, and AI tools that augment clinical decision-making.',
    solution:
      'We build EMR/EHR systems, telemedicine platforms, EHS compliance tools, patient portals, and HL7/FHIR integration layers.',
    focusAreas: 'EMR, EHR, EHS, telemedicine, HL7/FHIR',
    clients: [],
    accent: 'violet',
  },
  {
    id: 'government',
    icon: Building2,
    title: 'Government',
    tagline: 'Digital government that serves citizens',
    challenge:
      'Government agencies need secure, accessible, and scalable digital infrastructure to deliver public services, manage data, and automate processes across departments.',
    solution:
      'We design digital identity systems, e-governance platforms, citizen service portals, and inter-departmental integrations.',
    focusAreas: 'Digital identity, e-governance, citizen services',
    clients: ['Government of Uganda', 'Government of India', 'MPSEDC'],
    accent: 'cyan',
  },
  {
    id: 'aviation',
    icon: Plane,
    title: 'Aviation',
    tagline: 'Technology that keeps operations airborne',
    challenge:
      'Aviation enterprises need real-time operational systems, seamless passenger experiences, and complex integrations across global supply chains.',
    solution:
      'We build booking system integrations, customer experience platforms, loyalty programs, and AI-powered operations optimization.',
    focusAreas: 'Booking systems, customer experience, loyalty programs',
    clients: ['Qatar Airways'],
    accent: 'violet',
  },
  {
    id: 'logistics',
    icon: Truck,
    title: 'Logistics',
    tagline: 'Visibility and efficiency across your supply chain',
    challenge:
      'Logistics companies need real-time shipment tracking, route optimization, warehouse automation, and seamless carrier integrations to stay competitive.',
    solution:
      'We build tracking systems, warehouse automation platforms, fleet management tools, and last-mile delivery solutions.',
    focusAreas: 'Tracking systems, warehouse automation, fleet management',
    clients: [],
    accent: 'cyan',
  },
  {
    id: 'startups',
    icon: Rocket,
    title: 'Startups',
    tagline: 'Move fast with the right foundation',
    challenge:
      'Startups need to validate ideas quickly with MVPs, build scalable architecture from day one, and iterate rapidly without burning through their runway.',
    solution:
      'We deliver MVP development, scalable architecture design, rapid prototyping, and ongoing technical partnership as you scale.',
    focusAreas: 'MVP development, scalable architecture, rapid prototyping',
    clients: [],
    accent: 'violet',
  },
];

export default function IndustriesPage() {
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
              <li className="text-text-primary font-medium">Industries</li>
            </ol>
          </nav>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent-primary-400 mb-3 rounded-chip bg-accent-primary-500/10 px-3 py-1">
            Industry Expertise
          </span>
          <h1 className="font-sans font-bold text-hero text-text-primary max-w-2xl mb-4">
            Built for <span className="gradient-text">Your Industry</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-xl">
            Domain-specific technology solutions for banking, aviation, government, manufacturing,
            healthcare, and more.
          </p>
        </div>
      </section>

      {/* INDUSTRY QUICK NAV */}
      <section className="bg-bg-surface py-4 border-b border-white/8 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Industry sections" className="overflow-x-auto scrollbar-hide">
            <ul className="flex items-center gap-2 min-w-max" role="list">
              {industries.map(({ id, title, icon: Icon }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="flex items-center gap-2 px-3 py-2 text-xs text-text-muted hover:text-text-primary rounded-btn hover:bg-bg-elevated transition-all whitespace-nowrap"
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

      {/* INDUSTRY SECTIONS */}
      <section className="bg-bg-base py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {industries.map(({ id, icon: Icon, title, tagline, challenge, solution, focusAreas, clients, accent }) => (
            <div
              key={id}
              id={id}
              className={`p-8 rounded-card bg-bg-surface border transition-all duration-300 scroll-mt-36 hover:shadow-card-hover ${
                accent === 'cyan'
                  ? 'border-white/8 hover:border-accent-primary-500/25'
                  : 'border-white/8 hover:border-accent-secondary-500/25'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left */}
                <div>
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
                    className={`text-xs font-medium uppercase tracking-widest mb-4 ${
                      accent === 'cyan' ? 'text-accent-primary-400' : 'text-accent-secondary-400'
                    }`}
                  >
                    {tagline}
                  </p>

                  <div className="mb-4">
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-2">
                      The Challenge
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{challenge}</p>
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-2">
                      Our Solution
                    </h3>
                    <p className="text-text-primary text-sm leading-relaxed">{solution}</p>
                  </div>
                </div>

                {/* Right */}
                <div className="flex flex-col justify-between">
                  <div className="mb-6">
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-2">
                      Key Focus Areas
                    </h3>
                    <p className="text-text-secondary text-sm">{focusAreas}</p>
                  </div>
                  {clients.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">
                        Notable Clients
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {clients.map((client) => (
                          <span
                            key={client}
                            className="px-3 py-1.5 rounded-chip bg-bg-elevated border border-white/8 text-text-secondary text-xs font-medium"
                          >
                            {client}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="mt-auto p-6 rounded-card bg-bg-elevated border border-white/8">
                    <p className="text-text-secondary text-sm mb-4">
                      Ready to modernize your {title.toLowerCase()} operations?
                    </p>
                    <Link
                      href="/contact"
                      className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                        accent === 'cyan'
                          ? 'text-accent-primary-400 hover:text-accent-primary-300'
                          : 'text-accent-secondary-400 hover:text-accent-secondary-400/80'
                      }`}
                    >
                      Discuss Your Project
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg-surface py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-bg-mesh opacity-70 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-sans font-bold text-h2 text-text-primary mb-4">
            Don&apos;t See Your Industry?
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
            We work across all sectors. Contact us to discuss how we can solve your specific
            technology challenges.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-cta text-white font-semibold text-base rounded-btn shadow-glow-cyan hover:brightness-110 hover:shadow-glow-violet transition-all duration-200 hover:scale-[1.02]"
          >
            Contact Our Team
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
