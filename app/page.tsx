import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Brain,
  Banknote,
  ShoppingCart,
  Cpu,
  Factory,
  HeartPulse,
  Zap,
  Globe,
  Award,
  TrendingUp,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import HomeAnimations from '@/components/HomeAnimations';
import BackgroundBlobs from '@/components/BackgroundBlobs';

export const metadata: Metadata = {
  title: 'CodeFlick Technologies — From Software to AI, We Build Everything',
  description:
    'End-to-end IT solutions across AI, Automation, FinTech, E-commerce, Manufacturing, CRM, and Healthcare. Trusted by Ajman Bank, Qatar Airways, and global enterprises.',
};

const services = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description:
      'Chatbots, predictive analytics, LLM integration, AI agents, computer vision, NLP, and generative AI solutions.',
  },
  {
    icon: Zap,
    title: 'Automation',
    description:
      'Power Automate, Power Apps, n8n, Make — BPA, RPA, workflow automation, and intelligent document processing.',
  },
  {
    icon: Cpu,
    title: 'Software Development',
    description:
      'Web apps, mobile apps, SaaS, enterprise applications, SDK development, middleware, and API development.',
  },
  {
    icon: Banknote,
    title: 'FinTech Solutions',
    description:
      'Digital banking, payment gateways, KYC systems, core banking integration, loan management, and asset management.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    description:
      'Shopify, WordPress/WooCommerce, Magento, custom platforms, and headless commerce architecture.',
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description:
      'MES, supply chain automation, IoT integration, predictive maintenance, and Industry 4.0 smart factory solutions.',
  },
  {
    icon: Globe,
    title: 'CRM Solutions',
    description:
      'Salesforce, Odoo, Microsoft Dynamics, Zoho, HubSpot — implementation, customization, and integration.',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare',
    description:
      'EMR/EHR systems, telemedicine platforms, HL7 & FHIR integration, EHS compliance, and remote monitoring.',
  },
];

const stats = [
  { value: '50+', label: 'Enterprise Clients' },
  { value: '10+', label: 'Countries Served' },
  { value: '8', label: 'Industry Verticals' },
  { value: '15+', label: 'Years of Excellence' },
];

const clients = [
  'Ajman Bank',
  'National Bank of Iraq',
  'Invest Bank',
  'Capital Bank of Jordan',
  'Qatar Airways',
  'Govt. of Uganda',
  'Govt. of India',
  'MPSEDC',
];

