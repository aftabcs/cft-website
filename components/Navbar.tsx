'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'IT Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-bg-base/80 backdrop-blur-xl border-b border-white/8 shadow-nav'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
          <span className="w-8 h-8 rounded-lg bg-gradient-cta flex items-center justify-center shadow-glow-cyan group-hover:shadow-glow-violet transition-shadow duration-300">
            <Zap className="w-4 h-4 text-white" fill="currentColor" aria-hidden="true" />
          </span>
          <span className="font-sans font-bold text-lg text-text-primary leading-none">
            CodeFlick
            <span className="block text-xs font-mono font-medium text-text-muted tracking-widest">
              TECHNOLOGIES
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8" role="list">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-sm font-medium transition-colors duration-150 pb-0.5 ${
                    isActive
                      ? 'text-text-primary border-b-2 border-accent-primary-500'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-cta text-white font-semibold text-sm rounded-btn shadow-glow-cyan hover:brightness-110 hover:shadow-glow-violet transition-all duration-200"
          >
            Get a Free Consultation
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label="Main menu"
        >
          {mobileOpen ? (
            <X className="w-6 h-6" aria-hidden="true" />
          ) : (
            <Menu className="w-6 h-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-bg-base/95 backdrop-blur-2xl border-t border-white/8 overflow-hidden"
          >
            <ul className="flex flex-col px-4 pb-6 pt-4 gap-1" role="list">
              {navLinks.map(({ href, label }) => {
                const isActive = pathname === href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`block px-4 py-3 text-base font-medium rounded-btn transition-colors ${
                        isActive
                          ? 'text-text-primary bg-bg-elevated'
                          : 'text-text-secondary hover:text-text-primary hover:bg-bg-elevated/60'
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="flex items-center justify-center px-6 py-3 bg-gradient-cta text-white font-semibold text-base rounded-btn transition-all duration-200"
                >
                  Get a Free Consultation
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
