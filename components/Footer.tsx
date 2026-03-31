import Link from 'next/link';
import { Linkedin, Twitter, Github, Mail, MapPin, Phone } from 'lucide-react';

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
};

export default function Footer() {
  return (
    <footer className="bg-bg-base border-t border-white/[0.06] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary-500/30 to-transparent" aria-hidden="true" />

      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #E11D48 0%, transparent 70%)', filter: 'blur(180px)', opacity: 0.04 }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-5 group w-fit">
              <img
                src="/logo.svg"
                alt="CodeFlick Technologies"
                className="h-10 w-auto drop-shadow-[0_0_15px_rgba(225,29,72,0.10)]"
              />
            </Link>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              End-to-end IT solutions driving digital transformation across AI, FinTech, Automation, and Enterprise systems.
            </p>
            <div className="flex items-center gap-3">
              {[
                { href: 'https://linkedin.com', label: 'LinkedIn', Icon: Linkedin },
                { href: 'https://twitter.com', label: 'X/Twitter', Icon: Twitter },
                { href: 'https://github.com', label: 'GitHub', Icon: Github },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`CodeFlick Technologies on ${label}`}
                  className="w-9 h-9 rounded-btn bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-text-muted hover:text-accent-primary-400 hover:border-accent-primary-500/30 hover:bg-accent-primary-500/10 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-[0.2em] mb-4">
              Company
            </h3>
            <ul className="space-y-3" role="list">
              {footerLinks.company.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-text-muted text-sm hover:text-accent-primary-400 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-[0.2em] mb-4">
              Services
            </h3>
            <ul className="space-y-3" role="list">
              {footerLinks.services.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-text-muted text-sm hover:text-accent-primary-400 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-[0.2em] mb-4">
              Contact
            </h3>
            <ul className="space-y-4" role="list">
              <li>
                <a
                  href="mailto:info@codeftech.com"
                  className="flex items-start gap-3 text-text-muted text-sm hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-accent-primary-500 flex-shrink-0" aria-hidden="true" />
                  <span>info@codeftech.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+917987421429"
                  className="flex items-start gap-3 text-text-muted text-sm hover:text-white transition-colors group"
                >
                  <Phone className="w-4 h-4 mt-0.5 text-accent-primary-500 flex-shrink-0" aria-hidden="true" />
                  <span>+91 7987421429</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-text-muted text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 text-accent-primary-500 flex-shrink-0" aria-hidden="true" />
                  <span>Bhopal, India &middot; Doha, Qatar</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.04] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-subtle text-sm">
            &copy; {new Date().getFullYear()} CodeFlick Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-text-muted text-sm hover:text-accent-primary-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-text-muted text-sm hover:text-accent-primary-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
