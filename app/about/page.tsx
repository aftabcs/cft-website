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
import BackgroundBlobs from '@/components/BackgroundBlobs';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'CodeFlick Technologies — a core IT solutions company with 15+ years of expertise delivering AI, FinTech, Automation, and Enterprise software to global leaders including Ajman Bank, Qatar Airways, and governments worldwide.',
};

const expertise = [
  {
    domain: 'Artificial Intelligence & ML',
    capabilities:
      'Chatbots, Predictive Analytics, ML Models, AI Automation, Computer Vision, NLP, LLM Integration, AI Agents, Generative AI',
  },
  {
    domain: 'Automation',
    capabilities:
      'Power Automate, Power Apps, n8n, Make, BPA, RPA, Workflow Automation',
  },
  {
    domain: 'Software Development',
    capabilities:
      'Web Apps, Mobile Apps, SaaS, Enterprise Applications, SDK Development, Middleware, API Development',
  },
  {
    domain: 'FinTech Solutions',
    capabilities:
      'Digital Banking, Payment Gateways, KYC Systems, Banking APIs, Core Banking Integration',
  },
  {
    domain: 'E-commerce Solutions',
    capabilities:
      'Shopify, WordPress/WooCommerce, Magento, Custom Platforms',
  },
  {
    domain: 'CRM Solutions',
    capabilities:
      'Salesforce, Odoo, Microsoft Dynamics, Zoho, HubSpot',
  },
  {
    domain: 'Healthcare Solutions',
    capabilities:
      'EMR, EHR, EHS, Telemedicine, HL7/FHIR Integration',
  },
  {
    domain: 'Cloud & DevOps',
    capabilities:
      'AWS, Azure, GCP, CI/CD, Docker, Kubernetes',
  },
];

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'We stay at the forefront of technology, continuously integrating AI, automation, and emerging tech into client solutions.',
  },
  {
    icon: Award,
    title: 'Quality',
    description:
      'Every project meets the highest standards of code quality, security, performance, and scalability.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description:
      'We operate with full transparency — honest timelines, clear communication, and zero hidden costs.',
  },
  {
    icon: Handshake,
    title: 'Partnership',
    description:
      'We build long-term relationships, acting as a strategic technology partner, not just a vendor.',
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
        <BackgroundBlobs page="about" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-text-muted">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-medium">About Us</li>
            </ol>
          </nav>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-accent-primary-400 mb-3 rounded-chip bg-accent-primary-500/10 px-3 py-1">
            Our Story
          </span>
          <h1 className="font-sans font-bold text-hero text-white max-w-2xl">
            Building the Future of{' '}
            <span className="gradient-text">Enterprise Technology</span>
          </h1>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-bg-base py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-accent-primary-400 mb-3">
                Who We Are
              </p>
              <h2 className="font-sans font-bold text-h2 text-white mb-6">
                A Core IT Solutions Company
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                <strong className="text-white">CodeFlick Technologies</strong> is a core IT solutions company providing
                end-to-end technology services across multiple industries and domains. With deep
                expertise across all technology disciplines — including Software Development,
                Artificial Intelligence, Machine Learning, Automation, Cloud Computing, Data
                Analytics, DevOps, System Integration, Enterprise Applications, CRM,
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
                  className="glass-card p-6 text-center hover:border-[rgba(229,62,62,0.30)]"
                >
                  <div className="relative z-10">
                    <Icon className="w-8 h-8 text-accent-primary-400 mx-auto mb-3" aria-hidden="true" />
                    <p className="font-sans font-bold text-4xl text-white mb-1">{value}</p>
                    <p className="text-text-muted text-sm">{label}</p>
                  </div>
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
            <h2 className="font-sans font-bold text-h2 text-white">
              Deep Capability Across Every Technology Domain
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {expertise.map(({ domain, capabilities }) => (
              <div
                key={domain}
                className="glass-card p-6 hover:border-[rgba(229,62,62,0.30)]"
              >
                <div className="relative z-10">
                  <h3 className="font-semibold text-white text-base mb-2">{domain}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{capabilities}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE TEAM */}
      <section className="bg-bg-base py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent-primary-400 mb-3">
              Our Team
            </p>
            <h2 className="font-sans font-bold text-h2 text-white">
              Core Team
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="glass-card p-6 text-center hover:border-[rgba(229,62,62,0.30)]">
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-accent-primary-500/15 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent-primary-400" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-white text-lg mb-1">Zen Hadi</h3>
                <p className="text-text-muted text-xs mb-2">(زين هادي)</p>
                <p className="text-accent-primary-400 text-sm font-medium">Strategic Advisor / Consultant</p>
                <p className="text-text-muted text-xs mt-1">India</p>
              </div>
            </div>
            <div className="glass-card p-6 text-center hover:border-[rgba(229,62,62,0.30)]">
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-accent-primary-500/15 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent-primary-400" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-white text-lg mb-1">Faris Marwan</h3>
                <p className="text-text-muted text-xs mb-2">(فارس مروان)</p>
                <p className="text-accent-primary-400 text-sm font-medium">AI/ML & Automation Expert</p>
                <p className="text-text-muted text-xs mt-1">India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFICE LOCATIONS */}
      <section className="bg-bg-base py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent-primary-400 mb-3">
              Our Offices
            </p>
            <h2 className="font-sans font-bold text-h2 text-white">
              Global Presence
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="glass-card p-6 hover:border-[rgba(229,62,62,0.30)]">
              <div className="relative z-10">
                <h3 className="font-semibold text-white text-base mb-2">India (HQ)</h3>
                <p className="text-text-secondary text-sm mb-1">Bhopal, Madhya Pradesh, India</p>
                <p className="text-text-muted text-xs mb-1">Core Development, AI Research, Global Operations</p>
                <p className="text-accent-primary-400 text-sm mt-3">+91 7987421429</p>
                <p className="text-accent-primary-400 text-sm">+91 9807950347</p>
              </div>
            </div>
            <div className="glass-card p-6 hover:border-[rgba(229,62,62,0.30)]">
              <div className="relative z-10">
                <h3 className="font-semibold text-white text-base mb-2">Qatar</h3>
                <p className="text-text-secondary text-sm mb-1">Alsaad Street, Doha, Qatar</p>
                <p className="text-text-muted text-xs mb-1">Middle East Sales, Client Success, Strategic Partnerships</p>
                <p className="text-accent-primary-400 text-sm mt-3">+974 5540 2909</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-bg-base py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent-primary-400 mb-3">
              Our Values
            </p>
            <h2 className="font-sans font-bold text-h2 text-white">
              What Drives Us Every Day
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="glass-card p-6 text-center hover:border-[rgba(229,62,62,0.30)]"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-accent-primary-500/15">
                    <Icon className="w-6 h-6 text-accent-primary-400" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-white text-base mb-2">{title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{description}</p>
                </div>
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
            <h2 className="font-sans font-bold text-h2 text-white">
              Trusted by Global Leaders
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {clients.map((client) => (
              <div
                key={client}
                className="flex items-center justify-center h-16 rounded-card border border-white/[0.08] px-4 hover:border-accent-primary-500/30 hover:bg-white/[0.04] backdrop-blur-sm transition-all duration-200"
              >
                <span className="text-text-secondary font-medium text-sm text-center">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg-base py-20 relative overflow-hidden">
        <BackgroundBlobs page="contact" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-10 sm:p-14">
            <div className="relative z-10">
              <h2 className="font-sans font-bold text-h2 text-white mb-4">
                Let&apos;s Build Something Great Together
              </h2>
              <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
                Whether you&apos;re starting a new project or modernizing an existing system, our team
                is ready to help.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center gap-2 text-base hover:scale-[1.02]"
                >
                  Contact Us Today
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
                <Link
                  href="/services"
                  className="btn-secondary inline-flex items-center gap-2 text-base font-semibold"
                >
                  View Our Services
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
