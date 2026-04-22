import type { Metadata } from 'next';
import Link from 'next/link';
import {
  GraduationCap,
  Users,
  CalendarCheck,
  FileCheck2,
  Briefcase,
  Clock,
  ClipboardList,
  Wallet,
  Banknote,
  TrendingUp,
  MessageSquare,
  BarChart3,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import BackgroundBlobs from '@/components/BackgroundBlobs';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedServiceCard from '@/components/AnimatedServiceCard';
import GridPattern from '@/components/GridPattern';
import GradientDivider from '@/components/GradientDivider';
import NotifyForm from '@/components/NotifyForm';

export const metadata: Metadata = {
  title: 'EduFlick — Unified School Management System (Coming Soon)',
  description:
    'EduFlick digitizes end-to-end school operations — students, attendance, exams, fees, payroll, and analytics — on a single cloud-ready platform. Join the early access waitlist.',
  alternates: {
    canonical: 'https://codeftech.com/products/eduflick',
  },
  openGraph: {
    title: 'EduFlick by Code Flick Technologies — Coming Soon',
    description:
      'A unified School Management System for admissions, attendance, exams, fees, and payroll.',
    url: 'https://codeftech.com/products/eduflick',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'EduFlick',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Web',
  url: 'https://eduflick.codeftech.com/',
  description:
    'Unified cloud-ready School Management System covering students, attendance, exams, fees, payroll, and analytics.',
  offers: { '@type': 'Offer', availability: 'https://schema.org/PreOrder' },
  publisher: {
    '@type': 'Organization',
    name: 'Code Flick Technologies',
    url: 'https://codeftech.com',
  },
};

const modules = [
  {
    Icon: Users,
    title: 'Student Management',
    body: 'Admissions, profiles, documents, promotions, transfers, and alumni — the full lifecycle in one place.',
  },
  {
    Icon: CalendarCheck,
    title: 'Student Attendance',
    body: 'Period-wise or day-wise marking with late/half-day flags, parent notifications, and low-attendance alerts.',
  },
  {
    Icon: FileCheck2,
    title: 'Examinations & Results',
    body: 'Exam configuration, mark entry, automated grading, rank calculation, and printable report cards.',
  },
  {
    Icon: Briefcase,
    title: 'Teacher Management',
    body: 'Staff profiles, subject and class assignments, document storage, and self-service portals.',
  },
  {
    Icon: Clock,
    title: 'Teacher Attendance',
    body: 'Check-in/out, leave applications, balance tracking, and payroll-integrated reports.',
  },
  {
    Icon: ClipboardList,
    title: 'Timetable Management',
    body: 'Conflict-free weekly scheduling with substitute teacher assignment and PDF export.',
  },
  {
    Icon: Wallet,
    title: 'Fee & Finance',
    body: 'Fee structures, receipts, dues tracking, reminders, and daily/monthly financial reports.',
  },
  {
    Icon: Banknote,
    title: 'Salary & Payroll',
    body: 'Configurable salary structures, leave-linked deductions, and locked payroll runs with audit trails.',
  },
  {
    Icon: TrendingUp,
    title: 'Performance Management',
    body: 'Teacher KPI scorecards auto-populated from attendance, student results, and feedback.',
  },
  {
    Icon: MessageSquare,
    title: 'Communication',
    body: 'Announcements, teacher–parent messaging, and auto-notifications across push, SMS, and email.',
  },
  {
    Icon: BarChart3,
    title: 'Analytics Dashboards',
    body: 'Principal, teacher, and parent dashboards with real-time academic, attendance, and financial insights.',
  },
  {
    Icon: ShieldCheck,
    title: 'Security & Compliance',
    body: 'Role-based access, encrypted PII, immutable audit logs, and data-retention policies.',
  },
];

const roles = ['Super Admin', 'Principal', 'Teacher', 'Student', 'Parent', 'Accountant', 'HR'];

const mvpItems = [
  'Admin can add students and teachers',
  'Teachers mark daily student attendance',
  'Teachers mark self check-in / check-out',
  'Mark entry with automated percentage & grade',
  'Admin summary dashboard: students, attendance, results',
  'Role-based login for Admin, Teacher, Student, Parent',
];

export default function EduFlickPage() {
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
              <li className="text-text-primary font-medium">EduFlick</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-12 h-12 rounded-xl flex items-center justify-center neo-icon-box">
                  <GraduationCap className="w-6 h-6 text-accent-primary-400" aria-hidden="true" />
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  Coming Soon
                </span>
              </div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-accent-primary-400 mb-3 rounded-chip bg-accent-primary-500/10 px-3 py-1 border border-accent-primary-500/15">
                EduFlick · In Development
              </span>
              <h1 className="font-sans font-bold text-hero text-text-primary mb-4">
                The School Management System your team will actually use.
              </h1>
              <p className="text-text-secondary text-lg max-w-2xl mb-8">
                EduFlick digitizes end-to-end school operations — from student enrollment to payroll
                disbursement — on a single cloud-ready platform designed for administrators,
                teachers, parents, and students.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-8">
                <a
                  href="#notify"
                  className="btn-primary inline-flex items-center gap-2 text-base hover:scale-[1.02]"
                >
                  Join the Waitlist
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <Link
                  href="/contact?product=eduflick"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent-primary-400 hover:text-text-primary transition-colors"
                >
                  Request a Pilot
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-medium uppercase tracking-wider text-text-muted mr-2">
                  Built for
                </span>
                {roles.map((r) => (
                  <span
                    key={r}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-glass-light border border-glass-border text-text-secondary"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats preview card */}
            <div className="lg:col-span-5">
              <AnimatedSection>
                <div className="glass-card p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-3xl font-bold text-accent-primary-500 mb-1">11</div>
                      <div className="text-xs font-medium uppercase tracking-wider text-text-muted">
                        Modules
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-accent-primary-500 mb-1">7</div>
                      <div className="text-xs font-medium uppercase tracking-wider text-text-muted">
                        User Roles
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-accent-primary-500 mb-1">99.5%</div>
                      <div className="text-xs font-medium uppercase tracking-wider text-text-muted">
                        Uptime Target
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-accent-primary-500 mb-1">80%</div>
                      <div className="text-xs font-medium uppercase tracking-wider text-text-muted">
                        Paperwork Reduced
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-glass-border">
                    <div className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
                      Security & Compliance
                    </div>
                    <ul className="space-y-1.5 text-sm text-text-secondary">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-primary-500" aria-hidden="true" />
                        TLS 1.2+ in transit, AES-256 at rest
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-primary-500" aria-hidden="true" />
                        Role-based access control (RBAC)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-primary-500" aria-hidden="true" />
                        Immutable audit trails
                      </li>
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* MODULES */}
      <section className="bg-bg-base py-20 relative overflow-hidden">
        <GridPattern />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <div className="max-w-2xl mb-12">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-accent-primary-400 mb-3 rounded-chip bg-accent-primary-500/10 px-3 py-1 border border-accent-primary-500/15">
                Platform Modules
              </span>
              <h2 className="font-sans font-bold text-h2 text-text-primary mb-3">
                One platform. Every school operation.
              </h2>
              <p className="text-text-secondary text-base">
                Replace a stack of disjointed tools with a single unified system covering
                academics, operations, finance, and communication.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.map((m, i) => (
              <AnimatedServiceCard key={m.title} index={i}>
                <div className="glass-card p-6 h-full">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 neo-icon-box">
                    <m.Icon className="w-5 h-5 text-accent-primary-400" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">{m.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{m.body}</p>
                </div>
              </AnimatedServiceCard>
            ))}
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* MVP SCOPE */}
      <section className="bg-bg-base py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection>
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-accent-primary-400 mb-3 rounded-chip bg-accent-primary-500/10 px-3 py-1 border border-accent-primary-500/15">
                  MVP Scope
                </span>
                <h2 className="font-sans font-bold text-h2 text-text-primary mb-4">
                  Launching with what actually matters
                </h2>
                <p className="text-text-secondary text-base mb-6">
                  Our MVP focuses on the operationally critical flows — the features that move a
                  school from paper to digital on day one. Fee, payroll, timetable, and
                  performance management ship in Phase 2.
                </p>
                <Link
                  href="/contact?product=eduflick"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent-primary-400 hover:text-text-primary transition-colors"
                >
                  Become a pilot school
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="glass-card p-8">
                <h3 className="font-semibold text-text-primary mb-5">What&apos;s in the MVP</h3>
                <ul className="space-y-3" role="list">
                  {mvpItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-text-secondary text-sm">
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-primary-500 flex-shrink-0"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* NOTIFY / WAITLIST */}
      <section id="notify" className="bg-bg-base py-20 relative overflow-hidden scroll-mt-24">
        <BackgroundBlobs page="contact" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="glass-card p-8 sm:p-12">
              <div className="relative z-10">
                <NotifyForm
                  product="EduFlick"
                  heading="Be first in line for early access"
                  subheading="We'll email you as soon as EduFlick opens for pilot schools. No spam, unsubscribe anytime."
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
