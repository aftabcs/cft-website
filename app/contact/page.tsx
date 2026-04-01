import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, MapPin, Phone, Linkedin, Twitter, Github, Zap } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import BackgroundBlobs from '@/components/BackgroundBlobs';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with CodeFlick Technologies. Tell us about your project and our experts will respond within 24 hours. Free initial consultation available.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'CodeFlick Technologies — Contact',
  url: 'https://codeftech.com/contact',
  description: 'Contact CodeFlick Technologies for IT solutions, AI, FinTech, and digital transformation.',
  mainEntity: {
    '@type': 'Organization',
    name: 'CodeFlick Technologies',
    url: 'https://codeftech.com',
    email: 'info@codeftech.com',
    sameAs: ['https://linkedin.com', 'https://twitter.com'],
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* PAGE HERO */}
      <section className="relative bg-bg-base py-28 pt-40 overflow-hidden">
        <BackgroundBlobs page="contact" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-text-muted">
              <li>
                <Link href="/" className="hover:text-accent-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-text-primary font-medium">Contact</li>
            </ol>
          </nav>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-accent-primary-400 mb-3 rounded-chip bg-accent-primary-500/10 px-3 py-1 border border-accent-primary-500/15">
            Get in Touch
          </span>
          <h1 className="font-sans font-bold text-hero text-text-primary max-w-2xl mb-4">
            Let&apos;s Build Something{' '}
            <span className="gradient-text">Together</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-xl">
            Tell us about your project and our experts will get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* CONTACT LAYOUT */}
      <section className="bg-bg-base py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-sans font-bold text-h3 text-text-primary mb-2">
                  Contact Information
                </h2>
                <p className="text-text-secondary text-sm">
                  Reach our team directly or fill out the form and we&apos;ll respond promptly.
                </p>
              </div>

              <div className="space-y-5">
                <a
                  href="mailto:info@codeftech.com"
                  className="flex items-start gap-4 group"
                  aria-label="Send email to info@codeftech.com"
                >
                  <div className="w-10 h-10 rounded-btn neo-icon-box flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent-primary-400" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-text-muted mb-0.5">
                      Email
                    </p>
                    <p className="text-text-primary text-sm font-medium group-hover:text-accent-primary-400 transition-colors">
                      info@codeftech.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-btn neo-icon-box flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-accent-primary-400" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-text-muted mb-0.5">
                      Phone
                    </p>
                    <a href="tel:+917987421429" className="block text-text-primary text-sm hover:text-accent-primary-400 transition-colors">+91 7987421429</a>
                    <a href="tel:+917376766613" className="block text-text-primary text-sm hover:text-accent-primary-400 transition-colors">+91 7376766613</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-btn neo-icon-box flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent-primary-400" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-text-muted mb-0.5">
                      India Office
                    </p>
                    <p className="text-text-primary text-sm">Bhopal, Madhya Pradesh, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-btn neo-icon-box flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent-primary-400" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-text-muted mb-0.5">
                      Qatar Office
                    </p>
                    <p className="text-text-primary text-sm">Alsaad Street, Doha, Qatar</p>
                    <a href="tel:+97455402909" className="block text-text-primary text-sm hover:text-accent-primary-400 transition-colors">+974 5540 2909</a>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-text-muted mb-3">
                  Follow Us
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
                      className="w-10 h-10 rounded-btn neo-badge flex items-center justify-center text-text-muted hover:text-accent-primary-400 transition-all duration-200"
                    >
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="glass-card p-5">
                <div className="relative z-10 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-cta flex items-center justify-center flex-shrink-0 mt-0.5 shadow-glow-red-sm">
                    <Zap className="w-4 h-4 text-text-primary" fill="currentColor" aria-hidden="true" />
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    <span className="font-semibold text-accent-primary-400">Free consultation:</span>{' '}
                    Our initial consultation is complimentary. We&apos;ll assess your requirements,
                    suggest the right technology stack, and provide a project estimate — at no cost.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="glass-card p-8">
                <div className="relative z-10">
                  <h2 className="font-sans font-bold text-h3 text-text-primary mb-6">
                    Send Us a Message
                  </h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
