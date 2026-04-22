import Link from 'next/link';
import { Linkedin, Mail, MapPin, Phone, ArrowUpRight, ChevronRight } from 'lucide-react';

const footerLinks = {
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'IT Services' },
    { href: '/industries', label: 'Industries' },
    { href: '/contact', label: 'Contact' },
  ],
  services: [
    { href: '/services#ai', label: 'AI & Machine Learning' },
    { href: '/services#automation', label: 'Automation' },
    { href: '/services#software', label: 'Software Development' },
    { href: '/services#fintech', label: 'FinTech Solutions' },
    { href: '/services#ecommerce', label: 'E-commerce' },
    { href: '/services#manufacturing', label: 'Manufacturing' },
  ],
  legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
  ],
};

const socialLinks = [
  { href: 'https://www.linkedin.com/company/code-flick-technologies/posts/?feedView=all', label: 'LinkedIn', Icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" role="contentinfo">
      {/* Top CTA band */}
      <div className="relative bg-gradient-to-r from-accent-primary-700/10 via-accent-primary-500/15 to-accent-primary-700/10 border-y border-glass-border">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(225,29,72,0.08)_0%,transparent_70%)] pointer-events-none" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 relative">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight">
                Ready to transform your business?
              </h2>
              <p className="text-text-muted text-sm mt-1">
                Let&apos;s discuss how we can accelerate your digital journey.
              </p>
            </div>
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2 text-sm shrink-0"
            >
              Get in Touch
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="glass-footer border-t border-glass-border relative">
        {/* Accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary-500/30 to-transparent" aria-hidden="true" />

        {/* Background glow */}
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none opacity-[0.03] dark:opacity-[0.05] bg-[radial-gradient(circle,#E11D48_0%,transparent_70%)] blur-[200px]"
          aria-hidden="true"
        />
        <div
          className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-[0.02] dark:opacity-[0.04] bg-[radial-gradient(circle,#E11D48_0%,transparent_70%)] blur-[150px]"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-6 relative">
          {/* Link columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
            {/* Brand column */}
            <div className="lg:col-span-4">
              <Link href="/" className="flex items-center mb-5 group w-fit">
                <img
                  src="/logo.svg"
                  alt="Code Flick Technologies"
                  className="h-10 w-auto drop-shadow-[0_0_15px_rgba(225,29,72,0.10)] hidden dark:block"
                />
                <img
                  src="/logo-light.svg"
                  alt="Code Flick Technologies"
                  className="h-10 w-auto drop-shadow-[0_0_15px_rgba(225,29,72,0.10)] block dark:hidden"
                />
              </Link>
              <p className="text-text-muted text-sm leading-relaxed mb-6 max-w-xs">
                End-to-end IT solutions driving digital transformation across AI, FinTech, Automation, and Enterprise systems.
              </p>

              {/* Social icons */}
              <div className="flex items-center gap-2.5">
                {socialLinks.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Code Flick Technologies on ${label}`}
                    className="w-10 h-10 rounded-xl neo-badge flex items-center justify-center text-text-muted hover:text-accent-primary-400 hover:border-accent-primary-500/30 transition-all duration-250"
                  >
                    <Icon className="w-[18px] h-[18px]" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            {/* Company links */}
            <div className="lg:col-span-2">
              <h3 className="text-xs font-semibold text-text-primary uppercase tracking-[0.2em] mb-5 flex items-center gap-2">
                <span className="w-5 h-px bg-accent-primary-500/40" aria-hidden="true" />
                Company
              </h3>
              <ul className="space-y-3" role="list">
                {footerLinks.company.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-text-muted text-sm hover:text-accent-primary-400 transition-colors inline-flex items-center gap-1 group"
                    >
                      <ChevronRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 text-accent-primary-500" aria-hidden="true" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services links */}
            <div className="lg:col-span-3">
              <h3 className="text-xs font-semibold text-text-primary uppercase tracking-[0.2em] mb-5 flex items-center gap-2">
                <span className="w-5 h-px bg-accent-primary-500/40" aria-hidden="true" />
                Services
              </h3>
              <ul className="space-y-3" role="list">
                {footerLinks.services.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-text-muted text-sm hover:text-accent-primary-400 transition-colors inline-flex items-center gap-1 group"
                    >
                      <ChevronRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 text-accent-primary-500" aria-hidden="true" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact column */}
            <div className="lg:col-span-3">
              <h3 className="text-xs font-semibold text-text-primary uppercase tracking-[0.2em] mb-5 flex items-center gap-2">
                <span className="w-5 h-px bg-accent-primary-500/40" aria-hidden="true" />
                Get in Touch
              </h3>
              <ul className="space-y-4" role="list">
                <li>
                  <a
                    href="mailto:info@codeftech.com"
                    className="flex items-center gap-3 text-text-muted text-sm hover:text-text-primary transition-colors group"
                  >
                    <span className="w-8 h-8 rounded-lg bg-accent-primary-500/10 dark:bg-accent-primary-500/8 flex items-center justify-center shrink-0 group-hover:bg-accent-primary-500/20 transition-colors">
                      <Mail className="w-3.5 h-3.5 text-accent-primary-500" aria-hidden="true" />
                    </span>
                    <span>info@codeftech.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+97455258998"
                    className="flex items-center gap-3 text-text-muted text-sm hover:text-text-primary transition-colors group"
                  >
                    <span className="w-8 h-8 rounded-lg bg-accent-primary-500/10 dark:bg-accent-primary-500/8 flex items-center justify-center shrink-0 group-hover:bg-accent-primary-500/20 transition-colors">
                      <Phone className="w-3.5 h-3.5 text-accent-primary-500" aria-hidden="true" />
                    </span>
                    <span>+974 5525 8998</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-3 text-text-muted text-sm">
                    <span className="w-8 h-8 rounded-lg bg-accent-primary-500/10 dark:bg-accent-primary-500/8 flex items-center justify-center shrink-0">
                      <MapPin className="w-3.5 h-3.5 text-accent-primary-500" aria-hidden="true" />
                    </span>
                    <span>Qatar</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-glass-border pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-text-subtle text-xs">
                &copy; {new Date().getFullYear()} Code Flick Technologies. All rights reserved.
              </p>
              <div className="flex items-center gap-1">
                {footerLinks.legal.map(({ href, label }, i) => (
                  <span key={href} className="flex items-center">
                    <Link
                      href={href}
                      className="text-text-muted text-xs hover:text-accent-primary-400 transition-colors px-2 py-1 rounded-md hover:bg-accent-primary-500/5"
                    >
                      {label}
                    </Link>
                    {i < footerLinks.legal.length - 1 && (
                      <span className="text-text-subtle/40 text-xs" aria-hidden="true">&middot;</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
