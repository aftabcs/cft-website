import Link from 'next/link';
import { Zap, Linkedin, Twitter, Github, Mail, MapPin, Phone } from 'lucide-react';

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
    <footer className="bg-bg-base border-t border-white/[0.08] relative overflow-hidden">
      {/* Gradient accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-cta" aria-hidden="true" />

      {/* Subtle red blob accent */}
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: '#E53E3E', filter: 'blur(180px)', opacity: 0.08 }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group w-fit">
              <span className="w-8 h-8 rounded-lg bg-gradient-cta flex items-center justify-center shadow-glow-red">
                <Zap className="w-4 h-4 text-white" fill="currentColor" aria-hidden="true" />
              </span>
              <span className="font-sans font-bold text-base text-white">
                CodeFlick
                <span className="block text-xs font-mono font-medium text-text-muted tracking-widest">
                  TECHNOLOGIES
                </span>
              </span>
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
                  className="w-9 h-9 rounded-btn bg-bg-elevated border border-white/[0.08] flex items-center justify-center text-text-muted hover:text-accent-primary-500 hover:border-accent-primary-500/40 transition-colors"
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">
              Company
            </h3>
            <ul className="space-y-3" role="list">
              {footerLinks.company.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-text-muted text-sm hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">
              Services
            </h3>
            <ul className="space-y-3" role="list">
              {footerLinks.services.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-text-muted text-sm hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">
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

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-subtle text-sm">
            &copy; {new Date().getFullYear()} CodeFlick Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-text-muted text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-text-muted text-sm hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