const whyUs = [
  'Deep domain expertise — AI, Automation, FinTech, E-commerce, Manufacturing, CRM, Healthcare',
  'Global client base — Ajman Bank, NBI, Qatar Airways, Government of India, and more',
  'End-to-end IT solutions — from strategy to execution, software to AI',
  'Global presence — offices in India (Bhopal) and Qatar (Doha)',
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'CodeFlick Technologies',
  url: 'https://codeftech.com',
  logo: 'https://codeftech.com/logo.png',
  email: 'info@codeftech.com',
  description:
    'CodeFlick Technologies delivers end-to-end IT solutions across AI, Automation, FinTech, E-commerce, Manufacturing, CRM, and Healthcare.',
  slogan: 'From Software to AI — We Build Everything',
  areaServed: ['Middle East', 'Africa', 'South Asia', 'Europe'],
  sameAs: ['https://linkedin.com', 'https://twitter.com'],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center bg-bg-base overflow-hidden">
        <BackgroundBlobs page="home" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-32">
          <HomeAnimations clients={clients} />
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-bg-base py-24 relative overflow-hidden" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent-primary-400 mb-3">
              What We Build
            </p>
            <h2 className="font-sans font-bold text-h2 text-white">
              End-to-End Technology Services
            </h2>
            <p className="mt-4 text-text-secondary text-lg max-w-2xl mx-auto">
              From intelligent automation to enterprise platforms — we cover every layer of your
              digital stack.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="glass-card p-6 hover:border-[rgba(229,62,62,0.30)]"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-accent-primary-500/15">
                    <Icon className="w-6 h-6 text-accent-primary-400" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-white text-sm mb-2">{title}</h3>
                  <p className="text-text-muted text-xs leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-accent-primary-300 font-semibold text-sm hover:text-white transition-colors"
            >
              View all services
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-bg-base py-20 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 sm:p-12">
            <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map(({ value, label }, i) => (
                <div key={label} className={`text-center ${i < stats.length - 1 ? 'lg:border-r lg:border-white/10' : ''}`}>
                  <p className="font-sans font-bold text-display gradient-text mb-2">{value}</p>
                  <p className="text-text-secondary text-sm font-medium">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT LOGOS */}
      <section className="bg-bg-base py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-text-muted mb-3">
              Trusted by
            </p>
            <h2 className="font-sans font-bold text-h2 text-white">
              Global Leaders
            </h2>
            <p className="text-text-secondary mt-2">
              Banks, airlines, governments, and enterprises across 10+ countries
            </p>
          </div>
          <div className="glass-card p-4 sm:p-6">
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4">
              {clients.map((client) => (
                <div
                  key={client}
                  className="flex items-center justify-center h-16 rounded-btn border border-white/[0.08] px-4 hover:border-accent-primary-500/30 hover:bg-white/[0.04] transition-all duration-200"
                >
                  <span className="text-text-secondary font-medium text-sm text-center">{client}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-bg-base py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-8 sm:p-10">
            <div className="relative z-10">
              <span className="text-6xl text-accent-primary-500/30 leading-none">&ldquo;</span>
              <blockquote className="text-text-secondary text-lg italic leading-relaxed mb-4 -mt-4">
                They delivered a complex digital onboarding solution for our bank with exceptional quality and speed.
              </blockquote>
              <p className="text-accent-primary-400 font-semibold text-sm">— Ajman Bank Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CODEFLICK */}
      <section className="bg-bg-base py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-accent-primary-400 mb-3">
                Why CodeFlick
              </p>
              <h2 className="font-sans font-bold text-h2 text-white mb-6">
                A Technology Partner You Can Trust
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                We combine deep technical expertise with domain knowledge across banking, aviation,
                government, and healthcare — delivering solutions that scale globally.
              </p>
              <ul className="space-y-4">
                {whyUs.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 text-accent-primary-500 flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-text-secondary text-base">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-accent-primary-300 font-semibold hover:text-white transition-colors"
                >
                  Learn more about us
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Visual side */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Brain, label: 'AI-Powered', sub: 'LLMs, ML, Computer Vision' },
                { icon: Globe, label: 'Global Reach', sub: '10+ Countries, 50+ Clients' },
                { icon: Award, label: 'Enterprise Grade', sub: 'ISO-ready, Secure, Scalable' },
                { icon: TrendingUp, label: 'Proven Growth', sub: '15+ Years of Delivery' },
              ].map(({ icon: Icon, label, sub }) => (
                <div
                  key={label}
                  className="glass-card p-6 hover:border-[rgba(229,62,62,0.30)]"
                >
                  <div className="relative z-10">
                    <Icon className="w-8 h-8 text-accent-primary-400 mb-3" aria-hidden="true" />
                    <p className="font-semibold text-white text-sm mb-1">{label}</p>
                    <p className="text-text-muted text-xs">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-bg-base py-20 relative overflow-hidden">
        <BackgroundBlobs page="contact" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-10 sm:p-14">
            <div className="relative z-10">
              <h2 className="font-sans font-bold text-h2 text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-text-secondary text-lg mb-10 max-w-2xl mx-auto">
                Talk to our experts and discover how CodeFlick Technologies can accelerate your digital
                journey.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center gap-2 text-base hover:scale-[1.02]"
                >
                  Start a Project
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
                <Link
                  href="/services"
                  className="btn-secondary inline-flex items-center gap-2 text-base font-semibold"
                >
                  Browse Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
