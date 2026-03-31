'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

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
          ? 'bg-[rgba(5,5,5,0.70)] backdrop-blur-[40px] saturate-[180%] border-b border-white/[0.08] shadow-nav'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center flex-shrink-0 group">
          <img
            src="/logo.svg"
            alt="CodeFlick Technologies"
            className="h-10 w-auto drop-shadow-[0_0_15px_rgba(225,29,72,0.10)] group-hover:drop-shadow-[0_0_25px_rgba(225,29,72,0.20)] transition-all duration-300"
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-8" role="list">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-sm font-medium transition-colors duration-200 pb-0.5 ${
                    isActive
                      ? 'text-white border-b-2 border-accent-primary-500'
                      : 'text-text-muted hover:text-white'
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center gap-2 text-sm !py-2.5 !px-5"
          >
            Get a Free Consultation
          </Link>
        </div>

        <button
          className="lg:hidden p-2 text-text-muted hover:text-white transition-colors"
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

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[rgba(5,5,5,0.85)] backdrop-blur-[40px] saturate-[180%] border-t border-white/[0.08] overflow-hidden"
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
                          ? 'text-white bg-accent-primary-500/10'
                          : 'text-text-muted hover:text-white hover:bg-white/[0.04]'
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
                  className="btn-primary flex items-center justify-center text-base"
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
