import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Brain,
  Banknote,
  ShoppingCart,
  Cpu,
  Cloud,
  Shield,
  Zap,
  Globe,
  Award,
  TrendingUp,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import HomeAnimations from '@/components/HomeAnimations';

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
      'Chatbots, predictive analytics, LLM integration, AI agents, computer vision, and generative AI solutions.',
    accent: 'cyan',
  },
  {
    icon: Banknote,
    title: 'FinTech Solutions',
    description:
      'Digital banking, payment gateways, KYC systems, core banking integration (Temenos T24), and wealth management.',
    accent: 'violet',
  },
  {
    icon: Zap,
    title: 'Automation',
    description:
      'Power Automate, Power Apps, n8n, Make — BPA, RPA, workflow automation, and intelligent document processing.',
    accent: 'cyan',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    description:
      'Scalable storefronts, headless commerce, marketplace integrations, and omnichannel solutions.',
    accent: 'violet',
  },
  {
    icon: Cpu,
    title: 'Software Development',
    description:
      'Web apps, mobile apps, SaaS, SDK development, middleware, APIs, microservices, and enterprise applications.',
    accent: 'cyan',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description:
      'AWS, Azure, GCP deployment, CI/CD pipelines, containerization, infrastructure as code, and cloud migration.',
    accent: 'violet',
  },
  {
    icon: Shield,
    title: 'Cyber Security',
    description:
      'Security audits, penetration testing, compliance (ISO 27001, SOC 2), threat intelligence, and SIEM.',
    accent: 'cyan',
  },
  {
    icon: Globe,
    title: 'CRM & ERP',
    description:
      'Salesforce, Odoo, Microsoft Dynamics — implementation, customization, integration, and training.',
    accent: 'violet',
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
  'Deep expertise across all technology disciplines — AI to legacy system modernization',
  'Proven delivery for global banks, government bodies, and Fortune-class enterprises',
  'Multi-industry specialization: FinTech, Aviation, Government, Healthcare & more',
  'Agile, transparent delivery with dedicated project management and 24/7 support',
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
        {/* Mesh gradient background */}
        <div className="absolute inset-0 bg-gradient-bg-mesh pointer-events-none" aria-hidden="true" />
        {/* Dot grid overlay */}
        <div className="absolute inset-0 dot-grid opacity-40" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-32">
          <HomeAnimations clients={clients} />
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-bg-surface py-24" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent-primary-400 mb-3">
              What We Build
            </p>
            <h2 className="font-sans font-bold text-h2 text-text-primary">
              End-to-End Technology Services
            </h2>
            <p className="mt-4 text-text-secondary text-lg max-w-2xl mx-auto">
              From intelligent automation to enterprise platforms — we cover every layer of your
              digital stack.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(({ icon: Icon, title, description, accent }) => (
              <div
                key={title}
                className={`group p-6 rounded-card bg-bg-elevated border transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${
                  accent === 'cyan'
                    ? 'border-white/8 hover:border-accent-primary-500/35'
                    : 'border-white/8 hover:border-accent-secondary-500/35'
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-lg flex items-center justify-center mb-4 ${
                    accent === 'cyan'
                      ? 'bg-accent-primary-500/10'
                      : 'bg-accent-secondary-500/10'
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${
                      accent === 'cyan' ? 'text-accent-primary-400' : 'text-accent-secondary-400'
                    }`}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-semibold text-text-primary text-sm mb-2">{title}</h3>
                <p className="text-text-muted text-xs leading-relaxed">{description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-accent-primary-400 font-semibold text-sm hover:text-accent-primary-300 transition-colors"
            >
              View all services
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-bg-base py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-bg-mesh opacity-50 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="font-sans font-bold text-display text-accent-primary-400 mb-2">{value}</p>
                <p className="text-text-secondary text-sm font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT LOGOS */}
      <section className="bg-bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-text-muted mb-3">
              Trusted by
            </p>
            <h2 className="font-sans font-bold text-h2 text-text-primary">
              Global Leaders
            </h2>
            <p className="text-text-secondary mt-2">
              Banks, airlines, governments, and enterprises across 10+ countries
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {clients.map((client) => (
              <div
                key={client}
                className="flex items-center justify-center h-16 rounded-card border border-white/8 px-4 hover:border-accent-primary-500/30 hover:bg-bg-elevated transition-all duration-200"
              >
                <span className="text-text-secondary font-medium text-sm text-center">{client}</span>
              </div>
            ))}
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
              <h2 className="font-sans font-bold text-h2 text-text-primary mb-6">
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
                  className="inline-flex items-center gap-2 text-accent-primary-400 font-semibold hover:text-accent-primary-300 transition-colors"
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
                  className="p-6 rounded-card bg-bg-surface border border-white/8 hover:border-accent-primary-500/30 transition-all duration-300 hover:shadow-glow-cyan"
                >
                  <Icon className="w-8 h-8 text-accent-primary-400 mb-3" aria-hidden="true" />
                  <p className="font-semibold text-text-primary text-sm mb-1">{label}</p>
                  <p className="text-text-muted text-xs">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-bg-surface py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-bg-mesh opacity-70 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 border-y border-white/8 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-sans font-bold text-h2 text-text-primary mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-text-secondary text-lg mb-10 max-w-2xl mx-auto">
            Talk to our experts and discover how CodeFlick Technologies can accelerate your digital
            journey.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-cta text-white font-semibold text-base rounded-btn shadow-glow-cyan hover:brightness-110 hover:shadow-glow-violet transition-all duration-200 hover:scale-[1.02]"
            >
              Start a Project
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 border border-accent-primary-500/50 text-accent-primary-400 hover:bg-accent-primary-500/10 font-semibold text-base rounded-btn transition-all duration-200"
            >
              Browse Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
