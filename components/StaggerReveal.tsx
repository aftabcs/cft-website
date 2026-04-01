'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  index: number;
};

export default function StaggerReveal({
  children,
  className,
  staggerDelay = 0.1,
  index,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * staggerDelay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
