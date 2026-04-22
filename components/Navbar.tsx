'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, ChevronDown, Mail, GraduationCap, ExternalLink } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

type NavLink = { href: string; label: string };

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'IT Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/contact', label: 'Contact' },
];

type Product = {
  href: string;
  label: string;
  tagline: string;
  status: 'live' | 'soon';
  Icon: typeof Mail;
};

const products: Product[] = [
  {
    href: '/products/mail-merge',
    label: 'Mail Merge',
    tagline: 'Send campaigns that land in the inbox',
    status: 'live',
    Icon: Mail,
  },
  {
    href: '/products/eduflick',
    label: 'EduFlick',
    tagline: 'Unified School Management System',
    status: 'soon',
    Icon: GraduationCap,
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const dropdownRef = useRef<HTMLLIElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isProductsActive = pathname.startsWith('/products');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
    setMobileProductsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!productsOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setProductsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKey);
    };
  }, [productsOpen]);

  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setProductsOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setProductsOpen(false), 120);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-[var(--nav-bg-scrolled)] backdrop-blur-[40px] saturate-[180%] border-b border-[var(--nav-border)] shadow-nav shadow-[0_4px_30px_rgba(0,0,0,0.1)]'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center flex-shrink-0 group">
          <img
            src={theme === 'dark' ? '/logo.svg' : '/logo-light.svg'}
            alt="Code Flick Technologies"
            className="h-10 w-auto drop-shadow-[0_0_15px_rgba(225,29,72,0.10)] group-hover:drop-shadow-[0_0_25px_rgba(225,29,72,0.20)] transition-all duration-300"
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-8" role="list">
          {navLinks.slice(0, 3).map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-sm font-medium transition-colors duration-200 pb-0.5 ${
                    isActive
                      ? 'text-text-primary border-b-2 border-accent-primary-500'
                      : 'text-text-muted hover:text-text-primary'
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}

          <li
            ref={dropdownRef}
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={scheduleClose}
          >
            <Link
              href="/products"
              onClick={() => setProductsOpen(false)}
              aria-haspopup="menu"
              aria-expanded={productsOpen}
              className={`text-sm font-medium transition-colors duration-200 pb-0.5 inline-flex items-center gap-1 ${
                isProductsActive
                  ? 'text-text-primary border-b-2 border-accent-primary-500'
                  : 'text-text-muted hover:text-text-primary'
              }`}
            >
              Products
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  productsOpen ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </Link>

            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                  role="menu"
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[340px]"
                >
                  <div className="rounded-xl bg-[var(--nav-bg-scrolled)] backdrop-blur-[40px] saturate-[180%] border border-[var(--nav-border)] shadow-[0_10px_40px_rgba(0,0,0,0.15)] overflow-hidden">
                    <ul className="p-2" role="list">
                      {products.map(({ href, label, tagline, status, Icon }) => (
                        <li key={href}>
                          <Link
                            href={href}
                            role="menuitem"
                            className="flex items-start gap-3 px-3 py-3 rounded-lg hover:bg-accent-primary-500/5 transition-colors group"
                          >
                            <span className="mt-0.5 w-9 h-9 rounded-lg bg-accent-primary-500/10 flex items-center justify-center shrink-0 group-hover:bg-accent-primary-500/15 transition-colors">
                              <Icon className="w-4 h-4 text-accent-primary-500" aria-hidden="true" />
                            </span>
                            <span className="flex-1 min-w-0">
                              <span className="flex items-center gap-2">
                                <span className="text-sm font-semibold text-text-primary">{label}</span>
                                <span
                                  className={`text-[10px] font-medium uppercase tracking-wider px-1.5 py-0.5 rounded ${
                                    status === 'live'
                                      ? 'bg-green-500/10 text-green-500'
                                      : 'bg-amber-500/10 text-amber-500'
                                  }`}
                                >
                                  {status === 'live' ? 'Live' : 'Coming Soon'}
                                </span>
                              </span>
                              <span className="block text-xs text-text-muted mt-0.5 leading-snug">
                                {tagline}
                              </span>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="border-t border-glass-border px-3 py-2.5 bg-glass-light/30">
                      <Link
                        href="/products"
                        className="text-xs font-medium text-accent-primary-400 hover:text-accent-primary-500 transition-colors inline-flex items-center gap-1"
                      >
                        View all products
                        <ExternalLink className="w-3 h-3" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          {navLinks.slice(3).map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-sm font-medium transition-colors duration-200 pb-0.5 ${
                    isActive
                      ? 'text-text-primary border-b-2 border-accent-primary-500'
                      : 'text-text-muted hover:text-text-primary'
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-btn neo-badge text-text-muted hover:text-accent-primary-400 transition-all duration-200"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4" aria-hidden="true" />
            ) : (
              <Moon className="w-4 h-4" aria-hidden="true" />
            )}
          </button>
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center gap-2 text-sm !py-2.5 !px-5"
          >
            Get a Free Consultation
          </Link>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-btn border border-glass-border text-text-muted hover:text-accent-primary-400 transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Moon className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
          <button
            className="p-2 text-text-muted hover:text-text-primary transition-colors"
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
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[var(--mobile-menu-bg)] backdrop-blur-[40px] saturate-[180%] border-t border-[var(--nav-border)] overflow-hidden"
          >
            <ul className="flex flex-col px-4 pb-6 pt-4 gap-1" role="list">
              {navLinks.slice(0, 3).map(({ href, label }) => {
                const isActive = pathname === href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`block px-4 py-3 text-base font-medium rounded-btn transition-colors ${
                        isActive
                          ? 'text-text-primary bg-accent-primary-500/10'
                          : 'text-text-muted hover:text-text-primary hover:bg-glass-light'
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}

              <li>
                <button
                  type="button"
                  onClick={() => setMobileProductsOpen((v) => !v)}
                  aria-expanded={mobileProductsOpen}
                  aria-controls="mobile-products-submenu"
                  className={`w-full flex items-center justify-between px-4 py-3 text-base font-medium rounded-btn transition-colors ${
                    isProductsActive
                      ? 'text-text-primary bg-accent-primary-500/10'
                      : 'text-text-muted hover:text-text-primary hover:bg-glass-light'
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileProductsOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <AnimatePresence initial={false}>
                  {mobileProductsOpen && (
                    <motion.ul
                      id="mobile-products-submenu"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.18 }}
                      className="overflow-hidden pl-3 mt-1 space-y-1"
                      role="list"
                    >
                      <li>
                        <Link
                          href="/products"
                          className="block px-4 py-2.5 text-sm font-medium rounded-btn text-text-muted hover:text-text-primary hover:bg-glass-light transition-colors"
                        >
                          All Products
                        </Link>
                      </li>
                      {products.map(({ href, label, status, Icon }) => (
                        <li key={href}>
                          <Link
                            href={href}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-btn text-text-muted hover:text-text-primary hover:bg-glass-light transition-colors"
                          >
                            <Icon className="w-4 h-4 text-accent-primary-500" aria-hidden="true" />
                            <span className="flex-1">{label}</span>
                            <span
                              className={`text-[10px] font-medium uppercase tracking-wider px-1.5 py-0.5 rounded ${
                                status === 'live'
                                  ? 'bg-green-500/10 text-green-500'
                                  : 'bg-amber-500/10 text-amber-500'
                              }`}
                            >
                              {status === 'live' ? 'Live' : 'Soon'}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              {navLinks.slice(3).map(({ href, label }) => {
                const isActive = pathname === href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`block px-4 py-3 text-base font-medium rounded-btn transition-colors ${
                        isActive
                          ? 'text-text-primary bg-accent-primary-500/10'
                          : 'text-text-muted hover:text-text-primary hover:bg-glass-light'
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
