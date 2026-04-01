'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { fadeUpVariant, staggerContainer } from '@/lib/animations';

type Props = {
  clients: string[];
};

function FloatingCodeSnippets() {
  return (
    <div className="absolute inset-0 pointer-events-none hidden lg:block" aria-hidden="true">
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute top-[12%] right-[2%] code-snippet animate-code-float-1"
      >
        <span className="code-prompt">$</span>{' '}
        <span className="code-keyword">flutter</span> pub get
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute top-[32%] right-[0%] code-snippet animate-code-float-2"
      >
        <span className="code-prompt">$</span>{' '}
        <span className="code-keyword">git</span> push origin main
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.0, duration: 0.8 }}
        className="absolute top-[48%] right-[5%] code-snippet animate-code-float-3"
      >
        <span className="code-prompt">$</span>{' '}
        <span className="code-keyword">docker</span> compose up
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.4, duration: 0.8 }}
        className="absolute top-[62%] right-[8%] code-snippet animate-code-float-1"
        style={{ animationDelay: '2s' }}
      >
        <span className="code-prompt">$</span>{' '}
        <span className="code-keyword">npm</span> run build
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.8, duration: 0.8 }}
        className="absolute top-[78%] right-[3%] code-snippet animate-code-float-2"
        style={{ animationDelay: '4s' }}
      >
        <span className="code-prompt">$</span>{' '}
        <span className="code-keyword">cargo</span> build --release
      </motion.div>
    </div>
  );
}

export default function HomeAnimations({ clients }: Props) {
  return (
    <div className="relative">
      <FloatingCodeSnippets />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-3xl"
      >
        <motion.div variants={fadeUpVariant}>
          <span className="inline-flex items-center gap-2 rounded-chip bg-accent-primary-500/10 backdrop-blur-xl border border-accent-primary-500/20 px-4 py-1.5 text-xs text-accent-primary-400 uppercase tracking-[0.2em] font-semibold mb-8 shadow-[inset_0_1px_0_rgba(244,63,94,0.10)]">
            <span className="w-2 h-2 rounded-full bg-accent-primary-500 animate-glow-pulse shadow-[0_0_8px_rgba(225,29,72,0.50)]" />
            Core IT & AI Solutions
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUpVariant}
          className="font-sans font-black text-5xl sm:text-6xl xl:text-display leading-[0.95] mb-6 tracking-tight"
        >
          <span className="text-accent-primary-400">Code Flick</span>
          <br />
          <span className="text-text-primary">Technologies.</span>
        </motion.h1>

        <motion.p
          variants={fadeUpVariant}
          className="text-lg sm:text-xl text-text-secondary max-w-xl leading-relaxed mb-10"
        >
          Building fast, accessible products for the web and mobile. From Software to AI — We Build Everything.
        </motion.p>

        <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/services"
            className="btn-primary inline-flex items-center justify-center gap-2 text-base hover:scale-[1.02] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-primary-500"
          >
            View Our Work
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
          <Link
            href="/contact"
            className="btn-secondary inline-flex items-center justify-center gap-2 text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-primary-400"
          >
            Let&apos;s Talk
          </Link>
        </motion.div>

        <motion.div variants={fadeUpVariant} className="mt-20 pt-8 border-t border-glass-border">
          <p className="text-xs font-semibold text-text-muted uppercase tracking-[0.2em] mb-6">
            Trusted by global leaders
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {clients.map((client) => (
              <span
                key={client}
                className="text-sm font-medium text-text-muted hover:text-accent-primary-400 transition-colors duration-200"
              >
                {client}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUpVariant}
          className="mt-16 flex items-center gap-2 text-text-subtle text-xs uppercase tracking-widest"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-4 h-4" aria-hidden="true" />
          </motion.div>
          <span>Scroll</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
