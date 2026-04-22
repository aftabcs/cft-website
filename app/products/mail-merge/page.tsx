import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Mail,
  Shield,
  Gauge,
  BarChart3,
  Clock,
  Lock,
  FileSpreadsheet,
  Inbox,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Users,
} from 'lucide-react';
import BackgroundBlobs from '@/components/BackgroundBlobs';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedServiceCard from '@/components/AnimatedServiceCard';
import GridPattern from '@/components/GridPattern';
import GradientDivider from '@/components/GradientDivider';

const APP_URL = 'https://mailmerge.codeftech.com/';

export const metadata: Metadata = {
  title: 'Mail Merge — Deliverability-First Email Campaigns',
  description:
    'Send Gmail, Outlook, and SMTP mail merge campaigns that land in the inbox. Anti-spam scoring, scheduled sends, live open/bounce tracking, and encrypted credentials.',
  alternates: {
    canonical: 'https://codeftech.com/products/mail-merge',
  },
  openGraph: {
    title: 'Mail Merge by Code Flick Technologies',
    description:
      'Send campaigns that land in the inbox, not spam. Gmail, Outlook, SMTP — with inbox-placement engineering built in.',
    url: 'https://codeftech.com/products/mail-merge',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Mail Merge',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: APP_URL,
  description:
    'Deliverability-first mail merge suite supporting Gmail, Outlook, and SMTP with anti-spam scoring, scheduled sends, and live analytics.',
  offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
  publisher: {
    '@type': 'Organization',
    name: 'Code Flick Technologies',
    url: 'https://codeftech.com',
  },
};

const features = [
  {
    Icon: Inbox,
    title: 'Inbox-Force Engine',
    body: 'Engineered headers (List-Unsubscribe, DKIM alignment, multipart plain+HTML) to maximize inbox placement across Gmail, Outlook, and major providers.',
  },
  {
    Icon: Shield,
    title: 'Anti-Spam Scoring',
    body: 'Pre-send validator inspects subject and body for spam triggers, flags risky language, and blocks campaigns above a configurable threshold.',
  },
  {
    Icon: Gauge,
    title: 'Smart Rate Limiting',
    body: 'Randomized delays between sends and daily volume caps per user — shaped to look human and protect sender reputation.',
  },
  {
    Icon: BarChart3,
    title: 'Live Analytics',
    body: 'Real-time tracking of opens, bounces, unsubscribes, and reply detection. Export campaign data to CSV in one click.',
  },
  {
    Icon: Clock,
    title: 'Scheduled Sends',
    body: 'Schedule campaigns for optimal time zones. Background workers dispatch reliably without needing your browser open.',
  },
  {
    Icon: Lock,
    title: 'Enterprise Security',
    body: 'OAuth refresh tokens and SMTP credentials sealed with Fernet AES-128 encryption. Multi-tenant isolation between users and campaigns.',
  },
  {
    Icon: FileSpreadsheet,
    title: 'CSV & Google Sheets',
    body: 'Import recipient lists from CSV or connect a Google Sheet directly. Variable merge fields are validated before send.',
  },
  {
    Icon: Users,
    title: 'Multi-Provider',
    body: 'One-click connect for Gmail and Outlook via OAuth, or bring your own SMTP server. Switch providers per campaign.',
  },
];

const providers = ['Gmail', 'Outlook', 'SMTP'];

const useCases = [
  { title: 'Sales Outreach', body: 'Personalized prospecting at scale without burning sender reputation.' },
  { title: 'Investor Updates', body: 'Founder-to-investor communication that consistently lands in the primary inbox.' },
  { title: 'Recruitment', body: 'Candidate outreach with reply detection so you never miss a response.' },
  { title: 'Customer Re-engagement', body: 'Win-back campaigns with bounce cleanup and unsubscribe compliance baked in.' },
];

const steps = [
  { n: 1, title: 'Connect provider', body: 'One-click OAuth for Gmail and Outlook, or bring your own SMTP.' },
  { n: 2, title: 'Upload recipients', body: 'CSV or Google Sheet — with merge variable validation.' },
  { n: 3, title: 'Compose & score', body: 'Write your email, rotate variants, and run the anti-spam validator.' },
  { n: 4, title: 'Schedule & send', body: 'Fire immediately or schedule — rate-limited background workers handle the rest.' },
  { n: 5, title: 'Track & export', body: 'Watch opens, bounces, and replies live. Export CSV when ready.' },
];

export default function MailMergePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="relative bg-bg-base py-28 pt-40 overflow-hidden">
        <BackgroundBlobs page="services" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-text-muted">
              <li>
                <Link href="/" className="hover:text-accent-primary-400 transition-colors">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/products" className="hover:text-accent-primary-400 transition-colors">Products</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-text-primary font-medium">Mail Merge</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-12 h-12 rounded-xl flex items-center justify-center neo-icon-box">
                  <Mail className="w-6 h-6 text-accent-primary-400" aria-hidden="true" />
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-green-500/10 text-green-500 border border-green-500/20">
                  <CheckCircle2 className="w-3 h-3" aria-hidden="true" />
                  Live
                </span>
              </div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-accent-primary-400 mb-3 rounded-chip bg-accent-primary-500/10 px-3 py-1 border border-accent-primary-500/15">
                Mail Merge Suite
              </span>
              <h1 className="font-sans font-bold text-hero text-text-primary mb-4">
                Send campaigns that land in the inbox — not spam.
              </h1>
              <p className="text-text-secondary text-lg max-w-2xl mb-8">
                A deliverability-first mail merge platform for Gmail, Outlook, and SMTP — with
                anti-spam scoring, scheduled sends, and live analytics. Built for teams that care
                about actually reaching their recipients.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-8">
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 text-base hover:scale-[1.02]"
                >
                  Launch App
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent-primary-400 hover:text-text-primary transition-colors"
                >
                  Book a Demo
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-medium uppercase tracking-wider text-text-muted mr-2">
                  Supports
                </span>
                {providers.map((p) => (
                  <span
                    key={p}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-glass-light border border-glass-border text-text-secondary"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>

            {/* Product preview frame */}
            <div className="lg:col-span-5">
              <AnimatedSection>
                <div className="glass-card p-3 shadow-[0_20px_60px_rgba(225,29,72,0.08)]">
                  <div className="rounded-lg overflow-hidden border border-glass-border bg-bg-base aspect-[4/3] relative">
                    {/*
                      Drop a screenshot into public/products/mail-merge/hero.png
                      and uncomment the <img> below to replace the placeholder.
                    */}
                    {/* <img src="/products/mail-merge/hero.png" alt="Mail Merge dashboard" className="w-full h-full object-cover" /> */}
                    <div className="absolute inset-0 flex flex-col">
                      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-glass-border">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                        <span className="ml-3 text-[10px] text-text-subtle font-mono truncate">
                          mailmerge.codeftech.com
                        </span>
                      </div>
                      <div className="flex-1 p-4 flex items-center justify-center">
                        <div className="text-center">
                          <Mail className="w-10 h-10 text-accent-primary-500/30 mx-auto mb-3" aria-hidden="true" />
                          <p className="text-xs text-text-muted">Live product preview</p>
                          <a
                            href={APP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-accent-primary-400 hover:text-accent-primary-500"
                          >
                            Open app <ExternalLink className="w-3 h-3" aria-hidden="true" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* FEATURES */}
      <section className="bg-bg-base py-20 relative overflow-hidden">
        <GridPattern />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <div className="max-w-2xl mb-12">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-accent-primary-400 mb-3 rounded-chip bg-accent-primary-500/10 px-3 py-1 border border-accent-primary-500/15">
                Features
              </span>
              <h2 className="font-sans font-bold text-h2 text-text-primary mb-3">
                Built for deliverability, engineered for scale
              </h2>
              <p className="text-text-secondary text-base">
                Every feature is designed to protect sender reputation while keeping campaigns
                measurable and compliant.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <AnimatedServiceCard key={f.title} index={i}>
                <div className="glass-card p-6 h-full">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 neo-icon-box">
                    <f.Icon className="w-5 h-5 text-accent-primary-400" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">{f.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{f.body}</p>
                </div>
              </AnimatedServiceCard>
            ))}
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* HOW IT WORKS */}
      <section className="bg-bg-base py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <div className="max-w-2xl mb-12">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-accent-primary-400 mb-3 rounded-chip bg-accent-primary-500/10 px-3 py-1 border border-accent-primary-500/15">
                How it works
              </span>
              <h2 className="font-sans font-bold text-h2 text-text-primary mb-3">
                From connect to sent in minutes
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {steps.map((s, i) => (
              <AnimatedServiceCard key={s.n} index={i}>
                <div className="glass-card p-5 h-full">
                  <div className="text-accent-primary-500 font-bold text-lg mb-2">
                    {String(s.n).padStart(2, '0')}
                  </div>
                  <h3 className="font-semibold text-text-primary text-sm mb-1.5">{s.title}</h3>
                  <p className="text-text-muted text-xs leading-relaxed">{s.body}</p>
                </div>
              </AnimatedServiceCard>
            ))}
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* USE CASES */}
      <section className="bg-bg-base py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <div className="max-w-2xl mb-12">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-accent-primary-400 mb-3 rounded-chip bg-accent-primary-500/10 px-3 py-1 border border-accent-primary-500/15">
                Built for
              </span>
              <h2 className="font-sans font-bold text-h2 text-text-primary mb-3">
                Teams that live in the inbox
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {useCases.map((u, i) => (
              <AnimatedServiceCard key={u.title} index={i}>
                <div className="glass-card p-6 h-full">
                  <h3 className="font-semibold text-text-primary mb-2">{u.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{u.body}</p>
                </div>
              </AnimatedServiceCard>
            ))}
          </div>
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
                  Ready to send your first campaign?
                </h2>
                <p className="text-text-secondary text-lg mb-10 max-w-2xl mx-auto">
                  Connect your inbox in under a minute — no credit card, no setup call.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href={APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2 text-base hover:scale-[1.02]"
                  >
                    Launch App
                    <ExternalLink className="w-5 h-5" aria-hidden="true" />
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent-primary-400 hover:text-text-primary transition-colors"
                  >
                    Talk to Sales
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
