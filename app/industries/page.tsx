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
              <li className="text-white font-medium">Industries</li>
            </ol>
          </nav>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-accent-primary-400 mb-3 rounded-chip bg-accent-primary-500/10 px-3 py-1 border border-accent-primary-500/15">
            Industry Expertise
          </span>
          <h1 className="font-sans font-bold text-hero text-white max-w-2xl mb-4">
            Built for <span className="gradient-text">Your Industry</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-xl">
            Domain-specific technology solutions for banking, aviation, government, manufacturing,
            healthcare, and more.
          </p>
        </div>
      </section>

      {/* INDUSTRY QUICK NAV */}
      <section className="bg-[rgba(5,5,5,0.70)] backdrop-blur-[40px] saturate-[180%] py-4 border-b border-white/[0.06] sticky top-20 z-30">
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

      {/* INDUSTRY SECTIONS */}
      <section className="bg-bg-base py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {industries.map(({ id, icon: Icon, title, tagline, challenge, solution, focusAreas, clients }) => (
            <div
              key={id}
              id={id}
              className="glass-card p-8 scroll-mt-36 group"
            >
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-accent-primary-500/10 group-hover:bg-accent-primary-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-accent-primary-400" aria-hidden="true" />
                  </div>
                  <h2 className="font-sans font-bold text-h3 text-white mb-1">{title}</h2>
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
                    <p className="text-white text-sm leading-relaxed">{solution}</p>
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
                            className="px-3 py-1.5 rounded-chip bg-accent-primary-500/8 border border-accent-primary-500/15 text-text-secondary text-xs font-medium"
                          >
                            {client}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="mt-auto p-6 rounded-card bg-white/[0.02] border border-white/[0.06]">
                    <p className="text-text-secondary text-sm mb-4">
                      Ready to modernize your {title.toLowerCase()} operations?
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold transition-colors text-accent-primary-400 hover:text-white"
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
      <section className="bg-bg-base py-20 relative overflow-hidden">
        <BackgroundBlobs page="contact" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-10 sm:p-14">
            <div className="relative z-10">
              <h2 className="font-sans font-bold text-h2 text-white mb-4">
                Don&apos;t See Your Industry?
              </h2>
              <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
                We work across all sectors. Contact us to discuss how we can solve your specific
                technology challenges.
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
        </div>
      </section>
    </>
  );
}
