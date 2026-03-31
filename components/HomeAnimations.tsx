'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { fadeUpVariant, staggerContainer } from '@/lib/animations';

type Props = {
  clients: string[];
};

export default function HomeAnimations({ clients }: Props) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="max-w-3xl"
    >
      {/* Badge chip */}
      <motion.div variants={fadeUpVariant}>
        <span className="inline-flex items-center gap-2 rounded-chip bg-white/[0.08] backdrop-blur-xl border border-white/[0.18] px-4 py-1.5 text-xs text-accent-primary-400 uppercase tracking-widest font-medium mb-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
          <span className="w-2 h-2 rounded-full bg-accent-primary-500 animate-glow-pulse" />
          Core IT & AI Solutions
        </span>
      </motion.div>

      {/* H1 with gradient text */}
      <motion.h1
        variants={fadeUpVariant}
        className="font-sans font-extrabold text-5xl sm:text-6xl xl:text-display leading-[1.05] mb-6"
      >
        From Software to AI —{' '}
        <span className="gradient-text">We Build Everything</span>
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        variants={fadeUpVariant}
        className="text-xl text-text-secondary max-w-xl leading-relaxed mb-10"
      >
        We help businesses across industries build, scale, and automate their digital systems — from custom software and AI solutions to cloud infrastructure and system integration. With offices in Bhopal, India and Doha, Qatar.
      </motion.p>

      {/* CTA row */}
      <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/contact"
          className="btn-primary inline-flex items-center justify-center gap-2 text-base hover:scale-[1.02] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-primary-500"
        >
          Get a Free Consultation
          <ArrowRight className="w-5 h-5" aria-hidden="true" />
        </Link>
        <Link
          href="/services"
          className="btn-secondary inline-flex items-center justify-center gap-2 text-base font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-primary-400"
        >
          Explore Services
        </Link>
      </motion.div>

      {/* Client strip */}
      <motion.div variants={fadeUpVariant} className="mt-20 pt-8 border-t border-white/[0.08]">
        <p className="text-xs font-medium text-text-muted uppercase tracking-widest mb-6">
          Trusted by global leaders
        </p>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
          {clients.map((client) => (
            <span
              key={client}
              className="text-sm font-medium text-text-muted hover:text-text-secondary transition-colors"
            >
              {client}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        variants={fadeUpVariant}
        className="mt-16 flex items-center gap-2 text-text-muted text-xs"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4" aria-hidden="true" />
        </motion.div>
        <span>Scroll to explore</span>
      </motion.div>
    </motion.div>
  );
}
