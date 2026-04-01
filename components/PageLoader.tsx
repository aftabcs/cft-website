'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait for the window to fully load (images, fonts, etc.)
    const handleLoad = () => {
      // Small delay so the animation feels intentional, not abrupt
      setTimeout(() => setLoading(false), 600);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-bg-base"
          aria-label="Loading"
          role="progressbar"
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(225,29,72,0.12)_0%,transparent_70%)] animate-glow-pulse" />
          </div>

          <div className="relative flex flex-col items-center gap-8">
            {/* Logo icon with spinning ring */}
            <div className="relative w-24 h-24">
              {/* Spinning arc ring */}
              <svg
                className="absolute inset-0 w-full h-full animate-loader-spin"
                viewBox="0 0 96 96"
                fill="none"
              >
                <circle
                  cx="48"
                  cy="48"
                  r="44"
                  stroke="var(--glass-border)"
                  strokeWidth="2"
                />
                <path
                  d="M48 4 A44 44 0 0 1 92 48"
                  stroke="#E11D48"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M48 92 A44 44 0 0 1 4 48"
                  stroke="#F43F5E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.5"
                />
              </svg>

              {/* Inner logo icon — code bracket from CFT logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
                  <path
                    d="M16 10L8 20L16 30"
                    stroke="var(--text-primary)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="animate-loader-bracket-left"
                  />
                  <rect
                    x="20"
                    y="13"
                    width="12"
                    height="2.5"
                    rx="1.25"
                    fill="var(--text-primary)"
                    opacity="0.5"
                    className="animate-loader-line-1"
                  />
                  <rect
                    x="20"
                    y="19"
                    width="8"
                    height="2.5"
                    rx="1.25"
                    fill="#E11D48"
                    opacity="0.7"
                    className="animate-loader-line-2"
                  />
                  <rect
                    x="20"
                    y="25"
                    width="10"
                    height="2.5"
                    rx="1.25"
                    fill="var(--text-primary)"
                    opacity="0.35"
                    className="animate-loader-line-3"
                  />
                </svg>
              </div>
            </div>

            {/* Brand text */}
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold tracking-[0.08em] text-text-primary">
                CODE
              </span>
              <span className="text-sm font-light tracking-[0.08em] text-text-muted">
                FLICK
              </span>
            </div>

            {/* Loading bar */}
            <div className="w-40 h-[2px] bg-glass-border rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-accent-primary-500 to-accent-primary-400 rounded-full animate-loader-bar" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
