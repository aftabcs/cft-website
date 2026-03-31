import type { Metadata } from 'next';
import Link from 'next/link';
import {
  CheckCircle,
  Globe,
  Award,
  Users,
  TrendingUp,
  ArrowRight,
  Lightbulb,
  Shield,
  Handshake,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'CodeFlick Technologies — a core IT solutions company with 15+ years of expertise delivering AI, FinTech, Automation, and Enterprise software to global leaders including Ajman Bank, Qatar Airways, and governments worldwide.',
};

const expertise = [
  {
    domain: 'Software Development',
    capabilities:
      'Web Apps, Mobile Apps, SaaS, Enterprise Applications, SDK & Middleware Development, APIs, Microservices',
  },
  {
    domain: 'AI & Machine Learning',
    capabilities:
      'Chatbots, Predictive Analytics, ML Models, Computer Vision, NLP, LLM Integration, AI Agents, Generative AI',
  },
  {
    domain: 'Automation',
    capabilities:
      'Power Automate, Power Apps, n8n, Make, BPA, RPA, Workflow Automation, CRM/ERP Automation, Document Automation',
  },
  {
    domain: 'FinTech Solutions',
    capabilities:
      'Digital Banking, Payment Gateways, KYC Systems, Core Banking Integration (Temenos T24), Asset Management, Treasury Systems',
  },
  {
    domain: 'E-commerce Solutions',
    capabilities:
      'Custom Storefronts, Headless Commerce, Marketplace Integrations, Payment Processing, Inventory Management',
  },
  {
    domain: 'Cloud & DevOps',
    capabilities:
      'AWS, Azure, GCP, CI/CD Pipelines, Containerization (Docker/K8s), Infrastructure as Code, Cloud Migration',
  },
];

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'We stay at the forefront of technology, continuously integrating AI, automation, and emerging tech into client solutions.',
    accent: 'cyan',
  },
  {
    icon: Award,
    title: 'Quality',
    description:
      'Every project meets the highest standards of code quality, security, performance, and scalability.',
    accent: 'violet',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description:
      'We operate with full transparency — honest timelines, clear communication, and zero hidden costs.',
    accent: 'cyan',
  },
  {
    icon: Handshake,
    title: 'Partnership',
    description:
      'We build long-term relationships, acting as a strategic technology partner, not just a vendor.',
    accent: 'violet',
  },
];

const clients = [
  'Ajman Bank',
  'National Bank of Iraq (NBI)',
  'Invest Bank',
  'Capital Bank of Jordan',
  'Qatar Airways',
  'Government of Uganda',
  'Government of India',
  'MPSEDC',
];

const stats = [
  { value: '50+', label: 'Enterprise Clients', icon: Users },
  { value: '10+', label: 'Countries Served', icon: Globe },
  { value: '8', label: 'Industry Verticals', icon: TrendingUp },
  { value: '15+', label: 'Years of Excellence', icon: Award },
];

export default function AboutPage() {
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
              <li className="text-text-primary font-medium">About Us</li>
            </ol>
          </nav>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent-primary-400 mb-3 rounded-chip bg-accent-primary-500/10 px-3 py-1">
            Our Story
          </span>
          <h1 className="font-sans font-bold text-hero text-text-primary max-w-2xl">
            Building the Future of{' '}
            <span className="gradient-text">Enterprise Technology</span>
          </h1>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-bg-surface py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-accent-primary-400 mb-3">
                Who We Are
              </p>
              <h2 className="font-sans font-bold text-h2 text-text-primary mb-6">
                A Core IT Solutions Company
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                <strong className="text-text-primary">CodeFlick Technologies</strong> is a core IT solutions company providing
                end-to-end technology services across multiple industries and domains. With deep
                expertise across all technology disciplines — including Software Development,
                Artificial Intelligence, Machine Learning, Automation, Cloud Computing, Data
                Analytics, Cyber Security, DevOps, System Integration, Enterprise Applications, CRM,
                ERP, API Development, SDK Development, Middleware, and IT Consulting.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                Our focus spans across FinTech, E-commerce, Manufacturing, CRM, Healthcare,
                Education, Logistics, Government, and more. Whether it&apos;s custom software
                development, AI-driven automation, cloud infrastructure, or API integrations, we
                deliver solutions that drive efficiency, innovation, and business growth.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label, icon: Icon }) => (
                <div
                  key={label}
                  className="p-6 rounded-card bg-bg-elevated border border-white/8 text-center hover:border-accent-primary-500/30 hover:shadow-glow-cyan transition-all"
                >
                  <Icon className="w-8 h-8 text-accent-primary-400 mx-auto mb-3" aria-hidden="true" />
                  <p className="font-sans font-bold text-4xl text-text-primary mb-1">{value}</p>
                  <p className="text-text-muted text-sm">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="bg-bg-base py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent-primary-400 mb-3">
              Our Expertise
            </p>
            <h2 className="font-sans font-bold text-h2 text-text-primary">
              Deep Capability Across Every Technology Domain
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {expertise.map(({ domain, capabilities }) => (
              <div
                key={domain}
                className="p-6 rounded-card bg-bg-surface border border-white/8 hover:border-accent-primary-500/30 hover:shadow-card-hover transition-all duration-200"
              >
                <h3 className="font-semibold text-text-primary text-base mb-2">{domain}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{capabilities}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-bg-surface py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent-primary-400 mb-3">
              Our Values
            </p>
            <h2 className="font-sans font-bold text-h2 text-text-primary">
              What Drives Us Every Day
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ icon: Icon, title, description, accent }) => (
              <div
                key={title}
                className={`p-6 rounded-card bg-bg-elevated border transition-all duration-300 text-center hover:shadow-card-hover ${
                  accent === 'cyan'
                    ? 'border-white/8 hover:border-accent-primary-500/30'
                    : 'border-white/8 hover:border-accent-secondary-500/30'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
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
                <h3 className="font-semibold text-text-primary text-base mb-2">{title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT LOGOS */}
      <section className="bg-bg-base py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-text-muted mb-3">
              Recent Clients
            </p>
            <h2 className="font-sans font-bold text-h2 text-text-primary">
              Trusted by Global Leaders
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {clients.map((client) => (
              <div
                key={client}
                className="flex items-center justify-center h-16 rounded-card border border-white/8 px-4 hover:border-accent-primary-500/30 hover:bg-bg-surface transition-all duration-200"
              >
                <span className="text-text-secondary font-medium text-sm text-center">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg-surface py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-bg-mesh opacity-70 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-sans font-bold text-h2 text-text-primary mb-4">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
            Whether you&apos;re starting a new project or modernizing an existing system, our team
            is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-cta text-white font-semibold text-base rounded-btn shadow-glow-cyan hover:brightness-110 hover:shadow-glow-violet transition-all duration-200 hover:scale-[1.02]"
            >
              Contact Us Today
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 border border-accent-primary-500/50 text-accent-primary-400 hover:bg-accent-primary-500/10 font-semibold text-base rounded-btn transition-all duration-200"
            >
              View Our Services
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
