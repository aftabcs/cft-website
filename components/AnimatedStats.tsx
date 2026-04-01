'use client';

import { motion } from 'framer-motion';
import CountUp from './CountUp';

type Stat = {
  value: string;
  label: string;
};

type Props = {
  stats: Stat[];
};

export default function AnimatedStats({ stats }: Props) {
  return (
    <div className="glass-card p-8 sm:p-12">
      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ value, label }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.15, ease: 'easeOut' }}
            className={`text-center ${i < stats.length - 1 ? 'lg:border-r lg:border-white/[0.06]' : ''}`}
          >
            <CountUp
              value={value}
              className="font-sans font-black text-display gradient-text mb-2 block"
            />
            <p className="text-text-secondary text-sm font-medium">{label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
