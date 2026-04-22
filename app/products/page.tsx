import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Mail,
  GraduationCap,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Clock,
} from 'lucide-react';
import BackgroundBlobs from '@/components/BackgroundBlobs';
import AnimatedServiceCard from '@/components/AnimatedServiceCard';
import AnimatedSection from '@/components/AnimatedSection';
import GridPattern from '@/components/GridPattern';
import GradientDivider from '@/components/GradientDivider';

export const metadata: Metadata = {
  title: 'Our Products',
  description:
    'Explore products built by Code Flick Technologies — Mail Merge for deliverability-first email campaigns, and EduFlick, a unified School Management System.',
  alternates: {
    canonical: 'https://codeftech.com/products',
  },
  openGraph: {
    title: 'Our Products | Code Flick Technologies',
    description:
      'Mail Merge (live) and EduFlick (coming soon) — enterprise-ready products from Code Flick Technologies.',
    url: 'https://codeftech.com/products',
    type: 'website',
  },
};

const productsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Products by Code Flick Technologies',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'SoftwareApplication',
        name: 'Mail Merge',
        applicationCategory: 'BusinessApplication',
        url: 'https://mailmerge.codeftech.com/',
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'SoftwareApplication',
        name: 'EduFlick',
        applicationCategory: 'EducationalApplication',
        url: 'https://eduflick.codeftech.com/',
      },
    },
  ],
};

type Highlight = string;

type ProductCard = {
  id: string;
  href: string;
  externalHref?: string;
  Icon: typeof Mail;
  name: string;
  tagline: string;
  description: string;
  status: 'live' | 'soon';
  highlights: Highlight[];
  primaryCta: { label: string; href: string; external?: boolean };
};

const productCards: ProductCard[] = [
  {
    id: 'mail-merge',
    href: '/products/mail-merge',
    externalHref: 'https://mailmerge.codeftech.com/',
    Icon: Mail,
    name: 'Mail Merge',
    tagline: 'Deliverability-first email campaigns',
    description:
      'A web-based mail merge suite for Gmail, Outlook, and SMTP — built with inbox-placement engineering, anti-spam scoring, scheduled sends, and live tracking.',
    status: 'live',
    highlights: [
      'Gmail, Outlook & SMTP providers',
      'Inbox-Force deliverability engine',
      'Anti-spam scoring & rate limiting',
      'Live opens, bounces & unsubscribes',
      'CSV & Google Sheets import',
      'Encrypted OAuth & credentials',
    ],
    primaryCta: {
      label: 'Launch App',
      href: 'https://mailmerge.codeftech.com/',
      external: true,
    },
  },
  {
    id: 'eduflick',
    href: '/products/eduflick',
    externalHref: 'https://eduflick.codeftech.com/',
    Icon: GraduationCap,
    name: 'EduFlick',
    tagline: 'Unified School Management System',
    description:
      'An end-to-end school operations platform — from admissions and attendance to exams, fees, and payroll. Built for administrators, teachers, parents, and students on a single platform.',
    status: 'soon',
    highlights: [
      'Student & teacher management',
      'Attendance & exam automation',
      'Fee collection & payroll',
      'Parent–teacher communication',
      'Role-based access control',
      'Analytics dashboards for leadership',
    ],
    primaryCta: {
      label: 'Request Early Access',
      href: '/products/eduflick',
    },
  },
];

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsJsonLd) }}
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
              <li className="text-text-primary font-medium">Products</li>
            </ol>
          </nav>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-accent-primary-400 mb-3 rounded-chip bg-accent-primary-500/10 px-3 py-1 border border-accent-primary-500/15">
            What We Ship
          </span>
          <h1 className="font-sans font-bold text-hero text-text-primary max-w-2xl mb-4">
            Products, built in-house.
          </h1>
          <p className="text-text-secondary text-lg max-w-xl">
            Beyond client engagements, we build and operate our own SaaS products —
            engineered for reliability, security, and scale.
          </p>
        </div>
      </section>

      <GradientDivider />

      {/* PRODUCTS GRID */}
      <section className="bg-bg-base py-20 relative overflow-hidden">
        <GridPattern />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {productCards.map((p, i) => (
              <AnimatedServiceCard key={p.id} index={i} className="scroll-mt-24">
                <div id={p.id} className="glass-card p-8 h-full flex flex-col group">
                  <div className="relative z-10 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center neo-icon-box">
                        <p.Icon className="w-6 h-6 text-accent-primary-400" aria-hidden="true" />
                      </div>
                      <span
                        className={`inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                          p.status === 'live'
                            ? 'bg-green-500/10 text-green-500 border border-green-500/20'
                            : 'bg-amber-500/10 text-amber-500 border border-amber-500/20'
                        }`}
                      >
                        {p.status === 'live' ? (
                          <>
                            <CheckCircle2 className="w-3 h-3" aria-hidden="true" />
                            Live
                          </>
                        ) : (
                          <>
                            <Clock className="w-3 h-3" aria-hidden="true" />
                            Coming Soon
                          </>
                        )}
                      </span>
                    </div>

                    <h2 className="font-sans font-bold text-h3 text-text-primary mb-1">{p.name}</h2>
                    <p className="text-xs font-medium uppercase tracking-[0.15em] mb-3 text-accent-primary-400">
                      {p.tagline}
                    </p>
                    <p className="text-text-secondary text-sm leading-relaxed mb-6">
                      {p.description}
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8" role="list">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5 text-text-secondary text-sm">
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-accent-primary-500"
                            aria-hidden="true"
                          />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto flex flex-wrap items-center gap-4">
                      <Link
                        href={p.href}
                        className="btn-primary inline-flex items-center gap-2 text-sm !py-2.5 !px-5"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </Link>
                      {p.primaryCta.external ? (
                        <a
                          href={p.primaryCta.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-accent-primary-400 hover:text-text-primary transition-colors"
                        >
                          {p.primaryCta.label}
                          <ExternalLink className="w-4 h-4" aria-hidden="true" />
                        </a>
                      ) : null}
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
                  Need a product built from scratch?
                </h2>
                <p className="text-text-secondary text-lg mb-10 max-w-2xl mx-auto">
                  We design, build, and operate production SaaS products end-to-end —
                  from discovery to launch.
                </p>
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center gap-2 text-base hover:scale-[1.02]"
                >
                  Start a Conversation
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
