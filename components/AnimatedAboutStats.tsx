'use client';

import { motion } from 'framer-motion';
import { Users, Globe, TrendingUp, Award } from 'lucide-react';
import CountUp from './CountUp';
import type { LucideIcon } from 'lucide-react';

type Stat = {
  value: string;
  label: string;
  iconName: string;
};

type Props = {
  stats: Stat[];
};

const iconMap: Record<string, LucideIcon> = {
  Users,
  Globe,
  TrendingUp,
  Award,
};

export default function AnimatedAboutStats({ stats }: Props) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map(({ value, label, iconName }, i) => {
        const Icon = iconMap[iconName] || Users;
        return (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' }}
            className="glass-card p-6 text-center group"
          >
            <div className="relative z-10">
              <Icon
                className="w-8 h-8 text-accent-primary-400 mx-auto mb-3 group-hover:text-accent-primary-300 transition-colors"
                aria-hidden="true"
              />
              <CountUp
                value={value}
                className="font-sans font-bold text-4xl text-white mb-1 block"
              />
              <p className="text-text-muted text-sm">{label}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
